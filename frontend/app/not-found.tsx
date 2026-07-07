"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home, Waypoints } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF8] p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full text-center"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="size-9 rounded-lg bg-[#ff6900] flex items-center justify-center">
            <Waypoints className="size-5 text-orange-50" />
          </div>
          <span className="font-bold text-zinc-950 text-base tracking-tight">Prathmikta Setu</span>
        </div>

        {/* 404 Visual */}
        <div className="relative flex justify-center mb-8">
          <div className="text-[160px] font-black text-zinc-100 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-zinc-200 flex items-center justify-center">
              <Search className="h-8 w-8 text-[#ff6900]" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-zinc-950 mb-3">Page not found</h1>
        <p className="text-[#71717b] text-sm leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or has been moved to a different location.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#ff6900] hover:bg-orange-600 text-orange-50 font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
