// Top 25 common Kurmanji Kurdish (Latin Hawar script) verbs in the PRESENT
// tense. Mirrors the German deck's meaning set.
//
// Key scheme (s1..p3): s1 = I, s2 = you (sg), s3 = he/she,
//                      p1 = we, p2 = you (pl), p3 = they.
// All six forms are PRESENT-tense.
//
// Kurmanji present = di- prefix + present stem + personal endings
//   (-im, -î, -e, -in, -in, -in). p1/p2/p3 share the -in ending.
// e.g. xwarin → dixwim, dixwî, dixwe, dixwin, dixwin, dixwin.
// The "to have" and "must" verbs use an oblique-pronoun construction
// (min heye = "I have"; min divê = "I must") rather than a personal ending.
window.__DECK = window.__DECK || {};
window.__DECK.kmr = window.__DECK.kmr || {};
window.__DECK.kmr.CONJUGATIONS = [
  { inf: "bûn",           en: "to be",             irregular: true,
    s1: "dibim",          s2: "dibî",              s3: "dibe",           p1: "dibin",           p2: "dibin",             p3: "dibin" },
  { inf: "hebûn",         en: "to have",           irregular: true,
    s1: "min heye",       s2: "te heye",           s3: "wê heye",        p1: "me heye",         p2: "we heye",           p3: "wan heye" },
  { inf: "xwestin",       en: "to want",           irregular: true,
    s1: "dixwazim",       s2: "dixwazî",           s3: "dixwaze",        p1: "dixwazin",        p2: "dixwazin",          p3: "dixwazin" },
  { inf: "karîn",         en: "can",               irregular: true,
    s1: "dikarim",        s2: "dikarî",            s3: "dikare",         p1: "dikarin",         p2: "dikarin",           p3: "dikarin" },
  { inf: "divêtin",       en: "must",              irregular: true,
    s1: "min divê",       s2: "te divê",           s3: "wê divê",        p1: "me divê",         p2: "we divê",           p3: "wan divê" },
  { inf: "azad bûn",      en: "may/allowed",       irregular: true,
    s1: "azad im",        s2: "azad î",            s3: "azad e",         p1: "azad in",         p2: "azad in",           p3: "azad in" },
  { inf: "çûn",           en: "to go",             irregular: true,
    s1: "diçim",          s2: "diçî",              s3: "diçe",           p1: "diçin",           p2: "diçin",             p3: "diçin" },
  { inf: "hatin",         en: "to come",           irregular: true,
    s1: "têm",            s2: "têyî",              s3: "tê",             p1: "tên",             p2: "tên",               p3: "tên" },
  { inf: "kirin",         en: "to do/make",        irregular: true,
    s1: "dikim",          s2: "dikî",              s3: "dike",           p1: "dikin",           p2: "dikin",             p3: "dikin" },
  { inf: "zanîn",         en: "to know (fact)",    irregular: false,
    s1: "dizanim",        s2: "dizanî",            s3: "dizane",         p1: "dizanin",         p2: "dizanin",           p3: "dizanin" },
  { inf: "nasîn",         en: "to know (person)",  irregular: false,
    s1: "dinasim",        s2: "dinasî",            s3: "dinase",         p1: "dinasin",         p2: "dinasin",           p3: "dinasin" },
  { inf: "dîtin",         en: "to see",            irregular: true,
    s1: "dibînim",        s2: "dibînî",            s3: "dibîne",         p1: "dibînin",         p2: "dibînin",           p3: "dibînin" },
  { inf: "bihîstin",      en: "to hear",           irregular: false,
    s1: "dibihîsim",      s2: "dibihîsî",          s3: "dibihîse",       p1: "dibihîsin",       p2: "dibihîsin",         p3: "dibihîsin" },
  { inf: "axaftin",       en: "to speak",          irregular: true,
    s1: "diaxivim",       s2: "diaxivî",           s3: "diaxive",        p1: "diaxivin",        p2: "diaxivin",          p3: "diaxivin" },
  { inf: "gotin",         en: "to say/talk",       irregular: true,
    s1: "dibêjim",        s2: "dibêjî",            s3: "dibêje",         p1: "dibêjin",         p2: "dibêjin",           p3: "dibêjin" },
  { inf: "fêm kirin",     en: "to understand",     irregular: true,
    s1: "fêm dikim",      s2: "fêm dikî",          s3: "fêm dike",       p1: "fêm dikin",       p2: "fêm dikin",         p3: "fêm dikin" },
  { inf: "hîn bûn",       en: "to learn",          irregular: false,
    s1: "hîn dibim",      s2: "hîn dibî",          s3: "hîn dibe",       p1: "hîn dibin",       p2: "hîn dibin",         p3: "hîn dibin" },
  { inf: "xebitîn",       en: "to work",           irregular: false,
    s1: "dixebitim",      s2: "dixebitî",          s3: "dixebite",       p1: "dixebitin",       p2: "dixebitin",         p3: "dixebitin" },
  { inf: "jiyan",         en: "to live/reside",    irregular: false,
    s1: "dijîm",          s2: "dijî",              s3: "dijî",           p1: "dijîn",           p2: "dijîn",             p3: "dijîn" },
  { inf: "xwarin",        en: "to eat",            irregular: true,
    s1: "dixwim",         s2: "dixwî",             s3: "dixwe",          p1: "dixwin",          p2: "dixwin",            p3: "dixwin" },
  { inf: "vexwarin",      en: "to drink",          irregular: true,
    s1: "vedixwim",       s2: "vedixwî",           s3: "vedixwe",        p1: "vedixwin",        p2: "vedixwin",          p3: "vedixwin" },
  { inf: "kirîn",         en: "to buy",            irregular: false,
    s1: "dikirim",        s2: "dikirî",            s3: "dikire",         p1: "dikirin",         p2: "dikirin",           p3: "dikirin" },
  { inf: "pere dan",      en: "to pay",            irregular: true,
    s1: "pere didim",     s2: "pere didî",         s3: "pere dide",      p1: "pere didin",      p2: "pere didin",        p3: "pere didin" },
  { inf: "alîkarî kirin", en: "to help",           irregular: true,
    s1: "alîkarî dikim",  s2: "alîkarî dikî",      s3: "alîkarî dike",   p1: "alîkarî dikin",   p2: "alîkarî dikin",     p3: "alîkarî dikin" },
  { inf: "dan",           en: "to give",           irregular: true,
    s1: "didim",          s2: "didî",              s3: "dide",           p1: "didin",           p2: "didin",             p3: "didin" },
];
