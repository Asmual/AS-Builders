"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Building2,
  Headphones,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronRight,
  User,
  ShieldCheck,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Admin Routes Configuration
  const adminNavigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Client Management", href: "/admin/client-management", icon: Users },
  ];

  // Client Routes Configuration
  const clientNavigation = [
    { name: "My Overview", href: "/client", icon: LayoutDashboard },
    { name: "My Projects", href: "/client/my-projects", icon: Building2 },
    { name: "Support", href: "/client/support", icon: Headphones },
  ];

  const isAdmin = pathname.startsWith("/admin");
  const currentNav = isAdmin ? adminNavigation : clientNavigation;

  return (
    <div className="min-h-screen bg-slate-950 flex text-slate-100">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-100 flex flex-col justify-between border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo & Brand Header */}
          <div className="h-16 flex items-center justify-between px-6 bg-slate-950 border-b border-slate-800">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-amber-500">
              <Building2 className="h-6 w-6 text-amber-500" />
              <span>AS BUILDERS</span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Role Badge */}
          <div className="px-6 py-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 text-xs font-semibold text-slate-300 border border-slate-700/50">
              <ShieldCheck className={`h-4 w-4 ${isAdmin ? "text-amber-500" : "text-blue-400"}`} />
              <span>{isAdmin ? "Admin Portal" : "Client Portal"}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-1 mt-2">
            {currentNav.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${isActive ? "text-slate-950" : "text-slate-400"}`} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="h-4 w-4 text-slate-950" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / User Profile */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <User className="h-5 w-5 text-slate-300" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-slate-200">User Account</p>
                <p className="text-slate-400 truncate max-w-27.5">{isAdmin ? "Admin" : "Client"}</p>
              </div>
            </div>
            <button
              title="Logout"
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-950">
        {/* Top Navbar */}
        <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-800"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-white">
              {isAdmin ? "Civil Engineering Dashboard" : "Project Control Center"}
            </h1>
          </div>

          {/* Topbar Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full text-slate-400 hover:bg-slate-800 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-slate-900" />
            </button>
            <div className="h-8 w-px bg-slate-800 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>System Active</span>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}