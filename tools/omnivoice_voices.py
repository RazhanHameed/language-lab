#!/usr/bin/env python3
"""Design, audition and lock the OmniVoice voices for the Kurdish decks.

Every Kurdish clip is voice-CLONED from one approved reference per (lang, voice),
so the whole deck sounds like the same speaker. Workflow:

  1. design   — render candidate voices (voice-design attributes) reading a
                reference sentence:   omnivoice_voices.py design ckb
  2. listen   — open tts_voices/candidates/index.html (one page, all candidates)
  3. pick     — lock one per voice slot (M1 = male, F1 = female):
                omnivoice_voices.py pick ckb M1 M-2
  4. samples  — render a fixed test set (numbers, times, sentences, the reading
                article) with the locked voices, then re-check the page:
                omnivoice_voices.py samples ckb

Locked references live in tts_voices/<lang>/<voice>.{wav,txt} and are committed;
candidates/ is scratch (git-ignored). Run with .venv-omnivoice/bin/python.
"""
import html
import json
import os
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import omnivoice_tts as ov  # noqa: E402

CAND = os.path.join(ov.VOICES_DIR, "candidates")

# Reference sentence each candidate reads (~5 s): becomes the clone transcript.
REF_TEXT = {
    "ckb": "سڵاو، بەخێربێن. ئەمڕۆ پێکەوە کوردی دەخوێنینەوە، بە هێواشی و بە ڕوونی.",
    "kmr": "Silav, hûn bi xêr hatin. Îro em ê bi hev re kurmancî bixwînin, hêdî û zelal.",
    "ps": "سلام، ښه راغلاست. نن به موږ په ګډه پښتو ولولو، ورو او په ښکاره ډول.",
}
DESIGNS = {
    "M": ["male, middle-aged, moderate pitch", "male, young adult, moderate pitch",
          "male, middle-aged, low pitch", "male, young adult, low pitch"],
    "F": ["female, middle-aged, moderate pitch", "female, young adult, moderate pitch",
          "female, middle-aged, low pitch", "female, young adult, high pitch"],
}
SLOTS = {"M1": "M", "F1": "F"}
SAMPLES = {
    "ckb": [
        "سڵاو", "سوپاس", "فەرموو", "کەر", "کەڕ", "شیر", "شێر",
        "بیست و یەک", "چل و حەوت", "سەد", "هەشت و نیو", "چارەک بۆ نۆ",
        "کاتژمێر دە کۆبوونەوەیەکم هەیە.",
        "شەمەندەفەر لە سەکۆی ژمارە پێنج دەڕوات.",
        "چایەکی بێ شەکرم دەوێت، تکایە.",
        "کوردیی ناوەندی بە ئەلفوبێیەکی عەرەبی دەنووسرێت. لە ڕاستەوە بۆ چەپ دەخوێنرێتەوە، وەک عەرەبی و فارسی. ئەلفوبێکە نزیکەی سی و چوار پیتی هەیە.",
    ],
    "kmr": [
        "Silav", "Spas", "Fermo", "ker", "kêr", "kur", "kûr",
        "bîst û yek", "çil û heft", "sed", "heşt û nîv", "çaryek kêm neh",
        "Saet dehan civîna min heye.",
        "Trên ji sekoya pêncemîn diçe.",
        "Çayek bê şekir, ji kerema xwe.",
        "Kurmancî bi alfabeya latînî tê nivîsandin. Ev alfabe di sala hezar û neh sed û sî û du de ji aliyê Celadet Alî Bedirxan ve, di kovara Hawarê de, hat belavkirin.",
    ],
    "ps": [
        "سلام", "مننه", "ښه راغلاست", "ښار", "شار", "ږمنځ", "زوی", "ځای", "څوک",
        "یو ویشت", "اووه څلوېښت", "سل", "اته نیمې", "نهه بجې کم پاو",
        "په لسو بجو زما غونډه ده.",
        "اورګاډی له پنځم پلیټفارم څخه ځي.",
        "یوه پیاله چای بې بورې، مهرباني وکړئ.",
        "پښتو په عربي لیکدود لیکل کېږي. له ښي خوا څخه کیڼ لور ته لوستل کېږي، لکه دري او عربي. د پښتو الفبا څلوېښت توري لري.",
    ],
}


def write_wav(path, audio, sr):
    import soundfile as sf
    os.makedirs(os.path.dirname(path), exist_ok=True)
    sf.write(path, audio, sr)


