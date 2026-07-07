"use client";

/**
 * /citizen/issues/[id]
 * Wrapped by CitizenLayout. Renders issue detail WITHOUT its own sidebar/header.
 */

import Link from "next/link";
import {
  Construction, Flame, ChevronRight, MapPin, AudioLines,
  Play, Check, Loader, Flag, ThumbsUp, MessageCircle,
  BadgeCheck, Send, Share2,
} from "lucide-react";

export default function CitizenIssueDetailPage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[#71717b] mb-6 flex-wrap">
        <Link href="/citizen/issues" className="hover:text-zinc-950 transition-colors">Issues</Link>
        <ChevronRight className="size-4 shrink-0" />
        <Link href="#" className="hover:text-zinc-950 transition-colors">Roads &amp; Infrastructure</Link>
        <ChevronRight className="size-4 shrink-0" />
        <span className="font-medium text-zinc-950 truncate">Severe Pothole &amp; Waterlogging on MG Road</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Main — full width on mobile, 8 cols on xl */}
        <div className="xl:col-span-8 flex flex-col gap-6">

          {/* Issue header */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6 flex flex-col gap-5">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div className="flex items-start gap-3 min-w-0">
                <div className="size-12 shrink-0 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                  <Construction className="size-6 text-[#ff6900]" />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs px-2.5 py-0.5 flex items-center gap-1">
                      <Flame className="size-3" />High Priority
                    </span>
                    <span className="rounded-full bg-zinc-100 text-zinc-900 text-xs px-2.5 py-0.5">Roads &amp; Infrastructure</span>
                    <span className="text-[#71717b] text-xs">#ISS-2024-08471</span>
                  </div>
                  <h1 className="font-bold text-lg sm:text-xl tracking-tight leading-snug">
                    Severe Pothole &amp; Waterlogging on MG Road
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-semibold rounded-full bg-amber-100 text-amber-700 text-xs px-3 py-1 flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-amber-500" />In Progress
                </span>
                <button className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs flex items-center gap-1.5 hover:bg-zinc-50">
                  <Share2 className="size-3.5" />Share
                </button>
              </div>
            </div>

            <p className="text-[#71717b] text-sm leading-relaxed">
              A large stretch of MG Road near Sector 14 crossing has developed deep potholes measuring over two feet across.
              During monsoon rainfall the entire junction becomes severely waterlogged, submerging the potholes and creating
              a serious hazard for two-wheelers and pedestrians.
            </p>

            {/* Photo grid */}
            <div>
              <span className="font-semibold text-sm mb-3 block">Submitted Photos</span>
              <div className="grid grid-cols-3 gap-3">
                {["Road damage", "Waterlogging", "More photos"].map((label, i) => (
                  <div key={label} className={`relative rounded-xl border border-zinc-200 overflow-hidden ${i === 0 ? "col-span-2 aspect-video" : "aspect-video"} bg-zinc-100 flex items-center justify-center`}>
                    <span className="text-[#71717b] text-xs">{label}</span>
                    {i === 2 && (
                      <div className="bg-zinc-950/50 flex absolute inset-0 justify-center items-center">
                        <span className="font-semibold text-white text-sm">+4 more</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Voice + Map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-200 flex p-4 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <AudioLines className="size-4 text-[#ff6900]" />
                  <span className="font-semibold text-sm">Voice Submission</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="size-10 shrink-0 rounded-full bg-[#ff6900] flex justify-center items-center">
                    <Play className="size-4 text-orange-50" />
                  </button>
                  <div className="flex items-end flex-1 gap-0.5 h-8 overflow-hidden">
                    {[3,5,7,4,6,3,5,7,4,6,3,5].map((h, i) => (
                      <span key={i} className={`rounded-full w-1 ${i < 6 ? "bg-[#ff6900]" : "bg-[#ff6900]/40"}`} style={{ height: `${h * 4}px` }} />
                    ))}
                  </div>
                  <span className="text-[#71717b] text-xs">0:42</span>
                </div>
              </div>
              <div className="relative rounded-xl border border-zinc-200 overflow-hidden h-[100px] bg-zinc-100 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <MapPin className="size-8 text-[#ff6900] drop-shadow" />
                  <span className="font-medium rounded-full bg-white/90 text-[11px] mt-1 px-2 py-0.5">MG Road, Sector 14</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6 flex flex-col gap-4">
            <div>
              <h2 className="font-semibold text-base">Issue Timeline</h2>
              <p className="text-[#71717b] text-xs">Live progress across departments</p>
            </div>
            <ol className="flex flex-col">
              {[
                { done: true,   label: "Submitted",   sub: "Citizen Portal · 12 Aug 2024, 09:14 AM" },
                { done: true,   label: "Under Review", sub: "Grievance Cell · 12 Aug 2024, 02:40 PM" },
                { done: true,   label: "Assigned",    sub: "PWD, Roads Division · 13 Aug 2024, 11:05 AM" },
                { done: false, active: true,  label: "In Progress", sub: "PWD, Roads Division · 15 Aug 2024, 08:30 AM" },
                { done: false, pending: true, label: "Resolved",    sub: "Pending completion" },
              ].map((step, i, arr) => (
                <li key={step.label} className={`relative flex gap-4 ${i < arr.length - 1 ? "pb-5" : ""}`}>
                  {i < arr.length - 1 && (
                    <span className={`absolute left-[15px] top-8 bottom-0 w-px ${step.done ? "bg-[#1E8E3E]" : "bg-zinc-200"}`} />
                  )}
                  <span className={`size-8 shrink-0 z-10 rounded-full flex justify-center items-center ${
                    step.done   ? "bg-[#1E8E3E]" :
                    step.active ? "bg-[#ff6900] ring-4 ring-[#ff6900]/15" :
                    "bg-zinc-100 border border-zinc-200"
                  }`}>
                    {step.done   ? <Check className="size-4 text-white" /> :
                     step.active ? <Loader className="size-4 text-orange-50" /> :
                     <Flag className="size-4 text-[#71717b]" />}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className={`font-semibold text-sm ${step.active ? "text-[#ff6900]" : step.pending ? "text-[#71717b]" : "text-zinc-950"}`}>
                      {step.label}
                    </span>
                    <span className="text-[#71717b] text-xs">{step.sub}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Community Discussion */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-base">Community Discussion</h2>
                <p className="text-[#71717b] text-xs">Citizen updates &amp; official responses</p>
              </div>
              <span className="rounded-full bg-zinc-100 text-zinc-900 text-xs px-2.5 py-0.5">18 updates</span>
            </div>

            {[
              { initials: "AK", name: "Anil Kumar",  role: "Resident",   time: "2 days ago", comment: "This junction is genuinely dangerous after rain. Please prioritise the drainage as well.", likes: 24,
                official: { name: "PWD Roads Division", time: "1 day ago", reply: "Drainage survey added to work order. Resurfacing crew scheduled this week." } },
              { initials: "PM", name: "Priya Menon", role: "Shopkeeper", time: "3 days ago", comment: "Business has dropped because customers avoid this stretch. Glad to see it being addressed.", likes: 18 },
            ].map((comment) => (
              <div key={comment.name} className="flex gap-3">
                <div className="size-9 shrink-0 rounded-full bg-[#ff6900]/10 flex items-center justify-center font-semibold text-[#ff6900] text-xs">
                  {comment.initials}
                </div>
                <div className="rounded-xl border border-zinc-200 flex p-4 flex-col flex-1 gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{comment.name}</span>
                    <span className="rounded-full bg-zinc-100 text-zinc-900 text-[10px] px-2">{comment.role}</span>
                    <span className="text-[#71717b] text-xs ml-auto">{comment.time}</span>
                  </div>
                  <p className="text-[#71717b] text-sm leading-relaxed">{comment.comment}</p>
                  <div className="flex items-center gap-4 pt-1">
                    <button className="text-[#71717b] text-xs flex items-center gap-1.5 hover:text-[#ff6900]">
                      <ThumbsUp className="size-3.5" />{comment.likes}
                    </button>
                    <button className="text-[#71717b] text-xs flex items-center gap-1.5 hover:text-[#ff6900]">
                      <MessageCircle className="size-3.5" />Reply
                    </button>
                  </div>
                  {comment.official && (
                    <div className="border-l-2 border-[#1E8E3E] flex mt-2 pl-4 flex-col gap-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-[#1E8E3E] text-sm">{comment.official.name}</span>
                        <span className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] text-[10px] px-2 flex items-center gap-1">
                          <BadgeCheck className="size-3" />Official
                        </span>
                        <span className="text-[#71717b] text-xs ml-auto">{comment.official.time}</span>
                      </div>
                      <p className="text-[#71717b] text-sm leading-relaxed">{comment.official.reply}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <div className="size-9 shrink-0 rounded-full bg-[#ff6900] flex items-center justify-center font-semibold text-orange-50 text-xs">
                PS
              </div>
              <div className="flex flex-1 gap-2">
                <input
                  className="flex-1 rounded-xl border border-zinc-200 px-3 text-sm h-10 focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                  placeholder="Add your comment or update..."
                />
                <button className="size-10 rounded-xl bg-[#ff6900] flex items-center justify-center hover:bg-orange-600 transition-colors shrink-0">
                  <Send className="size-4 text-orange-50" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar — right column on xl */}
        <div className="xl:col-span-4">
          <div className="xl:sticky xl:top-24 flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 flex flex-col gap-3">
              <h3 className="font-semibold text-sm">Issue Details</h3>
              {[
                { label: "Status",      value: "In Progress",              cls: "text-amber-600 font-semibold" },
                { label: "Priority",    value: "High",                     cls: "text-[#ff6900] font-semibold" },
                { label: "Category",    value: "Roads & Infrastructure" },
                { label: "Ward",        value: "Sector 14, Gurugram" },
                { label: "Reported",    value: "12 Aug 2024, 09:14 AM" },
                { label: "Assigned to", value: "PWD, Roads Division" },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center border-b border-zinc-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-xs text-[#71717b]">{item.label}</span>
                  <span className={`text-xs ${item.cls || "text-zinc-950"}`}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#ff6900]/5 rounded-2xl border border-[#ff6900]/20 p-5">
              <p className="text-xs font-semibold text-[#ff6900] mb-2">AI Analysis</p>
              <p className="text-[#71717b] text-xs leading-relaxed">
                Priority score <strong className="text-zinc-950">89/100</strong>. Affects ~6,200 daily commuters.
                Road resurfacing + drainage repair recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
