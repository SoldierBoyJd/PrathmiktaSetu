"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff, Mail, Lock, User, UserCheck, ShieldAlert, Waypoints } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { getDefaultRoute } from "@/lib/routes";

const schema = z.object({
  full_name: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string(),
  role: z.enum(["citizen", "mp"]),
}).refine(d => d.password === d.confirmPassword, { message: "Passwords don't match.", path: ["confirmPassword"] });

type FormValues = z.infer<typeof schema>;

function pwdStrength(pwd: string) {
  let s = 0;
  if (pwd.length >= 8) s += 25;
  if (/[A-Z]/.test(pwd)) s += 25;
  if (/[0-9]/.test(pwd)) s += 25;
  if (/[^A-Za-z0-9]/.test(pwd)) s += 25;
  return s;
}

export default function RegisterPage() {
  const router = useRouter();
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthStore();

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { full_name: "", email: "", password: "", confirmPassword: "", role: "citizen" },
  });

  const role = watch("role");
  const pwd = watch("password");
  const strength = pwdStrength(pwd || "");

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 900));
      // In production: POST /api/auth/register, get back tokens
      // For demo: create user from form data and set auth
      const newUser = {
        id: Date.now(),
        email: data.email,
        full_name: data.full_name,
        role: data.role,
      };
      setAuth(newUser, "mock-access-token-" + Date.now(), "mock-refresh-token");
      toast.success("Account created! Redirecting to your portal…");
      router.push(getDefaultRoute(data.role));
    } catch {
      toast.error("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
          <Waypoints className="size-4 text-orange-50" />
        </div>
        <p className="text-sm font-bold text-zinc-950 uppercase tracking-wide">Prathmikta Setu</p>
      </div>

      <div className="mb-7">
        <h1 className="text-2xl font-bold text-zinc-950 mb-1">Create an account</h1>
        <p className="text-sm text-[#71717b]">Join the platform to participate in local governance</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-7">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Role selection */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 block mb-2">I am registering as…</label>
            <div className="grid grid-cols-2 gap-3">
              {([["citizen", "Citizen", UserCheck], ["mp", "MP / Official", ShieldAlert]] as const).map(([val, label, Icon]) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setValue("role", val)}
                  className={cn(
                    "rounded-xl border-2 p-4 flex flex-col items-center justify-center transition-all gap-2",
                    role === val
                      ? "border-[#ff6900] bg-[#ff6900]/5 text-[#ff6900]"
                      : "border-zinc-200 text-zinc-500 hover:border-zinc-300"
                  )}
                >
                  <Icon className="size-7" />
                  <span className="font-semibold text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Full name */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 block mb-1.5">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
              <input placeholder="Raghav Sharma"
                className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] ${errors.full_name ? "border-red-400" : "border-zinc-200"}`}
                {...register("full_name")} />
            </div>
            {errors.full_name && <p className="text-xs text-red-500 mt-1">{errors.full_name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-zinc-700 block mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
              <input type="email" placeholder="r.sharma@parliament.in"
                className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] ${errors.email ? "border-red-400" : "border-zinc-200"}`}
                {...register("email")} />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-zinc-700 block mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
                <input type={showPwd ? "text" : "password"}
                  className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] ${errors.password ? "border-red-400" : "border-zinc-200"}`}
                  {...register("password")} />
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-700 block mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
                <input type={showPwd ? "text" : "password"}
                  className={`w-full pl-9 pr-9 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] ${errors.confirmPassword ? "border-red-400" : "border-zinc-200"}`}
                  {...register("confirmPassword")} />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717b]" tabIndex={-1}>
                  {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {/* Password strength */}
          {pwd && (
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${strength}%`,
                    background: strength <= 25 ? "#e7000b" : strength <= 50 ? "#ff6900" : strength <= 75 ? "#1E88E5" : "#1E8E3E",
                  }}
                />
              </div>
              <p className="text-[11px] text-[#71717b] text-right">
                {strength <= 25 ? "Weak" : strength <= 50 ? "Fair" : strength <= 75 ? "Good" : "Strong"}
              </p>
            </div>
          )}

          <button type="submit" disabled={loading}
            className="w-full h-11 bg-[#ff6900] hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" />Creating account…</> : "Create Account"}
          </button>
        </form>
      </div>

      <p className="text-center text-sm text-[#71717b] mt-6">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#ff6900] hover:text-orange-600">Sign in</Link>
      </p>
    </motion.div>
  );
}
