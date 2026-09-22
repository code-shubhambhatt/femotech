export const productsData = [
  {
    id: "blister-foil",
    name: "Aluminium Blister Foil",
    badge: "Hard / Soft Temper",
    category: "blister",
    image: "/images/products/blister_foil_roll.jpg",
    summary: "Push-through lidding foil with VMCH Heat Seal Lacquer, engineered for moisture-proof sealing with PVC, PVdC, PP, and PS for tablets and capsules.",
    specs: {
      thickness: "20 / 25 / 30 microns (±8% tolerance)",
      temper: "Hard Temper (push-through) or Soft Temper",
      coatingOptions: "4–6 GSM or 6–8 GSM Heat Seal Lacquer (VMCH)",
      heatSealStrength: "≥ 7 N / 15mm with PVC (at 180°C - 200°C)",
      printing: "Up to 5-Colour Rotogravure printing as per approved artwork or Plain Foil",
      sealingCompatibility: "PVC, PVdC-coated PVC, Polypropylene (PP), Polystyrene (PS)",
      structure: [
        { name: "Printing Ink", desc: "Heat-resistant inks, up to 5 colors", color: "#3B82F6" },
        { name: "Primer Lacquer", desc: "Transparent protective wash coat", color: "#93C5FD" },
        { name: "Aluminium Foil", desc: "20, 25, or 30 microns pure aluminium", color: "#CBD5E1" },
        { name: "Heat Seal Lacquer", desc: "VMCH coating (4-6 or 6-8 GSM)", color: "#F97316" }
      ]
    },
    applications: [
      "Blister packaging of solid oral dose tablets and capsules",
      "FMCG medicated lozenges and confectionery products",
      "Unit-dose push-through blister packs"
    ],
    features: [
      "100% barrier against water vapour, oxygen, light, and aroma",
      "Pinhole-free guaranteed foil with bursting strength certification",
      "Excellent seal integrity with standard PVC and high-barrier PVdC blister films",
      "High dimensional stability during high-speed blister packing machines"
    ]
  },
  {
    id: "alu-alu",
    name: "Aluminium Cold Forming (Alu-Alu)",
    badge: "4-Layer Ultra Barrier",
    category: "alu-alu",
    image: "/images/products/alu_alu_roll.jpg",
    summary: "High-performance 4-layer cold-formable composite (OPA / Aluminium / PVC) engineered for deepest draw pockets without micro-cracking.",
    specs: {
      thickness: "Approx 135 – 140 microns total composite",
      structureLayers: "25µ OPA / Adhesive / 45-50µ Aluminium / Adhesive / 60µ PVC",
      temper: "Fully annealed soft aluminium core",
      coldFormingDepth: "High elongation capability for deep pocket blister forming",
      printing: "Unprinted or registered printing as per client artwork",
      sealingCompatibility: "Aluminium Blister Foil (Hard Temper)",
      structure: [
        { name: "OPA (Nylon Film)", desc: "25 microns oriented polyamide for mechanical strength", color: "#818CF8" },
        { name: "Adhesive Layer", desc: "Dry-bonding polyurethane adhesive", color: "#FBBF24" },
        { name: "Aluminium Foil", desc: "45 / 50 microns soft barrier core", color: "#CBD5E1" },
        { name: "Adhesive Layer", desc: "High-strength bonding resin", color: "#FBBF24" },
        { name: "PVC Film", desc: "60 microns inner sealant film", color: "#06B6D4" }
      ]
    },
    applications: [
      "Highly hygroscopic, moisture-sensitive and photo-sensitive active APIs",
      "Antibiotics, cardiovascular formulations, and effervescent medicines",
      "Extended shelf-life packaging for tropical export zones"
    ],
    features: [
      "Zero transmission of moisture (WVTR = 0.00) and oxygen (OTR = 0.00)",
      "Exceptional elasticity with zero corner pinholes during cold draw",
      "100% light protection for photo-degradable compounds",
      "Rigid pocket protection against mechanical crushing"
    ]
  },
  {
    id: "strip-foil",
    name: "Aluminium Strip Foil",
    badge: "Poly Laminated",
    category: "strip",
    image: "/images/products/strip_foil_roll.jpg",
    summary: "High-barrier aluminium foil laminated with food-grade LDPE as per Govt. standards, offering hermetic seals for sensitive tablets and capsules.",
    specs: {
      thickness: "25 / 30 / 40 microns aluminium foil",
      ldpeSpecs: "150 – 200 gauge (37.5 – 50 microns food-grade LDPE)",
      temper: "Soft Temper (annealed for strip forming)",
      printing: "Plain or Multi-Colour printing as per customer artwork",
      sealingCompatibility: "Direct thermal heat seal on strip packing machines",
      structure: [
        { name: "Printing Ink", desc: "Protective surface printing", color: "#3B82F6" },
        { name: "Aluminium Foil", desc: "25, 30, or 40 microns soft aluminium", color: "#CBD5E1" },
        { name: "Laminating Adhesive", desc: "High bonding adhesive layer", color: "#FBBF24" },
        { name: "Food Grade LDPE", desc: "150 – 200 gauge polyethylene sealant", color: "#10B981" }
      ]
    },
    applications: [
      "Hermetic strip packaging of moisture-sensitive tablets and capsules",
      "Effervescent formulations, chewables, and specialty medicinal tablets",
      "Hospital & institutional healthcare unit dosing"
    ],
    features: [
      "Direct contact certified food-grade LDPE compliant with pharmaceutical standards",
      "Hermetic seals preventing any atmospheric ingress",
      "Tear-resistant during pocket dispensing",
      "Superior heat sealing capability on vertical four-side seal machines"
    ]
  },
  {
    id: "paper-alu-laminates",
    name: "Paper - Aluminium Laminates",
    badge: "FMCG & Pharma Sachets",
    category: "laminates",
    image: "/images/products/paper_alu_roll.jpg",
    summary: "Food-grade flexible laminates available in Paper/LDPE and Paper/Heat Seal Lacquer options, ideal for ORS powders, granules, and FMCG packaging.",
    specs: {
      thickness: "41 GSM Paper + 150-200 gauge Poly or 4-6 GSM HSL",
      structureLayers: "41 GSM Paper / Food Grade LDPE or Vinyl Resin Coating",
      printing: "Plain or surface printed up to 5 colors with custom widths",
      sealingCompatibility: "Thermal form-fill-seal machines",
      structure: [
        { name: "Surface Print", desc: "High quality rotogravure print", color: "#3B82F6" },
        { name: "41 GSM Paper", desc: "Base paper substrate", color: "#E2E8F0" },
        { name: "Food Grade LDPE", desc: "150 - 200 gauge sealant poly", color: "#10B981" }
      ]
    },
    applications: [
      "Oral rehydration salts (ORS) and electrolyte granules",
      "Pharmaceutical powder sachets and dry suspensions",
      "FMCG confectionery, drink powders, and diagnostic test packaging"
    ],
    features: [
      "Food-grade certification for direct contact without risk of chemical migration",
      "Excellent crease retention and tearability for convenient sachet opening",
      "High burst resistance ensuring zero leakages during transport",
      "Cost-effective alternative for moisture-sensitive single-serve packaging"
    ]
  },
  {
    id: "cr-foil",
    name: "Child Resistant (CR Foils) Laminates",
    badge: "Safety Packaging",
    category: "laminates",
    image: "/images/products/cr_foil_roll.jpg",
    summary: "Multi-layer safety laminate incorporating puncture-resistant paper and aluminium barrier to protect young children while enabling adult push-through/peel access.",
    specs: {
      thickness: "41 GSM Paper / 9µ Adhesive / Aluminium / 4-6 GSM HSL",
      structureLayers: "41 GSM Paper / Adhesive / Aluminium Foil / Heat Seal Lacquer",
      printing: "Surface printed up to 5 colors with dosage & opening instructions",
      sealingCompatibility: "Standard PVC & PVdC blister cavities",
      structure: [
        { name: "Surface Print", desc: "Safety warnings & opening instructions", color: "#3B82F6" },
        { name: "41 GSM Paper", desc: "Puncture & tear-resistant paper layer", color: "#E2E8F0" },
        { name: "Adhesive Layer", desc: "9 microns specialty bonding adhesive", color: "#FBBF24" },
        { name: "Aluminium Foil", desc: "Barrier foil protection layer", color: "#94A3B8" },
        { name: "HSL / PVC Layer", desc: "4–6 GSM Heat Seal Lacquer", color: "#F97316" }
      ]
    },
    applications: [
      "High-potency pharmaceuticals and controlled prescription drugs",
      "Child-resistant & senior-friendly blister packaging systems",
      "Regulatory-compliant export medications"
    ],
    features: [
      "Dual barrier preventing accidental child access (F1 to F8 CR compliance)",
      "Puncture resistance with easy adult push-peel mechanism",
      "High print clarity for mandatory child warnings",
      "Reliable hermetic sealing with standard blister bases"
    ]
  },
  {
    id: "pvc-pvdc",
    name: "PVC & PVDC Coated PVC Rigid Films",
    badge: "Blister Forming Web",
    category: "films",
    image: "/images/products/pvc_film_roll.jpg",
    summary: "High-clarity thermoformable PVC and PVDC-coated PVC films engineered as the base web for blister packaging, providing superior cavity formation and moisture barrier.",
    specs: {
      thickness: "340 GSM Rigid PVC + PVDC Barrier Coating",
      structureLayers: "340 GSM PVC Film (Plain or PVDC Coated)",
      printing: "Print on PVC surface or plain transparent / amber / white opaque",
      sealingCompatibility: "Aluminium Blister Lidding Foil (VMCH Coated)",
      structure: [
        { name: "PVDC Coating", desc: "High moisture and oxygen barrier layer", color: "#8B5CF6" },
        { name: "Tie / Adhesive", desc: "Interfacial bonding layer", color: "#FBBF24" },
        { name: "PVC Base Web", desc: "340 GSM thermoformable PVC matrix", color: "#0284C7" }
      ]
    },
    applications: [
      "Base forming web for pharmaceutical blister packaging of tablets & capsules",
      "Medium to high-barrier blister packaging paired with Blister Foil",
      "Ampoule and syringe thermoformed trays"
    ],
    features: [
      "Uniform wall thickness distribution during thermoforming into blister cavities",
      "Exceptional optical clarity, glass-like transparency, or UV-protective amber tint",
      "Flawless heat sealing with VMCH-coated aluminium lidding foils",
      "Certified non-toxic, non-plasticized, and compliant with Pharmacopoeia standards"
    ]
  }
];
