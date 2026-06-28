import { ProductDetail, MasonryTile, Hotspot, JournalPost, Testimonial } from "./types";

// Master list of product details (all expensive, highly-considered luxury artifacts)
export const masterProducts: Record<string, ProductDetail> = {
  "terracotta-urn": {
    id: "terracotta-urn",
    title: "The Kansa Terracotta Urn",
    subtitle: "Clay thrown by hand in Kutch, sun-baked & smoke-fired.",
    category: "Ceramics",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Passed down through six generations, the black-clay pottery of Kutch relies on clay harvested from local lake beds. Each urn is burnished with a polished stone to seal the pores before being smoke-fired in a subterranean pit filled with local firewood and dry leaves.",
    material: "100% Organic Wild Kutch Terracotta Clay",
    dimensions: "Diameter: 32cm, Height: 48cm",
    craftsmanship: "Individually wheel-thrown and wood-ash pit-fired, resulting in unique charcoal-gray and warm sienna mottling.",
    styling: "Position as a standalone floor piece in a sunlit corner, or pair with dried eucalyptus branches on a low wooden plinth.",
    care: "Wipe with a soft dry cloth. Do not use chemical detergents. For dry decorative use only.",
    complementaryIds: ["brass-oil-lamp", "minimalist-bench"]
  },
  "brass-oil-lamp": {
    id: "brass-oil-lamp",
    title: "Mridang Brass Oil Vessel",
    subtitle: "Lost-wax cast solid brass with a hand-burnished oil finish.",
    category: "Brass Decor",
    price: "₹12,200",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Inspired by the classical percussion instrument, the Mridang brass vessel is hand-poured in Aligarh using ancient sand-casting techniques. The warm, soft luster is achieved through hours of manual polishing with tamarind pulp and coconut oil.",
    material: "Solid Poured Brass, Raw Finish",
    dimensions: "Diameter: 14cm, Height: 22cm",
    craftsmanship: "Lost-wax cast and meticulously turned by hand on historic wooden lathes.",
    styling: "Sits beautifully on a marble coffee table or nestled among art books. Captures low, warm ambient light wonderfully.",
    care: "Brass will naturally develop a rich, dark patina over time. To restore bright finish, polish gently with brass cleaning compound.",
    complementaryIds: ["terracotta-urn", "clay-incense-tray"]
  },
  "minimalist-bench": {
    id: "minimalist-bench",
    title: "The Sonepat Teak Bench",
    subtitle: "Reclaimed plantation teak wood, hand-scraped and tenon-joined.",
    category: "Furniture",
    price: "₹64,000",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Constructed entirely from seasoned, reclaimed structural beams from heritage homes in northern India, the Sonepat Bench celebrates pure geometry. It uses traditional mortise-and-tenon joints, requiring absolutely no metal hardware.",
    material: "Solid Reclaimed Teak Wood",
    dimensions: "Length: 120cm, Width: 35cm, Height: 45cm",
    craftsmanship: "Each surface is hand-planed and oiled with organic linseed wax to preserve the natural grain patterns.",
    styling: "An ideal grounding element for an entryway or at the foot of a low-slung bed. Style with a single ceramic tray.",
    care: "Avoid direct contact with wet objects. Apply clear wood wax annually to retain luster.",
    complementaryIds: ["terracotta-urn", "textured-plaster-canvas"]
  },
  "clay-incense-tray": {
    id: "clay-incense-tray",
    title: "Sandalwood Clay Burner & Tray",
    subtitle: "Glazed stoneware with hand-pressed wild soil texture.",
    category: "Accessories",
    price: "₹4,800",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Crafted in a forest workshop outside Auroville, this tray utilizes coarse wild clays that display deep organic iron speckles when high-fired. The central well safely cradles slow-burning hand-rolled botanical incense.",
    material: "Speckled Wild Stoneware, Raw Satin Glaze",
    dimensions: "Length: 24cm, Width: 8cm, Height: 2cm",
    craftsmanship: "Slab-rolled and individually detailed with custom hand-carved boxwood ribbing.",
    styling: "A quiet companion for your study desk or bathing sanctuary. Beautiful on a stone countertop.",
    care: "Rinse with lukewarm water and mild soap. Ash residue wipes off clean.",
    complementaryIds: ["brass-oil-lamp", "handwoven-linen-throw"]
  },
  "textured-plaster-canvas": {
    id: "textured-plaster-canvas",
    title: "Anant Plaster Relic Art",
    subtitle: "Organic earthen pigments layered on jute canvas.",
    category: "Wall Art",
    price: "₹38,000",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "A visual meditation on decay and permanence, the Anant series is created by layering fine-sifted river sand, lime plaster, and soot onto stretched natural jute panels. The resulting cracks and textures emerge naturally as the plaster cures.",
    material: "Lime Plaster, Sand, Charcoal and Natural Sienna on Jute Canvas",
    dimensions: "Width: 70cm, Height: 95cm",
    craftsmanship: "Hand-applied in multiple slow-drying stages over three weeks by artist-artisans in Rajasthan.",
    styling: "Mount flush on warm ivory or concrete walls with generous empty wall space around it to honor its negative space.",
    care: "Keep away from humid damp environments. Dust lightly with a clean feather-brush.",
    complementaryIds: ["minimalist-bench", "sculptural-clay-vase"]
  },
  "sculptural-clay-vase": {
    id: "sculptural-clay-vase",
    title: "Chitra Curved Stoneware Vase",
    subtitle: "Hand-pinched asymmetric silhouette with textured slip finish.",
    category: "Ceramics",
    price: "₹14,500",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Hand-coiled without the aid of a potters wheel, the Chitra vase celebrates organic imperfection. It features an expressive dual-handle contour reminiscent of traditional water vessels of the Deccan plateau.",
    material: "Iron-rich stoneware with slip trail brushing",
    dimensions: "Diameter: 20cm, Height: 35cm",
    craftsmanship: "Pinched and coiled by hand, finished with a subtle oatmeal slip that leaves tactile throwing rings.",
    styling: "Complements minimalist shelving or works beautifully in groups of three uneven pots on dry oak furniture.",
    care: "Waterproof interior glaze allows for fresh seasonal stems, though it stands fully complete as a dry sculpture.",
    complementaryIds: ["textured-plaster-canvas", "terracotta-urn"]
  },
  "handwoven-linen-throw": {
    id: "handwoven-linen-throw",
    title: "Kora Handspun Linen Throw",
    subtitle: "Undyed organic linen handwoven on wooden fly-shuttle looms.",
    category: "Textiles",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Woven in Bhagalpur from the finest long-staple organic flax, the Kora throw remains completely unbleached and undyed. The subtle changes in yarn thickness reflect the unique rhythm of the weaver's hands.",
    material: "100% Hand-spun Organic Flax Linen",
    dimensions: "Length: 220cm, Width: 150cm",
    craftsmanship: "Hand-spun on Charkhas and hand-loomed over a period of 4 days per piece.",
    styling: "Drape loosely over a modern linen sofa or fold meticulously along the arm of a low-profile chair.",
    care: "Gentle hand wash with pH-neutral soap or professional dry clean. Lay flat to dry.",
    complementaryIds: ["clay-incense-tray", "minimalist-bench"]
  },
  "antique-mirror": {
    id: "antique-mirror",
    title: "Darpan Hammered Brass Mirror",
    subtitle: "Beveled glass encased in a hand-beaten warm brass frame.",
    category: "Mirrors",
    price: "₹28,500",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=1000&q=80",
    secondaryImages: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1000&q=80"
    ],
    story: "Each metal frame is individually shaped and beaten over timber molds by master coppersmiths in Pune. The metal edge reveals hundreds of subtle hammer facets that catch and bounce candle flame.",
    material: "Beaten Sheet Brass, Premium Beveled Mirror Glass",
    dimensions: "Diameter: 65cm, Depth: 4cm",
    craftsmanship: "Individually hot-worked and hand-stamped with a subtle maker's crest on the rear edge.",
    styling: "Mount at eye-level in dark hallways to visually expand the entry or hang above a low teak console table.",
    care: "Clean glass with a soft damp microfiber cloth. Allow brass rim to naturally oxidize or polish lightly.",
    complementaryIds: ["minimalist-bench", "brass-oil-lamp"]
  }
};

