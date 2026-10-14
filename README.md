# Language Lab

**Learn Dutch, German, Central Kurdish (Sorani) or Northern Kurdish (Kurmanji) from zero to B1.**

**▶ Try it: <https://razhanhameed.github.io/language-lab/>** (no sign-up, no install; works on phones)

Language Lab is a free, open-source, local-first language-learning web app. It is built around learning techniques with solid research behind them: FSRS spaced repetition, retrieval practice, interleaving, shadowing, minimal-pair listening, formulaic chunks and extensive reading. There are no accounts, no ads and no tracking. Your progress stays in your browser.

| | Language | Script | Voice |
|---|---|---|---|
| 🇳🇱 | **Dutch** (Amsterdam-flavoured) | Latin | Supertonic-3 |
| 🇩🇪 | **German** (Berlin-flavoured) | Latin | Supertonic-3 |
| ☀️ | **Central Kurdish / Sorani** | Arabic-based, right-to-left | OmniVoice |
| 🏔️ | **Northern Kurdish / Kurmanji** | Latin (Hawar alphabet) | OmniVoice |

Every card, sentence, dialogue, grammar capsule, drill and reading passage is written separately for each language, not machine-translated from one master deck. Switch languages from the selector in the top bar, or link straight to one with `?lang=nl`, `?lang=de`, `?lang=ckb` or `?lang=kmr`. Each language keeps its own progress, streak and settings.

---

## Contents

