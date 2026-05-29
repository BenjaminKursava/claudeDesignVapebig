// brand.jsx — icons, logo mark, sample data shared across pages

const Icon = ({ name, size = 18, stroke = 1.7 }) => {
  const c = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "search": return <svg {...c}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "user":   return <svg {...c}><circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>;
    case "cart":   return <svg {...c}><path d="M3 4h3l2.5 12.5a2 2 0 0 0 2 1.5h7a2 2 0 0 0 2-1.5L22 8H7"/><circle cx="10" cy="21" r="1.2"/><circle cx="19" cy="21" r="1.2"/></svg>;
    case "bag":    return <svg {...c}><path d="M5 8h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>;
    case "heart":  return <svg {...c}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></svg>;
    case "truck":  return <svg {...c}><path d="M2 7h11v10H2zM13 10h5l3 3v4h-8"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg>;
    case "shield": return <svg {...c}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "chat":   return <svg {...c}><path d="M21 12a8 8 0 1 1-3-6.2L21 5l-.8 3A8 8 0 0 1 21 12Z"/></svg>;
    case "star":   return <svg {...c} fill="currentColor" stroke="none"><path d="m12 2 2.9 6.3 6.8.7-5.1 4.7 1.5 6.7L12 17l-6.1 3.4 1.5-6.7L2.3 9l6.8-.7Z"/></svg>;
    case "check":  return <svg {...c}><path d="m5 12 4 4L19 6"/></svg>;
    case "chev":   return <svg {...c}><path d="m9 6 6 6-6 6"/></svg>;
    case "chev-l": return <svg {...c}><path d="m15 6-6 6 6 6"/></svg>;
    case "chev-d": return <svg {...c}><path d="m6 9 6 6 6-6"/></svg>;
    case "chev-u": return <svg {...c}><path d="m6 15 6-6 6 6"/></svg>;
    case "filter": return <svg {...c}><path d="M3 5h18M6 12h12M10 19h4"/></svg>;
    case "tag":    return <svg {...c}><path d="M12 2H4v8l10 10 8-8L12 2Z"/><circle cx="7.5" cy="6.5" r="1.2" fill="currentColor"/></svg>;
    case "x":      return <svg {...c}><path d="M6 6l12 12M18 6 6 18"/></svg>;
    case "menu":   return <svg {...c}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "bolt":   return <svg {...c}><path d="M13 2 4 14h7l-1 8 9-12h-7Z"/></svg>;
    case "minus":  return <svg {...c}><path d="M5 12h14"/></svg>;
    case "plus":   return <svg {...c}><path d="M12 5v14M5 12h14"/></svg>;
    case "tune":   return <svg {...c}><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="15" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/></svg>;
    case "gift":   return <svg {...c}><path d="M3 10h18v4H3zM12 22V10M7 10a3 3 0 1 1 3-3 3 3 0 0 1 0 3 3 3 0 0 1 3-3 3 3 0 1 1 2 3M5 14h14v8H5z"/></svg>;
    case "package": return <svg {...c}><path d="M3 7l9-4 9 4v10l-9 4-9-4Z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>;
    case "cloud":  return <svg {...c}><path d="M7 18a4 4 0 0 1 0-8 6 6 0 0 1 11 1 4 4 0 0 1-1 8H7"/></svg>;
    case "card":   return <svg {...c}><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/></svg>;
    case "phone":  return <svg {...c}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case "mail":   return <svg {...c}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>;
    case "pin":    return <svg {...c}><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z"/><circle cx="12" cy="9" r="3"/></svg>;
    case "clock":  return <svg {...c}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case "trash":  return <svg {...c}><path d="M4 7h16M9 7V4h6v3M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></svg>;
    case "edit":   return <svg {...c}><path d="M4 20h4L20 8l-4-4L4 16Z"/><path d="m14 6 4 4"/></svg>;
    case "arrow-r": return <svg {...c}><path d="M5 12h14m-6-6 6 6-6 6"/></svg>;
    case "arrow-l": return <svg {...c}><path d="M19 12H5m6-6-6 6 6 6"/></svg>;
    case "arrow-tr": return <svg {...c}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case "facebook": return <svg {...c}><path d="M14 22v-8h3l1-4h-4V7.5C14 6.7 14.5 6 15.5 6H18V2h-3a4 4 0 0 0-4 4v4H8v4h3v8z"/></svg>;
    case "instagram": return <svg {...c}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>;
    case "tiktok": return <svg {...c}><path d="M14 4v9a4 4 0 1 1-3-3.9V13a1.5 1.5 0 1 0 1.5 1.5V4Z"/><path d="M14 4a4 4 0 0 0 4 4"/></svg>;
    case "twitter": return <svg {...c}><path d="m4 4 7 9-7 7h3l5.5-5.5L17 20h3L13 11l6.5-7H17l-5 5L8 4Z" fill="currentColor" stroke="none"/></svg>;
    case "lock":   return <svg {...c}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 1 1 8 0v4"/></svg>;
    case "info":   return <svg {...c}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M11 12h1v5h1"/></svg>;
    case "spark":  return <svg {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>;
    case "puff":   return <svg {...c}><path d="M5 17a4 4 0 0 1 0-8 5 5 0 0 1 9-2 4 4 0 0 1 5 5 4 4 0 0 1-3 4Z"/><path d="M9 21c1-2 5-2 6 0"/></svg>;
    case "battery": return <svg {...c}><rect x="3" y="8" width="16" height="8" rx="2"/><path d="M21 11v2"/><path d="M6 11v2M9 11v2M12 11v2"/></svg>;
    case "leaf":   return <svg {...c}><path d="M5 20s0-9 9-14c4 0 5 1 5 5-5 9-14 9-14 9Z"/><path d="M5 20c3-4 6-7 10-9"/></svg>;
    case "fire":   return <svg {...c}><path d="M12 3s5 5 5 9a5 5 0 1 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 1-5 1-8Z"/></svg>;
    case "trophy": return <svg {...c}><path d="M8 4h8v6a4 4 0 1 1-8 0z"/><path d="M16 6h3v2a3 3 0 0 1-3 3M8 6H5v2a3 3 0 0 0 3 3"/><path d="M9 21h6M12 14v7"/></svg>;
    case "play":   return <svg {...c} fill="currentColor" stroke="none"><path d="M8 5v14l11-7z"/></svg>;
    case "headset":return <svg {...c}><path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-1v-7h4M4 13v5a3 3 0 0 0 3 3h1v-7H4"/></svg>;
    case "rotate": return <svg {...c}><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v5h-5M6 21v-5h5"/></svg>;
    case "external": return <svg {...c}><path d="M14 4h6v6M10 14 20 4M14 12v8H4V8h8"/></svg>;
    default: return null;
  }
};

