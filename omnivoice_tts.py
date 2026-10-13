"""OmniVoice (k2-fsa/OmniVoice) TTS for the languages Supertonic doesn't cover —
Central Kurdish / Sorani (`ckb`) and Northern Kurdish / Kurmanji (`kmr`).

Used offline only: build_static_audio.py pre-renders every Kurdish clip to
audio/<hash>.mp3, and tools/omnivoice_voices.py designs + locks the voices.

Voices are fixed by voice CLONING from an approved reference clip, so every
clip of a language sounds like the same speaker:

    tts_voices/<lang>/<voice>.wav   reference audio (3-10 s)
    tts_voices/<lang>/<voice>.txt   its transcript (same language)

`<voice>` is the pack's voice value (M1/F1), i.e. the same string that goes
into the clip hash.
"""
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
VOICES_DIR = os.path.join(ROOT, "tts_voices")
MODEL_ID = os.environ.get("OMNIVOICE_MODEL", "k2-fsa/OmniVoice")
NUM_STEP = int(os.environ.get("OMNIVOICE_STEPS", "32"))
BATCH = int(os.environ.get("OMNIVOICE_BATCH", "4"))  # 4 fits an 8 GB GPU in fp32


# ---------------------------------------------------------------------------
# Text normalisation. OmniVoice reads digits badly (or in the wrong language),
# so numbers must reach it as words. The decks are written with number words
# already; this is the safety net for anything that slips through.
# ---------------------------------------------------------------------------
_NUMS = {
    "ckb": {
        "and": " و ",
        "ones": ["سفر", "یەک", "دوو", "سێ", "چوار", "پێنج", "شەش", "حەوت", "هەشت", "نۆ", "دە",
                 "یازدە", "دوازدە", "سێزدە", "چواردە", "پازدە", "شازدە", "حەڤدە", "هەژدە", "نۆزدە"],
        "tens": {20: "بیست", 30: "سی", 40: "چل", 50: "پەنجا", 60: "شەست", 70: "حەفتا", 80: "هەشتا", 90: "نەوەد"},
        "hundred": "سەد", "thousand": "هەزار", "million": "ملیۆن",
    },
    "kmr": {
        "and": " û ",
        "ones": ["sifir", "yek", "du", "sê", "çar", "pênc", "şeş", "heft", "heşt", "neh", "deh",
                 "yanzdeh", "diwanzdeh", "sêzdeh", "çardeh", "panzdeh", "şanzdeh", "hevdeh", "hîjdeh", "nozdeh"],
        "tens": {20: "bîst", 30: "sî", 40: "çil", 50: "pêncî", 60: "şêst", 70: "heftê", 80: "heştê", 90: "nod"},
        "hundred": "sed", "thousand": "hezar", "million": "milyon",
    },
}
# Arabic-Indic (٠-٩) and Extended/Persian (۰-۹) digits -> ASCII.
_DIGITS = str.maketrans("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹", "01234567890123456789")


def number_to_words(n, lang):
    """Kurdish cardinal for 0 <= n < 10**9: tens/hundreds/thousands joined by and
    (و / û), e.g. 1932 -> 'hezar û neh sed û sî û du'."""
    w = _NUMS[lang]
    if n < 20:
        return w["ones"][n]
    if n < 100:
        t, o = n - n % 10, n % 10
        return w["tens"][t] + (w["and"] + w["ones"][o] if o else "")
    for size, name in ((10**6, "million"), (1000, "thousand"), (100, "hundred")):
        if n >= size:
            head, rest = divmod(n, size)
            # "sed"/"hezar" alone for one; "du sed", "sê hezar" otherwise.
            out = w[name] if head == 1 else number_to_words(head, lang) + " " + w[name]
            return out + (w["and"] + number_to_words(rest, lang) if rest else "")
    raise ValueError(n)


def normalize_text(text, lang):
    """Text as OmniVoice should read it. NOT used for the clip hash — that stays
    the displayed text, so the app can find the clip."""
    t = str(text).translate(_DIGITS)
    if lang in _NUMS:
        w = _NUMS[lang]
        # 9:30 -> nine and thirty (times are written out in the decks; fallback only)
        t = re.sub(r"(\d+):(\d\d)",
                   lambda m: number_to_words(int(m[1]), lang) + w["and"] + number_to_words(int(m[2]), lang), t)
        t = re.sub(r"\d+", lambda m: number_to_words(int(m[0]), lang) if len(m[0]) <= 9 else
                   " ".join(w["ones"][int(d)] for d in m[0]), t)
        t = t.replace("'", "")             # Kurmanji 9'an -> nehan
    # Quote marks carry no sound and can confuse the tokenizer.
    t = re.sub(r"[«»\"“”]", "", t)
    return re.sub(r"\s+", " ", t).strip()


