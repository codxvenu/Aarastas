import React, { useState, useEffect } from "react";
import { Bookmark, Menu, X, ArrowRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  savedCount: number;
  onOpenSaves: () => void;
  onScrollToSection: (sectionId: string) => void;
  activeTab: "home" | "gallery";
  onChangeTab: (tab: "home" | "gallery") => void;
}

export default function Navbar({
  savedCount,
  onOpenSaves,
  onScrollToSection,
  activeTab,
  onChangeTab,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", isTab: true, value: "home" as const },
    { label: "Discovery Board", isTab: true, value: "gallery" as const },
    { label: "Interactive Room", isTab: false, id: "interactive-room" },
    { label: "Collections", isTab: false, id: "featured-collections" },
    { label: "Journal", isTab: false, id: "journal-section" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out border-b ${
          isScrolled
            ? "bg-warm-ivory/95 backdrop-blur-md py-4 border-border-color"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Home & Discovery Board Tabs */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em]">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.isTab && item.value) {
                    onChangeTab(item.value);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`transition-colors duration-300 cursor-pointer relative group py-1 ${
                  item.isTab && activeTab === item.value
                    ? "text-muted-brass font-bold"
                    : "text-sec-text hover:text-rich-charcoal"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[1px] bg-muted-brass transition-all duration-500 ${
                  item.isTab && activeTab === item.value ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Center: Elegant Branding */}
          <button
            onClick={() => {
              onChangeTab("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-rich-charcoal hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            AARASTA
          </button>

          {/* Right: Section Scroll Targets & Favorites */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-sec-text mr-4">
              {navItems.slice(2).map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.id) {
                      onScrollToSection(item.id);
                    }
                  }}
                  className="hover:text-muted-brass transition-colors duration-300 cursor-pointer relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-muted-brass transition-all duration-500 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Saved Items Trigger */}
            <button
              onClick={onOpenSaves}
              className="relative p-2 text-rich-charcoal hover:text-muted-brass transition-colors duration-300 cursor-pointer flex items-center gap-1.5"
              aria-label="View Saved Items"
            >
              <Bookmark className="w-[18px] h-[18px] stroke-[1.25]" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-muted-brass text-[9px] font-mono text-warm-ivory animate-fade-in">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-rich-charcoal hover:text-muted-brass transition-colors duration-300 cursor-pointer"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-rich-charcoal/40 backdrop-blur-sm z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-[340px] bg-warm-ivory p-8 shadow-2xl flex flex-col justify-between border-l border-border-color"
            >
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-border-color">
                  <span className="font-serif tracking-[0.2em] text-lg text-rich-charcoal">
                    AARASTA
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 hover:text-muted-brass transition-colors duration-300"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                <div className="flex flex-col gap-6 py-12">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        // Delay slightly to allow menu closing animation to play smoothly
                        setTimeout(() => {
                          if (item.isTab && item.value) {
                            onChangeTab(item.value);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          } else if (item.id) {
                            onScrollToSection(item.id);
                          }
                        }, 250);
                      }}
                      className="text-left font-serif text-2xl text-rich-charcoal hover:text-muted-brass transition-colors duration-300 cursor-pointer py-1"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border-color">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSaves();
                  }}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-soft-linen text-[11px] uppercase tracking-[0.15em] text-rich-charcoal hover:bg-border-color transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 stroke-[1.5]" />
                    Saved Items ({savedCount})
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