// Logo mark — flat squircle, stylized V → vapor cloud.
// More distinctive than the prior monogram; reads as a retail icon.
const LogoMark = ({ size = 36, dark = true, mono = false }) => {
  const bg = mono ? 'transparent' : (dark ? '#ff5e1f' : '#0e1117');
  const fg = mono ? 'currentColor' : '#ffffff';
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Vape Big">
      <rect x="2" y="2" width="60" height="60" rx="16" fill={bg} stroke={mono ? 'currentColor' : 'none'} strokeWidth={mono ? 3 : 0}/>
      {/* V mark */}
      <path d="M16 18 L26 42 L36 18" stroke={fg} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Vapor cloud puff */}
      <path d="M40 30 C40 26 44 23 48 24 C49 21 53 21 54 24 C58 24 58 30 54 30 L42 30 C40 30 40 30 40 30 Z" fill={fg}/>
      <circle cx="49" cy="38" r="2.5" fill={fg} opacity=".6"/>
      <circle cx="45" cy="44" r="1.8" fill={fg} opacity=".4"/>
    </svg>
  );
};

// Wordmark — stacked compact display, "BIG" emphasised.
const Wordmark = ({ light = false, size = 22 }) => {
  const fg = light ? '#fff' : '#0e1117';
  return (
    <span className="display" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: .92, color: fg }}>
      <span style={{ fontSize: size * 0.5, fontWeight: 600, letterSpacing: '.32em', textTransform: 'uppercase', opacity: .7, marginLeft: '.04em' }}>vape</span>
      <span style={{ fontSize: size, fontWeight: 900, letterSpacing: '-.02em', textTransform: 'uppercase' }}>
        Big<span style={{ color: '#ff5e1f' }}>.</span>
      </span>
    </span>
  );
};

