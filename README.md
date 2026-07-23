# Leer Nederlands / Lern Deutsch

A single-user, local-first language-learning app. Built around scientifically-validated SLA techniques (FSRS spaced repetition, retrieval practice, interleaving, shadowing, minimal-pair perception, formulaic chunks, extensive reading) and powered by on-device speech via Apple's MLX framework — no cloud, no accounts, no subscriptions.

**Two languages, one app.** It ships with full **Dutch** (Amsterdam-flavoured) and **German** (Berlin-flavoured) decks — every card, sentence, scenario, grammar capsule, drill, and reading passage exists in both, hand-written for each. Flip between them with the 🇳🇱 / 🇩🇪 selector in the top bar; each language keeps its own separate progress, streak, and settings. The engine is language-agnostic — adding a third language is a data folder plus a small language pack (see below).

---

## Quick start

```bash
git clone https://github.com/RazhanHameed/learn-dutch.git
cd learn-dutch

# Option A — minimal: browser TTS only (Xander/Samantha on macOS)
./start.sh

# Option B — full speech stack: on-device Voxtral 4-bit + Whisper STT
./start-mlx.sh
```

`start.sh` opens `http://localhost:8123/` and works on any machine with Python 3.10+. `start-mlx.sh` additionally bootstraps a Python venv (via [uv](https://docs.astral.sh/uv/) when present), installs `mlx-audio[server,tts]`, downloads the Voxtral and Whisper weights on first run (~3.5 GB total), and routes Dutch + English through the local mlx-audio server for higher-quality voices and on-device speech recognition.

Mac with Apple Silicon recommended for the MLX path. The minimal `start.sh` works anywhere.

---

## What it does

### 8 study card types (all interleaved within sessions)

| Type | What you do | Why |
|---|---|---|
| **Recognise** (NL → EN) | Tap to flip the card | First-contact retrieval |
| **Recall** (EN → NL) | Speak it aloud, tap to check | Pushed output (Swain) |
| **Cloze** | Fill the blank in a Dutch sentence | Generation effect |
| **Reorder** | Tap shuffled words into the right order | Word-order awareness |
| **Listen-and-type** (vocab) | Hear it, type what you heard | Bottom-up listening |
| **Listen-and-type** (sentence) | Same, full sentence | Dictation-style decoding |
| **Multiple choice** | Pick the meaning from 4 options | Scaffolded for new cards |
| **Sentence recognise** | Translate a sentence to English | Pattern recognition |

Cards mature on FSRS-4.5: stability + difficulty per card, retrievability prediction, scheduled at 90% retention. New cards bias toward easier modes; mature cards get harder ones.

### 7 standalone drills

| Drill | Mechanic | Research basis |
|---|---|---|
| 🎙️ **Speaking** | Record yourself saying a target phrase. Whisper transcribes; word-level edit distance scores. | Pushed output, immediate feedback |
| 🌓 **Shadowing** | Hear Voxtral say a phrase, then echo it. Whisper transcribes your echo. | Whitworth 2025 systematic review |
| 👂 **Minimal pairs** | Hear one of two near-identical Dutch words, pick which. | HVPT (Dherbey Chapuis & Berthele 2024) |
| 🧩 **Chunks** | Translate 33 high-frequency formulaic sequences as units. | Hou et al. 2018 — chunks are processed holistically |
| 🔢 **Numbers** | Type the Dutch for any 0–100 (vierentwintig drill). | Closes the tens/ones-swap blind spot |
| 🕗 **Times** | "08:30" → "half negen". | Half-hour pivot is a notorious learner trap |
| 🧬 **Conjugation** | Pronoun + infinitive → form. Top 25 verbs. | Form-focused practice |

### Browse content

- **Vocabulary** — 232 cards across 11 themes (greetings, café, transport, work, daily, numbers, etc.). Each card carries gender (`de`/`het`), part of speech, an example sentence, and a free-form note for cultural details.
- **Sentence patterns** — Tim Ferriss's 12 diagnostic sentences + V2 rule + ordering + work + negation + daily phrases.
- **Scenario dialogues** — 10 hand-written Amsterdam scripts (café, AH, tram, standup, borrel, pharmacy, directions, bike, landlord, restaurant). Each has a "Narrow listen · 3×" button that loops the dialogue with alternating Voxtral voices.
- **Grammar capsules** — V2, modal verbs, de/het, niet vs geen, separable verbs, pronoun forms, Time-Manner-Place ordering, throaty G + ui/eu/ij sounds, plurals.
- **Reading** — 6 short Dutch passages at A1–B1 difficulty. Tap any word for an inline gloss.

### Quality-of-life features

- **Metalinguistic feedback** — wrong typed answers get classified (niet vs geen, de/het, V2 violation, missing -t, jij vs je, typo, word order) with a one-line rule reminder.
- **Output-prompted noticing chips** — after a low-accuracy speaking attempt, tap which dimension was hard (word order / pronunciation / vocabulary / verb form / speed). Per Swain & Schmidt: explicit reflection triggers acquisition.
- **Pretest mode** — "Challenge me · 5" on any vocab theme tests unseen cards before you study them. Errorful pretests boost subsequent retention (Kornell).
- **Backup banner** — auto-prompts to download a JSON snapshot when the last export is ≥ 7 days old.
- **English-respelling hints** — small italic guide under each Dutch word ("say it like *kheh-zellikh*"). Algorithmic, approximate, but useful.
- **Selectable text on desktop** — copy any Dutch word/sentence to clipboard with the I-beam cursor; flashcard click-to-flip is suppressed when text is selected.
- **Mobile-first responsive** — single-column stack on phones, 2-column dashboard + 4-col vocab grid + 2-col stats on desktop (≥ 960 px).
- **Light/dark/auto theme** — toggle in the top-right corner.

---

## Two run modes

### `start.sh` (no setup, works everywhere)

Bootstrap-free. Just a static-server wrapper.

- Web Speech API (browser TTS) for audio
- macOS/iOS: ships excellent Dutch (Xander, Claire) and English (Samantha) voices
- Linux/Windows: voice quality varies by system
- No speaking-drill scoring (Whisper isn't running)
- No on-device STT

```bash
./start.sh           # default port 8123
./start.sh 9000      # custom port
```

### `start-mlx.sh` (full speech pipeline, Apple Silicon recommended)

Adds [`mlx-audio`](https://github.com/Blaizzy/mlx-audio) — Apple's MLX framework — for on-device TTS via Voxtral 4-bit and STT via Whisper-large-v3-turbo. Same web app, but:

- Voxtral 9-language voices, including male + female Dutch and 5 English variants
- Speaking + shadowing drills work end-to-end with real transcription scoring
- Reader auto-pronunciation uses Voxtral instead of system voices

**First run setup** (one-time, ~5–10 minutes):

1. The script detects [`uv`](https://docs.astral.sh/uv/) and uses `uv venv` if present (handles standalone Python 3.12 builds without `ensurepip`). Otherwise falls back to `python -m venv`.
2. Installs `mlx-audio[server,tts]` plus `mistral-common[audio]>=1.11` (Voxtral's tokenizer needs the newer field schema).
3. Spawns `mlx_audio.server` on `127.0.0.1:5500` with permissive CORS.
4. Pre-warms Voxtral (`mlx-community/Voxtral-4B-TTS-2603-mlx-4bit`, ~2.5 GB).
5. Pre-warms Whisper (`mlx-community/whisper-large-v3-turbo-asr-fp16`, ~800 MB) — set `PREWARM_STT=0` to skip.
6. Starts the static server on `8123` and opens the browser at `http://localhost:8123/?tts=http://127.0.0.1:5500`.

Subsequent runs take ~30–60 s to load weights into memory.

**Useful env vars:**

```bash
WEB_PORT=9000 ./start-mlx.sh       # change web port
TTS_PORT=5501 ./start-mlx.sh       # change TTS port
PREWARM_STT=0 ./start-mlx.sh       # skip Whisper download (TTS only)
```

Stop both servers with **Ctrl+C** in the terminal — the trap cleans up the background `mlx_audio.server`.

---

## Project structure

```
learn-dutch/
├── index.html                 # single-page app shell (loads both decks + both language packs)
├── start.sh                   # minimal launcher (browser TTS only)
├── start-mlx.sh               # full launcher (uv + mlx-audio + Voxtral + Whisper)
├── css/
│   └── styles.css             # mobile-first; desktop grid at min-width: 960px
└── js/
    ├── app.js                 # router, all 4 views, all 8 card types, all 7 drills, language switcher
    ├── audio.js               # MLX server probe + fetch; Web Speech fallback (target voice is set per language)
    ├── srs.js                 # FSRS-4.5 with SM-2 backward compat (language-agnostic)
    ├── storage.js             # localStorage wrapper + backup helpers (one key per language)
    ├── drills.js              # generic drill controllers; delegates spelling/diagnosis to the active language pack
    ├── lang.js                # language registry + active-language manager (deck swap)
    ├── lang/
    │   ├── nl.js              # Dutch pack: numbers, time, respeller, error diagnosis, tips, calendar, voices
    │   └── de.js              # German pack: same surface, German rules
    └── data/
        ├── _boot.js           # sets up the per-language deck registry (window.__DECK)
        ├── nl/                # Dutch deck (Amsterdam): vocab, sentences, scenarios, grammar,
        │                      #   conjugations, chunks, minimal_pairs, passages
        └── de/                # German deck (Berlin): same eight files, hand-written in German
```

Each data file registers its arrays under `window.__DECK.<lang>`; `Lang.use(id)` then points the bare globals (`VOCAB`, `SENTENCES`, …) at the active language's deck, so the rest of the engine reads them unchanged.

No build step. No `package.json`. Open `index.html` in a browser and the app runs.

---

## Tech stack

- **Frontend:** vanilla HTML/CSS/JS, ~5,800 lines total. No frameworks, no bundler.
- **State:** `localStorage` (single JSON blob, ~50 KB at full scale)
- **SRS:** FSRS-4.5 in plain JS, ~220 lines
- **TTS:** [Voxtral-4B-TTS-2603-mlx-4bit](https://huggingface.co/mlx-community/Voxtral-4B-TTS-2603-mlx-4bit) via [mlx-audio](https://github.com/Blaizzy/mlx-audio), with Web Speech API as fallback
- **STT:** [whisper-large-v3-turbo-asr-fp16](https://huggingface.co/mlx-community/whisper-large-v3-turbo-asr-fp16) via mlx-audio
- **Audio recording:** browser MediaRecorder API + `audio/webm;codecs=opus`
- **Local TTS server:** FastAPI + uvicorn (shipped by mlx-audio)
- **Python version manager:** [uv](https://docs.astral.sh/uv/) preferred, system Python fallback

---

## Customising for your own life

The data files are intentionally small, hand-readable JS objects. To add your own content:

### Add a new vocab card

`js/data/vocab.js`:

```js
{ id: "v_x99", nl: "fietsenmaker", en: "bike repair shop", pos: "noun", gender: "de", theme: "transport",
  example: { nl: "De fietsenmaker is om de hoek.", en: "The bike repair shop is around the corner." },
  note: "Where you'll spend €15 every couple months in Amsterdam." }
```

### Add your own scenario

`js/data/scenarios.js` — there's a marked slot at the bottom with the schema:

```js
{
  id: "sc_yours",
  title: "Your specific Tuesday standup",
  icon: "🎯",
  setting: "Two-sentence context.",
  dialogue: [
    { speaker: "Lead", nl: "Hoe ging het sprint review?", en: "How did the sprint review go?" },
    { speaker: "You",  nl: "Goed, we hebben de feature flag uitgezet.", en: "Good, we turned the feature flag off." },
  ],
  notes: ["What's specific to your team that you couldn't get from a generic textbook."],
}
```

### Add a reading passage

`js/data/passages.js` — Dutch text + an English translation paragraph + a `glosses{}` map for words that aren't in `VOCAB`:

```js
{
  id: "p_my_story",
  title: "Mijn verhaal",
  level: "A2",
  blurb: "Short blurb shown in the passage list.",
  en: "Same blurb in English.",
  paragraphs: ["First paragraph.", "Second paragraph."],
  glosses: { "verhaal": "story", "weekendweer": "weekend weather" },
}
```

After editing any data file, just reload the page — no build, no restart needed.

### Add a third language

The app is already multi-language (Dutch + German). To add a third — say French:

1. **Data:** create `js/data/fr/` with the eight data files, each registering into `window.__DECK.fr` (copy the shape of `js/data/de/*.js`), and add their `<script>` tags to `index.html`.
2. **Language pack:** create `js/lang/fr.js` that calls `Lang.register({ id: "fr", name: "French", brand: "Apprends le français", flag: "🇫🇷", langCode: "fr-FR", storageKey: "lern-fr:v1", … })` with the French number/time spelling, respeller, error diagnosis, tips, calendar, and Voxtral voices. Add its `<script>` after `js/lang/de.js`.

That's it — the selector, per-language progress, voices, and drills pick it up automatically. Voxtral supports `nl`, `en`, `fr`, `es`, `de`, `it`, `pt`, `ar`, `hi` out of the box; Whisper handles ~99 languages.

---

## The science

This app exists because most language apps optimise for engagement metrics over learning outcomes. The literature is consistent on what actually works:

| Technique | Where it's wired in | Source |
|---|---|---|
| Spaced repetition with adaptive intervals | `srs.js` (FSRS-4.5) | Cepeda et al. 2008 — optimal gap is 5–20% of retention interval |
| Retrieval practice (testing effect) | Every card type | Roediger & Karpicke 2006 — 50% recall boost vs re-reading |
| Interleaving | Random card-type per session, mixed themes | Bjork; Nakata & Suzuki 2019 (L2 grammar) |
| Desirable difficulty | Mature cards skew toward harder modes | Bjork 1994 |
| Pushed output | Recall, cloze, reorder, **speaking** | Swain Output Hypothesis 1995 |
| Comprehensible input | Scenarios + Reading at i+1 | Krashen 1985, 1996 |
| Errorful learning > errorless | Wrong answers are allowed; correct answer follows | Tandfonline 2020 |
| Lexical chunks / formulaic processing | **Chunks drill** — 33 multi-word units drilled holistically | Hou et al. 2018; Vilkaitė 2016 |
| Shadowing | **Shadowing drill** — listen + echo + score | Whitworth 2025 systematic review |
| Minimal-pair / HVPT phonetic training | **Minimal pairs drill** | Dherbey Chapuis & Berthele 2024 |
| Errorful pretest effect | **Challenge me** mode on theme pages | Kornell |
| Metalinguistic feedback > recasts | Diagnoser tags wrong answers with error type + rule | Cambridge Handbook of Corrective Feedback 2024 |
| Output-prompted noticing | Reflection chips after low-accuracy speaking | Swain & Lapkin 1995; Schmidt 1990 |
| Narrow listening | Scenario "Narrow listen · 3×" with alternating voices | Krashen 1996 |
| Extensive reading | **Reader** with tap-to-translate | Liu & Zhang 2018 meta-analysis |

A 2025 meta-analysis ([Lyu, IJAL](https://onlinelibrary.wiley.com/doi/full/10.1111/ijal.12668)) found chatbot-based L2 learning has an effect size of **d = 0.608** (medium-large). The compound effect of stacking the techniques above is the bet behind this app.

---

## Data + privacy

- Everything is local. The app's state is one JSON blob in your browser's `localStorage`.
- No analytics. No telemetry. No accounts. No outbound network requests except the optional fonts CDN and (when MLX is enabled) `localhost:5500`.
- The MLX server runs entirely on your machine — your speech recordings never leave the device.

**Backup discipline:** browser `localStorage` survives most things but can be cleared by "Clear browsing data" or a browser switch. The app shows a banner when your last export is ≥ 7 days old. Click it. The backup is a single dated `leer-nl-backup-YYYY-MM-DD.json` in your Downloads folder — drag one to Dropbox/iCloud once and forget about it.

To restore: Stats → Backup & reset → Import JSON.

---

## Roadmap (ideas, not commitments)

- File System Access API for one-pick auto-backup (Chromium-only, would write silently to a chosen file)
- Multi-language deck switching (the engine is agnostic; just needs a profile selector)
- A "review intensity" slider that exposes FSRS's retention target (90% default → 95% for high-stakes prep)
- WebRTC speaker comparison: side-by-side waveforms of your shadow vs Voxtral's
- A curated "Day 1–7" guided plan view that walks through everything systematically

---

## Contributing

This is a personal learning tool, but if you find a bug or want to add scenarios from your own city/job, PRs welcome. The data files are designed to be hand-edited, so most contributions don't require touching the JS.

---

## License

MIT. Use it, fork it, swap the data files for whatever language you want to learn.

---

## Credits

- [mlx-audio](https://github.com/Blaizzy/mlx-audio) by Prince Canuma for the on-device MLX speech runtime
- [Voxtral-4B-TTS-2603](https://huggingface.co/mistralai/Voxtral-4B-TTS-2603) by Mistral AI
- [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) by OpenAI, MLX port via mlx-community
- FSRS-4.5 by [open-spaced-repetition](https://github.com/open-spaced-repetition)
- Tim Ferriss for the diagnostic-dozen sentence-deconstruction approach
- The SLA literature compiled by Bjork, Krashen, Swain, Schmidt, Cepeda, Roediger and many others
