"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Waypoints, Bell, Plus, Search, MapPin, Tag, Clock,
  ArrowBigUp, Flame, ArrowDownWideNarrow, ChevronDown,
  TriangleAlert, Construction, Droplets, Lightbulb, GraduationCap,
  Maximize2, Sparkles, ChevronLeft, ChevronRight, FilePlus2,
} from "lucide-react";

const ISSUES = [
  {
    id: "ISS-001",
    icon: <TriangleAlert className="size-6 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Open manhole near Sector 14 bus stand",
    badge: { label: "Urgent", cls: "bg-red-50 text-red-600" },
    desc: "A large uncovered manhole on the main pedestrian path poses a serious safety risk, especially at night with no street lighting nearby. Multiple residents have reported near-accidents.",
    upvotes: "642",
    location: "Sector 14, Gurugram",
    category: "Drainage",
    time: "2 hours ago",
  },
  {
    id: "ISS-002",
    icon: <Construction className="size-6 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Severe potholes on Old Airport Road",
    badge: { label: "Pending", cls: "bg-[#ff6900]/10 text-[#ff6900]" },
    desc: "The road stretch has developed multiple deep potholes causing daily traffic congestion and vehicle damage. Waterlogging worsens the condition during monsoon.",
    upvotes: "1.2k",
    location: "HAL Road, Bengaluru",
    category: "Roads",
    time: "5 hours ago",
  },
  {
    id: "ISS-003",
    icon: <Droplets className="size-6 text-[#1E8E3E]" />,
    iconBg: "bg-[#1E8E3E]/10",
    title: "Water supply restored in Ward 22",
    badge: { label: "Resolved", cls: "bg-[#1E8E3E]/10 text-[#1E8E3E]" },
    desc: "The recurring water shortage due to a broken main pipeline has been repaired by the municipal corporation. Regular supply has resumed for over 3,000 households.",
    upvotes: "894",
    location: "Ward 22, Pune",
    category: "Water",
    time: "1 day ago",
  },
  {
    id: "ISS-004",
    icon: <Lightbulb className="size-6 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Non-functional street lights on MG Road",
    badge: { label: "Pending", cls: "bg-[#ff6900]/10 text-[#ff6900]" },
    desc: "Over a dozen street lights have been non-operational for the past three weeks, raising safety concerns for commuters and shopkeepers in the evening hours.",
    upvotes: "521",
    location: "MG Road, Indore",
    category: "Electricity",
    time: "2 days ago",
  },
  {
    id: "ISS-005",
    icon: <GraduationCap className="size-6 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Government school needs boundary wall repair",
    badge: { label: "Pending", cls: "bg-[#ff6900]/10 text-[#ff6900]" },
    desc: "The collapsed boundary wall of the primary school compromises student safety and allows stray animals to enter the premises. Parents have requested urgent repairs.",
    upvotes: "378",
    location: "Rampur, Lucknow",
    category: "Education",
    time: "3 days ago",
  },
];

