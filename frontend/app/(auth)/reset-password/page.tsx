"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, Lock, Eye, EyeOff, Waypoints, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setIsLoading(false);
    setDone(true);
    toast.success("Password reset successfully!");
    setTimeout(() => router.push("/login"), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* Mobile logo */}
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
          <Waypoints className="size-4 text-orange-50" />
        </div>
        <p className="text-sm font-bold text-zinc-950 uppercase tracking-wide">Prathmikta Setu</p>
      </div>

      <div className="mb-7">
        <h1 className="text-2xl font-bold text-zinc-950 mb-1">Reset your password</h1>
        <p className="text-sm text-[#71717b]">Create a new strong password for your account.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-7">
        {done ? (
          <div className="text-center py-6 flex flex-col items-center gap-4">
            <div className="size-16 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center">
              <CheckCircle2 className="size-8 text-[#1E8E3E]" />
            </div>
            <h3 className="font-semibold text-zinc-950">Password updated!</h3>
            <p className="text-sm text-[#71717b]">Redirecting you to the login page…</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            {/* New password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 block">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  required
                  className="w-full pl-9 pr-10 h-11 text-sm border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717b] hover:text-zinc-700"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Confirm password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 block">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your new password"
                  required
                  className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] transition-colors ${
                    confirmPassword && confirmPassword !== password ? "border-red-400" : "border-zinc-200"
                  }`}
                />
              </div>
              {confirmPassword && confirmPassword !== password && (
                <p className="text-xs text-red-500">Passwords don&apos;t match.</p>
              )}
            </div>

            {/* Password strength */}
            {password && (
              <div className="space-y-1">
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${Math.min(100, password.length * 10)}%`,
                      background:
                        password.length < 6 ? "#e7000b"
                        : password.length < 10 ? "#ff6900"
                        : "#1E8E3E",
                    }}
                  />
                </div>
                <p className="text-[11px] text-[#71717b] text-right">
                  {password.length < 6 ? "Too short" : password.length < 10 ? "Fair" : "Strong"}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password || !confirmPassword}
              className="w-full h-11 bg-[#ff6900] hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isLoading ? (
                <><Loader2 className="h-4 w-4 animate-spin" />Resetting…</>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        )}
      </div>

      <Link href="/login" className="flex items-center justify-center gap-1.5 text-sm text-[#71717b] mt-6 hover:text-zinc-950 transition-colors">
        ← Back to Sign In
      </Link>
    </motion.div>
  );
}
