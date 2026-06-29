import { ProductDetail, MasonryTile, Hotspot, JournalPost, Testimonial } from "./types";

// Master list of product details (10 Sacred Idols with custom images provided)
export const masterProducts: Record<string, ProductDetail> = {
  "buddha": {
    id: "buddha",
    title: "The Meditative Dhyana Buddha",
    subtitle: "Serene dhyana mudra pose cast in high-purity ceremonial bronze.",
    category: "Idols",
    price: "₹24,500",
    image: "/images/idols/buddha.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Representing absolute inner stability and mindfulness, this Dhyana Buddha is cast using historical lost-wax methods. The serene, closed eyes and perfectly proportioned hands resting in the mudra of meditation provide a visual anchor for any silent reading or meditation space.",
    material: "Ceremonial Bell Metal Bronze Alloy",
    dimensions: "Width: 16cm, Depth: 12cm, Height: 24cm",
    craftsmanship: "Individually modeled in beeswax, packed in river clay, and poured by generational metal casters in Bastar.",
    styling: "Anchor on a low wooden shelf or stone tablet under soft, indirect lighting. Surround with clean, empty space.",
    care: "Wipe with a dry fiber cloth. Do not polish with aggressive acids or chemicals; allow natural oxidation to darken crevices.",
    complementaryIds: ["temple", "buddha1"]
  },
  "buddha1": {
    id: "buddha1",
    title: "The Stone-Carved Buddha Shrine",
    subtitle: "Hand-sculpted sand-colored stone with micro-burnished details.",
    category: "Vintage",
    price: "₹28,000",
    image: "/images/vintage/buddha1.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Sculpted from a single block of natural sandstone sourced from the Vindhyan range, this Buddha portrait captures the transcendental peace of classic Sarnath sculpture. The surface has been hand-rubbed with fine river silt to yield a matte, velvety texture.",
    material: "Solid Vindhyan Sandstone",
    dimensions: "Width: 18cm, Depth: 14cm, Height: 28cm",
    craftsmanship: "Individually block-sculpted by hand over several weeks using traditional steel chisels.",
    styling: "Beautifully presented in a well-lit entryway or nestled in an indoor garden setting alongside bamboo or raw gravel.",
    care: "Dust with a clean stiff paint brush. Stone is highly resilient and handles standard ambient conditions beautifully.",
    complementaryIds: ["buddha", "temple"]
  },
  "ganesha": {
    id: "ganesha",
    title: "Lost-Wax Cast Ganesha",
    subtitle: "Traditional seated form with ancient organic black-wax finish.",
    category: "Vintage",
    price: "₹18,200",
    image: "/images/vintage/ganesha.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Representing the gentle removal of obstacles and the threshold of new beginnings. This solid metal Ganesha exhibits historic Bastar tribal features: elongated limb structure, simple wire-overlay textures, and an open, compassionate demeanor.",
    material: "Solid Dhokra Bell Metal",
    dimensions: "Width: 12cm, Depth: 10cm, Height: 18cm",
    craftsmanship: "Lost-wax cast using ancient non-industrial tribal clay-pit kiln firings.",
    styling: "Perfectly sized for a desk companion, study console, or home altar. Place it facing north-east for traditional auspicious resonance.",
    care: "Dust with a dry microcloth. Dhokra pieces develop a wonderful deep golden sheen on raised surfaces with touch.",
    complementaryIds: ["ganesha1", "ganesha2"]
  },
  "ganesha1": {
    id: "ganesha1",
    title: "The Shanti Brass Ganesha",
    subtitle: "Heavy sand-cast solid brass with a hand-burnished oil finish.",
    category: "Home Accessories",
    price: "₹19,500",
    image: "/images/home-accessories/ganesha1.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "A classical heavy representation of Lord Ganesha in a peaceful sitting posture. Poured in sand molds, this brass piece is heavy and solid, featuring a soft oil-rubbed finish that highlights the elegant contours of his trunk, ears, and crown.",
    material: "Pure Yellow Brass Alloy",
    dimensions: "Width: 14cm, Depth: 11cm, Height: 20cm",
    craftsmanship: "Meticulously sand-cast and hand-finished in Aligarh with individual chisel details.",
    styling: "Place on a dark timber console table or pair with a solid brass lamp to catch flickering candle reflections.",
    care: "Can be cleaned with organic lemon oil or tamarind pulp if a brighter golden finish is desired over natural patina.",
    complementaryIds: ["ganesha", "ganesha2"]
  },
  "ganesha2": {
    id: "ganesha2",
    title: "The Ceremonial Dancing Ganesha",
    subtitle: "Dynamic Nritya Ganesha pose capturing fluid movement in solid bronze.",
    category: "Idols",
    price: "₹22,000",
    image: "/images/idols/ganesha2.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "The Nritya (dancing) Ganesha represents creative joy, artistic flow, and cosmic playfulness. This solid metal sculpture depicts Ganesha poised gracefully on one leg, with his trunk curving dynamically to echo his energetic movement.",
    material: "Polished Bell Metal Bronze",
    dimensions: "Width: 15cm, Depth: 10cm, Height: 22cm",
    craftsmanship: "Individually hand-molded and hot-cast by master metalsmiths in southern India.",
    styling: "Style centrally on an open shelf or low mantelpiece where its rhythmic silhouette can be viewed from multiple angles.",
    care: "Lightly dust with a soft brush. Keep away from humid bathrooms or direct water splashes.",
    complementaryIds: ["ganesha1", "shiva"]
  },
  "krishna": {
    id: "krishna",
    title: "The Eternal Flute Krishna",
    subtitle: "Graceful standing Venugopala pose in a soft dark brass finish.",
    category: "Home Accessories",
    price: "₹16,800",
    image: "/images/home-accessories/krishna.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Capturing the serene posture of Venugopala—Krishna playing his flute under the sacred Kadamba tree. The statue is cast in a beautiful dark antique brass finish, focusing on clean lines and fluid posture rather than excessive modern ornamentation.",
    material: "Antique Finish Solid Brass",
    dimensions: "Width: 10cm, Depth: 8cm, Height: 25cm",
    craftsmanship: "Hand-poured and hand-carved, utilizing age-old hot wax sculpting methods to refine the posture.",
    styling: "An elegant centerpiece for study bookshelves, credenzas, or quiet alcoves. Complements light raw wood wonderfully.",
    care: "Wipe with dry microfiber only. Avoid water, which can create light spots in the dark chemical antique finish.",
    complementaryIds: ["krishna1", "buddha"]
  },
  "krishna1": {
    id: "krishna1",
    title: "Antique Bronze Krishna",
    subtitle: "Heirloom-grade solid bronze with heavy weight and soft golden highlights.",
    category: "Vintage",
    price: "₹21,000",
    image: "/images/vintage/krishna1.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Inspired by medieval Chola bronze casting traditions, this Krishna idol is heavy, balanced, and exhibits remarkable serenity. His raised hands and tilted crown present a balanced visual symmetry, representing divine beauty and poise.",
    material: "Generational Cast Bell Bronze",
    dimensions: "Width: 11cm, Depth: 9cm, Height: 23cm",
    craftsmanship: "Lost-wax cast and meticulously filed by hand to expose the warm golden bronze color beneath the dark fire crust.",
    styling: "Stands proudly on a stone pedestal or an off-white plaster canvas. Place near window light to catch its detailed profile.",
    care: "Rub occasionally with a trace of coconut oil to keep the deep bronze surface lustrous and rich.",
    complementaryIds: ["krishna", "buddha1"]
  },
  "laughingbudha": {
    id: "laughingbudha",
    title: "The Laughing Hotei Guardian",
    subtitle: "Warm, grounding laughing Buddha carved in solid dense timber.",
    category: "Home Accessories",
    price: "₹14,500",
    image: "/images/home-accessories/laughingbudha.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "Representing magnanimity, abundance, and cheerful hospitality. This Hotei figure is carved from highly seasoned, dense mango-wood stumps. The natural grain lines trace the contours of his round, laughing form, giving it an earthy, tactile presence.",
    material: "Solid Seasoned Mango Wood",
    dimensions: "Width: 15cm, Depth: 12cm, Height: 18cm",
    craftsmanship: "Direct chisel carving from raw wooden stumps, finished with a coat of organic tung oil.",
    styling: "Place on a low wooden credenza near your entrance or coffee table to invite a feeling of joy and warmth.",
    care: "Keep away from heating vents or dry direct heat to prevent the organic wood from splitting over time.",
    complementaryIds: ["temple", "buddha"]
  },
  "shiva": {
    id: "shiva",
    title: "Meditative Nataraja Shiva",
    subtitle: "Traditional cosmic dancer design in a dark, rich smoke-cast patina.",
    category: "Idols",
    price: "₹26,000",
    image: "/images/idols/shiva.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "An accurate and beautifully sculpted Nataraja representing the cosmic dance of creation, preservation, and dissolution. Encased in a blazing halo (prabhamandala), Shiva stands on the dwarf of ignorance, holding the damaru drum and cosmic flame.",
    material: "Heavy Bastar Bell Metal",
    dimensions: "Width: 20cm, Depth: 10cm, Height: 26cm",
    craftsmanship: "Entirely handcrafted by tribal artists using earth molds and wood-ash reduction fires.",
    styling: "Position centrally on an eye-level wall console or display case. Let its grand circular frame command attention.",
    care: "Light dusting with dry fiber cloth. The dark reduction finish is stable and requires minimal care.",
    complementaryIds: ["temple", "ganesha2"]
  },
  "temple": {
    id: "temple",
    title: "Hand-Carved Soapstone Temple",
    subtitle: "A miniature architectural sanctuary carved from grey soapstone.",
    category: "Home Accessories",
    price: "₹34,000",
    image: "/images/home-accessories/temple.png",
    secondaryImages: ["/images/category_idols.png"],
    story: "This miniature structural temple is carved from natural soft talc (soapstone), featuring detailed columns, geometric step-backs, and a hollow inner sanctuary designed to shelter a single small oil vessel or metal idol. It is a stunning visual meditation on sacred Indian geometry.",
    material: "Natural Soft Talc Soapstone",
    dimensions: "Width: 16cm, Depth: 16cm, Height: 30cm",
    craftsmanship: "Symmetric stone turning and delicate manual piercing by stone artisans in Agra.",
    styling: "Beautifully suited as the central architectural anchor of a modern home altar, or styled as a sculptural light box on bookshelves.",
    care: "Wipe with a damp sponge. Avoid drops or sharp strikes, as soapstone is naturally delicate and soft.",
    complementaryIds: ["shiva", "buddha"]
  }
};

