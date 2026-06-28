import React from "react";
import { instagramPosts } from "../data";
import { Camera, Heart } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="py-24 bg-warm-ivory border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
            Digital Canvas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
            Atmospheres Shared
          </h2>
          <div className="h-[1px] bg-border-color w-12 mx-auto my-4" />
          <p className="text-sm text-sec-text leading-relaxed">
            Real lived spaces curated by our global design community. Mention <span className="text-rich-charcoal font-medium">@aarasta_atelier</span> to share yours.
          </p>
        </div>

        {/* Instagram Grid - Organic Masonry with NO borders or margins */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className={`relative overflow-hidden rounded-2xl group border border-border-color/20 cursor-pointer ${post.ratio}`}
            >
              <img
                src={post.image}
                alt="Community living styling"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />

              {/* Minimalist Hover Cover */}
              <div className="absolute inset-0 bg-rich-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-4 text-warm-ivory">
                <div className="flex justify-end">
                  <Camera className="w-4 h-4 text-warm-ivory/80 stroke-[1.5]" />
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono">
                  <Heart className="w-3.5 h-3.5 fill-warm-ivory stroke-warm-ivory" /> Saved Atmos
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
