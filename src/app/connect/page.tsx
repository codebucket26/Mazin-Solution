import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, MessageCircle, Share2 } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with Mazin Solution",
  description: "Digital business card and contact links for Mazin Solution - Industrial supply and services.",
};

export default function ConnectPage() {
  const links = [
  
    {
      title: "WhatsApp",
      subtitle: "+966 54 750 5541",
      icon: MessageCircle,
      href: "https://wa.me/966533224176",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "hover:border-green-500/50"
    },
    {
      title: "General Email",
      subtitle: "info@mazinsolution.com",
      icon: Mail,
      href: "mailto:info@mazinsolution.com",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      border: "hover:border-brand-orange/50"
    },
    {
      title: "Sales Email",
      subtitle: "sales@mazinsolution.com",
      icon: Mail,
      href: "mailto:sales@mazinsolution.com",
      color: "text-brand-gold",
      bg: "bg-brand-gold/10",
      border: "hover:border-brand-gold/50"
    },
    {
      title: "Website",
      subtitle: "www.mazinsolution.com",
      icon: Globe,
      href: "https://www.mazinsolution.com",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/50"
    },
    {
      title: "Head Office",
      subtitle: "Al Khater building, Al Jabal Street, Jubail City Center",
      icon: MapPin,
      href: "https://maps.google.com/?q=Al+Khater+building,+Al+Jabal+Street+near+Saudi+Airlines,+Jubail+City+Center,+Al+Jubail+31951,+Saudi+Arabia",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "hover:border-red-500/50",
      isLocation: true
    }
  ];

  return (
    <main className="min-h-[100dvh] bg-brand-dark flex flex-col items-center pt-48 pb-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
      <div className="absolute inset-0 bg-[url('/images/hero_5.png')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="w-full max-w-lg z-10 flex flex-col items-center w-full">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-10 w-full">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-3 tracking-tight">
            Mazin Solution
          </h1>
          <p className="text-brand-orange font-medium text-base md:text-lg mb-2 tracking-wide uppercase text-center flex flex-col gap-1.5">
            <span>Industrial supply and services</span>
            <span className="text-sm text-gray-400 normal-case">(توريد وخدمات صناعية)</span>
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full mt-5 shadow-[0_0_15px_rgba(255,102,0,0.5)]" />
        </div>

        {/* Links Grid */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <div key={index}>
              <a
                href={link.href}
                target={link.title === "Call Us" || link.title === "WhatsApp" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 ${link.border} shadow-lg hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-full ${link.bg} flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className={`${link.color}`} size={24} />
                </div>
                
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-white font-semibold text-lg truncate group-hover:text-brand-orange transition-colors">
                    {link.title}
                  </h3>
                  <p className={`text-sm text-gray-400 ${link.isLocation ? 'line-clamp-2' : 'truncate'}`}>
                    {link.subtitle}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white/50 group-hover:text-white group-hover:bg-brand-orange transition-all duration-300">
                  <Share2 size={18} className="opacity-0 group-hover:opacity-100 absolute transform scale-50 group-hover:scale-100 transition-all duration-300" />
                  <span className="opacity-100 group-hover:opacity-0 transition-opacity duration-300 transform translate-x-0 group-hover:translate-x-4">→</span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
     

      </div>
    </main>
  );
}
