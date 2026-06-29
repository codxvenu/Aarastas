import React, { useState, useEffect } from "react";
import { ArrowRight, Bookmark, BookmarkCheck, ArrowUpRight, ArrowLeft, Mail, Instagram, Sparkles, MessageSquare, Play, HelpCircle, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import SavesDrawer from "./components/SavesDrawer";
import ImmersivePanel from "./components/ImmersivePanel";
import InteractiveRoom from "./components/InteractiveRoom";
import FeaturedCollections from "./components/FeaturedCollections";
import JournalSection from "./components/JournalSection";
import Testimonials from "./components/Testimonials";
import InstagramSection from "./components/InstagramSection";
import PinterestGrid from "./components/PinterestGrid";
import JournalReader from "./components/JournalReader";

import { masterProducts, masonryTiles, newArrivals } from "./data";
import { ProductDetail, MasonryTile, JournalPost } from "./types";

export default function App() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savesOpen, setSavesOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"home" | "gallery">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeJournalPost, setActiveJournalPost] = useState<JournalPost | null>(null);

  // Load saved bookmarks from local storage
  useEffect(() => {
    const cached = localStorage.getItem("aarasta_saved_ids");
    if (cached) {
      try {
        setSavedIds(JSON.parse(cached));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem("aarasta_saved_ids", JSON.stringify(next));
      return next;
    });
  };

  const handleRemoveSavedItem = (id: string) => {
    setSavedIds((prev) => {
      const next = prev.filter((x) => x !== id);
      localStorage.setItem("aarasta_saved_ids", JSON.stringify(next));
      return next;
    });
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveTab("home");
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80; // navbar buffer
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 120);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail("");
      }, 5000);
    }
  };

  // Convert saved IDs to full product objects for the drawer
  const savedProductsList = savedIds
    .map((id) => masterProducts[id])
    .filter((p): p is ProductDetail => !!p);

  // Unique categories from products for masonry filter
  const categories = ["All", "Home Accessories", "Idols", "Vintage"];

  // Filtered tiles based on active tab and search query - ONLY simple images & videos
  const filteredTiles = masonryTiles.filter((tile): tile is Extract<MasonryTile, { type: "image" | "video" }> => {
    if (tile.type !== "image" && tile.type !== "video") {
      return false;
    }

    const textToSearch = `${tile.title} ${tile.category}`;

    const matchesSearch = searchQuery
      ? textToSearch.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    if (activeCategory === "All") return matchesSearch;
    return tile.category === activeCategory && matchesSearch;
  });

  return (
    <div className="bg-warm-ivory min-h-screen selection:bg-muted-brass selection:text-warm-ivory relative">
      
      {/* Editorial Navigation */}
      <Navbar
        savedCount={savedIds.length}
        onOpenSaves={() => setSavesOpen(true)}
        onScrollToSection={handleScrollToSection}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

      {activeTab === "gallery" ? (
        /* Discovery Board Tab View */
        <section id="masonry-gallery" className="pt-32 md:pt-40 pb-24 bg-soft-linen/50 border-t border-border-color min-h-[70vh]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header & Filter System with Search Box */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
                  Our Gallery
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-rich-charcoal tracking-wide">
                  Discovery Board
                </h2>
              </div>

              {/* Scrolling Horizontal Filters + Search Input */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                {/* Search Box */}
                <div className="relative flex items-center border border-border-color focus-within:border-muted-brass transition-colors py-2 px-3.5 bg-card-bg rounded-xl sm:w-64">
                  <Search className="w-4 h-4 text-sec-text/60 mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search items & stories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-rich-charcoal placeholder-sec-text/40 focus:outline-none w-full"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-xs text-sec-text hover:text-rich-charcoal cursor-pointer font-medium ml-1"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-6 px-6 md:mx-0 md:px-0">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        activeCategory === cat
                          ? "bg-rich-charcoal text-warm-ivory border-rich-charcoal"
                          : "bg-card-bg text-sec-text border-border-color hover:bg-soft-linen"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Pinterest-style Masonry Grid */}
            <PinterestGrid
              items={filteredTiles.map((tile) => ({
                id: tile.id,
                title: tile.title,
                category: tile.category,
                image: tile.type === "image" ? tile.image : "",
                type: tile.type,
                videoUrl: tile.type === "video" ? tile.videoUrl : undefined,
                poster: tile.type === "video" ? tile.poster : undefined,
                productDetail: tile.productDetail,
              }))}
              onItemClick={setSelectedProduct}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
              enableInfiniteScroll={true}
            />

          </div>
        </section>
      ) : (
        /* Home Tab View */
        <>
          {/* Main Magazine Hero Section */}
          <section className="relative pt-[96px] pb-20 overflow-hidden bg-warm-ivory">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Big typography statement */}
                <div className="col-span-1 lg:col-span-7 space-y-8 md:pr-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass block">
                    Handcrafted in India
                  </span>
                  
                  <h1 className="text-5xl md:text-7xl font-serif text-rich-charcoal leading-[1.05] tracking-tight">
                    Timeless Pieces.<br />
                    <span className="italic font-normal text-muted-brass">Thoughtful</span> Living.
                  </h1>
                  
                  <p className="text-sm md:text-base text-sec-text leading-relaxed max-w-sm">
                    Beautiful furniture, high-fired ceramics, and brass relics crafted by hand. Made in collaboration with generational craft circles.
                  </p>

                  <div className="pt-4 flex items-center space-x-8">
                    <button
                      onClick={() => {
                        setActiveTab("gallery");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-8 py-3.5 rounded-full bg-soft-linen border border-border-color text-[11px] uppercase tracking-widest text-rich-charcoal hover:bg-muted-brass hover:text-warm-ivory transition-colors duration-500 cursor-pointer shadow-xs font-semibold"
                    >
                      Explore Collection
                    </button>
                    <span 
                      onClick={() => handleScrollToSection("interactive-room")}
                      className="text-[10px] tracking-widest uppercase text-sec-text border-b border-muted-brass/30 pb-1 cursor-pointer hover:border-muted-brass transition-colors"
                    >
                      View Spaces
                    </span>
                  </div>
                </div>

                {/* Right Column: Giant handcrafted lifestyle scene */}
                <div className="col-span-1 lg:col-span-5">
                  <div className="relative rounded-3xl overflow-hidden border border-border-color shadow-sm bg-soft-linen flex items-center justify-center h-fit max-h-fit">
                    <img
                      src="/hero.webp"
                      alt="Aarasta premium sunlit interior setup"
                      referrerPolicy="no-referrer"
                      style={{ maxHeight: "100%" }}
                      className="w-full h-auto object-contain transition-transform duration-1000 hover:scale-101 select-none"
                    />
                    
                    {/* Soft natural ambient blur overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/10 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="py-24 bg-warm-ivory border-t border-border-color overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="space-y-4 max-w-lg">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass font-medium">
                    New Collections
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
                    New Arrivals
                  </h2>
                </div>
                <p className="text-sm text-sec-text max-w-xs leading-relaxed">
                  Fresh additions handcrafted in India, designed to bring warmth and timeless elegance to your daily life.
                </p>
              </div>

              {/* Pinterest-like grid for New Arrivals */}
              <PinterestGrid
                items={newArrivals.map((prod) => ({
                  id: prod.id,
                  title: prod.title,
                  category: prod.tag,
                  image: prod.image,
                  price: prod.price,
                  productDetail: masterProducts[prod.id],
                }))}
                onItemClick={setSelectedProduct}
                savedIds={savedIds}
                onToggleSave={handleToggleSave}
                enableInfiniteScroll={false}
              />

            </div>
          </section>

          {/* Interactive Hotspot Room Section */}
          <InteractiveRoom
            onSelectProduct={setSelectedProduct}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
          />

          {/* Featured Expanding Collections Accordion */}
          <FeaturedCollections />

          {/* Journal Articles Magazine Grid */}
          <JournalSection onPostClick={setActiveJournalPost} />

          {/* Residential Testimonials Full Bleed slider */}
          <Testimonials />

          {/* Community Instagram borderless grid */}
          <InstagramSection />
        </>
      )}

      {/* Footer Section */}
      <footer className="bg-rich-charcoal text-warm-ivory py-20 border-t border-warm-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Col 1: Brand & Desc */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h2 className="text-3xl font-serif tracking-[0.25em] text-warm-ivory">AARASTA</h2>
            <p className="text-xs text-warm-ivory/60 leading-relaxed max-w-sm">
              A contemporary Indian studio partnering with generation-guided craft circles to build furniture, stoneware, and sculptural fixtures that anchor spaces.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 border border-warm-ivory/10 rounded-full hover:border-warm-ivory hover:text-muted-brass transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-warm-ivory/10 rounded-full hover:border-warm-ivory hover:text-muted-brass transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest font-mono text-muted-brass font-medium">EXPLORE</h4>
            <ul className="space-y-2 text-xs text-warm-ivory/70 font-sans">
              <li>
                <button 
                  onClick={() => {
                    setActiveTab("gallery");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} 
                  className="hover:text-warm-ivory cursor-pointer text-left"
                >
                  Discovery Board
                </button>
              </li>
              <li><button onClick={() => handleScrollToSection("interactive-room")} className="hover:text-warm-ivory cursor-pointer text-left">Interactive Room</button></li>
              <li><button onClick={() => handleScrollToSection("featured-collections")} className="hover:text-warm-ivory cursor-pointer text-left">Curated Collections</button></li>
              <li><button onClick={() => handleScrollToSection("journal-section")} className="hover:text-warm-ivory cursor-pointer text-left">Our Journal</button></li>
            </ul>
          </div>

          {/* Col 3: Support Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest font-mono text-muted-brass font-medium">STUDIO</h4>
            <ul className="space-y-2 text-xs text-warm-ivory/70 font-sans">
              <li><a href="#" className="hover:text-warm-ivory">Custom Orders</a></li>
              <li><a href="#" className="hover:text-warm-ivory">Our Craft Circles</a></li>
              <li><a href="#" className="hover:text-warm-ivory">Product Care</a></li>
              <li><a href="#" className="hover:text-warm-ivory">Press & Media</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Box */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="text-[9px] uppercase tracking-widest font-mono text-muted-brass font-medium">NEWSLETTER</h4>
            <p className="text-xs text-warm-ivory/60 leading-relaxed">
              Subscribe to get our latest articles, product launches, and updates directly in your inbox. No spam.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="pt-2">
              {newsletterSubscribed ? (
                <p className="text-xs text-muted-brass italic font-serif">Thank you. You are added to the ledger.</p>
              ) : (
                <div className="flex border-b border-warm-ivory/20 focus-within:border-muted-brass transition-colors duration-300 pb-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-transparent border-none text-xs text-warm-ivory placeholder-warm-ivory/40 focus:outline-none pr-4"
                  />
                  <button type="submit" className="text-muted-brass hover:text-warm-ivory cursor-pointer" aria-label="Subscribe">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-warm-ivory/10 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-warm-ivory/40 gap-4">
          <span>© 2026 AARASTA ATELIER PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-warm-ivory">TERMS OF CURATION</a>
            <a href="#" className="hover:text-warm-ivory">PRIVACY DIRECTIVES</a>
          </div>
        </div>
      </footer>

      {/* Saves / Curation Drawer */}
      <SavesDrawer
        isOpen={savesOpen}
        onClose={() => setSavesOpen(false)}
        savedItems={savedProductsList}
        onRemoveItem={handleRemoveSavedItem}
        onSelectItem={setSelectedProduct}
      />

      {/* Immersive Product Details Sheet Overlay */}
      <ImmersivePanel
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isSaved={selectedProduct ? savedIds.includes(selectedProduct.id) : false}
        onToggleSave={handleToggleSave}
        onSelectProduct={setSelectedProduct}
      />

      {/* Editorial Journal Article Overlay */}
      <AnimatePresence>
        {activeJournalPost && (
          <JournalReader
            post={activeJournalPost}
            onClose={() => setActiveJournalPost(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
