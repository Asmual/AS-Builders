"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Extract first name safely from session user name or email
  const getUserFirstName = () => {
    if (!session?.user) return "";
    if (session.user.name) {
      return session.user.name.split(" ")[0];
    }
    return session.user.email?.split("@")[0] || "User";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    // Changed 'absolute' to 'fixed' to keep navbar sticky on top during scroll
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
              <div className="relative flex items-center space-x-3">
                {/* User First Name Greeting */}
                <span className="text-sm font-medium text-gray-200">
                  Hi, <span className="text-yellow-500">{getUserFirstName()}</span>
                </span>

                {/* Profile Avatar Button */}
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative flex items-center focus:outline-none rounded-full ring-2 ring-yellow-500/50 hover:ring-yellow-500 transition-all"
                  aria-label="User menu"
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User Avatar"}
                      width={38}
                      height={38}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="w-9 h-9 text-gray-300" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-slate-900 border border-slate-800 rounded-lg shadow-xl py-2 z-50">
                    <Link
                      href="/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-slate-800 hover:text-yellow-500 transition-colors"
                    >
                      <FaUser className="mr-3 text-gray-400" /> View Profile
                    </Link>
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        signOut();
                      }}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-400 hover:bg-slate-800 transition-colors"
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
                <div className="text-sm font-medium text-gray-300">
                  Hi, <span className="text-yellow-500">{getUserFirstName()}</span>
                </div>
                <Link
                  href="/profile"
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