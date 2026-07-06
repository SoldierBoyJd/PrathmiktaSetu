"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { useState } from "react";

const CATEGORIES = ["All Issues", "Roads", "Water Supply", "Sanitation", "Electricity", "Healthcare"];
const INTENSITIES = [
  { label: "Critical (>500)", color: "#E74C3C" },
  { label: "High (200–500)", color: "#F5831F" },
  { label: "Medium (50–200)", color: "#F39C12" },
  { label: "Low (<50)", color: "#27AE60" },
];

// Mock ward data for legend/list
const wardStats = [
  { ward: "Ward 12", complaints: 642, category: "Roads", level: "Critical" },
  { ward: "Ward 8", complaints: 481, category: "Water Supply", level: "High" },
  { ward: "Ward 15", complaints: 394, category: "Sanitation", level: "High" },
  { ward: "Ward 5", complaints: 287, category: "Roads", level: "Medium" },
  { ward: "Ward 9", complaints: 213, category: "Electricity", level: "Medium" },
  { ward: "Ward 3", complaints: 98, category: "Healthcare", level: "Low" },
];

const levelColors: Record<string, string> = {
  Critical: "text-[#E74C3C] bg-[#FEF2F2]",
  High: "text-[#F5831F] bg-[#FFF7E6]",
  Medium: "text-[#F39C12] bg-[#FFFBEB]",
  Low: "text-[#27AE60] bg-[#F0FDF4]",
};

// Simple SVG mock map of a constituency with circles
function MockMapSVG() {
  const hotspots = [
    { x: 180, y: 120, r: 55, opacity: 0.8, color: "#E74C3C" },
    { x: 300, y: 200, r: 45, opacity: 0.65, color: "#F5831F" },
    { x: 420, y: 140, r: 38, opacity: 0.55, color: "#F39C12" },
    { x: 260, y: 310, r: 50, opacity: 0.7, color: "#F5831F" },
    { x: 380, y: 290, r: 30, opacity: 0.45, color: "#F39C12" },
    { x: 150, y: 260, r: 25, opacity: 0.4, color: "#27AE60" },
    { x: 480, y: 240, r: 22, opacity: 0.35, color: "#27AE60" },
  ];

  return (
    <svg viewBox="0 0 600 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background grid */}
      <rect width="600" height="420" fill="#F8FAFC" rx="8" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="420" stroke="#E2E8F0" strokeWidth="0.5" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="600" y2={i * 50} stroke="#E2E8F0" strokeWidth="0.5" />
      ))}

      {/* Ward boundary mock */}
      <path
        d="M 80 80 L 540 80 L 540 360 L 80 360 Z"
        fill="none"
        stroke="#CBD5E0"
        strokeWidth="1.5"
        strokeDasharray="6 3"
      />

      {/* Internal ward lines */}
      <line x1="220" y1="80" x2="220" y2="360" stroke="#CBD5E0" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="370" y1="80" x2="370" y2="360" stroke="#CBD5E0" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="80" y1="220" x2="540" y2="220" stroke="#CBD5E0" strokeWidth="1" strokeDasharray="4 3" />

      {/* Heatmap circles */}
      {hotspots.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={h.r * 1.6} fill={h.color} opacity={0.08} />
          <circle cx={h.x} cy={h.y} r={h.r} fill={h.color} opacity={h.opacity * 0.35} />
          <circle cx={h.x} cy={h.y} r={h.r * 0.45} fill={h.color} opacity={h.opacity * 0.8} />
        </g>
      ))}

      {/* Ward labels */}
      {[
        { x: 150, y: 155, label: "Ward 12" },
        { x: 295, y: 155, label: "Ward 8" },
        { x: 455, y: 155, label: "Ward 15" },
        { x: 150, y: 295, label: "Ward 5" },
        { x: 295, y: 295, label: "Ward 9" },
        { x: 455, y: 295, label: "Ward 3" },
      ].map((w) => (
        <text key={w.label} x={w.x} y={w.y} textAnchor="middle" fontSize="10" fill="#718096" fontWeight="500">
          {w.label}
        </text>
      ))}
    </svg>
  );
}

export default function HeatmapPage() {
  const [category, setCategory] = useState("All Issues");

  return (
    <DashboardLayout>
      <PageHeader
        title="AI Issue Heatmap"
        subtitle="Visual representation of complaint density across wards and constituencies."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Main map */}
        <div className="col-span-9 bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
          {/* Controls */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <div className="flex items-center gap-1 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    category === c
                      ? "bg-[#2D7A3A] text-white"
                      : "bg-[#F5F7FA] text-[#4A5568] hover:bg-[#E8F5E9] hover:text-[#2D7A3A]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-[#E2E8F0]" style={{ height: 380 }}>
            <MockMapSVG />
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-3 flex-wrap">
            {INTENSITIES.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                <span className="text-[11px] text-[#718096]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel – ward breakdown */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
            <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Ward Breakdown</h3>
            <div className="space-y-2">
              {wardStats.map((w) => (
                <div key={w.ward} className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] hover:bg-[#F0FDF4] transition-colors cursor-pointer">
                  <div>
                    <p className="text-xs font-semibold text-[#1A2332]">{w.ward}</p>
                    <p className="text-[10px] text-[#A0AEC0]">{w.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#1A2332]">{w.complaints}</p>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${levelColors[w.level]}`}>
                      {w.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E8F5E9] rounded-xl p-4 border border-[#C6E6CB]">
            <p className="text-xs font-semibold text-[#2D7A3A] mb-1">AI Insight</p>
            <p className="text-[11px] text-[#4A5568] leading-relaxed">
              Ward 12 shows a 34% spike in road complaints this week. Recommend immediate inspection and repair scheduling.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
