"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileBarChart, Download, Eye, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: "RPT-001",
    title: "Monthly Constituency Report – June 2025",
    desc: "Complete overview of complaints, resolutions, ward performance, and budget utilization for June 2025.",
    type: "Monthly",
    date: "20 Jun 2025",
    size: "2.4 MB",
    status: "Ready",
  },
  {
    id: "RPT-002",
    title: "Emergency Response Summary – Q2 2025",
    desc: "Detailed breakdown of all emergency alerts, response times, and outcomes for Q2 2025.",
    type: "Quarterly",
    date: "01 Jun 2025",
    size: "4.1 MB",
    status: "Ready",
  },
  {
    id: "RPT-003",
    title: "Budget Utilization Report – FY 2025–26",
    desc: "Financial summary of budget allocation, expenditure, and variance analysis across all categories.",
    type: "Financial",
    date: "15 May 2025",
    size: "1.8 MB",
    status: "Ready",
  },
  {
    id: "RPT-004",
    title: "AI Priority Score Analysis – Ward-wise",
    desc: "AI-generated priority score breakdown for all 15 wards with trend analysis and recommendations.",
    type: "AI Report",
    date: "10 May 2025",
    size: "3.2 MB",
    status: "Ready",
  },
  {
    id: "RPT-005",
    title: "Heatmap Density Report – May 2025",
    desc: "Geographic complaint density analysis with heatmap snapshots and hotspot identification.",
    type: "Geospatial",
    date: "01 May 2025",
    size: "6.7 MB",
    status: "Ready",
  },
  {
    id: "RPT-006",
    title: "Citizen Satisfaction Survey Report",
    desc: "Analysis of citizen feedback, satisfaction scores, and sentiment trends from survey responses.",
    type: "Survey",
    date: "Generating…",
    size: "—",
    status: "Processing",
  },
];

const typeCls: Record<string, string> = {
  Monthly: "bg-[#ff6900]/10 text-[#ff6900]",
  Quarterly: "bg-[#1E88E5]/10 text-[#1E88E5]",
  Financial: "bg-amber-50 text-amber-700",
  "AI Report": "bg-purple-50 text-purple-700",
  Geospatial: "bg-cyan-50 text-cyan-700",
  Survey: "bg-red-50 text-red-600",
};

const statusCls: Record<string, string> = {
  Ready: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
  Processing: "bg-[#ff6900]/10 text-[#ff6900]",
};

export default function ReportsPage() {
  return (
    <DashboardLayout
      title="Reports & Exports"
      subtitle="Generate, view, and download detailed reports for your constituency."
    >
      {/* Stats — responsive: 2 col on mobile → 4 col on sm+ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Reports", value: "48", color: "text-[#ff6900]" },
          { label: "This Month", value: "12", color: "text-[#1E88E5]" },
          { label: "Pending", value: "3", color: "text-amber-600" },
          { label: "Downloads", value: "241", color: "text-[#1E8E3E]" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200"
          >
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-[#71717b] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search + action */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-zinc-200 mb-5 flex items-center gap-3">
        <div className="relative flex-1">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717b]"
          />
          <input
            placeholder="Search reports..."
            className="w-full pl-8 pr-3 py-2 text-xs border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ff6900] bg-zinc-50"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#ff6900] text-orange-50 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shrink-0">
          <Plus size={13} />
          Generate Report
        </button>
      </div>

      {/* Grid — 1 col on mobile, 2 col on lg+ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 hover:shadow-md hover:border-[#ff6900]/30 transition-all group"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff6900]/10 flex items-center justify-center flex-shrink-0">
                <FileBarChart size={18} className="text-[#ff6900]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-zinc-950 leading-tight group-hover:text-[#ff6900] transition-colors">
                    {report.title}
                  </h3>
                  <span
                    className={cn(
                      "text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0",
                      statusCls[report.status]
                    )}
                  >
                    {report.status}
                  </span>
                </div>
                <p className="text-xs text-[#71717b] leading-relaxed mb-3">
                  {report.desc}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className={cn(
                      "text-[10px] font-semibold px-2 py-0.5 rounded-full",
                      typeCls[report.type]
                    )}
                  >
                    {report.type}
                  </span>
                  <span className="text-[10px] text-[#a1a1aa]">{report.date}</span>
                  {report.size !== "—" && (
                    <span className="text-[10px] text-[#a1a1aa]">{report.size}</span>
                  )}
                  <div className="ml-auto flex items-center gap-1">
                    <button
                      className="p-1.5 hover:bg-zinc-50 rounded-lg transition-colors"
                      title="Preview"
                    >
                      <Eye size={13} className="text-[#71717b]" />
                    </button>
                    {report.status === "Ready" && (
                      <button
                        className="p-1.5 hover:bg-[#ff6900]/10 rounded-lg transition-colors"
                        title="Download"
                      >
                        <Download size={13} className="text-[#ff6900]" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
