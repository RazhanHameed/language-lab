# Bridge courses between Kurdish varieties

A bridge course is for someone who already speaks one Kurdish variety and wants to understand, and later use, another one. It does not teach the target as a foreign language. It shows the learner how much they already know, and then teaches only what changes.

| Course | Learner speaks | Learns | Target script | Audio | Data | Grammar sketch |
|---|---|---|---|---|---|---|
| `ckb-kmr`, direction `ckb>kmr` | Sorani | Kurmanji | Latin (Hawar) | yes | `js/bridge/*.js` | — |
| `ckb-kmr`, direction `kmr>ckb` | Kurmanji | Sorani | Arabic | yes | `js/bridge/*.js` | — |
| `ckb-hac` | Sorani | Hawrami (Hewramî) | Arabic | no | `js/bridge/hac/` | [hawrami.md](hawrami.md) |
| `ckb-sdh` | Sorani | Kalhori (Southern Kurdish) | Arabic | no | `js/bridge/sdh/` | [kalhori.md](kalhori.md) |
| `kmr-zza` | Kurmanji | Zazaki (Kirmanckî / Dimilkî) | Latin | no | `js/bridge/zza/` | [zazaki.md](zazaki.md) |

All of these are varieties spoken by Kurds. Gorani–Zaza (Hawrami, Zazaki) is classified by many linguists as a separate Northwest Iranian branch, and most of its speakers consider it Kurdish. The courses say both, once, in their introductions. They never describe one variety as the parent, a corruption, or "just a dialect" of another.

In the app: **Browse → Bridge → Kurdish varieties** (shown when the app language is Sorani or Kurmanji), or a deep link: `?bridge=ckb-hac`, `?bridge=ckb-sdh`, `?bridge=kmr-zza`, `?bridge=ckb-kmr` or `?bridge=varieties`.

---

## 1. The method

The courses follow a small set of findings from research on closely related languages, transfer and practice. The citations are given so they can be checked. None of this research was done on Kurdish, so each point is a design bet, not a proven result.

### The seven sieves (EuroCom)
EuroCom teaches reading across a language family by passing a text through "seven sieves": shared vocabulary, sound correspondences, spelling and pronunciation, shared syntax, morphosyntax, and affixes. It assumes most of the target is already known and only has to be made recognisable. (Klein & Stegmann 2000; McCann, Klein & Stegmann 2003; Hufeisen & Marx 2007.)

Every course hub is laid out as seven Kurdish-adapted steps:

1. **You already know a lot**: the shared words, grouped as *same*, *sound shift*, *related*, *different* and *look-alike*.
2. **Sound rules**: regular correspondences (for example Sorani *w* ↔ Kurmanji *v*).
3. **Script bridge**: the letters and spellings that differ.
4. **Same skeleton**: sentences side by side, to show how much stays put.
5. **The real differences**: one grammar "frame" at a time (the copula, the past tense, gender, the linking particle…).
6. **Traps**: false friends and common words that are simply different.
7. **Read**: short parallel passages.

A step with no data is hidden. Two pages sit outside the sieves: **Tables** (whole paradigms side by side) and **Sources**.

### Correspondence rules, taught by examples with feedback
Learners pick up sound correspondences faster when the rule is stated briefly and then practised with immediate feedback. A rule is only useful if it carries over to words the learner has not seen. So each rule card has three steps: the rule, 6–12 worked examples answered with feedback, and then 3–5 **unseen** test words. Each rule card states how reliable the rule is, with the count behind it ("in 41 of 50 dictionary pairs").

### Processing instruction
A learner's first variety trains them to ignore cues it does not use. Examples are Kurmanji case and gender for a Sorani speaker, and Sorani clitic placement for a Kurmanji speaker. Processing instruction gives a short explicit contrast, then "structured input" items in which the ending is the **only** cue to the meaning. Each frame starts with these items (`pi`) before any production. (VanPatten & Cadierno 1993; VanPatten 2004; Ellis 2006.)

### One new thing at a time
New patterns are practised with words the learner already shares, and new words only appear in frames the learner already knows. Each frame shows a pattern with a dashed slot, then 6–14 sentence pairs in a colour-coded diff view. Colour is never the only cue: every kind also has a symbol and an underline style. (Sweller 1988; Sweller, van Merriënboer & Paas 1998.)

### Interleaving across sessions
A frame is first practised on its own (blocked). Once it is introduced, its cards join a shared pool and are drawn **interleaved**: no two cards from the same frame or rule side by side when that can be avoided. Interleaving helps most with categories that are easy to confuse, and it works across spaced sessions rather than within one. Learners feel blocked practice is better even when it is not, so the app says so. (Brunmair & Richter 2019; Kornell & Bjork 2008; Pan et al. 2019; Nakata & Suzuki 2019.)

