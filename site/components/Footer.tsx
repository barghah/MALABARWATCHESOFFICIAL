"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, buildGenericWhatsAppLink } from "@/lib/config";

const Crown = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size * 0.76} viewBox="0 0 46 35" fill="none">
    <path d="M3 31h40M3 31l5-19 10.5 9.5L23 5l4.5 16.5L38 12l5 19H3z"
      stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="23" cy="5" r="2.2" fill="currentColor" />
    <circle cx="8" cy="12" r="2.2" fill="currentColor" />
    <circle cx="38" cy="12" r="2.2" fill="currentColor" />
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "var(--bg-0)", borderTop: "1px solid rgba(201,165,92,0.08)" }}>
      {/* ── Big CTA block ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 5rem)",
          borderBottom: "1px solid rgba(201,165,92,0.08)",
          background: "linear-gradient(180deg, rgba(201,165,92,0.03) 0%, transparent 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative large number watermark */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--serif)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 900,
          color: "rgba(201,165,92,0.03)",
          userSelect: "none",
          letterSpacing: "-0.05em",
          lineHeight: 1,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}>
          1853
        </div>

        <p className="t-eyebrow" style={{ marginBottom: "1.5rem" }}>Get in Touch</p>
        <h2 style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 700,
          color: "var(--text-0)",
          lineHeight: 1.1,
          marginBottom: "1.25rem",
          maxWidth: "600px",
          margin: "0 auto 1.25rem",
        }}>
          Interested in a<br />
          <span className="gold-text">Timepiece?</span>
        </h2>
        <p className="t-body" style={{ maxWidth: "440px", margin: "0 auto 2.5rem" }}>
          Reach out on WhatsApp — we&apos;ll share availability, pricing,
          and can arrange a viewing in Kerala.
        </p>
        <a
          href={buildGenericWhatsAppLink()}
          target="_blank" rel="noopener noreferrer"
          id="footer-wa-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "1rem 2.5rem",
            background: "#25d366",
            color: "#fff",
            fontSize: "0.78rem",
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            borderRadius: "2px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 24px rgba(37,211,102,0.25)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(37,211,102,0.4)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(37,211,102,0.25)"; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* ── Footer bar ── */}
      <div className="container" style={{ paddingBlock: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "var(--gold-2)" }}><Crown size={18} /></span>
          <span style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-2)" }}>
            {SITE_CONFIG.name}
          </span>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.68rem", color: "var(--text-3)" }}>
          © {new Date().getFullYear()} {SITE_CONFIG.name}. Kerala, India.
        </p>

        {/* Social */}
        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>
          <a href={SITE_CONFIG.instagram} target="_blank" rel="noopener noreferrer" id="footer-ig" aria-label="Instagram"
            style={{ color: "var(--text-2)", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-1)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-2)")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href={buildGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" id="footer-wa-icon" aria-label="WhatsApp"
            style={{ color: "#25d366", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
