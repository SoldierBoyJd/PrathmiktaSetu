"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    try {
      // Simulate login for demo
      await new Promise((r) => setTimeout(r, 1000));
      toast.success("Successfully logged in!");
      router.push("/dashboard");
    } catch {
      toast.error("Failed to log in. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6 lg:hidden">
          <div className="w-8 h-8 rounded-lg bg-[#2D7A3A] flex items-center justify-center">
            <span className="text-white font-bold text-sm">PS</span>
          </div>
          <p className="text-sm font-bold text-[#2D7A3A] uppercase tracking-wide">Prathmikta Setu</p>
        </div>
        <h1 className="text-2xl font-bold text-[#1A2332] mb-1">Welcome back</h1>
        <p className="text-sm text-[#718096]">Sign in to your Prathmikta Setu account</p>
      </div>

      {/* Form card */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-7">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#4A5568]" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A0AEC0]" />
              <input
                id="email"
                type="email"
                placeholder="r.sharma@parliament.in"
                className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/30 focus:border-[#2D7A3A] transition-colors ${
                  errors.email ? "border-[#E74C3C]" : "border-[#E2E8F0]"
                }`}
                {...register("email")}
                autoFocus
              />
            </div>
            {errors.email && (
              <p className="text-xs text-[#E74C3C] font-medium">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-[#4A5568]" htmlFor="password">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-[#2D7A3A] hover:text-[#246130] transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A0AEC0]" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`w-full pl-9 pr-10 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D7A3A]/30 focus:border-[#2D7A3A] transition-colors ${
                  errors.password ? "border-[#E74C3C]" : "border-[#E2E8F0]"
                }`}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A0AEC0] hover:text-[#718096]"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-[#E74C3C] font-medium">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-[#2D7A3A] hover:bg-[#246130] text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span className="text-xs text-[#A0AEC0]">or</span>
          <div className="flex-1 h-px bg-[#E2E8F0]" />
        </div>

        {/* Demo access */}
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full h-11 bg-[#F5F7FA] hover:bg-[#E8F5E9] border border-[#E2E8F0] hover:border-[#C6E6CB] text-[#4A5568] hover:text-[#2D7A3A] text-sm font-medium rounded-xl transition-colors"
        >
          Continue as Demo User
        </button>
      </div>

      <p className="text-center text-sm text-[#718096] mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-[#2D7A3A] hover:text-[#246130]">
          Register here
        </Link>
      </p>
    </motion.div>
  );
}
