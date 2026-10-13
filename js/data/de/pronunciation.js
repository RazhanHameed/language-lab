// Pronunciation guide for German: one long, rule-based article ("How German sounds") with playable examples.
window.__DECK.de.PRONUNCIATION = {
  title: "How German sounds",
  minutes: 18,
  intro: [
    "Good news first: German spelling is a promise. Once you know about forty rules, you can read almost any German word aloud correctly, including words you have never seen. Unlike English (think 'though', 'tough', 'through'), a German letter or letter group nearly always makes the same sound, and nothing is silent except a lengthening 'h'.",
    "The things that matter most, in order: (1) long vs short vowels, which the spelling shows you (Miete vs Mitte); (2) ei vs ie (Wein vs Wien); (3) the umlauts ä ö ü; (4) the two 'ch' sounds; (5) the letters that don't match English: w = v, v = f, z = ts, j = y, s before a vowel = z, sp/st at the start = shp/sht; (6) final b d g sound like p t k; (7) unstressed endings: -e is 'uh', -er is a soft 'ah'.",
    "The classic English-speaker mistakes, all covered below: reading ie as 'eye' (Wien is 'veen'); ignoring vowel length; saying ü as 'oo'; dropping the final e; gliding long o and e; English w, z, r and sp; a 'k' or 'sh' for ch; and a buzzing final d or g ('Hund' ends in t).",
    "How to use this page: read a section, then play the examples back to back, especially the minimal pairs (two words that differ by one sound). In the notes, CAPITALS mark the stressed syllable, 'uh' is the weak vowel in English 'sofa', 'kh' is the throaty ch in Scottish 'loch', and 'ch' is the soft hiss of the 'h' in 'huge' (the ich-sound). The standard here is the German you hear in Berlin offices, on the radio and on the S-Bahn announcements, with Berlin street German flagged at the end.",
  ],
  sections: [
    // ------------------------------------------------------------------
    {
      id: "spelling-is-a-promise",
      title: "Spelling is a promise",
      summary: "Read every letter, use German values for them, and you are 90% right.",
      body: [
        "German writes what it says. There are no silent final e's, no silent k's in 'Knie', no 'gh'. If a letter is on the page, you pronounce it; the only exception is an 'h' after a vowel, which just means 'this vowel is long'.",
        "The catch: the letters have German values, not English ones. Words that look English are the trap. 'Rat' is not a rodent, 'Gift' is not a present, and both are read with German rules.",
      ],
      rules: [
        {
          rule: "Every letter is spoken, including the final e and the k in kn-",
          explain: "If you can see it, say it.",
          examples: [
            { nl: "Name", en: "name", note: "NAH-muh: two syllables, the final e is a soft 'uh'" },
            { nl: "Hose", en: "trousers", note: "HOH-zuh, not like English 'hose'" },
            { nl: "Kneipe", en: "pub, bar", note: "k-NYE-puh: the k is spoken" },
          ],
        },
        {
          rule: "English-looking words use German letter values",
          explain: "Read them as German and they sound nothing like their English twins.",
          examples: [
            { nl: "Rat", en: "advice; council", note: "RAHT, long 'ah' like 'father'" },
            { nl: "Gift", en: "poison", note: "short i as in 'gift', but it means poison" },
            { nl: "Hut", en: "hat", note: "HOOT, long 'oo'" },
            { nl: "Kind", en: "child", note: "KINT: short i, and the final d sounds like t" },
          ],
        },
      ],
      pitfall: "Don't 'Englishise' a word because it looks familiar. 'Hand', 'Finger', 'Name', 'Bad' all follow German rules: hant, FING-ah (no hard g), NAH-muh, baht.",
    },

    // ------------------------------------------------------------------
    {
      id: "vowel-length",
      title: "Long and short vowels",
      summary: "The spelling tells you the length: doubled consonant = short; h, doubled vowel, ie, or an open syllable = long.",
      body: [
        "Every German vowel comes in a long and a short version, and the difference changes meaning: 'Miete' (rent) vs 'Mitte' (middle). Long vowels are held about twice as long and are tense and pure. Short vowels are quick and a bit more relaxed.",
        "You never have to guess, because the spelling marks the length. The single most useful rule: a doubled consonant after a vowel means that vowel is short. Long vowels are marked by a following 'h', a doubled vowel, 'ie', or by standing at the end of a syllable. Before two different consonants the vowel is usually short too (Hand, Geld, links).",
      ],
      rules: [
        {
          rule: "Double consonant (also ck, tz) after a vowel → the vowel is short",
          examples: [
            { nl: "Sonne", en: "sun", note: "short o, ZON-nuh" },
            { nl: "Katze", en: "cat", note: "tz = a doubled z: short a" },
          ],
        },
        {
          rule: "Vowel + h → long vowel, and the h is silent",
          explain: "This h is just a length sign.",
          examples: [
            { nl: "Bahn", en: "train, railway", note: "BAHN, long 'ah', no h sound" },
            { nl: "Uhr", en: "clock; o'clock", note: "long 'oo', like 'oor' with a soft r" },
          ],
        },
        {
          rule: "Doubled vowel (aa, ee, oo) → long",
          examples: [
            { nl: "Tee", en: "tea", note: "TAY, but without the English 'y' glide" },
            { nl: "Boot", en: "boat", note: "long pure 'oh' — not like English 'boot'" },
          ],
        },
        {
          rule: "ie → long 'ee'",
          examples: [
            { nl: "Liebe", en: "love", note: "LEE-buh" },
          ],
        },
        {
          rule: "Vowel at the end of a syllable (one consonant before the next vowel) → long",
          explain: "Na-me, le-ben, Va-ter: the vowel 'ends' the syllable, so it is long.",
          examples: [
            { nl: "leben", en: "to live", note: "LAY-ben, long e" },
            { nl: "Vater", en: "father", note: "FAH-tah, long a" },
          ],
        },
        {
          rule: "Minimal pairs: long vs short (a, e, i)",
          explain: "Play each pair back to back. Same consonants, only the vowel length changes.",
          examples: [
            { nl: "Miete", en: "rent", note: "long 'ee' (ie)" },
            { nl: "Mitte", en: "middle", note: "short 'i' (tt)" },
            { nl: "ihn", en: "him", note: "long 'ee' (ih)" },
            { nl: "in", en: "in", note: "short 'i'" },
            { nl: "Beet", en: "flower bed", note: "long e (ee)" },
            { nl: "Bett", en: "bed", note: "short e (tt)" },
            { nl: "Staat", en: "state", note: "long a (aa)" },
            { nl: "Stadt", en: "city", note: "short a: dt = t, and two consonants" },
          ],
        },
        {
          rule: "Minimal pairs: long vs short (o, u, ü)",
          examples: [
            { nl: "Ofen", en: "oven", note: "long 'oh'" },
            { nl: "offen", en: "open", note: "short o, as in British 'off'" },
            { nl: "Hüte", en: "hats", note: "long ü" },
            { nl: "Hütte", en: "hut, cabin", note: "short ü" },
            { nl: "Mus", en: "purée (Apfelmus = apple sauce)", note: "long 'oo'" },
            { nl: "muss", en: "must", note: "short u, as in 'put'" },
          ],
        },
        {
          rule: "Exceptions you just learn",
          explain: "Some long vowels before two consonants, and short little function words.",
          examples: [
            { nl: "Buch", en: "book", note: "long 'oo' before ch" },
            { nl: "Obst", en: "fruit", note: "long 'oh' despite three consonants" },
            { nl: "mit", en: "with", note: "short i despite the single t (short function word)" },
          ],
        },
      ],
      pitfall: "English speakers ignore length because English marks it with vowel quality instead. Hold German long vowels deliberately — 'Miete' should feel almost slow — and keep short ones clipped. Getting this wrong turns 'rent' into 'middle' and 'state' into 'city'.",
    },

    // ------------------------------------------------------------------
    {
      id: "vowel-qualities",
      title: "The five vowels: pure, no glides",
      summary: "a e i o u each have a long and a short form; long ones are steady, never sliding like English 'go' or 'day'.",
      body: [
        "English long vowels glide: 'go' is really 'goh-oo', 'day' is 'deh-ee'. German long vowels are held perfectly still. Freeze your tongue and lips for the whole vowel and you will instantly sound more German.",
        "Short vowels are close to English ones: short i as in 'bit', short e as in 'bet', short o as in British 'hot', short u as in 'put'. Short a is the same open 'ah' as the long a, just clipped — not the 'a' of 'cat'.",
      ],
      rules: [
        {
          rule: "a — long like 'father', short is the same sound, clipped",
          examples: [
            { nl: "Abend", en: "evening", note: "AH-bent, long a" },
            { nl: "Mann", en: "man", note: "short a, open 'ah' — not like English 'man'" },
          ],
        },
        {
          rule: "e — long is a pure 'ay' (no y-glide), short is 'e' in 'bet'",
          examples: [
            { nl: "gehen", en: "to go, to walk", note: "GAY-en: long e, silent h" },
            { nl: "essen", en: "to eat", note: "short e as in 'Bess'" },
          ],
        },
        {
          rule: "i — long like 'see', short like 'bit'",
          examples: [
            { nl: "Kino", en: "cinema", note: "KEE-noh, long i in an open syllable" },
            { nl: "bitte", en: "please", note: "BIT-tuh, short i" },
          ],
        },
        {
          rule: "o — long is a tight, pure 'oh'; short is British 'hot'",
          examples: [
            { nl: "Brot", en: "bread", note: "BROHT: round your lips and don't let it slide to 'oo'" },
            { nl: "oft", en: "often", note: "short o" },
          ],
        },
        {
          rule: "u — long like 'food', short like 'put'",
          examples: [
            { nl: "gut", en: "good", note: "GOOT, long u" },
            { nl: "Mutter", en: "mother", note: "short u as in 'put', not 'butter'" },
          ],
        },
      ],
      pitfall: "The two classic giveaways: diphthongising long o and e ('Brot' as 'brout', 'Tee' as 'tay-ee'), and saying German u like English 'cup' ('Mutter' as 'mutter'). German u is always lip-rounded 'oo' or 'u' as in 'put'.",
    },

    // ------------------------------------------------------------------
    {
      id: "unstressed-endings",
      title: "Unstressed endings: -e, -en, -el, -er",
      summary: "Unstressed e is a soft 'uh' (never silent); -er is a soft 'ah'; -en often shrinks to just 'n'.",
      body: [
        "In unstressed syllables, German e weakens to schwa, the 'uh' at the end of English 'sofa'. It is short and relaxed, but it is always there: 'bitte' has two syllables. This is the opposite of English 'cake', where the final e is silent.",
        "The ending -er is not 'er' with an r. The r is vocalised and the whole ending becomes a short, open 'ah'-like sound: 'Mutter' ≈ MUT-tah. This is why 'bitte' (please) and 'bitter' (bitter) sound different: 'uh' vs 'ah'.",
        "In normal speech -en often loses its vowel: 'haben' sounds like HAH-bm, 'machen' like MAKH-n, 'Garten' like GAR-tn. Both full and reduced forms are correct; Berliners use the reduced ones constantly.",
      ],
      rules: [
        {
          rule: "Final -e is a short 'uh', never silent",
          examples: [
            { nl: "danke", en: "thanks", note: "DAN-kuh" },
            { nl: "heute", en: "today", note: "HOY-tuh" },
            { nl: "Ende", en: "end", note: "EN-duh" },
          ],
        },
        {
          rule: "-en: 'uhn', often just a syllabic n",
          examples: [
            { nl: "haben", en: "to have", note: "HAH-bn, often HAH-bm in speech" },
            { nl: "machen", en: "to make, to do", note: "MAKH-n" },
          ],
        },
        {
          rule: "-el: 'uhl', often just a syllabic l",
          examples: [
            { nl: "Apfel", en: "apple", note: "AP-fl" },
            { nl: "Schlüssel", en: "key", note: "SHLÜS-sl" },
          ],
        },
        {
          rule: "-er: a soft 'ah', no r",
          examples: [
            { nl: "aber", en: "but", note: "AH-bah" },
            { nl: "Lehrer", en: "teacher", note: "LAY-rah: the first r is a real r, the final -er is 'ah'" },
          ],
        },
        {
          rule: "Minimal pairs: -e ('uh') vs -er ('ah')",
          examples: [
            { nl: "bitte", en: "please", note: "BIT-tuh" },
            { nl: "bitter", en: "bitter", note: "BIT-tah" },
            { nl: "Messe", en: "trade fair; mass", note: "MES-suh" },
            { nl: "Messer", en: "knife", note: "MES-sah" },
          ],
        },
        {
          rule: "Unstressed prefixes be- and ge- also have 'uh'",
          examples: [
            { nl: "bezahlen", en: "to pay", note: "buh-TSAH-len" },
            { nl: "gemacht", en: "made, done", note: "guh-MAKHT" },
          ],
        },
      ],
      pitfall: "Two opposite mistakes: dropping the final e entirely (English habit), or pronouncing it as a full 'ay' or 'ee'. Keep it small and neutral. And never pronounce -er with an English r: 'Wasser' is VAS-sah, not 'vasser'.",
    },

    // ------------------------------------------------------------------
    {
      id: "umlauts",
      title: "Umlauts: ä, ö, ü",
      summary: "ü = say 'ee' with 'oo' lips; ö = say 'ay' with 'oh' lips; ä = 'e' as in 'bet' (long: like 'air' without r).",
      body: [
        "ü and ö are the sounds English lacks. The trick is to split the job between tongue and lips. For ü: put your tongue where it is for 'ee', then round your lips tightly as if to whistle or say 'oo'. Keep the tongue still while the lips move. For ö: tongue in position for 'ay' (as in 'day'), lips rounded as for 'oh'.",
        "Each also has a short version: short ü is the 'i' of 'bit' with rounded lips (fünf, Glück); short ö is the 'e' of 'bet' with rounded lips (können, zwölf).",
        "ä is easy: short ä is exactly short e (Äpfel = 'EP-fl'). Long ä is an open 'eh' like 'air' without the r (Käse). Many Germans, including lots of Berliners, simply say long ä like long e, so don't stress about it.",
        "Without an umlaut keyboard, Germans write ae, oe, ue (Mueller, Goethe). 'Goethe' is therefore pronounced with ö, not 'go-eth'.",
      ],
      rules: [
        {
          rule: "ü — long: 'ee' with whistling lips; short: 'i' with rounded lips",
          examples: [
            { nl: "über", en: "over, about", note: "long ü: Ü-bah" },
            { nl: "Tür", en: "door", note: "long ü" },
          ],
        },
        {
          rule: "ö — long: 'ay' with 'oh' lips; short: 'e' (bet) with rounded lips",
          examples: [
            { nl: "schön", en: "beautiful, nice", note: "long ö" },
            { nl: "können", en: "can, to be able to", note: "short ö (nn)" },
          ],
        },
        {
          rule: "ä — short = short e; long = open 'eh' (often just like long e)",
          examples: [
            { nl: "Äpfel", en: "apples", note: "short: EP-fl" },
            { nl: "Käse", en: "cheese", note: "long: KEH-zuh" },
          ],
        },
        {
          rule: "Minimal pairs: u vs ü (umlaut often = plural)",
          examples: [
            { nl: "Mutter", en: "mother", note: "short u" },
            { nl: "Mütter", en: "mothers", note: "short ü — only the lips/tongue change" },
            { nl: "Fuß", en: "foot", note: "long u" },
            { nl: "Füße", en: "feet", note: "long ü" },
          ],
        },
        {
          rule: "Minimal pairs: i vs ü (rounding is the only difference)",
          explain: "Say the first word, then keep your tongue still and round your lips: you get the second.",
          examples: [
            { nl: "Kissen", en: "pillow", note: "short i" },
            { nl: "küssen", en: "to kiss", note: "short ü" },
            { nl: "Tier", en: "animal", note: "long i" },
            { nl: "Tür", en: "door", note: "long ü" },
            { nl: "vier", en: "four", note: "long i: FEE-uh" },
            { nl: "für", en: "for", note: "long ü: FÜ-uh" },
          ],
        },
        {
          rule: "Minimal pairs: o vs ö and e vs ö",
          examples: [
            { nl: "schon", en: "already", note: "long o" },
            { nl: "schön", en: "beautiful", note: "long ö" },
            { nl: "lesen", en: "to read", note: "long e, unrounded" },
            { nl: "lösen", en: "to solve", note: "long ö, same tongue, rounded lips" },
          ],
        },
        {
          rule: "Minimal pairs: ö vs ü",
          examples: [
            { nl: "Hölle", en: "hell", note: "short ö: tongue lower ('e')" },
            { nl: "Hülle", en: "cover, case", note: "short ü: tongue higher ('i')" },
          ],
        },
      ],
      pitfall: "Don't replace ü with 'oo' or ö with 'er'. 'Mütter' said with u is 'Mutter' (one mother instead of several), and 'schön' said with o is 'schon' (already). If in doubt, start from 'ee'/'ay' and round your lips — never start from 'oo'/'oh'.",
    },

    // ------------------------------------------------------------------
    {
      id: "diphthongs",
      title: "Diphthongs: ei, ie, eu/äu, au",
      summary: "ei = 'eye', ie = 'ee', eu/äu = 'oy', au = 'ow'.",
      body: [
        "German has three true diphthongs (vowels that glide): ei/ai = 'eye', eu/äu = 'oy', au = 'ow'. And 'ie' is not a diphthong at all — it's just how German spells a long 'ee'.",
        "The memory trick for the most common reading mistake: in ei and ie, say the English NAME of the second letter. ei → 'I' (eye), ie → 'E' (ee). So 'Wein' (wine) is 'vine', and 'Wien' (Vienna) is 'veen'.",
      ],
      rules: [
        {
          rule: "ei, ai (and ey, ay in names) → 'eye'",
          examples: [
            { nl: "mein", en: "my", note: "MINE" },
            { nl: "Bayern", en: "Bavaria", note: "BYE-ahn: ay = 'eye'" },
          ],
        },
        {
          rule: "ei vs ie: say the name of the second letter",
          examples: [
            { nl: "Wein", en: "wine", note: "VINE" },
            { nl: "Wien", en: "Vienna", note: "VEEN" },
            { nl: "Leid", en: "sorrow (es tut mir leid = I'm sorry)", note: "LITE" },
            { nl: "Lied", en: "song", note: "LEET" },
            { nl: "Reise", en: "trip, journey", note: "RYE-zuh" },
            { nl: "Riese", en: "giant", note: "REE-zuh" },
          ],
        },
        {
          rule: "eu, äu → 'oy'",
          examples: [
            { nl: "heute", en: "today", note: "HOY-tuh" },
            { nl: "Freund", en: "friend", note: "FROYNT" },
          ],
        },
        {
          rule: "au → 'ow' (as in 'how'); äu is its umlaut",
          examples: [
            { nl: "Haus", en: "house", note: "HOWSS" },
            { nl: "Häuser", en: "houses", note: "HOY-zah" },
            { nl: "Baum", en: "tree", note: "BOWM" },
            { nl: "Bäume", en: "trees", note: "BOY-muh" },
          ],
        },
        {
          rule: "Where the letters do NOT form a diphthong",
          explain: "Unstressed -ie at the end of some loanwords is 'yuh' or 'yen', not a long 'ee'.",
          examples: [
            { nl: "Familie", en: "family", note: "fa-MEE-lyuh, not fa-mee-LEE" },
            { nl: "Ferien", en: "holidays", note: "FAY-ryen" },
          ],
        },
      ],
      pitfall: "Mixing up ei and ie is the number-one reading mistake. Use the second-letter trick every single time until it's automatic. Also: German 'au' is a wide 'ow', not the 'aw' of 'law', and 'eu' is 'oy', never 'you'.",
    },

    // ------------------------------------------------------------------
    {
      id: "ch",
      title: "The two ch sounds",
      summary: "After a, o, u, au → throaty 'kh' (Bach). Everywhere else → soft hiss like the 'h' in 'huge'.",
      body: [
        "The ach-sound [x] is made at the back: raise the back of your tongue towards the soft palate as for 'k', but leave a gap and push air through. It's the 'ch' of Scottish 'loch' or the composer 'Bach'. It only comes after a, o, u and au.",
        "The ich-sound [ç] is made at the front: say 'huge' or 'hue' slowly and hold the 'h' — that hiss is it. Tongue arched high towards the hard palate, lips spread (not rounded like 'sh'). It is used after e, i, ä, ö, ü, ei, eu/äu, after consonants (l, n, r), and in the ending -chen.",
        "Because umlauts switch the vowel from back to front, the ch switches too: Buch (kh) → Bücher (soft), Nacht → Nächte. The rule is fully mechanical: look at the sound right before ch.",
      ],
      rules: [
        {
          rule: "After a, o, u, au → ach-sound (throaty 'kh')",
          examples: [
            { nl: "acht", en: "eight", note: "AKHT" },
            { nl: "Nacht", en: "night", note: "NAKHT" },
            { nl: "Kuchen", en: "cake", note: "KOO-khen" },
          ],
        },
        {
          rule: "After e, i, ä, ö, ü, ei, eu, and after consonants → ich-sound (soft hiss)",
          examples: [
            { nl: "ich", en: "I", note: "soft hiss, lips spread — not 'ish', not 'ick'" },
            { nl: "leicht", en: "easy; light", note: "after ei: soft" },
            { nl: "Milch", en: "milk", note: "after l: soft" },
            { nl: "Mädchen", en: "girl", note: "-chen is always soft" },
          ],
        },
        {
          rule: "Minimal pairs: umlaut flips the ch",
          examples: [
            { nl: "Kuchen", en: "cake", note: "u → throaty ch" },
            { nl: "Küche", en: "kitchen", note: "ü → soft ch" },
            { nl: "Buch", en: "book", note: "throaty" },
            { nl: "Bücher", en: "books", note: "soft" },
            { nl: "Nacht", en: "night", note: "throaty" },
            { nl: "Nächte", en: "nights", note: "soft" },
          ],
        },
        {
          rule: "chs → 'ks'",
          explain: "When chs belongs to the same word stem, it's just 'ks'.",
          examples: [
            { nl: "sechs", en: "six", note: "ZEKS" },
            { nl: "wachsen", en: "to grow", note: "VAK-sen" },
          ],
        },
        {
          rule: "ch at the start of a word (loanwords)",
          explain: "Varies by origin: French words → 'sh'; Greek words → mostly 'k'.",
          examples: [
            { nl: "Chef", en: "boss", note: "SHEF (from French). It means boss, not cook!" },
            { nl: "Chor", en: "choir", note: "KOH-uh, k sound (from Greek)" },
            { nl: "China", en: "China", note: "standard: soft ich-sound; southerners say KEE-na" },
          ],
        },
      ],
      pitfall: "English speakers flatten both into 'k' ('ick', 'nickt') or the ich-sound into 'sh' ('ish'). For 'ich', smile slightly and hiss like the start of 'huge' — your lips must NOT round. For 'acht', don't stop the air as for 'k': keep it flowing, like a soft clearing of the throat.",
    },

    // ------------------------------------------------------------------
    {
      id: "s-sounds",
      title: "s, ss, ß, sch, sp, st",
      summary: "s before a vowel = z; ss/ß = sharp s; sch = sh; sp/st at the start of a stem = shp/sht.",
      body: [
        "A single s before a vowel is voiced, like English 'z' in 'zoo': 'Sonne' is ZON-nuh. At the end of a word or before a consonant it's a sharp 's'. ss and ß are always a sharp 's'.",
        "ß (called Eszett or 'scharfes s') is just a sharp s that comes after a LONG vowel or a diphthong; after a short vowel you write ss. So the spelling tells you the length again: Straße (long a), Fluss (short u). In Switzerland ß isn't used at all.",
        "sch is 'sh', said with rounded, pushed-out lips. At the beginning of a word or word stem, s before p or t is also 'sh': Sport = SHPORT, Straße = SHTRAH-suh. In the middle or at the end of a stem, sp and st are normal: 'Fenster', 'ist'.",
      ],
      rules: [
        {
          rule: "s before a vowel → 'z' (voiced)",
          examples: [
            { nl: "Sonne", en: "sun", note: "ZON-nuh" },
            { nl: "sagen", en: "to say", note: "ZAH-gen" },
            { nl: "lesen", en: "to read", note: "LAY-zen" },
          ],
        },
        {
          rule: "s at the end or before a consonant → sharp 's'",
          examples: [
            { nl: "das", en: "the; that", note: "DASS" },
            { nl: "Glas", en: "glass", note: "GLAHSS" },
          ],
        },
        {
          rule: "ß after long vowels and diphthongs, ss after short vowels — both sharp",
          examples: [
            { nl: "Straße", en: "street", note: "long a + ß" },
            { nl: "Fluss", en: "river", note: "short u + ss" },
            { nl: "Maße", en: "measurements", note: "long a" },
            { nl: "Masse", en: "mass, crowd", note: "short a — same consonant, different vowel length" },
          ],
        },
        {
          rule: "Minimal pairs: voiced s vs sharp ß",
          examples: [
            { nl: "reisen", en: "to travel", note: "RYE-zen: buzzing z" },
            { nl: "reißen", en: "to tear, to rip", note: "RYE-sen: hissing s" },
          ],
        },
        {
          rule: "sch → 'sh' with rounded lips",
          examples: [
            { nl: "Tisch", en: "table", note: "TISH" },
          ],
        },
        {
          rule: "sp, st at the start of a word or stem → 'shp', 'sht'",
          examples: [
            { nl: "sprechen", en: "to speak", note: "SHPRE-chen" },
            { nl: "Sport", en: "sport", note: "SHPORT" },
            { nl: "verstehen", en: "to understand", note: "fuh-SHTAY-en: stem 'stehen' starts with st" },
            { nl: "Hauptstadt", en: "capital city", note: "HOWPT-shtat: 'Stadt' is a stem in the compound" },
          ],
        },
        {
          rule: "sp, st inside or at the end of a stem → plain 'sp', 'st'",
          examples: [
            { nl: "Fenster", en: "window", note: "FEN-stah" },
            { nl: "ist", en: "is", note: "IST" },
          ],
        },
        {
          rule: "s + ch across a word boundary is NOT sch",
          explain: "In the diminutive -chen, the s and ch belong to different parts.",
          examples: [
            { nl: "bisschen", en: "a bit", note: "BISS-chen with the soft ich-sound, not 'bi-shen'" },
          ],
        },
      ],
      pitfall: "Saying an English 's' at the start of 'Sonne', 'sagen', 'sieben' marks you as foreign immediately (though southern Germans and Austrians do it too). And don't say 'sprechen' with English 'sp' — it's 'shp'.",
    },

    // ------------------------------------------------------------------
    {
      id: "consonants",
      title: "w, v, z, j and other consonants",
      summary: "w = v, v = f, z = ts, j = y, qu = kv, pf = pf, ng = no g, th = t, ph = f.",
      body: [
        "A handful of letters simply have different values from English. Learn them once and they never change: w is English 'v'; v is English 'f' (in native words); z and tz are 'ts'; j is 'y' as in 'yes'.",
        "German also keeps consonant clusters English has simplified: pf (both lips, then f), kn, ps, and qu = 'kv'. And ng is always one sound, as in 'singer' — never with a hard g as in 'finger'.",
      ],
      rules: [
        {
          rule: "w → English 'v'",
          examples: [
            { nl: "Wasser", en: "water", note: "VAS-sah" },
            { nl: "Wohnung", en: "flat, apartment", note: "VOH-nung" },
          ],
        },
        {
          rule: "v → 'f' in native German words",
          examples: [
            { nl: "Vater", en: "father", note: "FAH-tah" },
            { nl: "viel", en: "much, a lot", note: "FEEL" },
          ],
        },
        {
          rule: "v → 'v' in loanwords from Latin/French",
          examples: [
            { nl: "Vase", en: "vase", note: "VAH-zuh" },
          ],
        },
        {
          rule: "Pairs: v (= f) vs w (= v)",
          examples: [
            { nl: "Vetter", en: "(male) cousin", note: "FET-tah" },
            { nl: "Wetter", en: "weather", note: "VET-tah" },
            { nl: "viel", en: "much", note: "FEEL — sounds identical to 'fiel' (fell)" },
            { nl: "fiel", en: "fell", note: "FEEL — same sound, different spelling" },
          ],
        },
        {
          rule: "z, tz → 'ts'; zw → 'tsv'",
          examples: [
            { nl: "Zeit", en: "time", note: "TSITE" },
            { nl: "Zimmer", en: "room", note: "TSIM-mah" },
            { nl: "Platz", en: "square; seat; space", note: "PLATS" },
            { nl: "zwei", en: "two", note: "TSVYE" },
          ],
        },
        {
          rule: "j → 'y' as in 'yes'",
          examples: [
            { nl: "ja", en: "yes", note: "YAH" },
            { nl: "Jahr", en: "year", note: "YAHR" },
          ],
        },
        {
          rule: "qu → 'kv'",
          examples: [
            { nl: "Quittung", en: "receipt", note: "KVIT-tung" },
          ],
        },
        {
          rule: "pf → p and f together",
          explain: "Close your lips for p, then release straight into f.",
          examples: [
            { nl: "Pferd", en: "horse", note: "PFAYRT — not 'ferd'" },
            { nl: "Kopf", en: "head", note: "KOPF" },
          ],
        },
        {
          rule: "ng is one sound (as in 'singer'), nk = ng + k",
          examples: [
            { nl: "Finger", en: "finger", note: "FING-ah, like 'singer' — no hard g" },
            { nl: "Hunger", en: "hunger", note: "HUNG-ah, no hard g" },
          ],
        },
        {
          rule: "h at the start of a syllable is a real h",
          explain: "Only after a vowel is h a silent length marker.",
          examples: [
            { nl: "wohin", en: "where to", note: "vo-HIN: h starts the syllable, so you hear it" },
            { nl: "sehen", en: "to see", note: "ZAY-en: h after the vowel is silent" },
          ],
        },
        {
          rule: "th → 't', ph → 'f', dt → 't', tsch → 'tch'",
          examples: [
            { nl: "Physik", en: "physics", note: "fü-ZEEK: ph = f, y = ü" },
            { nl: "tschüss", en: "bye", note: "TCHÜSS" },
          ],
        },
      ],
      pitfall: "The 'w' and 'z' trap: 'Wein' is 'vine', and 'Zoo' is 'tsoh'. English speakers say these right in the first lesson, then relapse in fast speech. Also don't drop the p in 'pf' — Germans from the north sometimes do in casual speech, but standard 'Pferd' has both.",
    },

    // ------------------------------------------------------------------
    {
      id: "final-devoicing",
      title: "Final devoicing: b, d, g → p, t, k",
      summary: "At the end of a word or syllable, b d g s v are said as p t k s f. Add an ending and they come back.",
      body: [
        "German has a strict rule called Auslautverhärtung ('final hardening'): voiced consonants lose their voice at the end of a word or syllable. b → p, d → t, g → k, s (z) → s, v → f. So 'Hund' is 'hoont' and 'Tag' is 'tahk'.",
        "The spelling keeps the original letter because it comes back when an ending is added: Hund (t) → Hunde (d), Tag (k) → Tage (g). Spelling shows the word family; the rule tells you the sound. Playing singular and plural back to back is the best way to hear it.",
        "This also happens inside words, at the end of a syllable or compound part: 'Handtuch' (HANT-tookh), 'Abfahrt' (AP-fahrt), 'lieblich'.",
      ],
      rules: [
        {
          rule: "Final b → p, d → t, g → k",
          examples: [
            { nl: "halb", en: "half", note: "HALP" },
            { nl: "Wald", en: "forest", note: "VALT" },
            { nl: "Berg", en: "mountain", note: "BERK" },
          ],
        },
        {
          rule: "Add an ending and the voiced sound returns",
          examples: [
            { nl: "Hund", en: "dog", note: "HUNT" },
            { nl: "Hunde", en: "dogs", note: "HUN-duh: d is back" },
            { nl: "Tag", en: "day", note: "TAHK" },
            { nl: "Tage", en: "days", note: "TAH-guh: g is back" },
            { nl: "lieb", en: "dear, kind", note: "LEEP" },
            { nl: "lieben", en: "to love", note: "LEE-ben: b is back" },
          ],
        },
        {
          rule: "Homophones: different spelling, same sound",
          explain: "These pairs sound identical. Play them to prove it.",
          examples: [
            { nl: "Rad", en: "wheel; bike", note: "RAHT" },
            { nl: "Rat", en: "advice", note: "RAHT — identical" },
            { nl: "Bund", en: "federation, union", note: "BUNT" },
            { nl: "bunt", en: "colourful", note: "BUNT — identical" },
          ],
        },
        {
          rule: "Devoicing inside words, at the end of a syllable",
          examples: [
            { nl: "Handtuch", en: "towel", note: "HANT-tookh" },
            { nl: "Abfahrt", en: "departure", note: "AP-fahrt" },
          ],
        },
      ],
      pitfall: "English speakers pronounce 'Hund', 'Tag', 'gelb' with a buzzing d/g/b at the end. Cut the voice: it should sound like 'hunt', 'tahk', 'gelp'. Note: in Berlin and the north you'll often hear 'Tach' for 'Tag' — that's regional; standard is 'tahk'.",
    },

    // ------------------------------------------------------------------
    {
      id: "r",
      title: "The German r",
      summary: "Before a vowel: a soft gargle at the back of the throat. After a vowel: it melts into 'ah'.",
      body: [
        "Standard German r is uvular: made at the very back, where you gargle. Say the throaty ach-sound (as in 'Bach'), then add voice — that buzz is the German r. It's soft, not a harsh scrape. Many speakers in the south, Austria and Switzerland roll the r with the tongue tip instead; both are fine.",
        "After a vowel at the end of a syllable, the r is vocalised: it turns into a short, open 'ah'-like vowel. 'hier' = HEE-uh, 'Uhr' = OO-uh, 'mehr' = MAY-uh. After long a, it just lengthens the a: 'Jahr' ≈ YAAH.",
        "The unstressed prefixes er-, ver-, zer- and her- use this vocalised r too: 'verstehen' ≈ fuh-SHTAY-en.",
      ],
      rules: [
        {
          rule: "r before a vowel → back-of-throat r",
          examples: [
            { nl: "rot", en: "red", note: "the r is a soft gargle" },
            { nl: "Reise", en: "trip", note: "RYE-zuh" },
            { nl: "Frau", en: "woman", note: "FROW" },
          ],
        },
        {
          rule: "r after a vowel → melts into 'uh'/'ah'",
          examples: [
            { nl: "hier", en: "here", note: "HEE-uh" },
            { nl: "Uhr", en: "clock", note: "OO-uh" },
            { nl: "Jahr", en: "year", note: "YAAH: r just lengthens the a" },
          ],
        },
        {
          rule: "Pairs: vocalised r vs consonantal r (add a vowel and the r comes back)",
          examples: [
            { nl: "Tier", en: "animal", note: "TEE-uh" },
            { nl: "Tiere", en: "animals", note: "TEE-ruh: real r before the vowel" },
            { nl: "Lehrer", en: "teacher (m)", note: "final -er = 'ah'" },
            { nl: "Lehrerin", en: "teacher (f)", note: "LAY-ruh-rin: now both r's are real" },
          ],
        },
        {
          rule: "Prefixes er-, ver-, zer- → vocalised r",
          examples: [
            { nl: "verstehen", en: "to understand", note: "fuh-SHTAY-en" },
            { nl: "erzählen", en: "to tell", note: "air-TSEH-len" },
          ],
        },
      ],
      pitfall: "Don't use the English r anywhere — it is the single strongest foreign accent marker. Before vowels, gargle softly; after vowels, don't pronounce an r at all, just let it become 'uh'/'ah'. If the uvular r won't come, a light tongue-tip tap (as in Spanish 'pero') is a perfectly acceptable fallback.",
    },

    // ------------------------------------------------------------------
    {
      id: "endings",
      title: "Endings: -ig, -ung, -lich, -chen, -tion and friends",
      summary: "-ig = 'ich' (soft ch); -ung = 'oong'; -tion = 'tsyohn'; -ei = stressed 'eye'.",
      body: [
        "Endings are where the rules pay off most: they repeat in thousands of words. The most surprising one is -ig: in standard German it's pronounced like 'ich' (soft ch), not with a g or k. 'König' = KÖ-nich, 'zwanzig' = TSVAN-tsich.",
        "When a vowel follows, the g is a real g again: 'Könige', 'billige'. And before -lich it's 'k' to avoid two ch-sounds in a row: 'königlich'. In southern Germany, Austria and Switzerland, -ig is said '-ik' everywhere; in Berlin you'll hear the standard 'ich'.",
      ],
      rules: [
        {
          rule: "-ig at the end → soft 'ich'",
          examples: [
            { nl: "König", en: "king", note: "KÖ-nich" },
            { nl: "wichtig", en: "important", note: "VICH-tich: two soft ch-sounds" },
            { nl: "zwanzig", en: "twenty", note: "TSVAN-tsich" },
          ],
        },
        {
          rule: "-ig + vowel → real g; -ig before -lich → k",
          examples: [
            { nl: "Könige", en: "kings", note: "KÖ-ni-guh" },
            { nl: "königlich", en: "royal", note: "KÖ-nik-lich" },
          ],
        },
        {
          rule: "-ung → 'oong' (ng, no g); -lich → 'lich' (soft ch)",
          examples: [
            { nl: "Rechnung", en: "bill, invoice", note: "RECH-nung" },
            { nl: "freundlich", en: "friendly", note: "FROYNT-lich" },
          ],
        },
        {
          rule: "-heit, -keit → 'hite', 'kite'; -chen → soft 'chen'",
          examples: [
            { nl: "Freiheit", en: "freedom", note: "FRY-hite" },
            { nl: "Möglichkeit", en: "possibility", note: "MÖK-lich-kite" },
          ],
        },
        {
          rule: "Stressed loan endings: -tion, -ieren, -ei, -ur, -tät",
          examples: [
            { nl: "Information", en: "information", note: "in-for-ma-TSYOHN: ti = 'tsy'" },
            { nl: "Bäckerei", en: "bakery", note: "bek-kuh-RYE: stress on -ei" },
            { nl: "Polizei", en: "police", note: "po-li-TSYE" },
          ],
        },
      ],
      pitfall: "Don't read -ig as English '-ig' or '-ick'. The tens all end in soft 'ich' in standard German: zwanzig, dreißig, vierzig. And -tion is never 'shun' — it's 'tsyohn'.",
    },

    // ------------------------------------------------------------------
    {
      id: "glottal-stop",
      title: "The glottal stop and connected speech",
      summary: "German starts vowel-initial words with a tiny catch in the throat — no linking like English 'an_apple'.",
      body: [
        "Before a word or stem that begins with a vowel, Germans make a glottal stop: the little catch in 'uh-oh'. So 'am Abend' is 'am | AH-bent', not 'a-MAH-bent'. This is what makes German sound 'choppy' to English ears.",
        "It also happens inside words when a new stem starts with a vowel: 'beantworten' = be-|ANT-vor-ten, 'Spiegelei' (fried egg) = SHPEE-gl-|eye. It can even distinguish words: 'vereisen' (to ice over) vs 'verreisen' (to go on a trip).",
        "At the same time, everyday speech blurs a lot: 'haben wir' → HAM-mah, 'ist es' → IS-ses, 'gibt es' → gibt's, 'nicht' → nich. You don't need to produce these, but you need to recognise them, especially in Berlin.",
      ],
      rules: [
        {
          rule: "Glottal stop before vowel-initial words",
          examples: [
            { nl: "am Abend", en: "in the evening", note: "am | AH-bent — no linking" },
            { nl: "Ich esse ein Ei.", en: "I'm eating an egg.", note: "fresh catch before esse, ein, Ei" },
          ],
        },
        {
          rule: "Glottal stop inside words, where a vowel-initial stem starts",
          examples: [
            { nl: "beantworten", en: "to answer", note: "be | ANT-vor-ten" },
            { nl: "Spiegelei", en: "fried egg", note: "SHPEE-gl | eye: Spiegel + Ei" },
            { nl: "vereisen", en: "to ice over", note: "fuh | EYE-zen: catch before 'eisen'" },
            { nl: "verreisen", en: "to go on a trip", note: "fuh-RYE-zen: smooth, no catch" },
          ],
        },
        {
          rule: "Everyday reductions you'll hear",
          explain: "Recognise these; the TTS says the careful form.",
          examples: [
            { nl: "Wie geht's?", en: "How's it going?", note: "geht es → geht's" },
            { nl: "Haben wir noch Milch?", en: "Do we still have milk?", note: "casual: HAM-mah noch milch" },
            { nl: "Ich weiß es nicht.", en: "I don't know.", note: "casual: ich weiß nich / weiß nich" },
          ],
        },
      ],
      pitfall: "English links words smoothly ('an_egg' → 'a-negg'). Doing that in German blurs word boundaries: 'am Abend' becomes something like 'Mabend'. Give every vowel-initial word a fresh, small start.",
    },

    // ------------------------------------------------------------------
    {
      id: "stress",
      title: "Word stress",
      summary: "Native words: stress the first syllable — except after be-, ge-, er-, ver-, zer-, ent-. Loanwords: often the last.",
      body: [
        "Most native German words stress the first syllable: ARbeit, WOHnung, FAHRrad. Compounds stress their first part: KRANkenhaus, KÜHLschrank, HAUPTbahnhof.",
        "Unstressed prefixes (be-, ge-, er-, ver-, zer-, ent-, emp-) never take stress, so it moves to the stem: beZAHlen, verSTEhen, entSCHULdigung. Separable prefixes (an-, auf-, aus-, ein-, mit-, zu- …) ARE stressed: ANkommen, AUFstehen, EINkaufen.",
        "Loanwords, mostly from Latin and French, stress late, often the last syllable: MuSIK, BüRO, HoTEL. Even 'Berlin' is ber-LEEN. A few prefixes can be either stressed or unstressed with different meanings (ÜBERsetzen 'ferry across' vs überSETzen 'translate'), but those are rare.",
      ],
      rules: [
        {
          rule: "Native words: first syllable",
          examples: [
            { nl: "Arbeit", en: "work", note: "AR-bite" },
            { nl: "Fahrrad", en: "bicycle", note: "FAHR-raht" },
            { nl: "Hauptbahnhof", en: "main station", note: "HOWPT-bahn-hohf: compound, first part stressed" },
          ],
        },
        {
          rule: "Inseparable prefixes are unstressed → stress the stem",
          examples: [
            { nl: "bezahlen", en: "to pay", note: "buh-TSAH-len" },
            { nl: "Gespräch", en: "conversation", note: "guh-SHPREHCH" },
            { nl: "Entschuldigung", en: "excuse me; sorry", note: "ent-SHUL-di-gung" },
          ],
        },
        {
          rule: "Separable prefixes are stressed",
          examples: [
            { nl: "ankommen", en: "to arrive", note: "AN-kom-men" },
            { nl: "aufstehen", en: "to get up", note: "OWF-shtay-en" },
          ],
        },
        {
          rule: "Loanwords: stress usually late",
          examples: [
            { nl: "Musik", en: "music", note: "mu-ZEEK" },
            { nl: "Hotel", en: "hotel", note: "ho-TEL" },
            { nl: "Berlin", en: "Berlin", note: "ber-LEEN: stress at the end" },
          ],
        },
      ],
      pitfall: "English speakers often stress the first syllable of loanwords ('MU-sik', 'HO-tel' is fine in English) and the prefix of verbs ('BE-zahlen'). Check: is it a native word without be-/ver-/etc.? First syllable. Otherwise look for the stem or the loan ending.",
    },

    // ------------------------------------------------------------------
    {
      id: "rules-bend",
      title: "Where the rules bend: loanwords",
      summary: "Words from English and French keep (roughly) their original pronunciation.",
      body: [
        "German is rule-based for native words. The exceptions are almost all borrowed: English words (Job, Handy, Computer) are said roughly as in English, and French words (Restaurant, Garage, Portemonnaie) roughly as in French, with French nasal vowels and a soft 'zh' for g and j.",
        "The giveaway is usually an un-German spelling: 'ou', 'eau', final '-age', 'c' before e/i, 'y'. When you see these, expect foreign rules.",
      ],
      rules: [
        {
          rule: "English loans: English-ish pronunciation",
          examples: [
            { nl: "Job", en: "job", note: "as in English (j = 'dj', unlike native ja)" },
            { nl: "Handy", en: "mobile phone", note: "HEN-dee — a 'fake English' word" },
            { nl: "Computer", en: "computer", note: "kom-PYOO-tah" },
          ],
        },
        {
          rule: "French loans: soft 'zh', nasal vowels, silent final letters",
          examples: [
            { nl: "Restaurant", en: "restaurant", note: "res-to-RANG (nasal, no t)" },
            { nl: "Garage", en: "garage", note: "ga-RAH-zhuh" },
            { nl: "Journalist", en: "journalist", note: "zhur-na-LIST" },
            { nl: "Portemonnaie", en: "wallet", note: "port-mo-NAY" },
          ],
        },
        {
          rule: "c in loanwords: 'k' before a, o, u; 'ts' before e, i",
          examples: [
            { nl: "Café", en: "café", note: "ka-FAY" },
          ],
        },
      ],
      pitfall: "Don't over-apply German rules to obvious loans ('Job' with a 'y', 'Restaurant' with every letter), and don't under-apply them to native words that just look English. If it looks foreign, it probably is.",
    },

    // ------------------------------------------------------------------
    {
      id: "berlin-and-regions",
      title: "Berlin and other regional sounds",
      summary: "Learn the standard; recognise Berlinisch: ick, jut, wat, det, ooch, keen.",
      body: [
        "Standard German (Hochdeutsch) is what you should speak, and Berliners understand and use it. But on the street, at the Späti and in the Kneipe you'll hear Berlinisch. The main features: g at the start of a word → y ('jut' for gut), ich → 'ick', was/das → 'wat'/'det', au → 'oo' ('ooch' for auch), ei → 'ee' ('keen' for kein).",
        "Elsewhere: the south (Bavaria, Austria, Switzerland) rolls the r, says -ig as '-ik', and says s before vowels unvoiced ('Sonne' with a real s). Northerners turn final g into ch ('Tach', 'Zuch'). All of these are regional, not mistakes — but stick to the standard yourself.",
      ],
      rules: [
        {
          rule: "Standard word → what Berliners often say",
          explain: "The audio is standard German; the note gives the Berlin version.",
          examples: [
            { nl: "gut", en: "good", note: "Berlin: 'jut'" },
            { nl: "ich", en: "I", note: "Berlin: 'ick'" },
            { nl: "Was ist das?", en: "What is that?", note: "Berlin: 'Wat is'n det?'" },
            { nl: "Guten Tag", en: "good day", note: "north and Berlin: 'Tach'" },
          ],
        },
        {
          rule: "Berlin vocabulary you'll hear",
          examples: [
            { nl: "Schrippe", en: "bread roll (Berlin word)", note: "the Berlin word for Brötchen" },
            { nl: "Späti", en: "corner shop open late", note: "SHPEH-tee" },
            { nl: "Sonnabend", en: "Saturday (north/Berlin)", note: "ZON-ah-bent; elsewhere Samstag" },
          ],
        },
        {
          rule: "Southern and Austrian features",
          examples: [
            { nl: "Grüß Gott", en: "hello (south, Austria)", note: "often with a rolled tongue-tip r" },
            { nl: "zwanzig", en: "twenty", note: "south: TSVAN-tsik; standard and Berlin: -tsich" },
            { nl: "Kaffee", en: "coffee", note: "Germany: KAF-feh; Austria: ka-FEH" },
          ],
        },
      ],
      pitfall: "Don't copy Berlinisch before you master the standard — 'ick' from a learner sounds odd. But do learn to hear it, or 'Wat kost'n det?' (How much is that?) will throw you.",
    },
  ],
  practice: [
    { nl: "Die Miete ist in der Mitte der Stadt sehr hoch.", en: "The rent in the middle of the city is very high.", note: "Miete vs Mitte; Stadt short; sehr = ZAY-uh" },
    { nl: "Leider trinke ich keinen Wein in Wien.", en: "Unfortunately I don't drink wine in Vienna.", note: "ei vs ie: leider, keinen, Wein vs Wien" },
    { nl: "Die Kinder spielen in der Küche, der Kuchen ist im Ofen.", en: "The children are playing in the kitchen, the cake is in the oven.", note: "soft ch in Küche, throaty ch in Kuchen; long ü, long o" },
    { nl: "Meine Mutter und meine Brüder wohnen in München.", en: "My mother and my brothers live in Munich.", note: "u vs ü; w = v; soft ch after n" },
    { nl: "Ich möchte zwei Brötchen und einen Kaffee, bitte.", en: "I'd like two rolls and a coffee, please.", note: "ö in möchte and Brötchen; zw = tsv; final e in bitte" },
    { nl: "Wir fahren am Sonnabend mit dem Zug nach Hamburg.", en: "We're going to Hamburg by train on Saturday.", note: "glottal stop before Abend; Zug = TSOOK; Hamburg ends in k" },
    { nl: "Sprechen Sie bitte etwas langsamer.", en: "Please speak a bit more slowly.", note: "sp = shp; s before vowel = z; -er = 'ah'" },
    { nl: "Das Wetter ist heute schön, aber sehr windig.", en: "The weather is nice today, but very windy.", note: "w = v; eu = oy; ö; -ig = ich" },
    { nl: "Ich verstehe nicht, was auf der Straße passiert.", en: "I don't understand what's happening on the street.", note: "verstehe = sht; ich and nicht soft; ß after long a; stressed -iert" },
    { nl: "Der Hund läuft durch den Wald zum Fluss.", en: "The dog runs through the forest to the river.", note: "final devoicing: Hund, Wald; äu = oy; soft ch in durch; ss short" },
    { nl: "Zwanzig Euro für ein Taxi ist wirklich zu viel.", en: "Twenty euros for a taxi is really too much.", note: "z = ts; -ig = ich; eu = oy; v in viel = f" },
    { nl: "Entschuldigung, wo ist der Hauptbahnhof?", en: "Excuse me, where is the main station?", note: "stress on SCHUL; w = v; HAUPT-bahnhof" },
    { nl: "Am Abend esse ich gern Käse und Äpfel.", en: "In the evening I like to eat cheese and apples.", note: "glottal stops before Abend, esse, und, Äpfel; long and short ä" },
    { nl: "Fünf Freunde fahren mit dem Fahrrad zur Arbeit.", en: "Five friends ride their bikes to work.", note: "short ü; eu = oy; first-syllable stress in Fahrrad and Arbeit" },
  ],
};
