import React from "react";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { journalPosts } from "../data";

export default function JournalSection() {
  return (
    <section id="journal-section" className="py-24 bg-warm-ivory border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-lg">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-brass">
              Our Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-rich-charcoal leading-tight">
              Our Journal
            </h2>
          </div>
          <p className="text-sm text-sec-text max-w-xs leading-relaxed">
            Articles exploring beautiful home designs, history of crafts, and tips for caring for your items.
          </p>
        </div>

        {/* Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {journalPosts.map((post) => (
            <article key={post.id} className="flex flex-col justify-between group cursor-pointer">
              <div className="space-y-5">
                {/* Image Wrap */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border-color bg-soft-linen relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  />
                  {/* Subtle hover blur or tint */}
                  <div className="absolute inset-0 bg-rich-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-mono text-sec-text">
                  <span className="text-muted-brass font-medium">{post.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>

                {/* Title and Excerpt */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-rich-charcoal group-hover:text-muted-brass transition-colors duration-300 tracking-wide leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-sec-text leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="pt-6 mt-6 border-t border-border-color/60 flex items-center justify-between text-[10px] font-mono text-sec-text uppercase tracking-widest group-hover:text-rich-charcoal transition-colors">
                <span>{post.readTime}</span>
                <span className="flex items-center gap-1 font-medium text-muted-brass">
                  Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