export default function IssuesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white text-zinc-950 min-h-screen">
      {/* Public nav */}
      <header className="sticky top-0 z-30 bg-white border-b border-zinc-200">
        <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-[72px]">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#ff6900] flex justify-center items-center">
                <Waypoints className="size-5 text-orange-50" />
              </div>
              <div className="leading-none flex flex-col">
                <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">Prathmikta Setu</span>
                <span className="font-medium text-[#71717b] text-[11px]">Bridging Citizens &amp; Governance</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {[["Home","/"],["Issues","/issues"],["Track","/track"],["Transparency","/transparency"]].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`font-medium rounded-lg text-sm leading-5 px-3 py-2 ${
                    label === "Issues" ? "font-semibold text-[#ff6900]" : "text-[#71717b] hover:text-zinc-950"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
              <Bell className="size-5 text-[#71717b]" />
            </button>
            <Link
              href="/submit-complaint"
              className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              <Plus className="size-4" />
              Submit Complaint
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1140px] mx-auto p-8">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="font-bold text-zinc-950 text-2xl tracking-tight">Public Issue Feed</h1>
          <p className="text-[#71717b] text-sm">Explore, upvote, and track civic issues reported across your constituency.</p>
        </div>

        {/* Search & filters */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <Search className="top-1/2 size-5 -translate-y-1/2 text-[#71717b] absolute left-4" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full rounded-xl bg-white border border-zinc-200 text-sm pl-12 h-12 focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              placeholder="Search issues by title, location, or keyword..."
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {[
              { icon: <span className="size-2 rounded-full bg-[#ff6900]" />, label: "Status" },
              { icon: <MapPin className="size-4 text-[#71717b]" />, label: "Location" },
              { icon: <Tag className="size-4 text-[#71717b]" />, label: "Category" },
              { icon: <Flame className="size-4 text-[#71717b]" />, label: "Popularity" },
              { icon: <ArrowBigUp className="size-4 text-[#71717b]" />, label: "Upvotes" },
            ].map(f => (
              <button key={f.label} className="font-medium rounded-full bg-white text-zinc-950 text-sm border border-zinc-200 px-3 gap-2 h-9 flex items-center hover:bg-zinc-50 transition-colors">
                {f.icon}
                {f.label}
                <ChevronDown className="size-4 text-[#71717b]" />
              </button>
            ))}
            <div className="flex ml-auto items-center gap-2">
              <span className="text-[#71717b] text-sm">Sort by</span>
              <button className="font-medium rounded-full bg-white text-zinc-950 text-sm border border-zinc-200 px-3 gap-2 h-9 flex items-center hover:bg-zinc-50">
                <ArrowDownWideNarrow className="size-4 text-[#71717b]" />
                Most Recent
                <ChevronDown className="size-4 text-[#71717b]" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Issues list */}
          <div className="col-span-8 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-[#71717b] text-sm">
                Showing <span className="font-semibold text-zinc-950">1,248</span> issues
              </span>
              <div className="font-medium text-[#71717b] text-xs flex items-center gap-4">
                {[["#ff6900","Pending"],["#1E8E3E","Resolved"],["#e7000b","Urgent"]].map(([color, label]) => (
                  <span key={label} className="flex items-center gap-1">
                    <span className="size-2 rounded-full" style={{ background: color }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {ISSUES.filter(i => i.title.toLowerCase().includes(search.toLowerCase())).map(issue => (
              <Link
                href={`/issues/${issue.id}`}
                key={issue.id}
                className="block bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex gap-4">
                  <div className={`size-12 shrink-0 ${issue.iconBg} rounded-xl flex justify-center items-center`}>
                    {issue.icon}
                  </div>
                  <div className="flex flex-col flex-1 gap-3 min-w-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-zinc-950 text-base truncate">{issue.title}</h3>
                          <span className={`rounded-full text-xs leading-4 px-2 py-0.5 font-semibold shrink-0 ${issue.badge.cls}`}>
                            {issue.badge.label}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-[#71717b] text-sm leading-5">{issue.desc}</p>
                      </div>
                      <div className="rounded-xl border border-zinc-200 flex px-3 py-2 flex-col items-center gap-1 shrink-0">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm">{issue.upvotes}</span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs flex items-center gap-4 flex-wrap">
                      <span className="flex items-center gap-1"><MapPin className="size-3.5" />{issue.location}</span>
                      <span className="flex items-center gap-1"><Tag className="size-3.5" />{issue.category}</span>
                      <span className="flex items-center gap-1"><Clock className="size-3.5" />{issue.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Pagination */}
            <div className="flex mt-2 justify-center items-center gap-2">
              <button className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
                <ChevronLeft className="size-4 text-[#71717b]" />
              </button>
              {[1,2,3].map(p => (
                <button
                  key={p}
                  className={`size-9 rounded-lg text-sm font-medium ${p === 1 ? "bg-[#ff6900] text-orange-50" : "border border-zinc-200 text-zinc-950 hover:bg-zinc-50"}`}
                >
                  {p}
                </button>
              ))}
              <span className="text-[#71717b] text-sm px-1">...</span>
              <button className="size-9 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-950 hover:bg-zinc-50">42</button>
              <button className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
                <ChevronRight className="size-4 text-[#71717b]" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="sticky top-24 flex flex-col gap-4">
              {/* Map preview */}
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-zinc-200 to-zinc-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#71717b] text-sm">Map Preview</span>
                  </div>
                  {/* Cluster dots */}
                  {[
                    { left: "25%", top: "35%", count: 14, bg: "bg-[#ff6900]" },
                    { left: "65%", top: "50%", count: 7, bg: "bg-red-600" },
                    { left: "40%", top: "70%", count: 5, bg: "bg-[#1E8E3E]" },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className={`absolute size-7 ring-4 ring-white/40 font-bold rounded-full ${dot.bg} text-white text-xs flex justify-center items-center`}
                      style={{ left: dot.left, top: dot.top }}
                    >
                      {dot.count}
                    </div>
                  ))}
                  <div className="bg-black/40 absolute inset-x-0 top-0 p-4">
                    <span className="font-semibold text-white text-sm flex items-center gap-2">
                      Issue Map Preview
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { color: "#ff6900", label: "Pending clusters", value: "86" },
                    { color: "#e7000b", label: "Urgent hotspots", value: "12" },
                    { color: "#1E8E3E", label: "Resolved areas", value: "340" },
                  ].map(item => (
                    <div key={item.label} className="font-medium text-xs flex justify-between items-center">
                      <span className="text-[#71717b] flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full" style={{ background: item.color }} />
                        {item.label}
                      </span>
                      <span className="font-semibold text-zinc-950">{item.value}</span>
                    </div>
                  ))}
                  <button className="font-medium rounded-lg text-zinc-950 text-sm border border-zinc-200 mt-1 gap-2 w-full h-9 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                    <Maximize2 className="size-4" />
                    Open Full Heatmap
                  </button>
                </div>
              </div>

              {/* AI Insight */}
              <div className="bg-[#ff6900]/6 rounded-2xl border border-[#ff6900]/20 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-lg bg-[#ff6900] flex justify-center items-center">
                    <Sparkles className="size-4 text-orange-50" />
                  </div>
                  <span className="font-semibold text-zinc-950 text-sm">AI Insight</span>
                </div>
                <p className="leading-relaxed text-[#71717b] text-sm">
                  Drainage and road issues account for{" "}
                  <span className="font-semibold text-zinc-950">58%</span> of this week's urgent
                  reports, concentrated around central wards. Prioritizing these could impact{" "}
                  <span className="font-semibold text-[#ff6900]">42,000+</span> citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
