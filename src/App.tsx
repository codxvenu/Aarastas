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

import { masterProducts, masonryTiles, newArrivals } from "./data";
import { ProductDetail, MasonryTile } from "./types";

export default function App() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savesOpen, setSavesOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState<"home" | "gallery">("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

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
  const categories = ["All", "Ceramics", "Brass Decor", "Furniture", "Wall Art", "Textiles", "Accessories"];

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
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 [column-fill:_balance] w-full">
              {filteredTiles.map((tile) => {
                const isSaved = savedIds.includes(tile.id);

                return (
                  <div
                    key={tile.id}
                    onClick={() => setSelectedProduct(tile.productDetail)}
                    className="break-inside-avoid mb-8 group relative rounded-3xl overflow-hidden border border-border-color bg-card-bg cursor-pointer shadow-xs transition-all duration-500 hover:shadow-md hover:border-muted-brass/40"
                  >
                    <div className="relative overflow-hidden w-full">
                      {/* Media render */}
                      {tile.type === "video" ? (
                        <div className="w-full relative">
                          <video
                            src={tile.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={tile.poster}
                            className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                          />
                          <div className="absolute top-4 left-4 p-1.5 rounded-full bg-rich-charcoal/30 backdrop-blur-xs text-warm-ivory z-10">
                            <Play className="w-3 h-3 fill-warm-ivory" />
                          </div>
                        </div>
                      ) : (
                        <img
                          src={tile.image}
                          alt={tile.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103"
                        />
                      )}

                      {/* Subtle aesthetic dark frame vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/40 via-rich-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      {/* Interactive Top Actions (Saves) */}
                      <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Avoid triggering full dialog
                            handleToggleSave(tile.id);
                          }}
                          className={`p-2.5 rounded-full backdrop-blur-md shadow border transition-all duration-300 cursor-pointer ${
                            isSaved
                              ? "bg-muted-brass/10 text-muted-brass border-muted-brass/20"
                              : "bg-warm-ivory/80 text-rich-charcoal border-border-color/30 hover:bg-warm-ivory"
                          }`}
                          title={isSaved ? "Saved" : "Save item"}
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 stroke-[1.5]" />
                          ) : (
                            <Bookmark className="w-4 h-4 stroke-[1.5]" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Metadata Revealed on Hover */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="text-left">
                          <span className="text-[8px] font-mono uppercase tracking-widest text-muted-brass bg-warm-ivory/90 px-2 py-0.5 rounded">
                            {tile.category}
                          </span>
                          <h4 className="font-serif text-lg text-warm-ivory mt-2 tracking-wide font-medium">
                            {tile.title}
                          </h4>
                        </div>
                        <div className="p-2 rounded-full bg-warm-ivory/95 text-rich-charcoal border border-border-color shrink-0 ml-2">
                          <ArrowUpRight className="w-4 h-4 stroke-[1.25]" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      ) : (
        /* Home Tab View */
        <>
          {/* Main Magazine Hero Section */}
          <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden bg-warm-ivory">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Big typography statement */}
                <div className="col-span-1 lg:col-span-5 space-y-8 md:pr-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass block">
                    Est. 2016 • Handcrafted in New Delhi
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
                <div className="col-span-1 lg:col-span-7">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border-color shadow-sm bg-soft-linen">
                    <img
                      src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=80"
                      alt="Aarasta premium sunlit interior setup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 hover:scale-101 select-none"
                    />
                    
                    {/* Soft natural ambient blur overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/10 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Floating statistics banner below hero */}
              <div className="mt-20 pt-10 border-t border-border-color/80 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-serif text-rich-charcoal font-semibold">1,500+</p>
                  <p className="text-[10px] uppercase tracking-wider text-sec-text font-mono">Handcrafted Pieces</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-serif text-rich-charcoal font-semibold">50+</p>
                  <p className="text-[10px] uppercase tracking-wider text-sec-text font-mono">Generational Artisans</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-serif text-rich-charcoal font-semibold">10+</p>
                  <p className="text-[10px] uppercase tracking-wider text-sec-text font-mono">Years in Community</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl md:text-3xl font-serif text-rich-charcoal font-semibold">Made in India</p>
                  <p className="text-[10px] uppercase tracking-wider text-sec-text font-mono">Traditional Heritage</p>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {newArrivals.map((prod) => {
                  const fullDetail = masterProducts[prod.id];
                  return (
                    <div
                      key={prod.id}
                      onClick={() => fullDetail && setSelectedProduct(fullDetail)}
                      className="group relative cursor-pointer aspect-[3/4] bg-soft-linen rounded-3xl overflow-hidden border border-border-color shadow-xs transition-all duration-500 hover:shadow-md"
                    >
                      <img
                        src={prod.image}
                        alt={prod.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                      />
                      {/* Absolute Corner Category/Tag */}
                      <span className="absolute top-4 left-4 text-[8px] font-mono uppercase tracking-widest text-rich-charcoal bg-warm-ivory border border-border-color px-2.5 py-1 rounded transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                        {prod.tag}
                      </span>

                      {/* Corner Price Tag overlay shown ONLY on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/60 via-rich-charcoal/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 pointer-events-none">
                        <div className="bg-warm-ivory/95 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-border-color shadow-sm text-left">
                          <p className="text-[10px] uppercase font-mono tracking-wider text-muted-brass font-bold leading-none">{prod.price}</p>
                          <p className="text-[11px] font-serif text-rich-charcoal mt-1 line-clamp-1">{prod.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

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
          <JournalSection />

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

    </div>
  );
}
