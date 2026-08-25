"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/></svg>,
    title: "Swiss Precision",
    body: "Every piece in our collection is an authentic Swiss-made watch, backed by original documentation and heritage.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    title: "Verified Authentic",
    body: "All watches are personally sourced and verified. No grey market, no fakes — what you see is what arrives.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Direct WhatsApp Deals",
    body: "No middlemen, no checkout forms. One tap opens a conversation. Agree on price, shipping, and pickup directly.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    title: "Kerala Based",
    body: "Rooted in Malabar, Kerala. Local viewing available in-person, and we ship across India.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="about" ref={ref} style={{ background: "transparent", paddingBlock: "clamp(5rem, 10vw, 10rem)", position: "relative", overflow: "hidden" }}>
      {/* Ambient top glow */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(74,44,22,0.25), transparent)", pointerEvents: "none" }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(3rem, 7vw, 9rem)", alignItems: "start" }} className="about-grid">

          {/* ── Left: Brand narrative ── */}
          <div>
            <motion.p className="t-eyebrow" style={{ marginBottom: "1.5rem" }}
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              Our Story
            </motion.p>

            <div style={{ overflow: "hidden", marginBottom: "0.3rem" }}>
              <motion.h2
                initial={{ y: "105%" }} whileInView={{ y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.19,1,0.22,1] }}
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.1, color: "var(--accent-dark)" }}
              >
                Born in Malabar.
              </motion.h2>
            </div>
            <div style={{ overflow: "hidden", marginBottom: "2rem" }}>
              <motion.h2
                initial={{ y: "105%" }} whileInView={{ y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.07, ease: [0.19,1,0.22,1] }}
                className="gold-text"
                style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, lineHeight: 1.1 }}
              >
                Passionate about time.
              </motion.h2>
            </div>

            <motion.hr className="rule" style={{ marginBottom: "2rem" }}
              initial={{ scaleX: 0, transformOrigin: "left" }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p className="t-body" style={{ marginBottom: "1.2rem", color: "var(--accent-bronze)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              MALABARWATCHESOFFICIAL began as a passion — a deep love for the precision, heritage,
              and artistry that Swiss watchmakers have refined over centuries. Based on Kerala&apos;s
              Malabar coast, we curate timepieces that speak to the discerning collector.
            </motion.p>
            <motion.p className="t-body" style={{ color: "var(--accent-bronze)" }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.22 }}
            >
              We believe the finest way to acquire a luxury timepiece is through trust —
              a real conversation, not a faceless checkout form. That&apos;s why every purchase
              starts with a WhatsApp message.
            </motion.p>
          </div>

          {/* ── Right: Feature cards with animated vertical rule ── */}
          <div style={{ position: "relative", paddingLeft: "2rem" }}>
            {/* Animated vertical line */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "1px", background: "rgba(74,44,22,0.12)", overflow: "hidden" }}>
              <motion.div style={{ width: "100%", height: lineH, background: "linear-gradient(180deg, transparent, var(--accent-dark) 50%, transparent)", transformOrigin: "top" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {features.map((feat, i) => (
                <motion.div key={feat.title}
                  initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.19,1,0.22,1] }}
                >
                  <div style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                    <div style={{
                      color: "var(--accent-dark)",
                      background: "rgba(226, 204, 174, 0.75)",
                      border: "1px solid rgba(122,75,34,0.18)",
                      padding: "10px",
                      borderRadius: "10px",
                      flexShrink: 0,
                      marginTop: "2px",
                      boxShadow: "0 4px 14px rgba(74,44,22,0.06)"
                    }}>{feat.icon}</div>
                    <div>
                      <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--accent-dark)", marginBottom: "0.4rem", fontWeight: 700 }}>{feat.title}</h3>
                      <p style={{ fontSize: "0.84rem", color: "var(--accent-bronze)", lineHeight: 1.65 }}>{feat.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:last-child { padding-left: 0 !important; }
          .about-grid > div:last-child > div:first-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
