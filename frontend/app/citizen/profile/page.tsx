"use client";

/**
 * /citizen/profile
 * Wrapped by CitizenLayout from app/citizen/layout.tsx.
 * Must NOT import or use CitizenLayout itself.
 */

import { useState } from "react";
import {
  User, Mail, Phone, MapPin, Globe, FileText, CheckCircle2,
  Clock, ThumbsUp, ChevronRight, Save,
} from "lucide-react";
import { toast } from "sonner";

const STATS = [
  { label: "Total Complaints Filed", value: 5, color: "text-[#ff6900]",  bg: "bg-[#ff6900]/10" },
  { label: "Resolved",               value: 3, color: "text-[#1E8E3E]", bg: "bg-[#1E8E3E]/10" },
  { label: "Pending",                value: 2, color: "text-[#1E88E5]", bg: "bg-[#1E88E5]/10" },
];

const RECENT_ACTIVITY = [
  {
    id: 1,
    icon: <FileText className="size-4 text-[#ff6900]" />,
    bg: "bg-[#ff6900]/10",
    title: "Filed complaint about broken road",
    subtitle: "Ward 7, Sector 12 · Tracking ID: PS-2025-00812",
    time: "2 days ago",
    badge: "Pending",
    badgeColor: "bg-[#1E88E5]/10 text-[#1E88E5]",
  },
  {
    id: 2,
    icon: <CheckCircle2 className="size-4 text-[#1E8E3E]" />,
    bg: "bg-[#1E8E3E]/10",
    title: "Complaint resolved: Water pipeline leak",
    subtitle: "Resolved by Ward Officer in 3 days",
    time: "1 week ago",
    badge: "Resolved",
    badgeColor: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
  },
  {
    id: 3,
    icon: <ThumbsUp className="size-4 text-[#71717b]" />,
    bg: "bg-zinc-100",
    title: "Upvoted issue: Poor streetlighting",
    subtitle: "This issue now has 47 upvotes",
    time: "2 weeks ago",
    badge: null,
    badgeColor: "",
  },
];

const LANGUAGES = ["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati"];

export default function CitizenProfilePage() {
  const [fullName, setFullName] = useState("Priya Sharma");
  const [email, setEmail] = useState("priya.sharma@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [ward, setWard] = useState("Ward 7, Sector 12, New Delhi");
  const [language, setLanguage] = useState("English");
  const [saving, setSaving] = useState(false);

  const initials = fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      {/* Page header */}
      <div>
        <h1 className="font-bold text-2xl text-zinc-950 mb-1">My Profile</h1>
        <p className="text-[#71717b] text-sm">Manage your account information and preferences</p>
      </div>

      {/* Avatar card */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
        <div className="size-16 sm:size-20 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
          <span className="text-orange-50 font-bold text-xl sm:text-2xl">{initials}</span>
        </div>
        <div>
          <h2 className="font-bold text-lg sm:text-xl text-zinc-950">{fullName}</h2>
          <p className="text-[#71717b] text-sm mt-0.5">{email}</p>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] text-xs font-semibold px-2.5 py-1">
              Verified Citizen
            </span>
            <span className="rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-1">
              Member since 2024
            </span>
          </div>
        </div>
      </div>

      {/* My Stats */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6">
        <h3 className="font-semibold text-base text-zinc-950 mb-4">My Stats</h3>
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-zinc-200 p-3 sm:p-4 flex flex-col items-center gap-1 text-center"
            >
              <div className={`size-9 sm:size-10 rounded-full ${s.bg} flex items-center justify-center`}>
                <span className={`font-bold text-base sm:text-lg ${s.color}`}>{s.value}</span>
              </div>
              <span className="text-[10px] sm:text-xs text-[#71717b] font-medium mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Profile form */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6 flex flex-col gap-5">
        <h3 className="font-semibold text-base text-zinc-950">Personal Information</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
              <User size={13} className="text-[#71717b]" /> Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
              <Mail size={13} className="text-[#71717b]" /> Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
              <Phone size={13} className="text-[#71717b]" /> Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
              <MapPin size={13} className="text-[#71717b]" /> Ward / Location
            </label>
            <input
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              placeholder="e.g. Ward 7, Sector 12"
            />
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
              <Globe size={13} className="text-[#71717b]" /> Language Preference
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900] bg-white appearance-none"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-1">
          <button
            onClick={handleSave}
            disabled={saving}
            className="font-semibold rounded-xl bg-[#ff6900] hover:bg-orange-600 text-orange-50 text-sm px-6 py-2.5 flex items-center gap-2 transition-colors disabled:opacity-60"
          >
            {saving ? (
              <><div className="size-4 border-2 border-orange-200 border-t-white rounded-full animate-spin" />Saving…</>
            ) : (
              <><Save size={15} />Save Changes</>
            )}
          </button>
        </div>
      </div>

      {/* Recent activity */}
      <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-base text-zinc-950">Recent Activity</h3>
          <button className="text-xs text-[#ff6900] font-medium hover:underline flex items-center gap-1">
            View all <ChevronRight size={12} />
          </button>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          {RECENT_ACTIVITY.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <div className={`size-9 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-950 truncate">{item.title}</p>
                <p className="text-[#71717b] text-xs mt-0.5 truncate">{item.subtitle}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-[11px] text-[#71717b] flex items-center gap-1 whitespace-nowrap">
                  <Clock size={10} /> {item.time}
                </span>
                {item.badge && (
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