// Curated masonry grid items - exclusively using our 10 beautiful idols
export const masonryTiles: MasonryTile[] = [
  {
    type: "image",
    id: "buddha",
    image: masterProducts["buddha"].image,
    title: masterProducts["buddha"].title,
    category: "Idols",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["buddha"]
  },
  {
    type: "image",
    id: "temple",
    image: masterProducts["temple"].image,
    title: masterProducts["temple"].title,
    category: "Home Accessories",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["temple"]
  },
  {
    type: "image",
    id: "buddha1",
    image: masterProducts["buddha1"].image,
    title: masterProducts["buddha1"].title,
    category: "Vintage",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["buddha1"]
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
    id: "ganesha",
    image: masterProducts["ganesha"].image,
    title: masterProducts["ganesha"].title,
    category: "Vintage",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[380px] md:h-[480px]",
    productDetail: masterProducts["ganesha"]
  },
  {
    type: "image",
    id: "shiva",
    image: masterProducts["shiva"].image,
    title: masterProducts["shiva"].title,
    category: "Idols",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["shiva"]
  },
  {
    type: "collection",
    id: "collection-1",
    title: "Sacred Sanctuaries",
    subtitle: "Lost-wax castings and hand-carved stone shrines created to focus quiet observation.",
    image: "/images/category_idols.png",
    colSpan: "col-span-12 md:col-span-8",
    heightClass: "h-[350px] md:h-[400px]"
  },
  {
    type: "image",
    id: "ganesha1",
    image: masterProducts["ganesha1"].image,
    title: masterProducts["ganesha1"].title,
    category: "Home Accessories",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[420px] md:h-[500px]",
    productDetail: masterProducts["ganesha1"]
  },
  {
    type: "image",
    id: "krishna",
    image: masterProducts["krishna"].image,
    title: masterProducts["krishna"].title,
    category: "Home Accessories",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["krishna"]
  },
  {
    type: "image",
    id: "krishna1",
    image: masterProducts["krishna1"].image,
    title: masterProducts["krishna1"].title,
    category: "Vintage",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[450px] md:h-[550px]",
    productDetail: masterProducts["krishna1"]
  },
  {
    type: "collection",
    id: "collection-2",
    title: "Tactile Devotion",
    subtitle: "Imperfect silhouettes sculpted from seasoned mango wood and heavy sand-cast brass.",
    image: "/images/category_homeaccesories.png",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[400px] md:h-[500px]"
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
    id: "laughingbudha",
    image: masterProducts["laughingbudha"].image,
    title: masterProducts["laughingbudha"].title,
    category: "Home Accessories",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[380px] md:h-[480px]",
    productDetail: masterProducts["laughingbudha"]
  },
  {
    type: "image",
    id: "ganesha2",
    image: masterProducts["ganesha2"].image,
    title: masterProducts["ganesha2"].title,
    category: "Idols",
    colSpan: "col-span-12 md:col-span-4",
    heightClass: "h-[420px] md:h-[500px]",
    productDetail: masterProducts["ganesha2"]
  }
];

