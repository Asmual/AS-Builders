import Image from "next/image";

export default function SectorsWeServe() {
  const sectors = [
    {
      title: "Commercial Developments",
      description: "Office buildings, retail centers, and mixed-use developments",
    },
    {
      title: "Hospitality",
      description: "Hotels, resorts, and hospitality facilities",
    },
    {
      title: "Multifamily",
      description: "Apartment complexes and residential developments",
    },
    {
      title: "Self Storage",
      description: "Storage facilities and warehouse structures",
    },
    {
      title: "Industrial & Warehouses",
      description: "Distribution centers and industrial buildings",
    },
    {
      title: "Retail Centers & National Tenants",
      description: "Shopping centers, retail spaces, and national brands",
    },
  ];

  return (
    <section className="relative py-16 bg-slate-950 text-white overflow-hidden border-b border-slate-900">
      
      {/* Background Image with Blur only (No Opacity Reduction) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Sectors-Background.jpg" 
          alt="Sectors Background"
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
            Industries Served
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Sectors <span className="text-yellow-500">We Serve</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Supporting commercial, hospitality, multifamily, industrial, and retail projects across the country.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 border-l-4 border-l-yellow-500 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:border-l-yellow-500 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {sector.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {sector.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}