// =========================================================
// Sample product data (real images from vapebig.co.uk)
// =========================================================
const HERO_PRODUCTS = [
  { name: "Hayati Pro Ultra Plus 25K", brand: "Hayati", price: 14.99, was: 17.99, puffs: "25,000", rating: 4.9, reviews: 980, tag: "Bestseller", img: null, multibuy: "3 for £42", flavours: "Blue Razz Cherry, Mr Blue, Cherry Cola", strength: "20mg", cap: "2ml", desc: "Pod-replaceable kit, 1100mAh USB-C, dual mesh coil" },
  { name: "Hayati Pro Max Plus 6K", brand: "Hayati", price: 7.49, was: 9.99, puffs: "6,000", rating: 4.8, reviews: 612, tag: "Hot", img: null, multibuy: "3 for £20", flavours: "Banana Ice, Pink Lemonade, Triple Mango", strength: "20mg", cap: "2ml", desc: "Quick-heating coils, adjustable airflow, leak-proof" },
  { name: "SKE Crystal Bar 600 Pod Kit", brand: "SKE Crystal", price: 3.49, was: 4.99, puffs: "600", rating: 4.7, reviews: 412, tag: "Deal", img: null, multibuy: "5 for £15", flavours: "Blue Razz Lemonade, Cherry Ice, Tropical", strength: "20mg", cap: "2ml", desc: "TPD-compliant disposable, smooth mesh coil, pocketable" },
  { name: "Hayati Pro Max 4000 Pod Kit", brand: "Hayati", price: 8.99, was: 9.99, puffs: "4,000", rating: 4.8, reviews: 786, img: null, multibuy: "3 for £24", flavours: "Banana Ice, Cola Ice, Cherry", strength: "20mg", cap: "2ml", desc: "Click-in pods, USB-C charging, signature Hayati flavour" },
  { name: "Rubik 7K Vape Pod Kit by Hayati", brand: "Hayati", price: 5.99, was: 8.99, puffs: "7,000", rating: 4.6, reviews: 222, tag: "New", img: null, multibuy: "3 for £15", flavours: "Blue Razz GB, Mr Blue, Mint", strength: "20mg", cap: "2ml", desc: "Compact pod kit, 600mAh battery, satisfying draw" },
  { name: "OXBAR 6000 Replaceable Pod Kit", brand: "OXBAR", price: 3.99, was: 8.99, puffs: "6,000", rating: 4.4, reviews: 124, tag: "Clearance", img: null, multibuy: "Any 3 £10", flavours: "Blue Razz Cherry, Strawberry Ice", strength: "20mg", cap: "2ml", desc: "Replaceable pods, RGB LED, ergonomic grip" },
  { name: "Hayati Pro Max Plus 6K Pods", brand: "Hayati", price: 4.99, was: 7.99, puffs: "Refill", rating: 4.7, reviews: 318, tag: "Pods", multibuy: "5 for £20", flavours: "Banana Ice, Mint, Triple Mango", strength: "20mg", cap: "2ml", desc: "Replacement pods, 2-pack, sealed pre-filled with juice" },
  { name: "Lost Mary BM6000 Pod Kit", brand: "Lost Mary", price: 9.99, was: null, puffs: "6,000", rating: 4.7, reviews: 410, multibuy: "Any 2 £18", flavours: "Blueberry Sour Raspberry, Triple Mango", strength: "20mg", cap: "Refillable", desc: "Refillable pod kit, deep flavour profile, sleek build" },
];

