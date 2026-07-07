"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Waypoints, FilePlus2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/",            label: "Home" },
  { href: "/about",       label: "About" },
  { href: "/contact",     label: "Contact" },
];

/**
 * PublicNavbar — single shared top-bar for all public-facing pages
 * (home, about, contact, issues, submit-complaint, transparency, etc.)
 *
 * Handles its own mobile hamburger. Active state auto-detected from pathname.
 */
export default function PublicNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8 flex justify-between items-center h-[68px] sm:h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="size-9 rounded-lg bg-[#ff6900] text-orange-50 flex justify-center items-center">
            <Waypoints className="size-5" />
          </div>
          <div className="leading-none flex flex-col">
            <span className="font-bold text-zinc-950 text-sm sm:text-base leading-6 tracking-tight">
              Prathmikta Setu
            </span>
            <span className="font-medium text-[#71717b] text-[11px] hidden sm:block">
              Bridging Citizens &amp; Governance
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium rounded-md text-sm leading-5 px-3 py-2 transition-colors",
                pathname === item.href
                  ? "font-semibold text-[#ff6900]"
                  : "text-[#71717b] hover:text-zinc-950"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="font-medium text-[#71717b] text-sm leading-5 px-3 py-2 hover:text-zinc-950 border border-zinc-200 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
          >
            <FilePlus2 className="size-4" />
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-10 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5 text-zinc-700" /> : <Menu className="size-5 text-zinc-700" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-medium text-sm px-3 py-2.5 rounded-xl transition-colors",
                pathname === item.href
                  ? "font-semibold text-[#ff6900] bg-[#ff6900]/5"
                  : "text-zinc-700 hover:bg-zinc-50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 mt-1 border-t border-zinc-100">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="font-medium text-sm px-3 py-2.5 rounded-xl border border-zinc-200 text-zinc-700 text-center hover:bg-zinc-50 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="font-semibold text-sm px-3 py-2.5 rounded-xl bg-[#ff6900] text-orange-50 text-center hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <FilePlus2 className="size-4" />
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
