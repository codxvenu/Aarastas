import React, { useState, useRef } from "react";
import { Plus, X, Bookmark, BookmarkCheck, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Hotspot, ProductDetail } from "../types";
import { roomHotspots, interactiveRoomImage } from "../data";

interface InteractiveRoomProps {
  onSelectProduct: (product: ProductDetail) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export default function InteractiveRoom({
  onSelectProduct,
  savedIds,
  onToggleSave,
}: InteractiveRoomProps) {
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeHotspot = roomHotspots.find((h) => h.id === activeHotspotId);

  return (
    <section id="interactive-room" className="py-24 bg-soft-linen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
            Styled Rooms
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
            Explore Our Spaces
          </h2>
          <div className="h-[1px] bg-border-color w-12 mx-auto my-4" />
          <p className="text-sm text-sec-text leading-relaxed">
            See how our handcrafted furniture and decor pieces come together to create a warm, beautiful home. Hover or tap the glowing circles to see each item.
          </p>
        </div>

        {/* Fullscreen Interactive Canvas */}
        <div
          ref={containerRef}
          className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-border-color shadow-sm bg-warm-ivory group"
        >
          <img
            src={interactiveRoomImage}
            alt="Bespoke styled living room sanctuary"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none transition-transform duration-1000 group-hover:scale-[1.02]"
          />

          {/* Dark scrim when a card is open for concentration */}
          <div
            className={`absolute inset-0 bg-rich-charcoal/10 transition-opacity duration-700 pointer-events-none ${
              activeHotspotId ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Hotspot Dots */}
          {roomHotspots.map((hotspot) => {
            const isActive = activeHotspotId === hotspot.id;
            return (
              <div
                key={hotspot.id}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                {/* Pulsing ring outer */}
                <button
                  onClick={() => setActiveHotspotId(isActive ? null : hotspot.id)}
                  className="relative flex items-center justify-center cursor-pointer group focus:outline-none"
                  aria-label={`View details for ${hotspot.productDetail.title}`}
                >
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-muted-brass/40 opacity-75 animate-ping" />
                  <span
                    className={`relative flex h-5 w-5 items-center justify-center rounded-full border border-warm-ivory transition-all duration-500 shadow-md ${
                      isActive
                        ? "bg-rich-charcoal text-warm-ivory rotate-45 scale-110"
                        : "bg-muted-brass text-warm-ivory hover:scale-110"
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </button>
              </div>
            );
          })}

          {/* Floating Information Card - Anchored or Centered overlay */}
          <AnimatePresence>
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute z-20 w-[90%] sm:w-[340px] bg-card-bg p-5 rounded-2xl border border-border-color shadow-xl flex flex-col gap-4"
                style={{
                  // Position near the dot if space allows, otherwise center-bottom
                  left: activeHotspot.x > 70 ? "auto" : `${activeHotspot.x + 3}%`,
                  right: activeHotspot.x > 70 ? `${100 - activeHotspot.x + 3}%` : "auto",
                  top: activeHotspot.y > 75 ? `${activeHotspot.y - 42}%` : `${activeHotspot.y - 10}%`,
                  transform: "translateY(-50%)"
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <div className="w-14 h-16 rounded-lg overflow-hidden border border-border-color shrink-0">
                      <img
                        src={activeHotspot.productDetail.image}
                        alt={activeHotspot.productDetail.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[8px] font-mono uppercase tracking-widest text-muted-brass">
                        {activeHotspot.productDetail.category}
                      </span>
                      <h4 className="font-serif text-sm text-rich-charcoal font-medium mt-0.5">
                        {activeHotspot.productDetail.title}
                      </h4>
                      <p className="text-xs font-mono text-sec-text mt-0.5">
                        {activeHotspot.productDetail.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveHotspotId(null)}
                    className="p-1 hover:text-muted-brass transition-colors duration-300 cursor-pointer text-sec-text/60"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-sec-text leading-relaxed italic">
                  {activeHotspot.productDetail.subtitle}
                </p>

                <div className="h-[1px] bg-border-color/60" />

                <div className="flex gap-2.5">
                  <button
                    onClick={() => onSelectProduct(activeHotspot.productDetail)}
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-rich-charcoal hover:bg-muted-brass text-warm-ivory text-[9px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 cursor-pointer"
                  >
                    View Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onToggleSave(activeHotspot.productDetail.id)}
                    className={`p-2 rounded-lg border transition-all duration-300 cursor-pointer ${
                      savedIds.includes(activeHotspot.productDetail.id)
                        ? "border-muted-brass/30 bg-muted-brass/5 text-muted-brass"
                        : "border-border-color text-sec-text hover:text-rich-charcoal hover:border-rich-charcoal"
                    }`}
                    title={
                      savedIds.includes(activeHotspot.productDetail.id)
                        ? "Remove from Favorites"
                        : "Save to Favorites"
                    }
                  >
                    <Bookmark className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