const ELIQUIDS = [
  { name: "Watermelon Ice — Dojo Liq", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.7, reviews: 88, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
  { name: "Triple Mango — Dojo Liq", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.8, reviews: 64, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
  { name: "Ten Tangerines — Dojo Liq", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.6, reviews: 51, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
  { name: "Strawberry Ice — Dojo Liq", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.9, reviews: 142, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
  { name: "Strawberry Raspberry Cherry Ice", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.7, reviews: 76, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
  { name: "Sour Watermelon Candy", brand: "Vaporesso", price: 2.49, was: 2.99, rating: 4.5, reviews: 28, img: null, strength: "10mg / 20mg", size: "10ml", cap: "10ml", desc: "Nic salt e-liquid · Mesh-coil friendly · Long-lasting flavour", multibuy: "5 for £10" },
];

const CATEGORIES = [
  { name: "Vape Kits",        sub: "Starter to advanced", count: 340, key: "kits" },
  { name: "Big Puff Vapes",   sub: "6K – 50K puffs",      count: 78,  key: "disp" },
  { name: "Pre-Filled Pods",  sub: "Plug & vape",         count: 210, key: "pods" },
  { name: "E-Liquids",        sub: "2,500+ flavours",     count: 2500,key: "eliquid" },
  { name: "Nic Salts",        sub: "10 / 20 mg",          count: 900, key: "nicsalt" },
  { name: "Nicotine Pouches", sub: "ZYN, VELO, KILLA",    count: 64,  key: "pouch" },
  { name: "Coils",            sub: "Every major brand",   count: 180, key: "coil" },
  { name: "Clearance",        sub: "Up to 70% off",       count: 92,  key: "clear" },
];

const BRANDS = [
  "Hayati","Lost Mary","SKE Crystal","Elf Bar","Vaporesso","Voopoo","OXVA","IVG",
  "Aspire","Elux","Smok","Uwell","Hyola","HQD","Solo Bar","Pyne Pod"
];

// All-pages constant — referenced by app shell to switch screens
const PAGE_INDEX = [
  { key: "home",     label: "Home",              section: "Shop",    kbd: "1" },
  { key: "plp",      label: "Category / Listing",section: "Shop",    kbd: "2" },
  { key: "pdp",      label: "Product Detail",    section: "Shop",    kbd: "3" },
  { key: "brand",    label: "Brand Page",        section: "Shop",    kbd: "4" },
  { key: "cart",     label: "Cart",              section: "Shop",    kbd: "5" },
  { key: "checkout", label: "Checkout",          section: "Shop",    kbd: "6" },
  { key: "order",    label: "Order Confirmation",section: "Shop",    kbd: "7" },

  { key: "signin",   label: "Sign In / Sign Up", section: "Account", kbd: "Q" },
  { key: "account",  label: "Account Dashboard", section: "Account", kbd: "W" },

  { key: "about",    label: "About",             section: "Content", kbd: "A" },
  { key: "contact",  label: "Contact",           section: "Content", kbd: "S" },
  { key: "blog",     label: "Blog Index",        section: "Content", kbd: "D" },
  { key: "blogpost", label: "Blog Post",         section: "Content", kbd: "F" },

  { key: "mhome",    label: "Home",              section: "Mobile",  kbd: "Z" },
  { key: "mplp",     label: "Listing",           section: "Mobile",  kbd: "X" },
  { key: "mpdp",     label: "Product",           section: "Mobile",  kbd: "C" },
  { key: "mcart",    label: "Cart",              section: "Mobile",  kbd: "V" },
  { key: "mcheckout",label: "Checkout",          section: "Mobile",  kbd: "B" },
  { key: "msignin",  label: "Sign In",           section: "Mobile",  kbd: "N" },
  { key: "maccount", label: "Account",           section: "Mobile",  kbd: "M" },
  { key: "mmenu",    label: "Menu",              section: "Mobile",  kbd: "," },
  { key: "morder",   label: "Order Confirm",     section: "Mobile",  kbd: "." },
  { key: "mblog",    label: "Blog",              section: "Mobile",  kbd: "/" },
];

Object.assign(window, { Icon, LogoMark, Wordmark, HERO_PRODUCTS, ELIQUIDS, CATEGORIES, BRANDS, PAGE_INDEX });
