"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, Eye, EyeOff, Mail, Lock, Waypoints } from "lucide-react";
import { toast } from "sonner";
import { useState, Suspense } from "react";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { getDefaultRoute } from "@/lib/routes";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }),
});
type FormValues = z.infer<typeof schema>;

// Mock user data for demo — replace with real API call
const DEMO_USERS = {
  mp: {
    id: 1,
    email: "raghav@parliament.in",
    full_name: "Raghav Sharma",
    role: "mp" as const,
  },
  citizen: {
    id: 2,
    email: "jainam@citizen.in",
    full_name: "Jainam Doshi",
    role: "citizen" as const,
  },
};

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("from");

  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"mp" | "citizen">("mp");

  const { setAuth } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const handleLogin = async (role: "mp" | "citizen") => {
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 900));

      const user = DEMO_USERS[role];

      // Set auth: user + mock tokens
      setAuth(user, "mock-access-token-" + Date.now(), "mock-refresh-token");

      toast.success(`Welcome back, ${user.full_name.split(" ")[0]}!`);

      // Redirect: use 'from' param if it's appropriate for the role, otherwise use default
      const destination = redirectTo && !redirectTo.startsWith("/login")
        ? redirectTo
        : getDefaultRoute(role);

      router.push(destination);
    } catch {
      toast.error("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async () => handleLogin(selectedRole);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Mobile logo */}
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
          <Waypoints className="size-4 text-orange-50" />
        </div>
        <p className="text-sm font-bold text-zinc-950 uppercase tracking-wide">
          Prathmikta Setu
        </p>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-950 mb-1">Welcome back</h1>
        <p className="text-sm text-[#71717b]">
          Sign in to your Prathmikta Setu account
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-7">
        {/* Role Selector */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-zinc-700 mb-2">Sign in as</p>
          <div className="grid grid-cols-2 gap-2">
            {([
              ["mp", "🏛️ MP / Official"],
              ["citizen", "👤 Citizen"],
            ] as const).map(([val, label]) => (
              <button
                key={val}
                type="button"
                onClick={() => setSelectedRole(val)}
                className={`py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  selectedRole === val
                    ? "bg-[#ff6900] text-orange-50 border-[#ff6900]"
                    : "bg-zinc-50 text-zinc-600 border-zinc-200 hover:border-zinc-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
              <input
                id="email"
                type="email"
                placeholder={
                  selectedRole === "mp"
                    ? "r.sharma@parliament.in"
                    : "jainam@citizen.in"
                }
                className={`w-full pl-9 pr-3 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] transition-colors ${
                  errors.email ? "border-red-400" : "border-zinc-200"
                }`}
                {...register("email")}
                autoFocus
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-500 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                className="text-xs font-semibold text-zinc-700"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-[#ff6900] hover:text-orange-600"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#71717b]" />
              <input
                id="password"
                type={showPwd ? "text" : "password"}
                className={`w-full pl-9 pr-10 h-11 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6900]/30 focus:border-[#ff6900] transition-colors ${
                  errors.password ? "border-red-400" : "border-zinc-200"
                }`}
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717b] hover:text-zinc-700"
                tabIndex={-1}
              >
                {showPwd ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 font-medium">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#ff6900] hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in…
              </>
            ) : (
              `Sign In as ${selectedRole === "mp" ? "MP Official" : "Citizen"}`
            )}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-zinc-200" />
          <span className="text-xs text-[#71717b]">or try a demo account</span>
          <div className="flex-1 h-px bg-zinc-200" />
        </div>

        {/* Quick demo buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleLogin("mp")}
            disabled={loading}
            className="h-11 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 disabled:opacity-60"
          >
            🏛️ Demo MP
          </button>
          <button
            onClick={() => handleLogin("citizen")}
            disabled={loading}
            className="h-11 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 text-zinc-700 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-1.5 disabled:opacity-60"
          >
            👤 Demo Citizen
          </button>
        </div>
      </div>

      <p className="text-center text-sm text-[#71717b] mt-6">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-[#ff6900] hover:text-orange-600"
        >
          Register here
        </Link>
      </p>
    </motion.div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-zinc-100 rounded-2xl" />}>
      <LoginForm />
    </Suspense>
  );
}