// Curated masonry grid items - mixed, organic, breaking standard layouts
export const masonryTiles: MasonryTile[] = [
  {
    type: "image",
    id: "terracotta-urn",
    image: masterProducts["terracotta-urn"].image,
    title: "The Kansa Terracotta Urn",
    category: "Ceramics",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["terracotta-urn"]
  },
  {
    type: "quote",
    id: "quote-1",
    quote: "“Simplicity is not the lack of clutter, but the presence of clarity.”",
    author: "Minimalist Living Edit",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[220px] md:h-[300px]"
  },
  {
    type: "image",
    id: "brass-oil-lamp",
    image: masterProducts["brass-oil-lamp"].image,
    title: "Mridang Brass Oil Vessel",
    category: "Brass Decor",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[350px] md:h-[450px]",
    productDetail: masterProducts["brass-oil-lamp"]
  },
  {
    type: "collection",
    id: "collection-1",
    title: "The Brass Edit",
    subtitle: "Exploring cold-cast bronze and spun-brass forms shaped by friction and fire.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    colSpan: "col-span-12 md:col-span-8",
    heightClass: "h-[350px] md:h-[400px]"
  },
  {
    type: "video",
    id: "clay-incense-tray",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-shaping-a-clay-pot-on-a-wheel-41610-large.mp4",
    poster: masterProducts["clay-incense-tray"].image,
    title: "Sandalwood Clay Burner & Tray",
    category: "Accessories",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[400px] md:h-[500px]",
    productDetail: masterProducts["clay-incense-tray"]
  },
  {
    type: "image",
    id: "minimalist-bench",
    image: masterProducts["minimalist-bench"].image,
    title: "The Sonepat Teak Bench",
    category: "Furniture",
    colSpan: "col-span-12 md:col-span-8",
    heightClass: "h-[500px] md:h-[600px]",
    productDetail: masterProducts["minimalist-bench"]
  },
  {
    type: "collection",
    id: "collection-2",
    title: "Earth & Clay",
    subtitle: "Imperfect silhouettes sculpted from wild river clays and high-fired stoneware.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[400px] md:h-[500px]"
  },
  {
    type: "image",
    id: "textured-plaster-canvas",
    image: masterProducts["textured-plaster-canvas"].image,
    title: "Anant Plaster Relic Art",
    category: "Wall Art",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[520px]",
    productDetail: masterProducts["textured-plaster-canvas"]
  },
  {
    type: "quote",
    id: "quote-2",
    quote: "“Objects hold our memories. Crafting them with care ensures the stories we pass down are beautiful.”",
    author: "Kanchipuram Weaver Collective",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[250px]"
  },
  {
    type: "image",
    id: "sculptural-clay-vase",
    image: masterProducts["sculptural-clay-vase"].image,
    title: "Chitra Curved Stoneware Vase",
    category: "Ceramics",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[350px] md:h-[450px]",
    productDetail: masterProducts["sculptural-clay-vase"]
  },
  {
    type: "image",
    id: "handwoven-linen-throw",
    image: masterProducts["handwoven-linen-throw"].image,
    title: "Kora Handspun Linen Throw",
    category: "Textiles",
    colSpan: "col-span-12 md:col-span-6",
    heightClass: "h-[400px] md:h-[500px]",
    productDetail: masterProducts["handwoven-linen-throw"]
  },
  {
    type: "image",
    id: "antique-mirror",
    image: masterProducts["antique-mirror"].image,
    title: "Darpan Hammered Brass Mirror",
    category: "Mirrors",
    colSpan: "col-span-12 md:col-span-6",
    heightClass: "h-[400px] md:h-[500px]",
    productDetail: masterProducts["antique-mirror"]
  }
];

