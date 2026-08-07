"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Hide global public navbar and footer when inside dashboard routes
  const isDashboard =
    pathname.startsWith("/admin") ||
    pathname.startsWith("/client") ||
    pathname.startsWith("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-slate-950 text-white antialiased`}
      >
        <Toaster position="top-right" />

        {/* Render public Navbar only outside dashboard */}
        {!isDashboard && <Navbar />}

        {/* Main Content */}
        <main>{children}</main>

        {/* Render public Footer only outside dashboard */}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}