"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Equipment Rentals", href: "/services/equipment-rentals", image: "/images/equipment_rental_hero.jpg" },
      { name: "Manpower Supply", href: "/services/manpower-supply", image: "/images/manpower_supply_hero.jpg" },
      { name: "Transportation and Logistics", href: "/services/transportation-and-logistics", image: "/images/hero_2.png" },
      { name: "Trading and Material Supply", href: "/services/trading-and-material-supply", image: "/images/trading_solutions_hero.jpg" },
      { name: "Portacabin & Container Services", href: "/services/portacabin-and-container-services", image: "/images/portacabin_av_hero.jpg" },
      { name: "Heavy Lifting Service", href: "/services/heavy-lifting-service", image: "/images/hero_4.png" },
    ]
  },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={cn("fixed left-0 right-0 z-[60] transition-all duration-500 flex justify-center", isScrolled ? "top-0" : (isHome ? "top-4 md:top-6" : "top-0 md:top-6"))}>
      <header
        className={cn(
          "transition-all duration-500 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-4"
            : cn(
                "py-4",
                isHome 
                  ? "max-w-7xl mx-4 lg:mx-8 xl:mx-auto rounded-2xl md:rounded-full bg-black/20 backdrop-blur-lg border border-white/10 text-white shadow-2xl" 
                  : "bg-white text-brand-dark py-6 shadow-sm"
              )
        )}
      >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="relative w-72 h-16 md:w-80 md:h-20">
            <Image
              src={isHome && !isScrolled ? "/images/whitelogo.png" : "/images/mazinlogo.jpeg"}
              alt="Mazin Solution"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.hasDropdown && pathname.startsWith(link.href));
            
            return (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-brand-orange flex items-center gap-1 py-4",
                    !isScrolled && isHome ? "text-gray-200" : "text-brand-gray",
                    isActive && "text-brand-orange"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  <span
                    className={cn(
                      "absolute bottom-2 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full",
                      isActive && "w-full"
                    )}
                  />
                </Link>

                {/* Desktop Mega Menu Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-2xl rounded-xl p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 grid grid-cols-3 gap-4 border border-gray-100">
                    <div className="col-span-3 pb-4 mb-2 border-b border-gray-100 flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-heading font-black text-brand-dark">Our Services</h3>
                        <p className="text-brand-gray text-sm mt-1">Explore our comprehensive engineering solutions.</p>
                      </div>
                      <Link href="/services" className="text-brand-orange text-sm font-semibold hover:underline">
                        View All Services &rarr;
                      </Link>
                    </div>
                    {link.dropdownItems?.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="group/item relative rounded-lg overflow-hidden h-32 block bg-gray-100"
                      >
                        <Image src={item.image!} alt={item.name} fill className="object-cover group-hover/item:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="font-semibold text-sm leading-tight block group-hover/item:text-brand-orange transition-colors">{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block relative group/cta">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full blur opacity-40 group-hover/cta:opacity-75 transition duration-500"></div>
          <Button asChild variant="default" className="relative rounded-full bg-brand-orange hover:bg-brand-dark text-white font-bold px-8 py-6 h-auto transition-all duration-300 transform group-hover/cta:-translate-y-0.5 border border-brand-orange/50">
            <Link href="/contact" className="flex items-center gap-2">
              Get a Quote
              <ArrowRight size={18} className="group-hover/cta:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden z-50 relative",
            !isScrolled && isHome ? "text-white" : "text-brand-dark"
          )}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>
      </header>
    </div>

    {/* Mobile Menu Background Overlay */}
    <div 
      className={cn(
        "fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[70] lg:hidden transition-opacity duration-500",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Menu Side Drawer */}
    <div className={cn(
      "fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-[80] shadow-2xl flex flex-col px-6 lg:hidden overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
      isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <div className="flex justify-end pt-6 pb-6 mb-2">
        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-brand-dark hover:bg-gray-100 rounded-full transition-colors">
          <X size={28} />
        </button>
      </div>
      <div className="flex flex-col gap-6 w-full">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col border-b border-gray-100 pb-4">
                <div className="flex justify-between items-center">
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (!link.hasDropdown) setIsMobileMenuOpen(false);
                    }}
                    className="text-2xl font-heading font-bold text-brand-dark hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileServicesOpen(!mobileServicesOpen);
                      }}
                      className="p-2 text-brand-dark bg-gray-50 rounded-full hover:bg-brand-orange/10 transition-colors"
                    >
                      <ChevronDown size={20} className={cn("transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {link.hasDropdown && (
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileServicesOpen ? "max-h-[600px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-brand-orange/30">
                      {link.dropdownItems?.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 group"
                        >
                          <div className="relative w-16 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                            <Image src={item.image!} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <span className="font-semibold text-brand-gray group-hover:text-brand-orange transition-colors text-sm">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button
              asChild
              variant="default"
              size="lg"
              className="mt-6 relative rounded-full w-full h-14 text-lg bg-brand-orange hover:bg-brand-dark transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,102,0,0.5)] group/mobcta overflow-hidden border border-brand-orange/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/contact" className="flex items-center justify-center gap-2 z-10">
                Get a Quote
                <ArrowRight size={20} className="group-hover/mobcta:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
    </>
  );
}
