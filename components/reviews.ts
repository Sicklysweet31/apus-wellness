/*
 * Recenziile APUS de pe Google, copiate cuvânt cu cuvânt, în limba originală.
 *
 * Reguli:
 *  - Textul rămâne exact cum l-a scris clientul (fără corecturi).
 *  - Numele autorului exact cum apare public pe Google (Mark, 2026-11-25).
 *    Fără telefoane sau alte date. Dacă un autor cere, îi scoatem numele imediat.
 *  - Toate recenziile cu text intră aici, nefiltrate, în ordinea de pe Google.
 *  - La o recenzie nouă: adaug-o sus și actualizează `GOOGLE_TOTAL`
 *    (numărul de pe profil, inclusiv recenziile doar cu stele) și `GOOGLE_AVERAGE`.
 *
 * Ultima copiere de pe profil: 2026-11-24.
 */

export type Review = {
  stars: 1 | 2 | 3 | 4 | 5;
  /** codul limbii originale: "ro", "hu", "en"… */
  lang: string;
  text: string;
  /** numele public de pe recenzia Google */
  name?: string;
  avatar?: string;
};

export const GOOGLE_TOTAL = 15;
export const GOOGLE_AVERAGE = 5.0;
export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=3316124102950389562";

export const reviews: Review[] = [
  {
    name: "Jasper Sam",
    stars: 5,
    lang: "en",
    text: "We had an absolutely amazing experience! The service was excellent from start to finish, and everything was perfectly arranged. They are incredibly friendly, welcoming and genuinely lovely. They really go the extra mile to make sure you have a fantastic experience.\nThe Jacuzzi was fantastic, clean and ready to enjoy. It made for a perfect, relaxing and fun time!\nWe couldn't have asked for better service. Highly recommended to anyone looking for a great Jacuzzi experience. We will definitely be booking again!",
  },
  {
    name: "Rita Lovasz",
    stars: 5,
    lang: "hu",
    text: "Nagyon jó döntés volt, hogy tőlük béreltük a jacuzzit! 😊 Már az első pillanattól kezdve minden rendben volt, a hozzáállásuk, a kedvességük és a segítőkészségük is maximálisan pozitív élményt nyújtott. A jacuzzi tökéletes állapotban volt, tiszta, igényes és minden szempontból felülmúlta az elvárásainkat.\n\nNagyszerű kikapcsolódást biztosított, igazán különlegessé tette az együtt töltött időt, és lehetőséget adott arra, hogy egy kicsit kiszakadjunk a hétköznapokból. Minden gördülékenyen ment, a bérléstől kezdve egészen a használatig. Ritka az ilyen szolgáltatás, ahol nemcsak a termék minősége, hanem a hozzáállás és a korrektség is ennyire kifogástalan.\n\nJó szívvel és teljes meggyőződéssel ajánljuk őket mindenkinek! Ha valaki minőségi szolgáltatást, megbízhatóságot és valóban gondtalan kikapcsolódást keres, akkor náluk biztosan jó helyen jár. Nem kell sokat gondolkodni a választáson, bátran keressétek őket, mert garantáltan nem fogtok csalódni! Mi biztosan visszatérő ügyfelek leszünk, és a jövőben is csak tőlük fogunk jacuzzit bérelni.\n\nKöszönjük ezt a fantasztikus élményt! Számunkra egyértelműen ők jelentik a legjobb választást! Szívből ajánljuk mindenkinek! ❤️",
  },
  {
    name: "Adrienn Groza",
    stars: 5,
    lang: "en",
    text: "We first came across the APUS Wellness & Spa's Jakuzzi during the summer, on our holiday. We spent a splendid evening with great service. I would highly recommend it!!",
  },
  {
    name: "Eszter Szabo",
    stars: 5,
    lang: "hu",
    text: "Nagyon jó választás volt.A jacuzzi tisztán, szépen előkészítve érkezett, minden adott volt ahhoz, hogy gondtalanul élvezhessük a pihenést plusz ar értékben is nagyon megfelelő.\nKülön pozitívum, hogy házhoz szállítjak és be is üzemelik, így nekünk tényleg csak a kikapcsolódással kellett foglalkoznunk.\nBátran ajánlom mindenkinek, aki szeretne egy kis luxust és feltöltődést vinni a hétköznapokba!🥰",
  },
  {
    name: "Iris Sam",
    stars: 5,
    lang: "en",
    text: "We had a really good experience with the Jacuzzi rental! Would definitely recommend to other people!",
  },
  {
    name: "bernadett balogh eross",
    stars: 5,
    lang: "hu",
    text: "Nagyooon jó élmény volt. Ajànlom mindenkinek, aki nem wellnessbe akar menni, hanem inkább a wellnesst akarja haza vinni 🩵  Az ára is nagyon rendben van. A tulajdonosok meg nagyon figyelmesek! Alig várom hogy újból csobbanjunk!",
  },
  {
    name: "Lennart Sam",
    stars: 5,
    lang: "en",
    text: "Nice owner and good service.",
  },
  {
    name: "Bogdan Vieriu",
    stars: 5,
    lang: "ro",
    text: "O experienta super faina! Jacuzzi ul este foarte bine intretinut, totul a fost curat si pregatit cum trebuie. Ne am simtit excelent, iar faptul ca este mobil il face o idee foarte interesanta, mai ales daca vrei sa organizezi ceva diferit acasa sau cu prietenii. Recomand cu incredere, cu siguranta vom mai apela!\nPersonalul de nota 10 si foarte intelegatori cu nevoile noastre!!",
  },
  {
    name: "George Moldovan",
    stars: 5,
    lang: "ro",
    text: "Am fost foarte mulțumit de jacuzzi-ul închiriat! Totul a fost exact cum ne-am dorit, curat, bine întreținut și foarte plăcut. Recomand cu încredere și cu siguranță vom mai apela la serviciile voastre. Mulțumim! 😊",
  },
  {
    name: "Cristiana Alissa Cocan",
    stars: 5,
    lang: "ro",
    text: "O experiență minunată! Jacuzzi-ul a fost foarte curat, relaxant, iar faptul că poate fi adus direct la locația dorită este un mare plus. Totul a fost foarte bine organizat și ne-am simțit super. Recomand cu drag!",
  },
  {
    name: "Petrica Robert Grigoriu",
    stars: 5,
    lang: "ro",
    text: "Datorită celor de la Apus Welness, am avut o zi onomastică superbă. Mi-au adus jacuzzi-ul chiar acasă și m-am relaxat alături de cei dragi.",
  },
];

