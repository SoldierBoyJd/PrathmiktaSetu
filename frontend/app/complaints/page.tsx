"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { Search, Filter, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_COMPLAINTS = [
  { id: "PS-0841", title: "Potholes on Main Road", ward: "Ward 12", category: "Roads", priority: "High", status: "In Progress", date: "20 Jun 2025" },
  { id: "PS-0847", title: "Water leakage in pipeline", ward: "Ward 8", category: "Water Supply", priority: "Decline", status: "In Progress", date: "20 Jun 2025" },
  { id: "PS-0828", title: "Garbage not collected", ward: "Ward 15", category: "Sanitation", priority: "Medium", status: "Pending", date: "19 Jun 2025" },
  { id: "PS-0838", title: "Drain overflow", ward: "Ward 9", category: "Sanitation", priority: "High", status: "In Progress", date: "19 Jun 2025" },
  { id: "PS-0812", title: "Street light not working", ward: "Ward 5", category: "Electricity", priority: "Low", status: "Resolved", date: "18 Jun 2025" },
  { id: "PS-0800", title: "Broken footpath tiles", ward: "Ward 3", category: "Roads", priority: "Medium", status: "Resolved", date: "17 Jun 2025" },
  { id: "PS-0798", title: "No water supply for 3 days", ward: "Ward 11", category: "Water Supply", priority: "High", status: "Pending", date: "17 Jun 2025" },
  { id: "PS-0791", title: "Open manhole cover", ward: "Ward 7", category: "Sanitation", priority: "High", status: "Resolved", date: "16 Jun 2025" },
];

const priorityStyles: Record<string, string> = {
  High: "bg-[#FEF2F2] text-[#E74C3C]",
  Medium: "bg-[#FFF7E6] text-[#F5831F]",
  Low: "bg-[#F0FDF4] text-[#27AE60]",
  Decline: "bg-[#EBF8FF] text-[#2980B9]",
};
const statusStyles: Record<string, string> = {
  "In Progress": "bg-[#EBF8FF] text-[#2980B9]",
  Pending: "bg-[#FFF7E6] text-[#F5831F]",
  Resolved: "bg-[#F0FDF4] text-[#27AE60]",
};

const STATUSES = ["All", "Pending", "In Progress", "Resolved"];

export default function ComplaintsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = ALL_COMPLAINTS.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Complaints"
        subtitle="Manage and track all constituency complaints in one place."
        actions={
          <button className="flex items-center gap-2 bg-[#2D7A3A] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#246130] transition-colors">
            <Plus size={14} />
            New Complaint
          </button>
        }
      />

      {/* Filters bar */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-[#E2E8F0] mb-4 flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AEC0]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search complaints..."
            className="w-full pl-8 pr-3 py-2 text-xs border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#2D7A3A] bg-[#F8FAFC]"
          />
        </div>

        <div className="flex items-center gap-1">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                statusFilter === s
                  ? "bg-[#2D7A3A] text-white"
                  : "bg-[#F5F7FA] text-[#4A5568] hover:bg-[#E8F5E9] hover:text-[#2D7A3A]"
              )}
            >
              {s}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E2E8F0] rounded-lg text-xs text-[#4A5568] hover:bg-[#F5F7FA]">
          <Filter size={12} />
          More Filters
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0]">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                {["ID", "Title", "Ward", "Category", "Priority", "Status", "Reported", "Action"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F0F0F0]">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-4 py-3 font-mono font-medium text-[#2D7A3A]">{c.id}</td>
                  <td className="px-4 py-3 font-medium text-[#1A2332] max-w-[200px] truncate">{c.title}</td>
                  <td className="px-4 py-3 text-[#718096]">{c.ward}</td>
                  <td className="px-4 py-3 text-[#4A5568]">{c.category}</td>
                  <td className="px-4 py-3">
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", priorityStyles[c.priority])}>
                      {c.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", statusStyles[c.status])}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#718096] whitespace-nowrap">{c.date}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-[#E8F5E9] transition-colors">
                      <Eye size={13} className="text-[#2D7A3A]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#E2E8F0]">
          <p className="text-xs text-[#718096]">
            Showing <span className="font-semibold text-[#1A2332]">{filtered.length}</span> of{" "}
            <span className="font-semibold text-[#1A2332]">12,842</span> complaints
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg hover:bg-[#F5F7FA] border border-[#E2E8F0]">
              <ChevronLeft size={13} className="text-[#718096]" />
            </button>
            {[1, 2, 3, "...", 10].map((p, i) => (
              <button
                key={i}
                className={cn(
                  "w-7 h-7 rounded-lg text-xs font-medium",
                  p === 1 ? "bg-[#2D7A3A] text-white" : "hover:bg-[#F5F7FA] text-[#718096] border border-[#E2E8F0]"
                )}
              >
                {p}
              </button>
            ))}
            <button className="p-1.5 rounded-lg hover:bg-[#F5F7FA] border border-[#E2E8F0]">
              <ChevronRight size={13} className="text-[#718096]" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
