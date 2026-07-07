import Link from "next/link";
import { Waypoints } from "lucide-react";

/**
 * PublicFooter — single shared footer used across all public-facing pages.
 * Update once here and it propagates everywhere.
 */
export default function PublicFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="size-6 rounded-md bg-[#ff6900] flex items-center justify-center">
            <Waypoints size={12} className="text-orange-50" />
          </div>
          <span className="text-xs font-semibold text-zinc-950">Prathmikta Setu</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-4 text-xs text-[#71717b]">
          <Link href="/about"   className="hover:text-zinc-950 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact</Link>
          <Link href="/transparency" className="hover:text-zinc-950 transition-colors">Transparency</Link>
        </div>

        {/* Copyright */}
        <p className="text-[#71717b] text-[11px] text-center sm:text-right">
          © 2026 Prathmikta Setu — A Hackathon Project by Jainam, Nikhil Jeshani &amp; Garima
        </p>
      </div>
    </footer>
  );
}