// Interactive Room Image - Spotlighting Buddha, Temple, and Brass Ganesha
export const interactiveRoomImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=90";

export const roomHotspots: Hotspot[] = [
  {
    id: "hs-temple",
    x: 45,
    y: 72,
    productDetail: masterProducts["temple"]
  },
  {
    id: "hs-buddha",
    x: 25,
    y: 65,
    productDetail: masterProducts["buddha"]
  },
  {
    id: "hs-ganesha1",
    x: 62,
    y: 48,
    productDetail: masterProducts["ganesha1"]
  }
];

// Featured collections for horizontal expanding cards
export const featuredCollections = [
  {
    id: "home-accessories",
    title: "Home Accessories",
    description: "Architectural soapstone carvings, sand-cast brass bells, and oiled timber sanctuaries designed to warm daily living.",
    image: "/images/category_homeaccesories.png",
    count: "4 items"
  },
  {
    id: "idols",
    title: "Idols",
    description: "Generationally hand-poured lost-wax bronze, beaten copper, and tribal Bastar metal carvings.",
    image: "/images/category_idols.png",
    count: "3 items"
  },
  {
    id: "vintage",
    title: "Vintage",
    description: "Historical Vindhyan sandstone Buddha portraitures, dhokra castings, and medieval-inspired pieces.",
    image: "/images/category_vintage.png",
    count: "3 items"
  }
];

