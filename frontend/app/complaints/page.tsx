"use client";

import { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Search, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_COMPLAINTS = [
  {
    id: "PS-0841",
    title: "Potholes on Main Road",
    ward: "Ward 12",
    category: "Roads",
    priority: "High",
    status: "In Progress",
    date: "20 Jun 2025",
  },
  {
    id: "PS-0847",
    title: "Water leakage in pipeline",
    ward: "Ward 8",
    category: "Water Supply",
    priority: "High",
    status: "In Progress",
    date: "20 Jun 2025",
  },
  {
    id: "PS-0828",
    title: "Garbage not collected",
    ward: "Ward 15",
    category: "Sanitation",
    priority: "Medium",
    status: "Pending",
    date: "19 Jun 2025",
  },
  {
    id: "PS-0838",
    title: "Drain overflow",
    ward: "Ward 9",
    category: "Sanitation",
    priority: "High",
    status: "In Progress",
    date: "19 Jun 2025",
  },
  {
    id: "PS-0812",
    title: "Street light not working",
    ward: "Ward 5",
    category: "Electricity",
    priority: "Low",
    status: "Resolved",
    date: "18 Jun 2025",
  },
  {
    id: "PS-0800",
    title: "Broken footpath tiles",
    ward: "Ward 3",
    category: "Roads",
    priority: "Medium",
    status: "Resolved",
    date: "17 Jun 2025",
  },
  {
    id: "PS-0798",
    title: "No water supply for 3 days",
    ward: "Ward 11",
    category: "Water Supply",
    priority: "High",
    status: "Pending",
    date: "17 Jun 2025",
  },
  {
    id: "PS-0791",
    title: "Open manhole cover",
    ward: "Ward 7",
    category: "Sanitation",
    priority: "High",
    status: "Resolved",
    date: "16 Jun 2025",
  },
];

const priorityStyles: Record<string, string> = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-[#ff6900]/10 text-[#ff6900]",
  Low: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
};

const statusStyles: Record<string, string> = {
  "In Progress": "bg-[#1E88E5]/10 text-[#1E88E5]",
  Pending: "bg-[#ff6900]/10 text-[#ff6900]",
  Resolved: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
};

const STATUSES = ["All", "Pending", "In Progress", "Resolved"];

export default function ComplaintsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = ALL_COMPLAINTS.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus =
      statusFilter === "All" || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <DashboardLayout
      title="Complaints"
      subtitle="Manage and track all constituency complaints in one place."
    >
      {/* Filters */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-zinc-200 mb-5 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[180px]">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717b]"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search complaints..."
            className="w-full pl-8 pr-3 py-2 text-xs border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#ff6900] bg-zinc-50"
          />
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                statusFilter === s
                  ? "bg-[#ff6900] text-orange-50"
                  : "bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <Link
          href="/submit-complaint"
          className="flex items-center gap-2 bg-[#ff6900] text-orange-50 text-xs font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors ml-auto"
        >
          <Plus size={13} />
          New Complaint
        </Link>
      </div>

      {/* Table — horizontally scrollable on mobile */}
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200">
        <div className="overflow-x-auto">
          <table className="w-full text-xs min-w-[640px]">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                {[
                  "ID",
                  "Title",
                  "Ward",
                  "Category",
                  "Priority",
                  "Status",
                  "Reported",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-[#71717b] uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-4 py-3 font-mono font-medium text-[#ff6900] whitespace-nowrap">
                    {c.id}
                  </td>
                  <td className="px-4 py-3 font-medium text-zinc-950 max-w-[200px] truncate">
                    {c.title}
                  </td>
                  <td className="px-4 py-3 text-[#71717b] whitespace-nowrap">
                    {c.ward}
                  </td>
                  <td className="px-4 py-3 text-zinc-700 whitespace-nowrap">
                    {c.category}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap",
                        priorityStyles[c.priority]
                      )}
                    >
                      {c.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-semibold whitespace-nowrap",
                        statusStyles[c.status]
                      )}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[#71717b] whitespace-nowrap">
                    {c.date}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/issues/${c.id}`}
                      className="p-1.5 rounded-lg hover:bg-[#ff6900]/10 transition-colors inline-flex"
                    >
                      <Eye size={13} className="text-[#ff6900]" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-zinc-200">
          <p className="text-xs text-[#71717b]">
            Showing{" "}
            <span className="font-semibold text-zinc-950">{filtered.length}</span>{" "}
            of{" "}
            <span className="font-semibold text-zinc-950">12,842</span>{" "}
            complaints
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg hover:bg-zinc-50 border border-zinc-200">
              <ChevronLeft size={13} className="text-[#71717b]" />
            </button>
            {[1, 2, 3, "...", 10].map((p, i) => (
              <button
                key={i}
                className={cn(
                  "w-7 h-7 rounded-lg text-xs font-medium",
                  p === 1
                    ? "bg-[#ff6900] text-orange-50"
                    : "hover:bg-zinc-50 text-[#71717b] border border-zinc-200"
                )}
              >
                {p}
              </button>
            ))}
            <button className="p-1.5 rounded-lg hover:bg-zinc-50 border border-zinc-200">
              <ChevronRight size={13} className="text-[#71717b]" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
