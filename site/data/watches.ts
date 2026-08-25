// =============================================================================
// MALABARWATCHESOFFICIAL — Watch Catalog Data
// =============================================================================
// HOW TO ADD A NEW WATCH:
//   1. Drop the product image (white background) into /public/watches/ folder
//   2. Copy one of the objects below and paste it at the end of the array
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
];

export const watchCount = watches.length;