# ---------------------------------------------------------------------------
# Model + voices
# ---------------------------------------------------------------------------
def load_model():
    import torch
    from omnivoice import OmniVoice
    if torch.cuda.is_available():
        # fp16 is slow / unsupported on older GPUs (e.g. Pascal); bf16/fp16 only on sm_70+.
        major, _ = torch.cuda.get_device_capability()
        dtype = torch.float16 if major >= 7 else torch.float32
        device = "cuda:0"
    elif getattr(torch.backends, "mps", None) and torch.backends.mps.is_available():
        dtype, device = torch.float16, "mps"
    else:
        dtype, device = torch.float32, "cpu"
    return OmniVoice.from_pretrained(MODEL_ID, device_map=device, dtype=dtype)


def voice_ref(lang, voice):
    base = os.path.join(VOICES_DIR, lang, voice)
    return base + ".wav", base + ".txt"


def load_voice(model, lang, voice):
    wav, txt = voice_ref(lang, voice)
    if not (os.path.exists(wav) and os.path.exists(txt)):
        raise FileNotFoundError(
            f"No approved OmniVoice reference for {lang}/{voice} ({wav}). "
            f"Design one with: tools/omnivoice_voices.py design {lang}")
    return model.create_voice_clone_prompt(ref_audio=wav, ref_text=open(txt, encoding="utf-8").read().strip())


def synthesize(model, texts, lang, prompt=None, instruct=None):
    """List of texts -> list of float32 numpy arrays at model.sampling_rate.
    Runs in chunks of BATCH to bound GPU memory."""
    if isinstance(instruct, str) or instruct is None:
        instruct = [instruct] * len(texts)
    out = []
    for b in range(0, len(texts), BATCH):
        chunk = texts[b:b + BATCH]
        n = len(chunk)
        kw = {"num_step": NUM_STEP}
        if prompt is not None:
            kw["voice_clone_prompt"] = [prompt] * n
        elif instruct[0] is not None:
            kw["instruct"] = list(instruct[b:b + BATCH])
        out += model.generate(text=[normalize_text(t, lang) for t in chunk], language=[lang] * n, **kw)
    return out


def _periodic_ratio(y):
    """Fast voicing estimate (16 kHz input): fraction of 40 ms frames that are
    loud and strongly periodic in the 60-400 Hz pitch range."""
    import librosa
    import numpy as np
    fl, hop = 640, 160
    fr = librosa.util.frame(y, frame_length=fl, hop_length=hop).T
    fr = fr - fr.mean(1, keepdims=True)
    energy = (fr ** 2).sum(1)
    ac = np.fft.irfft(np.abs(np.fft.rfft(fr, n=2 * fl)) ** 2)[:, :fl]
    ac = ac / np.maximum(ac[:, :1], 1e-9)
    peak = ac[:, 16000 // 400:16000 // 60].max(1)
    return float(((peak > 0.5) & (energy > 0.01 * energy.max())).mean())


def voiced_ratio(audio, sample_rate):
    """Fraction of frames with a detected pitch. Real speech is ~0.4-0.9; a
    whispered/garbled take (OmniVoice's failure mode on short words) is ~0.
    A cheap periodicity check clears obvious speech; only suspicious takes pay
    for pyin (~1 s of CPU per second of audio)."""
    import librosa
    import numpy as np
    y = librosa.resample(np.asarray(audio, dtype=np.float32), orig_sr=sample_rate, target_sr=16000)
    if len(y) < 1600:
        return 0.0
    if _periodic_ratio(y) >= 0.3:
        return 1.0
    _, voiced, _ = librosa.pyin(y, fmin=60, fmax=400, sr=16000)
    return float(voiced.mean())


def to_mp3(audio, sample_rate, bitrate=48):
    import lameenc
    import numpy as np
    a = np.clip(np.asarray(audio, dtype=np.float32).squeeze(), -1.0, 1.0)
    enc = lameenc.Encoder()
    enc.set_bit_rate(bitrate)
    enc.set_in_sample_rate(int(sample_rate))
    enc.set_channels(1)
    enc.set_quality(5)
    return enc.encode((a * 32767.0).astype("<i2").tobytes()) + enc.flush()