def design(lang):
    model = ov.load_model()
    out = os.path.join(CAND, lang)
    shutil.rmtree(out, ignore_errors=True)
    meta = []
    for g, instructs in DESIGNS.items():
        audios = ov.synthesize(model, [REF_TEXT[lang]] * len(instructs), lang, instruct=instructs)
        for i, (ins, a) in enumerate(zip(instructs, audios), 1):
            name = f"{g}-{i}"
            write_wav(os.path.join(out, name + ".wav"), a, model.sampling_rate)
            meta.append({"name": name, "instruct": ins, "seconds": round(len(a) / model.sampling_rate, 1)})
    json.dump({"text": REF_TEXT[lang], "candidates": meta}, open(os.path.join(out, "meta.json"), "w"),
              ensure_ascii=False, indent=1)
    page()
    print(f"[voices] {len(meta)} {lang} candidates -> {out}")


def pick(lang, voice, cand):
    src = os.path.join(CAND, lang, cand + ".wav")
    if voice not in SLOTS or not os.path.exists(src):
        sys.exit(f"usage: pick <lang> <{'|'.join(SLOTS)}> <candidate, e.g. M-2>  ({src} missing?)")
    wav, txt = ov.voice_ref(lang, voice)
    os.makedirs(os.path.dirname(wav), exist_ok=True)
    shutil.copy(src, wav)
    open(txt, "w", encoding="utf-8").write(REF_TEXT[lang] + "\n")
    print(f"[voices] locked {lang}/{voice} <- {cand}")


def samples(lang):
    model = ov.load_model()
    out = os.path.join(CAND, lang, "samples")
    shutil.rmtree(out, ignore_errors=True)
    rows = []
    for voice in SLOTS:
        if not os.path.exists(ov.voice_ref(lang, voice)[0]):
            print(f"[voices] {lang}/{voice} not locked yet — skipping")
            continue
        prompt = ov.load_voice(model, lang, voice)
        audios = ov.synthesize(model, SAMPLES[lang], lang, prompt=prompt)
        for i, (t, a) in enumerate(zip(SAMPLES[lang], audios), 1):
            name = f"{voice}-{i:02d}"
            write_wav(os.path.join(out, name + ".wav"), a, model.sampling_rate)
            rows.append({"name": name, "text": t, "spoken": ov.normalize_text(t, lang)})
    json.dump(rows, open(os.path.join(out, "meta.json"), "w"), ensure_ascii=False, indent=1)
    page()
    print(f"[voices] {len(rows)} {lang} samples -> {out}")


def page():
    """One review page for every language's candidates + samples."""
    parts = ["<!doctype html><meta charset=utf-8><title>OmniVoice review</title>",
             "<style>body{font:15px system-ui;max-width:900px;margin:24px auto;padding:0 16px}"
             "td{padding:4px 8px;vertical-align:middle}.k{font-size:18px}audio{height:32px}</style>",
             "<h1>OmniVoice — voice review</h1>"]
    for lang in sorted(REF_TEXT):
        d = os.path.join(CAND, lang)
        dirn = "rtl" if lang in ("ckb", "ps") else "ltr"
        locked = [v for v in SLOTS if os.path.exists(ov.voice_ref(lang, v)[0])]
        parts.append(f"<h2>{lang} <small>(locked: {', '.join(locked) or 'none'})</small></h2>")
        for v in locked:
            parts.append(f"<p>{v} reference: <audio controls preload=none src='../{lang}/{v}.wav'></audio></p>")
        mf = os.path.join(d, "meta.json")
        if os.path.exists(mf):
            m = json.load(open(mf))
            parts.append(f"<p class=k dir={dirn}>{html.escape(m['text'])}</p><table>")
            for c in m["candidates"]:
                parts.append(f"<tr><td><b>{c['name']}</b></td><td>{c['instruct']}</td><td>{c['seconds']}s</td>"
                             f"<td><audio controls preload=none src='{lang}/{c['name']}.wav'></audio></td></tr>")
            parts.append("</table>")
        sf = os.path.join(d, "samples", "meta.json")
        if os.path.exists(sf):
            parts.append("<h3>Samples (locked voices)</h3><table>")
            for r in json.load(open(sf)):
                parts.append(f"<tr><td><b>{r['name']}</b></td><td class=k dir={dirn}>{html.escape(r['text'])}</td>"
                             f"<td><audio controls preload=none src='{lang}/samples/{r['name']}.wav'></audio></td></tr>")
            parts.append("</table>")
    os.makedirs(CAND, exist_ok=True)
    open(os.path.join(CAND, "index.html"), "w", encoding="utf-8").write("\n".join(parts))


if __name__ == "__main__":
    cmd, *args = sys.argv[1:] or ["help"]
    if cmd == "design" and len(args) == 1 and args[0] in REF_TEXT:
        design(args[0])
    elif cmd == "pick" and len(args) == 3:
        pick(*args)
    elif cmd == "samples" and len(args) == 1 and args[0] in REF_TEXT:
        samples(args[0])
    else:
        sys.exit(__doc__)
