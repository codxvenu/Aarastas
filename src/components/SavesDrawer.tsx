import React, { useState } from "react";
import { X, Trash2, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProductDetail } from "../types";

interface SavesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: ProductDetail[];
  onRemoveItem: (id: string) => void;
  onSelectItem: (product: ProductDetail) => void;
}

export default function SavesDrawer({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onSelectItem,
}: SavesDrawerProps) {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquirySent(true);
      setTimeout(() => {
        setInquirySent(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-rich-charcoal/40 backdrop-blur-xs"
          />

          {/* Drawer content */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="w-screen max-w-md bg-warm-ivory shadow-2xl flex flex-col border-l border-border-color"
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-border-color flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl tracking-wider text-rich-charcoal">
                    Atelier Curation
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-sec-text mt-1">
                    Your Saved Artifacts & Inspiration
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 hover:text-muted-brass transition-colors duration-300 cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar space-y-6">
                {savedItems.length === 0 ? (
                  <div className="h-[250px] flex flex-col items-center justify-center text-center">
                    <p className="font-serif text-lg italic text-sec-text">
                      No curated items yet.
                    </p>
                    <p className="text-xs text-sec-text/70 mt-2 max-w-[240px]">
                      Explore our editorial gallery and save details that resonate with your space.
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 text-[10px] uppercase tracking-[0.2em] px-5 py-2.5 bg-soft-linen text-rich-charcoal rounded-xl border border-border-color hover:bg-border-color transition-colors duration-300 cursor-pointer"
                    >
                      Browse Gallery
                    </button>
                  </div>
                ) : (
                  savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-6 border-b border-border-color/60 last:border-b-0 group"
                    >
                      <div className="w-20 h-24 bg-soft-linen rounded-lg overflow-hidden shrink-0 border border-border-color">
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <button
                              onClick={() => {
                                onSelectItem(item);
                                onClose();
                              }}
                              className="text-left font-serif text-base text-rich-charcoal hover:text-muted-brass transition-colors duration-300 cursor-pointer"
                            >
                              {item.title}
                            </button>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-sec-text/40 hover:text-red-700 transition-colors duration-300 p-1 cursor-pointer"
                              title="Remove from saves"
                            >
                              <Trash2 className="w-3.5 h-3.5 stroke-[1.5]" />
                            </button>
                          </div>
                          <p className="text-[10px] text-sec-text tracking-wide mt-0.5 font-mono">
                            {item.category} • {item.price}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            onSelectItem(item);
                            onClose();
                          }}
                          className="text-left text-[10px] text-muted-brass uppercase tracking-widest font-medium hover:opacity-80 transition-opacity duration-300 flex items-center gap-1 cursor-pointer mt-2"
                        >
                          Read Story & Specs
                        </button>
                      </div>
                    </div>
                  ))
                )}

                {/* Inquiry Form (Shown only if items exist) */}
                {savedItems.length > 0 && (
                  <div className="mt-12 bg-card-bg p-6 rounded-2xl border border-border-color relative overflow-hidden">
                    {inquirySent ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6 flex flex-col items-center justify-center"
                      >
                        <div className="w-10 h-10 rounded-full bg-muted-brass/10 flex items-center justify-center text-muted-brass mb-3">
                          <Check className="w-5 h-5 stroke-[2]" />
                        </div>
                        <h4 className="font-serif text-lg text-rich-charcoal">Inquiry Forwarded</h4>
                        <p className="text-xs text-sec-text mt-2 max-w-[280px] leading-relaxed">
                          Our atelier design consultant will reach out via email within 24 hours to discuss customization, viewing appointments, or physical catalogs.
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <h4 className="font-serif text-lg text-rich-charcoal mb-1">
                          Inquire with Curator
                        </h4>
                        <p className="text-[10px] text-sec-text uppercase tracking-wider mb-6">
                          Receive bespoke pricing, fabric swatches, & dimensions
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <label className="block text-[9px] uppercase tracking-widest text-sec-text mb-1.5 font-mono">
                              Your Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-2.5 text-xs bg-warm-ivory border border-border-color rounded-xl text-rich-charcoal focus:outline-none focus:border-muted-brass transition-colors duration-300"
                              placeholder="Elena Rostova"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-widest text-sec-text mb-1.5 font-mono">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-2.5 text-xs bg-warm-ivory border border-border-color rounded-xl text-rich-charcoal focus:outline-none focus:border-muted-brass transition-colors duration-300"
                              placeholder="elena@studio.com"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-widest text-sec-text mb-1.5 font-mono">
                              Atelier Notes
                            </label>
                            <textarea
                              rows={3}
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              className="w-full px-4 py-2.5 text-xs bg-warm-ivory border border-border-color rounded-xl text-rich-charcoal focus:outline-none focus:border-muted-brass transition-colors duration-300 resize-none"
                              placeholder="I'd love to request limestone wash swatches and ask about custom lengths..."
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rich-charcoal text-warm-ivory text-[10px] uppercase tracking-[0.15em] font-medium hover:bg-muted-brass transition-colors duration-300 cursor-pointer disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              "Whispering to Atelier..."
                            ) : (
                              <>
                                <Send className="w-3 h-3" />
                                Initiate Curator Consult
                              </>
                            )}
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
