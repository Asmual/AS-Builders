import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "10 Critical Factors to Consider Before Commercial Construction",
      excerpt: "Understanding soil testing, zoning laws, and budget optimization before breaking ground.",
      date: "May 12, 2026",
      author: "Engr. Asmual",
      image: "/images/hero.png",
    },
    {
      id: 2,
      title: "Sustainable Building Materials Shaping Modern Architecture",
      excerpt: "How eco-friendly concrete and energy-efficient designs cut long-term operating costs.",
      date: "April 28, 2026",
      author: "AS Builders Team",
      image: "/images/hero.png",
    },
    {
      id: 3,
      title: "The Importance of Regular Structural Safety Audits",
      excerpt: "Preventive maintenance strategies to ensure aging buildings remain earthquake resilient.",
      date: "April 15, 2026",
      author: "Safety Division",
      image: "/images/hero.png",
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flat & Minimalist Title Header (No Separate Background/Box) */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Latest Insights & <span className="text-yellow-500">Blogs</span>
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Stay updated with construction trends, safety tips, and engineering innovations.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-yellow-500/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-yellow-500" /> {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="text-yellow-500" /> {blog.author}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2 hover:text-yellow-500 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-yellow-500 font-semibold text-xs sm:text-sm hover:underline inline-flex items-center"
                >
                  Read Article <span className="ml-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}