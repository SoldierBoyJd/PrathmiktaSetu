"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const allocationData = [
  { category: "Roads", allocated: 45, spent: 38, recommended: 52 },
  { category: "Water", allocated: 28, spent: 22, recommended: 30 },
  { category: "Sanitation", allocated: 18, spent: 15, recommended: 20 },
  { category: "Electricity", allocated: 14, spent: 11, recommended: 12 },
  { category: "Healthcare", allocated: 10, spent: 8, recommended: 14 },
  { category: "Education", allocated: 8, spent: 6, recommended: 9 },
];

const pieData = [
  { name: "Roads", value: 35, color: "#2D7A3A" },
  { name: "Water Supply", value: 22, color: "#2980B9" },
  { name: "Sanitation", value: 14, color: "#F5831F" },
  { name: "Electricity", value: 11, color: "#E74C3C" },
  { name: "Healthcare", value: 10, color: "#9B59B6" },
  { name: "Others", value: 8, color: "#A0AEC0" },
];

const projects = [
  { name: "Road Resurfacing – Ward 12", budget: "₹48L", spent: "₹31L", progress: 65, status: "On Track" },
  { name: "Water Pipeline Repair – Ward 8", budget: "₹22L", spent: "₹18L", progress: 82, status: "At Risk" },
  { name: "Drain Renovation – Ward 9", budget: "₹15L", spent: "₹6L", progress: 40, status: "On Track" },
  { name: "Solar Street Lights – Ward 5", budget: "₹9L", spent: "₹9L", progress: 100, status: "Completed" },
];

const statusColors: Record<string, string> = {
  "On Track": "text-[#27AE60] bg-[#F0FDF4]",
  "At Risk": "text-[#E74C3C] bg-[#FEF2F2]",
  Completed: "text-[#2980B9] bg-[#EBF8FF]",
};

export default function BudgetOptimizerPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Budget Optimizer"
        subtitle="AI-powered budget allocation recommendations based on complaint density and impact scores."
      />

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Budget", value: "₹2.4 Cr", sub: "FY 2025–26", color: "#2D7A3A" },
          { label: "Spent to Date", value: "₹1.1 Cr", sub: "46% utilised", color: "#2980B9" },
          { label: "AI Recommended Realloc.", value: "₹38L", sub: "Optimize impact", color: "#F5831F" },
          { label: "Projects Active", value: "12", sub: "3 at risk", color: "#E74C3C" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
            <p className="text-xs text-[#718096] uppercase tracking-wide mb-1">{s.label}</p>
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[11px] text-[#A0AEC0] mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Allocation vs Recommended bar */}
        <div className="col-span-8 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Allocation vs AI Recommended (₹ Lakhs)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={allocationData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="category" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="allocated" name="Allocated" fill="#2D7A3A" radius={[3, 3, 0, 0]} />
              <Bar dataKey="spent" name="Spent" fill="#2980B9" radius={[3, 3, 0, 0]} />
              <Bar dataKey="recommended" name="AI Recommended" fill="#F5831F" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie - current allocation */}
        <div className="col-span-4 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Current Budget Split</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={60} dataKey="value" strokeWidth={0}>
                {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 space-y-1">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <span className="text-[10px] text-[#718096] flex-1">{item.name}</span>
                <span className="text-[10px] font-semibold text-[#1A2332]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div className="col-span-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0]">
          <div className="px-4 py-3 border-b border-[#E2E8F0]">
            <h3 className="text-sm font-semibold text-[#1A2332]">Active Projects</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  {["Project Name", "Budget", "Spent", "Progress", "Status"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {projects.map((p) => (
                  <tr key={p.name} className="hover:bg-[#F8FAFC]">
                    <td className="px-4 py-3 font-medium text-[#1A2332]">{p.name}</td>
                    <td className="px-4 py-3 text-[#4A5568]">{p.budget}</td>
                    <td className="px-4 py-3 text-[#4A5568]">{p.spent}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-[#EDF2F7] rounded-full">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${p.progress}%`,
                              background: p.progress === 100 ? "#27AE60" : p.progress > 70 ? "#F5831F" : "#2D7A3A",
                            }}
                          />
                        </div>
                        <span className="text-[10px] font-semibold text-[#718096] w-8">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[p.status]}`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
