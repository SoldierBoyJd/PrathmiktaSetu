"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Waypoints, Bell, Plus, User, ChevronDown, LogOut, Menu, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/store/useAuthStore";

const NAV = [
  { href: "/citizen/dashboard", label: "Dashboard" },
  { href: "/citizen/issues",    label: "Issues" },
  { href: "/citizen/submit",    label: "Submit" },
  { href: "/citizen/track",     label: "Track" },
  { href: "/citizen/transparency", label: "Transparency" },
];

export default function CitizenLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const displayName = user?.full_name?.split(" ")[0] ?? "User";

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8]">
      {/* ─── Navbar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-between items-center h-[64px] sm:h-[68px]">

          {/* Logo */}
          <Link href="/citizen/dashboard" className="flex items-center gap-2 shrink-0">
            <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
              <Waypoints className="size-4 text-orange-50" />
            </div>
            <div className="leading-none flex flex-col">
              <span className="font-bold text-zinc-950 text-sm leading-5 tracking-tight">
                Prathmikta Setu
              </span>
              <span className="text-[#71717b] text-[10px] hidden sm:block">Citizen Portal</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== "/citizen/dashboard" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "font-medium rounded-lg text-sm px-3 py-2 transition-colors whitespace-nowrap",
                    isActive
                      ? "font-semibold text-[#ff6900] bg-[#ff6900]/5"
                      : "text-[#71717b] hover:text-zinc-950 hover:bg-zinc-50"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Bell */}
            <button className="relative size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <Bell size={15} className="text-[#71717b]" />
              <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[#ff6900]" />
            </button>

            {/* Submit CTA */}
            <Link
              href="/citizen/submit"
              className="flex items-center gap-1.5 bg-[#ff6900] hover:bg-orange-600 text-orange-50 font-semibold text-xs px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <Plus size={13} />
              Submit Complaint
            </Link>

            {/* User dropdown */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center gap-1.5 hover:bg-zinc-50 rounded-lg px-2 py-1.5 transition-colors">
                  <div className="size-7 rounded-full bg-[#ff6900]/15 flex items-center justify-center">
                    <User size={13} className="text-[#ff6900]" />
                  </div>
                  <span className="text-xs font-medium text-zinc-950 max-w-[80px] truncate">
                    {displayName}
                  </span>
                  <ChevronDown size={12} className="text-[#71717b]" />
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-1 bg-white rounded-xl border border-zinc-200 shadow-lg py-1.5 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link
                    href="/citizen/profile"
                    className="flex items-center gap-2 px-3 py-2 text-xs text-zinc-700 hover:bg-zinc-50"
                  >
                    <User size={12} />Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-red-50 w-full"
                  >
                    <LogOut size={12} />Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-xs font-semibold text-[#ff6900] px-3 py-2 rounded-lg hover:bg-[#ff6900]/5 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile right: bell + avatar + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button className="relative size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
              <Bell size={15} className="text-[#71717b]" />
              <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-[#ff6900]" />
            </button>

            {user && (
              <div className="size-8 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
                <span className="text-orange-50 font-semibold text-[11px]">
                  {user.full_name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen
                ? <X size={17} className="text-zinc-700" />
                : <Menu size={17} className="text-zinc-700" />
              }
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-3 flex flex-col gap-1">
            {NAV.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== "/citizen/dashboard" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-medium text-sm px-3 py-2.5 rounded-xl transition-colors",
                    isActive
                      ? "font-semibold text-[#ff6900] bg-[#ff6900]/5"
                      : "text-zinc-700 hover:bg-zinc-50"
                  )}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile action row */}
            <div className="flex items-center gap-2 pt-2 mt-1 border-t border-zinc-100">
              <Link
                href="/citizen/submit"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#ff6900] hover:bg-orange-600 text-orange-50 font-semibold text-sm py-2.5 rounded-xl transition-colors"
              >
                <Plus size={14} />
                Submit Complaint
              </Link>

              {user ? (
                <button
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-1.5 border border-zinc-200 text-zinc-600 hover:bg-zinc-50 font-medium text-sm px-4 py-2.5 rounded-xl transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 border border-zinc-200 text-zinc-600 hover:bg-zinc-50 font-medium text-sm px-4 py-2.5 rounded-xl transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* ─── Page content ────────────────────────────────────────── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {children}
      </main>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200 mt-8 sm:mt-10 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-[#ff6900] flex items-center justify-center">
              <Waypoints size={12} className="text-orange-50" />
            </div>
            <span className="text-xs font-semibold text-zinc-950">Prathmikta Setu</span>
          </div>
          <p className="text-[11px] text-[#71717b] text-center sm:text-right">
            © 2026 Prathmikta Setu — An Initiative Project by Jainam, Nikhil &amp; Garima
          </p>
        </div>
      </footer>
    </div>
  );
}
