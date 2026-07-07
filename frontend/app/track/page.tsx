"use client";

import Link from "next/link";
import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  Search, Hash, Activity, Building2, CalendarCheck,
  FileInput, BadgeCheck, UserCheck, Hammer, CheckCircle2,
  Clock, Images, Play, Bell, Plus, ZoomIn,
} from "lucide-react";

export default function TrackComplaintPage() {
  return (
    <DashboardLayout
      title="Track Complaint"
      subtitle="Public Grievance Tracker · Real-time status"
    >
      <div className="max-w-[820px] mx-auto flex flex-col gap-8">

        {/* Search */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Search className="size-4 text-[#ff6900]" />
            <span className="font-semibold text-sm">Look up your complaint</span>
          </div>
          <span className="text-[#71717b] text-xs">
            Enter the Complaint ID from your acknowledgement receipt to view live status.
          </span>
          <div className="flex mt-1 items-center gap-2">
            <div className="relative flex-1">
              <Hash className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
              <input
                className="w-full rounded-lg border border-zinc-200 pl-9 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                defaultValue="PS-2024-DEL-018724"
                placeholder="e.g. PS-2024-DEL-018724"
              />
            </div>
            <button className="bg-[#ff6900] font-semibold rounded-lg text-orange-50 px-6 gap-2 h-11 flex items-center hover:bg-orange-600 transition-colors text-sm">
              <Search className="size-4" />
              Track
            </button>
          </div>
        </div>

        {/* Status Overview */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-[#71717b] text-xs">Complaint ID</span>
              <span className="font-semibold text-sm">
                PS-2024-DEL-018724 · Waterlogging near Sector 12 Main Road
              </span>
            </div>
            <span className="bg-[#ff6900]/10 text-[#ff6900] font-semibold rounded-full text-sm border-0 px-3 py-1.5 flex items-center gap-1.5">
              <span className="size-2 bg-[#ff6900] animate-pulse rounded-full" />
              In Progress
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#F8FAF8] rounded-xl border border-zinc-200 flex p-4 flex-col gap-2">
              <div className="text-[#71717b] flex items-center gap-2">
                <Activity className="size-4" />
                <span className="font-medium text-xs">Current Status</span>
              </div>
              <span className="text-[#ff6900] font-bold text-lg leading-tight">Work In Progress</span>
              <span className="text-[#71717b] text-[11px]">Stage 4 of 5 · 72% complete</span>
            </div>
            <div className="bg-[#F8FAF8] rounded-xl border border-zinc-200 flex p-4 flex-col gap-2">
              <div className="text-[#71717b] flex items-center gap-2">
                <Building2 className="size-4" />
                <span className="font-medium text-xs">Assigned Department</span>
              </div>
              <span className="font-bold text-lg leading-tight">Public Works Dept.</span>
              <span className="text-[#71717b] text-[11px]">Ward 12 · Officer S. Verma</span>
            </div>
            <div className="bg-[#1E8E3E]/5 rounded-xl border border-[#1E8E3E]/30 flex p-4 flex-col gap-2">
              <div className="text-[#1E8E3E] flex items-center gap-2">
                <CalendarCheck className="size-4" />
                <span className="font-medium text-xs">Expected Resolution</span>
              </div>
              <span className="text-[#1E8E3E] font-bold text-lg leading-tight">18 Feb 2024</span>
              <span className="text-[#71717b] text-[11px]">In 4 days · On schedule</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-base tracking-tight flex items-center gap-2">
              Complaint Timeline
            </h2>
            <p className="text-[#71717b] text-xs">Every stage is logged transparently with a verifiable timestamp.</p>
          </div>

          {[
            { icon: FileInput, done: true, label: "Submitted", desc: "Complaint filed with photo & voice evidence via mobile app.", time: "08 Feb 2024 · 09:14 AM" },
            { icon: BadgeCheck, done: true, label: "Verified", desc: "Location & category confirmed by AI and constituency officer.", time: "08 Feb 2024 · 04:40 PM" },
            { icon: UserCheck, done: true, gradient: true, label: "Assigned", desc: "Routed to Public Works Dept., Ward 12 · Officer S. Verma.", time: "10 Feb 2024 · 11:02 AM" },
            { icon: Hammer, active: true, label: "In Progress", desc: "Drainage clearing & road resurfacing underway on site.", time: "14 Feb 2024 · 08:30 AM" },
            { icon: CheckCircle2, pending: true, label: "Resolved", desc: "Final inspection & citizen sign-off. Expected by 18 Feb 2024." },
          ].map((step, i, arr) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`size-9 shrink-0 rounded-full flex justify-center items-center text-white ${
                    step.done ? "bg-[#1E8E3E]" :
                    step.active ? "bg-[#ff6900] ring-4 ring-[#ff6900]/20" :
                    "bg-white border-2 border-zinc-200 text-[#71717b]"
                  }`}>
                    <Icon className="size-4" />
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`flex-1 w-0.5 ${
                      step.done && arr[i+1]?.done ? "bg-[#1E8E3E]" :
                      step.done && arr[i+1]?.active ? "bg-gradient-to-b from-[#1E8E3E] to-[#ff6900]" :
                      "bg-zinc-200"
                    }`} />
                  )}
                </div>
                <div className={`flex pt-1 flex-col ${i < arr.length - 1 ? "pb-6" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{step.label}</span>
                    {step.done && (
                      <span className="bg-[#1E8E3E]/10 text-[#1E8E3E] rounded-full text-[10px] px-2 py-0.5">Done</span>
                    )}
                    {step.active && (
                      <span className="bg-[#ff6900]/10 text-[#ff6900] rounded-full text-[10px] px-2 py-0.5">Active</span>
                    )}
                    {step.pending && (
                      <span className="rounded-full text-[#71717b] text-[10px] border border-zinc-200 px-2 py-0.5">Pending</span>
                    )}
                  </div>
                  <span className="text-[#71717b] text-xs">{step.desc}</span>
                  {step.time && (
                    <span className="text-[#71717b] text-[11px] flex mt-1 items-center gap-1">
                      <Clock className="size-3" />{step.time}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Evidence Gallery */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-base flex items-center gap-2">
              <Images className="size-4 text-[#ff6900]" />
              Evidence Gallery
            </h2>
            <p className="text-[#71717b] text-xs">Original submissions attached to this complaint.</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="relative aspect-square rounded-xl border border-zinc-200 bg-zinc-100 flex items-center justify-center overflow-hidden group">
                <span className="text-[#71717b] text-xs">Photo {i}</span>
                <div className="bg-black/50 transition-opacity opacity-0 group-hover:opacity-100 flex absolute inset-0 justify-center items-center">
                  <ZoomIn className="size-5 text-white" />
                </div>
              </div>
            ))}
            <div className="relative aspect-square bg-[#F8FAF8] rounded-xl border border-zinc-200 flex justify-center items-center">
              <div className="text-[#71717b] flex flex-col items-center gap-1">
                <Plus className="size-5" />
                <span className="font-medium text-xs">+2 more</span>
              </div>
            </div>
          </div>

          {/* Voice */}
          <div className="bg-[#F8FAF8] rounded-xl border border-zinc-200 flex p-4 items-center gap-4">
            <button className="size-10 shrink-0 bg-[#ff6900] rounded-full text-orange-50 flex items-center justify-center hover:bg-orange-600">
              <Play className="size-4" />
            </button>
            <div className="flex flex-col flex-1 gap-1">
              <span className="font-semibold text-xs">Original Voice Report</span>
              <div className="flex items-center gap-1 h-5">
                {[3,5,4,6,3,4,5,2,4,3,5,2].map((h, i) => (
                  <span key={i} className={`rounded-full w-1 ${i < 5 ? "bg-[#ff6900]" : "bg-zinc-200"}`} style={{ height: `${h * 4}px` }} />
                ))}
              </div>
            </div>
            <span className="text-[#71717b] text-xs">0:12 / 0:34</span>
          </div>
        </div>

        {/* Citizen Updates */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-base flex items-center gap-2">
              <Bell className="size-4 text-[#ff6900]" />
              Citizen Updates
            </h2>
            <p className="text-[#71717b] text-xs">Notifications and remarks shared by the assigned department.</p>
          </div>
          {[
            {
              icon: Hammer,
              iconBg: "bg-[#ff6900]/10",
              iconColor: "text-[#ff6900]",
              title: "Work commenced on site",
              time: "14 Feb · 08:30 AM",
              desc: "Machinery deployed for drainage clearing. Estimated 3 working days for full road resurfacing.",
              dept: "Public Works Dept., Ward 12",
              deptColor: "text-[#ff6900]",
            },
            {
              icon: UserCheck,
              iconBg: "bg-[#1E8E3E]/10",
              iconColor: "text-[#1E8E3E]",
              title: "Complaint assigned to field officer",
              time: "10 Feb · 11:02 AM",
              desc: "Officer S. Verma has been assigned and conducted a preliminary site inspection.",
              dept: "Constituency Grievance Cell",
              deptColor: "text-[#1E8E3E]",
            },
            {
              icon: BadgeCheck,
              iconBg: "bg-[#1E8E3E]/10",
              iconColor: "text-[#1E8E3E]",
              title: "Complaint verified & accepted",
              time: "08 Feb · 04:40 PM",
              desc: "AI and officer verification complete. Issue categorized as High Priority.",
              dept: "AI Classification System",
              deptColor: "text-[#1E8E3E]",
            },
          ].map((update) => {
            const Icon = update.icon;
            return (
              <div key={update.title} className="rounded-xl bg-white border border-zinc-200 flex p-4 gap-3">
                <div className={`size-9 ${update.iconBg} shrink-0 rounded-full flex justify-center items-center`}>
                  <Icon className={`size-4 ${update.iconColor}`} />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">{update.title}</span>
                    <span className="text-[#71717b] text-[11px]">{update.time}</span>
                  </div>
                  <span className="text-[#71717b] text-xs">{update.desc}</span>
                  <span className={`font-medium text-[11px] mt-1 ${update.deptColor}`}>— {update.dept}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </DashboardLayout>
  );
}
