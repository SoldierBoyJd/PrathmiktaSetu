"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { TrendingDown, Download, Send, RefreshCw } from "lucide-react";

const sourceData = [
  { name: "Mobile App", value: 44.7, color: "#ff6900" },
  { name: "Web Portal", value: 30.5, color: "#1E88E5" },
  { name: "Public Kiosk", value: 13.2, color: "#1E8E3E" },
  { name: "Call Center", value: 8.8, color: "#e7000b" },
  { name: "Others", value: 2.8, color: "#a1a1aa" },
];

export default function BottomStats() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {/* Complaint Sources */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200">
        <h3 className="text-sm font-semibold text-zinc-950 mb-3">Complaint Sources</h3>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 relative">
            <ResponsiveContainer width={90} height={90}>
              <PieChart>
                <Pie data={sourceData} cx="50%" cy="50%" innerRadius={28} outerRadius={42} dataKey="value" strokeWidth={0}>
                  {sourceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[11px] font-bold text-zinc-950">12,842</span>
              <span className="text-[8px] text-[#71717b]">Total</span>
            </div>
          </div>
          <div className="flex-1 space-y-1.5">
            {sourceData.map(item => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <span className="text-[10px] text-[#71717b] flex-1 truncate">{item.name}</span>
                <span className="text-[10px] font-semibold text-zinc-700">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resolution Time */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 flex flex-col">
        <h3 className="text-sm font-semibold text-zinc-950 mb-3">Resolution Time</h3>
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-bold text-[#ff6900]">4.2</div>
          <div className="text-sm font-medium text-zinc-700">Days</div>
          <div className="text-xs text-[#71717b] mt-1">Average</div>
          <div className="flex items-center gap-1 mt-3 text-xs text-[#1E8E3E]">
            <TrendingDown size={12} />
            <span>↓ 1.2 days vs last 30 days</span>
          </div>
        </div>
      </div>

      {/* Satisfaction Score */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 flex flex-col">
        <h3 className="text-sm font-semibold text-zinc-950 mb-3">Satisfaction Score</h3>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#f4f4f5" strokeWidth="10" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#1E8E3E" strokeWidth="10"
                strokeDasharray={`${(78 / 100) * 251.2} 251.2`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-zinc-950">78%</span>
              <span className="text-[10px] text-[#1E8E3E] font-medium">Good</span>
            </div>
          </div>
          <p className="text-xs text-[#71717b] mt-2">↑ 6% vs last 30 days</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200">
        <h3 className="text-sm font-semibold text-zinc-950 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#ff6900]/5 hover:bg-[#ff6900]/10 transition-colors border border-[#ff6900]/20 group">
            <Send size={18} className="text-[#ff6900]" />
            <span className="text-[10px] font-medium text-[#ff6900] text-center leading-tight">Submit Complaint</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1E8E3E]/5 hover:bg-[#1E8E3E]/10 transition-colors border border-[#1E8E3E]/20 group">
            <RefreshCw size={18} className="text-[#1E8E3E]" />
            <span className="text-[10px] font-medium text-[#1E8E3E] text-center leading-tight">Generate Report</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors border border-red-100 group">
            <Send size={18} className="text-red-500" />
            <span className="text-[10px] font-medium text-red-500 text-center leading-tight">Broadcast Alert</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1E88E5]/5 hover:bg-[#1E88E5]/10 transition-colors border border-[#1E88E5]/20 group">
            <Download size={18} className="text-[#1E88E5]" />
            <span className="text-[10px] font-medium text-[#1E88E5] text-center leading-tight">Download Data</span>
          </button>
        </div>
      </div>
    </div>
  );
}
