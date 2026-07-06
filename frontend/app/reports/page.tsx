"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { FileBarChart, Download, Eye, Plus, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const reports = [
  {
    id: "RPT-001",
    title: "Monthly Constituency Report – June 2025",
    description: "Complete overview of complaints, resolutions, ward performance, and budget utilization for June 2025.",
    type: "Monthly",
    generatedOn: "20 Jun 2025",
    size: "2.4 MB",
    status: "Ready",
  },
  {
    id: "RPT-002",
    title: "Emergency Response Summary – Q2 2025",
    description: "Detailed breakdown of all emergency alerts, response times, and outcomes for Q2 2025.",
    type: "Quarterly",
    generatedOn: "01 Jun 2025",
    size: "4.1 MB",
    status: "Ready",
  },
  {
    id: "RPT-003",
    title: "Budget Utilization Report – FY 2025–26",
    description: "Financial summary of budget allocation, expenditure, and variance analysis across all categories.",
    type: "Financial",
    generatedOn: "15 May 2025",
    size: "1.8 MB",
    status: "Ready",
  },
  {
    id: "RPT-004",
    title: "AI Priority Score Analysis – Ward-wise",
    description: "AI-generated priority score breakdown for all 15 wards with trend analysis and recommendations.",
    type: "AI Report",
    generatedOn: "10 May 2025",
    size: "3.2 MB",
    status: "Ready",
  },
  {
    id: "RPT-005",
    title: "Heatmap Density Report – May 2025",
    description: "Geographic complaint density analysis with heatmap snapshots and hotspot identification.",
    type: "Geospatial",
    generatedOn: "01 May 2025",
    size: "6.7 MB",
    status: "Ready",
  },
  {
    id: "RPT-006",
    title: "Citizen Satisfaction Survey Report",
    description: "Analysis of citizen feedback, satisfaction scores, and sentiment trends from survey responses.",
    type: "Survey",
    generatedOn: "Generating…",
    size: "—",
    status: "Processing",
  },
];

const typeColors: Record<string, string> = {
  Monthly: "bg-[#E8F5E9] text-[#2D7A3A]",
  Quarterly: "bg-[#EBF8FF] text-[#2980B9]",
  Financial: "bg-[#FFF7E6] text-[#F5831F]",
  "AI Report": "bg-[#F3E8FF] text-[#9B59B6]",
  Geospatial: "bg-[#E0F7FA] text-[#00838F]",
  Survey: "bg-[#FEF2F2] text-[#E74C3C]",
};

const statusColors: Record<string, string> = {
  Ready: "bg-[#F0FDF4] text-[#27AE60]",
  Processing: "bg-[#FFF7E6] text-[#F5831F]",
};

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Reports & Exports"
        subtitle="Generate, view, and download detailed reports for your constituency."
        actions={
          <button className="flex items-center gap-2 bg-[#2D7A3A] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#246130] transition-colors">
            <Plus size={13} />
            Generate Report
          </button>
        }
      />

      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Reports", value: "48", color: "#2D7A3A" },
          { label: "Generated This Month", value: "12", color: "#2980B9" },
          { label: "Pending Generation", value: "3", color: "#F5831F" },
          { label: "Total Downloads", value: "241", color: "#9B59B6" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0]">
            <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
            <p className="text-xs text-[#718096] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-[#E2E8F0] mb-4">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]" />
          <input
            placeholder="Search reports..."
            className="w-full pl-8 pr-3 py-2 text-xs border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D7A3A] bg-[#F8FAFC]"
          />
        </div>
      </div>

      {/* Reports grid */}
      <div className="grid grid-cols-2 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] hover:shadow-md hover:border-[#C6E6CB] transition-all group">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                <FileBarChart size={18} className="text-[#2D7A3A]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-[#1A2332] leading-tight group-hover:text-[#2D7A3A] transition-colors">
                    {report.title}
                  </h3>
                  <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0", statusColors[report.status])}>
                    {report.status}
                  </span>
                </div>
                <p className="text-xs text-[#718096] leading-relaxed mb-3">{report.description}</p>
                <div className="flex items-center gap-3">
                  <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", typeColors[report.type])}>
                    {report.type}
                  </span>
                  <span className="text-[10px] text-[#A0AEC0]">{report.generatedOn}</span>
                  {report.size !== "—" && (
                    <span className="text-[10px] text-[#A0AEC0]">{report.size}</span>
                  )}
                  <div className="ml-auto flex items-center gap-1">
                    <button className="p-1.5 hover:bg-[#F5F7FA] rounded-lg transition-colors" title="Preview">
                      <Eye size={13} className="text-[#718096]" />
                    </button>
                    {report.status === "Ready" && (
                      <button className="p-1.5 hover:bg-[#E8F5E9] rounded-lg transition-colors" title="Download">
                        <Download size={13} className="text-[#2D7A3A]" />
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