/*
 * Citatele de pe primul ecran: din FIECARE recenzie de 5 stele cu text, câte o
 * propoziție întreagă, cuvânt cu cuvânt, în limba originală, cu numele de pe Google.
 *  - Dacă recenzia conține una din propozițiile alese mai jos, apare aceea.
 *  - Altfel se ia singură prima propoziție care încape pe ecran (25–110 caractere),
 *    așa că o recenzie nouă intră în rotație fără altă muncă.
 * Ordinea: întâi cele în română, apoi maghiară, apoi engleză (vizitatorul vede primele
 * 2–3 citate; restul se rotesc dacă rămâne).
 */
const PREFERRED_SENTENCES = [
  "Mi-au adus jacuzzi-ul chiar acasă și m-am relaxat alături de cei dragi.",
  "Totul a fost exact cum ne-am dorit, curat, bine întreținut și foarte plăcut.",
  "Totul a fost foarte bine organizat și ne-am simțit super.",
  "Personalul de nota 10 si foarte intelegatori cu nevoile noastre!!",
  "Ajànlom mindenkinek, aki nem wellnessbe akar menni, hanem inkább a wellnesst akarja haza vinni",
  "Bátran ajánlom mindenkinek, aki szeretne egy kis luxust és feltöltődést vinni a hétköznapokba!",
  "We spent a splendid evening with great service.",
  "The Jacuzzi was fantastic, clean and ready to enjoy.",
];

const LANG_ORDER = ["ro", "hu", "en"];

function heroSentence(text: string): string | null {
  const preferred = PREFERRED_SENTENCES.find((s) => text.includes(s));
  if (preferred) return preferred;
  const sentences = text.split(/(?<=[.!?])\s+/).map((s) => s.trim());
  return sentences.find((s) => s.length >= 25 && s.length <= 110) ?? null;
}

const rank = (lang: string) => {
  const i = LANG_ORDER.indexOf(lang);
  return i === -1 ? LANG_ORDER.length : i;
};

export const heroQuotes: { text: string; name: string }[] = reviews
  .filter((r) => r.stars === 5)
  .flatMap((r) => {
    const text = heroSentence(r.text);
    return text ? [{ text, name: r.name ?? "Client APUS", lang: r.lang }] : [];
  })
  // by language, then the chosen sentences in the order above, then the rest as on Google
  .sort((a, b) => rank(a.lang) - rank(b.lang) || pick(a.text) - pick(b.text))
  .map(({ text, name }) => ({ text, name }));

function pick(text: string) {
  const i = PREFERRED_SENTENCES.indexOf(text);
  return i === -1 ? PREFERRED_SENTENCES.length : i;
}
