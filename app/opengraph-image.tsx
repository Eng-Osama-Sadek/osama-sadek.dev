import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0A0E27 0%, #1E3A8A 60%, #06B6D4 100%)",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, marginBottom: 16 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 32, marginTop: 24, opacity: 0.85, maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}