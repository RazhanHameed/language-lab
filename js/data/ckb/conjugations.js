// Top 25 common Central Kurdish (Sorani) verbs in the PRESENT tense.
// Arabic script, RTL. Mirrors the German deck's meaning set.
//
// Key scheme (s1..p3): s1 = I, s2 = you (sg), s3 = he/she,
//                      p1 = we, p2 = you (pl), p3 = they.
// All six forms are PRESENT-tense.
//
// Sorani present = دە‑ prefix + present stem + personal endings
//   (‑م، ‑یت، ‑ێت/‑ات، ‑ین، ‑ن، ‑ن). p2 and p3 share the ‑ن ending.
// e.g. خواردن → دەخۆم، دەخۆیت، دەخوات، دەخۆین، دەخۆن، دەخۆن.
// The modal/possessive verbs (to have, want, must) build with a fused
// possessive suffix rather than the plain دە‑ paradigm.
window.__DECK = window.__DECK || {};
window.__DECK.ckb = window.__DECK.ckb || {};
window.__DECK.ckb.CONJUGATIONS = [
  { inf: "بوون",        en: "to be",             irregular: true,
    s1: "دەبم",         s2: "دەبیت",           s3: "دەبێت",           p1: "دەبین",           p2: "دەبن",             p3: "دەبن" },
  { inf: "هەبوون",      en: "to have",           irregular: true,
    s1: "هەمە",         s2: "هەتە",             s3: "هەیەتی",          p1: "هەمانە",          p2: "هەتانە",           p3: "هەیانە" },
  { inf: "ویستن",       en: "to want",           irregular: true,
    s1: "دەمەوێت",      s2: "دەتەوێت",         s3: "دەیەوێت",         p1: "دەمانەوێت",       p2: "دەتانەوێت",        p3: "دەیانەوێت" },
  { inf: "توانین",      en: "can",               irregular: true,
    s1: "دەتوانم",      s2: "دەتوانیت",        s3: "دەتوانێت",        p1: "دەتوانین",        p2: "دەتوانن",          p3: "دەتوانن" },
  { inf: "پێویستبوون",  en: "must",              irregular: true,
    s1: "پێویستمە",     s2: "پێویستتە",        s3: "پێویستیەتی",      p1: "پێویستمانە",      p2: "پێویستتانە",       p3: "پێویستیانە" },
  { inf: "ئازادبوون",   en: "may/allowed",       irregular: true,
    s1: "ئازادم",       s2: "ئازادی",           s3: "ئازادە",          p1: "ئازادین",         p2: "ئازادن",           p3: "ئازادن" },
  { inf: "چوون",        en: "to go",             irregular: true,
    s1: "دەچم",         s2: "دەچیت",            s3: "دەچێت",           p1: "دەچین",           p2: "دەچن",             p3: "دەچن" },
  { inf: "هاتن",        en: "to come",           irregular: true,
    s1: "دێم",          s2: "دێیت",             s3: "دێت",             p1: "دێین",            p2: "دێن",              p3: "دێن" },
  { inf: "کردن",        en: "to do/make",        irregular: true,
    s1: "دەکەم",        s2: "دەکەیت",           s3: "دەکات",           p1: "دەکەین",          p2: "دەکەن",            p3: "دەکەن" },
  { inf: "زانین",       en: "to know (fact)",    irregular: false,
    s1: "دەزانم",       s2: "دەزانیت",          s3: "دەزانێت",         p1: "دەزانین",         p2: "دەزانن",           p3: "دەزانن" },
  { inf: "ناسین",       en: "to know (person)",  irregular: false,
    s1: "دەناسم",       s2: "دەناسیت",          s3: "دەناسێت",         p1: "دەناسین",         p2: "دەناسن",           p3: "دەناسن" },
  { inf: "بینین",       en: "to see",            irregular: true,
    s1: "دەبینم",       s2: "دەبینیت",          s3: "دەبینێت",         p1: "دەبینین",         p2: "دەبینن",           p3: "دەبینن" },
  { inf: "بیستن",       en: "to hear",           irregular: false,
    s1: "دەبیسم",       s2: "دەبیسیت",          s3: "دەبیسێت",         p1: "دەبیسین",         p2: "دەبیسن",           p3: "دەبیسن" },
  { inf: "قسەکردن",     en: "to speak",          irregular: true,
    s1: "قسە دەکەم",    s2: "قسە دەکەیت",       s3: "قسە دەکات",       p1: "قسە دەکەین",      p2: "قسە دەکەن",        p3: "قسە دەکەن" },
  { inf: "گوتن",        en: "to say/talk",       irregular: true,
    s1: "دەڵێم",        s2: "دەڵێیت",           s3: "دەڵێت",           p1: "دەڵێین",          p2: "دەڵێن",            p3: "دەڵێن" },
  { inf: "تێگەیشتن",    en: "to understand",     irregular: true,
    s1: "تێدەگەم",      s2: "تێدەگەیت",         s3: "تێدەگات",         p1: "تێدەگەین",        p2: "تێدەگەن",          p3: "تێدەگەن" },
  { inf: "فێربوون",     en: "to learn",          irregular: false,
    s1: "فێردەبم",      s2: "فێردەبیت",         s3: "فێردەبێت",        p1: "فێردەبین",        p2: "فێردەبن",          p3: "فێردەبن" },
  { inf: "کارکردن",     en: "to work",           irregular: true,
    s1: "کار دەکەم",    s2: "کار دەکەیت",       s3: "کار دەکات",       p1: "کار دەکەین",      p2: "کار دەکەن",        p3: "کار دەکەن" },
  { inf: "ژیان",        en: "to live/reside",    irregular: false,
    s1: "دەژیم",        s2: "دەژیت",            s3: "دەژی",            p1: "دەژین",           p2: "دەژین",            p3: "دەژین" },
  { inf: "خواردن",      en: "to eat",            irregular: true,
    s1: "دەخۆم",        s2: "دەخۆیت",           s3: "دەخوات",          p1: "دەخۆین",          p2: "دەخۆن",            p3: "دەخۆن" },
  { inf: "خواردنەوە",   en: "to drink",          irregular: true,
    s1: "دەخۆمەوە",     s2: "دەخۆیتەوە",        s3: "دەخواتەوە",       p1: "دەخۆینەوە",       p2: "دەخۆنەوە",         p3: "دەخۆنەوە" },
  { inf: "کڕین",        en: "to buy",            irregular: false,
    s1: "دەکڕم",        s2: "دەکڕیت",           s3: "دەکڕێت",          p1: "دەکڕین",          p2: "دەکڕن",            p3: "دەکڕن" },
  { inf: "پارەدان",     en: "to pay",            irregular: true,
    s1: "پارە دەدەم",   s2: "پارە دەدەیت",      s3: "پارە دەدات",      p1: "پارە دەدەین",     p2: "پارە دەدەن",       p3: "پارە دەدەن" },
  { inf: "یارمەتیدان",  en: "to help",           irregular: true,
    s1: "یارمەتی دەدەم", s2: "یارمەتی دەدەیت",  s3: "یارمەتی دەدات",   p1: "یارمەتی دەدەین",  p2: "یارمەتی دەدەن",    p3: "یارمەتی دەدەن" },
  { inf: "دان",         en: "to give",           irregular: true,
    s1: "دەدەم",        s2: "دەدەیت",           s3: "دەدات",           p1: "دەدەین",          p2: "دەدەن",            p3: "دەدەن" },
];
