import { ImageResponse } from "next/og";
import { person } from "@/content/resume";

export const alt = "K. Srinivas Karthik — Field Notes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#faf9f4",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              background: "#0b0b0c",
              color: "#faf9f4",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "3px solid #0b0b0c",
            }}
          >
            FIELD NOTES
          </div>
          <div
            style={{
              display: "flex",
              background: "#ffd400",
              color: "#0b0b0c",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              padding: "8px 16px",
              border: "3px solid #0b0b0c",
            }}
          >
            AI/ML + OPS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 900,
              color: "#0b0b0c",
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Builds the models. Runs the room.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <div
              style={{
                display: "flex",
                background: "#1e3ff0",
                color: "#faf9f4",
                fontSize: 26,
                fontWeight: 700,
                padding: "10px 20px",
                border: "3px solid #0b0b0c",
                boxShadow: "6px 6px 0 0 #0b0b0c",
              }}
            >
              BUILDER
            </div>
            <div
              style={{
                display: "flex",
                background: "#ff5a1f",
                color: "#0b0b0c",
                fontSize: 26,
                fontWeight: 700,
                padding: "10px 20px",
                border: "3px solid #0b0b0c",
                boxShadow: "6px 6px 0 0 #0b0b0c",
              }}
            >
              OPERATOR
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#33312c",
            fontWeight: 700,
          }}
        >
          {person.name} · {person.githubLabel}
        </div>
      </div>
    ),
    { ...size },
  );
}
