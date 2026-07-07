"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { User, Bell, Lock, Palette, Database, Save } from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
  { id: "preferences", label: "Preferences", icon: Palette },
  { id: "data", label: "Data & Privacy", icon: Database },
];

function Toggle({ defaultChecked = false }: { defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      onClick={() => setOn(!on)}
      className={cn(
        "relative w-10 h-5 rounded-full transition-colors",
        on ? "bg-[#ff6900]" : "bg-zinc-200"
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform",
          on ? "translate-x-5" : "translate-x-0.5"
        )}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout
      title="Settings"
      subtitle="Manage your account, notifications, and platform preferences."
    >
      {/* Responsive: stack on mobile, sidebar layout on xl */}
      <div className="flex flex-col xl:grid xl:grid-cols-12 gap-5">
        {/* Sidebar tabs */}
        <div className="xl:col-span-3 bg-white rounded-2xl p-2 shadow-sm border border-zinc-200 h-fit">
          {/* Mobile: horizontal scroll tabs */}
          <div className="flex xl:flex-col gap-1 overflow-x-auto xl:overflow-x-visible pb-1 xl:pb-0">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left whitespace-nowrap xl:w-full",
                  activeTab === id
                    ? "bg-[#ff6900] text-orange-50"
                    : "text-zinc-700 hover:bg-zinc-50"
                )}
              >
                <Icon
                  size={15}
                  className={activeTab === id ? "text-orange-50" : "text-[#71717b]"}
                />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="xl:col-span-9 bg-white rounded-2xl p-6 shadow-sm border border-zinc-200">
          {activeTab === "profile" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-zinc-950">
                Profile Information
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#ff6900] flex items-center justify-center text-white text-xl font-bold shrink-0">
                  RS
                </div>
                <div>
                  <button className="text-xs bg-[#ff6900] text-orange-50 px-3 py-1.5 rounded-lg font-medium hover:bg-orange-600">
                    Change Photo
                  </button>
                  <p className="text-[11px] text-[#a1a1aa] mt-1">
                    JPG, PNG. Max 2MB.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", value: "Raghav Sharma" },
                  { label: "Role", value: "Member of Parliament (MP)" },
                  { label: "Email Address", value: "r.sharma@parliament.in" },
                  { label: "Phone Number", value: "+91 98765 43210" },
                  {
                    label: "Constituency",
                    value: "Bhopal Central, Madhya Pradesh",
                  },
                  {
                    label: "Party Affiliation",
                    value: "— (Non-partisan platform)",
                  },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-xs font-medium text-zinc-700 mb-1.5 block">
                      {f.label}
                    </label>
                    <input
                      defaultValue={f.value}
                      className="w-full text-sm border border-zinc-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#ff6900] text-zinc-950"
                    />
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 bg-[#ff6900] text-orange-50 text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors">
                <Save size={13} />
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-zinc-950">
                Notification Preferences
              </h2>
              {[
                {
                  label: "Emergency Alerts",
                  desc: "Receive immediate alerts for critical issues",
                  on: true,
                },
                {
                  label: "New Complaint Filed",
                  desc: "Get notified when a new complaint is submitted",
                  on: true,
                },
                {
                  label: "Daily Digest",
                  desc: "Summary of daily activity every morning at 8 AM",
                  on: false,
                },
                {
                  label: "Weekly Report",
                  desc: "Automated weekly performance report every Monday",
                  on: true,
                },
                {
                  label: "AI Recommendations",
                  desc: "Get notified when new AI recommendations are available",
                  on: true,
                },
                {
                  label: "Budget Alerts",
                  desc: "Alerts when spending exceeds threshold",
                  on: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 hover:bg-zinc-50"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-950">
                      {item.label}
                    </p>
                    <p className="text-xs text-[#a1a1aa]">{item.desc}</p>
                  </div>
                  <Toggle defaultChecked={item.on} />
                </div>
              ))}
            </div>
          )}

          {(activeTab === "security" ||
            activeTab === "preferences" ||
            activeTab === "data") && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#ff6900]/10 flex items-center justify-center mb-4">
                {activeTab === "security" && (
                  <Lock size={28} className="text-[#ff6900]" />
                )}
                {activeTab === "preferences" && (
                  <Palette size={28} className="text-[#ff6900]" />
                )}
                {activeTab === "data" && (
                  <Database size={28} className="text-[#ff6900]" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                {activeTab === "security"
                  ? "Security Settings"
                  : activeTab === "preferences"
                  ? "Display Preferences"
                  : "Data & Privacy Settings"}
              </h3>
              <p className="text-xs text-[#a1a1aa] max-w-xs">
                This section is coming soon and will be available in the next
                release.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
