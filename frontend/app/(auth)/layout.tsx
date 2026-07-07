import React from "react";
import { Waypoints, ShieldCheck, BarChart3, Mic, MapPin, TrendingUp } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#F8FAF8]">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#ff6900] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-black/10 rounded-full blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
            <Waypoints className="size-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight">Prathmikta Setu</p>
            <p className="text-orange-100 text-[11px]">Bridging Citizens &amp; Governance</p>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-bold text-white leading-tight mb-5">
            AI-Powered<br />Constituency<br />Priority Platform
          </h1>
          <p className="text-orange-100 text-sm leading-relaxed mb-8">
            Empowering MPs and administrative teams to understand, prioritize, and solve public issues intelligently through data-driven governance.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Real-time Heatmaps","AI Recommendations","Smart Prioritization","Budget Optimization","Emergency Alerts","Digital Twin"].map(f => (
              <span key={f} className="text-xs bg-white/15 backdrop-blur text-white border border-white/20 px-3 py-1 rounded-full">{f}</span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-4">
          {[
            { value: "1.2M+", label: "Issues Reported" },
            { value: "87%", label: "Resolution Rate" },
            { value: "42", label: "Constituencies" },
          ].map(s => (
            <div key={s.label} className="bg-white/15 rounded-2xl p-4 backdrop-blur">
              <p className="text-2xl font-extrabold text-white">{s.value}</p>
              <p className="text-orange-100 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
