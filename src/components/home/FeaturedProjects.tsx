import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaTag, FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Skyline Commercial Center",
      category: "Commercial Construction",
      location: "Dhaka, Bangladesh",
      image: "/images/hero.png",
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "Residential Architecture",
      location: "Chittagong, Bangladesh",
      image: "/images/hero.png",
    },
    {
      id: 3,
      title: "Industrial Warehouse Hub",
      category: "Steel & Civil Engineering",
      location: "Gazipur, Bangladesh",
      image: "/images/hero.png",
    },
  ];

  return (
    <section className="relative py-10 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Image from Public Folder*/}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/FeaturedProjects.jpg"
          alt="Featured Projects Background"
          fill
          className="object-cover filter blur-[1px]"
        />
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block bg-yellow-500/10 text-yellow-500 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-yellow-500/20 mb-3">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-xl">
              Take a look at some of our recently delivered engineering and construction landmarks.
            </p>
          </div>

          {/* View All Projects Desktop Button */}
          <div className="hidden md:block">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-yellow-500 hover:text-yellow-400 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-yellow-500/40 px-5 py-3 rounded-lg transition-all duration-300 backdrop-blur-md"
            >
              View All Projects <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-yellow-500/50 rounded-xl overflow-hidden transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Image Container with Zoom Effect */}
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Tag Overlay */}
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-yellow-500 flex items-center gap-1.5 border border-white/10">
                    <FaTag className="w-2.5 h-2.5" />
                    {project.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-400 mt-2 gap-1.5">
                    <FaMapMarkerAlt className="text-yellow-500 shrink-0" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-5 pt-0">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-yellow-500 hover:underline"
                >
                  Explore Details <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-yellow-500 bg-slate-900/80 border border-slate-800 px-6 py-3 rounded-lg w-full justify-center backdrop-blur-md"
          >
            View All Projects <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}