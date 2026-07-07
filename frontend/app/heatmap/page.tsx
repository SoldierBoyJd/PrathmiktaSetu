"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";

const CATEGORIES = ["All Issues", "Roads", "Water Supply", "Sanitation", "Electricity", "Healthcare"];

const wardStats = [
  { ward: "Ward 12", complaints: 642, category: "Roads", level: "Critical" },
  { ward: "Ward 8", complaints: 481, category: "Water Supply", level: "High" },
  { ward: "Ward 15", complaints: 394, category: "Sanitation", level: "High" },
  { ward: "Ward 5", complaints: 287, category: "Roads", level: "Medium" },
  { ward: "Ward 9", complaints: 213, category: "Electricity", level: "Medium" },
  { ward: "Ward 3", complaints: 98, category: "Healthcare", level: "Low" },
];

const levelBadge: Record<string, string> = {
  Critical: "text-red-600 bg-red-50",
  High: "text-[#ff6900] bg-[#ff6900]/10",
  Medium: "text-amber-600 bg-amber-50",
  Low: "text-[#1E8E3E] bg-[#1E8E3E]/10",
};

function MapSVG() {
  const hotspots = [
    { x: 175, y: 115, r: 55, color: "#e7000b", opacity: 0.8 },
    { x: 295, y: 200, r: 45, color: "#ff6900", opacity: 0.65 },
    { x: 415, y: 135, r: 38, color: "#f97316", opacity: 0.55 },
    { x: 255, y: 305, r: 50, color: "#ff6900", opacity: 0.7 },
    { x: 375, y: 285, r: 28, color: "#f97316", opacity: 0.45 },
    { x: 145, y: 255, r: 22, color: "#1E8E3E", opacity: 0.4 },
    { x: 475, y: 235, r: 20, color: "#1E8E3E", opacity: 0.35 },
  ];
  const wardLabels = [
    { x: 148, y: 150, label: "Ward 12" }, { x: 292, y: 150, label: "Ward 8" },
    { x: 452, y: 150, label: "Ward 15" }, { x: 148, y: 292, label: "Ward 5" },
    { x: 292, y: 292, label: "Ward 9" }, { x: 452, y: 292, label: "Ward 3" },
  ];
  return (
    <svg viewBox="0 0 600 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="420" fill="#F8FAF8" rx="12" />
      {Array.from({ length: 13 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="420" stroke="#e4e4e7" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="#e4e4e7" strokeWidth="0.5" />
      ))}
      <path d="M 75 75 L 540 75 L 540 365 L 75 365 Z" fill="none" stroke="#d4d4d8" strokeWidth="1.5" strokeDasharray="6 3" />
      <line x1="215" y1="75" x2="215" y2="365" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="360" y1="75" x2="360" y2="365" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="75" y1="218" x2="540" y2="218" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="4 3" />
      {hotspots.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={h.r * 1.7} fill={h.color} opacity={0.06} />
          <circle cx={h.x} cy={h.y} r={h.r} fill={h.color} opacity={h.opacity * 0.3} />
          <circle cx={h.x} cy={h.y} r={h.r * 0.4} fill={h.color} opacity={h.opacity * 0.85} />
        </g>
      ))}
      {wardLabels.map(w => (
        <text key={w.label} x={w.x} y={w.y} textAnchor="middle" fontSize="10" fill="#71717b" fontWeight="500">{w.label}</text>
      ))}
    </svg>
  );
}

export default function HeatmapPage() {
  const [category, setCategory] = useState("All Issues");
  return (
    <DashboardLayout title="AI Issue Heatmap" subtitle="Visual representation of complaint density across wards and constituencies.">
      {/* Responsive: stacked on mobile, side-by-side on xl */}
      <div className="flex flex-col xl:grid xl:grid-cols-12 gap-5">
        {/* Main map */}
        <div className="xl:col-span-9 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-zinc-200">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  category === c ? "bg-[#ff6900] text-orange-50" : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden border border-zinc-200 w-full" style={{ height: 320 }}>
            <MapSVG />
          </div>
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            {[
              { label: "Critical (>500)", color: "#e7000b" },
              { label: "High (200–500)", color: "#ff6900" },
              { label: "Medium (50–200)", color: "#f97316" },
              { label: "Low (<50)", color: "#1E8E3E" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                <span className="text-[11px] text-[#71717b]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200">
            <h3 className="text-sm font-semibold text-zinc-950 mb-3">Ward Breakdown</h3>
            <div className="space-y-2">
              {wardStats.map(w => (
                <div key={w.ward} className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 hover:bg-orange-50 transition-colors cursor-pointer">
                  <div>
                    <p className="text-xs font-semibold text-zinc-950">{w.ward}</p>
                    <p className="text-[10px] text-[#71717b]">{w.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-950">{w.complaints}</p>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${levelBadge[w.level]}`}>
                      {w.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#ff6900]/5 rounded-2xl p-4 border border-[#ff6900]/20">
            <p className="text-xs font-semibold text-[#ff6900] mb-1">AI Insight</p>
            <p className="text-[11px] text-[#71717b] leading-relaxed">
              Ward 12 shows a <strong className="text-zinc-950">34% spike</strong> in road complaints this week. Recommend immediate inspection and repair scheduling.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
