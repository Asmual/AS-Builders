import Image from "next/image";
import { FaTag } from "react-icons/fa";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Skyline Business Tower",
      category: "Commercial",
      location: "Dhaka, Bangladesh",
      image: "/images/hero.png",
    },
    {
      id: 2,
      title: "Green Villa Residence",
      category: "Residential",
      location: "Chittagong, Bangladesh",
      image: "/images/hero.png",
    },
    {
      id: 3,
      title: "Metro Railway Extension",
      category: "Civil Infrastructure",
      location: "Sylhet, Bangladesh",
      image: "/images/hero.png",
    },
    {
      id: 4,
      title: "Apex Industrial Park",
      category: "Industrial",
      location: "Gazipur, Bangladesh",
      image: "/images/hero.png",
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flat & Minimalist Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Portfolio & <span className="text-yellow-500">Projects</span>
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Explore our showcase of completed residential, commercial, and engineering landmarks.
          </p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <div className="relative h-60 sm:h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-yellow-500 flex items-center gap-1.5 border border-white/10">
                  <FaTag className="w-2.5 h-2.5" />
                  {project.category}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}