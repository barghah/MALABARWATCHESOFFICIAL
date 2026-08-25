"use client";

/** Continuous scrolling text belt between sections */
export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const items = [
    "Swiss Made",
    "✦",
    "Tissot",
    "✦",
    "Kerala",
    "✦",
    "Authentic",
    "✦",
    "Malabar",
    "✦",
    "1853",
    "✦",
    "Luxury Timepieces",
    "✦",
  ];

  const repeated = [...items, ...items]; // duplicate for seamless loop

  return (
    <div style={{
      borderTop: "1px solid rgba(74, 44, 22, 0.12)",
      borderBottom: "1px solid rgba(74, 44, 22, 0.12)",
      background: "rgba(226, 204, 174, 0.3)",
      backdropFilter: "blur(8px)",
      overflow: "hidden",
      padding: "0.95rem 0",
      userSelect: "none",
    }}>
      <div
        className="marquee-track"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: "30s",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0 1.8rem",
              fontFamily: item === "✦" ? "serif" : "var(--sans)",
              fontSize: item === "✦" ? "0.6rem" : "0.7rem",
              fontWeight: item === "✦" ? 400 : 700,
              letterSpacing: item === "✦" ? "0" : "0.22em",
              textTransform: "uppercase",
              color: item === "✦" ? "var(--accent-bronze)" : "var(--accent-dark)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
