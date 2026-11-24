/*
 * Recenziile APUS de pe Google, copiate cuvânt cu cuvânt, în limba originală.
 *
 * Reguli:
 *  - Textul rămâne exact cum l-a scris clientul (fără corecturi).
 *  - FĂRĂ nume, telefoane sau alte date ale clienților în acest fișier.
 *  - Toate recenziile cu text intră aici, nefiltrate, în ordinea de pe Google.
 *  - La o recenzie nouă: adaug-o sus și actualizează `GOOGLE_TOTAL`
 *    (numărul de pe profil, inclusiv recenziile doar cu stele) și `GOOGLE_AVERAGE`.
 *
 * Ultima copiere de pe profil: 2026-11-24.
 */

export type Review = {
  stars: 1 | 2 | 3 | 4 | 5;
  lang: "ro" | "hu" | "en";
  text: string;
};

export const GOOGLE_TOTAL = 15;
export const GOOGLE_AVERAGE = 5.0;
export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=3316124102950389562";

export const reviews: Review[] = [
  {
    stars: 5,
    lang: "en",
    text: "We had an absolutely amazing experience! The service was excellent from start to finish, and everything was perfectly arranged. They are incredibly friendly, welcoming and genuinely lovely. They really go the extra mile to make sure you have a fantastic experience.\nThe Jacuzzi was fantastic, clean and ready to enjoy. It made for a perfect, relaxing and fun time!\nWe couldn't have asked for better service. Highly recommended to anyone looking for a great Jacuzzi experience. We will definitely be booking again!",
  },
  {
    stars: 5,
    lang: "hu",
    text: "Nagyon jó döntés volt, hogy tőlük béreltük a jacuzzit! 😊 Már az első pillanattól kezdve minden rendben volt, a hozzáállásuk, a kedvességük és a segítőkészségük is maximálisan pozitív élményt nyújtott. A jacuzzi tökéletes állapotban volt, tiszta, igényes és minden szempontból felülmúlta az elvárásainkat.\n\nNagyszerű kikapcsolódást biztosított, igazán különlegessé tette az együtt töltött időt, és lehetőséget adott arra, hogy egy kicsit kiszakadjunk a hétköznapokból. Minden gördülékenyen ment, a bérléstől kezdve egészen a használatig. Ritka az ilyen szolgáltatás, ahol nemcsak a termék minősége, hanem a hozzáállás és a korrektség is ennyire kifogástalan.\n\nJó szívvel és teljes meggyőződéssel ajánljuk őket mindenkinek! Ha valaki minőségi szolgáltatást, megbízhatóságot és valóban gondtalan kikapcsolódást keres, akkor náluk biztosan jó helyen jár. Nem kell sokat gondolkodni a választáson, bátran keressétek őket, mert garantáltan nem fogtok csalódni! Mi biztosan visszatérő ügyfelek leszünk, és a jövőben is csak tőlük fogunk jacuzzit bérelni.\n\nKöszönjük ezt a fantasztikus élményt! Számunkra egyértelműen ők jelentik a legjobb választást! Szívből ajánljuk mindenkinek! ❤️",
  },
  {
    stars: 5,
    lang: "en",
    text: "We first came across the APUS Wellness & Spa's Jakuzzi during the summer, on our holiday. We spent a splendid evening with great service. I would highly recommend it!!",
  },
  {
    stars: 5,
    lang: "hu",
    text: "Nagyon jó választás volt.A jacuzzi tisztán, szépen előkészítve érkezett, minden adott volt ahhoz, hogy gondtalanul élvezhessük a pihenést plusz ar értékben is nagyon megfelelő.\nKülön pozitívum, hogy házhoz szállítjak és be is üzemelik, így nekünk tényleg csak a kikapcsolódással kellett foglalkoznunk.\nBátran ajánlom mindenkinek, aki szeretne egy kis luxust és feltöltődést vinni a hétköznapokba!🥰",
  },
  {
    stars: 5,
    lang: "en",
    text: "We had a really good experience with the Jacuzzi rental! Would definitely recommend to other people!",
  },
  {
    stars: 5,
    lang: "hu",
    text: "Nagyooon jó élmény volt. Ajànlom mindenkinek, aki nem wellnessbe akar menni, hanem inkább a wellnesst akarja haza vinni 🩵  Az ára is nagyon rendben van. A tulajdonosok meg nagyon figyelmesek! Alig várom hogy újból csobbanjunk!",
  },
  {
    stars: 5,
    lang: "en",
    text: "Nice owner and good service.",
  },
  {
    stars: 5,
    lang: "ro",
    text: "O experienta super faina! Jacuzzi ul este foarte bine intretinut, totul a fost curat si pregatit cum trebuie. Ne am simtit excelent, iar faptul ca este mobil il face o idee foarte interesanta, mai ales daca vrei sa organizezi ceva diferit acasa sau cu prietenii. Recomand cu incredere, cu siguranta vom mai apela!\nPersonalul de nota 10 si foarte intelegatori cu nevoile noastre!!",
  },
  {
    stars: 5,
    lang: "ro",
    text: "Am fost foarte mulțumit de jacuzzi-ul închiriat! Totul a fost exact cum ne-am dorit, curat, bine întreținut și foarte plăcut. Recomand cu încredere și cu siguranță vom mai apela la serviciile voastre. Mulțumim! 😊",
  },
  {
    stars: 5,
    lang: "ro",
    text: "O experiență minunată! Jacuzzi-ul a fost foarte curat, relaxant, iar faptul că poate fi adus direct la locația dorită este un mare plus. Totul a fost foarte bine organizat și ne-am simțit super. Recomand cu drag!",
  },
  {
    stars: 5,
    lang: "ro",
    text: "Datorită celor de la Apus Welness, am avut o zi onomastică superbă. Mi-au adus jacuzzi-ul chiar acasă și m-am relaxat alături de cei dragi.",
  },
];
