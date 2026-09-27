import { ImageResponse } from "next/og";

export const alt =
  "Kestrel Village new construction homes in Summerlin West, Las Vegas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0c0a09 0%, #1c1917 45%, #451a03 100%)",
          color: "#fafaf9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#f59e0b",
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0c0a09",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            KV
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, color: "#d6d3d1" }}>
            Kestrel Village
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          New Homes in Summerlin West
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "#d6d3d1",
            maxWidth: 880,
          }}
        >
          Eight builder communities · Las Vegas new construction · Dr. Jan Duffy
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#f59e0b",
            fontWeight: 600,
          }}
        >
          kestrelvillage.com · 702-222-1964
        </div>
      </div>
    ),
    { ...size }
  );
}
