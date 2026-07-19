import { ImageResponse } from "next/og";

// Route segment config
export const alt =
  "L'Étoile Bakeshop — Artisan Boulangerie. Baked with devotion since 1987.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A branded social card generated from the site's own palette. There was no
// suitable brand photo in /public, so this stands in for both og:image and
// twitter:image until a real photograph is dropped in.
export default function OpengraphImage() {
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
            "radial-gradient(ellipse at center, #171412 0%, #0c0a09 70%)",
          color: "#e7e5e4",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#f59e0b",
          }}
        >
          Artisan Boulangerie — Est. 1987
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 96,
            fontWeight: 600,
            lineHeight: 1.05,
            color: "#f5f5f4",
          }}
        >
          L&apos;Étoile Bakeshop
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "#a8a29e",
            maxWidth: 820,
          }}
        >
          Baked with devotion. Crafted for connoisseurs.
        </div>
      </div>
    ),
    { ...size }
  );
}
