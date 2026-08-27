import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// This would typically come from a CMS or API
interface ServiceData {
  title: string;
  image: string;
  overview: string;
  capabilities: string[];
  process: { step: string; desc: string; }[];
}

const serviceData: Record<string, ServiceData> = {
  "equipment-rentals": {
    title: "Heavy Equipment & Machinery Rentals",
    image: "/images/equipment_rental_hero.jpg",
    overview: "Mazin Solution offers a comprehensive and modern fleet of heavy machinery and construction equipment for rent across Saudi Arabia. We provide flexible short-term and long-term rental agreements designed to keep your projects on schedule and within budget. All our equipment undergoes rigorous maintenance and safety inspections to guarantee optimal performance, reliability, and compliance with the highest industry standards.",
    capabilities: [
      "Extensive Fleet of Earthmoving Machinery (Excavators, Bulldozers)",
      "Lifting & Material Handling (Cranes, Forklifts, Telehandlers)",
      "Power Generation & Industrial Compressors",
      "24/7 On-Site Maintenance & Technical Support"
    ],
    process: [
      { step: "Consultation & Assessment", desc: "Expert advice to select the right machinery for your specific project requirements." },
      { step: "Flexible Contracting", desc: "Tailored rental agreements accommodating both short-term tasks and multi-year mega projects." },
      { step: "Rapid Logistics", desc: "Timely and safe transportation of equipment directly to your job site." },
      { step: "Continuous Support", desc: "Dedicated on-site servicing and rapid replacement protocols to prevent downtime." }
    ]
  },
  "manpower-supply": {
    title: "Expert Manpower Supply Services",
    image: "/images/manpower_supply_hero.jpg",
    overview: "Mazin Solution provides top-tier manpower supply solutions across the region, catering to construction, engineering, and industrial sectors. We specialize in providing highly skilled, semi-skilled, and unskilled labor tailored to your project's unique demands. Our rigorous screening and onboarding processes ensure that every worker is fully qualified, compliant with local safety regulations, and ready to drive your operations efficiently, minimizing downtime and maximizing productivity.",
    capabilities: [
      "Certified Skilled and Semi-skilled Labor Provision",
      "Technical, Engineering, and Supervisory Personnel",
      "Administrative and Site Support Staff",
      "Flexible Short-Term and Long-Term Contracting Terms"
    ],
    process: [
      { step: "Requirement Analysis", desc: "In-depth consultation to understand your specific staffing needs and project timelines." },
      { step: "Sourcing & Screening", desc: "Rigorous vetting, background checks, and skills evaluation of candidates." },
      { step: "Deployment", desc: "Seamless onboarding, site-specific safety orientations, and timely deployment." },
      { step: "Ongoing Management", desc: "Continuous performance monitoring, payroll management, and dedicated support." }
    ]
  },
  "transportation-and-logistics": {
    title: "Transportation and Logistics",
    image: "/images/hero_2.png",
    overview: "Mazin Solution provides robust transportation and logistics services designed to move your materials, equipment, and personnel safely and efficiently. We manage complex supply chains, coordinate fleet movements, and handle heavy haulage to ensure that all project requirements arrive precisely when and where they are needed.",
    capabilities: [
      "Heavy Haulage and Equipment Transport",
      "Material Delivery and Supply Chain Management",
      "Personnel Transportation Services",
      "Route Planning and Logistics Optimization"
    ],
    process: [
      { step: "Logistics Planning", desc: "Detailed route surveys and load planning to ensure the safest and fastest delivery." },
      { step: "Fleet Allocation", desc: "Assigning the appropriate specialized vehicles based on cargo weight and dimensions." },
      { step: "Execution & Tracking", desc: "Real-time tracking of shipments and secure transportation across the region." },
      { step: "Delivery & Unloading", desc: "Safe arrival, unloading, and site handover supported by our logistics team." }
    ]
  },
  "trading-and-material-supply": {
    title: "Trading and Material Supply",
    image: "/images/trading_solutions_hero.jpg",
    overview: "Mazin Solution delivers robust, end-to-end procurement and trading services. We specialize in sourcing and supplying premium construction materials, heavy-duty industrial equipment, and specialized products. With our extensive global network and advanced logistics infrastructure, we guarantee that all essential materials are delivered to your site on time and strictly according to project specifications.",
    capabilities: [
      "Bulk Supply of Building & Construction Materials",
      "Specialized Industrial Products & Heavy Machinery Procurement",
      "Global Vendor Management & Supply Chain Optimization",
      "End-to-End Logistics & Custom Clearance Handling"
    ],
    process: [
      { step: "Strategic Sourcing", desc: "Identifying and partnering with reliable, certified global and local manufacturers." },
      { step: "Competitive Procurement", desc: "Negotiating the best rates to ensure cost-effective delivery without compromising quality." },
      { step: "Advanced Logistics", desc: "Managing complex freight, warehousing, and just-in-time delivery to project sites." },
      { step: "Quality Assurance", desc: "Conducting rigorous inspections to verify that all materials meet strict international standards." }
    ]
  },
  "portacabin-and-container-services": {
    title: "Portacabin and Container Services",
    image: "/images/portacabin_av_hero.jpg",
    overview: "Mazin Solution delivers state-of-the-art modular portacabins and container solutions designed for modern construction sites and temporary accommodations. We provide premium, custom-built temporary facilities—including site offices, mess halls, and accommodations—to ensure your team remains productive and comfortable in any environment.",
    capabilities: [
      "Custom Modular Portacabins & Site Office Design",
      "Temporary Workforce Accommodations",
      "Mobile Medical & Security Units",
      "Rapid Deployment Facilities"
    ],
    process: [
      { step: "Design & Consultation", desc: "Collaborating with you to customize cabin layouts and define requirements." },
      { step: "Precision Fabrication", desc: "Constructing high-quality, durable modular units to your exact specifications." },
      { step: "Seamless Installation", desc: "Safe, efficient on-site setup and utility connection." },
      { step: "Ongoing Maintenance", desc: "Providing dedicated technical support and servicing to keep facilities running smoothly." }
    ]
  },
  "heavy-lifting-service": {
    title: "Heavy Lifting Service",
    image: "/images/hero_4.png",
    overview: "Mazin Solution specializes in complex heavy lifting and rigging operations. Equipped with a fleet of high-capacity cranes and specialized lifting equipment, our certified operators and rigging engineers execute the most demanding lifts with precision and absolute adherence to safety protocols.",
    capabilities: [
      "High-Capacity Crane Operations",
      "Complex Rigging and Slinging Engineering",
      "Industrial Plant Relocation and Equipment Placement",
      "Comprehensive Lift Planning and 3D Simulation"
    ],
    process: [
      { step: "Site Survey", desc: "Evaluating ground conditions, lift radius, and potential hazards at the project site." },
      { step: "Lift Planning", desc: "Engineering detailed lift plans, including load calculations and equipment selection." },
      { step: "Mobilization", desc: "Deploying certified cranes, rigging gear, and expert personnel to the site." },
      { step: "Safe Execution", desc: "Executing the lift under the supervision of seasoned rigging engineers with strict safety compliance." }
    ]
  },
  "default": {
    title: "Specialized Engineering Services",
    image: "/images/image.png",
    overview: "Our specialized services are tailored to meet the unique demands of your project. We bring together industry experts, state-of-the-art technology, and proven methodologies to deliver outstanding results.",
    capabilities: [
      "Advanced System Integration",
      "Custom Engineering Solutions",
      "Quality Assurance and Testing",
      "Lifecycle Maintenance"
    ],
    process: [
      { step: "Consultation", desc: "Understanding project requirements." },
      { step: "Planning", desc: "Developing a strategic roadmap." },
      { step: "Implementation", desc: "Executing the plan with precision." },
      { step: "Support", desc: "Ongoing maintenance and support." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug] || { ...serviceData["default"], title: slug.replace(/-/g, ' ') };

  return {
    title: `${data.title} | Mazin Solution`,
    description: data.overview.substring(0, 155) + "...",
    openGraph: {
      title: `${data.title} | Mazin Solution`,
      description: data.overview.substring(0, 155) + "...",
      images: [data.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = serviceData[slug] || { ...serviceData["default"], title: slug.replace(/-/g, ' ') };

  return (
    <main className="flex flex-col min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center overflow-hidden bg-brand-dark">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedReveal direction="right" className="max-w-2xl">
            <Link href="/services" className="text-brand-orange hover:text-white transition-colors mb-4 inline-flex items-center gap-2 font-semibold text-sm tracking-wider uppercase">
              <ArrowRight className="rotate-180" size={16} /> Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 capitalize leading-tight">
              {data.title}
            </h1>
            <div className="w-24 h-1.5 bg-brand-orange" />
          </AnimatedReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column - Content */}
            <div className="w-full lg:w-2/3">
              <AnimatedReveal direction="up">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Service Overview</h2>
                <p className="text-brand-gray text-lg leading-relaxed mb-12">
                  {data.overview}
                </p>

                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">Key Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                  {data.capabilities.map((cap: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-brand-light rounded-md border-l-4 border-brand-orange">
                      <CheckCircle2 className="text-brand-orange shrink-0 mt-0.5" size={20} />
                      <span className="font-semibold text-brand-dark">{cap}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8">Our Process</h3>
                <div className="space-y-8">
                  {data.process.map((proc: { step: string; desc: string; }, i: number) => (
                    <div key={i} className="flex gap-6 relative">
                      {i !== data.process.length - 1 && (
                        <div className="absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-gray-200" />
                      )}
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-heading font-bold shrink-0 z-10 shadow-md">
                        {i + 1}
                      </div>
                      <div className="pt-2 pb-6">
                        <h4 className="text-xl font-heading font-bold text-brand-dark mb-2">{proc.step}</h4>
                        <p className="text-brand-gray">{proc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedReveal>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              <AnimatedReveal direction="left" delay={0.2} className="sticky top-32">
                <div className="bg-brand-dark text-white p-8 rounded-lg shadow-xl border-t-4 border-brand-orange">
                  <h3 className="text-2xl font-heading font-bold mb-4">Need this service?</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Contact our specialists today to discuss your project requirements and receive a detailed consultation.
                  </p>
                  <Button asChild className="w-full bg-brand-orange hover:bg-brand-gold hover:text-brand-dark text-white rounded-none py-6 text-lg">
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <h4 className="font-heading font-semibold mb-4">Other Services</h4>
                    <ul className="space-y-3">
                      {[
                        "Equipment Rentals",
                        "Manpower Supply",
                        "Transportation and Logistics",
                        "Trading and Material Supply",
                        "Portacabin and Container Services",
                        "Heavy Lifting Service"
                      ].map(s => (
                        <li key={s}>
                          <Link href={`/services/${s.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                            <span className="w-1 h-1 bg-brand-orange rounded-full" /> {s}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedReveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
