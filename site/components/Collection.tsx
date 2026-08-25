"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { watches, WatchCategory } from "@/data/watches";

const CATEGORIES: Array<"All" | WatchCategory> = ["All", "Chronograph", "Sports", "Classic", "Limited Edition"];

const WaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Card variants for Framer Motion ── */
const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.65,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  }),
};

function WatchCard({ watch, index }: { watch: typeof watches[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      layout
    >
      <Link
        href={`/watches/${watch.id}`}
        id={`card-${watch.id}`}
        aria-label={`View ${watch.brand} ${watch.name}`}
        style={{ display: "block", textDecoration: "none" }}
      >
        <div 
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            background: "rgba(226, 204, 174, 0.68)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${hovered ? "rgba(122,75,34,0.35)" : "rgba(122,75,34,0.12)"}`,
            boxShadow: hovered
              ? "0 16px 40px rgba(74, 44, 22, 0.14), 0 4px 12px rgba(74, 44, 22, 0.06)"
              : "0 8px 30px rgba(74, 44, 22, 0.07)",
            transform: hovered ? "translateY(-5px)" : "translateY(0)",
            transition: "all 0.35s cubic-bezier(0.19, 1, 0.22, 1)",
          }}>
          {/* ── Image area ── */}
          <div style={{
            position: "relative",
            aspectRatio: "4 / 3",
            background: "radial-gradient(circle at 50% 50%, #FFFFFF 0%, #FAF5EE 55%, #EDE1CE 100%)",
            overflow: "hidden",
            borderBottom: "1px solid rgba(122, 75, 34, 0.08)"
          }}>
            <Image
              src={watch.image}
              alt={`${watch.brand} ${watch.name}`}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                padding: "clamp(12px, 4%, 22px)",
                transform: hovered ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.19,1,0.22,1)",
              }}
            />

            {/* Hover overlay with CTA */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 35%, rgba(74,44,22,0.85) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "1.1rem",
                  }}
                >
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 6, opacity: 0 }}
                    transition={{ delay: 0.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--accent-dark)",
                      color: "var(--bg-light)",
                      padding: "0.55rem 1.3rem",
                      borderRadius: "6px",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                      border: "1px solid rgba(184,144,99,0.4)"
                    }}
                  >
                    View Details
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category label */}
            <div style={{
              position: "absolute", top: "12px", left: "12px",
              padding: "4px 10px",
              background: "rgba(74,44,22,0.85)",
              border: "1px solid rgba(184,144,99,0.35)",
              borderRadius: "4px",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#F2E6D4",
              backdropFilter: "blur(8px)",
            }}>
              {watch.category}
            </div>

            {/* WhatsApp dot */}
            <div style={{
              position: "absolute", top: "12px", right: "12px",
              width: "28px", height: "28px", borderRadius: "50%",
              background: "#25d366",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 3px 10px rgba(37,211,102,0.35)",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </div>

          {/* ── Card body ── */}
          <div style={{ padding: "1.2rem 1.3rem 1.4rem" }}>
            <p style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-bronze)", marginBottom: "4px" }}>
              {watch.brand}
            </p>
            <h3 className="t-title" style={{ fontSize: "1.05rem", marginBottom: "0.5rem", color: "var(--accent-dark)", lineHeight: 1.25 }}>
              {watch.name}
            </h3>
            <p style={{
              fontSize: "0.78rem", color: "var(--accent-bronze)", lineHeight: 1.6,
              display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
              marginBottom: "1.1rem",
            }}>
              {watch.description}
            </p>

            {/* Bottom row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.9rem", borderTop: "1px solid rgba(122,75,34,0.12)" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", color: "var(--accent-dark)", fontWeight: 700 }}>
                {watch.price}
              </span>
              <span style={{ fontSize: "0.62rem", color: "var(--text-3)", fontFamily: "monospace", letterSpacing: "0.06em", fontWeight: 600 }}>
                {watch.id}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Section header animation ── */
function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
    >
      <motion.p className="t-eyebrow" style={{ marginBottom: "1rem" }}
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        The Collection
      </motion.p>
      <motion.h2 className="t-headline"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
      >
        Curated Timepieces
      </motion.h2>
      <motion.hr className="rule"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
        style={{ maxWidth: "100px", margin: "1.25rem auto 1.25rem", transformOrigin: "center" }}
      />
      <motion.p className="t-body" style={{ maxWidth: "460px", margin: "0 auto", color: "var(--accent-bronze)" }}
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.22 }}
      >
        Click any watch to open a pre-filled WhatsApp message — enquire directly with the owner.
      </motion.p>
    </motion.div>
  );
}

export default function Collection() {
  const [active, setActive] = useState<"All" | WatchCategory>("All");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "start start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["6%", "0%"]);

  const filtered = active === "All" ? watches : watches.filter(w => w.category === active);

  return (
    <section id="collection" ref={sectionRef} style={{ position: "relative", background: "transparent", paddingBlock: "clamp(4rem, 8vw, 8rem)" }}>
      {/* Subtle parallax bg pattern */}
      <motion.div style={{ y: bgY, position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(226,204,174,0.3) 0%, transparent 55%)",
        zIndex: 0 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader />

        {/* ── Filter chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            display: "flex", gap: "0.6rem",
            flexWrap: "nowrap", overflowX: "auto",
            paddingBottom: "4px",
            marginBottom: "clamp(1.75rem, 4vw, 3rem)",
            justifyContent: "center",
            scrollbarWidth: "none",
          }}
          className="filter-chips"
        >
          {CATEGORIES.map(cat => {
            const isActive = active === cat;
            return (
              <button key={cat}
                id={`chip-${cat.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setActive(cat)}
                style={{
                  flexShrink: 0,
                  padding: "0.55rem 1.3rem",
                  borderRadius: "6px",
                  background: isActive ? "var(--accent-dark)" : "rgba(226, 204, 174, 0.4)",
                  border: `1px solid ${isActive ? "var(--accent-dark)" : "rgba(122, 75, 34, 0.2)"}`,
                  color: isActive ? "var(--bg-light)" : "var(--accent-dark)",
                  fontFamily: "var(--sans)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                  whiteSpace: "nowrap",
                  boxShadow: isActive ? "0 4px 14px rgba(74, 44, 22, 0.25)" : "none"
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(74, 44, 22, 0.45)";
                    e.currentTarget.style.background = "rgba(226, 204, 174, 0.7)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(122, 75, 34, 0.2)";
                    e.currentTarget.style.background = "rgba(226, 204, 174, 0.4)";
                  }
                }}
              >
                {cat}
                {cat !== "All" && <span style={{ opacity: 0.65, marginLeft: "6px" }}>({watches.filter(w => w.category === cat).length})</span>}
              </button>
            );
          })}
        </motion.div>

        {/* ── Grid ── */}
        <motion.div layout style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(285px, 100%), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.75rem)",
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((w, i) => (
              <WatchCard key={w.id} watch={w} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .filter-chips::-webkit-scrollbar { display: none; }
        @media (max-width: 600px) {
          .filter-chips { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