// Hotspot room data - beautifully styled living room
export const interactiveRoomImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90";

export const roomHotspots: Hotspot[] = [
  {
    id: "hs-teak-bench",
    x: 45,
    y: 72,
    productDetail: masterProducts["minimalist-bench"]
  },
  {
    id: "hs-terracotta-urn",
    x: 25,
    y: 65,
    productDetail: masterProducts["terracotta-urn"]
  },
  {
    id: "hs-brass-lamp",
    x: 62,
    y: 48,
    productDetail: masterProducts["brass-oil-lamp"]
  },
  {
    id: "hs-plaster-art",
    x: 48,
    y: 28,
    productDetail: masterProducts["textured-plaster-canvas"]
  }
];

// Featured collections for horizontal expanding cards
export const featuredCollections = [
  {
    id: "living-room",
    title: "Living Room",
    description: "Quiet corners, slow mornings, tactile furniture designed to anchor daily gatherings.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    count: "24 items"
  },
  {
    id: "dining",
    title: "Dining & Culinary",
    description: "Hand-pressed stoneware, washed linen overlays, and brass serving instruments.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80",
    count: "18 items"
  },
  {
    id: "bedroom",
    title: "Bedroom Sanctuary",
    description: "Breathable textured blankets, raw organic cotton, and wooden bedside guardians.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    count: "15 items"
  },
  {
    id: "workspace",
    title: "The Scholar Workspace",
    description: "Solid timber organizers, warm brass study lighting, and sand-cast book weights.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    count: "12 items"
  },
  {
    id: "entryway",
    title: "The Warm Entryway",
    description: "Expansive beaten mirrors, statement vases, and tenon-joined plinths.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
    count: "9 items"
  }
];