- [What's inside](#whats-inside)
- [How to use it](#how-to-use-it)
- [Running it locally](#running-it-locally)
- [How the audio works](#how-the-audio-works)
- [Project structure](#project-structure)
- [Editing and adding content](#editing-and-adding-content)
- [Adding a language](#adding-a-language)
- [The science](#the-science)
- [Data and privacy](#data-and-privacy)
- [Contributing](#contributing)
- [License and credits](#license-and-credits)

---

## What's inside

### Content per language (A1 → B1)

| | Dutch | German | Sorani | Kurmanji |
|---|---|---|---|---|
| Vocabulary cards | 508 | 538 | 498 | 499 |
| Vocabulary themes | 21 | 22 | 21 | 21 |
| Sentence patterns | 106 | 146 | 106 | 106 |
| Scenario dialogues | 16 | 23 | 16 | 16 |
| Grammar capsules | 21 | 21 | 21 | 21 |
| Reading passages | 12 | 12 | 13 | 13 |
| Chunks (set phrases) | 76 | 74 | 77 | 77 |
| Conjugation verbs | 40 | 40 | 40 | 41 |
| Minimal pairs | 22 | 23 | 22 | 22 |
| Pronunciation guide | 16 sections | 16 sections | 16 sections | 16 sections |

- **Vocabulary**: survival themes (greetings, café, transport, work, numbers, …) and B1 themes (health, home, food, people, travel, nature, media, opinions, connectors), chosen by frequency. Each card has its part of speech (and gender where relevant), an example sentence and a usage or culture note.
- **Sentence patterns**: word-order diagnostics, negation and everyday phrases, then B1 sets for telling stories in the past, giving opinions and linking ideas.
- **Scenario dialogues**: café, supermarket, tram, pharmacy, landlord, … and at B1 a doctor's visit, a job interview, a complaint and a discussion. "Narrow listen · 3×" loops a dialogue with alternating voices.
- **Grammar capsules**: short, example-led explanations. The Kurdish decks cover their own core, such as past-tense ergativity, ezafe, clitics, the subjunctive, conditionals and the passive.
- **Reading**: stories, opinion pieces, emails and how-tos from A1 to B1, plus an article on how each Kurdish script is read. Tap any word for a gloss and its pronunciation.
- **Pronunciation guide**: a long, systematic article per language (for example, how German spelling maps to sound by rule), with about 230 playable examples each and read-aloud practice sentences at the end.

### 8 study card types (interleaved within each session)

| Type | What you do | Why |
|---|---|---|
| **Recognise** (target → English) | Tap to flip the card | First-contact retrieval |
| **Recall** (English → target) | Say it aloud, tap to check | Pushed output (Swain) |
| **Cloze** | Fill the blank in a sentence | Generation effect |
| **Reorder** | Tap shuffled words into order | Word-order awareness |
| **Listen-and-type** (word) | Hear it, type it | Bottom-up listening |
| **Listen-and-type** (sentence) | Same, for a whole sentence | Dictation-style decoding |
| **Multiple choice** | Pick the meaning from 4 options | Scaffold for brand-new cards |
| **Sentence recognise** | Translate a sentence to English | Pattern recognition |

Cards are scheduled with FSRS-4.5 (stability and difficulty per card, targeting 90% retention). New cards lean toward easier card types; mature cards get harder ones.

### 7 standalone drills

| Drill | What you do | Research basis |
|---|---|---|
| 🎙️ **Speaking** | Say a target phrase; Whisper transcribes it and scores it word by word | Pushed output, immediate feedback |
| 🌓 **Shadowing** | Hear a phrase, echo it, get scored | Whitworth 2025 systematic review |
| 👂 **Minimal pairs** | Hear one of two near-identical words and pick which | HVPT (Dherbey Chapuis & Berthele 2024) |
| 🧩 **Chunks** | Translate high-frequency set phrases as whole units | Hou et al. 2018 |
| 🔢 **Numbers** | Type any number 0–100 in words | Closes the tens/ones-order blind spot |
| 🕗 **Times** | "08:30" → say it the local way | A classic learner trap |
| 🧬 **Conjugation** | Pronoun + infinitive → the right form, top 40 verbs | Form-focused practice |

Speaking and Shadowing score you with a local Whisper server (see [Running it locally](#running-it-locally)). On the public site they still play the audio but can't score you. Whisper has no Kurdish, so these two drills are not offered for Sorani or Kurmanji.

### Help for beginners

- **First-run walkthrough**: a short, skippable tour explains the daily routine, what each part of the app is for and why it works. Reopen it any time from **How it works**.
- **In-context coaching**: every card type, drill and view shows a one-line instruction the first few times you meet it, then shrinks to a small "?".
- **Sorani reading guide**: every Sorani word shows a Latin transliteration above it, including the short *i* vowel that the script doesn't write. Typed answers are accepted in Kurdish script *or* in Latin letters. You can turn the guide off in Settings.
- **"Say it like" respellings**: small English-style hints under Dutch, German and Kurmanji words.
- **Feedback that explains the mistake**: wrong answers are classified (for example *niet* vs *geen*, *de*/*het*, verb-second order, a missing *-t*, a typo) with a one-line rule.
- **Pretest mode**: "Challenge me · 5" on any vocabulary theme quizzes you before you study (the errorful-pretest effect).

Also: light, dark and auto themes; a mobile-first layout with a desktop grid at ≥ 960 px; and a backup reminder when your last export is a week old.

---

## How to use it

1. Open the [live site](https://razhanhameed.github.io/language-lab/) and pick a language. The walkthrough shows you around.
2. Read the **pronunciation guide** once and play the examples. Come back to it whenever a sound puzzles you.
3. Do a **study session** most days (10–15 minutes). Rate each card honestly; the scheduler decides when you see it again.
4. Mix in a **drill**, a **scenario** or a **reading passage** when you have extra time.
5. **Export a backup** now and then (Stats → Backup & reset). Your progress lives only in this browser.

---

## Running it locally

The app is plain HTML, CSS and JavaScript: no build step, no `package.json`.

```bash
git clone https://github.com/RazhanHameed/language-lab.git
cd language-lab

# Option A: static server only. Plays the pre-rendered audio in audio/.
./start.sh                 # http://localhost:8123/  (./start.sh 9000 for another port)

# Option B: plus a live speech stack (Apple Silicon recommended).
# On-device Supertonic-3 TTS + Whisper STT, which enables the Speaking and Shadowing drills.
./start-mlx.sh
```

`start.sh` needs only Python 3.10+. Content that isn't pre-rendered yet falls back to your system's voice for Dutch and German, and stays silent for Kurdish.

`start-mlx.sh` creates a Python venv (using [uv](https://docs.astral.sh/uv/) when present) and installs `supertonic` and `mlx-audio[server,tts]`. On the first run it downloads the model weights. It then runs two local servers next to the app: Supertonic-3 TTS on `:5510` and mlx-audio/Whisper STT on `:5500`. Nothing is sent to the cloud.

- It pins `mlx==0.31.1`, because 0.32.0 made GPU streams thread-local, which breaks Whisper on the server's worker thread.
- After the first run, startup takes about 30–60 s while the weights load.
- Stop everything with **Ctrl+C**.

```bash
WEB_PORT=9000 ./start-mlx.sh       # change the web port
TTS_PORT=5501 ./start-mlx.sh       # change the TTS port
PREWARM_STT=0 ./start-mlx.sh       # skip the Whisper download (TTS only)
```

URL parameters: `?lang=<id>` picks the language, `?tts=<url>` and `?stt=<url>` point at speech servers, and `?audio=<dir>` loads pre-rendered clips from another folder.

---

## How the audio works

The public site has **no backend**. Every word and sentence the app can speak is rendered to an MP3 ahead of time and served by GitHub Pages.

- A clip lives at `audio/<key>.mp3`, where `key = SHA-256(voice|lang|text)` (first 20 hex chars). `audio/manifest.json` lists every key.
- At runtime the app hashes the text it wants to say and plays that clip directly. The live TTS server is only used in local development, for content that hasn't been rendered yet.
- Rendering is cached by content hash, so a rebuild only synthesises new or changed text.

```bash
./deploy.sh      # enumerate → render new clips → commit + push (Pages redeploys from main)
```

| Piece | Role |
|---|---|
| `tools/extract_audio_items.js` | Lists every spoken item in all decks, with the engine for each language |
| `build_static_audio.py` | Renders missing clips, checks quality, writes the manifest |
| `supertonic_server.py` | Supertonic-3 TTS (Dutch, German, English), as a local server or in the build |
| `omnivoice_tts.py` | OmniVoice model loading, Kurdish voices, number spelling, voicing check |
| `tools/omnivoice_voices.py` | Design, audition and lock the Kurdish voices |
| `deploy.sh` | The whole pipeline, each engine in its own venv |

### Kurdish voices (OmniVoice)

Kurdish audio comes from [OmniVoice](https://github.com/k2-fsa/OmniVoice), which supports `ckb` and `kmr`. It exists **only** as pre-rendered clips (`ttsLive: false`): if a clip is missing, the app stays silent rather than mispronouncing the word with a system voice. OmniVoice needs PyTorch, and a CUDA GPU is strongly recommended. Install it in its own venv:

```bash
uv venv --python 3.12 .venv-omnivoice
# Pascal GPUs (GTX 10xx) need the cu126 wheels; newer GPUs can use cu128.
uv pip install --python .venv-omnivoice/bin/python torch==2.8.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu126
uv pip install --python .venv-omnivoice/bin/python omnivoice lameenc librosa
```

- **One consistent speaker per voice.** Every clip is voice-cloned from an approved reference (`tts_voices/<lang>/<M1|F1>.{wav,txt}`, committed).
- **Quality check.** OmniVoice sometimes whispers on very short words. Each take is checked for voicing and re-rendered (up to 4 takes) if it sounds whispered. Rendering uses 32 diffusion steps.
- **Numbers are words.** OmniVoice can't read digits in Kurdish, so the decks write numbers out (`کاتژمێر دە`, `saet dehan`). `normalize_text()` spells out any digit that slips through, including Arabic-Indic `٠–٩`, but only in the text sent to the model. The displayed text, and so the clip hash, is unchanged.

To choose a different voice:

```bash
PY=.venv-omnivoice/bin/python
$PY tools/omnivoice_voices.py design ckb        # render candidates → tts_voices/candidates/index.html
$PY tools/omnivoice_voices.py pick ckb M1 M-2   # lock a candidate as the male voice (F1 = female)
$PY tools/omnivoice_voices.py samples ckb       # render a test set with the locked voices
```

Changing a reference doesn't change clip hashes, so delete that language's clips before re-rendering.

---

## Project structure

```
language-lab/
├── index.html                  # single-page app shell: loads every deck and language pack
├── css/styles.css              # mobile-first styles, RTL support, Sorani reading guide
├── js/
│   ├── app.js                  # router, all views, the 8 card types, the 7 drills, reader, pronunciation guide
│   ├── onboarding.js           # first-run tour, in-context coaching, "How it works" page
│   ├── audio.js                # pre-rendered clips → live TTS server → Web Speech fallback; recording for STT
│   ├── srs.js                  # FSRS-4.5 scheduler (language-agnostic)
│   ├── drills.js               # drill controllers; spelling and diagnosis come from the language pack
│   ├── storage.js              # localStorage state + backup/import (one key per language)
│   ├── lang.js                 # language registry; swaps the active deck in
│   ├── lang/{nl,de,ckb,kmr}.js # language packs: numbers, times, respellers, error diagnosis, voices,
│   │                           #   Sorani→Latin transliteration, onboarding tips
│   └── data/
│       ├── _boot.js            # per-language deck registry (window.__DECK)
│       └── {nl,de,ckb,kmr}/    # vocab, sentences, scenarios, grammar, conjugations, chunks,
│                               #   minimal_pairs, passages, pronunciation
├── audio/                      # pre-rendered MP3 clips + manifest.json (generated; committed for Pages)
├── tts_voices/{ckb,kmr}/       # approved OmniVoice reference voices
├── tools/                      # audio item extractor, OmniVoice voice tool
├── build_static_audio.py       # audio build (see "How the audio works")
├── omnivoice_tts.py            # OmniVoice wrapper for Kurdish
├── supertonic_server.py        # Supertonic-3 TTS server
├── serve.py                    # no-cache static file server used by the launchers
├── start.sh / start-mlx.sh     # local launchers
└── deploy.sh                   # render audio + push to GitHub Pages
```

Each data file registers its arrays under `window.__DECK.<lang>`. `Lang.use(id)` then points the bare globals (`VOCAB`, `SENTENCES`, …) at the active language's deck, so the engine reads them unchanged.

**Stack:** vanilla HTML, CSS and JS (about 7,000 lines, no framework or bundler), `localStorage` for state, FSRS-4.5 in plain JS, MediaRecorder for speaking drills, Vazirmatn for Arabic-script text and Inter/Fraunces for Latin.

---

## Editing and adding content

The data files are plain, hand-readable JS. Edit one and reload the page; no build or restart is needed. Field names are shared across languages: `nl` always holds the **target-language** text (a historical name) and `en` the English.

**A vocabulary card** (`js/data/<lang>/vocab.js`):

```js
{ id: "v_x99", nl: "fietsenmaker", en: "bike repair shop", pos: "noun", gender: "de", theme: "transport",
  example: { nl: "De fietsenmaker is om de hoek.", en: "The bike repair shop is around the corner." },
  note: "Where you'll spend €15 every couple of months in Amsterdam." }
```

**A scenario** (`js/data/<lang>/scenarios.js`):

```js
{
  id: "sc_yours", title: "Your Tuesday standup", icon: "🎯",
  setting: "Two-sentence context.",
  dialogue: [
    { speaker: "Lead", nl: "Hoe ging de sprint review?", en: "How did the sprint review go?" },
    { speaker: "You",  nl: "Goed, we hebben de feature flag uitgezet.", en: "Good, we turned the feature flag off." },
  ],
  notes: ["What's specific to your situation that a textbook wouldn't cover."],
}
```

**A reading passage** (`js/data/<lang>/passages.js`): target-language paragraphs, an English translation and a `glosses` map for words that aren't in the vocabulary:

```js
{
  id: "p_my_story", title: "Mijn verhaal", level: "A2",
  blurb: "Short blurb shown in the passage list.", en: "The English translation.",
  paragraphs: ["First paragraph.", "Second paragraph."],
  glosses: { "verhaal": "story", "weekendweer": "weekend weather" },
}
```

**Rules for target-language text** (it becomes audio):

- In Kurdish, write numbers as words, never digits.
- In Sorani, use the Kurdish letters `ی ک ە`, not Arabic `ي ك`.

New text has no audio until it's rendered with `./deploy.sh` (or `build_static_audio.py`). Locally, Dutch and German fall back to the live TTS server or the system voice in the meantime.

---

## Adding a language

1. **Data:** register it in `js/data/_boot.js` (`window.__DECK.fr = {}`), create `js/data/fr/` with the same files as `js/data/de/` (each registering into `window.__DECK.fr`), and add their `<script>` tags to `index.html`.
2. **Language pack:** create `js/lang/fr.js` calling `Lang.register({ id: "fr", name: "French", brand: "Apprends le français", flag: "🇫🇷", langCode: "fr-FR", storageKey: "fr:v1", … })`. Fill in number and time spelling, a respeller, error diagnosis, tips and voices, and add the `<script>` after the other packs.

The selector, per-language progress, drills and onboarding pick it up automatically. Optional pack flags:

| Flag | Effect |
|---|---|
| `hasSpeech: false` | No TTS at all: silent instead of a wrong voice; audio-only drills and buttons are hidden |
| `hasStt: false` | TTS but no speech recognition: hides Speaking and Shadowing |
| `ttsEngine: "omnivoice"` | Render clips with OmniVoice instead of Supertonic-3. The pack `id` must equal the `langCode` primary subtag (clips are keyed by it) |
| `ttsLive: false` | Pre-rendered clips only, with no live-server or Web Speech fallback |
| `rtl: true` | Right-to-left script: the whole UI flips while the language is active |
| `transliterate`, `guideKey` | A reading guide (Latin letters over each word) and its legend in Settings |
| `answerMatches` | Extra answer checking, for example accepting Latin-letter answers for a non-Latin script |
| `onboarding` | Language-specific tips for the tour, the coaching and the help page |

Supertonic-3 covers 31 languages (including `fr`, `es`, `pt`, `it`); OmniVoice covers about 600 more. Whisper handles about 99 for speech recognition.

---

## The science

Most language apps optimise for engagement. This one is built on what the research says helps people learn:

| Technique | Where it's used | Source |
|---|---|---|
| Spaced repetition with adaptive intervals | `srs.js` (FSRS-4.5) | Cepeda et al. 2008 |
| Retrieval practice (testing effect) | Every card type | Roediger & Karpicke 2006 |
| Interleaving | Random card type per session, mixed themes | Bjork; Nakata & Suzuki 2019 |
| Desirable difficulty | Mature cards skew to harder types | Bjork 1994 |
| Pushed output | Recall, cloze, reorder, speaking | Swain 1995 |
| Comprehensible input | Scenarios and graded reading | Krashen 1985, 1996 |
| Errorful learning, pretesting | Wrong answers allowed; "Challenge me" mode | Kornell et al. 2009 |
| Formulaic chunks | Chunks drill | Hou et al. 2018; Vilkaitė 2016 |
| Shadowing | Shadowing drill | Whitworth 2025 |
| Minimal pairs / HVPT | Minimal pairs drill | Dherbey Chapuis & Berthele 2024 |
| Metalinguistic feedback | Error diagnosis with a rule reminder | Cambridge Handbook of Corrective Feedback 2024 |
| Output-prompted noticing | Reflection chips after a weak speaking attempt | Swain & Lapkin 1995; Schmidt 1990 |
| Narrow listening | "Narrow listen · 3×" on scenarios | Krashen 1996 |
| Extensive reading | Reader with tap-to-translate | Liu & Zhang 2018 |

---

## Data and privacy

- All your progress is stored in your browser's `localStorage`, one entry per language. There is no server-side storage.
- There are no analytics, telemetry, accounts or cookies.
- The public site loads the app and its audio from GitHub Pages and fonts from Google Fonts. Nothing else.
- When you run the local speech stack, recordings for the Speaking and Shadowing drills go only to the Whisper server on your own machine.

**Back up now and then.** Clearing browsing data deletes your progress. Stats → Backup & reset → **Export JSON** downloads a dated file, and **Import JSON** restores it. The app reminds you when your last backup is more than a week old.

---

## Contributing

Bug reports and pull requests are welcome. Most of the content is plain data, so many fixes need no JavaScript.

**Native speakers are especially welcome**, above all for Sorani and Kurmanji. The content is carefully written but not yet fully native-reviewed. Areas that most need a check:

- Kurdish B1 grammar: unreal conditionals, clitic placement, the Kurmanji pluperfect and past-tense agreement.
- Regional word choices and spellings (for example Kurmanji *firingî* vs *bacanê sor*, Sorani *دەرمانخانە* vs *دەرمانگا*).
- Idioms and set phrases in the B1 vocabulary and dialogues.
- The pronunciation guides' stress rules and sound descriptions.
- Cultural notes.

To fix something, edit the file under `js/data/<lang>/` and open a PR. You don't need to render audio; it's generated when the change is deployed. If you're not comfortable with GitHub, an issue that quotes the wrong text and gives the correction is just as helpful.

Before opening a PR, check that the app loads without console errors in that language. For data files, `node --check js/data/<lang>/<file>.js` catches syntax mistakes.

---

## License and credits

[MIT](LICENSE). Use it, fork it, swap in the language you want to learn.

- [Supertonic-3](https://huggingface.co/Supertone/supertonic-3) by Supertone: Dutch, German and English TTS
- [OmniVoice](https://github.com/k2-fsa/OmniVoice) by k2-fsa: Sorani and Kurmanji TTS
- [mlx-audio](https://github.com/Blaizzy/mlx-audio) by Prince Canuma: the on-device MLX speech runtime
- [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) by OpenAI (MLX port by mlx-community)
- [FSRS](https://github.com/open-spaced-repetition) by open-spaced-repetition
- [Vazirmatn](https://github.com/rastikerdar/vazirmatn) by Saber Rastikerdar: Arabic-script font
- Tim Ferriss, for the diagnostic-sentence approach
- The SLA research of Bjork, Krashen, Swain, Schmidt, Cepeda, Roediger and many others
