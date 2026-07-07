"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Waypoints, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
          <Waypoints className="size-4 text-orange-50" />
        </div>
        <p className="text-sm font-bold text-zinc-950 uppercase tracking-wide">Prathmikta Setu</p>
      </div>

      <div className="mb-7">
        <h1 className="text-2xl font-bold text-zinc-950 mb-1">Forgot your password?</h1>
        <p className="text-sm text-[#71717b]">Enter your email and we'll send a reset link.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-7">
        {!sent ? (
          <div className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-zinc-700 block mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="r.sharma@parliament.in"
                  className="w-full pl-9 pr-3 h-11 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900]"
                />
              </div>
            </div>
            <button
              onClick={() => email && setSent(true)}
              className="w-full h-11 bg-[#ff6900] hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Send Reset Link
            </button>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="size-14 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="size-6 text-[#1E8E3E]" />
            </div>
            <h3 className="font-semibold text-zinc-950 mb-2">Check your inbox</h3>
            <p className="text-sm text-[#71717b]">
              We sent a password reset link to <strong>{email}</strong>
            </p>
          </div>
        )}
      </div>

      <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-[#71717b] mt-6 hover:text-zinc-950">
        <ArrowLeft className="size-4" /> Back to Sign In
      </Link>
    </motion.div>
  );
}
