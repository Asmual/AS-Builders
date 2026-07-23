import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-150 flex items-center justify-start">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero.png"
          alt="AS Builders Construction Site"
          fill
          className="object-cover"
          priority // Important for LCP (Largest Contentful Paint) optimization
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-md">
            Building Strong <br />
            Foundations for the Future
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-gray-200 drop-shadow-sm">
            Trusted residential & commercial construction experts delivering quality, safety, and on-time results.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/quote"
              className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3.5 rounded-md font-semibold transition-all shadow-lg hover:shadow-yellow-500/20"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white/60 hover:border-white px-8 py-3.5 rounded-md font-semibold transition-all backdrop-blur-sm"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}