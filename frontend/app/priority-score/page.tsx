"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  AlertTriangle, BarChart3, FileText, TrendingUp,
  Waves, Droplets, Lightbulb, ChevronDown,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const scoreCards = [
  { label: "Total Scored Issues", value: "248", icon: FileText, iconBg: "bg-zinc-100", iconColor: "text-[#ff6900]" },
  { label: "Average Priority Score", value: "76.4", icon: TrendingUp, iconBg: "bg-zinc-100", iconColor: "text-[#ff6900]" },
  { label: "High Priority Count", value: "64", valColor: "text-[#ff6900]", icon: AlertTriangle, iconBg: "bg-[#ff6900]/10", iconColor: "text-[#ff6900]" },
];

const distData = [
  { range: "90-100", count: 78 }, { range: "80-89", count: 112 }, { range: "70-79", count: 96 },
  { range: "60-69", count: 84 }, { range: "50-59", count: 58 }, { range: "40-49", count: 32 },
];

const issues = [
  {
    rank: 1, score: 94, bg: "bg-[#ff6900]", textColor: "text-orange-50",
    scoreBorder: "border-[#ff6900]/15", scoreText: "text-[#ff6900]",
    icon: <AlertTriangle className="size-4 text-[#ff6900]" />,
    title: "Open manhole near Sector 14 bus stand",
    category: "Drainage", ward: "Ward 14 · Gurugram",
    tags: ["High Urgency", "High Population Impact", "Low Cost"],
    scores: [{ l: "Urgency Weight", v: 92 }, { l: "Population Impact", v: 88 }, { l: "Budget Efficiency", v: 76 }],
  },
  {
    rank: 2, score: 89, bg: "bg-[#ff6900]/10", textColor: "text-[#ff6900]",
    scoreBorder: "border-[#ff6900]/20", scoreText: "text-[#ff6900]",
    icon: <Waves className="size-4 text-[#ff6900]" />,
    title: "Severe potholes on Old Airport Road",
    category: "Roads", ward: "Ward 8 · Bengaluru",
    tags: ["High Urgency", "High Population Impact", "Medium Cost"],
    scores: [{ l: "Urgency Weight", v: 86 }, { l: "Population Impact", v: 91 }, { l: "Budget Efficiency", v: 68 }],
  },
  {
    rank: 3, score: 71, bg: "bg-zinc-100", textColor: "text-zinc-950",
    scoreBorder: "border-zinc-100", scoreText: "text-zinc-950",
    icon: <Droplets className="size-4 text-[#ff6900]" />,
    title: "Water supply interruptions in Ward 22",
    category: "Water", ward: "Ward 22 · Pune",
    tags: ["Moderate Urgency", "High Population Impact", "Low Cost"],
    scores: [{ l: "Urgency Weight", v: 64 }, { l: "Population Impact", v: 83 }, { l: "Budget Efficiency", v: 79 }],
  },
  {
    rank: 4, score: 63, bg: "bg-zinc-100", textColor: "text-zinc-950",
    scoreBorder: "border-zinc-100", scoreText: "text-zinc-950",
    icon: <Lightbulb className="size-4 text-[#ff6900]" />,
    title: "Non-functional street lights on MG Road",
    category: "Electricity", ward: "Ward 3 · Indore",
    tags: ["Moderate Urgency", "Medium Population Impact", "Low Cost"],
    scores: [{ l: "Urgency Weight", v: 58 }, { l: "Population Impact", v: 61 }, { l: "Budget Efficiency", v: 72 }],
  },
];

const tagCls = (t: string) =>
  t.includes("High") ? "bg-[#ff6900]/10 text-[#ff6900]" : "bg-zinc-100 text-zinc-950";

