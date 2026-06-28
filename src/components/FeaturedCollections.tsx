import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { featuredCollections } from "../data";

export default function FeaturedCollections() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="featured-collections" className="py-24 bg-warm-ivory border-t border-border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
            Curated Spaces
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
            Our Featured Rooms
          </h2>
          <div className="h-[1px] bg-border-color w-12 mx-auto my-4" />
          <p className="text-sm text-sec-text leading-relaxed">
            Beautifully designed spaces. Hover over any collection to see the items and learn more about each space.
          </p>
        </div>

        {/* Expanding Accordion Ribbon Layout */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[480px] gap-4 w-full">
          {featuredCollections.map((collection) => {
            const isHovered = hoveredId === collection.id;
            return (
              <div
                key={collection.id}
                onMouseEnter={() => setHoveredId(collection.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative h-[300px] lg:h-full transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) overflow-hidden rounded-3xl border border-border-color group ${
                  hoveredId === null
                    ? "lg:flex-1"
                    : isHovered
                    ? "lg:flex-[2.8]"
                    : "lg:flex-[0.7] opacity-60"
                }`}
              >
                {/* Background Image */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/80 via-rich-charcoal/30 to-transparent transition-opacity duration-700" />

                {/* Editorial Text Overlay with backdrop-blur for improved text readability */}
                <div className="absolute inset-x-4 bottom-4 p-5 md:p-6 z-10 text-warm-ivory bg-rich-charcoal/45 backdrop-blur-md rounded-2xl border border-warm-ivory/15 shadow-lg flex flex-col justify-end transition-all duration-500 hover:bg-rich-charcoal/55">
                  {/* Top line: count */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-muted-brass font-bold bg-rich-charcoal/30 px-2.5 py-0.5 rounded">
                      {collection.count}
                    </span>
                  </div>

                  {/* Bottom details */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl md:text-2xl text-warm-ivory tracking-wide leading-tight">
                      {collection.title}
                    </h3>

                    {/* Expandable Description */}
                    <div
                      className={`transition-all duration-[600ms] overflow-hidden ${
                        isHovered ? "max-h-24 opacity-100 mt-2" : "lg:max-h-0 lg:opacity-0"
                      }`}
                    >
                      <p className="text-xs text-warm-ivory/90 leading-relaxed font-sans">
                        {collection.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-mono text-muted-brass pt-2 group-hover:text-warm-ivory transition-colors">
                      Explore Collection <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
