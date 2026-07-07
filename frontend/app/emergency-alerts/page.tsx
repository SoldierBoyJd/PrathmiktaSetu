"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { AlertTriangle, CheckCircle, Clock, Send, X, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  { id: "EA-001", title: "Flash Flood Warning – Ward 9", desc: "Heavy rainfall forecast. Drain overflow imminent at Sector B and C. Immediate evacuation advisory for low-lying areas.", type: "Critical", time: "20 Jun 2025, 08:15 AM", wards: ["Ward 9", "Ward 10"], status: "Active" },
  { id: "EA-002", title: "Water Contamination – Ward 8", desc: "Lab tests indicate bacterial contamination in the main supply line. Do not use tap water for drinking or cooking.", type: "Critical", time: "19 Jun 2025, 06:30 PM", wards: ["Ward 8"], status: "Active" },
  { id: "EA-003", title: "Road Cave-In – Ward 12, Ring Road", desc: "Partial road collapse detected on Ring Road near km 4.2. Traffic diversion in place. Repair crew dispatched.", type: "Warning", time: "19 Jun 2025, 02:45 PM", wards: ["Ward 12"], status: "In Progress" },
  { id: "EA-004", title: "Power Outage – Ward 5, Sector A", desc: "Transformer failure. 1,200 households without power. Replacement unit being installed. ETA: 6 hours.", type: "Warning", time: "18 Jun 2025, 11:00 AM", wards: ["Ward 5"], status: "In Progress" },
  { id: "EA-005", title: "Disease Outbreak Monitoring – Ward 3", desc: "Cluster of fever cases reported. Health team deployed for door-to-door screening. No confirmed outbreak yet.", type: "Info", time: "17 Jun 2025, 09:20 AM", wards: ["Ward 3"], status: "Resolved" },
];

const typeConfig: Record<string, { borderCls: string; badgeCls: string; icon: React.ReactNode }> = {
  Critical: { borderCls: "border-l-red-500", badgeCls: "bg-red-50 text-red-600", icon: <AlertTriangle size={15} className="text-red-600" /> },
  Warning: { borderCls: "border-l-[#ff6900]", badgeCls: "bg-[#ff6900]/10 text-[#ff6900]", icon: <Clock size={15} className="text-[#ff6900]" /> },
  Info: { borderCls: "border-l-[#1E88E5]", badgeCls: "bg-[#1E88E5]/10 text-[#1E88E5]", icon: <Bell size={15} className="text-[#1E88E5]" /> },
};

const statusCls: Record<string, string> = {
  Active: "bg-red-50 text-red-600",
  "In Progress": "bg-[#1E88E5]/10 text-[#1E88E5]",
  Resolved: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
};

const FILTERS = ["All", "Critical", "Warning", "Info", "Active", "Resolved"];

export default function EmergencyAlertsPage() {
  const [filter, setFilter] = useState("All");

  const filtered = alerts.filter(a =>
    filter === "All" || a.type === filter || a.status === filter
  );

  return (
    <DashboardLayout title="Emergency Alerts" subtitle="Real-time critical alerts and emergency notifications for your constituency.">
      {/* Summary */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Alerts", value: "243", color: "text-zinc-950" },
          { label: "Critical", value: "18", color: "text-red-600" },
          { label: "Active", value: "47", color: "text-[#ff6900]" },
          { label: "Resolved Today", value: "12", color: "text-[#1E8E3E]" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center gap-3">
            <span className={`text-2xl font-bold ${s.color}`}>{s.value}</span>
            <span className="text-xs text-[#71717b]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Actions + Filters */}
      <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn("px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                filter === f ? "bg-[#ff6900] text-orange-50" : "bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          <Send size={13} />Broadcast Alert
        </button>
      </div>

      {/* Alerts */}
      <div className="space-y-3">
        {filtered.map(alert => {
          const cfg = typeConfig[alert.type];
          return (
            <div key={alert.id} className={cn("bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 border-l-4 hover:shadow-md transition-shadow", cfg.borderCls)}>
              <div className="flex items-start gap-3">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0", cfg.badgeCls.replace("text-","bg-").replace("bg-","bg-").split(" ")[0] + "/10")}>
                  {cfg.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono text-[#71717b]">{alert.id}</span>
                      <h3 className="text-sm font-semibold text-zinc-950">{alert.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", cfg.badgeCls)}>{alert.type}</span>
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", statusCls[alert.status])}>{alert.status}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#71717b] leading-relaxed mb-2">{alert.desc}</p>
                  <div className="flex items-center gap-3 text-[10px] text-[#a1a1aa]">
                    <span>{alert.time}</span>
                    <span>·</span>
                    <span>{alert.wards.join(", ")}</span>
                  </div>
                </div>
                {alert.status !== "Resolved" && (
                  <button className="p-1.5 hover:bg-zinc-50 rounded-lg transition-colors flex-shrink-0">
                    <X size={13} className="text-[#a1a1aa]" />
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
