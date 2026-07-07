"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const allocationData = [
  { category: "Roads", allocated: 45, spent: 38, recommended: 52 },
  { category: "Water", allocated: 28, spent: 22, recommended: 30 },
  { category: "Sanitation", allocated: 18, spent: 15, recommended: 20 },
  { category: "Electricity", allocated: 14, spent: 11, recommended: 12 },
  { category: "Healthcare", allocated: 10, spent: 8, recommended: 14 },
  { category: "Education", allocated: 8, spent: 6, recommended: 9 },
];

const pieData = [
  { name: "Roads", value: 35, color: "#ff6900" },
  { name: "Water Supply", value: 22, color: "#1E88E5" },
  { name: "Sanitation", value: 14, color: "#1E8E3E" },
  { name: "Electricity", value: 11, color: "#e7000b" },
  { name: "Healthcare", value: 10, color: "#9B59B6" },
  { name: "Others", value: 8, color: "#a1a1aa" },
];

const projects = [
  { name: "Road Resurfacing – Ward 12", budget: "₹48L", spent: "₹31L", progress: 65, status: "On Track" },
  { name: "Water Pipeline Repair – Ward 8", budget: "₹22L", spent: "₹18L", progress: 82, status: "At Risk" },
  { name: "Drain Renovation – Ward 9", budget: "₹15L", spent: "₹6L", progress: 40, status: "On Track" },
  { name: "Solar Street Lights – Ward 5", budget: "₹9L", spent: "₹9L", progress: 100, status: "Completed" },
];

const statusCls: Record<string, string> = {
  "On Track": "bg-[#1E8E3E]/10 text-[#1E8E3E]",
  "At Risk": "bg-red-50 text-red-600",
  Completed: "bg-[#1E88E5]/10 text-[#1E88E5]",
};

const progressColor = (p: number) => p === 100 ? "#1E8E3E" : p > 70 ? "#ff6900" : "#1E88E5";

export default function BudgetOptimizerPage() {
  return (
    <DashboardLayout title="Budget Optimizer" subtitle="AI-powered budget allocation recommendations based on complaint density and impact scores.">
      {/* Summary — 2 cols on mobile, 4 on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Budget", value: "₹2.4 Cr", sub: "FY 2025–26", color: "#ff6900" },
          { label: "Spent to Date", value: "₹1.1 Cr", sub: "46% utilised", color: "#1E88E5" },
          { label: "AI Reallocation", value: "₹38L", sub: "Optimise impact", color: "#f97316" },
          { label: "Active Projects", value: "12", sub: "3 at risk", color: "#e7000b" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200">
            <p className="text-xs text-[#71717b] uppercase tracking-wide mb-1">{s.label}</p>
            <p className="text-xl sm:text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[11px] text-[#71717b] mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts — stacked on mobile, side-by-side on xl */}
      <div className="flex flex-col xl:grid xl:grid-cols-12 gap-5 mb-5">
        {/* Allocation chart */}
        <div className="xl:col-span-8 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950 mb-4">Allocation vs AI Recommended (₹ Lakhs)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={allocationData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
              <XAxis dataKey="category" tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e4e4e7" }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="allocated" name="Allocated" fill="#ff6900" radius={[3,3,0,0]} />
              <Bar dataKey="spent" name="Spent" fill="#1E88E5" radius={[3,3,0,0]} />
              <Bar dataKey="recommended" name="AI Recommended" fill="#1E8E3E" radius={[3,3,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie */}
        <div className="xl:col-span-4 bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950 mb-3">Current Budget Split</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={62} dataKey="value" strokeWidth={0}>
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1.5">
            {pieData.map(item => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: item.color }} />
                <span className="text-[10px] text-[#71717b] flex-1">{item.name}</span>
                <span className="text-[10px] font-semibold text-zinc-950">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects table — scrollable on mobile */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200">
        <div className="px-4 sm:px-5 py-4 border-b border-zinc-200">
          <h3 className="text-sm font-semibold text-zinc-950">Active Projects</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-[480px]">
            <thead>
              <tr className="bg-zinc-50">
                {["Project Name","Budget","Spent","Progress","Status"].map(h => (
                  <th key={h} className="px-4 sm:px-5 py-3 text-left font-semibold text-[#71717b] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {projects.map(p => (
                <tr key={p.name} className="hover:bg-zinc-50">
                  <td className="px-4 sm:px-5 py-3 font-medium text-zinc-950">{p.name}</td>
                  <td className="px-4 sm:px-5 py-3 text-zinc-700">{p.budget}</td>
                  <td className="px-4 sm:px-5 py-3 text-zinc-700">{p.spent}</td>
                  <td className="px-4 sm:px-5 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden w-20">
                        <div className="h-full rounded-full" style={{ width: `${p.progress}%`, background: progressColor(p.progress) }} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#71717b]">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="px-4 sm:px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusCls[p.status]}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
