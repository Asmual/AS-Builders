import Image from "next/image";
import Link from "next/link";
import { FaHardHat, FaAward } from "react-icons/fa";

export default function AboutPage() {
  const stats = [
    { label: "Completed Projects", value: "250+" },
    { label: "Happy Clients", value: "180+" },
    { label: "Experienced Engineers", value: "45+" },
    { label: "Years of Excellence", value: "12+" },
  ];

  return (
    <div className="pt-24 pb-12 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flat & Minimalist Title Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-yellow-500">AS Builders</span>
          </h1>
          <p className="mt-1 text-sm text-gray-400">
            Engineering safety, durability, and architectural excellence in every structure we construct.
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-12">
          {/* Story & Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white leading-snug">
                Constructing Commercial & Residential Landmarks Since 2014
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                At AS Builders, we combine innovative engineering practices with high-grade construction materials to bring architectural blueprints into reality. From sustainable urban towers to luxury residences, our focus remains on safety, structural strength, and time-bound project delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center space-x-3">
                  <FaHardHat className="text-yellow-500 w-7 h-7 shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm">Certified Safety Standards</span>
                </div>
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center space-x-3">
                  <FaAward className="text-yellow-500 w-7 h-7 shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm">Award-Winning Engineering</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-800">
              <Image
                src="/images/hero.png"
                alt="Engineers working at site"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 text-center hover:border-yellow-500/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-linear-to-r from-yellow-500 to-amber-600 rounded-xl p-6 sm:p-8 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">Ready to start your next project?</h3>
              <p className="text-xs sm:text-sm font-medium opacity-90 mt-0.5">Get in touch with our expert structural engineers today.</p>
            </div>
            <Link
              href="/quote"
              className="bg-slate-950 text-white hover:bg-slate-900 px-6 py-2.5 rounded-lg font-bold text-sm transition-colors shrink-0"
            >
              Request a Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}