### Cognates and false friends
Shared words speed reading up, but near-misses and false friends cause production errors. The **Traps** step drills only the look-alikes and the most frequent words that differ. In a trap drill, the look-alike is always one of the options. (Ringbom 2007; Gooskens 2007.)

### Fading scaffolds
For a Kurmanji speaker learning Sorani, a Latin reading guide sits under each Sorani word. It fades with accuracy: first always shown, then tap to show, then hidden. It comes back after a run of mistakes. Faded support works better than either removing it all at once or keeping it forever. (Renkl & Atkinson 2003; Kalyuga 2007.) Sorani speakers already read Arabic script, so the Hawrami and Kalhori courses have no guide.

### Spaced retrieval
Every drill item is an SRS card (spaced repetition). Typed production starts only after a card has been answered twice.

---

## 2. Architecture

```
index.html
  js/bridge/*.js          Sorani<->Kurmanji data, loaded with the page   -> window.__BRIDGE
  js/bridge.js            the engine (Bridge.Model + renderers)
js/bridge/<code>/*.js     other pairs, loaded on demand by the engine     -> window.__BRIDGES[pairId]
```

- **`Bridge.Model`** is pure: no DOM and no storage. It holds the pair registry (`PAIRS`), directions, card ids, the card index, practice pools, probe scoring, guide fading, paradigm grids and source counts. It is unit-tested in node.
- **The renderers** draw the views: `bridge-varieties`, `bridge-pair`, `bridge`, `bridge-words`, `bridge-rules`, `bridge-rule`, `bridge-script`, `bridge-frame`, `bridge-traps`, `bridge-ferriss`, `bridge-reading-list`, `bridge-reading`, `bridge-probe`, `bridge-tables`, `bridge-sources` and `bridge-session`. The same renderers serve every pair. Keys inside items are variety codes, so one renderer reads `item[me.src]` and `item[me.tgt]`.
- **Lazy loading.** Opening a pair, or the varieties hub, adds `<script>` tags for `js/bridge/<code>/{sources,lexicon,rules,frames,traps,intro,reading,paradigms}.js?v=<DATA_VERSION>`. Every file is optional: a missing file (404) just leaves its section empty. To bust caches after a data change, bump `DATA_VERSION` in `js/bridge.js`.
- **Script and direction per code.** `ckb`, `hac` and `sdh` are Arabic script, right to left. `kmr` and `zza` are Latin, left to right. Text is wrapped as `<bdi dir="rtl" lang="hac">` and so on. Explanations that mix scripts keep each run isolated.
- **Fonts.** Vazirmatn lacks Hawrami ڎ (U+068E) and ۮ (U+06EE). `css/bridge.css` adds Noto Sans Arabic faces to the Vazirmatn family for just those two code points. The font only downloads when one of those letters is on the page. Kalhori ۊ (U+06CA) is in Vazirmatn.
- **Audio.** Recordings exist only for Sorani and Kurmanji. The other targets show no hear-it buttons. The audio extractor (`tools/extract_audio_items.js`) reads only the top-level `js/bridge/*.js` files.

### Progress and cards
- **Sorani ⇄ Kurmanji**: stored in the active language's saved state (`state.bridge`, `state.cards`), exactly as before. The direction comes from the app language and the "I already speak…" setting. Card ids are `br:<kind>:<id>`.
- **Other pairs**: stored in one shared store, `localStorage["langlab:bridges:v1"] = { v: 1, pairs: { "<pairId>": { done, probe, cards, explainIn } } }`, so progress is the same whichever app language is active. Card ids are `br:<kind>:<code>/<id>`, for example `br:pi:hac/cop_pi1`. These cards are reviewed inside the pair, through **Review N due** on its hub. They never enter the language's daily session. The JSON backup includes this store as `sharedBridges`, and importing merges it per pair without dropping progress.

---

## 3. The data contract

Each file is a plain script, not a module, and has no top-level `const` or `let`. It writes into one shared object:

```js
(function () {
  const B = (window.__BRIDGES = window.__BRIDGES || {});
  const P = (B["ckb-hac"] = B["ckb-hac"] || {});
  P.LEXICON = [ /* ... */ ];
})();
```

The Sorani⇄Kurmanji data uses the older form `window.__BRIDGE = window.__BRIDGE || {}` with files in `js/bridge/`. Its shapes are the same, with both directions filled in.