// Artisan narrative section
export const artisanVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-creative-pottery-workshop-clay-work-41604-large.mp4";
export const artisanBackupImage = "https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?auto=format&fit=crop&w=1000&q=80";

export const artisanStory = {
  quote: "“The brass remembers the heat of the fire. The stone retains the strike of the chisel. Our hands translate devotion into permanent shelter.”",
  lead: "Aarasta is an active partnership between contemporary Indian designers and master generational craftspeople.",
  paragraphs: [
    "Across the stonecarvers of Agra, the heritage metal casters of Bastar, and the traditional coppersmiths of Aligarh, we collaborate directly with over fifty artisan families. Each sacred idol in our collection represents a lifetime of technical devotion and cultural continuity.",
    "By keeping supply chains compact and honoring the slow pace of hand-production, we preserve the authentic material irregularities of organic stone, pure bronze alloys, and solid woods. We believe beauty resides in these traces of human focus."
  ],
  timeline: [
    { year: "2016", title: "The First Forge", desc: "Collaborating with Bastar metal casters to revive traditional wood-ash reduction lost-wax castings." },
    { year: "2019", title: "Agra Soapstone Studio", desc: "Partnering with multi-generational stone carvers to realize intricate symmetric geometric shrines." },
    { year: "2022", title: "Sandstone Excavation Guild", desc: "Integrating clean carving source channels from Vindhyan range quarries, providing regular sustainable work." },
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
    id: "shiva",
    title: "Meditative Nataraja Shiva",
    price: "₹26,000",
    image: "/images/idols/shiva.png",
    tag: "Lost-Wax Cast"
  },
  {
    id: "temple",
    title: "Hand-Carved Soapstone Temple",
    price: "₹34,000",
    image: "/images/home-accessories/temple.png",
    tag: "Soapstone"
  },
  {
    id: "buddha1",
    title: "Stone-Carved Buddha Shrine",
    price: "₹28,000",
    image: "/images/vintage/buddha1.png",
    tag: "Sandstone"
  },
  {
    id: "ganesha1",
    title: "The Shanti Brass Ganesha",
    price: "₹19,500",
    image: "/images/home-accessories/ganesha1.png",
    tag: "Solid Brass"
  }
];