// Artisan narrative section
export const artisanVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-creative-pottery-workshop-clay-work-41604-large.mp4";
export const artisanBackupImage = "https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?auto=format&fit=crop&w=1000&q=80";

export const artisanStory = {
  quote: "“The clay remembers the touch of the wheel. The brass remembers the heat of the fire. Our hands translate memory into permanent shelter.”",
  lead: "Aarasta is an active partnership between contemporary Indian designers and master generational craftspeople.",
  paragraphs: [
    "Across the desert plains of Kutch, the heritage metalsmiths of Aligarh, and the traditional weavers of Bhagalpur, we collaborate directly with over fifty artisan families. Each object in our collection represents a lifetime of technical skill and cultural continuity.",
    "By keeping supply chains compact and honoring the slow pace of hand-production, we preserve the authentic material irregularities of organic fibers, wild soil, and solid cast metals. We believe luxury is found in the traces of human touch."
  ],
  timeline: [
    { year: "2016", title: "The First Kiln", desc: "Collaborating with three potting families in Kutch, reviving underground wood-firing techniques." },
    { year: "2019", title: "Aligarh Brass Workshop", desc: "Establishing direct lost-wax cast partnerships to avoid scrap dilution, ensuring pure copper-zinc alloy ratios." },
    { year: "2022", title: "Bhagalpur Weavers Guild", desc: "Integrating chemical-free handspun flax processing, providing regular sustainable work for 20+ master weavers." },
    { year: "2026", title: "Aarasta Atelier", desc: "Inaugurating our zero-waste architectural decor studio, wedding historical processes with absolute modern minimalism." }
  ]
};

// Process section timeline
export const processSteps = [
  {
    step: "01",
    name: "Sketch",
    title: "The Architectural Blueprint",
    desc: "Every design starts as a hand-drawn pencil study in our Delhi studio, focusing on pure geometric silhouettes and balanced weights."
  },
  {
    step: "02",
    name: "Craft",
    title: "Generational Hands",
    desc: "Our partner artisans transform raw components—solid brass, local teak, wild soil—into solid objects using ancient, uninterrupted methods."
  },
  {
    step: "03",
    name: "Finish",
    title: "Tactile Refinement",
    desc: "Surfaces are scraped with wooden knives, burnished with lake pebbles, or oiled with organic waxes to emphasize natural grain and texture."
  },
  {
    step: "04",
    name: "Quality Check",
    title: "Rigorous Inspection",
    desc: "Each item is checked under warm daylight, ensuring structural integrity while celebrating beautiful, non-repeating material marks."
  },
  {
    step: "05",
    name: "Delivered",
    title: "Sustained Safe Passage",
    desc: "Carefully hand-wrapped in recycled linen wraps and sturdy custom-fit wood cartons, delivered directly to anchor your living sanctuary."
  }
];

