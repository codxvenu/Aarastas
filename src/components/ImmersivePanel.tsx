import React, { useState, useEffect } from "react";
import { X, Bookmark, BookmarkCheck, ArrowLeft, ArrowRight, Heart, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProductDetail } from "../types";
import { masterProducts } from "../data";

interface ImmersivePanelProps {
  product: ProductDetail | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectProduct: (product: ProductDetail) => void;
}

export default function ImmersivePanel({
  product,
  onClose,
  isSaved,
  onToggleSave,
  onSelectProduct,
}: ImmersivePanelProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Scroll to top of panel on change of product
  useEffect(() => {
    setActiveImageIndex(0);
    if (product) {
      document.getElementById("immersive-scroll-container")?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [product]);

  if (!product) return null;

  // Gather all images (primary + secondary)
  const allImages = [product.image, ...product.secondaryImages];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 overflow-hidden bg-warm-ivory flex flex-col md:flex-row"
      >
        {/* Left Side: Elegant Photo Gallery - Fully Responsive */}
        <div className="w-full md:w-3/5 h-[40vh] md:h-full relative bg-soft-linen flex flex-col">
          {/* Main Display Image */}
          <div className="flex-1 relative overflow-hidden group">
            <motion.img
              key={product.id + "-" + activeImageIndex}
              initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src={allImages[activeImageIndex]}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/10 to-transparent pointer-events-none" />
          </div>

          {/* Thumbnail Controls */}
          {allImages.length > 1 && (
            <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-3 z-10">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-12 h-16 rounded-md overflow-hidden border transition-all duration-500 shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-muted-brass scale-105 shadow-md"
                      : "border-border-color opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} view ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Back button on top left of image for mobile ease */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 left-4 p-2.5 rounded-full bg-warm-ivory/80 backdrop-blur-md text-rich-charcoal border border-border-color/30 hover:bg-warm-ivory transition-all cursor-pointer z-10"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Right Side: Immersive Magazine Layout Text Sheet */}
        <div
          id="immersive-scroll-container"
          className="w-full md:w-2/5 h-[60vh] md:h-full overflow-y-auto no-scrollbar bg-warm-ivory border-t md:border-t-0 md:border-l border-border-color flex flex-col justify-between"
        >
          {/* Top Control Bar */}
          <div className="sticky top-0 bg-warm-ivory/90 backdrop-blur-md p-6 md:px-10 md:py-8 border-b border-border-color/60 flex items-center justify-between z-20">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-sec-text hover:text-rich-charcoal transition-colors duration-300 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" /> Close Journal
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => onToggleSave(product.id)}
                className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium py-1 px-3.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isSaved
                    ? "bg-muted-brass/10 text-muted-brass border border-muted-brass/20"
                    : "bg-soft-linen text-rich-charcoal border border-transparent hover:bg-border-color"
                }`}
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck className="w-3.5 h-3.5" /> Curated
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" /> Save to Curation
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Deep Editorial Body */}
          <div className="p-6 md:p-10 md:pb-16 flex-1 space-y-10">
            {/* Header / Category */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-brass font-mono">
                {product.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-rich-charcoal tracking-wide mt-2">
                {product.title}
              </h2>
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-sec-text mt-3">
                Crafted in India • <span className="text-rich-charcoal">{product.price}</span>
              </p>
            </div>

            {/* Split Decorative Rule */}
            <div className="h-[1px] bg-border-color w-12" />

            {/* Core Narrative / Story */}
            <div className="space-y-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-sec-text flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 stroke-[1.5]" /> The Artisan Narrative
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-rich-charcoal italic font-serif">
                {product.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-sec-text">
                {product.story}
              </p>
            </div>

            {/* Specifications Cards */}
            <div className="grid grid-cols-1 gap-6 bg-card-bg p-6 rounded-2xl border border-border-color">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-muted-brass font-mono">
                  Materials Used
                </span>
                <p className="text-xs text-rich-charcoal mt-1">{product.material}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-widest text-muted-brass font-mono">
                  Physical Dimensions
                </span>
                <p className="text-xs text-rich-charcoal mt-1 font-mono">{product.dimensions}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-widest text-muted-brass font-mono">
                  Technical Craft
                </span>
                <p className="text-xs text-rich-charcoal mt-1">{product.craftsmanship}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-widest text-muted-brass font-mono">
                  Atelier Styling
                </span>
                <p className="text-xs text-rich-charcoal mt-1 italic text-sec-text">{product.styling}</p>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-widest text-muted-brass font-mono">
                  Care Guidelines
                </span>
                <p className="text-xs text-rich-charcoal mt-1">{product.care}</p>
              </div>
            </div>

            {/* Complementary Artifacts / Multi-Item Exploration */}
            {product.complementaryIds.length > 0 && (
              <div className="space-y-4 pt-6">
                <h4 className="font-serif text-sm uppercase tracking-widest text-sec-text">
                  Complementary Elements
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {product.complementaryIds.map((compId) => {
                    const compProduct = masterProducts[compId];
                    if (!compProduct) return null;
                    return (
                      <button
                        key={compId}
                        onClick={() => onSelectProduct(compProduct)}
                        className="text-left group cursor-pointer focus:outline-none"
                      >
                        <div className="aspect-[4/5] bg-soft-linen rounded-xl overflow-hidden border border-border-color mb-2">
                          <img
                            src={compProduct.image}
                            alt={compProduct.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <h5 className="font-serif text-sm text-rich-charcoal group-hover:text-muted-brass transition-colors duration-300 truncate">
                          {compProduct.title}
                        </h5>
                        <p className="text-[10px] font-mono text-sec-text mt-0.5">
                          {compProduct.price}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer of the panel */}
          <div className="bg-soft-linen/50 p-6 md:px-10 md:py-8 border-t border-border-color text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-sec-text">
              Handcrafted in India • Designed for Eternity
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
