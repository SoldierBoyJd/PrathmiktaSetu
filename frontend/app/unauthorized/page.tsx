"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Waypoints, Home } from "lucide-react";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { getDefaultRoute } from "@/lib/routes";

export default function UnauthorizedPage() {
  const { user, isAuthenticated } = useAuthStore();

  const portalHref = isAuthenticated && user
    ? getDefaultRoute(user.role)
    : "/login";

  const portalLabel = user?.role === "citizen"
    ? "Go to Citizen Portal"
    : user?.role === "mp"
    ? "Go to MP Dashboard"
    : "Return to Login";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAF8] px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="size-9 rounded-lg bg-[#ff6900] flex items-center justify-center">
            <Waypoints className="size-5 text-orange-50" />
          </div>
          <span className="font-bold text-zinc-950 text-base tracking-tight">
            Prathmikta Setu
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
          {/* Red header */}
          <div className="bg-red-500 p-10 flex justify-center">
            <div className="size-20 rounded-2xl bg-white/20 flex items-center justify-center">
              <ShieldAlert className="size-10 text-white" />
            </div>
          </div>

          {/* Body */}
          <div className="p-8 text-center space-y-4">
            <h1 className="text-2xl font-bold text-zinc-950">Access Denied</h1>
            <p className="text-[#71717b] text-sm leading-relaxed">
              You don&apos;t have permission to view this page. This area is
              restricted to a different role.
            </p>

            {user && (
              <div className="rounded-xl bg-zinc-50 border border-zinc-200 px-4 py-3 text-sm text-zinc-700">
                Signed in as{" "}
                <span className="font-semibold text-zinc-950">
                  {user.full_name}
                </span>{" "}
                ({user.role === "citizen" ? "Citizen" : "MP / Official"})
              </div>
            )}

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href={portalHref}
                className="inline-flex items-center justify-center gap-2 w-full bg-[#ff6900] hover:bg-orange-600 text-orange-50 font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <Home className="size-4" />
                {portalLabel}
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 w-full border border-zinc-200 text-zinc-700 hover:bg-zinc-50 font-medium text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <ArrowLeft className="size-4" />
                Switch Account
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
