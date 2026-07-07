"use client";

/**
 * /citizen/transparency
 * Wrapped by CitizenLayout (from app/citizen/layout.tsx).
 * Renders the transparency content WITHOUT its own header — CitizenLayout provides the nav.
 */

import {
  CheckCircle2, Clock, DollarSign, Users, ArrowUpRight, ArrowDownRight,
  Smile, Timer, HandHeart, Download, Flag, Eye, Search,
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

export default function CitizenTransparencyPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <div className="flex items-center gap-3">
        <Eye className="size-5 text-[#ff6900]" />
        <div>
          <h1 className="font-bold text-xl tracking-tight">Public Transparency Dashboard</h1>
          <p className="text-[#71717b] text-sm mt-0.5">
            Real-time accountability — every report, resolution, and rupee tracked openly.
          </p>
        </div>
        <span className="ml-auto inline-flex font-medium rounded-full bg-zinc-100 text-[#71717b] text-[11px] px-2.5 py-1 items-center gap-1">
          <span className="size-1.5 rounded-full bg-[#1E8E3E]" />
          Live Data
        </span>
      </div>

      {/* Search bar */}
      <div className="relative max-w-sm">
        <Search className="size-4 text-[#71717b] absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          className="w-full rounded-xl border border-zinc-200 bg-white pl-9 pr-4 h-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
          placeholder="Search wards, projects..."
        />
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Resolved Issues",   value: "12,847", delta: "+8.2% this month", up: true,  icon: <CheckCircle2 className="size-4 text-[#1E8E3E]" />, iconBg: "bg-[#1E8E3E]/10", valCls: "text-[#1E8E3E]" },
          { label: "Pending Issues",    value: "2,134",  delta: "−3.1% this month", up: false, icon: <Clock className="size-4 text-[#ff6900]" />,      iconBg: "bg-[#ff6900]/10",  valCls: "text-[#ff6900]" },
          { label: "Budget Utilization",value: "74%",    bar: true,                             icon: <DollarSign className="size-4 text-[#ff6900]" />, iconBg: "bg-[#ff6900]/10",  valCls: "text-zinc-950" },
          { label: "Total Reports",     value: "14,981", delta: "+412 new today",  up: true,  icon: <Users className="size-4 text-[#71717b]" />,      iconBg: "bg-zinc-100",       valCls: "text-zinc-950" },
        ].map(card => (
          <div key={card.label} className="bg-white rounded-2xl border border-zinc-200 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-[#71717b] text-xs">{card.label}</span>
              <div className={`size-8 rounded-lg ${card.iconBg} flex justify-center items-center`}>{card.icon}</div>
            </div>
            <div className="flex flex-col gap-1">
              <span className={`font-bold text-2xl ${card.valCls}`}>{card.value}</span>
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col gap-4">
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

        <div className="bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-base">Project Progress</h3>
            <p className="text-[#71717b] text-xs">Development status</p>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={projectPie} dataKey="value" innerRadius={48} outerRadius={72} strokeWidth={2}>
                {projectPie.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2">
            {projectPie.map(item => (
              <div key={item.name} className="text-xs flex justify-between items-center">
                <span className="inline-flex text-[#71717b] items-center gap-2">
                  <span className="size-2.5 rounded-full" style={{ background: item.color }} />{item.name}
                </span>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Metrics */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-5 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-base">Community Metrics</h3>
          <p className="text-[#71717b] text-xs">How citizens experience governance</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: <Smile className="size-4 text-[#1E8E3E]" />, label: "Citizen Satisfaction",  value: 86, sub: "9,240 feedback responses" },
            { icon: <Timer className="size-4 text-[#1E8E3E]" />, label: "Response Time Avg",     value: 72, sub: "Avg 2.4 days first response" },
            { icon: <HandHeart className="size-4 text-[#1E8E3E]" />, label: "Participation Rate", value: 64, sub: "Active reporters this quarter" },
          ].map(m => (
            <div key={m.label} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm flex items-center gap-2">{m.icon}{m.label}</span>
                <span className="font-bold text-[#1E8E3E] text-sm">{m.value}%</span>
              </div>
              <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                <div className="rounded-full bg-[#1E8E3E] h-full" style={{ width: `${m.value}%` }} />
              </div>
              <span className="text-[#71717b] text-xs">{m.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ward table */}
      <div className="bg-white rounded-2xl border border-zinc-200 flex flex-col">
        <div className="px-5 py-4 border-b border-zinc-200 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-base">Ward-Level Accountability</h3>
            <p className="text-[#71717b] text-xs">Performance breakdown by ward</p>
          </div>
          <button className="inline-flex font-medium rounded-lg text-xs border border-zinc-200 px-3 py-2 items-center gap-2 hover:bg-zinc-50">
            <Download className="size-4" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[520px]">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                {["Ward Name","Issues Reported","Resolved %","Budget Spent","Status"].map(h => (
                  <th key={h} className="px-5 py-3 text-left font-semibold text-[#71717b] text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {wardTable.map(row => (
                <tr key={row.name} className={`hover:bg-zinc-50 ${row.priority ? "border-l-2 border-l-[#ff6900]" : ""}`}>
                  <td className="px-5 py-3 font-medium">
                    <span className="flex items-center gap-2">
                      {row.priority && <Flag className="size-3.5 text-[#ff6900] shrink-0" />}
                      {row.name}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[#71717b]">{row.reported}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-2">
                      <div className="rounded-full bg-zinc-100 w-16 h-1.5 overflow-hidden">
                        <div className="rounded-full h-full" style={{ width: `${row.resolvedPct}%`, background: row.resolvedPct >= 70 ? "#1E8E3E" : "#ff6900" }} />
                      </div>
                      <span className="text-xs font-medium">{row.resolvedPct}%</span>
                    </span>
                  </td>
                  <td className="px-5 py-3 text-[#71717b]">{row.budget}</td>
                  <td className="px-5 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.statusCls}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
