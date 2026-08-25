"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { watches, WatchCategory } from "@/data/watches";
import { buildWhatsAppLink } from "@/lib/config";

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
      delay: i * 0.07,
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
      viewport={{ once: true, margin: "-50px" }}
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
            borderRadius: "4px",
            overflow: "hidden",
            background: "var(--bg-3)",
          border: `1px solid ${hovered ? "rgba(201,165,92,0.45)" : "rgba(201,165,92,0.08)"}`,
          boxShadow: hovered
            ? "0 0 0 1px rgba(201,165,92,0.3), 0 20px 60px rgba(0,0,0,0.55), 0 0 40px rgba(201,165,92,0.06)"
            : "0 2px 16px rgba(0,0,0,0.3)",
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.35s cubic-bezier(0.19, 1, 0.22, 1)",
        }}>
          {/* ── Image area ── */}
          <div style={{
            position: "relative",
            aspectRatio: "4 / 3",
            background: "#f5f2ed",
            overflow: "hidden",
          }}>
            <Image
              src={watch.image}
              alt={`${watch.brand} ${watch.name}`}
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1100px) 33vw, 25vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                padding: "clamp(12px, 3%, 24px)",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.5s cubic-bezier(0.19,1,0.22,1)",
              }}
            />

            {/* Hover overlay with WhatsApp CTA */}
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
                    background: "linear-gradient(180deg, transparent 30%, rgba(8,6,4,0.75) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: "1rem",
                  }}
                >
                  <motion.div
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 8, opacity: 0 }}
                    transition={{ delay: 0.05 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#25d366",
                      color: "#fff",
                      padding: "0.52rem 1.2rem",
                      borderRadius: "2px",
                      fontSize: "0.68rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 16px rgba(37,211,102,0.4)",
                    }}
                  >
                    View Details
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Category label */}
            <div style={{
              position: "absolute", top: "10px", left: "10px",
              padding: "3px 8px",
              background: "rgba(8,6,4,0.8)",
              border: "1px solid rgba(201,165,92,0.3)",
              borderRadius: "2px",
              fontSize: "0.56rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold-2)",
              backdropFilter: "blur(8px)",
            }}>
              {watch.category}
            </div>

            {/* WhatsApp dot */}
            <div style={{
              position: "absolute", top: "10px", right: "10px",
              width: "26px", height: "26px", borderRadius: "50%",
              background: "#25d366",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 2px 8px rgba(37,211,102,0.35)",
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </div>

          {/* ── Card body ── */}
          <div style={{ padding: "1.1rem 1.2rem 1.3rem" }}>
            <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-3)", marginBottom: "4px" }}>
              {watch.brand}
            </p>
            <h3 className="t-title" style={{ fontSize: "1rem", marginBottom: "0.45rem", color: "var(--text-0)", lineHeight: 1.25 }}>
              {watch.name}
            </h3>
            <p style={{
              fontSize: "0.75rem", color: "var(--text-2)", lineHeight: 1.55,
              display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
              marginBottom: "1rem",
            }}>
              {watch.description}
            </p>

            {/* Bottom row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.85rem", borderTop: "1px solid rgba(201,165,92,0.08)" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", color: "var(--gold-1)", fontWeight: 700 }}>
                {watch.price}
              </span>
              <span style={{ fontSize: "0.58rem", color: "var(--text-3)", fontFamily: "monospace", letterSpacing: "0.06em" }}>
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
      <motion.p className="t-body" style={{ maxWidth: "440px", margin: "0 auto" }}
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
    <section id="collection" ref={sectionRef} style={{ position: "relative", background: "var(--bg-1)", paddingBlock: "clamp(4rem, 8vw, 8rem)" }}>
      {/* Subtle parallax bg pattern */}
      <motion.div style={{ y: bgY, position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(201,165,92,0.03) 0%, transparent 55%)",
        zIndex: 0 }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <SectionHeader />

        {/* ── Filter chips ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{
            display: "flex", gap: "0.5rem",
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
                  padding: "0.5rem 1.2rem",
                  borderRadius: "2px",
                  background: isActive ? "var(--gold-2)" : "transparent",
                  border: `1px solid ${isActive ? "var(--gold-2)" : "rgba(201,165,92,0.2)"}`,
                  color: isActive ? "var(--bg-0)" : "var(--text-2)",
                  fontFamily: "var(--sans)",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = "rgba(201,165,92,0.55)"; e.currentTarget.style.color = "var(--text-1)"; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = "rgba(201,165,92,0.2)"; e.currentTarget.style.color = "var(--text-2)"; }}}
              >
                {cat}
                {cat !== "All" && <span style={{ opacity: 0.55, marginLeft: "5px" }}>({watches.filter(w => w.category === cat).length})</span>}
              </button>
            );
          })}
        </motion.div>

        {/* ── Grid ── */}
        <motion.div layout style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
          gap: "clamp(0.85rem, 2vw, 1.5rem)",
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
