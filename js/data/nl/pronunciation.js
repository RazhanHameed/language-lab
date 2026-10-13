// Dutch pronunciation guide: spelling-to-sound rules, every vowel and consonant, stress, connected speech, regional variation.
window.__DECK.nl.PRONUNCIATION = {
  title: "How Dutch sounds",
  minutes: 16,
  intro: [
    "Good news first: Dutch spelling is one of the most regular in Europe. Once you know about a dozen rules you can read almost any word aloud correctly, including street names you have never seen. Unlike English, a spelling like 'oe' or 'ui' is always the same sound, in every word.",
    "Five things matter most. (1) Vowel length is shown by the spelling: one vowel letter in a closed syllable is short (man), a doubled vowel is long (maan), and a single vowel at the end of a syllable is long too (ma-nen). (2) Some letter pairs are fixed single sounds: oe, ie, eu, ui, ij/ei, ou/au. (3) G and CH are the same rough throat sound, never English 'g' or 'tch'. (4) Final consonants lose their voice: hond is said 'hont'. (5) Unstressed e is a weak 'uh', and the -n of -en is usually dropped.",
    "Notation used in the notes: CAPITALS mark the stressed syllable, 'kh' is the throat sound of Dutch g/ch (Scottish 'loch'), 'uh' is a weak schwa as in English 'about'. Respellings are approximate; always trust the audio over the letters. The standard here is Netherlands Dutch as you hear it on the NOS news and around Amsterdam; Flemish (Belgian) differences are flagged where they matter.",
  ],
  sections: [
    // ------------------------------------------------------------------
    {
      id: "alphabet",
      title: "The letters: what is different from English",
      summary: "Same 26 letters, but j, w, v, g and a handful of fixed letter pairs work differently.",
      body: [
        "Dutch uses the English alphabet. Most consonants (b, d, f, h, k, l, m, n, p, s, t) sound roughly as in English. The ones that trip people up are j (= English y), w (softer than English w), v (halfway to f), g (a throat sound) and r (rolled or throaty).",
        "Vowel letters combine into fixed units that you read as one sound: aa, ee, oo, uu, ie, oe, eu, ui, ij, ei, ou, au. Treat each pair like a single letter. The pair ij is so much a unit that it is capitalised as one: the river behind Amsterdam Central Station is 'het IJ'.",
        "c, q, x and y appear mainly in loanwords. In native words c only appears in ch and sch.",
      ],
      rules: [
        {
          rule: "j is English y",
          explain: "Never the 'dj' of English 'jam'.",
          examples: [
            { nl: "ja", en: "yes", note: "'yah'" },
            { nl: "jij", en: "you", note: "'yay' (the ij diphthong)" },
            { nl: "jaar", en: "year", note: "'yahr'" },
          ],
        },
        {
          rule: "h is always pronounced, never silent",
          examples: [
            { nl: "hallo", en: "hello", note: "ha-LOH" },
            { nl: "huis", en: "house", note: "clear h before the ui vowel" },
          ],
        },
        {
          rule: "th is just t",
          explain: "There is no English 'th' sound in Dutch.",
          examples: [
            { nl: "thee", en: "tea", note: "'tay' — a plain t" },
            { nl: "thuis", en: "at home", note: "'tuis' — t, no h at all" },
          ],
        },
        {
          rule: "c = k before a, o, u; c = s before e, i",
          explain: "Mostly in words borrowed from French, Latin or English.",
          examples: [
            { nl: "café", en: "café, pub", note: "ka-FAY" },
            { nl: "centrum", en: "city centre", note: "SEN-trum" },
            { nl: "cijfer", en: "number, grade", note: "SAY-fer" },
          ],
        },
      ],
      pitfall: "Reading j as English j is the most common first-day mistake: 'ja' is 'yah', 'jij' is 'yay', and 'Jan' is 'Yahn'.",
    },
    // ------------------------------------------------------------------
    {
      id: "open-closed",
      title: "The master rule: open and closed syllables",
      summary: "Single vowel + consonant = short (man). Doubled vowel = long (maan). Single vowel ending a syllable = long (ma-nen).",
      body: [
        "Dutch has short vowels (a, e, i, o, u) and long vowels (aa, ee, oo, uu). Length changes meaning: man is 'man', maan is 'moon'. The spelling tells you which one you have, as long as you split the word into syllables.",
        "A syllable is closed if it ends in a consonant (man, bom) and open if it ends in a vowel (ma-, bo-). In a closed syllable you write two letters for a long vowel (maan, boom). In an open syllable one letter is already long, so the second is dropped: maan → ma-nen, boom → bo-men.",
        "To keep a short vowel short when an ending is added, Dutch doubles the next consonant so the syllable stays closed: man → man-nen, bom → bom-men. So: double vowel = long, double consonant = the vowel before it is short.",
      ],
      rules: [
        {
          rule: "Closed syllable, one vowel letter → short",
          examples: [
            { nl: "man", en: "man", note: "short a, like American 'hot'" },
            { nl: "bom", en: "bomb", note: "short o, like British 'bomb'" },
            { nl: "pen", en: "pen", note: "short e, as in English" },
            { nl: "vis", en: "fish", note: "short i as in 'bit': 'fis'" },
          ],
        },
        {
          rule: "Closed syllable, doubled vowel → long",
          explain: "Play each one right after its short partner above.",
          examples: [
            { nl: "maan", en: "moon", note: "long aa: 'mahn' — compare man" },
            { nl: "boom", en: "tree", note: "long oo: 'bohm' — compare bom" },
            { nl: "peen", en: "carrot", note: "long ee: 'payn' — compare pen" },
            { nl: "vies", en: "dirty", note: "ie: 'fees' — compare vis" },
          ],
        },
        {
          rule: "Open syllable, one vowel letter → long",
          explain: "The plural drops a letter but keeps the long sound.",
          examples: [
            { nl: "manen", en: "moons", note: "MAH-nuh: one a, still long" },
            { nl: "bomen", en: "trees", note: "BOH-muh: one o, still long" },
            { nl: "wonen", en: "to live (reside)", note: "WOH-nuh (ik woon → wonen)" },
            { nl: "zo", en: "so", note: "long o: 'zoh'" },
          ],
        },
        {
          rule: "Double consonant → keeps the vowel before it short",
          examples: [
            { nl: "mannen", en: "men", note: "MAN-nuh: short a (man → mannen)" },
            { nl: "bommen", en: "bombs", note: "BOM-muh: short o" },
            { nl: "zitten", en: "to sit", note: "ZIT-tuh: short i (ik zit)" },
          ],
        },
      ],
      pitfall: "Doubled consonants are not said twice or held longer: 'mannen' is just MAN-nuh. The double letter is only a signal that the vowel before it is short.",
    },
    // ------------------------------------------------------------------
    {
      id: "vowels",
      title: "The vowels one by one: a e i o u and aa ee oo uu",
      summary: "Five short vowels, four long ones. Short = clipped, no glide. Long = longer and tenser, with a slight glide on ee and oo.",
      body: [
        "Short a is a back, open 'ah' said quickly: American 'hot', 'lot'. Short e is English 'bet'. Short i is English 'bit'. Short o is British 'lot' with slightly rounded lips.",
        "Short u is the new one: say 'i' in 'bit', then round your lips without moving your tongue. It sounds a bit like the 'u' in English 'hurt' without the r. It is never 'you' and never the 'u' of 'but'.",
        "Long aa is a bright, front 'ah', like the 'a' in Spanish 'casa' held long; the tongue is further forward than in short a. Long ee is close to English 'day' (a slight glide to 'ee' at the end) and long oo is close to 'go' in a Scottish or Northern English accent: 'oh' with only a small glide.",
        "Long uu has no English equivalent: say 'ee' and round your lips tightly as if to whistle. Keep the tongue where it was. It is the French 'u' of 'tu' and the German 'ü'.",
        "Before r, long vowels lose their glide and sound purer and a bit lower: compare 'been' with 'meer'.",
      ],
      rules: [
        {
          rule: "Short a — back of the mouth",
          examples: [
            { nl: "kat", en: "cat", note: "'kot' as in American 'cot', not English 'cat'" },
            { nl: "dag", en: "day / bye", note: "'dakh' — also how people say goodbye" },
            { nl: "tak", en: "branch", note: "short a — compare taak" },
            { nl: "taak", en: "task", note: "long aa — compare tak" },
          ],
        },
        {
          rule: "Short e — English 'bet'",
          examples: [
            { nl: "wet", en: "law", note: "'vet' — compare weet" },
            { nl: "weet", en: "(I) know", note: "long ee: 'vayt'" },
            { nl: "spel", en: "game", note: "short e — compare speel" },
            { nl: "speel", en: "(I) play", note: "long ee: 'spayl'" },
          ],
        },
        {
          rule: "Short i — English 'bit'",
          examples: [
            { nl: "zit", en: "(I) sit", note: "like English 'sit' with a z" },
            { nl: "ziet", en: "sees", note: "ie: 'zeet' — compare zit" },
          ],
        },
        {
          rule: "Short o — British 'lot', lips a little round",
          examples: [
            { nl: "bos", en: "forest", note: "short o — compare boos" },
            { nl: "boos", en: "angry", note: "long oo: 'bohs'" },
            { nl: "zon", en: "sun", note: "short o — compare zoon" },
            { nl: "zoon", en: "son", note: "long oo: 'zohn'" },
          ],
        },
        {
          rule: "Short u — 'bit' with rounded lips",
          examples: [
            { nl: "bus", en: "bus", note: "not English 'bus': lips rounded, tongue forward" },
            { nl: "brug", en: "bridge", note: "'brukh' — Amsterdam has over a thousand" },
          ],
        },
        {
          rule: "aa — bright 'ah'",
          examples: [
            { nl: "straat", en: "street", note: "'straht'" },
            { nl: "raad", en: "advice", note: "long aa — compare rat" },
            { nl: "rat", en: "rat", note: "short a — compare raad" },
          ],
        },
        {
          rule: "ee — like English 'day', slightly shorter",
          examples: [
            { nl: "twee", en: "two", note: "'tvay'" },
            { nl: "been", en: "leg", note: "'bayn' — never English 'been'" },
            { nl: "lek", en: "leak, puncture", note: "short e — compare leek" },
            { nl: "leek", en: "layperson; seemed", note: "long ee: 'layk'" },
          ],
        },
        {
          rule: "oo — 'oh' as in Scottish 'go'",
          examples: [
            { nl: "rood", en: "red", note: "'roht'" },
            { nl: "rot", en: "rotten", note: "short o — compare rood" },
            { nl: "kop", en: "cup; head", note: "short o — compare koop" },
            { nl: "koop", en: "(I) buy", note: "long oo: 'kohp'" },
          ],
        },
        {
          rule: "uu (and u ending a syllable) — 'ee' with tightly rounded lips",
          examples: [
            { nl: "minuut", en: "minute", note: "mee-NUUT: tongue on 'ee', lips on 'oo'" },
            { nl: "muur", en: "wall", note: "compare moer" },
            { nl: "Hoe gaat het met u?", en: "How are you? (polite)", note: "the polite 'u' is this same vowel" },
          ],
        },
        {
          rule: "Before r: purer, slightly lower",
          examples: [
            { nl: "meer", en: "more; lake", note: "no glide: closer to 'mair'" },
            { nl: "jaar", en: "year", note: "long aa + r" },
          ],
        },
      ],
      pitfall: "Two classic errors: reading ee as English 'ee' ('nee' is 'nay', 'been' is 'bayn'), and stretching short vowels into English ones ('bus' and 'kat' are not English 'bus' and 'cat').",
    },
    // ------------------------------------------------------------------
    {
      id: "oe-ie-eu",
      title: "oe, ie and eu: two letters, one vowel",
      summary: "oe = 'oo' in 'food', ie = 'ee' in 'see', eu = 'ay' with rounded lips.",
      body: [
        "These pairs are single vowels, and the classic beginner trap is to read them letter by letter. oe is always 'oo' (food), ie is always 'ee' (see). Both are shorter than in English, except before r, where they are long (boer, hier).",
        "eu is a rounded vowel: say the 'ay' of Dutch ee and round your lips as if for 'oo'. It is French 'peu', German 'schön'. Like ee it is long and has a slight glide in the Netherlands.",
      ],
      rules: [
        {
          rule: "oe = 'oo'",
          examples: [
            { nl: "goed", en: "good", note: "'khoot'" },
            { nl: "moeder", en: "mother", note: "MOO-der, not 'moh'" },
            { nl: "boer", en: "farmer", note: "long before r — compare boor" },
            { nl: "boor", en: "drill", note: "long oo + r" },
          ],
        },
        {
          rule: "ie = 'ee'",
          examples: [
            { nl: "fiets", en: "bicycle", note: "'feets' — never 'fights'" },
            { nl: "bier", en: "beer", note: "long before r: 'beer'" },
            { nl: "vier", en: "four", note: "rhymes with English 'beer' — compare veer" },
            { nl: "veer", en: "feather; ferry", note: "ee before r: close to 'vair'" },
          ],
        },
        {
          rule: "eu = 'ay' with rounded lips",
          examples: [
            { nl: "leuk", en: "fun, nice", note: "one of the most-used Dutch words" },
            { nl: "neus", en: "nose", note: "compare nies" },
            { nl: "nies", en: "(I) sneeze", note: "ie, unrounded" },
            { nl: "keuken", en: "kitchen", note: "KEU-kuh — compare koeken" },
            { nl: "koeken", en: "cakes, biscuits", note: "KOO-kuh" },
          ],
        },
        {
          rule: "Three-way: uu, oo, eu before r",
          examples: [
            { nl: "duur", en: "expensive", note: "uu: rounded 'ee'" },
            { nl: "door", en: "through", note: "oo" },
            { nl: "deur", en: "door", note: "eu — the Dutch word for 'door' is NOT door!" },
          ],
        },
      ],
      pitfall: "'Fiets' is 'feets', not 'fights', and 'moeder' is 'mooder', not 'mohder'. Read oe and ie as single sounds every time.",
    },
    // ------------------------------------------------------------------
    {
      id: "ij-ei",
      title: "ij and ei: the same sound, two spellings",
      summary: "Between English 'day' and 'die'. Spelling is pure history: you just have to learn which word has which.",
      body: [
        "ij and ei sound identical. Start at the 'e' of 'bed', open your jaw slightly and glide to 'ee'. Standard Dutch is between English 'day' and 'die'; aim a little lower than 'day'.",
        "Around Amsterdam and in the Randstad you'll hear it pulled down towards 'aai', almost English 'eye' ('Poldernederlands'). In Flanders it stays closer to 'ay'. All are fine; avoid an exact English 'eye' in careful speech.",
        "Because the two spellings are homophones, leiden (to lead) and lijden (to suffer) sound exactly the same. Dutch children learn the lists by heart too.",
      ],
      rules: [
        {
          rule: "ij words",
          examples: [
            { nl: "wijn", en: "wine", note: "'vayn' — compare ween" },
            { nl: "ijs", en: "ice; ice cream", note: "'ays'" },
            { nl: "fijn", en: "nice, fine", note: "'fayn'" },
          ],
        },
        {
          rule: "ei words — same sound",
          examples: [
            { nl: "trein", en: "train", note: "'trayn'" },
            { nl: "Leidseplein", en: "Leidseplein (Amsterdam square)", note: "LAY-tsuh-playn: ei twice" },
            { nl: "eigenlijk", en: "actually", note: "AY-khuh-luk: ei stressed, -lijk weak" },
          ],
        },
        {
          rule: "Homophones: ij and ei sound the same",
          examples: [
            { nl: "leiden", en: "to lead", note: "LAY-duh" },
            { nl: "lijden", en: "to suffer", note: "identical to leiden" },
          ],
        },
        {
          rule: "ij/ei vs ee",
          examples: [
            { nl: "zei", en: "said", note: "diphthong: opens up" },
            { nl: "zee", en: "sea", note: "long ee: nearly steady 'zay'" },
            { nl: "ween", en: "(I) weep", note: "ee — compare wijn" },
          ],
        },
        {
          rule: "ij vs short i",
          examples: [
            { nl: "zijn", en: "to be; his", note: "'zayn'" },
            { nl: "zin", en: "sentence; desire", note: "short i: 'zin'" },
          ],
        },
      ],
      pitfall: "ij is never 'ee' (English speakers sometimes read 'wijn' as 'veen'). And the suffix -lijk is not 'layk' but a weak 'luk': 'eigenlijk' is AY-khuh-luk.",
    },
    // ------------------------------------------------------------------
    {
      id: "ui",
      title: "ui: the famous Dutch vowel",
      summary: "Start at a rounded 'uh', glide to a rounded 'ee'. Lips stay rounded the whole time.",
      body: [
        "ui has no English equivalent, and getting it right instantly makes you sound more Dutch. Recipe: say the 'u' in 'hut' (or 'e' in 'bed') with rounded lips, then glide towards the uu of 'minuut' (rounded 'ee'). Your lips stay pushed out throughout.",
        "Typical errors: saying 'ow' (huis → 'house'), 'oy' (huis → 'hoys') or 'oo-ee'. A rough English approximation is 'ow' said with tightly rounded lips and the tongue forward, but practise against the audio.",
        "Two minimal pairs are worth drilling: ui vs ei (ui = onion, ei = egg) and ui vs ee (huis vs hees).",
      ],
      rules: [
        {
          rule: "Everyday ui words",
          examples: [
            { nl: "huis", en: "house", note: "rounded throughout; not 'house', not 'hoys'" },
            { nl: "uit", en: "out", note: "pure ui with a t" },
          ],
        },
        {
          rule: "ui vs ei/ij: rounded vs spread lips",
          examples: [
            { nl: "ui", en: "onion", note: "lips rounded" },
            { nl: "ei", en: "egg", note: "lips spread — same tongue movement" },
            { nl: "bui", en: "rain shower", note: "rounded" },
            { nl: "bij", en: "bee; at", note: "spread" },
            { nl: "luiden", en: "to ring (bells)", note: "rounded" },
            { nl: "lijden", en: "to suffer", note: "spread" },
          ],
        },
        {
          rule: "ui vs ee, oe, eu and short u",
          examples: [
            { nl: "huis", en: "house", note: "diphthong" },
            { nl: "hees", en: "hoarse", note: "long ee, unrounded: 'hays'" },
            { nl: "leuk", en: "fun", note: "eu: rounded but steady" },
            { nl: "luik", en: "hatch, shutter", note: "ui: rounded and moving" },
            { nl: "bus", en: "bus", note: "short u: the starting point of ui" },
          ],
        },
      ],
      pitfall: "Don't say 'house' for huis. Keep your lips pushed out like a kiss for the whole vowel; if your lips relax, you've slipped into English 'ow'.",
    },
    // ------------------------------------------------------------------
    {
      id: "ou-au",
      title: "ou/au, and vowels gliding into j or w",
      summary: "ou = au, close to English 'how'. aai, ooi, oei, eeuw, ieuw are just a known vowel plus a 'y' or 'w' glide.",
      body: [
        "ou and au are identical. Start with an open 'ah/uh' and glide to a rounded 'oo'. It is quite close to English 'how', but the start is a little more rounded and the lips close more at the end.",
        "Spelled ouw or auw at the end of a word (vrouw, blauw), the w just finishes the glide; there is no separate w sound.",
        "Some spellings look scary but are just a known vowel plus a glide: aai = aa + 'y' (English 'eye' with a long a), ooi = oo + 'y' ('oy' in 'boy'), oei = oe + 'y' ('ooey').",
        "With w: eeuw = ee + 'w' ('ay-oo'), ieuw = ie + 'w' ('ee-oo'), uw = uu + 'w'. The w here is a light English-style w or just rounding of the lips.",
      ],
      rules: [
        {
          rule: "ou / ouw",
          examples: [
            { nl: "oud", en: "old", note: "'out' (final d = t)" },
            { nl: "koud", en: "cold", note: "'kout'" },
            { nl: "hout", en: "wood", note: "compare huid" },
            { nl: "vrouw", en: "woman; wife", note: "'vrou'" },
            { nl: "zou", en: "would", note: "compare zo" },
            { nl: "zo", en: "so", note: "long o, no 'w' glide" },
          ],
        },
        {
          rule: "au / auw — same sound",
          examples: [
            { nl: "blauw", en: "blue", note: "'blou'" },
          ],
        },
        {
          rule: "ou vs ui",
          examples: [
            { nl: "hout", en: "wood", note: "ou: like 'how'" },
            { nl: "huid", en: "skin", note: "ui: lips rounded and tongue forward" },
          ],
        },
        {
          rule: "aai, ooi, oei",
          examples: [
            { nl: "saai", en: "boring", note: "'sah-y'" },
            { nl: "mooi", en: "beautiful, nice", note: "'moy' with a long o" },
            { nl: "fooi", en: "tip (money)", note: "'foy'" },
            { nl: "doei", en: "bye (casual)", note: "'dooey' — very Amsterdam" },
          ],
        },
        {
          rule: "eeuw, ieuw, uw",
          examples: [
            { nl: "nieuw", en: "new", note: "'nee-oo'" },
            { nl: "eeuw", en: "century", note: "'ay-oo'" },
          ],
        },
      ],
      pitfall: "'Koud' is close to 'cowed' with rounder lips, not 'code'. And 'nieuw' is 'nee-oo', never English 'new'.",
    },
    // ------------------------------------------------------------------
    {
      id: "schwa",
      title: "The weak e (schwa), -en, -ig and -lijk",
      summary: "Unstressed e is a short 'uh'. Final -en is usually just 'uh'. -ig = 'ukh', -lijk = 'luk'.",
      body: [
        "In unstressed syllables, e is almost always a schwa, the neutral 'uh' of English 'about'. That includes the very common little words de, je, we, ze, me, te and the prefixes be-, ge-, ver-.",
        "The -en at the end of plurals and infinitives is in everyday Netherlands Dutch nearly always pronounced without the n: 'lopen' is LOH-puh, 'boeken' is BOO-kuh. Newsreaders and Flemish speakers keep more of the n. (The synthetic voice may keep the n; real people in Amsterdam usually don't.)",
        "Two endings are also weakened: -ig becomes 'ukh' (gezellig, twintig) and -lijk becomes 'luk' (natuurlijk, eigenlijk). The ij is NOT pronounced as ij here.",
      ],
      rules: [
        {
          rule: "Little words with e = 'uh'",
          examples: [
            { nl: "de", en: "the", note: "'duh', never 'day'" },
            { nl: "Heb je tijd?", en: "Do you have time?", note: "je = 'yuh'" },
            { nl: "We gaan naar huis.", en: "We're going home.", note: "we = 'vuh'" },
          ],
        },
        {
          rule: "Final -en: the n is usually dropped",
          examples: [
            { nl: "lopen", en: "to walk", note: "LOH-puh" },
            { nl: "boeken", en: "books", note: "BOO-kuh" },
          ],
        },
        {
          rule: "Prefixes be-, ge-, ver- are unstressed 'buh', 'khuh', 'vuhr'",
          examples: [
            { nl: "betalen", en: "to pay", note: "buh-TAH-luh" },
            { nl: "gebeuren", en: "to happen", note: "khuh-BEU-ruh" },
            { nl: "vergeten", en: "to forget", note: "vuhr-KHAY-tuh" },
          ],
        },
        {
          rule: "-ig = 'ukh', -lijk = 'luk'",
          examples: [
            { nl: "gezellig", en: "cosy, convivial", note: "khuh-ZEL-lukh — two g's, one schwa ending" },
            { nl: "twintig", en: "twenty", note: "TVIN-tukh" },
            { nl: "natuurlijk", en: "of course", note: "na-TUUR-luk" },
          ],
        },
      ],
      pitfall: "Don't give every e its 'full' value. 'Gezellig' is not 'gee-zel-ig' but khuh-ZEL-lukh, and 'de' is 'duh'.",
    },
    // ------------------------------------------------------------------
    {
      id: "g-ch",
      title: "G, CH and SCH: the throat sound",
      summary: "g and ch are the same sound: the 'ch' of Scottish 'loch'. sch = s + that sound; final -isch = 'ees'.",
      body: [
        "Raise the back of your tongue towards the soft palate (where you make 'k'), but don't close it: let air scrape through. That's the 'kh' of 'loch' or German 'Bach'. In the north and west (Amsterdam included) it is made even further back, near the uvula, and sounds quite rough. That's normal: lean into it.",
        "In standard Netherlands Dutch g and ch sound the same; 'g' is not voiced. In the south (Limburg, Brabant) and Flanders you'll hear the 'soft g', a gentler, voiced sound made further forward, close to the 'h' in 'huge'. Both are correct.",
        "g is like English g only in loanwords (goal, game) and like French 'zh' in French loans ending in -age. ch is 'sh' in French loans (chocola, chauffeur).",
        "sch is two sounds: s followed straight away by the g/ch sound. It is never 'sk' and never 'sh'. Practise by saying 's' and then 'loch' without a vowel between them.",
        "At the end of words, -isch is simply pronounced 'ees': praktisch is PRAK-tees. In names ending in -sch the ch is often silent (Den Bosch is 'den bos').",
      ],
      rules: [
        {
          rule: "g at the start of a word",
          examples: [
            { nl: "graag", en: "gladly", note: "two throat sounds: 'khrahkh'" },
            { nl: "Goedemorgen", en: "Good morning", note: "KHOO-duh-MOR-khuh" },
          ],
        },
        {
          rule: "ch — exactly the same sound",
          examples: [
            { nl: "acht", en: "eight", note: "'akht'" },
            { nl: "gracht", en: "canal", note: "g and ch in one word: same sound twice" },
            { nl: "Prinsengracht", en: "Prinsengracht (canal)", note: "PRIN-suh-khrakht" },
          ],
        },
        {
          rule: "g at the end of a word or syllable",
          examples: [
            { nl: "dag", en: "day", note: "'dakh'" },
          ],
        },
        {
          rule: "g vs k vs h: three different sounds",
          examples: [
            { nl: "geel", en: "yellow", note: "throat friction" },
            { nl: "keel", en: "throat", note: "k: a full stop, no friction" },
            { nl: "heel", en: "very", note: "h: just breath" },
            { nl: "goed", en: "good", note: "throat friction" },
            { nl: "hoed", en: "hat", note: "h" },
          ],
        },
        {
          rule: "Loanwords: g = 'zh', ch = 'sh'",
          examples: [
            { nl: "garage", en: "garage", note: "kha-RAH-zhuh: first g Dutch, second French" },
            { nl: "chocola", en: "chocolate", note: "sho-ko-LAH" },
          ],
        },
        {
          rule: "sch at the start = 's-kh'",
          examples: [
            { nl: "school", en: "school", note: "'skhohl', not 'skool'" },
            { nl: "schrijven", en: "to write", note: "SKHRAY-vuh" },
            { nl: "Scheveningen", en: "Scheveningen (beach town)", note: "SKHAY-vuh-ning-uh: the classic test word" },
          ],
        },
        {
          rule: "-isch at the end = 'ees'",
          examples: [
            { nl: "praktisch", en: "practical", note: "PRAK-tees" },
            { nl: "logisch", en: "logical", note: "LOH-khees" },
            { nl: "typisch", en: "typical", note: "TEE-pees" },
          ],
        },
      ],
      pitfall: "Never say English 'g' in 'goed', 'tch' in 'acht', or 'sk' in 'school'. Each of them is the scrape of 'loch'.",
    },
    // ------------------------------------------------------------------
    {
      id: "v-z-w-r",
      title: "v, z, w and r",
      summary: "v is a soft f, z a soft s, w a gentle 'v' with no lip rounding. R is tapped or throaty before a vowel and soft (even English-like) after one.",
      body: [
        "Dutch v and z are 'weaker' than English v and z: there is less buzz. In the west of the Netherlands, and Amsterdam in particular, they are often fully voiceless: 'van' sounds like 'fan', 'zee' like 'see'. In Flanders they stay clearly voiced. Either is understood; a soft English v and z are fine.",
        "Dutch w is not English w. Touch your upper teeth very lightly to your lower lip (as for v) but don't create friction, and don't round your lips. The result sits between English v and w. Flemish speakers use a w made with both lips, closer to English.",
        "After a vowel at the end of a syllable (vrouw, nieuw) w is just a glide, as in English.",
        "At the start of a syllable Dutch r is either a tap or trill with the tongue tip (like Spanish or Scottish r; common in Amsterdam, the east and Flanders) or a uvular r at the back of the throat (like French; common in The Hague, Rotterdam and much of the Randstad). Pick one and use it consistently; the tongue-tip tap is easiest for most English speakers.",
        "After a vowel (maar, door, Amsterdam) many speakers in the Netherlands use a soft r that sounds surprisingly like English or American r: the 'Gooise r'. Flemish speakers roll it. So the English r you already have is acceptable there, but don't drop the r completely as British English does.",
      ],
      rules: [
        {
          rule: "v vs f",
          explain: "Standard Dutch keeps a small difference; many Amsterdammers merge them.",
          examples: [
            { nl: "vel", en: "sheet; skin", note: "soft v" },
            { nl: "fel", en: "bright; fierce", note: "clear f" },
            { nl: "vaak", en: "often", note: "'vahk', close to 'fahk' in Amsterdam" },
          ],
        },
        {
          rule: "z — a soft s",
          examples: [
            { nl: "zes", en: "six", note: "z at the start, s at the end" },
            { nl: "zeven", en: "seven", note: "ZAY-vuh" },
          ],
        },
        {
          rule: "w — teeth on lip, lips not rounded",
          examples: [
            { nl: "wat", en: "what", note: "between 'vat' and 'wat'" },
            { nl: "water", en: "water", note: "WAH-ter" },
          ],
        },
        {
          rule: "w vs v",
          examples: [
            { nl: "wel", en: "well, indeed", note: "w: smooth, no friction" },
            { nl: "vel", en: "sheet; skin", note: "v: a little friction" },
          ],
        },
        {
          rule: "r before a vowel: tap or throaty",
          examples: [
            { nl: "rood", en: "red", note: "a clear tapped or throaty r" },
            { nl: "rijden", en: "to drive, ride", note: "RAY-duh" },
            { nl: "groot", en: "big", note: "g + r: throat sound + r" },
          ],
        },
        {
          rule: "r after a vowel: soft, but always there",
          examples: [
            { nl: "maar", en: "but", note: "don't make it 'mah'" },
            { nl: "water", en: "water", note: "WAH-ter: final r pronounced" },
            { nl: "Amsterdam", en: "Amsterdam", note: "am-ster-DAM" },
          ],
        },
      ],
      pitfall: "Don't round your lips for w ('wat' with an English w sounds very foreign: think 'v' with the friction turned off). And keep every r: 'maar' (but) and 'ma' (mum) are different words.",
    },
    // ------------------------------------------------------------------
    {
      id: "devoicing",
      title: "Final devoicing and voicing assimilation",
      summary: "At the end of a word, d → t and b → p. Neighbouring consonants match each other in voicing.",
      body: [
        "Dutch never ends a word on a buzzing (voiced) consonant. Written d and b at the end are said t and p: hond = 'hont', web = 'wep'. The spelling keeps the d because it comes back when a vowel follows: honden.",
        "With v/f and z/s Dutch changes the spelling instead: brief → brieven, huis → huizen. So the plural tells you the 'real' consonant.",
        "Inside phrases, consonants adapt to their neighbours. Before b or d, a voiceless consonant becomes voiced (zakdoek = 'zagdoek', ik ben = 'ig ben'). After a voiceless consonant, v and z become f and s (het vuur = 'het fuur').",
        "Spelling -dt (hij wordt, hij vindt) is just one t. The d is there for grammar, not for sound.",
      ],
      rules: [
        {
          rule: "d → t at the end, back to d before a vowel",
          examples: [
            { nl: "hond", en: "dog", note: "'hont'" },
            { nl: "honden", en: "dogs", note: "HON-duh: the d is back" },
            { nl: "rood", en: "red", note: "'roht'" },
            { nl: "rode", en: "red (inflected)", note: "ROH-duh" },
          ],
        },
        {
          rule: "Homophones created by devoicing",
          examples: [
            { nl: "hard", en: "hard", note: "sounds like 'hart'" },
            { nl: "hart", en: "heart", note: "identical to hard" },
            { nl: "rad", en: "wheel", note: "identical to 'rat'" },
          ],
        },
        {
          rule: "b → p",
          examples: [
            { nl: "ik heb", en: "I have", note: "'ik hep'" },
          ],
        },
        {
          rule: "f/v and s/z swap in the spelling",
          examples: [
            { nl: "brief", en: "letter", note: "f at the end" },
            { nl: "brieven", en: "letters", note: "v between vowels" },
            { nl: "huis", en: "house", note: "s at the end" },
            { nl: "huizen", en: "houses", note: "z between vowels" },
          ],
        },
        {
          rule: "Voicing spreads between words",
          examples: [
            { nl: "zakdoek", en: "handkerchief", note: "'zagdook' (English-style g): k turns voiced before d" },
            { nl: "Ik ben moe.", en: "I'm tired.", note: "'ig ben moo' (English-style g)" },
            { nl: "Hij wordt boos.", en: "He's getting angry.", note: "wordt = one t; then voiced b" },
            { nl: "het vuur", en: "the fire", note: "'het fuur': v becomes f after t" },
          ],
        },
      ],
      pitfall: "Don't buzz final d's like English 'hand'. 'Hond' ends in a crisp t. And don't pronounce -dt as two sounds.",
    },
    // ------------------------------------------------------------------
    {
      id: "other-consonants",
      title: "p, t, k, ng, l and the diminutive -tje / -je",
      summary: "No puff of air after p, t, k. ng is always 'singer', never 'finger'. -tje sounds close to 'chuh'.",
      body: [
        "English p, t, k at the start of a word come with a puff of air (hold your hand in front of your mouth and say 'pin'). Dutch p, t, k have no puff, like the p in English 'spin'. Without the puff, English ears sometimes hear Dutch p, t, k as b, d, g.",
        "ng is always one sound as in 'singer', never 'finger' with an extra g. nk is 'ng' + k as in 'think'.",
        "The diminutive endings are everywhere: -je, -tje, -pje, -etje. tj sounds close to English 'ch' (or 'ty'), and sj is 'sh'. So biertje is 'BEER-chuh' and meisje is 'MAY-shuh'. Loanwords in -tie use 'tsee' or 'see' (politie, vakantie), and -tion words are 'shon' (station).",
        "l after a vowel is 'dark', as in English 'full'. In casual speech a little schwa may creep in between l and a following consonant: melk can sound like 'mellek'.",
      ],
      rules: [
        {
          rule: "p, t, k without a puff of air",
          examples: [
            { nl: "paar", en: "pair, couple", note: "like the p of 'spar'" },
            { nl: "taal", en: "language", note: "unaspirated t" },
          ],
        },
        {
          rule: "ng = 'singer', nk = 'think'",
          examples: [
            { nl: "vinger", en: "finger", note: "VING-er — like 'singer', not English 'finger'" },
            { nl: "jongen", en: "boy", note: "YONG-uh" },
            { nl: "denken", en: "to think", note: "DENG-kuh" },
          ],
        },
        {
          rule: "Diminutives: -tje ≈ 'chuh', -sje = 'shuh'",
          examples: [
            { nl: "biertje", en: "a (small) beer", note: "BEER-chuh" },
            { nl: "kopje", en: "cup", note: "KOP-yuh: pj = 'p' + 'y'" },
            { nl: "meisje", en: "girl", note: "MAY-shuh" },
            { nl: "broodje", en: "sandwich, roll", note: "BROH-chuh" },
          ],
        },
        {
          rule: "-tie and -tion in loanwords",
          examples: [
            { nl: "politie", en: "police", note: "po-LEE-tsee" },
            { nl: "vakantie", en: "holiday", note: "va-KAN-see" },
            { nl: "station", en: "station", note: "sta-SHON" },
          ],
        },
        {
          rule: "Dark l after vowels",
          examples: [
            { nl: "geel", en: "yellow", note: "dark l as in 'full'" },
          ],
        },
      ],
      pitfall: "'Vinger' and 'jongen' have no hard g in the middle: it's 'singer', not 'finger'.",
    },
    // ------------------------------------------------------------------
    {
      id: "stress",
      title: "Word stress",
      summary: "Usually on the first syllable of the stem. Unstressed prefixes, stressed separable particles, and loanwords on the end.",
      body: [
        "Native Dutch words stress the first syllable of the root, like English: VA-der, MOE-der, WER-ken. Compounds stress the first part: FIETS-pad, ZIE-ken-huis.",
        "The prefixes be-, ge-, ver-, ont-, her- and er- are never stressed; the stress falls on the next syllable. Separable verb particles (op-, aan-, mee-, uit-) are stressed: OP-staan.",
        "Loanwords from French and Latin stress the end: -teit, -tie, -eren verbs, -ie, -eur, -ant. Many place names also stress the last part: Amsterdam, Rotterdam, Den Haag.",
      ],
      rules: [
        {
          rule: "Native words and compounds: stress at the front",
          examples: [
            { nl: "vader", en: "father", note: "VAH-der" },
            { nl: "fietspad", en: "cycle path", note: "FEETS-pat" },
            { nl: "ziekenhuis", en: "hospital", note: "ZEE-kuh-huis" },
          ],
        },
        {
          rule: "Unstressed prefixes vs stressed particles",
          examples: [
            { nl: "ontbijt", en: "breakfast", note: "ont-BAYT" },
            { nl: "vertrekken", en: "to depart", note: "vuhr-TREK-kuh" },
            { nl: "opstaan", en: "to get up", note: "OP-stahn" },
          ],
        },
        {
          rule: "Loanwords and place names: stress at the end",
          examples: [
            { nl: "universiteit", en: "university", note: "uu-nee-ver-see-TAYT" },
            { nl: "restaurant", en: "restaurant", note: "res-toh-RANT" },
            { nl: "Rotterdam", en: "Rotterdam", note: "rot-ter-DAM" },
            { nl: "Den Haag", en: "The Hague", note: "den HAHKH" },
          ],
        },
      ],
      pitfall: "Don't stress the prefix of 'vergeten' or 'betalen' (vuhr-KHAY-tuh, buh-TAH-luh). And said on its own, the city is am-ster-DAM, with the stress at the end.",
    },
    // ------------------------------------------------------------------
    {
      id: "connected-speech",
      title: "Connected speech: how Dutch really sounds",
      summary: "het → 't, ik → 'k, pronouns shrink, -n disappears, words run together.",
      body: [
        "In normal speech the small words are reduced. het is usually just 'ut' or 't', ik becomes 'k' before a verb ('k weet het niet), and the stressed pronouns jij, zij, wij, mij shrink to je, ze, we, me ('yuh', 'zuh', 'vuh', 'muh').",
        "Final -n of -en goes (see the schwa section), and words are linked, with voicing adjusting across the boundary (ik ben → 'ig ben'). In questions with inversion, heb je often sounds like 'hep-yuh' and weet je like 'vay-chuh'.",
        "Listen to how the phrases below are run together; the respellings show casual Amsterdam speech.",
      ],
      rules: [
        {
          rule: "het → 'ut'",
          examples: [
            { nl: "Hoe gaat het?", en: "How are you?", note: "'hoo khaht-ut'" },
            { nl: "Het is koud.", en: "It's cold.", note: "'tis kout'" },
            { nl: "Dat weet ik niet.", en: "I don't know that.", note: "'dat vayt-uk neet'" },
          ],
        },
        {
          rule: "Weak pronouns and fused forms",
          examples: [
            { nl: "Weet je wat?", en: "You know what?", note: "'vay-chuh vat'" },
            { nl: "Heb je zin?", en: "Do you feel like it?", note: "'hep-yuh zin'" },
            { nl: "Zie je wel!", en: "See, I told you!", note: "'zee-yuh vel'" },
          ],
        },
        {
          rule: "Greetings as you'll hear them",
          examples: [
            { nl: "Goedemorgen", en: "Good morning", note: "casually 'khoo-yuh-MOR-khuh' (often written goeiemorgen)" },
            { nl: "Dank je wel", en: "Thank you", note: "'DANK-yuh-vel', one word" },
            { nl: "Tot straks", en: "See you later", note: "'tot straks'" },
          ],
        },
      ],
      pitfall: "Reading every word at full strength sounds robotic. Stress the content words and let de, het, je, we, een ('un') shrink.",
    },
    // ------------------------------------------------------------------
    {
      id: "regional",
      title: "Amsterdam, the Randstad and Flanders",
      summary: "What you'll actually hear in Amsterdam, and how Belgian Dutch differs.",
      body: [
        "Amsterdam and the Randstad: v and z often become f and s ('fan' for van); ij/ei are pulled down towards 'aai' ('Poldernederlands', especially among younger women and in the media); ee and oo glide more (twee nearly 'twij'); post-vocalic r can sound English. The Amsterdam s is often a bit 'hissier', closer to 'sh'. The g is harsh and far back.",
        "Flanders (Belgium) and the south: the soft g, rolled r, clearly voiced v and z, pure (non-gliding) ee and oo, a w made with both lips, and the n of -en often kept. Vocabulary differs too, but the spelling is the same.",
        "Learn standard Netherlands Dutch first; you'll understand all of these once your ear adjusts.",
      ],
      rules: [
        {
          rule: "Words that show the Randstad accent",
          examples: [
            { nl: "van", en: "of, from", note: "Amsterdam often 'fan'" },
            { nl: "zeven", en: "seven", note: "Amsterdam often 'SAY-fuh'" },
            { nl: "mijn", en: "my", note: "Polder Dutch 'maain'" },
            { nl: "twee", en: "two", note: "Randstad 'twij'-like; Flemish pure 'tway'" },
            { nl: "Mokum", en: "Amsterdam (nickname)", note: "MOH-kum, from Yiddish" },
          ],
        },
        {
          rule: "Words that show Flemish / southern pronunciation",
          examples: [
            { nl: "goedendag", en: "good day (Flemish greeting)", note: "soft g: voiced and further forward" },
            { nl: "groot", en: "big", note: "Flemish: soft g + rolled r" },
            { nl: "boom", en: "tree", note: "Flemish: a pure long 'oh' with no glide" },
          ],
        },
      ],
      pitfall: "Don't copy one accent feature at random. If you use the Amsterdam 'f' for v, use the Amsterdam g and r too; otherwise stick to the standard.",
    },
    // ------------------------------------------------------------------
    {
      id: "top-mistakes",
      title: "Top mistakes English speakers make",
      summary: "Quick fixes, each with a word to check yourself on.",
      body: [
        "Most of these come from reading Dutch letters with English habits. Play each word, say it, then play it again.",
      ],
      rules: [
        {
          rule: "Vowel letters read the English way",
          examples: [
            { nl: "fiets", en: "bicycle", note: "ie = 'ee', not 'fights'" },
            { nl: "nee", en: "no", note: "ee = 'ay', not 'knee'" },
            { nl: "huis", en: "house", note: "ui with rounded lips, not 'house'" },
            { nl: "bus", en: "bus", note: "rounded short u, not English 'bus'" },
          ],
        },
        {
          rule: "Consonants read the English way",
          examples: [
            { nl: "jij", en: "you", note: "j = 'y'" },
            { nl: "goed", en: "good", note: "g = throat 'kh'" },
            { nl: "school", en: "school", note: "sch = 's-kh', not 'sk'" },
          ],
        },
        {
          rule: "Length and stress",
          examples: [
            { nl: "betalen", en: "to pay", note: "stress on -TAH-, not on be-" },
          ],
        },
      ],
      pitfall: "If Dutch people switch to English, it's usually not your grammar but these sounds. Fix ui, g, ij and vowel length first.",
    },
  ],
  practice: [
    { nl: "Ik woon in een klein huis bij de gracht.", en: "I live in a small house by the canal.", note: "ui vs ei/ij, the g of gracht" },
    { nl: "Mijn fiets staat buiten.", en: "My bike is outside.", note: "ij, ie, ui in one sentence" },
    { nl: "Goedemorgen, mag ik een broodje kaas?", en: "Good morning, may I have a cheese roll?", note: "throat g, -dje = 'chuh', long aa" },
    { nl: "Het is een mooie dag, maar het is koud.", en: "It's a nice day, but it's cold.", note: "ooi glide, final g = 'kh', ou" },
    { nl: "De maan schijnt boven de bomen.", en: "The moon shines above the trees.", note: "long aa and oo, sch, schwa endings" },
    { nl: "Twee mannen lopen met hun honden.", en: "Two men walk with their dogs.", note: "ee, short a, dropped -n" },
    { nl: "Gezellig! Zullen we iets drinken?", en: "Cosy! Shall we have a drink?", note: "g twice, -ig = 'ukh', ie" },
    { nl: "Ik heb een leuk boek gelezen.", en: "I read a nice book.", note: "eu vs oe; heb = 'hep'" },
    { nl: "De trein naar Den Haag vertrekt om acht uur.", en: "The train to The Hague leaves at eight.", note: "ei, final-stress Den Haag, ch, uu" },
    { nl: "Wat wil je vanavond eten?", en: "What do you want to eat tonight?", note: "w without rounding, je = 'yuh'" },
    { nl: "Ik ben moe, ik ga naar huis.", en: "I'm tired, I'm going home.", note: "ig ben, oe, ui" },
    { nl: "Dank je wel, tot straks!", en: "Thanks, see you later!", note: "one rhythm unit, unaspirated t" },
    { nl: "Het weer is vandaag niet zo slecht.", en: "The weather isn't so bad today.", note: "ee before r, ch, long o in zo" },
    { nl: "Weet je de weg naar het station?", en: "Do you know the way to the station?", note: "weet je = 'vay-chuh', weg = 'vekh', sta-SHON" },
  ],
};
