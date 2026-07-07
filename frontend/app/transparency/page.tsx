"use client";

import Link from "next/link";
import {
  CheckCircle2, Clock, DollarSign, Users, ArrowUpRight, ArrowDownRight,
  Smile, Timer, HandHeart, Download, Flag, Eye, Bell, User, Search,
  Waypoints,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from "recharts";

const wardPerf = [
  { ward: "Andheri", reported: 820, resolved: 640 },
  { ward: "Bandra", reported: 640, resolved: 560 },
  { ward: "Dadar", reported: 710, resolved: 520 },
  { ward: "Kurla", reported: 580, resolved: 490 },
  { ward: "Worli", reported: 490, resolved: 430 },
  { ward: "Malad", reported: 660, resolved: 480 },
];

const projectPie = [
  { name: "Completed", value: 48, color: "#1E8E3E" },
  { name: "Ongoing", value: 34, color: "#ff6900" },
  { name: "Planned", value: 18, color: "#e4e4e7" },
];

const wardTable = [
  { name: "Andheri East", reported: 820, resolvedPct: 78, budget: "₹6.8 Cr", status: "On Track", statusCls: "bg-[#1E8E3E]/10 text-[#1E8E3E]", priority: false },
  { name: "Bandra North", reported: 640, resolvedPct: 88, budget: "₹5.1 Cr", status: "On Track", statusCls: "bg-[#1E8E3E]/10 text-[#1E8E3E]", priority: false },
  { name: "Dadar West", reported: 710, resolvedPct: 52, budget: "₹4.2 Cr", status: "Priority", statusCls: "bg-[#ff6900]/10 text-[#ff6900]", priority: true },
  { name: "Kurla South", reported: 580, resolvedPct: 45, budget: "₹3.4 Cr", status: "Priority", statusCls: "bg-[#ff6900]/10 text-[#ff6900]", priority: true },
  { name: "Worli Central", reported: 490, resolvedPct: 91, budget: "₹4.9 Cr", status: "On Track", statusCls: "bg-[#1E8E3E]/10 text-[#1E8E3E]", priority: false },
  { name: "Malad West", reported: 660, resolvedPct: 73, budget: "₹5.6 Cr", status: "On Track", statusCls: "bg-[#1E8E3E]/10 text-[#1E8E3E]", priority: false },
];

export default function TransparencyPage() {
  return (
    <div className="bg-[#F8FAF8] text-zinc-950 min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-white border-b border-zinc-200">
        <div className="max-w-[1200px] mx-auto flex px-4 sm:px-8 justify-between items-center h-[68px]">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
                <Waypoints className="size-4 text-orange-50" />
              </div>
              <span className="font-bold text-sm text-zinc-950 hidden sm:block">Prathmikta Setu</span>
            </Link>
            <div className="w-px h-5 bg-zinc-200 hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <Eye className="size-4 text-[#ff6900]" />
              <span className="font-semibold text-sm hidden sm:block">Public Transparency Portal</span>
              <span className="inline-flex font-medium rounded-full bg-zinc-100 text-[#71717b] text-[11px] px-2 py-0.5 items-center gap-1 ml-1">
                <span className="size-1.5 rounded-full bg-[#1E8E3E]" />
                Live Data
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex rounded-lg border border-zinc-200 px-3 py-2 items-center gap-2 w-52">
              <Search className="size-4 text-[#71717b] shrink-0" />
              <input className="bg-transparent outline-none text-sm w-full" placeholder="Search wards..." />
            </div>
            <button className="relative size-9 rounded-lg border border-zinc-200 flex justify-center items-center hover:bg-zinc-50">
              <Bell className="size-4 text-[#71717b]" />
              <span className="size-2 rounded-full bg-[#ff6900] absolute right-1.5 top-1.5" />
            </button>
            <div className="size-9 rounded-full bg-zinc-100 flex justify-center items-center">
              <User className="size-4 text-[#71717b]" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl tracking-tight">Public Transparency Dashboard</h1>
          <p className="text-[#71717b] text-sm mt-1">
            Real-time accountability metrics for constituency development. Every citizen report, resolution, and rupee tracked openly.
          </p>
        </div>

        {/* KPI cards — 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Resolved Issues", value: "12,847", delta: "+8.2% this month", up: true, icon: <CheckCircle2 className="size-4 text-[#1E8E3E]" />, iconBg: "bg-[#1E8E3E]/10", valCls: "text-[#1E8E3E]" },
            { label: "Pending Issues", value: "2,134", delta: "−3.1% this month", up: false, icon: <Clock className="size-4 text-[#ff6900]" />, iconBg: "bg-[#ff6900]/10", valCls: "text-[#ff6900]" },
            { label: "Budget Utilization", value: "74%", bar: true, icon: <DollarSign className="size-4 text-[#ff6900]" />, iconBg: "bg-[#ff6900]/10", valCls: "text-zinc-950" },
            { label: "Total Reports", value: "14,981", delta: "+412 new today", up: true, icon: <Users className="size-4 text-[#71717b]" />, iconBg: "bg-zinc-100", valCls: "text-zinc-950" },
          ].map(card => (
            <div key={card.label} className="bg-white rounded-2xl border border-zinc-200 p-4 sm:p-5 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#71717b] text-xs sm:text-sm">{card.label}</span>
                <div className={`size-8 sm:size-9 rounded-lg ${card.iconBg} flex justify-center items-center`}>{card.icon}</div>
              </div>
              <div className="flex flex-col gap-1">
                <span className={`font-bold text-2xl sm:text-3xl ${card.valCls}`}>{card.value}</span>
                {card.bar && (
                  <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden mt-1">
                    <div className="w-[74%] rounded-full bg-[#ff6900] h-full" />
                  </div>
                )}
                {card.delta && (
                  <span className={`inline-flex font-medium text-xs items-center gap-1 ${card.up ? "text-[#1E8E3E]" : "text-[#71717b]"}`}>
                    {card.up ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
                    {card.delta}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Charts — stacked on mobile, side-by-side on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6 flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-base">Ward Performance</h3>
              <p className="text-[#71717b] text-xs">Issues reported vs resolved across top wards</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={wardPerf} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
                <XAxis dataKey="ward" tick={{ fontSize: 11, fill: "#71717b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#71717b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e4e4e7" }} />
                <Bar dataKey="reported" name="Reported" fill="#ff6900" radius={[4,4,0,0]} />
                <Bar dataKey="resolved" name="Resolved" fill="#1E8E3E" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-5">
              {[["#ff6900","Reported"],["#1E8E3E","Resolved"]].map(([c,l]) => (
                <span key={l} className="inline-flex text-[#71717b] text-xs items-center gap-2">
                  <span className="size-2.5 rounded-full" style={{ background: c }} />{l}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6 flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-base">Project Progress</h3>
              <p className="text-[#71717b] text-xs">Development status breakdown</p>
            </div>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={projectPie} dataKey="value" innerRadius={48} outerRadius={72} strokeWidth={2}>
                  {projectPie.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2 pt-1">
              {projectPie.map(item => (
                <div key={item.name} className="text-xs flex justify-between items-center">
                  <span className="inline-flex text-[#71717b] items-center gap-2">
                    <span className="size-2.5 rounded-full" style={{ background: item.color }} />
                    {item.name}
                  </span>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Community Metrics — stacked on mobile, 3-col on md */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-base">Community Metrics</h3>
            <p className="text-[#71717b] text-xs">How citizens experience governance in this constituency</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
            {[
              { icon: <Smile className="size-4 text-[#1E8E3E]" />, label: "Citizen Satisfaction", value: 86, sub: "Based on 9,240 feedback responses" },
              { icon: <Timer className="size-4 text-[#1E8E3E]" />, label: "Response Time Avg", value: 72, sub: "Avg first response: 2.4 days" },
              { icon: <HandHeart className="size-4 text-[#1E8E3E]" />, label: "Participation Rate", value: 64, sub: "Active reporters this quarter" },
            ].map(m => (
              <div key={m.label} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm flex items-center gap-2">{m.icon}{m.label}</span>
                  <span className="font-bold text-[#1E8E3E] text-sm">{m.value}%</span>
                </div>
                <div className="rounded-full bg-zinc-100 w-full h-2.5 overflow-hidden">
                  <div className="rounded-full bg-[#1E8E3E] h-full" style={{ width: `${m.value}%` }} />
                </div>
                <span className="text-[#71717b] text-xs">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ward Table — scrollable on mobile */}
        <div className="bg-white rounded-2xl border border-zinc-200 flex flex-col">
          <div className="px-4 sm:px-6 py-4 border-b border-zinc-200 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-base">Ward-Level Accountability</h3>
              <p className="text-[#71717b] text-xs">Detailed performance breakdown by ward</p>
            </div>
            <button className="inline-flex font-medium rounded-lg text-xs sm:text-sm border border-zinc-200 px-3 sm:px-4 py-2 items-center gap-2 hover:bg-zinc-50">
              <Download className="size-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200">
                  {["Ward Name","Issues Reported","Resolved %","Budget Spent","Status"].map(h => (
                    <th key={h} className="px-4 sm:px-6 py-3 text-left font-semibold text-[#71717b] text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {wardTable.map(row => (
                  <tr key={row.name} className={`hover:bg-zinc-50 ${row.priority ? "border-l-2 border-l-[#ff6900]" : ""}`}>
                    <td className="px-4 sm:px-6 py-3 font-medium">
                      <span className="flex items-center gap-2">
                        {row.priority && <Flag className="size-3.5 text-[#ff6900] shrink-0" />}
                        {row.name}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 text-[#71717b]">{row.reported}</td>
                    <td className="px-4 sm:px-6 py-3">
                      <span className="inline-flex items-center gap-2">
                        <div className="rounded-full bg-zinc-100 w-16 h-1.5 overflow-hidden">
                          <div className="rounded-full h-full" style={{ width: `${row.resolvedPct}%`, background: row.resolvedPct >= 70 ? "#1E8E3E" : "#ff6900" }} />
                        </div>
                        <span className="text-xs font-medium">{row.resolvedPct}%</span>
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 text-[#71717b]">{row.budget}</td>
                    <td className="px-4 sm:px-6 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
