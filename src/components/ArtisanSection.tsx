import React from "react";
import { Sparkles, Calendar, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { artisanStory, artisanVideoUrl, artisanBackupImage } from "../data";

export default function ArtisanSection() {
  return (
    <section id="artisan-story" className="py-24 bg-soft-linen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Cinematic Video block */}
          <div className="col-span-1 lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-color shadow-sm bg-rich-charcoal">
            <video
              src={artisanVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-85 select-none"
              poster={artisanBackupImage}
            />
            {/* Soft Warm Gradiation Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal/30 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 text-warm-ivory z-10 flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-muted-brass animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-warm-ivory/80">
                Live Studio Loop • Kutch, India
              </p>
            </div>
          </div>

          {/* Right Side: High Typography Story */}
          <div className="col-span-1 lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
                Direct Collaboration
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
                Craft is a Dialogue
              </h2>
            </div>

            <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-rich-charcoal/90 border-l-2 border-muted-brass pl-6">
              {artisanStory.quote}
            </p>

            <div className="space-y-6 text-sm text-sec-text leading-relaxed">
              <p className="font-medium text-rich-charcoal">
                {artisanStory.lead}
              </p>
              {artisanStory.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Micro-milestone timeline */}
            <div className="pt-8 border-t border-border-color space-y-6">
              <h4 className="font-serif text-xs uppercase tracking-widest text-rich-charcoal flex items-center gap-2">
                <Users className="w-4 h-4 stroke-[1.5] text-muted-brass" /> Heritage Footprints
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {artisanStory.timeline.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-muted-brass px-2 py-0.5 rounded bg-warm-ivory border border-border-color">
                        {item.year}
                      </span>
                      <h5 className="font-serif text-sm font-semibold text-rich-charcoal">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-sec-text leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
