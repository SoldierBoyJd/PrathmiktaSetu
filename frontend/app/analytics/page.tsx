"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const monthlyData = [
  { month: "Jan", complaints: 820, resolved: 650 },
  { month: "Feb", complaints: 930, resolved: 780 },
  { month: "Mar", complaints: 1100, resolved: 890 },
  { month: "Apr", complaints: 980, resolved: 820 },
  { month: "May", complaints: 1250, resolved: 1050 },
  { month: "Jun", complaints: 1420, resolved: 1100 },
];

const categoryData = [
  { name: "Roads", count: 3820 },
  { name: "Water", count: 2660 },
  { name: "Sanitation", count: 1910 },
  { name: "Electricity", count: 1580 },
  { name: "Healthcare", count: 1155 },
  { name: "Others", count: 1717 },
];

const wardData = [
  { ward: "W1", score: 72 },
  { ward: "W2", score: 85 },
  { ward: "W3", score: 61 },
  { ward: "W4", score: 90 },
  { ward: "W5", score: 55 },
  { ward: "W6", score: 78 },
  { ward: "W7", score: 83 },
  { ward: "W8", score: 69 },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Analytics"
        subtitle="Deep dive into complaints data, resolution trends, and ward-level performance."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Monthly Trend */}
        <div className="col-span-8 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Monthly Complaints vs Resolved</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorComplaints" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2D7A3A" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2D7A3A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2980B9" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#2980B9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Area type="monotone" dataKey="complaints" stroke="#2D7A3A" strokeWidth={2} fill="url(#colorComplaints)" />
              <Area type="monotone" dataKey="resolved" stroke="#2980B9" strokeWidth={2} fill="url(#colorResolved)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* KPI cards */}
        <div className="col-span-4 flex flex-col gap-4">
          {[
            { label: "Avg Resolution Time", value: "4.2 days", delta: "↓ 1.2d", pos: true, color: "#2D7A3A" },
            { label: "Resolution Rate", value: "78%", delta: "↑ 6%", pos: true, color: "#2980B9" },
            { label: "Escalation Rate", value: "8.4%", delta: "↓ 2.1%", pos: true, color: "#F5831F" },
          ].map((k) => (
            <div key={k.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] flex-1 flex flex-col justify-center">
              <p className="text-xs text-[#718096] uppercase tracking-wide">{k.label}</p>
              <p className="text-2xl font-bold mt-1" style={{ color: k.color }}>{k.value}</p>
              <p className={`text-xs mt-1 ${k.pos ? "text-[#27AE60]" : "text-[#E74C3C]"}`}>{k.delta} vs last period</p>
            </div>
          ))}
        </div>

        {/* Category bar chart */}
        <div className="col-span-6 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Complaints by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={categoryData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Bar dataKey="count" fill="#2D7A3A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Ward performance bar chart */}
        <div className="col-span-6 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Ward Performance Score</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={wardData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="ward" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Bar dataKey="score" fill="#2980B9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
