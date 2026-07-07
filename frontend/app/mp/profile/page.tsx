"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  User, Mail, Phone, MapPin, Shield, Calendar, Globe,
  Clock, Monitor, Lock, Save, AlertCircle, CheckCircle2,
  Landmark, Activity, TrendingUp, DollarSign,
} from "lucide-react";
import { toast } from "sonner";

const CONSTITUENCY_STATS = [
  {
    label: "Total Wards",
    value: "15",
    icon: <MapPin className="size-5 text-[#1E88E5]" />,
    bg: "bg-[#1E88E5]/10",
  },
  {
    label: "Active Complaints",
    value: "4,283",
    icon: <AlertCircle className="size-5 text-[#ff6900]" />,
    bg: "bg-[#ff6900]/10",
  },
  {
    label: "Resolution Rate",
    value: "78%",
    icon: <TrendingUp className="size-5 text-[#1E8E3E]" />,
    bg: "bg-[#1E8E3E]/10",
  },
  {
    label: "Budget Utilization",
    value: "74%",
    icon: <DollarSign className="size-5 text-[#71717b]" />,
    bg: "bg-zinc-100",
  },
];

const LOGIN_HISTORY = [
  {
    device: "Chrome on Windows",
    location: "New Delhi, India",
    time: "Today at 9:14 AM",
    current: true,
  },
  {
    device: "Safari on iPhone",
    location: "Lucknow, India",
    time: "Yesterday at 7:32 PM",
    current: false,
  },
  {
    device: "Chrome on MacBook",
    location: "New Delhi, India",
    time: "2 days ago at 3:05 PM",
    current: false,
  },
];

export default function MPProfilePage() {
  const [fullName, setFullName] = useState("Raghav Sharma");
  const [email, setEmail] = useState("raghav.sharma@parliament.gov.in");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [constituency, setConstituency] = useState("North Delhi Constituency");
  const [party, setParty] = useState("National Democratic Alliance");
  const [term, setTerm] = useState("2024 – 2029");
  const [bio, setBio] = useState(
    "Serving North Delhi with a focus on infrastructure development, digital governance, and citizen welfare."
  );
  const [saving, setSaving] = useState(false);

  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900));
    setSaving(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <DashboardLayout title="MP Profile" subtitle="Manage your official profile and account settings">
      <div className="flex flex-col gap-6 max-w-5xl">
        {/* Avatar + info card */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="size-20 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
            <span className="text-orange-50 font-bold text-2xl">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-bold text-2xl text-zinc-950">{fullName}</h2>
            <p className="text-[#71717b] text-sm mt-0.5 flex items-center gap-1.5">
              <Landmark size={13} className="text-[#71717b]" />
              {constituency}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs font-semibold px-2.5 py-1 flex items-center gap-1">
                <Shield size={11} />
                Member of Parliament
              </span>
              <span className="rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-1 flex items-center gap-1">
                <Calendar size={11} />
                {term}
              </span>
              <span className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] text-xs font-semibold px-2.5 py-1 flex items-center gap-1">
                <CheckCircle2 size={11} />
                Verified Account
              </span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
            <span className="text-[11px] text-[#71717b]">Account ID</span>
            <span className="font-mono font-semibold text-sm text-zinc-950">MP-2024-001</span>
          </div>
        </div>

        {/* Constituency stats */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <h3 className="font-semibold text-base text-zinc-950 mb-4 flex items-center gap-2">
            <Activity size={16} className="text-[#ff6900]" />
            Constituency Overview
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {CONSTITUENCY_STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-200 p-4 flex flex-col gap-2"
              >
                <div className={`size-10 rounded-xl ${s.bg} flex items-center justify-center`}>
                  {s.icon}
                </div>
                <span className="font-extrabold text-2xl text-zinc-950">{s.value}</span>
                <span className="text-xs text-[#71717b] font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile edit form */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
          <h3 className="font-semibold text-base text-zinc-950 flex items-center gap-2">
            <User size={16} className="text-[#ff6900]" />
            Edit Profile
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
                <User size={13} className="text-[#71717b]" />
                Full Name
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
                <Mail size={13} className="text-[#71717b]" />
                Official Email
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
                <Phone size={13} className="text-[#71717b]" />
                Contact Number
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
                <Landmark size={13} className="text-[#71717b]" />
                Constituency
              </label>
              <input
                value={constituency}
                onChange={(e) => setConstituency(e.target.value)}
                className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
                <Globe size={13} className="text-[#71717b]" />
                Political Party / Alliance
              </label>
              <input
                value={party}
                onChange={(e) => setParty(e.target.value)}
                className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm text-zinc-950 flex items-center gap-1.5">
                <Calendar size={13} className="text-[#71717b]" />
                Term
              </label>
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm text-zinc-950">Bio / Public Statement</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="rounded-xl border border-zinc-200 px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              placeholder="A short public-facing statement…"
            />
          </div>

          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={handleSave}
              disabled={saving}
              className="font-semibold rounded-xl bg-[#ff6900] hover:bg-orange-600 text-orange-50 text-sm px-6 py-2.5 flex items-center gap-2 transition-colors disabled:opacity-60"
            >
              {saving ? (
                <>
                  <div className="size-4 border-2 border-orange-200 border-t-white rounded-full animate-spin" />
                  Saving…
                </>
              ) : (
                <>
                  <Save size={15} />
                  Save Changes
                </>
              )}
            </button>
            <span className="text-[#71717b] text-xs">Changes are reflected immediately on the portal.</span>
          </div>
        </div>

        {/* Security / Login history */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-base text-zinc-950 flex items-center gap-2">
              <Lock size={16} className="text-[#ff6900]" />
              Recent Login Activity
            </h3>
            <button className="text-xs text-[#ff6900] font-medium hover:underline">
              Sign out all devices
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {LOGIN_HISTORY.map((entry, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-xl border border-zinc-200 bg-zinc-50"
              >
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                    <Monitor size={16} className="text-[#71717b]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-950 flex items-center gap-2">
                      {entry.device}
                      {entry.current && (
                        <span className="text-[10px] font-semibold rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] px-2 py-0.5">
                          Current
                        </span>
                      )}
                    </p>
                    <p className="text-[#71717b] text-xs flex items-center gap-1 mt-0.5">
                      <MapPin size={10} />
                      {entry.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#71717b] flex items-center gap-1">
                    <Clock size={10} />
                    {entry.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
