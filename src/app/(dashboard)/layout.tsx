"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  UserCheck,
  ShieldCheck,
  User,

} from "lucide-react";
import { useSession, signOut } from "@/lib/auth-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dropdown Ref for Click Outside
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const isAdmin = pathname.startsWith("/admin");

  // Admin Routes Configuration
  const adminNavigation = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Client Management", href: "/admin/client-management", icon: Users },
    { name: "My Profile", href: "/admin/profile", icon: UserCheck },
  ];

  // Client Routes Configuration
  const clientNavigation = [
    { name: "My Overview", href: "/client", icon: LayoutDashboard },
    { name: "My Projects", href: "/client/my-projects", icon: Building2 },
    { name: "Support", href: "/client/support", icon: Headphones },
    { name: "My Profile", href: "/client/profile", icon: UserCheck },
  ];

  const currentNav = isAdmin ? adminNavigation : clientNavigation;
  const profileLink = isAdmin ? "/admin/profile" : "/client/profile";

  // Logout Handler with Redirect
  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  // Safely Extract First Name
  const getUserFirstName = () => {
    if (!session?.user) return "User";
    if (session.user.name) {
      return session.user.name.split(" ")[0];
    }
    return session.user.email?.split("@")[0] || "User";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans antialiased">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-950/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-slate-100 flex flex-col justify-between border-r border-slate-800 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 text-xs font-semibold text-slate-300 border border-slate-800">
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
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                        : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
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

          {/* Sidebar Footer - Logout Button */}
          <div className="p-4 border-t border-slate-800/80 bg-slate-950/40">
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-all"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout Account</span>
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
            <h1 className="text-base sm:text-lg font-bold text-white">
              {isAdmin ? "Civil Engineering Dashboard" : "Project Control Center"}
            </h1>
          </div>

          {/* Topbar Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="relative p-2 rounded-full text-slate-400 hover:bg-slate-800 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-slate-900" />
            </button>

            <div className="h-8 w-px bg-slate-800 hidden sm:block" />

            {/* System Active Status */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>System Active</span>
            </div>

            <div className="h-8 w-px bg-slate-800 hidden sm:block" />

            {/* Topbar User Avatar & Dropdown Section */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2 focus:outline-none p-1 rounded-full hover:bg-slate-800 transition-all ring-2 ring-amber-500/40 hover:ring-amber-500"
                aria-label="User Profile Menu"
              >
                <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User Avatar"}
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <User className="h-5 w-5 text-slate-300" />
                  )}
                </div>
              </button>

              {/* Profile Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50 overflow-hidden transition-all duration-200">
                  {/* User Role & Name Header */}
                  <div className="px-4 py-2 border-b border-slate-800/80 bg-slate-950/50 space-y-1">
                    <p className="text-xs font-bold text-white truncate">
                      Hi, <span className="text-amber-500">{getUserFirstName()}</span>
                    </p>
                    <div className="flex items-center justify-between pt-0.5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                        Role
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                          isAdmin
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {isAdmin ? "Admin" : "Client"}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic View Profile Link */}
                  <Link
                    href={profileLink}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                  >
                    <UserCheck className="h-4 w-4 text-slate-400" />
                    <span>View Profile</span>
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-red-400 hover:bg-slate-800 transition-colors border-t border-slate-800/60"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-4 lg:p-8 max-w-7xl w-full mx-auto bg-slate-950 text-slate-100">
          {children}
        </main>
      </div>
    </div>
  );
}