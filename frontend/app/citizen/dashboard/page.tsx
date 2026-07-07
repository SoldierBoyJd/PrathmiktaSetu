"use client";

import { useAuthStore } from "@/lib/store/useAuthStore";
import Link from "next/link";
import {
  FilePlus2,
  Search,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ChevronRight,
  ArrowBigUp,
  Construction,
  Droplets,
  Lightbulb,
  TriangleAlert,
  Sparkles,
} from "lucide-react";

const recentIssues = [
  {
    id: "ISS-001",
    title: "Open manhole near Sector 14 bus stand",
    category: "Drainage",
    status: "Active",
    upvotes: 642,
    badge: "Urgent",
    badgeCls: "bg-red-50 text-red-600",
    icon: <TriangleAlert className="size-5 text-red-600" />,
    iconBg: "bg-red-50",
  },
  {
    id: "ISS-002",
    title: "Severe potholes on Old Airport Road",
    category: "Roads",
    status: "Pending",
    upvotes: 1200,
    badge: "Pending",
    badgeCls: "bg-[#ff6900]/10 text-[#ff6900]",
    icon: <Construction className="size-5 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
  },
  {
    id: "ISS-003",
    title: "Water supply restored in Ward 22",
    category: "Water",
    status: "Resolved",
    upvotes: 894,
    badge: "Resolved",
    badgeCls: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
    icon: <Droplets className="size-5 text-[#1E8E3E]" />,
    iconBg: "bg-[#1E8E3E]/10",
  },
  {
    id: "ISS-004",
    title: "Non-functional street lights on MG Road",
    category: "Electricity",
    status: "Pending",
    upvotes: 521,
    badge: "Pending",
    badgeCls: "bg-[#ff6900]/10 text-[#ff6900]",
    icon: <Lightbulb className="size-5 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
  },
];

const myComplaints = [
  {
    id: "PS-0841",
    title: "Potholes on Main Road",
    status: "In Progress",
    date: "20 Jun 2025",
    progress: 60,
  },
  {
    id: "PS-0828",
    title: "Garbage not collected",
    status: "Pending",
    date: "19 Jun 2025",
    progress: 20,
  },
];

const statusColor: Record<string, string> = {
  "In Progress": "text-[#1E88E5]",
  Pending: "text-[#ff6900]",
  Resolved: "text-[#1E8E3E]",
};

const progressColor = (p: number) =>
  p >= 80 ? "#1E8E3E" : p >= 40 ? "#ff6900" : "#a1a1aa";

