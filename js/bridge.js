/* =====================================================================
   Bridge courses between Kurdish varieties
   ---------------------------------------------------------------------
   For someone who already speaks one Kurdish variety and is learning or
   reading another one. See docs/bridges/README.md.

   Part 1  Bridge.Model  - pure functions (no DOM; unit-tested in node).
   Part 2  Renderers     - varieties hub, course hub, words, rules, script,
                           frames, traps, Ferriss pairs, reading, tables,
                           sources, probe, drills.

   Pairs (PAIRS below):
   - ckb-kmr  Sorani <-> Kurmanji, both directions. Data in js/bridge/*.js as
              window.__BRIDGE, loaded with the page. The direction follows the
              app language (kmr or ckb) and the "I already speak" setting.
              Progress and SRS cards live in that language's saved state.
   - ckb-hac, ckb-sdh, kmr-zza: one direction each. Data in
              js/bridge/<tgt>/*.js as window.__BRIDGES[pairId], loaded lazily
              (script tags) when the learner opens the pair. Progress and
              cards live in one shared store (Store.loadShared), so they are
              the same whichever app language is active.
   Every data file is optional: a missing one just hides its section.
   ===================================================================== */
(function (root) {
  "use strict";

  /* ============================ PART 1: MODEL ============================ */

  const KINDS = ["same", "sound", "cognate", "different", "grammar", "only"];
  const REL = ["same", "sound", "cognate", "different", "trap"];
  const SHARED = ["same", "sound", "cognate"];
  const KIND_INFO = {
    same:      { label: "Same", sym: "=", text: "The same word, apart from the script." },
    sound:     { label: "Sound shift", sym: "~", text: "A regular sound correspondence." },
    cognate:   { label: "Related", sym: "≈", text: "Related, but not by a regular rule." },
    different: { label: "Different word", sym: "≠", text: "A different word." },
    grammar:   { label: "Grammar", sym: "◆", text: "A function word or construction that differs." },
    only:      { label: "One side only", sym: "+", text: "Present in one variety only." },
    trap:      { label: "Trap", sym: "!", text: "Looks alike, means something else." },
  };
  // Every variety code the bridges use. rtl: Arabic script. audio: recorded clips exist.
  const CODES = {
    ckb: { name: "Sorani", long: "Sorani", own: "کوردی", rtl: true, audio: true },
    kmr: { name: "Kurmanji", long: "Kurmanji", own: "Kurdî", rtl: false, audio: true },
    hac: { name: "Hawrami", long: "Hawrami (Hewramî)", own: "هەورامی", ku: { ckb: "هەورامی" }, rtl: true, audio: false },
    sdh: { name: "Kalhori", long: "Kalhori (Southern Kurdish)", own: "کەڵهوڕی", ku: { ckb: "کەڵهوڕی" }, rtl: true, audio: false },
    zza: { name: "Zazaki", long: "Zazaki (Kirmanckî / Zazakî)", own: "Kirmanckî / Zazakî", ku: { kmr: "Zazakî" }, rtl: false, audio: false },
  };
  const NAME = Object.fromEntries(Object.entries(CODES).map(([k, v]) => [k, v.name]));
  const OWN = { ckb: "کوردی", kmr: "Kurdî" };   // "Kurdish" in each learner variety (the explanation language)
  function isRtl(code) { return !!(CODES[code] && CODES[code].rtl); }
  function hasAudio(code) { return !!(CODES[code] && CODES[code].audio); }

  /* ---- the pair registry ---- */
  // folder: js/bridge/<folder>/ holds the lazily loaded data files (new pairs only).
  const PAIRS = [
    { id: "ckb-kmr", dirs: ["ckb>kmr", "kmr>ckb"], legacy: true,
      blurb: { "ckb>kmr": "For Sorani speakers: read and speak Kurmanji.", "kmr>ckb": "For Kurmanji speakers: read and speak Sorani." } },
    { id: "ckb-hac", dirs: ["ckb>hac"], folder: "hac", blurb: { "ckb>hac": "For Sorani speakers: understand Hawrami (Hewramî)." } },
    { id: "ckb-sdh", dirs: ["ckb>sdh"], folder: "sdh", blurb: { "ckb>sdh": "For Sorani speakers: understand Kalhori, a Southern Kurdish variety." } },
    { id: "kmr-zza", dirs: ["kmr>zza"], folder: "zza", blurb: { "kmr>zza": "For Kurmanji speakers: understand Zazaki (Kirmanckî / Dimilkî)." } },
  ];
  const PAIR_FILES = ["sources", "lexicon", "rules", "frames", "traps", "intro", "reading"];
  const DATA_VERSION = 1;          // bump when any js/bridge/<tgt>/*.js changes (cache-busting ?v=)
  const ALL_DIRS = PAIRS.flatMap((p) => p.dirs);
  function pairById(id) { return PAIRS.find((p) => p.id === id) || null; }
  function pairOfDir(dir) { return PAIRS.find((p) => p.dirs.includes(dir)) || null; }
  function isLegacyPair(id) { const p = pairById(id); return !!(p && p.legacy); }
  // Every learner-facing route: one per direction.
  function routes() {
    return PAIRS.flatMap((p) => p.dirs.map((dir) => ({ pairId: p.id, dir, ...sides(dir), legacy: !!p.legacy, blurb: (p.blurb || {})[dir] || "" })));
  }
  // The script URLs of a lazily loaded pair (none for the legacy pair).
  function pairFiles(id, v) {
    const p = pairById(id);
    if (!p || p.legacy || !p.folder) return [];
    return PAIR_FILES.map((f) => `js/bridge/${p.folder}/${f}.js?v=${v == null ? DATA_VERSION : v}`);
  }
  // Card-id namespace: "" for the legacy pair (ids unchanged), the target code otherwise.
  function pairNs(id) { const p = pairById(id); return p && !p.legacy ? (p.folder || "") : ""; }

  // The guide fades by accuracy: level 0 always shown, 1 tap to reveal, 2 hidden.
  const GUIDE = { window: 20, min: 10, up: 0.9, down: 0.6, max: 2 };
  const PROBE_BANDS = [
    { id: "high", min: 80, text: "You already read most of it. Spend your time on the frames and traps." },
    { id: "mid", min: 50, text: "You recognise about half. The words and sound rules will pay off quickly." },
    { id: "low", min: 0, text: "Most of it is still new. That is fine: start with the shared words and the sound rules." },
  ];

  /* ---- directions ---- */
  function direction(target, known) {
    if (target === "kmr" && known === "ckb") return "ckb>kmr";
    if (target === "ckb" && known === "kmr") return "kmr>ckb";
    return null;
  }
  function sides(dir) {
    if (!ALL_DIRS.includes(dir)) return null;
    const [src, tgt] = dir.split(">");
    return { src, tgt };
  }
  function otherOf(code) { return code === "ckb" ? "kmr" : code === "kmr" ? "ckb" : null; }
  function offeredFor(target) { return target === "kmr" || target === "ckb"; }

  /* ---- stored settings ---- */
  function ensure(state) {
    if (!state.bridge || typeof state.bridge !== "object") state.bridge = {};
    const b = state.bridge;
    if (!b.known || typeof b.known !== "object") b.known = {};
    if (b.known.kmr !== "ckb") b.known.kmr = null;
    if (b.known.ckb !== "kmr") b.known.ckb = null;
    if (b.explainIn !== "ku" && b.explainIn !== "en") b.explainIn = "ku";
    for (const k of ["done", "probe", "scriptLevel", "scriptHist"]) if (!b[k] || typeof b[k] !== "object") b[k] = {};
    const lv = b.scriptLevel.ckb;
    b.scriptLevel.ckb = lv === 1 || lv === 2 ? lv : 0;
    if (!Array.isArray(b.scriptHist.ckb)) b.scriptHist.ckb = [];
    return b;
  }
  // Progress for a lazily loaded pair, inside the shared store { v, pairs: { id: {...} } }.
  // Repairs junk without dropping anything it does not know.
  function ensureShared(shared) {
    const s = shared && typeof shared === "object" ? shared : {};
    if (!s.pairs || typeof s.pairs !== "object" || Array.isArray(s.pairs)) s.pairs = {};
    if (!s.v) s.v = 1;
    return s;
  }
  function pairState(shared, id) {
    const s = ensureShared(shared);
    let p = s.pairs[id];
    if (!p || typeof p !== "object" || Array.isArray(p)) p = s.pairs[id] = {};
    for (const k of ["done", "probe", "cards"]) if (!p[k] || typeof p[k] !== "object" || Array.isArray(p[k])) p[k] = {};
    if (p.explainIn !== "ku" && p.explainIn !== "en") p.explainIn = "ku";
    return p;
  }

  /* ---- frames ---- */
  function orderedFrames(frames) {
    return (Array.isArray(frames) ? frames : []).filter((f) => f && f.id)
      .map((f, i) => ({ f, i })).sort((a, b) => ((a.f.order || 0) - (b.f.order || 0)) || (a.i - b.i)).map((x) => x.f);
  }
  // done / next / later. Only the first not-yet-done frame is "next"; nothing is
  // locked (a learner who knows a topic can jump ahead), but the order is advised.
  function frameStatus(frames, done) {
    done = done || {};
    const list = orderedFrames(frames);
    let nextSeen = false;
    return list.map((f, index) => {
      let status = "later";
      if (done[f.id]) status = "done";
      else if (!nextSeen) { status = "next"; nextSeen = true; }
      return { frame: f, index, status };
    });
  }
  function nextFrame(frames, done) {
    const s = frameStatus(frames, done).find((x) => x.status === "next");
    return s ? s.frame : null;
  }
  function introducedFrames(frames, done) {
    done = done || {};
    return orderedFrames(frames).filter((f) => done[f.id]);
  }

  /* ---- card ids: br:<kind>:<id> (Sorani<->Kurmanji) and br:<kind>:<ns>/<id> (other pairs).
     kinds: pi, tr, rule, trap. ns is the target code (hac, sdh, zza). ---- */
  function cardId(kind, id, ns) { return ns ? `br:${kind}:${ns}/${id}` : `br:${kind}:${id}`; }
  function isBridgeCard(id) { return typeof id === "string" && id.startsWith("br:"); }
  function parseCardId(id) {
    if (!isBridgeCard(id)) return null;
    const m = /^br:([a-z]+):(.+)$/.exec(id);
    if (!m) return null;
    const n = /^([a-z]{3})\/(.+)$/.exec(m[2]);
    return n ? { kind: m[1], ns: n[1], id: n[2] } : { kind: m[1], id: m[2] };
  }

  /* ---- diff view helpers ---- */
  function segments(pair, dir) {
    const s = sides(dir);
    if (!s || !pair || !Array.isArray(pair.align)) return [];
    return pair.align.map((a, i) => ({
      i, src: a[s.src] || "", tgt: a[s.tgt] || "", k: KINDS.includes(a.k) ? a.k : "different",
      note: a.note || "", rule: a.rule || "",
    }));
  }
  function kindCounts(segs) {
    const c = { same: 0, sound: 0, cognate: 0, different: 0, grammar: 0, only: 0 };
    for (const s of segs) if (c[s.k] !== undefined) c[s.k]++;
    return c;
  }
  function relCounts(lexicon) {
    const c = { same: 0, sound: 0, cognate: 0, different: 0, trap: 0 };
    for (const w of lexicon || []) if (c[w.rel] !== undefined) c[w.rel]++;
    return c;
  }
  // Share of items that are shared (same/sound/cognate), 0..100.
  function sharedPct(counts) {
    let total = 0, sh = 0;
    for (const k of Object.keys(counts)) { total += counts[k]; if (SHARED.includes(k)) sh += counts[k]; }
    return total ? Math.round((sh / total) * 100) : 0;
  }

  /* ---- answer matching ---- */
  // Spacing, tatweel (clitic joiners), joiners and punctuation do not matter; neither do
  // the Arabic look-alike letters a non-Kurdish keyboard produces.
  function joinKey(s) {
    return String(s || "").toLowerCase()
      .replace(/[يى]/g, "ی").replace(/ك/g, "ک")
      .replace(/[ً-ْـ‌‍‎‏]/g, "")
      .replace(/[\s.,!?;:'"«»()،؟؛…\-–—]/g, "");
  }
  // Same letters once circumflexes and cedillas are dropped (ê=e, ş=s, ç=c, î=i, û=u).
  function foldMarks(s) {
    return joinKey(String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, ""));
  }
  function sameAnswer(a, b) { return joinKey(a) === joinKey(b) && joinKey(a) !== ""; }
  // "exact" | "close" (right letters, missing marks) | "wrong"
  function matchLevel(given, target) {
    if (sameAnswer(given, target)) return "exact";
    if (foldMarks(given) !== "" && foldMarks(given) === foldMarks(target)) return "close";
    return "wrong";
  }

  /* ---- randomness ---- */
  function shuffle(arr, rng) {
    rng = rng || Math.random;
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // Round-robin over groups, never putting two of the same group side by side when avoidable.
  function interleave(items, groupOf, rng) {
    rng = rng || Math.random;
    const groups = new Map();
    for (const it of shuffle(items, rng)) {
      const g = groupOf(it);
      if (!groups.has(g)) groups.set(g, []);
      groups.get(g).push(it);
    }
    const out = [];
    let last;
    for (;;) {
      const cands = [...groups.entries()].filter(([, a]) => a.length);
      if (!cands.length) break;
      let pool = cands.filter(([g]) => g !== last);
      if (!pool.length) pool = cands;
      const max = Math.max(...pool.map(([, a]) => a.length));
      const top = pool.filter(([, a]) => a.length === max);
      const [g, a] = top[Math.floor(rng() * top.length)];
      out.push(a.pop());
      last = g;
    }
    return out;
  }

  /* ---- multiple choice ---- */
  // options: the correct answer plus up to n-1 distinct distractors, shuffled.
  // Words that must never appear as a wrong option (they stay valid as answers / trap entries).
  const NEVER_DISTRACTOR = ["kêr"];
  function blockedDistractor(w) {
    const k = joinKey(String(w || "").normalize("NFC").toLowerCase());
    return NEVER_DISTRACTOR.some((x) => joinKey(x.normalize("NFC")) === k);
  }
  function makeOptions(correct, pool, n, rng) {
    n = n || 4;
    const seen = new Set([joinKey(correct)]);
    const dis = [];
    for (const p of shuffle(pool || [], rng)) {
      const k = joinKey(p);
      if (!k || seen.has(k) || blockedDistractor(p)) continue;
      seen.add(k);
      dis.push(p);
      if (dis.length >= n - 1) break;
    }
    const options = shuffle([correct, ...dis], rng);
    return { options, answer: options.indexOf(correct) };
  }

  /* ---- transform tiles ---- */
  // Tiles are the target-side segments of the aligned pair, plus distractors from `pool`.
  function tilesFor(pair, dir, pool, rng, nDistract) {
    const segs = segments(pair, dir).filter((s) => s.tgt);
    const keys = new Set(segs.map((s) => joinKey(s.tgt)));
    const extra = [];
    for (const p of shuffle(pool || [], rng)) {
      const k = joinKey(p);
      if (!k || keys.has(k) || blockedDistractor(p)) continue;
      keys.add(k);
      extra.push(p);
      if (extra.length >= (nDistract == null ? 2 : nDistract)) break;
    }
    const tiles = [
      ...segs.map((s, i) => ({ id: "t" + i, text: s.tgt, correct: true, order: i })),
      ...extra.map((t, i) => ({ id: "d" + i, text: t, correct: false, order: -1 })),
    ];
    return { tiles: shuffle(tiles, rng), answer: segs.map((s) => s.tgt) };
  }
  // Join built tiles into one string: a tile written with a leading tatweel (ـم) is a
  // clitic and attaches to the previous tile with no space; a trailing tatweel attaches forward.
  function assemble(texts) {
    let out = "", glue = true;
    for (const raw of texts || []) {
      const t = String(raw || "");
      const clitic = t.startsWith("ـ");
      const bare = t.replace(/ـ/g, "");
      if (!bare) continue;
      out += (out && !clitic && !glue ? " " : "") + bare;
      glue = t.endsWith("ـ");
    }
    return out;
  }
  function checkTiles(builtTexts, pair, dir) {
    const built = joinKey(builtTexts.join(""));
    const segs = segments(pair, dir).filter((s) => s.tgt).map((s) => s.tgt).join("");
    const full = pair[sides(dir).tgt] || "";
    return built !== "" && (built === joinKey(segs) || built === joinKey(full));
  }
  // Typed answers once the card has been met twice.
  function wantsTyped(st) { return !!st && (st.reps || 0) >= 2; }
  // Grade handed to SRS.review: 4 good, 3 hard (close), 0 again.
  function gradeFor(level, assisted) {
    if (level === "wrong") return 0;
    if (level === "close" || assisted) return 3;
    return 4;
  }

  /* ---- script guide fading ---- */
  function accuracy(hist) {
    if (!hist || !hist.length) return 0;
    return hist.reduce((a, b) => a + (b ? 1 : 0), 0) / hist.length;
  }
  function nextGuide(hist, level) {
    const h = (hist || []).slice(-GUIDE.window);
    const a = accuracy(h);
    if (h.length < GUIDE.min) return { level, hist: h, changed: false, acc: a };
    if (a >= GUIDE.up && level < GUIDE.max) return { level: level + 1, hist: [], changed: true, acc: a };
    if (a < GUIDE.down && level > 0) return { level: level - 1, hist: [], changed: true, acc: a };
    return { level, hist: h, changed: false, acc: a };
  }
  const GUIDE_LABELS = ["Always shown", "Tap to show", "Hidden"];

  /* ---- placement probe ---- */
  // answers: [{ id, rel, ok }]. "Not sure" counts as not recognised.
  function scoreProbe(answers) {
    const byRel = {};
    let ok = 0;
    for (const a of answers || []) {
      const r = byRel[a.rel] || (byRel[a.rel] = { n: 0, ok: 0, pct: 0 });
      r.n++;
      if (a.ok) { r.ok++; ok++; }
    }
    for (const k of Object.keys(byRel)) byRel[k].pct = byRel[k].n ? Math.round((byRel[k].ok / byRel[k].n) * 100) : 0;
    const n = (answers || []).length;
    return { n, ok, pct: n ? Math.round((ok / n) * 100) : 0, byRel };
  }
  function probeBand(pct) { return PROBE_BANDS.find((b) => pct >= b.min); }

  /* ---- card index and progress ---- */
  // Every drillable item as { id, kind, group, ... } for one direction.
  // ns: card-id namespace (pairNs); "" keeps the Sorani<->Kurmanji ids.
  function buildIndex(data, dir, ns) {
    const idx = {};
    if (!sides(dir)) return idx;
    const id = (kind, x) => cardId(kind, x, ns);
    const frames = orderedFrames(data && data.FRAMES);
    for (const f of frames) {
      for (const p of f.pi || []) {
        if (p && p.id && p.dir === dir && Array.isArray(p.options)) idx[id("pi", p.id)] = { id: id("pi", p.id), kind: "pi", group: f.id, frameId: f.id, item: p };
      }
      for (const it of f.items || []) {
        if (it && it.id && Array.isArray(it.align) && it.align.length) idx[id("tr", it.id)] = { id: id("tr", it.id), kind: "tr", group: f.id, frameId: f.id, item: it };
      }
    }
    for (const r of (data && data.RULES) || []) {
      (r.test || []).forEach((t, i) => { idx[id("rule", `${r.id}.${i}`)] = { id: id("rule", `${r.id}.${i}`), kind: "rule", group: "rule:" + r.id, ruleId: r.id, item: t, rule: r }; });
    }
    for (const t of (data && data.TRAPS) || []) {
      if (t && t.id && t.fix && t.fix[dir]) idx[id("trap", t.id)] = { id: id("trap", t.id), kind: "trap", group: "traps", item: t };
    }
    return idx;
  }
  // The first-exposure block for one frame: its processing-instruction items, then a few sentences.
  function frameBlockIds(frame, idx, max, ns) {
    max = max || 12;
    const pi = Object.values(idx).filter((c) => c.kind === "pi" && c.frameId === frame.id).map((c) => c.id);
    const tr = (frame.items || []).map((it) => cardId("tr", it.id, ns)).filter((id) => idx[id]);
    const room = Math.max(6, max - pi.length);
    return [...pi, ...tr.slice(0, room)];
  }
  // Everything a "Practise bridge" session may draw from: introduced frames, finished rules, opened traps.
  function practicePool(idx, done, frames) {
    done = done || {};
    const known = new Set(introducedFrames(frames, done).map((f) => f.id));
    return Object.values(idx).filter((c) => {
      if (c.kind === "pi" || c.kind === "tr") return known.has(c.frameId);
      if (c.kind === "rule") return !!done["rule:" + c.ruleId];
      if (c.kind === "trap") return !!done["view:traps"];
      return false;
    }).map((c) => c.id);
  }
  function stepProgress(sieve, done, data) {
    done = done || {};
    data = data || {};
    const frames = orderedFrames(data.FRAMES);
    const inStep = (n) => frames.filter((f) => (f.sieve || 5) === n);
    const count = (arr, test) => ({ done: arr.filter(test).length, total: arr.length });
    // A step with nothing in it has total 0 (the hub hides it).
    const has = (x) => Array.isArray(x) && x.length > 0;
    const view = (key, present) => present ? { done: done[key] ? 1 : 0, total: 1 } : { done: 0, total: 0 };
    switch (sieve) {
      case 1: return view("view:words", has(data.LEXICON));
      case 2: return count(data.RULES || [], (r) => done["rule:" + r.id]);
      case 3: return view("view:script", has(data.INTRO && data.INTRO.script));
      case 4: {
        const fs = inStep(4); const c = count(fs, (f) => done[f.id]);
        const fe = has(data.FERRISS) ? 1 : 0;
        return { done: c.done + (fe && done["view:ferriss"] ? 1 : 0), total: c.total + fe };
      }
      case 5: { const fs = frames.filter((f) => (f.sieve || 5) !== 4); return count(fs, (f) => done[f.id]); }
      case 6: return view("view:traps", has(data.TRAPS));
      case 7: return count(data.READING || [], (p) => done["read:" + p.id]);
      default: return { done: 0, total: 0 };
    }
  }

  /* ---- pair summaries ---- */
  function pairCounts(data) {
    const d = data || {};
    const n = (x) => (Array.isArray(x) ? x.length : 0);
    return {
      words: n(d.LEXICON), rules: n(d.RULES), frames: n(d.FRAMES), traps: n(d.TRAPS),
      reading: n(d.READING), tables: n(d.PARADIGMS), sources: n(d.SOURCES),
    };
  }
  function hasPairData(data) {
    const c = pairCounts(data);
    return c.words + c.rules + c.frames + c.traps + c.reading + c.tables > 0;
  }
  // How many items cite each source id (any `src: "<id>"` string field anywhere in the data).
  function sourceUse(data) {
    const out = {};
    const ids = new Set(((data && data.SOURCES) || []).map((s) => s && s.id).filter(Boolean));
    const walk = (x, depth) => {
      if (!x || typeof x !== "object" || depth > 12) return;
      if (Array.isArray(x)) { x.forEach((y) => walk(y, depth + 1)); return; }
      if (typeof x.src === "string" && ids.has(x.src)) out[x.src] = (out[x.src] || 0) + 1;
      for (const k of Object.keys(x)) if (k !== "SOURCES") walk(x[k], depth + 1);
    };
    walk(data, 0);
    return out;
  }

  /* ---- paradigm tables ---- */
  const PERSONS = {
    "1sg": "I", "2sg": "you", "3sg": "he, she, it", "3sg.m": "he", "3sg.f": "she",
    "1pl": "we", "2pl": "you (pl.)", "3pl": "they",
  };
  // A cell is "" (not attested), a string, or { w, built, src }. Missing cells stay missing.
  function cellOf(c) {
    if (c && typeof c === "object") {
      const w = String(c.w || c.form || c.text || "").trim();
      return { w, missing: !w, built: !!c.built };
    }
    const w = String(c == null ? "" : c).trim();
    return { w, missing: !w, built: false };
  }
  // Normalised table: every row has exactly cols.length cells per side.
  function paradigmGrid(par) {
    const cols = Array.isArray(par && par.cols) ? par.cols.slice() : [];
    const pad = (a) => cols.map((_, i) => cellOf(Array.isArray(a) ? a[i] : ""));
    const rows = (Array.isArray(par && par.rows) ? par.rows : []).filter(Boolean).map((r) => ({
      label: r.label || {}, tgt: pad(r.tgt), src: pad(r.src), built: !!r.built,
    }));
    let attested = 0, missing = 0, built = 0;
    for (const r of rows) for (const c of r.tgt) { if (c.missing) missing++; else { attested++; if (c.built || r.built) built++; } }
    return { cols, persons: cols.map((c) => PERSONS[c] || c), rows, attested, missing, built };
  }

  const Model = {
    KINDS, REL, SHARED, KIND_INFO, NAME, OWN, CODES, GUIDE, GUIDE_LABELS, PROBE_BANDS,
    PAIRS, PAIR_FILES, DATA_VERSION, ALL_DIRS, PERSONS,
    isRtl, hasAudio, pairById, pairOfDir, isLegacyPair, routes, pairFiles, pairNs,
    ensureShared, pairState, pairCounts, hasPairData, sourceUse, paradigmGrid,
    direction, sides, otherOf, offeredFor, ensure,
    orderedFrames, frameStatus, nextFrame, introducedFrames,
    cardId, isBridgeCard, parseCardId,
    segments, kindCounts, relCounts, sharedPct,
    joinKey, foldMarks, sameAnswer, matchLevel,
    shuffle, interleave, makeOptions, blockedDistractor, NEVER_DISTRACTOR, tilesFor, assemble, checkTiles, wantsTyped, gradeFor,
    accuracy, nextGuide, scoreProbe, probeBand,
    buildIndex, frameBlockIds, practicePool, stepProgress,
  };

  if (typeof module !== "undefined" && module.exports) module.exports = { Model };
  if (typeof document === "undefined") { root.Bridge = { Model }; return; }

  /* ============================== PART 2: UI ============================== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  const ICON_SOUND = `<svg class="ico-sound" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`;

  let C = null;                       // context of the render in progress (see App.bridgeCtx)
  // pair: the open lazily loaded pair id (ckb-hac...), or null for Sorani<->Kurmanji.
  const UI = { pair: null, view: null, sess: null, rule: null, probe: null, reading: null, words: { rel: "same", q: "", shown: 40 }, script: null, trapKind: "all" };

  function isNew() { return !!UI.pair && !isLegacyPair(UI.pair); }
  function D() { return isNew() ? ((root.__BRIDGES || {})[UI.pair] || {}) : (root.__BRIDGE || {}); }
  function arr(x) { return Array.isArray(x) ? x : []; }
  function target() { return (root.Lang && root.Lang.active && root.Lang.active()) || null; }
  function B(state) { return ensure(state); }
  function curDir(state) {
    const t = target();
    return direction(t, B(state).known[t]);
  }
  // Is this a language the bridge can serve (kmr / ckb)?  Used to show the "I already speak" card.
  function offered() { return offeredFor(target()) && !!root.__BRIDGE; }
  // The Sorani<->Kurmanji course is switched on for the active language.
  function enabled(state) { return !!state && offered() && !!curDir(state); }
  function info(state) {
    if (isNew()) {
      const p = pairById(UI.pair);
      const dir = p.dirs[0];
      return { dir, ...sides(dir), pairId: p.id, ns: pairNs(p.id) };
    }
    const dir = curDir(state);
    const s = sides(dir);
    return dir ? { dir, src: s.src, tgt: s.tgt, pairId: "ckb-kmr", ns: "" } : null;
  }

  /* ---- progress store: the language state (Sorani<->Kurmanji) or the shared store (other pairs) ---- */
  let SH = null;
  function shared() {
    if (!SH) SH = ensureShared(root.Store && root.Store.loadShared ? root.Store.loadShared() : {});
    return SH;
  }
  // done / probe / explainIn for the open course.
  function PS() { return isNew() ? pairState(shared(), UI.pair) : B(C.state); }
  function save() {
    if (isNew()) { if (root.Store && root.Store.saveShared) root.Store.saveShared(shared()); }
    else C.persist();
  }
  function cards() { return isNew() ? PS().cards : C.state.cards; }

  function tx(o) {          // an { en, ku } pair in the chosen explanation language
    if (!o) return { text: "", ku: false };
    const ku = PS().explainIn === "ku" && !!o.ku;
    return { text: ku ? o.ku : (o.en || o.ku || ""), ku };
  }
  function frames() { return orderedFrames(D().FRAMES); }
  function frameIds() { return frames().map((f) => f.id); }
  let idxCache = { key: null, idx: null };
  function index(dir) {
    const d = D();
    const ns = isNew() ? pairNs(UI.pair) : "";
    const key = ns + "|" + dir + "|" + (d.FRAMES || []).length + "|" + (d.RULES || []).length + "|" + (d.TRAPS || []).length;
    if (idxCache.key !== key || idxCache.src !== d) idxCache = { key, src: d, idx: buildIndex(d, dir, ns) };
    return idxCache.idx;
  }
  // Where "back to the course" goes.
  function goHub() { if (isNew()) go("bridge-pair", UI.pair); else go("bridge"); }

  /* ---- lazy loading of a pair's data files ---- */
  const loads = {};                   // pairId -> Promise
  function loadPair(id) {
    const p = pairById(id);
    if (!p || p.legacy || typeof document === "undefined") return Promise.resolve(false);
    if (loads[id]) return loads[id];
    loads[id] = Promise.all(pairFiles(id).map((src) => new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.dataset.bridgePair = id;
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);         // every file is optional: a 404 just leaves its section empty
      document.head.appendChild(s);
    }))).then(() => { loaded[id] = true; return true; });
    return loads[id];
  }
  const loaded = {};
  function isLoaded(id) { const p = pairById(id); return !!p && (p.legacy || !!loaded[id]); }
  function dataOf(id) { return isLegacyPair(id) ? (root.__BRIDGE || {}) : ((root.__BRIDGES || {})[id] || {}); }
  // After a load, re-render if the learner is still on a view that waits for it.
  // (A view that waits marks itself with data-br-wait.)
  function whenLoaded(promise) {
    promise.then(() => { if (C && document.querySelector("[data-br-wait]")) C.render(); });
  }

  /* ---- Kurdish text ---- */
  // Mixed-script isolation. A Sorani (RTL) paragraph wraps every maximal Latin run in
  // <bdi dir="ltr">; a Kurmanji (LTR) paragraph wraps every Arabic-script run in
  // <bdi dir="rtl" lang="ckb">. Input is raw text; output is escaped HTML.
  const LAT = "A-Za-zÀ-ɏ";
  const LATIN_RUN = new RegExp(`[${LAT}][${LAT}0-9'’]*(?:[ \\u00a0.,/\\-–…"“”()=+?!:;]+(?=[${LAT}0-9])[${LAT}0-9'’]*)*(?:[?!.](?=\\s|$|[^${LAT}]))?`, "g");
  const ARABIC_RUN = /[؀-ۿݐ-ݿ](?:[؀-ۿݐ-ݿ‌‍ \u00a0«».!?…'"\-/]*[؀-ۿݐ-ݿ»])?/g;
  function richKu(code, text) {
    const t = String(text == null ? "" : text);
    if (isRtl(code)) {
      const parts = [];
      let last = 0, m;
      LATIN_RUN.lastIndex = 0;
      while ((m = LATIN_RUN.exec(t))) {
        parts.push(esc(t.slice(last, m.index).replace(/→/g, "←").replace(/\/(?=\S)/g, "/\u2060")));
        parts.push(`<bdi dir="ltr">${esc(m[0].replace(/[ \u00a0]+$/, ""))}</bdi>`);
        last = m.index + m[0].replace(/[ \u00a0]+$/, "").length;
        LATIN_RUN.lastIndex = last;
      }
      parts.push(esc(t.slice(last).replace(/→/g, "←").replace(/\/(?=\S)/g, "/\u2060")));
      return parts.join("");
    }
    return esc(t).replace(ARABIC_RUN, (r) => `<bdi dir="rtl" lang="ckb"${/\s/.test(r) ? "" : ' class="br-nowrap"'}>${r}</bdi>`);
  }
  // Inline run of Kurdish in the given variety code. Arabic-script varieties get their own direction.
  function K(code, text, cls) {
    if (!text) return "";
    const c = cls ? ` class="${cls}"` : "";
    return isRtl(code)
      ? `<bdi dir="rtl" lang="${code}"${c}>${richKu(code, text)}</bdi>`
      : `<span lang="${code}"${c}>${richKu(code, text)}</span>`;
  }
  // Block of Kurdish text: Arabic-script blocks are right-to-left and right-aligned.
  function KB(code, text, cls) {
    return isRtl(code)
      ? `<div dir="rtl" lang="${code}" class="br-kb ${cls || ""}">${richKu(code, text)}</div>`
      : `<div lang="${code}" dir="ltr" class="br-kb ${cls || ""}">${richKu(code, text)}</div>`;
  }
  // dir/lang attributes for a container of text in one variety.
  function attrs(code) { return isRtl(code) ? `dir="rtl" lang="${code}"` : `lang="${code}"`; }
  // Recordings exist only for Sorani and Kurmanji: no hear-it button for the other targets.
  function canSpeak() { const me = C && info(C.state); return !!me && hasAudio(me.tgt); }
  function speak(text) {
    if (!canSpeak() || !text || !root.Speech) return;
    root.Speech.speak(text, { lang: root.Lang.cfg().langCode, rate: C.state.settings.prefRate });
  }
  function sayBtn(text, label) {
    if (!text || !canSpeak()) return "";
    return `<button type="button" class="voice-btn br-say" data-br-say="${esc(text)}" aria-label="${esc(label || "Hear it")}">${ICON_SOUND}</button>`;
  }
  const clipMemo = new Map();
  function wireSay(rootEl) {
    $$("[data-br-say]", rootEl).forEach((b) => {
      const text = b.dataset.brSay;
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        if (b.classList.contains("is-missing")) { C.toast("No recording for this one yet."); return; }
        root.Speech.speak(text, { lang: root.Lang.cfg().langCode, rate: C.state.settings.prefRate });
      });
      if (root.Speech && root.Speech.hasClip) {
        const lang = root.Lang.cfg().langCode;
        const mk = lang + "|" + text;
        const mark = (ok) => {
          if (ok) return;
          b.classList.add("is-missing", "voice-btn--static");
          b.setAttribute("aria-disabled", "true");
          b.title = "No recording for this one yet";
        };
        if (clipMemo.has(mk)) mark(clipMemo.get(mk));
        else root.Speech.hasClip(text, { lang }).then((ok) => { clipMemo.set(mk, ok); mark(ok); }).catch(() => {});
      }
    });
  }

  /* ---- shared small pieces ---- */
  function ph(o) { return C.pageHeader(o); }
  function go(view, arg) { C.navigate(view, arg); }
  function pill(text, cls) { return `<span class="chip ${cls || ""}">${esc(text)}</span>`; }
  function barHtml(done, total, label) {
    const pct = total ? Math.round((done / total) * 100) : 0;
    return `<div class="progress-track br-bar" role="progressbar" aria-label="${esc(label)}" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}" aria-valuetext="${done} of ${total}"><div class="progress-fill" style="width:${pct}%"></div></div>`;
  }
  function viewWrap(cls) {
    const wrap = el(`<div class="view view-bridge ${cls || ""}"></div>`);
    wrap.classList.add("br-guide-" + guideLevel(C.state));
    // The learner of another pair reads Arabic script already: no Latin reading guide.
    if (isNew()) { wrap.setAttribute("data-no-guide", ""); wrap.classList.add("br-pair-" + UI.pair); }
    return wrap;
  }
  function guideLevel(state) {
    return !isNew() && target() === "ckb" ? B(state).scriptLevel.ckb : 0;
  }
  function markDone(key) {
    const b = PS();
    if (!b.done[key]) { b.done[key] = Date.now(); save(); }
  }
  function backTo(wrap, id, view, arg) {
    const b = $("#" + id, wrap);
    if (b) b.addEventListener("click", () => (view === "bridge" ? goHub() : go(view, arg)));
  }
  // A card met before and now due again (never-seen cards are not "due").
  function reviewDue(state, id) {
    const st = cards()[id];
    return !!st && st.reps > 0 && st.due <= Date.now();
  }
  function plural(n, w) { return `${n} ${w}${n === 1 ? "" : "s"}`; }

  // Text in the learner's own variety (the explanation language), or English.
  function explainBlock(o, extraCls) {
    const t = tx(o);
    if (!t.text) return "";
    const known = info(C.state).src;
    return t.ku ? KB(known, t.text, "br-explain " + (extraCls || "")) : `<p class="br-explain ${extraCls || ""}">${esc(t.text)}</p>`;
  }

  /* ---- explanation language toggle ---- */
  function explainToggle() {
    const me = info(C.state);
    const b = PS();
    const wrap = el(`
      <div class="br-toggle" role="group" aria-label="Explanations in">
        <span class="br-toggle-lab">Explain in</span>
        <button type="button" class="br-tbtn" data-v="ku" aria-pressed="${b.explainIn === "ku"}"><span ${attrs(me.src)}>${esc(OWN[me.src])}</span></button>
        <button type="button" class="br-tbtn" data-v="en" aria-pressed="${b.explainIn === "en"}">English</button>
      </div>`);
    $$(".br-tbtn", wrap).forEach((btn) => btn.addEventListener("click", () => {
      b.explainIn = btn.dataset.v;
      save();
      C.render();
    }));
    return wrap;
  }

  /* ---- "I already speak..." setting ---- */
  function knownCard(ctx, opts) {
    C = ctx;
    opts = opts || {};
    const t = target();
    if (!offeredFor(t)) return null;
    const other = otherOf(t);
    const b = B(ctx.state);
    const cur = b.known[t];
    const card = el(`
      <article class="card br-known ${opts.compact ? "is-compact" : ""}">
        <fieldset class="br-known-set">
          <legend class="br-known-h">I already speak…</legend>
          ${opts.compact ? "" : `<p class="muted br-known-p">If you speak ${NAME[other]}, ${NAME[t]} comes faster. The app shows what is already the same and teaches only what changes.</p>`}
          <div class="br-seg-ctl" role="radiogroup" aria-label="Kurdish variety you already speak">
            <label class="br-radio"><input type="radio" name="br-known" value="" ${!cur ? "checked" : ""}><span>Neither</span></label>
            <label class="br-radio"><input type="radio" name="br-known" value="${other}" ${cur === other ? "checked" : ""}><span>${NAME[other]}</span></label>
          </div>
        </fieldset>
      </article>`);
    $$("input[name=br-known]", card).forEach((r) => r.addEventListener("change", () => {
      b.known[t] = r.value || null;
      ctx.persist();
      ctx.toast(r.value ? `Bridge course on: ${NAME[r.value]} to ${NAME[t]}.` : "Bridge course off.");
      ctx.render();
    }));
    return card;
  }

  // Browse: the "I already speak" card until it is set; then the Bridge category.
  function browseBlock(ctx) {
    C = ctx;
    if (!offered()) return null;
    if (!enabled(ctx.state)) {
      const box = el(`<div class="stack-sm br-ask"></div>`);
      box.appendChild(knownCard(ctx));
      box.appendChild(varietiesItem());
      return { ask: box };
    }
    return { section: browseSection(ctx) };
  }
  // The way into every bridge (Sorani, Kurmanji, Hawrami, Kalhori, Zazaki).
  function varietiesItem() {
    const n = routes().length;
    const item = el(`
      <button type="button" class="list-item br-varieties-item" id="br-open-varieties">
        <span class="li-icon" aria-hidden="true">✦</span>
        <div class="li-main">
          <div class="li-title">Kurdish varieties</div>
          <div class="li-sub">${n} bridges: Sorani, Kurmanji, Hawrami, Kalhori, Zazaki</div>
        </div>
        <span class="li-arrow" aria-hidden="true">→</span>
      </button>`);
    item.addEventListener("click", () => go("bridge-varieties"));
    return item;
  }
  function progressSummary(state) {
    const fs = frames();
    const done = fs.filter((f) => B(state).done[f.id]).length;
    return { done, total: fs.length };
  }
  function browseSection(ctx) {
    const me = info(ctx.state);
    const p = progressSummary(ctx.state);
    const box = el(`<div class="stack-sm"></div>`);
    const item = el(`
      <button type="button" class="list-item" id="br-open-hub">
        <span class="li-icon" aria-hidden="true">⇄</span>
        <div class="li-main">
          <div class="li-title">${NAME[me.src]} to ${NAME[me.tgt]} bridge course</div>
          <div class="li-sub">${p.total ? `${p.done} of ${p.total} frames introduced` : "Words, sound rules, script and frames"}</div>
        </div>
        <span class="li-arrow" aria-hidden="true">→</span>
      </button>`);
    item.addEventListener("click", () => { UI.pair = null; go("bridge"); });
    box.appendChild(item);
    box.appendChild(varietiesItem());
    box.appendChild(knownCard(ctx, { compact: true }));
    return box;
  }
  // Home: one quiet card.
  function homeCard(ctx) {
    C = ctx;
    if (!enabled(ctx.state)) return null;
    const me = info(ctx.state);
    const p = progressSummary(ctx.state);
    const idx = index(me.dir);
    const pool = practicePool(idx, B(ctx.state).done, D().FRAMES);
    const due = pool.filter((id) => reviewDue(ctx.state, id)).length;
    const sub = p.total ? `${p.done} of ${p.total} frames introduced${due ? ` · ${plural(due, "card")} to practise` : ""}` : "Use the Kurdish you already speak";
    const b = el(`
      <button type="button" class="list-item br-home-card">
        <span class="li-icon" aria-hidden="true">⇄</span>
        <div class="li-main">
          <div class="li-title">Bridge from ${NAME[me.src]}</div>
          <div class="li-sub">${esc(sub)}</div>
        </div>
        <span class="li-arrow" aria-hidden="true">→</span>
      </button>`);
    b.addEventListener("click", () => { UI.pair = null; go("bridge"); });
    return b;
  }

  /* ---- the diff view ---- */
  function legend(kinds) {
    return `<ul class="br-legend" aria-label="Colour and symbol key">${(kinds || ["same", "sound", "cognate", "different", "grammar", "only"]).map((k) =>
      `<li><span class="br-seg k-${k}" aria-hidden="true"><span class="br-sym">${KIND_INFO[k].sym}</span><span class="br-seg-t">${esc(KIND_INFO[k].label)}</span></span></li>`).join("")}</ul>`;
  }
  function chipHtml(s, code, which) {
    const k = s.k;
    const text = which === "src" ? s.src : s.tgt;
    return `<button type="button" class="br-seg k-${k}" data-i="${s.i}" data-k="${k}" aria-pressed="false">` +
      `<span class="br-sym" aria-hidden="true">${KIND_INFO[k].sym}</span>` +
      `<span class="br-seg-t" ${attrs(code)}>${esc(text)}</span>` +
      `<span class="sr-only"> (${esc(KIND_INFO[k].label)})</span></button>`;
  }
  // One sentence pair: source row over target row, chips colour-coded by kind; tap for the note.
  function diffPair(pair, me, o) {
    o = o || {};
    const segs = segments(pair, me.dir);
    const srcText = pair[me.src] || "", tgtText = pair[me.tgt] || "";
    const row = (which, code, label) => {
      const list = segs.filter((s) => (which === "src" ? s.src : s.tgt));
      return `<div class="br-line br-line-${which}">
        <span class="br-lab">${esc(label)}</span>
        <div class="br-chips" ${attrs(code)}>${list.map((s) => chipHtml(s, code, which)).join("") || `<span class="br-plain">${esc(which === "src" ? srcText : tgtText)}</span>`}</div>
      </div>`;
    };
    const node = el(`
      <article class="br-pair card">
        <div class="br-pair-top">
          <div class="br-en">${esc(pair.en || "")}</div>
          ${o.noAudio ? "" : sayBtn(tgtText)}
        </div>
        ${row("src", me.src, `${NAME[me.src]} · you know`)}
        ${row("tgt", me.tgt, `${NAME[me.tgt]} · new`)}
        <div class="br-note" role="status" aria-live="polite" hidden></div>
      </article>`);
    const note = $(".br-note", node);
    const rules = arr(D().RULES);
    const chips = $$(".br-seg", node);
    chips.forEach((chip) => chip.addEventListener("click", () => {
      const i = chip.dataset.i;
      const on = chip.getAttribute("aria-pressed") !== "true";
      chips.forEach((c) => { c.setAttribute("aria-pressed", "false"); c.classList.remove("is-linked"); });
      if (!on) { note.hidden = true; return; }
      chips.filter((c) => c.dataset.i === i).forEach((c) => { c.setAttribute("aria-pressed", "true"); c.classList.add("is-linked"); });
      const s = segs[+i];
      const rule = s.rule ? rules.find((r) => r.id === s.rule) : null;
      note.innerHTML = `<span class="br-seg k-${s.k}" aria-hidden="true"><span class="br-sym">${KIND_INFO[s.k].sym}</span><span class="br-seg-t">${esc(KIND_INFO[s.k].label)}</span></span> ` +
        `<span>${esc(s.note || KIND_INFO[s.k].text)}</span>` +
        (rule ? ` <button type="button" class="linklike" data-rule="${esc(rule.id)}">Rule: ${esc(rule.title)}</button>` : "");
      note.hidden = false;
      const rl = $("[data-rule]", note);
      if (rl) rl.addEventListener("click", () => go("bridge-rule", rl.dataset.rule));
    }));
    wireSay(node);
    return node;
  }
  function summaryLine(segs) {
    const c = kindCounts(segs);
    const parts = KINDS.filter((k) => c[k]).map((k) => `${c[k]} ${KIND_INFO[k].label.toLowerCase()}`);
    return parts.join(" · ");
  }

  /* ============================== HUB ============================== */
  const STEP_FALLBACK = [
    ["know", "You already know a lot"], ["sounds", "Sound rules"], ["script", "Script bridge"],
    ["skeleton", "Same skeleton"], ["frames", "The real differences"], ["traps", "Traps"], ["read", "Read and listen"],
  ];
  function stepsList(me) {
    const intro = D().INTRO;
    const given = intro && Array.isArray(intro.steps) ? intro.steps.slice().sort((a, b) => a.sieve - b.sieve) : [];
    return STEP_FALLBACK.map(([id, title], i) => {
      const g = given.find((s) => s.sieve === i + 1) || {};
      return { sieve: i + 1, id: g.id || id, title: g.title || title, blurb: g.blurb && g.blurb[me.dir] };
    });
  }
  function renderHub(ctx) {
    const me = info(ctx.state);
    const b = PS();
    const d = D();
    const fresh = isNew();
    const wrap = viewWrap("br-hub");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Bridge course", title: `${NAME[me.src]} to ${NAME[me.tgt]}`,
      lead: fresh
        ? `You already speak ${NAME[me.src]}. Start from what you know and learn what changes in ${CODES[me.tgt].long}.`
        : `You already speak ${NAME[me.src]}. Start from what you know and learn only what changes.`,
    });
    backTo(wrap, "br-back", fresh ? "bridge-varieties" : "browse");

    const top = el(`<div class="br-top stack-sm"></div>`);
    top.appendChild(explainToggle());
    wrap.appendChild(top);

    // Practise
    const idx = index(me.dir);
    const pool = practicePool(idx, b.done, d.FRAMES);
    const dueN = pool.filter((id) => reviewDue(ctx.state, id)).length;
    const nf = nextFrame(d.FRAMES, b.done);
    const cta = el(`<div class="br-cta stack-sm"></div>`);
    if (fresh && dueN) {
      const r = el(`<button type="button" class="btn primary lg br-cta-btn" id="br-review">Review ${dueN} due<span aria-hidden="true">→</span></button>`);
      r.addEventListener("click", () => startReview(ctx));
      cta.appendChild(r);
    }
    if (nf) {
      const c = el(`<button type="button" class="btn ${fresh && dueN ? "" : "primary"} lg br-cta-btn" id="br-next">Next: ${esc(nf.title)}<span aria-hidden="true">→</span></button>`);
      c.addEventListener("click", () => go("bridge-frame", nf.id));
      cta.appendChild(c);
    }
    if (pool.length) {
      const p = el(`<button type="button" class="btn lg" id="br-practise">Practise bridge${dueN ? ` · ${plural(dueN, "card")} ready` : ""}</button>`);
      p.addEventListener("click", () => startPractice(ctx));
      cta.appendChild(p);
    }
    if (cta.children.length) wrap.appendChild(cta);

    // Where the material comes from (other pairs): say it plainly, up front.
    if (fresh && d.META) {
      const v = tx(d.META.variety), g = tx(d.META.grounding);
      const prov = el(`<article class="card stack-sm br-ground">
        <span class="eyebrow">Where this comes from</span>
        ${v.text ? (v.ku ? KB(me.src, v.text, "br-explain") : `<p class="br-explain">${esc(v.text)}</p>`) : ""}
        ${g.text ? (g.ku ? KB(me.src, g.text, "br-explain br-ground-note") : `<p class="br-explain br-ground-note">${esc(g.text)}</p>`) : ""}
        <div class="row-wrap"><button type="button" class="btn" id="br-sources">Sources${arr(d.SOURCES).length ? ` (${arr(d.SOURCES).length})` : ""}</button></div>
      </article>`);
      $("#br-sources", prov).addEventListener("click", () => go("bridge-sources"));
      wrap.appendChild(prov);
    }

    // Intro + history
    const hist = d.INTRO && d.INTRO.history;
    const histText = hist ? (b.explainIn === "ku" && hist[me.src]) ? { t: hist[me.src], ku: true } : { t: hist.en, ku: false } : null;
    const facts = arr(d.INTRO && d.INTRO.facts).filter((f) => f && f.en);
    const lead = fresh
      ? `<p>${esc(NAME[me.tgt])} and ${esc(NAME[me.src])} are both spoken by Kurds. Neither came from the other, and neither is purer. We show you both side by side and teach what changes.</p>`
      : `<p>Kurmanji and Sorani are sister branches of the Kurdish family. Neither came from the other, and neither is purer or older. They share a lot, and they differ in a few regular ways. We show you both and teach only the differences.</p>`;
    if (!fresh || (histText && histText.t) || facts.length) {
      const intro = el(`
        <details class="card br-intro" ${p0(b) ? "" : "open"}>
          <summary>How this works, and where the two come from</summary>
          ${lead}
          ${histText && histText.t ? (histText.ku ? KB(me.src, histText.t, "br-explain") : `<p>${esc(histText.t)}</p>`) : ""}
          ${facts.length ? `<ul class="br-facts">${facts.map((f) => `<li>${esc(f.en)}${f.src ? ` <span class="muted">(${esc(srcName(f.src))})</span>` : ""}</li>`).join("")}</ul>` : ""}
        </details>`);
      wrap.appendChild(intro);
    }

    // Probe
    if (arr(d.PROBE && d.PROBE[me.dir]).length) {
      const pr = b.probe[me.dir];
      const probeCard = el(`
        <article class="card br-probe-card">
          <div class="row spread"><h2 class="br-h2">Placement probe</h2>${pr ? pill(`${pr.pct}% recognised`, "accent") : pill("Optional")}</div>
          <p class="muted">${pr ? `Last time you recognised ${pr.pct}% of ${pr.n} words (${esc(pr.date)}).` : `About ${arr(d.PROBE[me.dir]).length} words, a few minutes. It shows how much of ${NAME[me.tgt]} you already recognise.`}</p>
          <button type="button" class="btn" id="br-probe">${pr ? "Try again" : "Take the probe"}</button>
        </article>`);
      $("#br-probe", probeCard).addEventListener("click", () => go("bridge-probe"));
      wrap.appendChild(probeCard);
    }

    // The seven steps (a step with nothing in it is left out)
    const stepsWrap = el(`<div class="stack br-steps"></div>`);
    const fstat = frameStatus(d.FRAMES, b.done);
    for (const st of stepsList(me)) {
      const pg = stepProgress(st.sieve, b.done, d);
      if (!pg.total) continue;
      const blurb = st.blurb ? explainBlock(st.blurb) : "";
      const card = el(`
        <section class="card br-step" aria-labelledby="br-st${st.sieve}">
          <div class="br-step-head">
            <span class="br-num" aria-hidden="true">${st.sieve}</span>
            <h2 id="br-st${st.sieve}" class="br-h2">${esc(st.title)}</h2>
            <span class="br-step-count">${pg.total ? `${pg.done} of ${pg.total}` : ""}</span>
          </div>
          ${pg.total ? barHtml(pg.done, pg.total, `Step ${st.sieve} progress`) : ""}
          ${blurb}
          <div class="br-step-body stack-sm"></div>
        </section>`);
      const body = $(".br-step-body", card);
      const link = (label, view, arg, cls) => {
        const bt = el(`<button type="button" class="btn ${cls || ""}">${esc(label)}</button>`);
        bt.addEventListener("click", () => go(view, arg));
        body.appendChild(bt);
      };
      if (st.sieve === 1) link(arr(d.LEXICON).length ? `See the ${arr(d.LEXICON).length} words` : "See the words", "bridge-words");
      if (st.sieve === 2) link("Learn the sound rules", "bridge-rules");
      if (st.sieve === 3) link("Letters and reading practice", "bridge-script");
      if (st.sieve === 4 && arr(d.FERRISS).length) link(fresh ? "Sentences side by side" : "The twelve sentences side by side", "bridge-ferriss");
      if (st.sieve === 6) link("Look-alikes and false friends", "bridge-traps");
      if (st.sieve === 7) link("Parallel passages", "bridge-reading-list");
      if (st.sieve === 4 || st.sieve === 5) {
        const list = fstat.filter((x) => (st.sieve === 4 ? (x.frame.sieve || 5) === 4 : (x.frame.sieve || 5) !== 4));
        if (list.length) {
          const ul = el(`<div class="stack-sm br-frame-list"></div>`);
          list.forEach((x) => {
            const f = x.frame;
            const it = el(`
              <button type="button" class="list-item br-frame-item is-${x.status}">
                <span class="br-fnum" aria-hidden="true">${x.index + 1}</span>
                <div class="li-main"><div class="li-title">${esc(f.title)}</div>
                  <div class="li-sub">${f.level ? esc(f.level) + " · " : ""}${plural(arr(f.items).length, "sentence")}</div></div>
                ${x.status === "done" ? pill("Introduced", "success") : x.status === "next" ? pill("Next", "primary") : ""}
                <span class="li-arrow" aria-hidden="true">→</span>
              </button>`);
            it.addEventListener("click", () => go("bridge-frame", f.id));
            ul.appendChild(it);
          });
          body.appendChild(ul);
        } else if (st.sieve === 5) body.appendChild(el(`<p class="muted">The frames are not available yet.</p>`));
      }
      stepsWrap.appendChild(card);
    }
    wrap.appendChild(stepsWrap);

    // Whole paradigms
    const pars = arr(d.PARADIGMS).filter((x) => x && x.id);
    if (pars.length) {
      const t = el(`<article class="card stack-sm br-tables-card">
        <h2 class="br-h2">Tables</h2>
        <p class="muted">${plural(pars.length, "full table")} (${esc(pars.map((x) => (x.title && x.title.en) || x.id).slice(0, 4).join(", "))}${pars.length > 4 ? ", …" : ""}), ${NAME[me.tgt]} next to ${NAME[me.src]}, person by person.</p>
        <div class="row-wrap"><button type="button" class="btn" id="br-tables">See the tables</button></div></article>`);
      $("#br-tables", t).addEventListener("click", () => go("bridge-tables"));
      wrap.appendChild(t);
    }

    // Regional echoes
    const hooks = arr(d.INTRO && d.INTRO.hooks && d.INTRO.hooks[me.dir]);
    if (hooks.length) {
      const det = el(`<details class="card br-hooks"><summary>Regional echoes you may already know</summary>
        <ul class="br-hook-list">${hooks.map((h) => {
          const t = tx(h);
          const ex = h.ex && typeof h.ex === "object"
            ? `<p class="br-hook-ex">${K(me.src, h.ex[me.src])} <span aria-hidden="true">→</span> ${K(me.tgt, h.ex[me.tgt], "br-hook-tgt")}${h.ex.en ? ` <span class="muted">· ${esc(h.ex.en)}</span>` : ""}</p>`
            : h.ex ? `<p class="br-hook-ex">${/[؀-ۿ]/.test(h.ex) ? K(isRtl(me.tgt) ? me.tgt : isRtl(me.src) ? me.src : "ckb", h.ex) : K(isRtl(me.tgt) ? me.src : me.tgt, h.ex)}</p>` : "";
          return `<li><span class="br-hook-where">${esc(h.where)}</span>${t.ku ? KB(me.src, t.text, "br-explain") : `<p class="br-explain">${esc(t.text)}</p>`}${ex}</li>`;
        }).join("")}</ul>
        <p class="muted br-small">These are only mentioned as hooks. The course teaches the standard written forms.</p></details>`);
      wrap.appendChild(det);
    }

    if (fresh) {
      const src = el(`<button type="button" class="list-item br-sources-item"><span class="li-icon" aria-hidden="true">§</span>
        <div class="li-main"><div class="li-title">Sources</div><div class="li-sub">${esc(arr(d.SOURCES).length ? plural(arr(d.SOURCES).length, "source") + ", and what is still unchecked" : "What this course is built from")}</div></div>
        <span class="li-arrow" aria-hidden="true">→</span></button>`);
      src.addEventListener("click", () => go("bridge-sources"));
      wrap.appendChild(src);
    } else {
      wrap.appendChild(varietiesItem());
      wrap.appendChild(knownCard(ctx, { compact: true }));
    }
    return wrap;
  }
  function p0(b) { return Object.keys(b.done).length > 0; }
  // A SOURCES id becomes its name; anything else is shown as written.
  function srcName(id) {
    const s = arr(D().SOURCES).find((x) => x && x.id === id);
    return s ? s.name : id;
  }

  /* ============================== WORDS ============================== */
  function renderWords(ctx) {
    const me = info(ctx.state);
    markDone("view:words");
    const lex = arr(D().LEXICON);
    const counts = relCounts(lex);
    const pct = sharedPct(counts);
    const wrap = viewWrap("br-words");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 1", title: "Words you already share",
      lead: lex.length ? `${pct}% of these ${lex.length} common words are the same, shifted by a regular rule, or clearly related.` : "The word list is not available yet.",
    }) + `<div class="br-wtools"></div><div class="br-wlist stack-sm" id="br-wlist"></div>`;
    backTo(wrap, "br-back", "bridge");
    if (!lex.length) return wrap;
    const w = UI.words;
    if (w.pair !== (UI.pair || "")) { w.pair = UI.pair || ""; w.q = ""; w.shown = 40; }
    const rels = REL.filter((r) => counts[r]).length ? REL.filter((r) => counts[r]) : REL;
    if (!rels.includes(w.rel)) w.rel = rels[0];
    const tools = $(".br-wtools", wrap);
    tools.innerHTML = `
      <div class="br-tabs" role="tablist" aria-label="Word groups">
        ${rels.map((r) => `<button type="button" role="tab" class="br-tab k-${r}" data-rel="${r}" aria-selected="${w.rel === r}"><span class="br-sym" aria-hidden="true">${KIND_INFO[r].sym}</span> ${esc(relLabel(r))} <span class="br-count">${counts[r]}</span></button>`).join("")}
      </div>
      <p class="muted br-reltext" id="br-reltext"></p>
      <label class="br-search"><span class="sr-only">Filter words</span><input type="search" id="br-q" placeholder="Filter by English or Kurdish" value="${esc(w.q)}" autocomplete="off"></label>`;
    const list = $("#br-wlist", wrap);
    const rText = {
      same: "Written differently, said the same.",
      sound: "A regular sound rule turns one into the other.",
      cognate: "Related, but you have to learn the shape.",
      different: "Separate words. These are the ones to learn.",
      trap: "Looks familiar but means something else. See also Traps.",
    };
    function paint() {
      $$(".br-tab", tools).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.rel === w.rel)));
      $("#br-reltext", tools).textContent = rText[w.rel];
      const q = w.q.trim().toLowerCase();
      const all = lex.filter((x) => x.rel === w.rel && (!q || [x.en, x[me.src], x[me.tgt]].some((v) => String(v || "").toLowerCase().includes(q))));
      list.innerHTML = "";
      all.slice(0, w.shown).forEach((x) => list.appendChild(wordRow(x, me)));
      if (!all.length) list.appendChild(el(`<p class="muted">Nothing here${q ? " for that filter" : ""}.</p>`));
      if (all.length > w.shown) {
        const more = el(`<button type="button" class="btn show-more">Show more (${all.length - w.shown} left)</button>`);
        more.addEventListener("click", () => { w.shown += 40; paint(); });
        list.appendChild(more);
      }
    }
    $$(".br-tab", tools).forEach((t) => t.addEventListener("click", () => { w.rel = t.dataset.rel; w.shown = 40; paint(); }));
    $("#br-q", tools).addEventListener("input", (e) => { w.q = e.target.value; w.shown = 40; paint(); });
    paint();
    return wrap;
  }
  function relLabel(r) { return r === "trap" ? "Look-alikes" : r === "different" ? "Different" : r === "cognate" ? "Related" : r === "sound" ? "Sound shift" : "Same"; }
  // Target noun gender: kmrGender in the Sorani<->Kurmanji data, gender in the other pairs.
  function genderBadge(x) {
    const g = isNew() ? x.gender : x.kmrGender;
    if (g !== "m" && g !== "f") return "";
    const name = g === "m" ? "masculine" : "feminine";
    return `<span class="br-gender" title="${name}" aria-label="${name}">${g}</span>`;
  }
  function wordRow(x, me) {
    const rules = arr(x.rules);
    const node = el(`
      <article class="br-word k-${x.rel}">
        <span class="br-wk br-seg k-${x.rel}" aria-hidden="true"><span class="br-sym">${KIND_INFO[x.rel].sym}</span></span>
        <div class="br-w-src">${K(me.src, x[me.src], "br-wtext")}</div>
        <div class="br-w-arrow" aria-hidden="true">→</div>
        <div class="br-w-tgt">${K(me.tgt, x[me.tgt], "br-wtext")}${isNew() || me.tgt === "kmr" || me.src === "kmr" ? genderBadge(x) : ""}${sayBtn(x[me.tgt])}</div>
        <div class="br-w-en">${esc(x.en)}${rules.length ? " " + rules.map((r) => `<button type="button" class="chip br-rulechip" data-rule="${esc(r)}">${esc(ruleTitle(r))}</button>`).join("") : ""}</div>
      </article>`);
    $$("[data-rule]", node).forEach((b) => b.addEventListener("click", () => go("bridge-rule", b.dataset.rule)));
    wireSay(node);
    return node;
  }
  function ruleTitle(id) {
    const r = arr(D().RULES).find((x) => x.id === id);
    return r ? r.title : id;
  }

  /* ============================== RULES ============================== */
  function reliabilityChip(r) {
    const t = { always: "Always", usually: "Usually", often: "Often" }[r] || r;
    return pill(t, r === "always" ? "success" : r === "usually" ? "primary" : "accent");
  }
  function renderRules(ctx) {
    const me = info(ctx.state);
    const rules = arr(D().RULES).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
    const b = PS();
    const done = rules.filter((r) => b.done["rule:" + r.id]).length;
    const wrap = viewWrap("br-rules");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 2", title: "Sound rules",
      lead: rules.length ? `${rules.length} regular correspondences between ${NAME[me.src]} and ${NAME[me.tgt]}. Each one: a short card, some examples, then words you have not seen.` : "The sound rules are not available yet.",
    });
    backTo(wrap, "br-back", "bridge");
    if (rules.length) wrap.appendChild(el(`<p class="muted">${done} of ${rules.length} rules finished.</p>`));
    const list = el(`<div class="stack-sm"></div>`);
    rules.forEach((r) => {
      const fin = !!b.done["rule:" + r.id];
      const it = el(`
        <button type="button" class="list-item br-rule-item">
          <div class="li-main"><div class="li-title">${esc(r.title)}</div>
            <div class="li-sub">${plural(arr(r.examples).length, "example")} · ${plural(arr(r.test).length, "test word")}</div></div>
          ${reliabilityChip(r.reliability)}${fin ? pill("Done", "success") : ""}
          <span class="li-arrow" aria-hidden="true">→</span>
        </button>`);
      it.addEventListener("click", () => go("bridge-rule", r.id));
      list.appendChild(it);
    });
    wrap.appendChild(list);
    return wrap;
  }

  // One rule: card -> examples with feedback -> unseen test.
  function renderRule(ctx, ruleId) {
    const me = info(ctx.state);
    const rules = arr(D().RULES).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
    const rule = rules.find((r) => r.id === ruleId);
    if (!rule) { go("bridge-rules"); return el(`<div></div>`); }
    if (!UI.rule || UI.rule.id !== ruleId) UI.rule = { id: ruleId, step: "card", i: 0, got: 0, test: [], testGot: 0, answered: false, showOther: false, opts: null };
    const R = UI.rule;
    const wrap = viewWrap("br-rule");
    const stepLabel = R.step === "card" ? "Step 1 of 3 · The rule" : R.step === "ex" ? "Step 2 of 3 · Examples" : R.step === "test" ? "Step 3 of 3 · New words" : "Finished";
    wrap.innerHTML = ph({ back: "br-back", eyebrow: stepLabel, title: rule.title });
    backTo(wrap, "br-back", "bridge-rules");
    const body = el(`<div class="stack"></div>`);
    wrap.appendChild(body);
    const pairs = (kind) => arr(rule[kind]).filter((e) => e[me.src] && e[me.tgt]);

    function ruleCard() {
      const c = rule.card && rule.card[me.dir];
      const other = c && (PS().explainIn === "ku" ? { text: c.en, ku: false } : (c.ku ? { text: c.ku, ku: true } : null));
      const card = el(`<article class="card lg stack-sm br-rulecard">
        <div class="row spread"><span class="eyebrow">The idea</span>${reliabilityChip(rule.reliability)}</div>
        ${c ? explainBlock(c) : ""}
        ${other ? `<details class="br-other"><summary>${PS().explainIn === "ku" ? "Show in English" : "Show in " + esc(OWN[me.src])}</summary>${other.ku ? KB(me.src, other.text, "br-explain") : `<p class="br-explain">${esc(other.text)}</p>`}</details>` : ""}
        <button type="button" class="btn primary lg" id="br-r-go">See examples</button></article>`);
      $("#br-r-go", card).addEventListener("click", () => { R.step = "ex"; R.i = 0; R.got = 0; R.answered = false; R.opts = null; ctx.render(); });
      body.appendChild(card);
    }

    function quiz(kind, list) {
      const q = list[R.i];
      if (!q) return;
      const pool = (kind === "ex" ? pairs("examples") : [...pairs("examples"), ...pairs("test")]).map((e) => e[me.tgt]);
      if (!R.opts || R.opts.i !== R.i || R.opts.kind !== kind) R.opts = { i: R.i, kind, ...makeOptions(q[me.tgt], pool, 4) };
      const o = R.opts;
      const card = el(`<article class="card lg stack-sm br-q">
        <div class="row spread"><span class="prompt-line">${kind === "ex" ? "How would you say it?" : "New word. Apply the rule."}</span><span class="muted br-small">${R.i + 1} of ${list.length}</span></div>
        <div class="br-big">${K(me.src, q[me.src])}</div>
        <div class="br-en">${esc(q.en)}</div>
        <div class="choice-grid br-choices" role="group" aria-label="Answers"></div>
        <div class="br-fb" aria-live="polite"></div></article>`);
      const grid = $(".br-choices", card);
      o.options.forEach((t, n) => {
        const btn = el(`<button type="button" class="choice-btn tl" data-n="${n}">${K(me.tgt, t)}</button>`);
        btn.addEventListener("click", () => {
          if (R.answered) return;
          R.answered = true;
          const ok = n === o.answer;
          if (ok) { if (kind === "ex") R.got++; else R.testGot++; }
          $$(".choice-btn", grid).forEach((b2, k) => {
            b2.disabled = true;
            if (k === o.answer) b2.classList.add("correct");
            else if (k === n) b2.classList.add("incorrect");
            else b2.classList.add("dim");
          });
          const fb = $(".br-fb", card);
          fb.innerHTML = `<div class="feedback ${ok ? "correct" : "incorrect"}">${ok ? "Yes." : "Not quite."} ${K(me.src, q[me.src])} → ${K(me.tgt, q[me.tgt])} ${sayBtn(q[me.tgt])}</div>
            <button type="button" class="btn primary" id="br-r-next">${R.i + 1 >= list.length ? (kind === "ex" ? "On to new words" : "See result") : "Next"}</button>`;
          wireSay(fb);
          const nx = $("#br-r-next", fb);
          nx.focus();
          nx.addEventListener("click", () => {
            R.answered = false; R.opts = null; R.i++;
            if (R.i >= list.length) {
              if (kind === "ex") { R.step = "test"; R.i = 0; }
              else finishRule();
            }
            ctx.render();
          });
        });
        grid.appendChild(btn);
      });
      body.appendChild(card);
    }

    function finishRule() {
      R.step = "done";
      markDone("rule:" + rule.id);
    }

    if (R.step === "card") ruleCard();
    else if (R.step === "ex") {
      const ex = pairs("examples");
      if (!ex.length) { R.step = "test"; R.i = 0; }
      else {
        const rc = rule.card && rule.card[me.dir];
        if (rc) body.appendChild(el(`<details class="card br-remind"><summary>Rule reminder</summary>${explainBlock(rc)}</details>`));
        quiz("ex", ex);
      }
    }
    if (R.step === "test") {
      const ts = pairs("test");
      if (!ts.length) finishRule();
      else if (!body.querySelector(".br-q")) quiz("test", ts);
    }
    if (R.step === "done") {
      const nT = pairs("test").length;
      const idxN = rules.findIndex((r) => r.id === rule.id);
      const nextR = rules[idxN + 1];
      const res = el(`<article class="card lg stack-sm">
        <span class="eyebrow">Finished</span>
        <h2 class="br-h2">${nT ? `${R.testGot} of ${nT} new words right` : "Rule finished"}</h2>
        <p>${nT ? (R.testGot === nT ? "The rule carried over to words you had not seen. That is the point." : "Rules are a guide, not a law. Check the words you missed, then try again whenever you like.") : ""}</p>
        <div class="row-wrap"></div></article>`);
      const rowEl = $(".row-wrap", res);
      const again = el(`<button type="button" class="btn">Do it again</button>`);
      again.addEventListener("click", () => { UI.rule = null; ctx.render(); });
      rowEl.appendChild(again);
      if (nextR) {
        const nx = el(`<button type="button" class="btn primary">Next rule</button>`);
        nx.addEventListener("click", () => { UI.rule = null; go("bridge-rule", nextR.id); });
        rowEl.appendChild(nx);
      } else {
        const bk = el(`<button type="button" class="btn primary">Back to the course</button>`);
        bk.addEventListener("click", () => { UI.rule = null; goHub(); });
        rowEl.appendChild(bk);
      }
      body.appendChild(res);
    }
    return wrap;
  }

  /* ============================== SCRIPT ============================== */
  function guideRuby(word, level, revealed) {
    const tr = root.Lang.cfg().transliterate;
    if (!tr || level >= 2) return esc(word);
    return word.split(/(\s+)/).map((tok) => /\S/.test(tok) && /[؀-ۿ]/.test(tok)
      ? `<ruby class="guide ${revealed ? "br-rev" : ""}">${esc(tok)}<rt>${esc(tr(tok))}</rt></ruby>` : esc(tok)).join("");
  }
  function renderScript(ctx) {
    const me = info(ctx.state);
    markDone("view:script");
    const rows = arr(D().INTRO && D().INTRO.script);
    const b = B(ctx.state);
    const wrap = viewWrap("br-script");
    const learningArabic = !isNew() && me.tgt === "ckb";
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 3", title: "Script bridge",
      lead: isNew() ? `The letters and spellings of ${NAME[me.tgt]} that differ from what you read in ${NAME[me.src]}.`
        : learningArabic ? "Sorani is written in Arabic letters. Each one is matched to the Latin letter you know, with a reading guide that fades as you improve."
        : "Kurmanji is written in Latin letters. Each one is matched to the Sorani letter you know.",
    });
    backTo(wrap, "br-back", "bridge");
    if (!rows.length) { wrap.appendChild(el(`<p class="muted">The letter table is not available yet.</p>`)); return wrap; }

    const first = me.src, second = me.tgt;   // table order: what you know, then what you learn
    const cell = (code, r) => r[code];
    const table = el(`<section class="card br-scripttable" aria-label="Letter table">
      <div class="br-srow br-shead" aria-hidden="true"><span>${NAME[first]}</span><span>${NAME[second]}</span><span>Sound</span><span>Example</span></div>
      ${rows.map((r) => `<div class="br-srow">
        <span class="br-sl">${K(first, cell(first, r))}</span>
        <span class="br-sl">${K(second, cell(second, r))}</span>
        <span class="br-ssound" data-no-guide>${esc(r.lat || "")}</span>
        <span class="br-sex">${r.ex ? `${K(first, r.ex[first])} → ${K(second, r.ex[second])} ${sayBtn(r.ex[me.tgt])}<span class="muted br-small"> ${esc(r.ex.en || "")}</span>` : ""}${r.note ? `<span class="muted br-small br-snote">${esc(r.note)}</span>` : ""}</span>
      </div>`).join("")}</section>`);
    wireSay(table);
    wrap.appendChild(table);

    // The guide level (Arabic script targets only)
    if (learningArabic) {
      const lv = b.scriptLevel.ckb;
      const ctl = el(`<article class="card stack-sm br-guidectl">
        <h2 class="br-h2">Reading guide: ${GUIDE_LABELS[lv]}</h2>
        <p class="muted">The Latin guide under Sorani words fades as you get them right: first you tap to show it, then it is hidden. If you slip, it comes back. You can change it yourself.</p>
        <div class="row-wrap"><button type="button" class="btn" id="br-g-more" ${lv <= 0 ? "disabled" : ""}>More help</button><button type="button" class="btn" id="br-g-less" ${lv >= 2 ? "disabled" : ""}>Less help</button></div></article>`);
      $("#br-g-more", ctl).addEventListener("click", () => { b.scriptLevel.ckb = Math.max(0, lv - 1); b.scriptHist.ckb = []; ctx.persist(); ctx.render(); });
      $("#br-g-less", ctl).addEventListener("click", () => { b.scriptLevel.ckb = Math.min(2, lv + 1); b.scriptHist.ckb = []; ctx.persist(); ctx.render(); });
      wrap.appendChild(ctl);
    }

    // Practice
    const prac = el(`<article class="card lg stack-sm br-scriptprac"></article>`);
    wrap.appendChild(prac);
    paintScriptQ(prac, rows, me, ctx);
    return wrap;
  }
  function scriptQuestion(rows, me) {
    rows = rows.filter((r) => r[me.src] && r[me.tgt]);
    if (!rows.length) return null;
    const pick = rows[Math.floor(Math.random() * rows.length)];
    const word = Math.random() < 0.5 && pick.ex && pick.ex[me.src] && pick.ex[me.tgt];
    const field = word ? "ex" : "letter";
    const show = word ? pick.ex[me.tgt] : pick[me.tgt];
    const ans = word ? pick.ex[me.src] : pick[me.src];
    const pool = rows.map((r) => (word ? (r.ex && r.ex[me.src]) : r[me.src])).filter(Boolean);
    return { field, show, en: word ? pick.ex.en : "", ...makeOptions(ans, pool, 4) };
  }
  function paintScriptQ(box, rows, me, ctx) {
    const b = B(ctx.state);
    const lv = me.tgt === "ckb" ? b.scriptLevel.ckb : 0;
    if (!UI.script) UI.script = { q: null, revealed: false, n: 0, ok: 0 };
    const S = UI.script;
    if (!S.q || S.q.pair !== (UI.pair || "")) S.q = scriptQuestion(rows, me);
    const q = S.q;
    if (!q) { box.hidden = true; return; }
    q.pair = UI.pair || "";
    box.innerHTML = `
      <div class="row spread"><span class="prompt-line">${q.field === "ex" ? "Which word is this?" : "Which letter matches?"}</span><span class="muted br-small">${S.ok} of ${S.n} right</span></div>
      <div class="br-big br-scriptq" data-no-guide>${me.tgt === "ckb" && q.field === "ex" ? `<bdi dir="rtl" lang="ckb">${guideRuby(q.show, lv, S.revealed)}</bdi>` : K(me.tgt, q.show)}</div>
      ${me.tgt === "ckb" && q.field === "ex" && lv === 1 && !S.revealed ? `<button type="button" class="btn" id="br-reveal">Show the guide</button>` : ""}
      ${q.en ? `<div class="br-en muted">${esc(q.en)}</div>` : ""}
      <div class="choice-grid br-choices"></div><div class="br-fb" aria-live="polite"></div>`;
    const grid = $(".br-choices", box);
    const rv = $("#br-reveal", box);
    if (rv) rv.addEventListener("click", () => { S.revealed = true; paintScriptQ(box, rows, me, ctx); });
    let done = false;
    q.options.forEach((t, n) => {
      const btn = el(`<button type="button" class="choice-btn tl">${K(me.src, t)}</button>`);
      btn.addEventListener("click", () => {
        if (done) return;
        done = true;
        const ok = n === q.answer;
        S.n++; if (ok) S.ok++;
        $$(".choice-btn", grid).forEach((b2, k) => { b2.disabled = true; if (k === q.answer) b2.classList.add("correct"); else if (k === n) b2.classList.add("incorrect"); else b2.classList.add("dim"); });
        if (me.tgt === "ckb") {
          const assisted = lv === 1 && S.revealed;
          const hist = b.scriptHist.ckb.concat([ok && !assisted ? 1 : 0]);
          const res = nextGuide(hist, b.scriptLevel.ckb);
          b.scriptHist.ckb = res.hist;
          if (res.changed) { b.scriptLevel.ckb = res.level; ctx.toast(res.level > lv ? `Guide: ${GUIDE_LABELS[res.level].toLowerCase()}.` : "Guide is back: more help."); }
          ctx.persist();
        }
        const fb = $(".br-fb", box);
        fb.innerHTML = `<div class="feedback ${ok ? "correct" : "incorrect"}">${ok ? "Yes." : "Not quite."} ${K(me.tgt, q.show)} = ${K(me.src, q.options[q.answer])}</div><button type="button" class="btn primary" id="br-sq-next">Next</button>`;
        $("#br-sq-next", fb).focus();
        $("#br-sq-next", fb).addEventListener("click", () => {
          S.q = null; S.revealed = false;
          if (me.tgt === "ckb" && res0(b) !== lv) ctx.render(); else paintScriptQ(box, rows, me, ctx);
        });
      });
      grid.appendChild(btn);
    });
  }
  function res0(b) { return b.scriptLevel.ckb; }

  /* ============================== FRAME LESSON ============================== */
  // Template line: [slot] becomes a dashed placeholder chip labelled with the part of speech.
  function patternHtml(str, code, posLabel) {
    if (!str) return "";
    const parts = String(str).split(/(\[[^\]]*\])/);
    return parts.map((p) => /^\[[^\]]*\]$/.test(p)
      ? `<span class="br-slotchip" dir="ltr" lang="en" aria-label="${esc(posLabel || "word")} goes here">${esc(posLabel || "word")}</span>`
      : (code === "en" ? esc(p) : richKu(code, p))).join("");
  }
  // What goes in the slot: the content word of each item, with its part of speech from the lexicon.
  function slotFillers(frame, me) {
    const lex = arr(D().LEXICON);
    const posCount = {};
    const fillers = [];
    const seen = new Set();
    for (const it of arr(frame.items)) {
      const segs = segments(it, me.dir);
      let pick = null, pos = null;
      for (const sg of segs) {
        if (!sg.src || !sg.tgt || sg.k === "grammar" || sg.k === "only") continue;
        const w = lex.find((x) => x[me.src] === sg.src && x[me.tgt] === sg.tgt) || lex.find((x) => x[me.tgt] === sg.tgt);
        if (w) { pick = sg; pos = w.pos; break; }
        if (!pick) pick = sg;
      }
      if (!pick) continue;
      if (pos) posCount[pos] = (posCount[pos] || 0) + 1;
      const key = pick.src + "|" + pick.tgt;
      if (seen.has(key)) continue;
      seen.add(key);
      fillers.push({ src: pick.src, tgt: pick.tgt });
    }
    const best = Object.entries(posCount).sort((x, y) => y[1] - x[1])[0];
    const POS = { adj: "adjective", adv: "adverb", num: "number", pron: "pronoun", other: "word" };
    const label = best ? (POS[best[0]] || best[0]) : "word";
    return { fillers: fillers.slice(0, 4), label };
  }
  function renderFrame(ctx, frameId) {
    const me = info(ctx.state);
    const list = frames();
    const frame = list.find((f) => f.id === frameId);
    if (!frame) { goHub(); return el(`<div></div>`); }
    const b = PS();
    const pos = list.indexOf(frame);
    const idx = index(me.dir);
    const ids = frameBlockIds(frame, idx, null, me.ns);
    const wrap = viewWrap("br-frame");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: `Frame ${pos + 1} of ${list.length}${frame.level ? " · " + frame.level : ""}`,
      title: frame.title,
    });
    backTo(wrap, "br-back", "bridge");
    const body = el(`<div class="stack"></div>`);
    wrap.appendChild(body);
    body.appendChild(explainToggle());

    // 1. The contrast card
    const cc = frame.card && frame.card[me.dir];
    if (cc) {
      const ku = !!cc.ku, en = !!cc.en;
      const first = b.explainIn === "ku" && ku ? "ku" : (en ? "en" : "ku");
      const second = first === "ku" ? "en" : "ku";
      const secondOk = second === "ku" ? ku : en;
      const body1 = (which) => which === "ku" ? KB(me.src, cc.ku, "br-explain") : `<p class="br-explain">${esc(cc.en)}</p>`;
      const card = el(`<article class="card lg stack-sm br-contrast">
        <span class="eyebrow">What changes</span>
        ${body1(first)}
        ${secondOk ? `<details class="br-other"><summary>${second === "en" ? "Show in English" : "Show in " + esc(OWN[me.src])}</summary>${body1(second)}</details>` : ""}
      </article>`);
      body.appendChild(card);
    }

    // 2. Pattern skeleton
    if (frame.pattern) {
      const p = frame.pattern;
      const sf = slotFillers(frame, me);
      const fillHtml = sf.fillers.length ? `<div class="br-fillers"><span class="br-lab">Examples for the slot</span><ul class="br-fill-list">${sf.fillers.map((f) =>
        `<li><span class="br-fill-s">${K(me.src, f.src)}</span><span class="br-fill-a" aria-hidden="true">→</span><span class="br-fill-t">${K(me.tgt, f.tgt)}</span></li>`).join("")}</ul></div>` : "";
      const sk = el(`<article class="card stack-sm br-pattern" aria-label="Sentence pattern">
        <span class="eyebrow">The pattern</span>
        <div class="br-pat-row"><span class="br-lab">${NAME[me.src]}</span><div class="br-pat" ${attrs(me.src)}>${patternHtml(p[me.src], me.src, sf.label)}</div></div>
        <div class="br-pat-row"><span class="br-lab">${NAME[me.tgt]}</span><div class="br-pat" ${attrs(me.tgt)}>${patternHtml(p[me.tgt], me.tgt, sf.label)}</div></div>
        ${p.en ? `<div class="br-pat-row"><span class="br-lab">English</span><div class="br-pat br-pat-en">${patternHtml(p.en, "en", sf.label)}</div></div>` : ""}
        <p class="muted br-small">The dashed box <span class="br-slotchip" dir="ltr" lang="en">${esc(sf.label)}</span> is the part you swap. Everything else stays.</p>
        ${fillHtml}
      </article>`);
      body.appendChild(sk);
    }

    // 3. Diff view
    const items = arr(frame.items).filter((it) => it[me.src] && it[me.tgt]);
    if (items.length) {
      const all = items.flatMap((it) => segments(it, me.dir));
      const head = el(`<section class="stack-sm br-diffhead">
        <h2 class="br-h2">Side by side</h2>
        <p class="muted">${summaryLine(all) ? "Across these sentences: " + esc(summaryLine(all)) + "." : ""} Tap any piece to see why.</p>
        ${legend()}</section>`);
      body.appendChild(head);
      const lst = el(`<div class="stack-sm br-pairs"></div>`);
      items.forEach((it) => lst.appendChild(diffPair(it, me)));
      body.appendChild(lst);
    }

    // 4. Drills
    const done = !!b.done[frame.id];
    const dr = el(`<section class="card lg stack-sm br-drills">
      <h2 class="br-h2">${done ? "Practise this frame again" : "Now try it"}</h2>
      <p class="muted">${ids.length ? `${plural(ids.length, "short question")}. First the endings that change the meaning, then building sentences.` : "No questions for this frame yet."}</p>
      <div class="row-wrap"></div></section>`);
    const act = $(".row-wrap", dr);
    if (ids.length) {
      const s = el(`<button type="button" class="btn primary lg" id="br-drill">${done ? "Practise" : "Start the questions"}</button>`);
      s.addEventListener("click", () => startSession(ctx, ids, "frame", frame.id));
      act.appendChild(s);
    }
    if (!done) {
      const m = el(`<button type="button" class="btn" id="br-mark">I know this already</button>`);
      m.addEventListener("click", () => { markDone(frame.id); ctx.toast("Marked as introduced."); ctx.render(); });
      act.appendChild(m);
    } else act.appendChild(pill("Introduced", "success"));
    body.appendChild(dr);

    // 5. Prev / next
    const nav = el(`<div class="row spread br-pn"></div>`);
    const prev = list[pos - 1], next = list[pos + 1];
    nav.innerHTML = `${prev ? `<button type="button" class="btn" id="br-prev">← ${esc(prev.title)}</button>` : "<span></span>"}${next ? `<button type="button" class="btn" id="br-nextf">${esc(next.title)} →</button>` : ""}`;
    if (prev) $("#br-prev", nav).addEventListener("click", () => go("bridge-frame", prev.id));
    if (next) $("#br-nextf", nav).addEventListener("click", () => go("bridge-frame", next.id));
    body.appendChild(nav);
    return wrap;
  }

  /* ============================== TRAPS ============================== */
  function renderTraps(ctx) {
    const me = info(ctx.state);
    markDone("view:traps");
    const traps = arr(D().TRAPS).filter((t) => t && t.id && t[me.src] && t[me.tgt]);
    const wrap = viewWrap("br-traps");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 6", title: "Traps",
      lead: traps.length ? "Words that look the same and mean something else, plus common words that are simply different." : "The trap list is not available yet.",
    });
    backTo(wrap, "br-back", "bridge");
    if (!traps.length) return wrap;
    const kinds = ["all", "false-friend", "different", "near-miss"].filter((k) => k === "all" || traps.some((t) => t.kind === k));
    const kLabel = { all: "All", "false-friend": "False friends", different: "Different words", "near-miss": "Near misses" };
    const bar = el(`<div class="br-tabs" role="tablist" aria-label="Kinds of trap">${kinds.map((k) => `<button type="button" role="tab" class="br-tab" data-k="${k}" aria-selected="${UI.trapKind === k}">${kLabel[k]}</button>`).join("")}</div>`);
    wrap.appendChild(bar);
    const idx = index(me.dir);
    const ids = traps.map((t) => cardId("trap", t.id, me.ns)).filter((id) => idx[id]);
    if (ids.length) {
      const dr = el(`<button type="button" class="btn primary" id="br-trapdrill">Quiz me on these (${Math.min(ids.length, 10)})</button>`);
      dr.addEventListener("click", () => startSession(ctx, Model.shuffle(ids).slice(0, 10), "traps"));
      wrap.appendChild(dr);
    }
    const list = el(`<div class="stack-sm"></div>`);
    wrap.appendChild(list);
    function paint() {
      $$(".br-tab", bar).forEach((t) => t.setAttribute("aria-selected", String(t.dataset.k === UI.trapKind)));
      list.innerHTML = "";
      traps.filter((t) => UI.trapKind === "all" || t.kind === UI.trapKind).forEach((t) => list.appendChild(trapCard(t, me)));
    }
    $$(".br-tab", bar).forEach((t) => t.addEventListener("click", () => { UI.trapKind = t.dataset.k; paint(); }));
    paint();
    return wrap;
  }
  function trapCard(t, me) {
    const fix = t.fix && t.fix[me.dir];
    const warn = t.warn && t.warn[me.dir];
    const kindName = { "false-friend": "False friend", different: "Different word", "near-miss": "Near miss" }[t.kind] || t.kind;
    const node = el(`<article class="card br-trap">
      <div class="row spread"><span class="chip ${t.kind === "false-friend" ? "accent" : ""}">${esc(kindName)}</span></div>
      <div class="br-trap-cols">
        <div class="br-trap-col"><span class="br-lab">${NAME[me.src]}</span><div class="br-big sm">${K(me.src, t[me.src].w)}</div><div class="br-en">${esc(t[me.src].en)}</div></div>
        <div class="br-trap-col"><span class="br-lab">${NAME[me.tgt]}</span><div class="br-big sm">${K(me.tgt, t[me.tgt].w)}${sayBtn(t[me.tgt].w)}</div><div class="br-en">${esc(t[me.tgt].en)}</div></div>
      </div>
      ${fix ? `<div class="br-fix"><span class="br-sym" aria-hidden="true">✓</span> To say <strong>${esc(fix.en)}</strong> in ${NAME[me.tgt]}: ${K(me.tgt, fix.w, "br-fixw")} ${sayBtn(fix.w)}</div>` : ""}
      ${warn ? explainBlock(warn, "br-warn") : ""}
    </article>`);
    wireSay(node);
    return node;
  }

  /* ============================== FERRISS ============================== */
  function renderFerriss(ctx) {
    const me = info(ctx.state);
    markDone("view:ferriss");
    const list = arr(D().FERRISS).filter((p) => p[me.src] && p[me.tgt]);
    const wrap = viewWrap("br-ferriss");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 4", title: isNew() ? "Sentences, side by side" : "Twelve sentences, side by side",
      lead: !list.length ? "These sentences are not available yet."
        : isNew() ? "The same sentences in both varieties. Notice how much stays put."
        : "The same twelve sentences every learner of this app meets, in both varieties. Notice how much stays put.",
    });
    backTo(wrap, "br-back", "bridge");
    if (!list.length) return wrap;
    wrap.appendChild(el(`<section class="stack-sm"><p class="muted">Tap any piece to see why.</p>${legend()}</section>`));
    const box = el(`<div class="stack-sm br-pairs"></div>`);
    list.forEach((p) => box.appendChild(diffPair(p, me)));
    wrap.appendChild(box);
    return wrap;
  }

  /* ============================== READING ============================== */
  function renderReadingList(ctx) {
    const me = info(ctx.state);
    const list = arr(D().READING).filter((p) => p && p.id);
    const b = PS();
    const wrap = viewWrap("br-reading");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Step 7", title: "Read and listen",
      lead: list.length ? `Short passages in ${NAME[me.tgt]}. Read a sentence, guess, then check it against ${NAME[me.src]}.` : "The passages are not available yet.",
    });
    backTo(wrap, "br-back", "bridge");
    const box = el(`<div class="stack-sm"></div>`);
    list.forEach((p) => {
      const it = el(`<button type="button" class="passage-item">
        <span class="passage-level">${esc(p.level || "")}</span>
        <div class="passage-meta"><div class="passage-title">${esc(p.title)}</div><div class="passage-blurb">${plural(arr(p.sents).length, "sentence")}</div></div>
        ${b.done["read:" + p.id] ? pill("Read", "success") : ""}<span class="li-arrow" aria-hidden="true">→</span></button>`);
      it.addEventListener("click", () => { UI.reading = null; go("bridge-reading", p.id); });
      box.appendChild(it);
    });
    wrap.appendChild(box);
    return wrap;
  }
  function renderPassage(ctx, pid) {
    const me = info(ctx.state);
    const p = arr(D().READING).find((x) => x.id === pid);
    if (!p) return renderReadingList(ctx);
    const sents = arr(p.sents).filter((s) => s[me.src] && s[me.tgt]);
    if (!UI.reading || UI.reading.id !== pid) UI.reading = { id: pid, upto: 1, shown: {} };
    const R = UI.reading;
    const wrap = viewWrap("br-passage");
    wrap.innerHTML = ph({ back: "br-back", eyebrow: `Reading · ${p.level || ""}`, title: p.title, lead: `One sentence at a time. Read it in ${NAME[me.tgt]}, then tap to check.` });
    backTo(wrap, "br-back", "bridge-reading-list");
    wrap.appendChild(el(`<section class="stack-sm">${legend()}</section>`));
    const box = el(`<div class="stack-sm"></div>`);
    sents.slice(0, R.upto).forEach((s, i) => {
      if (R.shown[i]) { box.appendChild(diffPair(s, me)); return; }
      const c = el(`<article class="card br-readcard">
        <div class="row spread"><div class="br-big sm br-readtext">${K(me.tgt, s[me.tgt])}</div>${sayBtn(s[me.tgt])}</div>
        <button type="button" class="btn" data-i="${i}">Check in ${NAME[me.src]}</button></article>`);
      $("button[data-i]", c).addEventListener("click", () => { R.shown[i] = true; ctx.render(); });
      wireSay(c);
      box.appendChild(c);
    });
    wrap.appendChild(box);
    const row = el(`<div class="row-wrap"></div>`);
    if (R.upto < sents.length) {
      const n = el(`<button type="button" class="btn primary" id="br-nextsent">Next sentence</button>`);
      n.addEventListener("click", () => { R.upto++; ctx.render(); });
      const all = el(`<button type="button" class="btn">Show everything</button>`);
      all.addEventListener("click", () => { R.upto = sents.length; sents.forEach((s, i) => (R.shown[i] = true)); ctx.render(); });
      row.append(n, all);
    } else {
      markDone("read:" + p.id);
      const bk = el(`<button type="button" class="btn primary">Back to passages</button>`);
      bk.addEventListener("click", () => go("bridge-reading-list"));
      row.append(bk);
    }
    wrap.appendChild(row);
    return wrap;
  }

  /* ============================== PROBE ============================== */
  function probeItems(me) {
    const lex = arr(D().LEXICON);
    const ids = arr(D().PROBE && D().PROBE[me.dir]);
    return ids.map((id) => lex.find((x) => x.id === id)).filter(Boolean);
  }
  function renderProbe(ctx) {
    const me = info(ctx.state);
    const items = probeItems(me);
    const wrap = viewWrap("br-probe");
    wrap.innerHTML = ph({ back: "br-back", eyebrow: "Placement probe", title: `How much ${NAME[me.tgt]} do you already read?` });
    backTo(wrap, "br-back", "bridge");
    if (!items.length) { wrap.appendChild(el(`<p class="muted">The probe is not available yet.</p>`)); return wrap; }
    const P = UI.probe;
    if (!P || P.dir !== me.dir) {
      const st = el(`<article class="card lg stack-sm">
        <p>You will see ${plural(items.length, "word")} in ${NAME[me.src]}. For each one, pick the ${NAME[me.tgt]} word you think matches. Guessing is fine; "Not sure" is fine too.</p>
        <p class="muted">You get the answers at the end. This is not a test of you; it shows where to start.</p>
        <button type="button" class="btn primary lg" id="br-pstart">Start</button></article>`);
      $("#br-pstart", st).addEventListener("click", () => { UI.probe = { dir: me.dir, items: Model.shuffle(items), i: 0, answers: [], opts: null, result: null }; ctx.render(); });
      wrap.appendChild(st);
      return wrap;
    }
    if (P.result) return renderProbeResult(ctx, wrap, me, P);
    const x = P.items[P.i];
    const pool = arr(D().LEXICON).filter((w) => w.id !== x.id && (!x.pos || w.pos === x.pos)).map((w) => w[me.tgt]);
    if (!P.opts || P.opts.i !== P.i) P.opts = { i: P.i, ...makeOptions(x[me.tgt], pool.length >= 3 ? pool : arr(D().LEXICON).map((w) => w[me.tgt]), 4) };
    const o = P.opts;
    const card = el(`<article class="card lg stack-sm br-q">
      <div class="row spread"><span class="prompt-line">Pick the ${NAME[me.tgt]} word</span><span class="muted br-small">${P.i + 1} of ${P.items.length}</span></div>
      <div class="progress-track br-bar" role="progressbar" aria-label="Probe progress" aria-valuemin="0" aria-valuemax="${P.items.length}" aria-valuenow="${P.i}"><div class="progress-fill" style="width:${(P.i / P.items.length) * 100}%"></div></div>
      <div class="br-big">${K(me.src, x[me.src])}</div>
      <div class="br-en">${esc(x.en)}</div>
      <div class="choice-grid br-choices"></div>
      <button type="button" class="btn" id="br-unsure">Not sure</button></article>`);
    const grid = $(".br-choices", card);
    const answer = (n) => {
      P.answers.push({ id: x.id, rel: x.rel, ok: n === o.answer, picked: n >= 0 ? o.options[n] : null });
      P.i++; P.opts = null;
      if (P.i >= P.items.length) finishProbe(ctx, me, P);
      ctx.render();
    };
    o.options.forEach((t, n) => {
      const btn = el(`<button type="button" class="choice-btn tl">${K(me.tgt, t)}</button>`);
      btn.addEventListener("click", () => answer(n));
      grid.appendChild(btn);
    });
    $("#br-unsure", card).addEventListener("click", () => answer(-1));
    wrap.appendChild(card);
    return wrap;
  }
  function finishProbe(ctx, me, P) {
    const score = scoreProbe(P.answers);
    P.result = score;
    const b = PS();
    const prev = b.probe[me.dir];
    const history = ((prev && prev.history) || []).concat([{ date: ctx.todayISO(), pct: score.pct }]).slice(-8);
    b.probe[me.dir] = { date: ctx.todayISO(), n: score.n, ok: score.ok, pct: score.pct, byRel: score.byRel, history };
    save();
  }
  function renderProbeResult(ctx, wrap, me, P) {
    const r = P.result;
    const band = probeBand(r.pct);
    const rows = REL.filter((k) => r.byRel[k]).map((k) => `<tr><th scope="row"><span class="br-seg k-${k}"><span class="br-sym" aria-hidden="true">${KIND_INFO[k].sym}</span><span class="br-seg-t">${esc(relLabel(k))}</span></span></th><td>${r.byRel[k].ok} of ${r.byRel[k].n}</td><td>${barHtml(r.byRel[k].ok, r.byRel[k].n, relLabel(k))}</td></tr>`).join("");
    const misses = P.answers.map((a, i) => ({ a, x: P.items[i] })).filter((m) => !m.a.ok);
    const card = el(`<article class="card lg stack-sm">
      <span class="eyebrow">Result</span>
      <h2 class="br-big sm">${r.pct}% recognised</h2>
      <p>${r.ok} of ${r.n} words. ${esc(band.text)}</p>
      <table class="br-table"><caption class="sr-only">Recognised by kind of word</caption><tbody>${rows}</tbody></table>
      <p class="muted br-small">Reading across varieties is not always equal in both directions. This is your own measurement, not a standard.</p>
      ${misses.length ? `<details class="br-misses"><summary>The ${misses.length} you missed</summary><ul class="br-hook-list">${misses.map((m) => `<li>${K(me.src, m.x[me.src])} → ${K(me.tgt, m.x[me.tgt])} <span class="muted">${esc(m.x.en)}</span></li>`).join("")}</ul></details>` : ""}
      <div class="row-wrap"><button type="button" class="btn primary" id="br-pdone">Back to the course</button><button type="button" class="btn" id="br-pagain">Try again</button></div></article>`);
    $("#br-pdone", card).addEventListener("click", () => { UI.probe = null; goHub(); });
    $("#br-pagain", card).addEventListener("click", () => { UI.probe = null; ctx.render(); });
    wrap.appendChild(card);
    return wrap;
  }

  /* ============================== DRILL SESSIONS ============================== */
  // Typed answers: the app's own matcher (it also accepts a Latin spelling of Sorani) for the
  // Sorani<->Kurmanji course; plain normalised comparison for the other pairs.
  function answerOk(ctx, given, tgt) { return isNew() ? false : ctx.answerOk(given, tgt); }
  function startSession(ctx, ids, mode, frameId) {
    if (!ids.length) { ctx.toast("Nothing to practise yet."); return; }
    UI.sess = { ids, i: 0, mode, frameId: frameId || null, results: [], cur: null, finished: false };
    ctx.navigate("bridge-session");
  }
  function startPractice(ctx) {
    C = ctx;
    const me = info(ctx.state);
    const b = PS();
    const idx = index(me.dir);
    const pool = practicePool(idx, b.done, D().FRAMES);
    if (!pool.length) { ctx.toast("Introduce a frame first, then it shows up here."); return; }
    const size = Math.min(ctx.state.settings.sessionSize || 16, 16);
    const picked = root.SRS.pickBatch(pool, cards(), { size, newRatio: 0.3 });
    if (!picked.length) { ctx.toast("All caught up. Come back later."); return; }
    const ids = interleave(picked, (id) => (idx[id] || {}).group);
    startSession(ctx, ids, "practice");
  }
  // Only the cards that are due again (other pairs: the "Review N due" entry on the hub).
  function startReview(ctx) {
    C = ctx;
    const me = info(ctx.state);
    const idx = index(me.dir);
    const due = practicePool(idx, PS().done, D().FRAMES).filter((id) => reviewDue(ctx.state, id));
    if (!due.length) { ctx.toast("Nothing is due. Come back later."); return; }
    const picked = root.SRS.pickBatch(due, cards(), { size: Math.min(ctx.state.settings.sessionSize || 16, 20), newRatio: 0 });
    const ids = interleave(picked.length ? picked : due.slice(0, 20), (id) => (idx[id] || {}).group);
    startSession(ctx, ids, "review");
  }
  function sessionActive() { return !!(UI.sess && !UI.sess.finished); }
  function reset() { UI.sess = null; UI.rule = null; UI.probe = null; UI.reading = null; UI.script = null; }

  function renderSession(ctx) {
    const S = UI.sess;
    if (!S) { goHub(); return el(`<div></div>`); }
    const me = info(ctx.state);
    if (S.finished || S.i >= S.ids.length) return renderSessionSummary(ctx, S, me);
    const idx = index(me.dir);
    const id = S.ids[S.i];
    const card = idx[id];
    const wrap = el(`<div class="view view-bridge br-session"></div>`);
    wrap.classList.add("br-guide-" + guideLevel(ctx.state));
    if (isNew()) wrap.setAttribute("data-no-guide", "");
    wrap.innerHTML = ctx.focusBar(S.i, S.ids.length, "br-quit", "drill");
    $("#br-quit", wrap).addEventListener("click", () => ctx.confirmDialog({
      title: "End this practice?", body: S.results.length ? "Your answers so far are saved." : "",
      confirmLabel: "End practice", onConfirm: () => {
        UI.sess = null;
        if (S.frameId) go("bridge-frame", S.frameId);
        else if (S.mode === "traps") go("bridge-traps");
        else goHub();
      },
    }));
    if (!card) { S.i++; ctx.render(); return wrap; }
    const q = el(`<div class="card lg stack-sm br-q"></div>`);
    wrap.appendChild(q);
    const st = cards()[id];
    const finish = (level, assisted, fbHtml) => {
      const quality = gradeFor(level, assisted);
      cards()[id] = root.SRS.review(cards()[id], quality);
      save();
      S.results.push({ id, kind: card.kind, ok: quality >= 3, level });
      const fb = $(".br-fb", q);
      fb.innerHTML = `<div class="feedback ${level === "wrong" ? "incorrect" : "correct"}">${fbHtml}</div>
        <button type="button" class="btn primary lg" id="br-cont">${S.i + 1 >= S.ids.length ? "Finish" : "Continue"}</button>`;
      wireSay(fb);
      const c = $("#br-cont", fb);
      c.focus();
      c.addEventListener("click", () => { S.i++; S.cur = null; ctx.render(); window.scrollTo(0, 0); });
    };
    if (!S.cur || S.cur.id !== id) S.cur = { id };
    const draw = { pi: drawPi, tr: drawTr, rule: drawRule, trap: drawTrap }[card.kind];
    q.innerHTML = `<div class="br-qbody stack-sm"></div><div class="br-fb" aria-live="polite"></div>`;
    draw($(".br-qbody", q), card, me, st, finish, S.cur, ctx);
    return wrap;
  }

  function choiceGrid(host, options, render, onPick, cur) {
    const grid = el(`<div class="choice-grid br-choices" role="group" aria-label="Answers"></div>`);
    let locked = false;
    options.forEach((t, n) => {
      const btn = el(`<button type="button" class="choice-btn ${render.tl ? "tl" : ""}">${render.html(t)}</button>`);
      btn.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const ok = n === cur.answer;
        $$(".choice-btn", grid).forEach((b2, k) => { b2.disabled = true; if (k === cur.answer) b2.classList.add("correct"); else if (k === n) b2.classList.add("incorrect"); else b2.classList.add("dim"); });
        onPick(ok, n);
      });
      grid.appendChild(btn);
    });
    host.appendChild(grid);
  }

  // Processing instruction: the ending is the only cue to the meaning.
  function drawPi(host, card, me, st, finish, cur, ctx) {
    const p = card.item;
    if (!cur.o) cur.o = makeOptions(p.options[p.answer], p.options, p.options.length);
    const show = p.show || me.tgt;
    host.innerHTML = `<span class="prompt-line">What does it mean? Look closely at the ending.</span>
      <div class="br-big sm br-target">${K(show, p.text)}${sayBtn(p.text)}</div>`;
    wireSay(host);
    choiceGrid(host, cur.o.options, { html: esc, tl: false }, (ok) => {
      const why = tx(p.why, ctx.state);
      finish(ok ? "exact" : "wrong", false,
        `${ok ? "Yes." : "Not quite."} ${esc(p.options[p.answer])}${why.text ? `<div class="br-why">${why.ku ? KB(me.src, why.text, "br-explain") : esc(why.text)}</div>` : ""}`);
    }, cur.o);
  }

  // Transform: source sentence -> build the target with tiles, then type it later.
  function drawTr(host, card, me, st, finish, cur, ctx) {
    const it = card.item;
    const frame = frames().find((f) => f.id === card.frameId);
    const typed = wantsTyped(st) || segments(it, me.dir).filter((s) => s.tgt).length < 3;
    host.innerHTML = `<span class="prompt-line">Say it in ${NAME[me.tgt]}</span>
      <div class="br-big sm">${K(me.src, it[me.src])}</div><div class="br-en">${esc(it.en)}</div>
      <div class="br-build"></div>`;
    const build = $(".br-build", host);
    const reveal = (level, assisted) => {
      const node = diffPair(it, me);
      const fb = `${level === "wrong" ? "Not quite. It is:" : level === "close" ? "Right letters; check the marks (ê î û ş ç). It is:" : "Yes."} ${K(me.tgt, it[me.tgt].replace(/\s+([.!?؟۔])$/, "$1"))}`;
      finish(level, assisted, fb);
      $("#br-cont", host.parentElement).before(node);
    };
    if (typed) {
      build.innerHTML = `<input type="text" class="cloze-input br-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(ctx.typeHint("Type it"))}" aria-label="Your answer" ${isRtl(me.tgt) ? 'dir="auto"' : ""}>
        <button type="button" class="btn primary" id="br-check">Check</button>`;
      const inp = $("input", build), btn = $("#br-check", build);
      inp.focus();
      let doneFlag = false;
      const check = () => {
        if (doneFlag || !inp.value.trim()) return;
        doneFlag = true; inp.disabled = true; btn.disabled = true;
        const target = it[me.tgt];
        let lvl = answerOk(ctx, inp.value, target) ? "exact" : matchLevel(inp.value, target);
        if (lvl === "exact" || lvl === "close") { /* ok */ } else lvl = "wrong";
        inp.classList.add(lvl === "wrong" ? "incorrect" : "correct");
        reveal(lvl, false);
      };
      btn.addEventListener("click", check);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
    } else {
      const pool = arr(frame && frame.items).filter((x) => x.id !== it.id).flatMap((x) => segments(x, me.dir)).map((s) => s.tgt).filter(Boolean);
      if (!cur.t) cur.t = tilesFor(it, me.dir, pool, null, 2);
      build.innerHTML = `<div class="reorder-area br-tile-area" data-empty="Tap the pieces below"></div>
        <div class="br-assembled muted" aria-live="polite" hidden></div><div class="reorder-bank"></div>
        <div class="row">${canSpeak() ? `<button type="button" class="btn audio voice-action" id="br-hear">${ICON_SOUND} Hear it</button>` : ""}<button type="button" class="btn primary" id="br-check" style="flex:1;justify-content:center">Check</button></div>`;
      const area = $(".reorder-area", build), bank = $(".reorder-bank", build);
      const hear = $("#br-hear", build);
      if (hear) hear.addEventListener("click", () => speak(it[me.tgt]));
      { const d = isRtl(me.tgt) ? "rtl" : "ltr"; area.setAttribute("dir", d); bank.setAttribute("dir", d); }   // explicit: a Latin target inside the RTL Sorani app
      area.setAttribute("lang", me.tgt); bank.setAttribute("lang", me.tgt);
      const prev = $(".br-assembled", build);
      const showAssembled = () => {
        const txt = Model.assemble($$(".word-chip.placed", area).map((c) => c.dataset.text));
        prev.hidden = !txt;
        prev.innerHTML = txt ? K(me.tgt, txt) : "";
        // clitic tiles (ـم) sit tight against the tile before them and drop the tatweel once placed
        $$(".word-chip", build).forEach((c) => {
          const clitic = c.dataset.text.startsWith("ـ");
          const placed = c.classList.contains("placed");
          c.classList.toggle("is-clitic", clitic && placed);
          c.textContent = placed ? c.dataset.text.replace(/ـ/g, "") : c.dataset.text;
        });
      };
      cur.t.tiles.forEach((tile) => {
        const chip = el(`<button type="button" class="word-chip" lang="${me.tgt}" dir="${isRtl(me.tgt) ? "rtl" : "ltr"}" data-id="${tile.id}" data-text="${esc(tile.text)}">${esc(tile.text)}</button>`);
        chip.addEventListener("click", () => {
          if (chip.classList.contains("placed")) { chip.classList.remove("placed"); bank.appendChild(chip); }
          else { chip.classList.add("placed"); area.appendChild(chip); }
          showAssembled();
        });
        bank.appendChild(chip);
      });
      let doneFlag = false;
      $("#br-check", build).addEventListener("click", () => {
        if (doneFlag) return;
        doneFlag = true;
        $$(".word-chip", build).forEach((c) => (c.disabled = true));
        $("#br-check", build).disabled = true;
        const built = $$(".word-chip.placed", area).map((c) => c.dataset.text);
        reveal(checkTiles(built, it, me.dir) ? "exact" : "wrong", false);
        speak(it[me.tgt]);
      });
    }
  }

  // Rule test: guess an unseen word.
  function drawRule(host, card, me, st, finish, cur, ctx) {
    const t = card.item, rule = card.rule;
    const pool = [...arr(rule.examples), ...arr(rule.test)].map((e) => e[me.tgt]).filter(Boolean);
    const typed = wantsTyped(st);
    host.innerHTML = `<span class="prompt-line">New word. Apply the rule: ${esc(rule.title)}</span>
      <div class="br-big">${K(me.src, t[me.src])}</div><div class="br-en">${esc(t.en)}</div>
      <div class="br-build"></div>`;
    const build = $(".br-build", host);
    const done = (lvl) => finish(lvl, false, `${lvl === "wrong" ? "Not quite." : lvl === "close" ? "Close; check the marks." : "Yes."} ${K(me.src, t[me.src])} → ${K(me.tgt, t[me.tgt])} ${sayBtn(t[me.tgt])}`);
    if (typed) {
      build.innerHTML = `<input type="text" class="cloze-input br-input" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(ctx.typeHint("Type it"))}" aria-label="Your answer"><button type="button" class="btn primary" id="br-check">Check</button>`;
      const inp = $("input", build), btn = $("#br-check", build);
      let f = false;
      const check = () => {
        if (f || !inp.value.trim()) return;
        f = true; inp.disabled = true; btn.disabled = true;
        const lvl = answerOk(ctx, inp.value, t[me.tgt]) ? "exact" : matchLevel(inp.value, t[me.tgt]);
        inp.classList.add(lvl === "wrong" ? "incorrect" : "correct");
        done(lvl);
      };
      btn.addEventListener("click", check);
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
      inp.focus();
    } else {
      if (!cur.o) cur.o = makeOptions(t[me.tgt], pool, 4);
      choiceGrid(build, cur.o.options, { html: (x) => K(me.tgt, x), tl: true }, (ok) => done(ok ? "exact" : "wrong"), cur.o);
    }
  }

  // Trap: which word do you really say?  The look-alike is always among the options.
  function drawTrap(host, card, me, st, finish, cur, ctx) {
    const t = card.item;
    const fix = t.fix[me.dir];
    if (!cur.o) {
      const lookalike = t[me.tgt] && t[me.tgt].w;
      const others = arr(D().TRAPS).filter((x) => x.id !== t.id && x.fix && x.fix[me.dir]).map((x) => x.fix[me.dir].w);
      const o = makeOptions(fix.w, [lookalike, ...others].filter(Boolean), 4);
      // keep the look-alike if it was dropped by the 4-option cut
      if (lookalike && !o.options.some((x) => Model.sameAnswer(x, lookalike)) && !Model.sameAnswer(lookalike, fix.w)) {
        o.options[o.options.findIndex((x, i) => i !== o.answer)] = lookalike;
      }
      cur.o = o;
    }
    host.innerHTML = `<span class="prompt-line">How do you say this in ${NAME[me.tgt]}?</span>
      <div class="br-big sm">${esc(fix.en)}</div>`;
    choiceGrid(host, cur.o.options, { html: (x) => K(me.tgt, x), tl: true }, (ok, n) => {
      const picked = cur.o.options[n];
      const meaning = Model.sameAnswer(picked, t[me.tgt] && t[me.tgt].w) ? ` ${K(me.tgt, picked)} means ${esc(t[me.tgt].en)} in ${NAME[me.tgt]}.` : "";
      const warn = t.warn && t.warn[me.dir] ? tx(t.warn[me.dir], ctx.state) : null;
      finish(ok ? "exact" : "wrong", false,
        `${ok ? "Yes." : "Careful."} ${K(me.tgt, fix.w)} ${sayBtn(fix.w)}${ok ? "" : meaning}${warn && warn.text ? `<div class="br-why">${warn.ku ? KB(me.src, warn.text, "br-explain") : esc(warn.text)}</div>` : ""}`);
    }, cur.o);
  }

  function renderSessionSummary(ctx, S, me) {
    if (!S.finished) {
      S.finished = true;
      const ok = S.results.filter((r) => r.ok).length;
      if (S.results.length && !isNew()) ctx.recordPractice(S.results.length, ok);
      if (S.mode === "frame" && S.frameId && S.results.length) markDone(S.frameId);
    }
    const ok = S.results.filter((r) => r.ok).length;
    const wrap = viewWrap("br-summary");
    const names = { pi: "Endings", tr: "Sentences", rule: "Sound rules", trap: "Traps" };
    const by = {};
    S.results.forEach((r) => { const e = by[r.kind] || (by[r.kind] = { n: 0, ok: 0 }); e.n++; if (r.ok) e.ok++; });
    const list = frames();
    const fpos = S.frameId ? list.findIndex((f) => f.id === S.frameId) : -1;
    const nextF = fpos >= 0 ? list[fpos + 1] : nextFrame(D().FRAMES, PS().done);
    wrap.innerHTML = ph({ eyebrow: "Practice finished", title: `${ok} of ${S.results.length} right` , lead: S.mode === "frame" ? "This frame is now introduced. It will come back mixed in with other frames, which is how it sticks." : "Mixing frames is harder than one at a time, and it is what makes it last." });
    const card = el(`<article class="card lg stack-sm"><ul class="br-sumlist">${Object.keys(by).map((k) => `<li><strong>${names[k] || k}</strong> ${by[k].ok} of ${by[k].n}</li>`).join("")}</ul><div class="row-wrap"></div></article>`);
    const row = $(".row-wrap", card);
    const hub = el(`<button type="button" class="btn">Back to the course</button>`);
    hub.addEventListener("click", () => { UI.sess = null; goHub(); });
    if (nextF) {
      const nx = el(`<button type="button" class="btn primary">Next: ${esc(nextF.title)}</button>`);
      nx.addEventListener("click", () => { UI.sess = null; go("bridge-frame", nextF.id); });
      row.append(nx);
    }
    const again = el(`<button type="button" class="btn">Practise bridge</button>`);
    again.addEventListener("click", () => { UI.sess = null; startPractice(ctx); });
    row.append(again, hub);
    wrap.appendChild(card);
    return wrap;
  }

  /* ============================== KURDISH VARIETIES ============================== */
  function countLine(c) {
    const parts = [[c.words, "word"], [c.rules, "rule"], [c.frames, "frame"], [c.traps, "trap"], [c.reading, "passage"], [c.tables, "table"]]
      .filter(([n]) => n).map(([n, w]) => plural(n, w));
    return parts.join(" · ");
  }
  function renderVarieties(ctx) {
    const wrap = el(`<div class="view view-bridge br-varieties"></div>`);
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Bridge courses", title: "Kurdish varieties",
      lead: "Start from the Kurdish you already speak. Each course puts two varieties side by side and teaches what changes.",
    });
    backTo(wrap, "br-back", "browse");
    const pending = PAIRS.filter((p) => !p.legacy && !isLoaded(p.id));
    if (pending.length) {
      wrap.setAttribute("data-br-wait", "");
      whenLoaded(Promise.all(pending.map((p) => loadPair(p.id))));
    }
    const groups = [["ckb", "If you speak Sorani"], ["kmr", "If you speak Kurmanji"]];
    for (const [src, head] of groups) {
      const rs = routes().filter((r) => r.src === src);
      if (!rs.length) continue;
      const sec = el(`<section class="stack-sm br-var-group" aria-label="${esc(head)}"><h2 class="br-h2">${esc(head)}</h2></section>`);
      for (const r of rs) {
        const d = dataOf(r.pairId);
        const ready = isLoaded(r.pairId);
        const any = ready && hasPairData(d);
        const c = pairCounts(d);
        const m = d.META || {};
        const ground = !r.legacy && m.grounding && m.grounding.en ? m.grounding.en : "";
        const on = r.legacy && enabledFor(ctx.state, r.dir);
        let prog = "";
        if (any && !r.legacy) {
          const ps = pairState(shared(), r.pairId);
          const fr = orderedFrames(d.FRAMES);
          const n = fr.filter((f) => ps.done[f.id]).length;
          if (n) prog = pill(`${n} of ${fr.length} frames`, "success");
        }
        const item = el(`
          <button type="button" class="list-item br-pair-item" data-pair="${esc(r.pairId)}" data-dir="${esc(r.dir)}" ${any ? "" : "disabled aria-disabled=\"true\""}>
            <div class="li-main">
              <div class="li-title">${esc(NAME[r.src])} <span aria-hidden="true">→</span><span class="sr-only"> to </span> ${esc(NAME[r.tgt])}${r.tgt === "sdh" ? ` <span class="muted br-small">(Southern Kurdish)</span>` : ""}</div>
              <div class="li-sub">${esc(r.blurb)}</div>
              <div class="li-sub br-var-counts">${!ready ? "Loading…" : any ? esc(countLine(c)) : "Not available yet"}</div>
              ${ground ? `<div class="li-sub br-var-ground">${esc(ground)}</div>` : ""}
            </div>
            ${on ? pill("On", "primary") : ""}${prog}
            <span class="li-arrow" aria-hidden="true">→</span>
          </button>`);
        if (any) item.addEventListener("click", () => (r.legacy ? openLegacy(r.dir) : (UI.pair = r.pairId, go("bridge-pair", r.pairId))));
        sec.appendChild(item);
      }
      wrap.appendChild(sec);
    }
    wrap.appendChild(el(`<p class="muted br-small">Sorani and Kurmanji have recordings. Hawrami, Kalhori and Zazaki are read-only for now: no audio yet.</p>`));
    return wrap;
  }
  // Is the Sorani<->Kurmanji direction `dir` the one switched on for its target language?
  // (Only the active language's setting is known here.)
  function enabledFor(state, dir) {
    const s = sides(dir);
    return !!s && target() === s.tgt && ensure(state).known[s.tgt] === s.src;
  }
  // Open Sorani<->Kurmanji in one direction: switch the app to its target language if needed and
  // switch the course on (choosing the direction is the same as answering "I already speak").
  function openLegacy(dir) {
    const s = sides(dir);
    if (!s) return;
    let ctx = C;
    if (target() !== s.tgt) {
      if (!ctx.switchLanguage) { ctx.toast(`Switch the app to ${NAME[s.tgt]} first.`); return; }
      ctx = ctx.switchLanguage(s.tgt);
      C = ctx;
    }
    const b = ensure(ctx.state);
    if (b.known[s.tgt] !== s.src) { b.known[s.tgt] = s.src; ctx.persist(); }
    UI.pair = null;
    reset();
    ctx.navigate("bridge");
  }
  // ?bridge=<pairId | direction | varieties>
  function openDeep(ctx, q) {
    C = ctx;
    q = String(q || "").trim();
    if (!q || q === "varieties" || q === "all") { go("bridge-varieties"); return; }
    const p = pairById(q) || pairOfDir(q);
    if (!p) { go("bridge-varieties"); return; }
    if (p.legacy) { openLegacy(ALL_DIRS.includes(q) ? q : target() === "ckb" ? "kmr>ckb" : "ckb>kmr"); return; }
    UI.pair = p.id;
    go("bridge-pair", p.id);
  }

  /* ============================== TABLES ============================== */
  function renderTables(ctx) {
    const me = info(ctx.state);
    const pars = arr(D().PARADIGMS).filter((x) => x && x.id);
    const wrap = viewWrap("br-tables");
    wrap.innerHTML = ph({
      back: "br-back", eyebrow: "Tables", title: `Whole tables: ${NAME[me.tgt]} and ${NAME[me.src]}`,
      lead: pars.length ? `Each table shows a whole set of forms, ${NAME[me.tgt]} above ${NAME[me.src]}, person by person. A dash (—) means the sources do not attest that form.` : "The tables are not available yet.",
    });
    backTo(wrap, "br-back", "bridge");
    if (!pars.length) return wrap;
    markDone("view:tables");
    if (pars.length > 2) {
      wrap.appendChild(el(`<nav class="br-tabs br-jump" aria-label="Tables">${pars.map((p) => `<a class="br-tab" href="#brt-${esc(p.id)}">${esc((p.title && p.title.en) || p.id)}</a>`).join("")}</nav>`));
      $$(".br-jump a", wrap).forEach((a) => a.addEventListener("click", (e) => {
        e.preventDefault();
        const t = document.getElementById(a.getAttribute("href").slice(1));
        if (t) t.scrollIntoView({ block: "start" });
      }));
    }
    const box = el(`<div class="stack br-ptables"></div>`);
    pars.forEach((par) => box.appendChild(paradigmCard(par, me)));
    wrap.appendChild(box);
    return wrap;
  }
  function paradigmCard(par, me) {
    const g = paradigmGrid(par);
    const t = tx(par.title);
    const v = par.verb || {};
    const cell = (c, code, rowBuilt) => c.missing
      ? `<td class="br-miss" title="not attested"><span aria-hidden="true">—</span><span class="sr-only">not attested</span></td>`
      : `<td>${K(code, c.w)}${c.built || rowBuilt ? `<sup class="br-built" title="built from attested pieces">†</sup>` : ""}</td>`;
    const rowLab = (r) => { const l = tx(r.label); return l.ku ? K(me.src, l.text) : esc(l.text); };
    const card = el(`<section class="card stack-sm br-pcard" id="brt-${esc(par.id)}" aria-labelledby="brh-${esc(par.id)}">
      <h2 class="br-h2" id="brh-${esc(par.id)}">${t.ku ? K(me.src, t.text) : esc(t.text || par.id)}</h2>
      ${v.tgt || v.src || v.en ? `<p class="br-pverb">${K(me.tgt, v.tgt)}${v.tgt && v.src ? ` <span class="muted" aria-hidden="true">·</span> ` : ""}${K(me.src, v.src)}${v.en ? ` <span class="muted">${esc(v.en)}</span>` : ""}</p>` : ""}
      <div class="br-ptable-scroll" role="region" tabindex="0" aria-label="${esc((par.title && par.title.en) || par.id)}: scroll sideways for every person">
        <table class="br-ptable">
          <thead><tr><th scope="col" class="br-pcorner"><span class="sr-only">Variety</span></th>${g.cols.map((c, i) => `<th scope="col"><span class="br-pers">${esc(c)}</span><span class="br-pers-en">${esc(g.persons[i])}</span></th>`).join("")}</tr></thead>
          <tbody>${g.rows.map((r) => `
            <tr class="br-prow-label"><th colspan="${g.cols.length + 1}" scope="colgroup">${rowLab(r)}</th></tr>
            <tr class="br-prow-tgt"><th scope="row">${esc(NAME[me.tgt])}</th>${r.tgt.map((c) => cell(c, me.tgt, r.built)).join("")}</tr>
            <tr class="br-prow-src"><th scope="row">${esc(NAME[me.src])}</th>${r.src.map((c) => cell(c, me.src, false)).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
      ${par.note ? explainBlock(par.note, "br-pnote") : ""}
      <p class="muted br-small">${g.attested} of ${g.attested + g.missing} ${esc(NAME[me.tgt])} forms attested${g.missing ? "; — not attested in the sources" : ""}${g.built ? "; † built from attested pieces" : ""}.${par.src ? ` Source: ${esc(srcName(par.src))}.` : ""}</p>
    </section>`);
    return card;
  }

  /* ============================== SOURCES ============================== */
  const KIND_NAMES = { dictionary: "Dictionaries", course: "Courses", grammar: "Grammars", corpus: "Corpora", wordlist: "Word lists", book: "Books" };
  function countBuilt(data) {
    let n = 0;
    const walk = (x, depth) => {
      if (!x || typeof x !== "object" || depth > 12) return;
      if (Array.isArray(x)) { x.forEach((y) => walk(y, depth + 1)); return; }
      if (x.built === true) n++;
      for (const k of Object.keys(x)) walk(x[k], depth + 1);
    };
    walk(data, 0);
    return n;
  }
  function renderSources(ctx) {
    const me = info(ctx.state);
    const d = D();
    const M = d.META || {};
    const list = arr(d.SOURCES).filter((s) => s && s.id);
    const use = sourceUse(d);
    const built = countBuilt(d);
    const wrap = viewWrap("br-sources");
    wrap.innerHTML = ph({ back: "br-back", eyebrow: "Sources", title: "Where this course comes from" });
    backTo(wrap, "br-back", "bridge");
    const both = (o, cls) => {
      if (!o) return "";
      return `${o.en ? `<p class="br-explain ${cls || ""}">${esc(o.en)}</p>` : ""}${o.ku ? KB(me.src, o.ku, "br-explain " + (cls || "")) : ""}`;
    };
    if (M.variety || M.grounding) {
      wrap.appendChild(el(`<article class="card stack-sm br-ground">
        ${M.variety ? `<span class="eyebrow">Base variety</span>${both(M.variety)}` : ""}
        ${M.grounding ? `<span class="eyebrow">How it was built</span>${both(M.grounding, "br-ground-note")}` : ""}
        ${built ? `<p class="muted br-small">${plural(built, "form")} here ${built === 1 ? "is" : "are"} built from attested pieces (an attested stem plus an attested ending), not copied whole from a source.</p>` : ""}
      </article>`));
    }
    if (!list.length) { wrap.appendChild(el(`<p class="muted">No sources are listed for this course.</p>`)); return wrap; }
    const kinds = [...new Set(list.map((s) => s.kind || "book"))];
    kinds.forEach((k) => {
      const sec = el(`<section class="stack-sm br-src-group"><h2 class="br-h2">${esc(KIND_NAMES[k] || k)}</h2></section>`);
      list.filter((s) => (s.kind || "book") === k).forEach((s) => {
        sec.appendChild(el(`<article class="card br-src">
          <div class="br-src-name">${esc(s.name || s.id)}</div>
          ${s.what ? `<p class="muted br-src-what">${esc(s.what)}</p>` : ""}
          ${use[s.id] ? `<p class="br-small muted">Cited by ${plural(use[s.id], "item")} in this course.</p>` : ""}
        </article>`));
      });
      wrap.appendChild(sec);
    });
    return wrap;
  }

  /* ============================== ROUTER ============================== */
  function waitView(ctx) {
    const w = el(`<div class="view view-bridge" data-br-wait></div>`);
    w.innerHTML = ph({ back: "br-back", eyebrow: "Bridge course", title: "Loading…" });
    backTo(w, "br-back", "bridge-varieties");
    return w;
  }
  function emptyPairView(ctx) {
    const me = info(ctx.state);
    const w = el(`<div class="view view-bridge"></div>`);
    w.innerHTML = ph({ back: "br-back", eyebrow: "Bridge course", title: `${NAME[me.src]} to ${NAME[me.tgt]}`, lead: "This bridge is not available yet." });
    backTo(w, "br-back", "bridge-varieties");
    return w;
  }
  function render(ctx, view, arg) {
    C = ctx;
    UI.view = view;
    if (view === "bridge-varieties") return renderVarieties(ctx);
    if (view === "bridge-pair") {
      const p = pairById(arg);
      if (p && !p.legacy) UI.pair = p.id;
      else { UI.pair = null; view = "bridge"; }
    }
    if (view === "bridge") UI.pair = null;
    if (isNew()) {
      if (!isLoaded(UI.pair)) { whenLoaded(loadPair(UI.pair)); return waitView(ctx); }
      if (!hasPairData(D())) return emptyPairView(ctx);
    } else if (!enabled(ctx.state)) {
      const w = el(`<div class="view view-bridge"></div>`);
      w.innerHTML = ph({ back: "br-back", title: "Bridge course", lead: "Choose which Kurdish variety you already speak to switch the bridge course on." });
      const k = knownCard(ctx);
      if (k) w.appendChild(k);
      w.appendChild(varietiesItem());
      const bb = $("#br-back", w);
      if (bb) bb.addEventListener("click", () => go("browse"));
      return w;
    }
    let out;
    switch (view) {
      case "bridge-words": out = renderWords(ctx); break;
      case "bridge-rules": out = renderRules(ctx); break;
      case "bridge-rule": out = renderRule(ctx, arg); break;
      case "bridge-script": out = renderScript(ctx); break;
      case "bridge-frame": out = renderFrame(ctx, arg); break;
      case "bridge-traps": out = renderTraps(ctx); break;
      case "bridge-ferriss": out = renderFerriss(ctx); break;
      case "bridge-reading-list": out = renderReadingList(ctx); break;
      case "bridge-reading": out = renderPassage(ctx, arg); break;
      case "bridge-probe": out = renderProbe(ctx); break;
      case "bridge-session": out = renderSession(ctx); break;
      case "bridge-tables": out = renderTables(ctx); break;
      case "bridge-sources": out = renderSources(ctx); break;
      default: out = renderHub(ctx);
    }
    // tap-to-reveal for the reading guide (level 1)
    out.addEventListener("click", (e) => {
      const r = e.target.closest && e.target.closest("ruby.guide");
      if (r && out.classList.contains("br-guide-1")) r.classList.toggle("br-rev");
    });
    return out;
  }
  // After a language switch, can the app stay on this bridge view?
  function keepsView(view, state) {
    if (!String(view || "").startsWith("bridge")) return true;
    if (view === "bridge-varieties") return true;
    if (view === "bridge-session") return false;
    if (isNew() && view !== "bridge") return true;
    return enabled(state);
  }
  // Tab title inside the bridge: "<Variety> bridge" / "Kurdish varieties".
  function title(state) {
    if (UI.view === "bridge-varieties") return "Kurdish varieties";
    if (isNew()) return `${NAME[pairById(UI.pair).dirs[0].split(">")[1]]} bridge`;
    const me = state && enabled(state) ? info(state) : null;
    return me ? `${NAME[me.tgt]} bridge` : "Bridge course";
  }

  // Home and Browse always show the Sorani<->Kurmanji course, whatever pair was open last.
  function legacyScope(fn) {
    return function () {
      const keep = UI.pair;
      UI.pair = null;
      try { return fn.apply(null, arguments); } finally { UI.pair = keep; }
    };
  }
  root.Bridge = {
    Model, render, offered, enabled, info: legacyScope(info), ensure: (s) => ensure(s),
    knownCard: legacyScope(knownCard), browseBlock: legacyScope(browseBlock), browseSection: legacyScope(browseSection), homeCard: legacyScope(homeCard),
    keepsView, openDeep, title, loadPair, isLoaded,
    frameIds, sessionActive, reset, startPractice,
    doneKeys: (state) => B(state).done,
  };
})(typeof window !== "undefined" ? window : globalThis);
