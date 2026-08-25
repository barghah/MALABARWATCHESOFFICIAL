import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { watches } from "@/data/watches";
import { SITE_CONFIG } from "@/lib/config";

// Generate static pages for all watches
export function generateStaticParams() {
  return watches.map((watch) => ({
    id: watch.id,
  }));
}

// Generate unique metadata (OpenGraph link previews) for each watch
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const watch = watches.find((w) => w.id === resolvedParams.id);
  if (!watch) return {};

  return {
    title: `${watch.name} | ${SITE_CONFIG.name}`,
    description: watch.description,
    openGraph: {
      title: watch.name,
      description: watch.description,
      images: [watch.image],
    },
    twitter: {
      card: "summary_large_image",
      title: watch.name,
      description: watch.description,
      images: [watch.image],
    },
  };
}

export default async function WatchPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const watch = watches.find((w) => w.id === resolvedParams.id);
  
  if (!watch) {
    notFound();
  }

  // A specific WhatsApp link for this watch, including the link to the page
  const text = `Hello Malabar Watches! I am interested in the ${watch.name} (${watch.id}). Here is the link: https://malabarwatchesofficial.vercel.app/watches/${watch.id}`;
  const encodedText = encodeURIComponent(text);
  const waLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedText}`;

  return (
    <main style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px", background: "var(--bg-1)" }} className="container">
      <div style={{ marginBottom: "2rem" }}>
        <Link href="/#collection" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--text-2)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(180deg)" }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Back to Collection
        </Link>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
        
        {/* Left: Huge Watch Image */}
        <div style={{ position: "relative", aspectRatio: "4/5", background: "transparent", borderRadius: "8px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Image
            src={watch.image}
            alt={watch.name}
            fill
            style={{ objectFit: "contain", padding: "10%" }}
            priority
          />
        </div>

        {/* Right: Watch Details */}
        <div>
          <p className="t-eyebrow" style={{ color: "var(--gold-2)", marginBottom: "1rem" }}>{watch.brand} &middot; {watch.category}</p>
          <h1 className="t-display" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: "1rem", color: "var(--text-0)" }}>
            {watch.name}
          </h1>
          <p className="t-body" style={{ fontSize: "1.2rem", color: "var(--text-1)", marginBottom: "2rem" }}>
            {watch.price}
          </p>
          <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "2rem" }} />
          <p className="t-body" style={{ color: "var(--text-2)", marginBottom: "3rem", lineHeight: 1.8 }}>
            {watch.description}
          </p>

          <a
            href={waLink}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.8rem",
              padding: "1.2rem 3rem", background: "#25d366", color: "#fff",
              fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase",
              borderRadius: "4px", textDecoration: "none",
              boxShadow: "0 8px 32px rgba(37,211,102,0.25)",
              transition: "transform 0.2s"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
