"use client";

import Link from "next/link";
import { HardHat, Home, ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden px-4">
      
      {/* Background Architectural Blueprint Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />

      {/* Main Content Card */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 py-12 px-6 sm:px-10 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl shadow-black/50">
        
        {/* Animated Construction Helmet Badge */}
        <div className="relative inline-flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-ping duration-1000" />
          <div className="relative h-24 w-24 rounded-2xl bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 transform hover:scale-105 transition-transform duration-300">
            <HardHat className="h-12 w-12 stroke-[1.75]" />
          </div>
        </div>

        {/* Hero 404 Text */}
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-8xl font-black tracking-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600 drop-shadow-sm">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <Compass className="h-6 w-6 text-amber-500 animate-spin-[spin_10s_linear_infinite]" />
            Under Construction or Page Missing!
          </h2>
        </div>

        {/* Description Message */}
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Oops! The structural blueprint for this page seems to be missing or under construction. Let&apos;s get you back to safe ground.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Home className="h-4 w-4" />
            Back to Home Page
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-xl text-sm border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Page
          </button>
        </div>

        {/* Bottom Brand Indicator */}
        <div className="pt-6 border-t border-slate-800/80 text-xs text-slate-500">
          <span className="font-semibold text-slate-400">AS Builders & Engineering</span> • Building Digital & Physical Heights
        </div>

      </div>
    </div>
  );
}