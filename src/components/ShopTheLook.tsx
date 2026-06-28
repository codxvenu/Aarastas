import React, { useState } from "react";
import { ArrowUpRight, Bookmark, Tag, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { shopTheLookRooms, masterProducts } from "../data";
import { ProductDetail } from "../types";

interface ShopTheLookProps {
  onSelectProduct: (product: ProductDetail) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export default function ShopTheLook({
  onSelectProduct,
  savedIds,
  onToggleSave,
}: ShopTheLookProps) {
  const [activeRoomId, setActiveRoomId] = useState("look-living");
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(null);

  const activeRoom = shopTheLookRooms.find((r) => r.id === activeRoomId) || shopTheLookRooms[0];

  return (
    <section className="py-24 bg-soft-linen border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-lg">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
              Atelier Assemblage
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
              Shop the Look
            </h2>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="flex gap-4 border-b border-border-color pb-1 shrink-0">
            {shopTheLookRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomId(room.id);
                  setHoveredProductIndex(null);
                }}
                className={`pb-3 text-xs uppercase tracking-[0.2em] relative transition-all duration-300 cursor-pointer font-medium ${
                  activeRoomId === room.id
                    ? "text-rich-charcoal font-semibold"
                    : "text-sec-text hover:text-rich-charcoal"
                }`}
              >
                {room.title.split(" in ")[0]}
                {activeRoomId === room.id && (
                  <motion.div
                    layoutId="activeLookTab"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-muted-brass"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Side: Interwoven Hotspot Canvas */}
          <div className="col-span-1 lg:col-span-8 relative rounded-3xl overflow-hidden border border-border-color aspect-[16/10] bg-warm-ivory group">
            <img
              src={activeRoom.roomImage}
              alt={activeRoom.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.015]"
            />

            {/* Hotspot Indicators */}
            {activeRoom.products.map((p, idx) => {
              const fullProd = masterProducts[p.id];
              const isHovered = hoveredProductIndex === idx;
              return (
                <div
                  key={p.id}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  onMouseEnter={() => setHoveredProductIndex(idx)}
                  onMouseLeave={() => setHoveredProductIndex(null)}
                >
                  <button
                    onClick={() => fullProd && onSelectProduct(fullProd)}
                    className="relative flex items-center justify-center cursor-pointer group focus:outline-none"
                  >
                    {/* Ring ripple */}
                    <span
                      className={`absolute inline-flex h-8 w-8 rounded-full bg-warm-ivory/50 opacity-75 transition-all duration-500 scale-100 ${
                        isHovered ? "scale-125 bg-muted-brass/40" : ""
                      }`}
                    />
                    {/* Center point */}
                    <div
                      className={`relative flex items-center justify-center h-4.5 w-4.5 rounded-full shadow transition-all duration-500 border ${
                        isHovered
                          ? "bg-rich-charcoal text-warm-ivory border-rich-charcoal scale-110"
                          : "bg-warm-ivory text-rich-charcoal border-border-color"
                      }`}
                    >
                      <Tag className="w-2.5 h-2.5" />
                    </div>

                    {/* Miniature floating tooltip details */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -4, scale: 0.95 }}
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-rich-charcoal px-3 py-2 rounded-lg text-warm-ivory text-[10px] tracking-wider whitespace-nowrap z-20 shadow-xl flex items-center gap-2"
                        >
                          <span className="font-serif">{p.name}</span>
                          <span className="text-[9px] font-mono opacity-80 border-l border-warm-ivory/20 pl-2">
                            {p.price}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Side: List of elements in this Look */}
          <div className="col-span-1 lg:col-span-4 flex flex-col justify-between space-y-8 bg-card-bg p-8 rounded-3xl border border-border-color">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-brass">
                  The Design Narrative
                </span>
                <h3 className="font-serif text-2xl text-rich-charcoal mt-1 tracking-wide">
                  {activeRoom.title}
                </h3>
                <p className="text-xs text-sec-text mt-3 leading-relaxed">
                  {activeRoom.description}
                </p>
              </div>

              <div className="h-[1px] bg-border-color/60" />

              {/* Product Mini Cards */}
              <div className="space-y-4">
                <span className="text-[9px] font-mono uppercase tracking-widest text-sec-text">
                  Incorporate items
                </span>
                {activeRoom.products.map((p, idx) => {
                  const fullProd = masterProducts[p.id];
                  const isHovered = hoveredProductIndex === idx;
                  if (!fullProd) return null;

                  return (
                    <div
                      key={p.id}
                      onMouseEnter={() => setHoveredProductIndex(idx)}
                      onMouseLeave={() => setHoveredProductIndex(null)}
                      onClick={() => onSelectProduct(fullProd)}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? "bg-warm-ivory border-muted-brass/50 translate-x-1"
                          : "bg-transparent border-border-color/60 hover:bg-warm-ivory/50"
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        <div className="w-10 h-12 bg-soft-linen rounded-md overflow-hidden border border-border-color/40 shrink-0">
                          <img
                            src={fullProd.image}
                            alt={fullProd.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm text-rich-charcoal font-medium">
                            {fullProd.title.replace("The ", "").replace("Mridang ", "")}
                          </h4>
                          <p className="text-[10px] font-mono text-sec-text mt-0.5">
                            {fullProd.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSave(fullProd.id);
                          }}
                          className={`p-1.5 rounded-md transition-colors ${
                            savedIds.includes(fullProd.id)
                              ? "text-muted-brass"
                              : "text-sec-text/40 hover:text-rich-charcoal"
                          }`}
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </button>
                        <ArrowUpRight className="w-4 h-4 text-sec-text/40 group-hover:text-rich-charcoal" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border-color/60 text-center">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-sec-text">
                CURATED COMPOSITION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
