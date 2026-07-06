import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#F5F7FA]">
      {/* Left panel – Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#2D7A3A] flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#F5831F]/20 rounded-full blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
            <span className="text-white font-bold text-base">PS</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight">Prathmikta Setu</p>
            <p className="text-white/60 text-[11px]">Bhavya Bharat ki Governance</p>
          </div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-bold text-white leading-tight mb-5">
            AI-Powered<br />Constituency<br />Priority Platform
          </h1>
          <p className="text-white/80 text-sm leading-relaxed mb-8">
            Empowering MPs and administrative teams to understand, prioritize, and solve public issues intelligently through data-driven governance.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2">
            {[
              "Real-time Heatmaps",
              "AI Recommendations",
              "Smart Prioritization",
              "Budget Optimization",
              "Emergency Alerts",
              "Digital Twin",
            ].map((f) => (
              <span
                key={f}
                className="text-xs bg-white/15 backdrop-blur text-white border border-white/20 px-3 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Target users */}
        <div className="relative z-10 flex items-center gap-6">
          {[
            { label: "MPs", emoji: "🏛️" },
            { label: "Constituency Officers", emoji: "🏢" },
            { label: "Field Analysts", emoji: "📊" },
            { label: "Citizens", emoji: "👥" },
          ].map((u) => (
            <div key={u.label} className="flex flex-col items-center gap-1">
              <span className="text-xl">{u.emoji}</span>
              <span className="text-[10px] text-white/70 text-center leading-tight">{u.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel – Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
