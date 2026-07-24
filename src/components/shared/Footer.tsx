import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  const services = [
    { name: "Civil Engineering", href: "/services#civil" },
    { name: "Building Construction", href: "/services#building" },
    { name: "Architectural Design", href: "/services#design" },
    { name: "Interior & Exterior", href: "/services#interior" },
    { name: "Project Management", href: "/services#management" },
  ];

  return (
    <footer className="relative bg-slate-950 text-gray-300 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Image with Blur & Dark Bluish Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Footer.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-90 filter blur-[1px]"
        />
        {/* Dark Bluish Gradient Overlay (bg-slate-950 and deep blue tones) */}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/90 to-slate-950" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Col 1: Brand Info & Logo */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/images/AS-Biulders-logo.png"
                  alt="AS Builders Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <span className="text-2xl font-bold tracking-wider text-white">
                  AS <span className="text-yellow-500">Builders</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed pt-2">
                Delivering high-quality construction and civil engineering solutions with precision, safety, and innovation for modern infrastructure.
              </p>
              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-200"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-200"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-200"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all duration-200"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Quick Links
                <span className="absolute left-0 -bottom-1.5 w-10 h-0.5 bg-yellow-500 rounded-full" />
              </h3>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-yellow-500 transition-colors duration-200 flex items-center"
                    >
                      <span className="text-yellow-500 mr-2">›</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Our Services
                <span className="absolute left-0 -bottom-1.5 w-10 h-0.5 bg-yellow-500 rounded-full" />
              </h3>
              <ul className="space-y-2.5 text-sm">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="hover:text-yellow-500 transition-colors duration-200 flex items-center"
                    >
                      <span className="text-yellow-500 mr-2">›</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Information */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Contact Us
                <span className="absolute left-0 -bottom-1.5 w-10 h-0.5 bg-yellow-500 rounded-full" />
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-yellow-500 w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-gray-400">
                    123 Construction Avenue, Commercial Area, Dhaka, Bangladesh
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-yellow-500 w-4 h-4 shrink-0" />
                  <a
                    href="tel:+8801234567890"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    +880 1234 567 890
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-500 w-4 h-4 shrink-0" />
                  <a
                    href="mailto:info@asbuilders.com"
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    info@asbuilders.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Policy Bar */}
        <div className="border-t border-slate-900/80 bg-slate-950/80 backdrop-blur-md py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
            <p>© {currentYear} AS Builders. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}