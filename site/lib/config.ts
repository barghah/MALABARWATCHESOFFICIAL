// =============================================================================
// MALABARWATCHESOFFICIAL — Site Configuration
// =============================================================================
// Update WHATSAPP_NUMBER below with the owner's WhatsApp number
// Format: country code + number, no +, no spaces (e.g. "919876543210")
// =============================================================================

export const WHATSAPP_NUMBER = "918590606751";

export const SITE_CONFIG = {
  name: "MALABARWATCHESOFFICIAL",
  tagline: "Timeless Craftsmanship, Curated for You",
  description:
    "Kerala's premier destination for authentic Swiss timepieces. Genuine watches, direct inquiry via WhatsApp.",
  location: "Kerala, India",
  instagram: "https://www.instagram.com/malabarwatchesofficial",
  whatsappNumber: WHATSAPP_NUMBER,
};

/**
 * Generates a wa.me deep-link for a watch inquiry.
 * Opening in a new tab keeps the user on the site.
 */
export function buildWhatsAppLink(watch: {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
}): string {
  const watchUrl = `https://malabarwatchesofficial.vercel.app/watches/${watch.id}`;
  const message = `Hi! I'm interested in this watch:\n\n⌚ ${watch.brand} ${watch.name}\nCategory: ${watch.category}\nPrice: ${watch.price}\nReference: ${watch.id}\n\nWatch Link: ${watchUrl}\n\nCould you share more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Generic inquiry link (for footer / hero CTA).
 */
export function buildGenericWhatsAppLink(): string {
  const message = `Hi! I'd like to enquire about your watch collection at MALABARWATCHESOFFICIAL. Could you share what's currently available?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
