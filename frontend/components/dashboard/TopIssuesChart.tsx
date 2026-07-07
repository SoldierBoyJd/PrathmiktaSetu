"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Roads", value: 29.8, color: "#ff6900" },
  { name: "Water Supply", value: 20.7, color: "#1E88E5" },
  { name: "Sanitation", value: 14.9, color: "#1E8E3E" },
  { name: "Electricity", value: 12.3, color: "#e7000b" },
  { name: "Healthcare", value: 9.0, color: "#9B59B6" },
  { name: "Others", value: 13.3, color: "#a1a1aa" },
];

export default function TopIssuesChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-950">Top Issue Categories</h3>
        <button className="text-xs text-[#ff6900] font-medium hover:underline">View all →</button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={38} outerRadius={56} dataKey="value" strokeWidth={0}>
                {data.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 space-y-1.5">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-xs text-[#71717b] flex-1 truncate">{item.name}</span>
              <span className="text-xs font-semibold text-zinc-950">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
