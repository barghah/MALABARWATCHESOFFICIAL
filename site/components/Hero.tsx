"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG, buildGenericWhatsAppLink } from "@/lib/config";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const WaIcon = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const springY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const watchY  = useTransform(springY, [0, 1], ["0%", "22%"]);
  const watchScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textY   = useTransform(springY, [0, 1], ["0%", "12%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const scrollDown = () => document.querySelector("#collection")?.scrollIntoView({ behavior: "smooth" });

  const stats = [
    { value: "1853", label: "Est. Heritage" },
    { value: "12+", label: "Curated Models" },
    { value: "100%", label: "Verified Authentic" },
  ];

  return (
    <section ref={ref} id="hero" style={{
      position: "relative",
      minHeight: "100svh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "transparent",
    }}>
      {/* ── Ambient background glows ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Left warm glow */}
        <div style={{
          position: "absolute", top: "15%", left: "-10%",
          width: "55vw", height: "70vh",
          background: "radial-gradient(ellipse at center, rgba(226,204,174,0.45) 0%, transparent 65%)",
          filter: "blur(30px)",
        }} />
        {/* Right deep glow */}
        <div style={{
          position: "absolute", top: "10%", right: "-5%",
          width: "50vw", height: "80vh",
          background: "radial-gradient(ellipse at center, rgba(184,144,99,0.25) 0%, transparent 70%)",
          filter: "blur(20px)",
        }} />
        {/* Fine luxury grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(74,44,22,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(74,44,22,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }} />
      </div>

      <motion.div style={{ opacity: fadeOut, position: "relative", zIndex: 2 }} className="container">
        <div style={{
          position: "relative", zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 5vw, 6rem)",
          alignItems: "center",
          minHeight: "100svh",
          paddingTop: "80px",
          paddingBottom: "4rem",
        }} className="hero-grid">

          {/* ── Left: Text content ── */}
          <motion.div style={{ y: textY }}>

            {/* Main headline — staggered line by line */}
            <div style={{ overflow: "hidden", marginBottom: "0.4rem" }}>
              <motion.h1 className="t-display"
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 1, ease: [0.19,1,0.22,1] }}
                style={{ color: "var(--accent-dark)" }}
              >
                Time is the
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "0.4rem" }}>
              <motion.h1 className="t-display gold-text"
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.55, duration: 1, ease: [0.19,1,0.22,1] }}
              >
                only luxury
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "2.5rem" }}>
              <motion.h1 className="t-display"
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ delay: 0.65, duration: 1, ease: [0.19,1,0.22,1] }}
                style={{ color: "var(--accent-dark)" }}
              >
                that matters.
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.hr className="rule" style={{ width: "200px", marginBottom: "2rem" }}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            />

            {/* Subtext */}
            <motion.p className="t-body" style={{ maxWidth: "440px", marginBottom: "2.5rem", color: "var(--accent-bronze)" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Kerala&apos;s curated destination for authentic Swiss timepieces — Tissot and beyond.
              Every watch is genuine, every deal is personal. Enquire directly on WhatsApp.
            </motion.p>

            {/* CTAs */}
            <motion.div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <button className="btn-gold" onClick={scrollDown} id="hero-browse-btn">
                Browse Collection <ArrowRight />
              </button>
              <a href={buildGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer"
                className="btn-ghost" id="hero-wa-btn"
              >
                <WaIcon size={15} /> WhatsApp Us
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(74,44,22,0.12)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.8 }}
            >
              {stats.map((s, i) => (
                <div key={i}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--accent-dark)", lineHeight: 1, fontWeight: 700 }}>{s.value}</p>
                  <p style={{ fontSize: "0.65rem", color: "var(--accent-bronze)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "5px", fontWeight: 600 }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Watch image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 1.1, ease: [0.19,1,0.22,1] }}
            style={{ y: watchY, scale: watchScale, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            {/* Decorative concentric rings */}
            {[1, 0.72, 0.5].map((scale, i) => (
              <motion.div key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 80 + i * 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  width: `${scale * 100}%`,
                  aspectRatio: "1",
                  borderRadius: "50%",
                  border: `1px solid rgba(184,144,99,${0.25 - i * 0.05})`,
                  borderStyle: i === 1 ? "dashed" : "solid",
                }}
              />
            ))}

            {/* Ambient glow */}
            <div style={{
              position: "absolute", width: "70%", aspectRatio: "1", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(226,204,174,0.6) 0%, rgba(184,144,99,0.2) 50%, transparent 70%)",
              filter: "blur(30px)",
            }} />

            {/* Watch in circular frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "relative",
                width: "min(500px, 44vw)",
                aspectRatio: "1",
                borderRadius: "50%",
                overflow: "hidden",
                background: "radial-gradient(circle at 40% 35%, #FAF2E6 0%, #E5D0B5 65%, #C8A77E 100%)",
                boxShadow: "0 35px 80px rgba(74,44,22,0.22), 0 0 0 1px rgba(184,144,99,0.35), 0 0 50px rgba(226,204,174,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div style={{ position: "relative", width: "90%", height: "90%" }}>
                <Image
                  src="/watches/watch_hero.png"
                  alt="Tissot Chemin des Tourelles Powermatic 80"
                  fill priority
                  sizes="(max-width: 860px) 80vw, 44vw"
                  style={{
                    objectFit: "contain",
                    filter: "drop-shadow(0 12px 28px rgba(74,44,22,0.22))"
                  }}
                />
              </div>
            </motion.div>

            {/* Floating info card */}
            <motion.div className="glass max-sm:scale-75 max-sm:origin-bottom-right"
              initial={{ opacity: 0, y: 20, x: 20 }} animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 180 }}
              style={{
                position: "absolute", bottom: "8%", right: "-6%",
                padding: "1.1rem 1.3rem", borderRadius: "14px", minWidth: "160px",
                background: "rgba(226, 204, 174, 0.85)",
                border: "1px solid rgba(74, 44, 22, 0.15)",
                boxShadow: "0 10px 30px rgba(74, 44, 22, 0.1)"
              }}
            >
              <p style={{ fontSize: "0.6rem", color: "var(--accent-dark)", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 800, marginBottom: "3px" }}>Featured</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "0.92rem", color: "var(--accent-dark)", fontWeight: 700, lineHeight: 1.2, marginBottom: "2px" }}>Chemin des Tourelles</p>
              <p style={{ fontSize: "0.68rem", color: "var(--accent-bronze)", fontWeight: 500 }}>Powermatic 80 · Swiss Made</p>
            </motion.div>

            {/* Top left badge */}
            <motion.div className="glass pulse-gold max-sm:scale-75 max-sm:origin-top-left"
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              style={{
                position: "absolute", top: "10%", left: "-4%",
                padding: "0.75rem 1rem", borderRadius: "14px", textAlign: "center",
                background: "rgba(226, 204, 174, 0.85)",
                border: "1px solid rgba(74, 44, 22, 0.15)",
                boxShadow: "0 8px 24px rgba(74, 44, 22, 0.08)"
              }}
            >
              <p style={{ fontSize: "0.6rem", color: "var(--accent-bronze)", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700 }}>Kerala</p>
              <p style={{ fontSize: "0.75rem", color: "var(--accent-dark)", fontWeight: 700, marginTop: "2px" }}>Based ✦</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button onClick={scrollDown}
        className="scroll-cue"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--accent-bronze)", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", zIndex: 5 }}
        aria-label="Scroll down"
      >
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Scroll</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      <style>{`
        .hero-grid { padding-inline: clamp(1.25rem, 5vw, 5rem); }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 90px !important;
            gap: 2.5rem !important;
          }
          .hero-grid > div:first-child > span,
          .hero-grid > div:first-child > div:first-child {
            justify-content: center !important;
          }
          .hero-grid > div:first-child > div:nth-child(5) {
            justify-content: center !important;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .scroll-cue {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