export default function CitizenDashboardPage() {
  const { user } = useAuthStore();
  const name = user?.full_name?.split(" ")[0] ?? "Citizen";

  return (
    <div className="space-y-6">
      {/* Welcome hero */}
      <div className="rounded-2xl bg-[#ff6900] p-6 text-white relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-5%] w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <p className="text-orange-100 text-sm mb-1">Welcome back 👋</p>
          <h1 className="text-2xl font-bold mb-3">{name}</h1>
          <p className="text-orange-100 text-sm mb-5 max-w-lg">
            Your constituency needs your voice. Report issues, track progress,
            and see what&apos;s being done in your area.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/citizen/submit"
              className="flex items-center gap-2 bg-white text-[#ff6900] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors"
            >
              <FilePlus2 size={15} />
              Report an Issue
            </Link>
            <Link
              href="/citizen/track"
              className="flex items-center gap-2 bg-white/15 text-white border border-white/30 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/25 transition-colors"
            >
              <Search size={15} />
              Track Complaint
            </Link>
          </div>
        </div>
      </div>

      {/* Stats — responsive: 1 col → 2 col → 4 col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          {
            label: "Total Complaints",
            value: "12,842",
            icon: <FilePlus2 size={18} className="text-[#ff6900]" />,
            bg: "bg-[#ff6900]/10",
            border: "border-l-[#ff6900]",
          },
          {
            label: "Resolved",
            value: "7,892",
            icon: <CheckCircle2 size={18} className="text-[#1E8E3E]" />,
            bg: "bg-[#1E8E3E]/10",
            border: "border-l-[#1E8E3E]",
          },
          {
            label: "Pending",
            value: "4,283",
            icon: <Clock size={18} className="text-amber-500" />,
            bg: "bg-amber-50",
            border: "border-l-amber-500",
          },
          {
            label: "Emergency Alerts",
            value: "243",
            icon: <AlertTriangle size={18} className="text-red-500" />,
            bg: "bg-red-50",
            border: "border-l-red-500",
          },
        ].map((s) => (
          <div
            key={s.label}
            className={`bg-white rounded-2xl p-4 border border-zinc-200 border-l-4 shadow-sm ${s.border}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#71717b] mb-1">{s.label}</p>
                <p className="text-xl font-bold text-zinc-950">{s.value}</p>
              </div>
              <div
                className={`size-9 rounded-xl flex items-center justify-center ${s.bg}`}
              >
                {s.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content — stack on mobile, 12-col on xl */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Recent Issues Feed */}
        <div className="col-span-full xl:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-zinc-950 text-base">
              Recent Issues in Your Area
            </h2>
            <Link
              href="/citizen/issues"
              className="text-xs font-semibold text-[#ff6900] hover:underline"
            >
              View all →
            </Link>
          </div>
          {recentIssues.map((issue) => (
            <Link
              href={`/citizen/issues/${issue.id}`}
              key={issue.id}
              className="flex items-start gap-3 bg-white rounded-2xl border border-zinc-200 p-4 hover:shadow-sm hover:border-[#ff6900]/20 transition-all group"
            >
              <div
                className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${issue.iconBg}`}
              >
                {issue.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="font-semibold text-sm text-zinc-950 group-hover:text-[#ff6900] transition-colors truncate">
                    {issue.title}
                  </p>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${issue.badgeCls}`}
                  >
                    {issue.badge}
                  </span>
                </div>
                <p className="text-xs text-[#71717b]">{issue.category}</p>
              </div>
              <div className="shrink-0 flex flex-col items-center gap-0.5 border border-zinc-200 rounded-xl px-2.5 py-2">
                <ArrowBigUp size={14} className="text-[#ff6900]" />
                <span className="text-xs font-bold text-zinc-950">
                  {issue.upvotes >= 1000
                    ? (issue.upvotes / 1000).toFixed(1) + "k"
                    : issue.upvotes}
                </span>
              </div>
            </Link>
          ))}
          <Link
            href="/citizen/issues"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-zinc-200 bg-white text-sm font-medium text-[#71717b] hover:text-[#ff6900] hover:border-[#ff6900]/30 transition-all"
          >
            View all issues <ChevronRight size={14} />
          </Link>
        </div>

        {/* Right panel */}
        <div className="col-span-full xl:col-span-5 space-y-4">
          {/* My Complaints */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100">
              <h3 className="text-sm font-semibold text-zinc-950">
                My Complaints
              </h3>
              <Link
                href="/citizen/track"
                className="text-xs text-[#ff6900] font-medium hover:underline"
              >
                Track →
              </Link>
            </div>
            <div className="p-3 space-y-2">
              {myComplaints.map((c) => (
                <div
                  key={c.id}
                  className="p-3 rounded-xl bg-zinc-50 hover:bg-orange-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-950 truncate flex-1">
                      {c.title}
                    </span>
                    <span
                      className={`text-[10px] font-semibold ml-2 ${statusColor[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${c.progress}%`,
                          background: progressColor(c.progress),
                        }}
                      />
                    </div>
                    <span className="text-[10px] text-[#71717b]">
                      {c.progress}%
                    </span>
                  </div>
                  <p className="text-[10px] text-[#a1a1aa] mt-1">
                    {c.date} · {c.id}
                  </p>
                </div>
              ))}
              <Link
                href="/citizen/submit"
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-dashed border-[#ff6900]/40 text-xs font-semibold text-[#ff6900] hover:bg-[#ff6900]/5 transition-colors"
              >
                <FilePlus2 size={13} />
                File new complaint
              </Link>
            </div>
          </div>

          {/* Map preview */}
          <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
            <div className="relative h-36 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
              <MapPin size={28} className="text-[#ff6900] drop-shadow-md" />
              <div className="absolute top-2 left-2 bg-white/90 text-xs font-semibold px-2 py-1 rounded-lg border border-zinc-200 flex items-center gap-1">
                <MapPin size={11} className="text-[#ff6900]" /> Live Heatmap
              </div>
            </div>
            <div className="p-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-zinc-950">
                  Ward 12 – 642 issues
                </p>
                <p className="text-[10px] text-[#71717b]">
                  Highest activity this week
                </p>
              </div>
              <Link
                href="/citizen/transparency"
                className="text-xs font-semibold text-[#ff6900] hover:underline"
              >
                View map →
              </Link>
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-[#ff6900]/5 rounded-2xl border border-[#ff6900]/20 p-4 flex gap-3">
            <div className="size-8 rounded-lg bg-[#ff6900] flex items-center justify-center shrink-0">
              <Sparkles size={14} className="text-orange-50" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#ff6900] mb-1">
                AI Insight
              </p>
              <p className="text-[11px] text-[#71717b] leading-relaxed">
                Road and drainage issues account for{" "}
                <strong className="text-zinc-950">58%</strong> of this week&apos;s
                reports in your area. Your complaint could help prioritize
                repairs for{" "}
                <strong className="text-[#ff6900]">42,000+</strong> residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
