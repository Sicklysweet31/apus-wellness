# APUS Wellness & Spa — Setup & Deploy

## 1. Backend formular (Google Sheets)

Formularul trimite lead-urile într-un Google Sheet prin `/api/contact`.
`.env.local` conține momentan **placeholdere** — formularul nu funcționează până nu le înlocuiești.

### Pași (o singură dată, ~10 minute)

1. **Creează un Service Account**
   - Mergi la [console.cloud.google.com](https://console.cloud.google.com) → creează un proiect (ex. `apus-wellness`).
   - `APIs & Services` → `Library` → activează **Google Sheets API**.
   - `IAM & Admin` → `Service Accounts` → `Create Service Account` (numele nu contează, fără roluri).
   - Deschide contul creat → tab `Keys` → `Add Key` → `Create new key` → **JSON** → se descarcă un fișier.

2. **Creează Sheet-ul de lead-uri**
   - Creează un Google Sheet nou. Primul tab trebuie să se numească `Sheet1`.
   - Pune pe rândul 1 antetul: `Data | Nume | Telefon | Pachet | Locație | Perioadă`.
   - Apasă `Share` și adaugă **adresa de email a service account-ului**
     (o găsești în JSON la `client_email`, arată ca `...@....iam.gserviceaccount.com`) cu drept de **Editor**.

3. **Completează `.env.local`** (local) și aceleași variabile în hosting la deploy:

   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=<client_email din JSON>
   GOOGLE_PRIVATE_KEY="<private_key din JSON, cu tot cu -----BEGIN/END PRIVATE KEY----->"
   GOOGLE_SHEET_ID=<id-ul din URL-ul sheet-ului, între /d/ și /edit>
   ```

   `GOOGLE_PRIVATE_KEY` se pune între ghilimele; secvențele `\n` din JSON rămân așa cum sunt.

4. **Test local**: `npm run dev`, completează formularul — rândul apare în Sheet.

## 2. Deploy (Vercel — recomandat pentru Next.js)

1. Urcă proiectul pe GitHub (repo privat e suficient).
2. [vercel.com](https://vercel.com) → `Add New Project` → importă repo-ul. Next.js e detectat automat.
3. La `Environment Variables` adaugă cele 3 variabile de mai sus.
4. `Deploy`. Primești un URL `*.vercel.app`.
5. **Domeniul apuswellness.ro**: în Vercel → `Settings` → `Domains` → adaugă `apuswellness.ro`,
   apoi la registrarul domeniului setează DNS-ul indicat de Vercel (A record `76.76.21.21`
   sau nameservers Vercel).

## 3. De actualizat înainte de lansare

- **Link-uri social media**: în `components/Contact.tsx` — înlocuiește handle-urile
  `instagram.com/apuswellness` și `facebook.com/apuswellness` cu profilurile reale.
  WhatsApp e legat de numărul lui Mark (`wa.me/40744244255`).
- **Testimoniale**: `components/Testimonials.tsx` — adaugă 3–5 testimoniale reale și
  poze în `public/gallery/`; secțiunea apare automat.
- **Garanția (opțional, Hormozi)**: linie sub cardurile de preț — necesită text confirmat.
