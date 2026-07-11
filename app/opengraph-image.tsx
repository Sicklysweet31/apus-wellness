import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "APUS Wellness & Spa — Apusul, adus la tine.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(168deg, #080f0b 0%, #1C2120 40%, #2D4A3E 72%, #120e07 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 14,
            color: "#C4873A",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          APUS Wellness & Spa
        </div>
        <div
          style={{
            fontSize: 92,
            fontStyle: "italic",
            color: "#F4EDE3",
            textAlign: "center",
          }}
        >
          Apusul, adus la tine.
        </div>
        <div
          style={{
            fontSize: 30,
            color: "rgba(244, 237, 227, 0.65)",
            marginTop: 40,
          }}
        >
          Jacuzzi premium · 38°C în 2–3 ore · Munții Apuseni
        </div>
      </div>
    ),
    size
  );
}
