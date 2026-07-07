"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Tag,
  Clock,
  ArrowBigUp,
  Flame,
  ArrowDownWideNarrow,
  ChevronDown,
  TriangleAlert,
  Construction,
  Droplets,
  Lightbulb,
  GraduationCap,
  Maximize2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";

const ISSUES = [
  {
    id: "ISS-001",
    icon: <TriangleAlert className="size-6 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Open manhole near Sector 14 bus stand",
    badge: { label: "Urgent", cls: "bg-red-50 text-red-600" },
    desc: "A large uncovered manhole on the main pedestrian path poses a serious safety risk, especially at night.",
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
    desc: "Multiple deep potholes causing daily traffic congestion and vehicle damage.",
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
    desc: "The recurring water shortage due to a broken main pipeline has been repaired.",
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
    desc: "Over a dozen street lights non-operational for three weeks, raising safety concerns.",
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
    desc: "The collapsed boundary wall compromises student safety and allows stray animals.",
    upvotes: "378",
    location: "Rampur, Lucknow",
    category: "Education",
    time: "3 days ago",
  },
];

export default function CitizenIssuesPage() {
  const [search, setSearch] = useState("");

  const filtered = ISSUES.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="font-bold text-zinc-950 text-2xl tracking-tight">
          Public Issue Feed
        </h1>
        <p className="text-[#71717b] text-sm">
          Explore, upvote, and track civic issues reported across your
          constituency.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative">
          <Search className="top-1/2 size-5 -translate-y-1/2 text-[#71717b] absolute left-4" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl bg-white border border-zinc-200 text-sm pl-12 h-12 focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
            placeholder="Search issues by title, location, or keyword..."
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[
            {
              icon: <span className="size-2 rounded-full bg-[#ff6900]" />,
              label: "Status",
            },
            {
              icon: <MapPin className="size-4 text-[#71717b]" />,
              label: "Location",
            },
            {
              icon: <Tag className="size-4 text-[#71717b]" />,
              label: "Category",
            },
            {
              icon: <Flame className="size-4 text-[#71717b]" />,
              label: "Popularity",
            },
          ].map((f) => (
            <button
              key={f.label}
              className="font-medium rounded-full bg-white text-zinc-950 text-sm border border-zinc-200 px-3 gap-2 h-9 flex items-center hover:bg-zinc-50"
            >
              {f.icon}
              {f.label}
              <ChevronDown className="size-4 text-[#71717b]" />
            </button>
          ))}
          <div className="flex ml-auto items-center gap-2">
            <span className="text-[#71717b] text-sm hidden sm:inline">
              Sort by
            </span>
            <button className="font-medium rounded-full bg-white text-zinc-950 text-sm border border-zinc-200 px-3 gap-2 h-9 flex items-center hover:bg-zinc-50">
              <ArrowDownWideNarrow className="size-4 text-[#71717b]" />
              Most Recent
              <ChevronDown className="size-4 text-[#71717b]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main layout — stack on mobile, sidebar on xl */}
      <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6">
        {/* Issues list */}
        <div className="col-span-full xl:col-span-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-[#71717b] text-sm">
              Showing{" "}
              <span className="font-semibold text-zinc-950">{filtered.length}</span>{" "}
              issues
            </span>
            <div className="font-medium text-[#71717b] text-xs flex items-center gap-3 flex-wrap">
              {[
                ["#ff6900", "Pending"],
                ["#1E8E3E", "Resolved"],
                ["#e7000b", "Urgent"],
              ].map(([color, label]) => (
                <span key={label} className="flex items-center gap-1">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: color }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {filtered.map((issue) => (
            <Link
              href={`/citizen/issues/${issue.id}`}
              key={issue.id}
              className="block bg-white rounded-2xl border border-zinc-200 p-5 hover:shadow-sm hover:border-[#ff6900]/20 transition-all group"
            >
              <div className="flex gap-4">
                <div
                  className={`size-12 shrink-0 ${issue.iconBg} rounded-xl flex justify-center items-center`}
                >
                  {issue.icon}
                </div>
                <div className="flex flex-col flex-1 gap-2 min-w-0">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-zinc-950 text-base group-hover:text-[#ff6900] transition-colors">
                          {issue.title}
                        </h3>
                        <span
                          className={`rounded-full text-xs px-2 py-0.5 font-semibold shrink-0 ${issue.badge.cls}`}
                        >
                          {issue.badge.label}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-[#71717b] text-sm">
                        {issue.desc}
                      </p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 flex px-3 py-2 flex-col items-center gap-1 shrink-0">
                      <ArrowBigUp className="size-5 text-[#ff6900]" />
                      <span className="font-bold text-zinc-950 text-sm">
                        {issue.upvotes}
                      </span>
                    </div>
                  </div>
                  <div className="font-medium text-[#71717b] text-xs flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5" />
                      {issue.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="size-3.5" />
                      {issue.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {issue.time}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <button className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
              <ChevronLeft className="size-4 text-[#71717b]" />
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`size-9 rounded-lg text-sm font-medium ${
                  p === 1
                    ? "bg-[#ff6900] text-orange-50"
                    : "border border-zinc-200 text-zinc-950 hover:bg-zinc-50"
                }`}
              >
                {p}
              </button>
            ))}
            <span className="text-[#71717b] text-sm px-1">...</span>
            <button className="size-9 rounded-lg border border-zinc-200 text-sm font-medium hover:bg-zinc-50">
              42
            </button>
            <button className="size-9 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50">
              <ChevronRight className="size-4 text-[#71717b]" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-full xl:col-span-4">
          <div className="xl:sticky xl:top-20 flex flex-col gap-4">
            {/* Map */}
            <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-zinc-200 to-zinc-100 flex items-center justify-center">
                <span className="text-[#71717b] text-sm">Map Preview</span>
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
                <div className="bg-black/40 absolute inset-x-0 top-0 p-3">
                  <span className="font-semibold text-white text-sm">
                    Issue Map Preview
                  </span>
                </div>
              </div>
              <div className="p-3 flex flex-col gap-2">
                {[
                  ["#ff6900", "Pending clusters", "86"],
                  ["#e7000b", "Urgent hotspots", "12"],
                  ["#1E8E3E", "Resolved areas", "340"],
                ].map(([c, l, v]) => (
                  <div
                    key={l}
                    className="font-medium text-xs flex justify-between items-center"
                  >
                    <span className="text-[#71717b] flex items-center gap-1.5">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ background: c }}
                      />
                      {l}
                    </span>
                    <span className="font-semibold text-zinc-950">{v}</span>
                  </div>
                ))}
                <button className="font-medium rounded-lg text-zinc-950 text-sm border border-zinc-200 mt-1 gap-2 w-full h-9 flex items-center justify-center hover:bg-zinc-50">
                  <Maximize2 className="size-4" />
                  Open Full Map
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#ff6900] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-base mb-2">See a problem?</h3>
              <p className="text-orange-100 text-xs leading-relaxed mb-4">
                Report issues in your area and help officials prioritize what
                matters most.
              </p>
              <Link
                href="/citizen/submit"
                className="flex items-center justify-center gap-2 bg-white text-[#ff6900] font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-orange-50 transition-colors w-full"
              >
                <Plus size={14} />
                Submit a Complaint
              </Link>
            </div>

            {/* AI Insight */}
            <div className="bg-[#ff6900]/5 rounded-2xl border border-[#ff6900]/20 p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center">
                  <Sparkles className="size-4 text-orange-50" />
                </div>
                <span className="font-semibold text-zinc-950 text-sm">
                  AI Insight
                </span>
              </div>
              <p className="text-[#71717b] text-sm leading-relaxed">
                Drainage and road issues account for{" "}
                <span className="font-semibold text-zinc-950">58%</span> of this
                week&apos;s urgent reports. Prioritizing these could impact{" "}
                <span className="font-semibold text-[#ff6900]">42,000+</span>{" "}
                citizens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