export default function PriorityScorePage() {
  return (
    <DashboardLayout title="Priority Scores" subtitle="AI-ranked issues by urgency, impact, and cost-efficiency">
      {/* Filter pills */}
      <div className="flex items-center gap-2 mb-5 flex-wrap">
        {["Highest Score", "Most Citizens Affected", "Lowest Cost"].map(p => (
          <button key={p} className="shadow-sm rounded-xl bg-white text-[#71717b] text-xs sm:text-sm border border-zinc-200 px-3 sm:px-4 py-2 hover:bg-zinc-50 transition-colors">
            {p}
          </button>
        ))}
      </div>

      {/* Summary cards — 2 cols on mobile, 4 on lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {scoreCards.map(card => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="shadow-sm rounded-2xl bg-white border border-zinc-200 p-4 sm:p-5">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <div className="text-[#71717b] text-xs">{card.label}</div>
                  <div className={`font-semibold text-2xl sm:text-3xl mt-1 sm:mt-2 ${card.valColor || "text-zinc-950"}`}>{card.value}</div>
                </div>
                <div className={`size-9 sm:size-11 rounded-xl ${card.iconBg} flex justify-center items-center shrink-0`}>
                  <Icon className={`size-4 sm:size-5 ${card.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
        {/* Score distribution */}
        <div className="shadow-sm rounded-2xl bg-white border border-zinc-200 p-4 sm:p-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[#71717b] text-xs">Score Distribution</div>
              <div className="flex mt-3 items-end gap-1">
                {[30, 45, 60, 75, 100].map((h, i) => (
                  <div key={i} className="rounded-full w-2" style={{ height: h * 0.16 + "px", background: `rgba(255,105,0,${0.3 + i * 0.17})` }} />
                ))}
              </div>
            </div>
            <div className="size-9 sm:size-11 rounded-xl bg-zinc-100 flex justify-center items-center">
              <BarChart3 className="size-4 sm:size-5 text-[#ff6900]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content — stacked on mobile, side-by-side on xl */}
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_300px] gap-6">
        {/* Issues list */}
        <div className="space-y-4">
          {issues.map(issue => (
            <div key={issue.rank} className="shadow-sm rounded-2xl bg-white border border-zinc-200 p-4 sm:p-6">
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className={`size-9 sm:size-10 font-semibold rounded-full text-sm flex justify-center items-center shrink-0 ${issue.bg} ${issue.textColor}`}>
                    {issue.rank}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      {issue.icon}
                      <h2 className="font-semibold text-sm sm:text-base leading-snug">{issue.title}</h2>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs px-2 py-0.5">{issue.category}</span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs px-2 py-0.5">{issue.ward}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className={`size-14 sm:size-[72px] rounded-full bg-white border-8 flex flex-col justify-center items-center ${issue.scoreBorder}`}>
                    <div className={`font-semibold text-lg sm:text-xl ${issue.scoreText}`}>{issue.score}</div>
                    <div className="text-[#71717b] text-[9px] sm:text-[10px]">/100</div>
                  </div>
                  <ChevronDown className="size-4 sm:size-5 text-[#71717b]" />
                </div>
              </div>

              <div className="flex mt-3 flex-wrap gap-2">
                {issue.tags.map(t => (
                  <span key={t} className={`font-medium rounded-full text-xs px-2.5 py-1 ${tagCls(t)}`}>{t}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 rounded-xl bg-zinc-100 border border-zinc-200 mt-3 sm:mt-4 p-3 sm:p-4 gap-3">
                {issue.scores.map(s => (
                  <div key={s.l}>
                    <div className="text-[#71717b] text-xs flex justify-between items-center mb-2">
                      <span>{s.l}</span>
                      <span className="font-medium">{s.v}%</span>
                    </div>
                    <div className="rounded-full bg-white h-2">
                      <div className="rounded-full bg-[#ff6900] h-2" style={{ width: `${s.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Distribution sidebar */}
        <aside className="xl:sticky xl:top-[96px] shadow-sm rounded-2xl bg-white border border-zinc-200 p-5 sm:p-6 h-fit">
          <div className="flex justify-between items-center mb-1">
            <div className="font-semibold text-base sm:text-lg">Score Distribution</div>
            <BarChart3 className="size-5 text-[#ff6900]" />
          </div>
          <div className="text-[#71717b] text-sm mb-4 sm:mb-5">Across all issues</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={distData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} />
              <YAxis dataKey="range" type="category" tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} width={45} />
              <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e4e4e7" }} />
              <Bar dataKey="count" name="Issues" fill="#ff6900" radius={[0,4,4,0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 sm:mt-5 pt-4 border-t border-zinc-200 flex flex-col gap-3">
            {[
              { range: "High (80–100)", count: 64, color: "#ff6900" },
              { range: "Medium (60–79)", count: 121, color: "#f97316" },
              { range: "Low (<60)", count: 63, color: "#a1a1aa" },
            ].map(item => (
              <div key={item.range} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-[#71717b]">
                  <span className="size-2 rounded-full" style={{ background: item.color }} />
                  {item.range}
                </span>
                <span className="font-semibold text-zinc-950">{item.count} issues</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
