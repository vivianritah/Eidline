// =============================================
// KAMPALA PRINTERS — PRODUCTS DATA
// Update prices, names, descriptions here
// =============================================

const WHATSAPP_NUMBER = "256740083880"; // <-- Change to real number

const products = [
  // =================== PRINTERS ===================
  {
    id: 1,
    name: "HP LaserJet Pro M404n",
    category: "printer",
    categoryLabel: "Laser Printer",
    emoji: "🖨",
    price: 980000,
    badge: "Best Seller",
    description: "High-speed monochrome laser printer. 38 ppm, USB & Ethernet, ideal for busy offices. Auto-duplex printing, 1200 dpi resolution."
  },
  {
    id: 2,
    name: "Epson EcoTank L3250",
    category: "printer",
    categoryLabel: "Inkjet Printer",
    emoji: "🖨",
    price: 620000,
    badge: "Popular",
    description: "Ultra-low cost inkjet with refillable tanks. Wi-Fi, 3-in-1 (print, copy, scan). Perfect for homes and small businesses."
  },
  {
    id: 3,
    name: "Canon PIXMA G3470",
    category: "printer",
    categoryLabel: "Inkjet Printer",
    emoji: "🖨",
    price: 560000,
    badge: null,
    description: "High-volume, low-cost printing. Refillable ink tanks, wireless printing, and vivid color output. Great for photos and documents."
  },
  {
    id: 4,
    name: "Brother DCP-L2540DW",
    category: "printer",
    categoryLabel: "Laser Printer",
    emoji: "🖨",
    price: 750000,
    badge: "New Arrival",
    description: "Monochrome laser multi-function center. Print, scan, copy with Wi-Fi and automatic 2-sided printing. Business-grade quality."
  },
  {
    id: 5,
    name: "HP Color LaserJet Pro",
    category: "printer",
    categoryLabel: "Color Laser",
    emoji: "🖨",
    price: 1450000,
    badge: "Premium",
    description: "Professional-grade color laser printer. 21 ppm, 1200 dpi, touchscreen display. Handles heavy workloads effortlessly."
  },

  // =================== SCANNERS ===================
  {
    id: 6,
    name: "Canon CanoScan LiDE 400",
    category: "scanner",
    categoryLabel: "Flatbed Scanner",
    emoji: "📡",
    price: 380000,
    badge: "Best Value",
    description: "Slim, fast flatbed scanner. 4800 dpi resolution, USB powered, 5 EZ buttons. Perfect for documents and photos."
  },
  {
    id: 7,
    name: "Epson WorkForce DS-570W",
    category: "scanner",
    categoryLabel: "Document Scanner",
    emoji: "📡",
    price: 1200000,
    badge: null,
    description: "High-speed duplex document scanner with Wi-Fi. 35 ppm, ADF, scans direct to cloud. Ideal for document-heavy offices."
  },
  {
    id: 8,
    name: "HP ScanJet Pro 2500 f1",
    category: "scanner",
    categoryLabel: "Flatbed Scanner",
    emoji: "📡",
    price: 850000,
    badge: null,
    description: "Professional flatbed scanner with ADF. 1200 dpi optical resolution, one-touch scanning, and fast USB 3.0 connection."
  },

  // =================== CARTRIDGES ===================
  {
    id: 9,
    name: "HP 678 Black Ink Cartridge",
    category: "cartridge",
    categoryLabel: "Ink Cartridge",
    emoji: "🖊",
    price: 85000,
    badge: null,
    description: "Genuine HP 678 black ink cartridge. Prints up to 480 pages. Compatible with HP Deskjet 1015, 1515, 2515, and more."
  },
  {
    id: 10,
    name: "Epson 003 Ink Set (4 Colors)",
    category: "cartridge",
    categoryLabel: "Ink Set",
    emoji: "🖊",
    price: 150000,
    badge: "Popular",
    description: "Complete 4-color Epson 003 ink bottle set (Black, Cyan, Magenta, Yellow). Refill for EcoTank L3150, L3250, L5290."
  },
  {
    id: 11,
    name: "Canon PG-745 / CL-746 Combo",
    category: "cartridge",
    categoryLabel: "Cartridge Combo",
    emoji: "🖊",
    price: 130000,
    badge: null,
    description: "Canon 745/746 combo pack — black and color. Compatible with PIXMA iP2870, MG2570, MG2970, and MX497 printers."
  },
  {
    id: 12,
    name: "HP 85A Toner Cartridge",
    category: "cartridge",
    categoryLabel: "Toner Cartridge",
    emoji: "🖊",
    price: 195000,
    badge: "New Arrival",
    description: "Genuine HP CE285A toner. Yields up to 1,600 pages. Compatible with HP LaserJet P1102, P1102w, M1132, M1212nf."
  },

  // =================== ACCESSORIES ===================
  {
    id: 13,
    name: "USB Printer Cable (3M)",
    category: "accessory",
    categoryLabel: "Cable",
    emoji: "🔌",
    price: 15000,
    badge: null,
    description: "High-quality USB 2.0 Type A to B printer cable. 3 meters long, shielded for reliable data transfer. Universal fit."
  },
  {
    id: 14,
    name: "A4 Premium Paper Ream (500 Sheets)",
    category: "accessory",
    categoryLabel: "Paper",
    emoji: "📄",
    price: 25000,
    badge: "Hot Deal",
    description: "80gsm A4 copy paper. Smooth finish for laser and inkjet printers. 500 sheets per ream, suitable for all printer types."
  },
  {
    id: 15,
    name: "Printer Maintenance Kit",
    category: "accessory",
    categoryLabel: "Maintenance",
    emoji: "🔧",
    price: 120000,
    badge: null,
    description: "Full maintenance kit including roller cleaning cloths, anti-static brush, isopropyl alcohol wipes, and compressed air can."
  },
  {
    id: 16,
    name: "HP LaserJet Drum Unit",
    category: "accessory",
    categoryLabel: "Drum Unit",
    emoji: "⚙",
    price: 280000,
    badge: null,
    description: "Replacement drum unit for HP LaserJet series. Up to 12,000 page yield. Restores print quality and extends printer life."
  }
];