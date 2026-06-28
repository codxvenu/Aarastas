import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { homeTestimonials } from "../data";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? homeTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === homeTestimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = homeTestimonials[activeIdx];

  return (
    <section className="relative h-[650px] md:h-[550px] bg-rich-charcoal overflow-hidden group">
      {/* Background slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={activeTestimonial.image}
            alt={`Spaces curated by ${activeTestimonial.author}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Heavy vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-rich-charcoal via-rich-charcoal/40 to-rich-charcoal/20 pointer-events-none" />

      {/* Core content wrapper */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-16 md:py-20 z-10 text-warm-ivory">
        {/* Header decoration */}
        <div className="flex items-center gap-2.5">
          <Quote className="w-5 h-5 text-muted-brass" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-warm-ivory/80">
            Residences in Dialog
          </span>
        </div>

        {/* Big centered quote block */}
        <div className="max-w-3xl my-auto space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="font-serif text-2xl md:text-4xl leading-relaxed text-warm-ivory tracking-wide">
                {activeTestimonial.quote}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-[1px] bg-muted-brass w-8" />
                <p className="text-xs uppercase tracking-widest font-mono text-warm-ivory/90">
                  {activeTestimonial.author} — <span className="text-muted-brass">{activeTestimonial.location}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel slide controls */}
        <div className="flex items-center justify-between border-t border-warm-ivory/10 pt-6">
          <div className="flex gap-2 font-mono text-[10px] text-warm-ivory/60">
            <span>0{activeIdx + 1}</span>
            <span>/</span>
            <span>0{homeTestimonials.length}</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-warm-ivory/20 hover:border-warm-ivory text-warm-ivory hover:text-muted-brass bg-rich-charcoal/30 backdrop-blur-xs transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-warm-ivory/20 hover:border-warm-ivory text-warm-ivory hover:text-muted-brass bg-rich-charcoal/30 backdrop-blur-xs transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
