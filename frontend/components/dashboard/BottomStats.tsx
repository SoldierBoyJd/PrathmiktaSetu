"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingDown, Download, Send, RefreshCw } from "lucide-react";

// Complaint Sources donut
const sourceData = [
  { name: "Mobile App", value: 44.7, color: "#2D7A3A" },
  { name: "Web Portal", value: 30.5, color: "#2980B9" },
  { name: "Public Kiosk", value: 13.2, color: "#F5831F" },
  { name: "Call Center", value: 8.8, color: "#E74C3C" },
  { name: "Others", value: 2.8, color: "#A0AEC0" },
];

// Satisfaction gauge
const satisfactionScore = 78;

export default function BottomStats() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Complaint Sources */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
        <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Complaint Sources</h3>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 relative">
            <ResponsiveContainer width={90} height={90}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={28}
                  outerRadius={42}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {sourceData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-[#1A2332]">12,842</span>
              <span className="text-[8px] text-[#A0AEC0]">Total</span>
            </div>
          </div>
          <div className="flex-1 space-y-1">
            {sourceData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
                <span className="text-[10px] text-[#718096] flex-1 truncate">{item.name}</span>
                <span className="text-[10px] font-semibold text-[#4A5568]">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resolution Time */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center text-center">
        <h3 className="text-sm font-semibold text-[#1A2332] mb-3 self-start">Resolution Time</h3>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-[#2D7A3A]">4.2</div>
          <div className="text-sm font-medium text-[#4A5568]">Days</div>
          <div className="text-xs text-[#718096] mt-1">Average</div>
          <div className="flex items-center gap-1 mt-3 text-xs text-[#27AE60]">
            <TrendingDown size={12} />
            <span>↓ 1.2 days vs last 30 days</span>
          </div>
        </div>
      </div>

      {/* Satisfaction Score */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] flex flex-col">
        <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Satisfaction Score</h3>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#EDF2F7"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#27AE60"
                strokeWidth="10"
                strokeDasharray={`${(satisfactionScore / 100) * 251.2} 251.2`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#1A2332]">{satisfactionScore}%</span>
              <span className="text-[10px] text-[#27AE60] font-medium">Good</span>
            </div>
          </div>
          <p className="text-xs text-[#718096] mt-2">↑ 6% vs last 30 days</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
        <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#F0FDF4] hover:bg-[#DCF5E4] transition-colors border border-[#C6E6CB] group">
            <Send size={18} className="text-[#2D7A3A]" />
            <span className="text-[10px] font-medium text-[#2D7A3A] text-center leading-tight">
              Submit Complaint
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#FFF7E6] hover:bg-[#FFE8B2] transition-colors border border-[#F5C06A] group">
            <RefreshCw size={18} className="text-[#F5831F]" />
            <span className="text-[10px] font-medium text-[#F5831F] text-center leading-tight">
              Generate Report
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#FEF2F2] hover:bg-[#FCD8D4] transition-colors border border-[#F5BFBC] group">
            <Send size={18} className="text-[#E74C3C]" />
            <span className="text-[10px] font-medium text-[#E74C3C] text-center leading-tight">
              Broadcast Alert
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#EBF8FF] hover:bg-[#BEE3F8] transition-colors border border-[#90CDF4] group">
            <Download size={18} className="text-[#2980B9]" />
            <span className="text-[10px] font-medium text-[#2980B9] text-center leading-tight">
              Download Data
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