Keys inside items are **variety codes**: `ckb`, `kmr`, `hac`, `sdh` and `zza`. Directions are `"<src>><tgt>"` strings, for example `"ckb>hac"`.

### Grounding (the rule above all others)
Every target form must meet one of two conditions:
- It is **attested** in a listed source.
- It is a mechanical combination of attested pieces (an attested stem plus an attested ending from an attested paradigm). Mark these `built: true`.

Anything else is left out: a smaller, true course beats a bigger invented one. Every lexicon item, sentence pair, rule example, trap and paradigm table carries `src: "<SOURCES id>"`.

Each pair uses one spelling convention, written down in its grammar sketch. Attested forms are normalised to it. Normalising spelling is allowed; changing words is not.

### `META` and `SOURCES`
```js
P.META = { id: "ckb-hac", src: "ckb", tgt: "hac", dirs: ["ckb>hac"],
  name: { en, ku }, variety: { en, ku },      // the base variety taught
  grounding: { en, ku } };                     // two sentences: what the sources are; nothing checked by a speaker yet
P.SOURCES = [{ id, name, what, kind: "dictionary"|"course"|"grammar"|"corpus"|"wordlist"|"book" }];
```
`name` gives the original work and author, for example "Wişename (Jamal Bedar, Kurdish Academy, Hewlêr 2010)".

### Explanations
Every explanation is an `{ en, ku }` pair:
- `ku` is written in the **learner's** variety: Sorani for `ckb>…`, Kurmanji (Hawar) for `kmr>…`.
- Each is at most 60 words, warm and practical, and not translated word for word from the English.
- The linking particle is *danepał* in Sorani, *veqetandek* in Kurmanji and "linking particle" in English.

### Sentence pair (used everywhere)
```js
{ id: "cop_01", en: "I am a student.", ckb: "…", hac: "…", src: "course",
  align: [ { ckb: "…", hac: "…", k: "same"|"sound"|"cognate"|"different"|"grammar"|"only", rule: "e-a", note: "≤12 words" } ],
  slot: "student" }
```
- With `k: "only"`, one side is `""`.
- `k: "sound"` needs a `rule` id.

### Lexicon and probe
```js
P.LEXICON = [{ id, en, pos: "noun"|"verb"|"adj"|"pron"|"adv"|"num"|"other",
  ckb, hac, gender: "m"|"f"|null, rel: "same"|"sound"|"cognate"|"different"|"trap", rules: [], src }];
P.PROBE = { "ckb>hac": [/* 25–30 lexicon ids spread over all rel classes */] };
```
- The lexicon has about 120–200 items.
- `gender` is the target noun's gender. Hawrami and Zazaki have grammatical gender; Kalhori does not. The older Sorani⇄Kurmanji data uses `kmrGender`.

### Rules
```js
P.RULES = [{ id, order, title, reliability: "always"|"usually"|"often",
  card: { "ckb>hac": { en, ku } },          // states the count behind the reliability
  examples: [{ ckb, hac, en, src }],        // 6 or more, attested
  test: [{ ckb, hac, en, src }] }];         // unseen words, never in examples
```
A pair has 6–14 rules. A rule with fewer than six attested examples is left out.

### Frames
```js
P.FRAMES = [{ id, order, level, sieve: 4|5, title,
  pattern: { ckb: "(من) [slot]ـم", hac: "…", en: "I am a [slot]" },
  card: { "ckb>hac": { en, ku } },
  items: [/* 6–12 sentence pairs */],
  pi: [{ id, dir: "ckb>hac", show: "hac", text, options: ["…", "…"], answer: 0, why: { en, ku } }] }];   // 4–8 per frame
```
A pair has 6–10 frames, chosen by what the target actually does differently.

### Traps
```js
P.TRAPS = [{ id, kind: "false-friend"|"different"|"near-miss",
  ckb: { w, en }, hac: { w, en },
  fix: { "ckb>hac": { w, en } },            // what to say in the target instead
  warn: { "ckb>hac": { en, ku } }, src }];  // 15–40 entries
```

### Intro
```js
P.INTRO = { steps: [{ sieve, id, title, blurb: { "ckb>hac": { en, ku } } }],
  history: { en, ckb },                      // sister varieties; respectful; sourced
  facts: [{ en, src }],
  hooks: { "ckb>hac": [{ where, en, ku, ex }] },          // optional
  script: [{ ckb, hac, lat, ex: { ckb, hac, en }, note, src }] };   // only the letters/spellings that differ
```

