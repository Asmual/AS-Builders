"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { FaUserCircle, FaSignOutAlt, FaUser, FaUserShield } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dropdown ref for click outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Extract first name safely from session user name or email
  const getUserFirstName = () => {
    if (!session?.user) return "";
    if (session.user.name) {
      return session.user.name.split(" ")[0];
    }
    return session.user.email?.split("@")[0] || "User";
  };

  // Check user role dynamically (Default to 'client' if not defined)
  const userRole = (session?.user as { role?: string })?.role || "client";
  const isAdmin = userRole.toLowerCase() === "admin";
  
  // Dynamic Profile Page Routing
  const profileLink = isAdmin ? "/admin/profile" : "/client/profile";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Section */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/AS-Biulders-logo.png"
                alt="AS Builders Logo"
                width={35}
                height={35}
                className="object-contain"
                priority
              />
              <span className="text-2xl font-bold tracking-wider text-white">
                AS <span className="text-yellow-500">Builders</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-yellow-500 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isPending ? (
              <div className="h-9 w-24 bg-white/10 animate-pulse rounded-md" />
            ) : session?.user ? (
              <div className="relative flex items-center space-x-3" ref={dropdownRef}>
                {/* User First Name Greeting */}
                <span className="text-sm font-medium text-gray-200">
                  Hi, <span className="text-yellow-500">{getUserFirstName()}</span>
                </span>

                {/* Profile Avatar Button */}
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className="relative flex items-center justify-center w-9 h-9 rounded-full ring-2 ring-yellow-500/50 hover:ring-yellow-500 focus:outline-none transition-all shrink-0"
                  aria-label="User menu"
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User Avatar"}
                      width={36}
                      height={36}
                      className="rounded-full object-cover w-full h-full"
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-gray-300" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50 overflow-hidden transition-all duration-200">
                    
                    {/* Role Header Indicator */}
                    <div className="px-4 py-2 border-b border-slate-800/80 bg-slate-950/50 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                        Role
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md ${
                          isAdmin
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        <FaUserShield className="text-[10px]" />
                        {isAdmin ? "Admin" : "Client"}
                      </span>
                    </div>

                    {/* Dynamic Profile Link */}
                    <Link
                      href={profileLink}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:bg-slate-800/70 hover:text-yellow-500 transition-colors"
                    >
                      <FaUser className="mr-3 text-gray-400" /> View Profile
                    </Link>

                    {/* Logout Button */}
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        signOut();
                      }}
                      className="w-full flex items-center px-4 py-2.5 text-sm text-red-400 hover:bg-slate-800/70 transition-colors border-t border-slate-800/50"
                    >
                      <FaSignOutAlt className="mr-3" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className="text-gray-200 hover:text-yellow-400 px-4 py-2 text-sm font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/quote"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-md hover:shadow-yellow-500/20"
                >
                  Get a Free Quote
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-7 h-7" />
              ) : (
                <HiMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-300 hover:text-yellow-500 font-medium py-2"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-800">
            {session?.user ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">
                    Hi, <span className="text-yellow-500">{getUserFirstName()}</span>
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isAdmin
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {isAdmin ? "Admin" : "Client"}
                  </span>
                </div>

                <Link
                  href={profileLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-gray-300 hover:text-yellow-500"
                >
                  View Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    signOut();
                  }}
                  className="block text-sm text-red-400 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center w-full bg-slate-800 text-white py-2 rounded-md font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center w-full bg-yellow-500 text-black py-2 rounded-md font-semibold"
                >
                  Get a Free Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}