import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah L.",
      project: "Custom Home Build",
      quote: "AS Builders exceeded our expectations. Fantastic work and exceptional attention to detail!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "James R.",
      project: "Office Renovation",
      quote: "Highly professional and always on schedule. The structural quality is top-tier.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Linda M.",
      project: "Apartment Development",
      quote: "Top-notch quality and great communication throughout the entire construction process.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative py-10 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Image with Dark Overlay & Low Opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials-bg.jpg"
          alt="Modern Architecture Background"
          fill
          className="object-cover filter "
        />
        {/* Soft Gradient Overlay to blend seamlessly with your dark theme */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-850 via-slate-950/20 to-slate-950/80" />
      </div>

      <div className="relative z-10 ml-7 max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
            Client Testimonials
          </h2>
          <div className="h-px bg-slate-800 flex-1 hidden sm:block"></div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 shadow-2xl hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-yellow-500 font-medium">{item.project}</p>
                    <div className="w-8 h-0.5 bg-yellow-500 mt-1 rounded-full"></div>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed pt-2">
                  <FaQuoteLeft className="inline text-yellow-500/40 text-xs mr-1" />
                  &quot;{item.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Button (Matches Screenshot Yellow Button) */}
        <div className="text-center sm:text-left">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-8 py-3.5 rounded-lg text-sm transition-all duration-300 shadow-lg shadow-yellow-500/10 hover:scale-105"
          >
            Request a Free Quote <FaChevronRight className="text-xs" />
          </Link>
        </div>

      </div>
    </section>
  );
}