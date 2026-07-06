"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { User, Bell, Lock, Globe, Palette, Database, Save } from "lucide-react";
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
        on ? "bg-[#2D7A3A]" : "bg-[#CBD5E0]"
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
    <DashboardLayout>
      <PageHeader title="Settings" subtitle="Manage your account, notifications, and platform preferences." />

      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar tabs */}
        <div className="col-span-3 bg-white rounded-xl p-2 shadow-sm border border-[#E2E8F0] h-fit">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                activeTab === id
                  ? "bg-[#E8F5E9] text-[#2D7A3A]"
                  : "text-[#4A5568] hover:bg-[#F5F7FA] hover:text-[#2D7A3A]"
              )}
            >
              <Icon size={15} className={activeTab === id ? "text-[#2D7A3A]" : "text-[#A0AEC0]"} />
              {label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="col-span-9 bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0]">
          {activeTab === "profile" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-[#1A2332]">Profile Information</h2>
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#2D7A3A] flex items-center justify-center text-white text-xl font-bold">
                  RS
                </div>
                <div>
                  <button className="text-xs bg-[#2D7A3A] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-[#246130]">
                    Change Photo
                  </button>
                  <p className="text-[11px] text-[#A0AEC0] mt-1">JPG, PNG. Max 2MB.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Full Name", value: "Raghav Sharma" },
                  { label: "Role", value: "Member of Parliament (MP)" },
                  { label: "Email Address", value: "r.sharma@parliament.in" },
                  { label: "Phone Number", value: "+91 98765 43210" },
                  { label: "Constituency", value: "Bhopal Central, Madhya Pradesh" },
                  { label: "Party Affiliation", value: "— (Non-partisan platform)" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-xs font-medium text-[#4A5568] mb-1.5 block">{f.label}</label>
                    <input
                      defaultValue={f.value}
                      className="w-full text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2D7A3A] text-[#1A2332]"
                    />
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 bg-[#2D7A3A] text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-[#246130] transition-colors">
                <Save size={13} />
                Save Changes
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-[#1A2332]">Notification Preferences</h2>
              <div className="space-y-3">
                {[
                  { label: "Emergency Alerts", description: "Receive immediate alerts for critical issues", on: true },
                  { label: "New Complaint Filed", description: "Get notified when a new complaint is submitted", on: true },
                  { label: "Daily Digest", description: "Summary of daily activity every morning at 8 AM", on: false },
                  { label: "Weekly Report", description: "Automated weekly performance report every Monday", on: true },
                  { label: "AI Recommendations", description: "Get notified when new AI recommendations are available", on: true },
                  { label: "Budget Alerts", description: "Alerts when spending exceeds threshold", on: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC]">
                    <div>
                      <p className="text-sm font-medium text-[#1A2332]">{item.label}</p>
                      <p className="text-xs text-[#A0AEC0]">{item.description}</p>
                    </div>
                    <Toggle defaultChecked={item.on} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {(activeTab === "security" || activeTab === "preferences" || activeTab === "data") && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] flex items-center justify-center mb-4">
                {activeTab === "security" && <Lock size={28} className="text-[#2D7A3A]" />}
                {activeTab === "preferences" && <Palette size={28} className="text-[#2D7A3A]" />}
                {activeTab === "data" && <Database size={28} className="text-[#2D7A3A]" />}
              </div>
              <h3 className="text-sm font-semibold text-[#1A2332] mb-1.5">
                {activeTab === "security" && "Security Settings"}
                {activeTab === "preferences" && "Display Preferences"}
                {activeTab === "data" && "Data & Privacy Settings"}
              </h3>
              <p className="text-xs text-[#A0AEC0] max-w-xs">
                This section is coming soon. Settings will be available in the next release.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
