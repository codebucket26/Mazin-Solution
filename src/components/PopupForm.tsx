"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function PopupForm() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    if (pathname === "/connect") return;

    // Opens after 3 seconds when the layout mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const service = formData.get('service');

    const text = `*New Quick Enquiry*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Interested In:* ${service}`;
    const whatsappNumber = "966533224176";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    setFormStatus("success");
    setTimeout(() => {
      setIsOpen(false);
      setFormStatus("idle");
    }, 2000);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 200,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0, scale: 0.95, y: 40 }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } }
  };

  if (pathname === "/connect") return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
          {/* Enhanced Backdrop with deep blur and gradient */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md cursor-pointer"
          />
          
          {/* Modal Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row cursor-default border border-white/20"
          >
            {/* Close Button - Positioned absolutely to span over the entire modal */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-brand-dark md:text-white/80 md:hover:text-white hover:text-brand-orange bg-white/50 md:bg-black/20 backdrop-blur-md hover:bg-white md:hover:bg-black/40 p-2 rounded-full transition-all z-50 shadow-sm"
            >
              <X size={20} />
            </button>

            {/* Left Image Side - Hidden on small mobile, visible on tablet+ */}
            <div className="hidden md:block w-1/2 relative bg-brand-dark overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src="/images/hero_1.png" 
                  alt="Expert Solutions" 
                  fill 
                  quality={90}
                  className="object-cover opacity-80"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay" />
              
              <motion.div 
                variants={itemVariants}
                className="absolute bottom-10 left-10 right-10"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="text-white font-heading font-bold text-xl">Premium Service</h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Partner with industry leaders. We deliver uncompromised quality and speed for your most critical operations.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Form Side */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12 relative bg-brand-light">
              {/* Subtle background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <motion.div variants={itemVariants}>
                  <h3 className="text-3xl sm:text-4xl font-heading font-black text-brand-dark mb-2">
                    Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">Connect</span>
                  </h3>
                  <p className="text-brand-gray mb-8">
                    Fill out the quick form below and our experts will reach out immediately.
                  </p>
                </motion.div>

                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <Send size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-dark mb-2">Request Sent!</h4>
                    <p className="text-brand-gray">We&apos;re redirecting you to WhatsApp...</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <motion.div variants={itemVariants} className="space-y-4">
                      {/* Floating Label Input - Name */}
                      <div className="relative group">
                        <input 
                          type="text" 
                          id="popup-name" 
                          name="name" 
                          required
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all peer text-brand-dark placeholder-transparent shadow-sm hover:border-gray-300"
                          placeholder="Your Name"
                        />
                        <label htmlFor="popup-name" className="absolute left-5 -top-2.5 bg-white px-2 text-xs font-bold text-brand-gray uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-orange rounded">
                          Your Name
                        </label>
                      </div>

                      {/* Floating Label Input - Phone */}
                      <div className="relative group">
                        <input 
                          type="tel" 
                          id="popup-phone" 
                          name="phone" 
                          required
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all peer text-brand-dark placeholder-transparent shadow-sm hover:border-gray-300"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="popup-phone" className="absolute left-5 -top-2.5 bg-white px-2 text-xs font-bold text-brand-gray uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-orange rounded">
                          Phone Number
                        </label>
                      </div>

                      {/* Premium Select */}
                      <div className="relative">
                        <select 
                          id="popup-service" 
                          name="service" 
                          required
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all text-brand-dark appearance-none shadow-sm hover:border-gray-300 cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled>Select Service of Interest...</option>
                          <option value="Equipment Rentals">Equipment Rentals</option>
                          <option value="Manpower Supply">Manpower Supply</option>
                          <option value="Transportation & Logistics">Transportation & Logistics</option>
                          <option value="Trading & Materials">Trading & Material Supply</option>
                          <option value="Portacabins">Portacabins & Containers</option>
                          <option value="Heavy Lifting">Heavy Lifting</option>
                          <option value="Sandblasting and coating">Sandblasting and coating</option>
                          <option value="Other">Other / General Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                          <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                            <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Button 
                        type="submit" 
                        disabled={formStatus === "submitting"}
                        className="w-full h-14 mt-6 rounded-2xl bg-brand-dark hover:bg-brand-orange text-white text-lg font-bold shadow-[0_10px_30px_-10px_rgba(9,38,70,0.5)] hover:shadow-[0_10px_30px_-10px_rgba(255,102,0,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {formStatus === "submitting" ? "Connecting..." : "Request Free Consultation"}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
