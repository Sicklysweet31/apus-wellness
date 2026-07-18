# APUS Wellness & Spa — Setup & Deploy

## 1. Backend formular (Web3Forms)

Formularul trimite lead-urile pe email prin `/api/contact` → Web3Forms.
Cheia stă doar pe server (nu apare în codul din browser), iar validarea și
protecția anti-spam (honeypot) rămân active.

### Pași (o singură dată, ~2 minute)

1. **Obține cheia** (dacă nu o ai deja)
   - Mergi la [web3forms.com](https://web3forms.com), introdu adresa de email
     unde vrei să primești rezervările, și copiază **Access Key**-ul.

2. **Pune cheia în `.env.local`** (local):

   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=<access key-ul tău>
   ```

   Înlocuiește `your-web3forms-access-key-here` cu cheia reală. Salvează.
   (Cheia Web3Forms e publică prin design — se folosește direct în browser,
   permite doar trimiterea către formularul tău, iar spam-ul e filtrat de
   honeypot + protecția Web3Forms.)

3. **Repornește serverul** (`Ctrl+C` apoi `npm run dev`) — variabilele din
   `.env.local` se citesc la pornire.

4. **Test**: completează formularul de pe site — primești un email cu
   Nume · Telefon · Pachet · Locație · Perioadă.

> La deploy pe Vercel, adaugă aceeași variabilă `WEB3FORMS_ACCESS_KEY` în
> **Settings → Environment Variables**, apoi redeploy.

## 2. Deploy (Vercel — recomandat pentru Next.js)

1. Urcă proiectul pe GitHub (repo privat e suficient).
2. [vercel.com](https://vercel.com) → `Add New Project` → importă repo-ul. Next.js e detectat automat.
3. La `Environment Variables` adaugă `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` cu cheia ta.
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