// Shop the Look - Spotlighting our beautifully uploaded idols
export const shopTheLookRooms = [
  {
    id: "look-living",
    title: "Morning Sun in the Salon",
    roomImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
    description: "A meditation on sacred spaces. The Meditative Dhyana Buddha is accompanied by the Hand-Carved Soapstone Temple to catch low-angled morning light.",
    products: [
      { id: "buddha", name: "Meditative Dhyana Buddha", price: "₹24,500", x: 48, y: 75 },
      { id: "temple", name: "Hand-Carved Soapstone Temple", price: "₹34,000", x: 18, y: 62 },
      { id: "buddha1", name: "Stone-Carved Buddha Shrine", price: "₹28,000", x: 65, y: 70 }
    ]
  },
  {
    id: "look-study",
    title: "The Quiet Desk",
    roomImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=90",
    description: "An edit focusing on daily reflection. Solid wood meets warm yellow sand-cast brass Ganesha and antique copper creations.",
    products: [
      { id: "ganesha1", name: "The Shanti Brass Ganesha", price: "₹19,500", x: 42, y: 46 },
      { id: "ganesha", name: "Lost-Wax Cast Ganesha", price: "₹18,200", x: 58, y: 56 }
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
    category: "Space Theory",
    author: "Aarav Mehra",
    content: "Space has a physical voice. In our contemporary rush to populate rooms with sterile, machine-perfect surfaces, we have inadvertently severed the link between texture and emotional tranquility. The Architecture of Quiet is an inquiry into how natural, aged patinas serve as spatial anchors for the human psyche.",
    bodyBlocks: [
      {
        subheading: "The Patina of Time",
        text: "When a material has lived, it tells a silent story. Raw teak, untreated copper, and hand-beaten brass do not degrade; they grow. They respond to humidity, to the oils of human skin, and to the path of direct sunlight. This evolution offers an architecture of reassurance—an honest acknowledgment that time is an ally, not an enemy."
      },
      {
        subheading: "Atmospheric Balance",
        text: "Designing for quiet is not about silence; it is about resonance. A room with soft-glazed earthenware can temper sound waves, while low-slung wooden benches lower our physical center of gravity. By combining textured fabrics with heavy, earthy foundations, we create sanctuaries where the mind can finally rest.",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      },
      {
        subheading: "Curating the Void",
        text: "The final element of quiet is negative space. Allowing a corner to remain entirely unoccupied is a luxury. It allows light to draw shapes across the floor and lets the eye travel without interruption. When you place a single, handcrafted vessel in a vast room, you give that object room to breathe, and in doing so, you invite the inhabitant to do the same."
      }
    ]
  },
  {
    id: "journal-2",
    title: "Chisel, Silt & Earth",
    excerpt: "Journey to the serene workshop sanctuaries of Agra's master stonecarvers.",
    date: "May 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?auto=format&fit=crop&w=800&q=80",
    category: "Craft Study",
    author: "Prerna Joshi",
    content: "Beneath the architectural shadows of old India, a silent choreography of chiseling steel, soft sand abrasion, and physical grit unfolds. This is where natural soapstone and sandstone acquire their velvety skin.",
    bodyBlocks: [
      {
        subheading: "The Sculpture from the Block",
        text: "Unlike modern computer-guided drills, traditional stonecarving happens block by block, chisel blow by chisel blow. Master craftspeople sit cross-legged on fiber mats, listening to the high-pitched ring of metal hitting stone. A deeper ring indicates a stable, dense layer; a hollow pitch warns of internal micro-fissures."
      },
      {
        subheading: "The Art of the Silt Polish",
        text: "Before the soapstone temple can be declared complete, it is hand-rubbed with fine river silt. The microscopic grains act as an organic abrasive, smoothing out chisel scars without erasing the tactile, hand-hewn facets. It is an art form of sheer concentration and absolute muscle memory."
      },
      {
        subheading: "Preserving the Lineage",
        text: "This delicate process cannot be replicated by robotic sand-cutters. It relies on a human sense of symmetry and natural material grain. Our collective mission is to support these families, ensuring that the rhythm of chiseling stone continues to hum across Northern India's ancient carving quarters."
      }
    ]
  }
];

// Testimonials
export const homeTestimonials: Testimonial[] = [
  {
    id: "t-1",
    quote: "“The Meditative Dhyana Buddha sits at our entry. Every visitor stops to run their hands along the bronze details. It has completely altered the rhythm of arriving home.”",
    author: "Malvika & Sameer Sen",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "t-2",
    quote: "“Unbelievable weight and finish. The lost-wax Ganesha has a depth of metal and warm luster that immediately commands silent focus.”",
    author: "Pranav Mehra",
    location: "New Delhi",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
  }
];

// Instagram Section (Beautiful masonry)
export const instagramPosts = [
  { id: "i-1", image: "/images/idols/buddha.png", ratio: "aspect-square" },
  { id: "i-2", image: "/images/home-accessories/ganesha1.png", ratio: "aspect-[3/4]" },
  { id: "i-3", image: "/images/home-accessories/temple.png", ratio: "aspect-[3/2]" },
  { id: "i-4", image: "/images/idols/shiva.png", ratio: "aspect-square" },
  { id: "i-5", image: "/images/vintage/buddha1.png", ratio: "aspect-[3/4]" },
  { id: "i-6", image: "/images/idols/ganesha2.png", ratio: "aspect-square" }
];
