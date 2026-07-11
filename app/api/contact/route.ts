import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const PACKAGES = [
  "One-Day Escape",
  "Mid-Week Retreat",
  "Weekend Resort Premium",
];

function cleanString(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    const raw = (body ?? {}) as Record<string, unknown>;

    const name = cleanString(raw.name, 100);
    const phone = cleanString(raw.phone, 30);
    const pkg = cleanString(raw.package, 40);
    const location = cleanString(raw.location, 120);
    const period = cleanString(raw.period, 80);

    if (!name || !phone || !pkg || !location || !period) {
      return NextResponse.json(
        { error: "Toate câmpurile sunt obligatorii." },
        { status: 400 }
      );
    }

    if (!PACKAGES.includes(pkg)) {
      return NextResponse.json(
        { error: "Pachetul selectat nu este valid." },
        { status: 400 }
      );
    }

    if (!/\d{6,}/.test(phone.replace(/[\s()+.-]/g, ""))) {
      return NextResponse.json(
        { error: "Numărul de telefon nu pare valid." },
        { status: 400 }
      );
    }

    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !key || !sheetId || email.startsWith("your-")) {
      console.error(
        "Contact form: Google Sheets credentials are missing or placeholders — see SETUP.md"
      );
      return NextResponse.json(
        { error: "Formularul nu este configurat încă. Sună-ne direct." },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: email,
        private_key: key.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toLocaleString("ro-RO", { timeZone: "Europe/Bucharest" }),
            name,
            phone,
            pkg,
            location,
            period,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 }
    );
  }
}