// New Arrivals
export const newArrivals = [
  {
    id: "sculptural-clay-vase",
    title: "Chitra Curved Stoneware Vase",
    price: "₹14,500",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    tag: "Clay Slip"
  },
  {
    id: "antique-mirror",
    title: "Darpan Hammered Brass Mirror",
    price: "₹28,500",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=800&q=80",
    tag: "Beaten Brass"
  },
  {
    id: "handwoven-linen-throw",
    title: "Kora Handspun Linen Throw",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    tag: "Pure Flax"
  },
  {
    id: "terracotta-urn",
    title: "The Kansa Terracotta Urn",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    tag: "Kutch Clay"
  },
  {
    id: "brass-oil-lamp",
    title: "Mridang Brass Oil Vessel",
    price: "₹12,200",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    tag: "Poured Brass"
  }
];

// Shop the Look - Multiple Rooms / Angles
export const shopTheLookRooms = [
  {
    id: "look-living",
    title: "Morning Sun in the Salon",
    roomImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
    description: "A meditation on negative space. The Sonepat bench is accompanied by the heavy Kansa terracotta urn to catch low-angled morning light.",
    products: [
      { id: "minimalist-bench", name: "Sonepat Teak Bench", price: "₹64,000", x: 48, y: 75 },
      { id: "terracotta-urn", name: "The Kansa Terracotta Urn", price: "₹18,500", x: 18, y: 62 },
      { id: "handwoven-linen-throw", name: "Kora Handspun Linen Throw", price: "₹9,500", x: 65, y: 70 }
    ]
  },
  {
    id: "look-study",
    title: "The Quiet Desk",
    roomImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=90",
    description: "An edit focusing on study rituals. Deep raw wood meets bright-cast brass vessel and glazed clay slab incense catchers.",
    products: [
      { id: "brass-oil-lamp", name: "Mridang Brass Oil Vessel", price: "₹12,200", x: 42, y: 46 },
      { id: "clay-incense-tray", name: "Sandalwood Clay Burner", price: "₹4,800", x: 58, y: 56 }
    ]
  }
];

// Journal Articles
export const journalPosts: JournalPost[] = [
  {
    id: "journal-1",
    title: "The Architecture of Quiet",
    excerpt: "How selecting materials with historical patina shapes our psychological concept of home.",
    date: "June 14, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    category: "Space Theory"
  },
  {
    id: "journal-2",
    title: "Ash, Wood & Earth",
    excerpt: "Journey to the subterranean baking pits of Gujarat's master burnishers.",
    date: "May 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?auto=format&fit=crop&w=800&q=80",
    category: "Craft Study"
  },
  {
    id: "journal-3",
    title: "Living with Linseed Wax",
    excerpt: "A practical guide to caring for organic finishes and encouraging natural oxidation.",
    date: "April 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
    category: "Maintenance"
  }
];

// Testimonials
export const homeTestimonials: Testimonial[] = [
  {
    id: "t-1",
    quote: "“The Kansa Urn sits at our entry. Every visitor stops to run their hands along the sand facets. It has completely altered the rhythm of arriving home.”",
    author: "Malvika & Sameer Sen",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "t-2",
    quote: "“Unbelievable weight. The lost-wax brass lamp has a depth of metal that immediately makes contemporary catalog replicas feel incredibly thin.”",
    author: "Pranav Mehra",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  }
];

// Instagram Section (Beautiful masonry)
export const instagramPosts = [
  { id: "i-1", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=600&q=80", ratio: "aspect-square" },
  { id: "i-2", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80", ratio: "aspect-[3/4]" },
  { id: "i-3", image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=600&q=80", ratio: "aspect-[3/2]" },
  { id: "i-4", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80", ratio: "aspect-square" },
  { id: "i-5", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80", ratio: "aspect-[3/4]" },
  { id: "i-6", image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=600&q=80", ratio: "aspect-square" }
];
