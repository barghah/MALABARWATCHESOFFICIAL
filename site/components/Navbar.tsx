"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildGenericWhatsAppLink } from "@/lib/config";
import Image from "next/image";

const WaIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const NAV_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 100,
          transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          background: scrolled ? "rgba(226, 204, 174, 0.94)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(74, 44, 22, 0.16)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 30px rgba(74, 44, 22, 0.08)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "64px" : "80px",
          transition: "height 0.35s ease",
        }}>
          {/* Logo & Brand Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "12px" }}
            aria-label="Home"
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}>
              <Image
                src="/logo.png"
                alt="Malabar Watches"
                width={56}
                height={32}
                style={{
                  objectFit: "contain",
                  filter: "drop-shadow(0 1px 3px rgba(74, 44, 22, 0.2))"
                }}
                priority
              />
            </div>
            <span style={{
              fontFamily: "var(--sans)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "var(--accent-dark)",
              transition: "color 0.35s ease"
            }}>
              MALABARWATCHESOFFICIAL
            </span>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desk-nav">
            {NAV_LINKS.map(link => (
              <button key={link.href} onClick={() => scroll(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--sans)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent-dark)",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-1)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--accent-dark)")}
              >
                {link.label}
              </button>
            ))}
            <a href={buildGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: "0.55rem 1.2rem", fontSize: "0.68rem" }}>
              <WaIcon size={14} /> Enquire
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="mob-menu-btn"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: "5px", padding: "6px" }}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "24px", height: "2px",
                background: "var(--accent-dark)",
                borderRadius: "2px",
                transition: "all 0.3s ease", transformOrigin: "center",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transform: menuOpen ? i === 0 ? "rotate(45deg) translateY(9.5px)" : i === 2 ? "rotate(-45deg) translateY(-9.5px)" : "none" : "none",
              }} />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(226, 204, 174, 0.98)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.2rem"
            }}
          >
            <Image src="/logo.png" alt="Malabar Watches" width={90} height={50} style={{ objectFit: "contain" }} priority />
            {NAV_LINKS.map((link, i) => (
              <motion.button key={link.href}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                onClick={() => scroll(link.href)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 700, color: "var(--accent-dark)", lineHeight: 1 }}
              >{link.label}</motion.button>
            ))}
            <motion.a initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              href={buildGenericWhatsAppLink()} target="_blank" rel="noopener noreferrer"
              className="btn-wa" onClick={() => setMenuOpen(false)} style={{ marginTop: "0.5rem" }}
            >
              <WaIcon size={17} /> Chat on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) { .desk-nav { display: none !important; } .mob-menu-btn { display: flex !important; } }
        @media (min-width: 769px) { .desk-nav { display: flex !important; } .mob-menu-btn { display: none !important; } }
      `}</style>
    </>
  );
}
