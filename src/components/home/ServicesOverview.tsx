import { FaDraftingCompass, FaRoad, FaLayerGroup, FaBuilding } from "react-icons/fa";
import Image from "next/image";

export default function ServicesOverview() {
  const services = [
    {
      icon: <FaDraftingCompass className="w-8 h-8 text-yellow-500" />,
      title: "Site Work & Preparation",
      description:
        "Complete site preparation services to get projects ready for construction, including grading, layout, and groundwork.",
    },
    {
      icon: <FaRoad className="w-8 h-8 text-yellow-500" />,
      title: "Paving & Parking Lots",
      description:
        "Full-service paving solutions for commercial properties, including parking lots, repairs, and new installations.",
    },
    {
      icon: <FaLayerGroup className="w-8 h-8 text-yellow-500" />,
      title: "Sidewalks & Concrete Flatwork",
      description:
        "Durable and code-compliant sidewalks, walkways, and flatwork for commercial and multi-family properties.",
    },
    {
      icon: <FaBuilding className="w-8 h-8 text-yellow-500" />,
      title: "Building Foundations",
      description:
        "Strong and reliable foundation systems designed to support long-lasting residential & commercial structures.",
    },
  ];

  return (
    <section className="relative py-16 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Image with Blur only (No Opacity Reduction) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Services-Background.jpg" 
          alt="Services Background"
          fill
          className="object-cover filter blur-[1px]"
        />
        {/* Soft Dark Overlay to keep text readable over full-opacity image */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-500/20 text-yellow-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-yellow-500/30 mb-3 backdrop-blur-md">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Comprehensive <span className="text-yellow-500">Concrete Solutions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Specialized concrete services from site work and foundations to flatwork, paving, and long-term property maintenance.
          </p>
        </div>

        {/* Cards Grid with Left Border Accent & Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 border-l-4 border-l-yellow-500 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:border-l-yellow-500 flex flex-col shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}