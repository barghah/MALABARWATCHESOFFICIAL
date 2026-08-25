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
      borderTop: "1px solid rgba(201,165,92,0.1)",
      borderBottom: "1px solid rgba(201,165,92,0.1)",
      background: "var(--bg-0)",
      overflow: "hidden",
      padding: "0.9rem 0",
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
              fontSize: item === "✦" ? "0.55rem" : "0.68rem",
              fontWeight: item === "✦" ? 400 : 600,
              letterSpacing: item === "✦" ? "0" : "0.22em",
              textTransform: "uppercase",
              color: item === "✦" ? "var(--gold-2)" : "var(--text-2)",
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
