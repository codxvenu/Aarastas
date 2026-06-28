import React, { useState } from "react";
import { PenTool, Hammer, Paintbrush, ShieldCheck, Box } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { processSteps } from "../data";

export default function ProcessTimeline() {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // Map icons to each index
  const stepIcons = [
    <PenTool className="w-5 h-5 stroke-[1.25]" />,
    <Hammer className="w-5 h-5 stroke-[1.25]" />,
    <Paintbrush className="w-5 h-5 stroke-[1.25]" />,
    <ShieldCheck className="w-5 h-5 stroke-[1.25]" />,
    <Box className="w-5 h-5 stroke-[1.25]" />
  ];

  return (
    <section className="py-24 bg-warm-ivory border-y border-border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-lg">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
              The Atelier Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
              Honoring the Slow Process
            </h2>
          </div>
          <p className="text-sm text-sec-text max-w-xs leading-relaxed">
            From the initial charcoal graphite sketch to custom linen wrapping. True luxury is an architecture of steps.
          </p>
        </div>

        {/* Modular Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Editorial Step Details Display */}
          <div className="col-span-1 lg:col-span-5 space-y-8 bg-card-bg p-8 md:p-12 rounded-3xl border border-border-color min-h-[350px] flex flex-col justify-between relative overflow-hidden">
            {/* Top watermarked background number */}
            <span className="absolute -right-4 -bottom-10 text-[180px] font-serif font-semibold text-border-color/15 leading-none select-none">
              {processSteps[activeStepIdx].step}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIdx}
                initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="space-y-6 relative z-10"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-warm-ivory text-muted-brass border border-border-color/60">
                  {stepIcons[activeStepIdx]}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-brass">
                    Stage {processSteps[activeStepIdx].step}
                  </span>
                  <h3 className="font-serif text-2xl text-rich-charcoal mt-2">
                    {processSteps[activeStepIdx].title}
                  </h3>
                </div>
                <p className="text-sm text-sec-text leading-relaxed">
                  {processSteps[activeStepIdx].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-border-color/60 flex justify-between text-[10px] font-mono text-sec-text">
              <span>AARASTA ATELIER SYSTEM</span>
              <span>VERIFIED STAGE</span>
            </div>
          </div>

          {/* Right Side: Timeline Steps Controller */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-5 relative">
            {/* Vertical connector line in background */}
            <div className="absolute left-[23px] top-6 bottom-6 w-[1px] bg-border-color pointer-events-none hidden sm:block" />

            {processSteps.map((step, idx) => {
              const isActive = activeStepIdx === idx;
              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setActiveStepIdx(idx)}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`flex items-start gap-6 p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-card-bg border-border-color translate-x-2 shadow-xs"
                      : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Step Bullet Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center border font-mono text-xs z-10 transition-all duration-500 ${
                      isActive
                        ? "bg-rich-charcoal text-warm-ivory border-rich-charcoal"
                        : "bg-warm-ivory text-sec-text border-border-color"
                    }`}
                  >
                    {step.step}
                  </div>

                  <div className="space-y-1 py-1">
                    <h4
                      className={`font-serif text-lg tracking-wide transition-colors duration-300 ${
                        isActive ? "text-rich-charcoal" : "text-sec-text"
                      }`}
                    >
                      {step.name}
                    </h4>
                    <p className="text-xs text-sec-text leading-relaxed line-clamp-1">
                      {step.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
