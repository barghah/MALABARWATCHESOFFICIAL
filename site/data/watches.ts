// =============================================================================
// MALABARWATCHESOFFICIAL — Watch Catalog Data
// =============================================================================
// HOW TO ADD A NEW WATCH:
//   1. Drop the product image into /public/watches/ folder
//   2. Add an object to the watches array below
//   3. Fill in id, name, brand, category, price, and set image to "/watches/filename.jpg"
//   4. Save — the new watch appears on the site automatically
// =============================================================================

export type WatchCategory = "Chronograph" | "Classic" | "Sports" | "Limited Edition";

export interface Watch {
  id: string;
  name: string;
  brand: string;
  category: WatchCategory;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const watches: Watch[] = [
  {
    id: "TSS-001",
    name: "Seastar 1000 Chronograph",
    brand: "Tissot",
    category: "Sports",
    price: "Contact for Price",
    description: "Swiss-made diver's chronograph with sapphire crystal, 30-bar water resistance, and iconic blue bezel. Navy fabric strap.",
    image: "/watches/watch_seastar_blue.jpg",
    featured: true,
  },
  {
    id: "TSS-002",
    name: "Seastar 1000 — Blue Rubber",
    brand: "Tissot",
    category: "Sports",
    price: "Contact for Price",
    description: "Blue bezel diver with vibrant blue silicone strap. Luminous indices and hands. Anti-reflective sapphire glass. 45.5mm.",
    image: "/watches/watch_seastar_variant.jpg",
  },
  {
    id: "TPRC-001",
    name: "PRC 200 Chronograph",
    brand: "Tissot",
    category: "Sports",
    price: "Contact for Price",
    description: "Full black PVD coated steel chronograph with tachymeter bezel. Matte anthracite dial. 200m water resistance.",
    image: "/watches/watch_prc200_black.jpg",
  },
  {
    id: "TMGP-001",
    name: "T-Race MotoGP Chronograph",
    brand: "Tissot",
    category: "Limited Edition",
    price: "Contact for Price",
    description: "Official MotoGP™ Limited Edition chronograph with carbon fiber textured dial, red accents, and signature pushers.",
    image: "/watches/watch_trace_motogp.jpg",
    featured: false,
  },
  {
    id: "TTNR-001",
    name: "T-Race Nürburgring Chronograph",
    brand: "Tissot",
    category: "Limited Edition",
    price: "Contact for Price",
    description: "Carbon fibre textured dial with red chronograph hands. Octagonal case inspired by racing circuit architecture.",
    image: "/watches/watch_nurburgring_red.jpg",
  },
  {
    id: "TPR516-001",
    name: "PR 516 Chronograph",
    brand: "Tissot",
    category: "Chronograph",
    price: "Contact for Price",
    description: "Inspired by the legendary 1965 original. Dark navy dial with striking yellow accents and date window at 3 o'clock.",
    image: "/watches/watch_pr516_yellow.jpg",
  },
  {
    id: "TRC-001",
    name: "T-Race Cycling Chronograph",
    brand: "Tissot",
    category: "Chronograph",
    price: "Contact for Price",
    description: "Official Tour de France edition with emerald-green sunray dial and two-tone gold/steel bracelet. 45mm Swiss Made.",
    image: "/watches/watch_cycling_green.jpg",
  },
  {
    id: "TCXL-001",
    name: "Chrono XL Classic",
    brand: "Tissot",
    category: "Chronograph",
    price: "Contact for Price",
    description: "Clean, legible white dial with Arabic numerals and three-register chronograph layout. Polished steel bracelet.",
    image: "/watches/watch_chrono_xl_white.jpg",
  },
  {
    id: "TCD-001",
    name: "Classic Dream",
    brand: "Tissot",
    category: "Classic",
    price: "Contact for Price",
    description: "Timeless white dial with Roman numeral indices and a slim 42mm profile on a dark croco-pattern leather strap.",
    image: "/watches/watch_classic_dream.jpg",
  },
  {
    id: "TPR100-001",
    name: "PR 100 — Blue Sunray",
    brand: "Tissot",
    category: "Classic",
    price: "Contact for Price",
    description: "Deep blue sunray-brushed dial in a 40mm stainless steel case. Date display. Slim profile with sapphire crystal.",
    image: "/watches/watch_pr100_blue.jpg",
  },
  {
    id: "TPR100-002",
    name: "PR 100 — Black Dial",
    brand: "Tissot",
    category: "Classic",
    price: "Contact for Price",
    description: "Stealth-black sunray dial with luminous baton hands. Versatile sports-elegant design on brushed steel bracelet.",
    image: "/watches/watch_pr100_black.jpg",
  },
  {
    id: "TCDT-001",
    name: "Chemin des Tourelles Powermatic 80",
    brand: "Tissot",
    category: "Limited Edition",
    price: "Contact for Price",
    description: "Swiss automatic with 80-hour power reserve. Guilloché white dial, rose-gold bezel, indices and two-tone bracelet.",
    image: "/watches/watch_chemin_tourelles.jpg",
  },
  {
    id: "RDO-001",
    name: "Captain Cook Automatic — Two-Tone",
    brand: "Rado",
    category: "Sports",
    price: "Contact for Price",
    description: "Swiss automatic diver with high-tech black ceramic rotating bezel, two-tone gold and steel rice-bead bracelet, 300m water resistance, and rotating anchor emblem.",
    image: "/watches/watch_rado_captain_cook_twotone_studio.jpg",
  },
  {
    id: "RDO-002",
    name: "Captain Cook Automatic — Emerald Green",
    brand: "Rado",
    category: "Sports",
    price: "Contact for Price",
    description: "Iconic Swiss diver featuring high-tech emerald green ceramic bezel, matching sunray dial, 80-hour power reserve, and stainless steel beads-of-rice bracelet with original presentation box.",
    image: "/watches/watch_rado_captain_cook_green_studio.jpg",
  },
  {
    id: "OMG-001",
    name: "Seamaster Aqua Terra 150M GMT Chronograph",
    brand: "Omega",
    category: "Chronograph",
    price: "Contact for Price",
    description: "Master Co-Axial Chronometer chronograph with deep blue teak-concept dial, red GMT dual-timezone hand, date at 6 o'clock, and luxury navy alligator leather strap.",
    image: "/watches/watch_omega_aquaterra_gmt_studio.jpg",
  },
  {
    id: "OMG-002",
    name: "Seamaster Diver 300M Master Chronometer",
    brand: "Omega",
    category: "Sports",
    price: "Contact for Price",
    description: "Sun-brushed grey ceramic dial with laser-engraved waves, blue ceramic bezel with white enamel diving scale, Master Chronometer 8800 movement, and blue rubber strap in presentation box.",
    image: "/watches/watch_omega_seamaster_diver300_studio.jpg",
  },
  {
    id: "CHP-001",
    name: "Imperiale Chronograph Diamond Edition",
    brand: "Chopard",
    category: "Limited Edition",
    price: "Contact for Price",
    description: "High-jewelry Swiss chronograph with brilliant-cut diamond paved bezel and lugs, column pushers with lotus-shaped crowns, and silver-white dial on high-polish steel bracelet.",
    image: "/watches/watch_chopard_imperiale_diamond_studio.jpg",
  },
  {
    id: "FM-001",
    name: "Sector Dial 'Nero BB' Pulsometer",
    brand: "Furlan Marri",
    category: "Chronograph",
    price: "Contact for Price",
    description: "Vintage-inspired 'Tasti Tondi' chronograph featuring a decagonal pulsation scale, dual-tone sector dial, engraved Roman numerals, and handcrafted black leather strap.",
    image: "/watches/watch_furlan_marri_pulsometer_studio.jpg",
  },
  {
    id: "UG-001",
    name: "Vintage Ultra-Thin Gold Dress Watch",
    brand: "Universal Genève",
    category: "Classic",
    price: "Contact for Price",
    description: "Exquisite vintage Swiss dress timepiece with solid gold hand-engraved coin-edge bezel, champagne gold dial, and rich brown crocodile leather strap.",
    image: "/watches/watch_universal_geneve_gold_studio.jpg",
  },
  {
    id: "GS-001",
    name: "Vintage Grand Seiko Hi-Beat 36000",
    brand: "Grand Seiko",
    category: "Classic",
    price: "Contact for Price",
    description: "Legendary 36,000 vph ultra-high precision Japanese mechanical watch. Crisp Zaratsu-polished grammar-of-design steel case and silver sunburst dial on black leather strap.",
    image: "/watches/watch_grand_seiko_hibeat_studio.jpg",
  },
  {
    id: "RDO-003",
    name: "D-Star Automatic Silver Dial",
    brand: "Rado",
    category: "Classic",
    price: "Contact for Price",
    description: "Sculpted tonneau stainless steel case with minimalist silver dial, elongated hour batons, date window, and integrated solid link steel bracelet.",
    image: "/watches/watch_rado_dstar_silver_studio.jpg",
  },
  {
    id: "RDO-004",
    name: "Coupole Classic Automatic",
    brand: "Rado",
    category: "Classic",
    price: "Contact for Price",
    description: "Refined dress watch with radial guilloché outer ring, sunray silver center dial, blued steel hands, date window at 6 o'clock, and embossed black alligator leather strap.",
    image: "/watches/watch_rado_coupole_classic_studio.jpg",
  },
];

export const watchCount = watches.length;
