"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { AlertTriangle, CheckCircle, Clock, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: "EA-001",
    title: "Flash Flood Warning – Ward 9",
    description: "Heavy rainfall forecast. Drain overflow imminent at Sector B and C. Immediate evacuation advisory for low-lying areas.",
    type: "Critical",
    timestamp: "20 Jun 2025, 08:15 AM",
    affectedWards: ["Ward 9", "Ward 10"],
    status: "Active",
  },
  {
    id: "EA-002",
    title: "Water Contamination – Ward 8",
    description: "Lab tests indicate bacterial contamination in the main supply line. Do not use tap water for drinking or cooking.",
    type: "Critical",
    timestamp: "19 Jun 2025, 06:30 PM",
    affectedWards: ["Ward 8"],
    status: "Active",
  },
  {
    id: "EA-003",
    title: "Road Cave-In – Ward 12, Ring Road",
    description: "Partial road collapse detected on Ring Road near km 4.2. Traffic diversion in place. Repair crew dispatched.",
    type: "Warning",
    timestamp: "19 Jun 2025, 02:45 PM",
    affectedWards: ["Ward 12"],
    status: "In Progress",
  },
  {
    id: "EA-004",
    title: "Power Outage – Ward 5, Sector A",
    description: "Transformer failure. 1,200 households without power. Replacement unit being installed. ETA: 6 hours.",
    type: "Warning",
    timestamp: "18 Jun 2025, 11:00 AM",
    affectedWards: ["Ward 5"],
    status: "In Progress",
  },
  {
    id: "EA-005",
    title: "Disease Outbreak Monitoring – Ward 3",
    description: "Cluster of fever cases reported. Health team deployed for door-to-door screening. No confirmed outbreak yet.",
    type: "Info",
    timestamp: "17 Jun 2025, 09:20 AM",
    affectedWards: ["Ward 3"],
    status: "Resolved",
  },
];

const typeConfig: Record<string, { bg: string; text: string; border: string; icon: React.ReactNode }> = {
  Critical: {
    bg: "bg-[#FEF2F2]",
    text: "text-[#E74C3C]",
    border: "border-l-[#E74C3C]",
    icon: <AlertTriangle size={16} className="text-[#E74C3C]" />,
  },
  Warning: {
    bg: "bg-[#FFF7E6]",
    text: "text-[#F5831F]",
    border: "border-l-[#F5831F]",
    icon: <Clock size={16} className="text-[#F5831F]" />,
  },
  Info: {
    bg: "bg-[#EBF8FF]",
    text: "text-[#2980B9]",
    border: "border-l-[#2980B9]",
    icon: <CheckCircle size={16} className="text-[#2980B9]" />,
  },
};

const statusConfig: Record<string, string> = {
  Active: "bg-[#FEF2F2] text-[#E74C3C]",
  "In Progress": "bg-[#EBF8FF] text-[#2980B9]",
  Resolved: "bg-[#F0FDF4] text-[#27AE60]",
};

export default function EmergencyAlertsPage() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Critical", "Warning", "Info", "Active", "Resolved"];

  const filtered = alerts.filter((a) => {
    if (filter === "All") return true;
    return a.type === filter || a.status === filter;
  });

  return (
    <DashboardLayout>
      <PageHeader
        title="Emergency Alerts"
        subtitle="Real-time critical alerts and emergency notifications for your constituency."
        actions={
          <button className="flex items-center gap-2 bg-[#E74C3C] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#C0392B] transition-colors">
            <Send size={13} />
            Broadcast Alert
          </button>
        }
      />

      {/* Summary strip */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Alerts", value: "243", color: "#1A2332" },
          { label: "Critical", value: "18", color: "#E74C3C" },
          { label: "Active", value: "47", color: "#F5831F" },
          { label: "Resolved Today", value: "12", color: "#27AE60" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] flex items-center gap-3">
            <span className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</span>
            <span className="text-xs text-[#718096]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
              filter === f
                ? "bg-[#2D7A3A] text-white"
                : "bg-white border border-[#E2E8F0] text-[#4A5568] hover:bg-[#F5F7FA]"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Alerts list */}
      <div className="space-y-3">
        {filtered.map((alert) => {
          const cfg = typeConfig[alert.type];
          return (
            <div
              key={alert.id}
              className={cn(
                "bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] border-l-4 hover:shadow-md transition-shadow",
                cfg.border
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", cfg.bg)}>
                  {cfg.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#A0AEC0]">{alert.id}</span>
                      <h3 className="text-sm font-semibold text-[#1A2332]">{alert.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", cfg.bg, cfg.text)}>
                        {alert.type}
                      </span>
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", statusConfig[alert.status])}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#718096] mb-2 leading-relaxed">{alert.description}</p>
                  <div className="flex items-center gap-3 text-[10px] text-[#A0AEC0]">
                    <span>{alert.timestamp}</span>
                    <span>•</span>
                    <span>{alert.affectedWards.join(", ")}</span>
                  </div>
                </div>
                {alert.status !== "Resolved" && (
                  <button className="p-1.5 hover:bg-[#F5F7FA] rounded-lg transition-colors flex-shrink-0">
                    <X size={13} className="text-[#A0AEC0]" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
