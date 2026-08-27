"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "NCC", logo: "/images/clients/ncc.jpg" },
  { name: "Wide Horizon", logo: "/images/clients/widehorizon.png" },
  { name: "AIS", logo: "/images/clients/AIS.jpg" },
  { name: "TCC", logo: "/images/clients/tcc.png" },
  { name: "Reda", logo: "/images/clients/reda.jpg" },
  { name: "Hyundai", logo: "/images/clients/Hyundai.png" },
  { name: "Tamimi", logo: "/images/clients/tamimi.png" },
  { name: "Sinopec", logo: "/images/clients/Sinopec.png" },
  { name: "Samsung", logo: "/images/clients/samsung.png" },
  { name: "L&T", logo: "/images/clients/landt.png" },
  { name: "Alfanar", logo: "/images/clients/alfanar.png" },
  { name: "Satorp", logo: "/images/clients/satorp.png" },
  { name: "Sabic", logo: "/images/clients/sabic.png" },
  { name: "Rawabi", logo: "/images/clients/rawabi.png" },
  { name: "Nesma & Partners", logo: "/images/clients/nesma-partners.png" },
  { name: "Nesma United", logo: "/images/clients/nesma-united.png" },
];

const row1 = clients.slice(0, 8);
const row2 = clients.slice(8, 16);

const orbits = [
  // Orbit 1: Radius 230, 4 items
  { radius: 230, items: clients.slice(0, 4), angles: [45, 135, 225, 315] },
  // Orbit 2: Radius 390, 6 items
  { radius: 390, items: clients.slice(4, 10), angles: [0, 60, 120, 180, 240, 300] },
  // Orbit 3: Radius 550, 6 items
  { radius: 550, items: clients.slice(10, 16), angles: [30, 90, 150, 210, 270, 330] },
];

const MobileClientCard = ({ client }: { client: any }) => (
  <div className="relative w-36 h-20 shrink-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] flex items-center justify-center p-4 mx-3">
    <div className="relative w-full h-full flex items-center justify-center">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-contain mix-blend-multiply opacity-80"
        sizes="144px"
      />
    </div>
  </div>
);

export function ClientsMarquee() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#fafafa]">
      
      {/* Title Section */}
      <div className="container mx-auto px-4 relative z-30 mb-2 md:mb-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark font-heading mb-4 tracking-tight">
            Trusted by the best
          </h2>
          <p className="text-brand-gray/70 text-lg font-medium mb-12 md:mb-0">
            Empowering visionary companies and industry leaders across the region.
          </p>
        </motion.div>
      </div>

      {/* Mobile Layout - Double Marquee (Only visible on screens smaller than md) */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 md:hidden py-4">
        {/* Edge Gradients for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />

        {/* First Marquee Track (Moves Left) */}
        <div className="flex w-fit animate-[marquee_30s_linear_infinite]">
          <div className="flex shrink-0">
            {row1.map((client, index) => (
              <MobileClientCard key={`row1-a-${index}`} client={client} />
            ))}
          </div>
          <div className="flex shrink-0">
            {row1.map((client, index) => (
              <MobileClientCard key={`row1-b-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Second Marquee Track (Moves Right) */}
        <div className="flex w-fit animate-[marquee-reverse_35s_linear_infinite] -ml-[50%]">
          <div className="flex shrink-0">
            {row2.map((client, index) => (
              <MobileClientCard key={`row2-a-${index}`} client={client} />
            ))}
          </div>
          <div className="flex shrink-0">
            {row2.map((client, index) => (
              <MobileClientCard key={`row2-b-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Orbit System (Only visible on md screens and larger) */}
      <div className="w-full overflow-hidden hidden md:flex justify-center items-center h-[850px] lg:h-[1050px] xl:h-[1300px] relative z-10">
        
        {/* Scaling wrapper for responsiveness */}
        <div className="relative w-[1200px] h-[1200px] scale-[0.65] lg:scale-[0.8] xl:scale-100 flex items-center justify-center origin-center">
          
          {/* Subtle Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white rounded-full blur-[80px] pointer-events-none" />

          {/* Draw Orbit Rings */}
          {orbits.map((orbit, i) => (
            <motion.div
              key={`ring-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="absolute rounded-full border border-gray-200/80"
              style={{
                width: orbit.radius * 2,
                height: orbit.radius * 2,
              }}
            />
          ))}

          {/* Center Element - Heading */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute z-30 w-[18rem] h-[18rem] bg-white rounded-full shadow-[0_0_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center p-8 text-center"
          >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-3">Our Network</span>
            <h3 className="text-4xl font-heading font-black text-brand-dark leading-tight">
              Industry <br/> Leaders
            </h3>
            {/* Pulsing ring behind center element */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-orange/20 animate-ping opacity-20" style={{ animationDuration: '4s' }} />
          </motion.div>

          {/* Place Nodes on Orbits */}
          {orbits.map((orbit, orbitIndex) => 
            orbit.items.map((client, itemIndex) => {
              const angle = orbit.angles[itemIndex];
              const rad = angle * (Math.PI / 180);
              const x = Math.cos(rad) * orbit.radius;
              const y = Math.sin(rad) * orbit.radius;

              return (
                <div key={`node-${orbitIndex}-${itemIndex}`}>
                  {/* Orbit dot marker */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + orbitIndex * 0.2 + itemIndex * 0.1 }}
                    className="absolute w-3 h-3 bg-gray-300 rounded-full z-10"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      x: '-50%',
                      y: '-50%',
                    }}
                  />

                  {/* Client Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15,
                      delay: 0.5 + orbitIndex * 0.2 + itemIndex * 0.1 
                    }}
                    style={{
                      position: 'absolute',
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      x: '-50%',
                      y: '-50%',
                    }}
                    className="z-20 hover:z-40"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ 
                        duration: 3.5 + (itemIndex % 3), // random-ish float speeds
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: (itemIndex * 0.4) // staggered start
                      }}
                      className="group bg-white/95 backdrop-blur-sm rounded-[2rem] px-6 py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.15)] hover:border-brand-orange/30 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative w-[6.5rem] h-10">
                        <Image 
                          src={client.logo} 
                          alt={client.name} 
                          fill 
                          className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
                          sizes="128px"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })
          )}
          
        </div>
      </div>
    </section>
  );
}
