import Link from "next/link";
import { FaBuilding, FaDraftingCompass, FaTools, FaHome, FaTasks, FaShieldAlt } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      icon: <FaBuilding className="w-6 h-6 text-yellow-500" />,
      title: "Building Construction",
      desc: "Full-scale construction for commercial skyscrapers, residential complexes, and industrial warehouses with premium structural integrity.",
    },
    {
      icon: <FaDraftingCompass className="w-6 h-6 text-yellow-500" />,
      title: "Architectural Design",
      desc: "Modern 2D/3D modeling and layout design services engineered for optimal spatial utilization and aesthetic appeal.",
    },
    {
      icon: <FaTools className="w-6 h-6 text-yellow-500" />,
      title: "Civil Engineering",
      desc: "Site development, foundation planning, soil analysis, and infrastructure engineering executed by certified professionals.",
    },
    {
      icon: <FaHome className="w-6 h-6 text-yellow-500" />,
      title: "Interior & Renovation",
      desc: "High-end interior design and structural remodeling to modernize existing spaces without compromising safety.",
    },
    {
      icon: <FaTasks className="w-6 h-6 text-yellow-500" />,
      title: "Project Management",
      desc: "End-to-end supervision, material procurement, budgeting, and quality checks to ensure timely completion.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-yellow-500" />,
      title: "Structural Audits",
      desc: "Rigorous safety inspections and integrity audits for older or damaged structures to enforce safety compliance.",
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flat & Minimalist Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our <span className="text-yellow-500">Services</span>
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Comprehensive construction, design, and management solutions tailored for projects of all sizes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-yellow-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{srv.desc}</p>
              </div>
              <Link
                href="/quote"
                className="text-yellow-500 text-xs sm:text-sm font-semibold hover:underline inline-flex items-center"
              >
                Inquire Now <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}