### Reading, Ferriss and paradigms
- `READING`: 2–5 passages built from real connected text, each `{ id, title, level, sents: [sentence pair…] }`.
- `FERRISS`: only for sentences that are fully attested. The new pairs leave out `ckbId` and `kmrId`.
- `PARADIGMS` are full tables, rendered on the Tables page:
  ```js
  P.PARADIGMS = [{ id, title: { en, ku }, verb: { tgt, src, en },
    cols: ["1sg","2sg","3sg.m","3sg.f","1pl","2pl","3pl"],
    rows: [{ label: { en, ku }, tgt: [/* one cell per col */], src: [/* … */] }],
    src, note: { en, ku } }];
  ```
  A cell is a string, `""` (not attested: shown as "—", never guessed), or `{ w, built: true, src }`.

---

## 4. Adding a pair

1. **Register it.** Add an entry to `PAIRS` in `js/bridge.js`, for example `{ id: "kmr-xxx", dirs: ["kmr>xxx"], folder: "xxx", blurb: {…} }`. Then add the code to `CODES` with its name, `rtl` and `audio` settings. If the code needs it, add a font range to `css/bridge.css`.
2. **Write the data** in `js/bridge/<code>/`, following section 3. Keep a provenance log (item id, field, form, source, location, verbatim snippet) outside the app, so a reviewer can audit every target form.
3. **Validate.** The pair validator checks:
   - required fields, direction keys, and that every `src` is listed in `SOURCES`;
   - that rule examples and tests do not overlap;
   - that probe ids and slots exist in the lexicon;
   - that paradigm rows have exactly as many cells as `cols`;
   - the 60-word limit on explanations;
   - banned words and local paths.
4. **Write the grammar sketch** `docs/bridges/<variety>.md`. Cover:
   - sounds and letters, pronouns, the copula, verb paradigms, nouns, the linking particle, prepositions and word order;
   - the 20 most useful words;
   - the spelling convention chosen;
   - the sources by original title and author;
   - a "confidence and gaps" section.
5. **Bump** `DATA_VERSION`, and open `?bridge=<pairId>` on a phone-width screen and on a desktop screen, in light and in dark mode.

---

## 5. References (method)

- Klein, H. G., & Stegmann, T. D. (2000). *EuroComRom – Die sieben Siebe*. Aachen: Shaker.
- McCann, W. J., Klein, H. G., & Stegmann, T. D. (2003). *EuroComRom – The Seven Sieves* (2nd ed.). Aachen: Shaker.
- Hufeisen, B., & Marx, N. (Eds.) (2007). *EuroComGerm – Die sieben Siebe*. Aachen: Shaker.
- Gooskens, C. (2007). The contribution of linguistic factors to the intelligibility of closely related languages. *Journal of Multilingual and Multicultural Development, 28*(6), 445–467.
- Ringbom, H. (2007). *Cross-linguistic Similarity in Foreign Language Learning*. Clevedon: Multilingual Matters.
- VanPatten, B., & Cadierno, T. (1993). Explicit instruction and input processing. *Studies in Second Language Acquisition, 15*(2), 225–243.
- VanPatten, B. (Ed.) (2004). *Processing Instruction: Theory, Research, and Commentary*. Mahwah, NJ: Erlbaum.
- Ellis, N. C. (2006). Selective attention and transfer phenomena in L2 acquisition. *Applied Linguistics, 27*(2), 164–194.
- Sweller, J. (1988). Cognitive load during problem solving. *Cognitive Science, 12*(2), 257–285.
- Sweller, J., van Merriënboer, J. J. G., & Paas, F. (1998). Cognitive architecture and instructional design. *Educational Psychology Review, 10*(3), 251–296.
- Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning and its moderators. *Psychological Bulletin, 145*(11), 1029–1052.
- Kornell, N., & Bjork, R. A. (2008). Learning concepts and categories: Is spacing the "enemy of induction"? *Psychological Science, 19*(6), 585–592.
- Pan, S. C., et al. (2019). Does interleaved practice enhance foreign language learning? *Journal of Educational Psychology, 111*(7), 1172–1188.
- Nakata, T., & Suzuki, Y. (2019). Mixing grammar exercises facilitates long-term retention. *The Modern Language Journal, 103*(3), 629–647.
- Renkl, A., & Atkinson, R. K. (2003). Structuring the transition from example study to problem solving. *Educational Psychologist, 38*(1), 15–22.
- Kalyuga, S. (2007). Expertise reversal effect and its implications for learner-tailored instruction. *Educational Psychology Review, 19*(4), 509–539.

Some page numbers above were not re-checked against the publishers. Check them before quoting.
