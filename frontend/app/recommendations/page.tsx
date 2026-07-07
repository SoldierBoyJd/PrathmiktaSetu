"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { ArrowRight, AlertTriangle, Lightbulb, Users, Check, X, TrafficCone, Droplets, LampCeiling, Recycle, School, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendations = [
  {
    rank: 1,
    icon: <TrafficCone className="size-5 text-red-600" />,
    iconBg: "bg-red-50",
    title: "Resurface Old Airport Road — Ward 8",
    category: "Roads",
    ward: "Ward 8 · Bengaluru",
    urgency: "High Urgency",
    impact: "High Population Impact",
    cost: "Medium Cost",
    desc: "Over 6,200 daily commuters affected. Pothole depth exceeds safety threshold. Immediate cold patching followed by full resurfacing recommended.",
    scores: [{ label: "Urgency Weight", val: 86 }, { label: "Population Impact", val: 91 }, { label: "Budget Efficiency", val: 68 }],
    score: 89,
    scoreCls: "text-[#ff6900] border-[#ff6900]/20",
  },
  {
    rank: 2,
    icon: <Droplets className="size-5 text-[#1E88E5]" />,
    iconBg: "bg-[#1E88E5]/10",
    title: "Fix pipeline burst near Sector B — Ward 8",
    category: "Water Supply",
    ward: "Ward 8",
    urgency: "High Urgency",
    impact: "High Population Impact",
    cost: "High Cost",
    desc: "1,800 households without water for 3+ days. Emergency pipeline replacement required. Health risk if not addressed within 48 hours.",
    scores: [{ label: "Urgency Weight", val: 92 }, { label: "Population Impact", val: 88 }, { label: "Budget Efficiency", val: 62 }],
    score: 84,
    scoreCls: "text-[#ff6900] border-[#ff6900]/20",
  },
  {
    rank: 3,
    icon: <LampCeiling className="size-5 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Install solar street lights on Nehru Marg — Ward 5",
    category: "Electricity",
    ward: "Ward 5",
    urgency: "Moderate Urgency",
    impact: "Medium Population Impact",
    cost: "Low Cost",
    desc: "7 non-functional lights on 2km stretch. Night-time safety concern. Solar installation recommended for sustainability and zero operating cost.",
    scores: [{ label: "Urgency Weight", val: 58 }, { label: "Population Impact", val: 61 }, { label: "Budget Efficiency", val: 84 }],
    score: 67,
    scoreCls: "text-zinc-950 border-zinc-200",
  },
  {
    rank: 4,
    icon: <Recycle className="size-5 text-[#1E8E3E]" />,
    iconBg: "bg-[#1E8E3E]/10",
    title: "Sanitation drive — Ward 9 &amp; 15",
    category: "Sanitation",
    ward: "Ward 9, Ward 15",
    urgency: "Moderate Urgency",
    impact: "High Population Impact",
    cost: "Low Cost",
    desc: "Garbage accumulation at 12 spots. Drain overflow risk during monsoon. Weekly pickup schedule and community cleanliness drive recommended.",
    scores: [{ label: "Urgency Weight", val: 64 }, { label: "Population Impact", val: 83 }, { label: "Budget Efficiency", val: 79 }],
    score: 63,
    scoreCls: "text-zinc-950 border-zinc-200",
  },
  {
    rank: 5,
    icon: <School className="size-5 text-[#71717b]" />,
    iconBg: "bg-zinc-100",
    title: "Repair boundary wall — Primary School, Ward 3",
    category: "Education",
    ward: "Ward 3",
    urgency: "Moderate Urgency",
    impact: "Medium Population Impact",
    cost: "Low Cost",
    desc: "Collapsed wall allows stray animals to enter school premises. Safety hazard for children. Simple masonry repair estimated at ₹2.8L.",
    scores: [{ label: "Urgency Weight", val: 55 }, { label: "Population Impact", val: 48 }, { label: "Budget Efficiency", val: 91 }],
    score: 58,
    scoreCls: "text-zinc-950 border-zinc-200",
  },
];

const tagCls = (label: string) => {
  if (label.includes("High Urgency")) return "bg-[#ff6900]/10 text-[#ff6900]";
  if (label.includes("High Population")) return "bg-[#ff6900]/10 text-[#ff6900]";
  return "bg-zinc-100 text-zinc-950";
};

export default function RecommendationsPage() {
  return (
    <DashboardLayout title="AI Recommendations" subtitle="AI-ranked action items by urgency, population impact, and cost-efficiency.">
      {/* Summary — 2 cols on mobile, 4 on sm+ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Recommendations", value: "24", color: "#ff6900" },
          { label: "High Priority", value: "8", color: "#e7000b" },
          { label: "Medium Priority", value: "11", color: "#ff6900" },
          { label: "Low Priority", value: "5", color: "#1E8E3E" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl p-4 shadow-sm border border-zinc-200 flex items-center gap-3">
            <span className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</span>
            <p className="text-xs text-[#71717b] font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {recommendations.map(rec => (
          <div key={rec.rank} className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-start gap-3">
                <div className={cn("size-10 font-semibold rounded-full text-sm flex justify-center items-center", rec.rank <= 2 ? "bg-[#ff6900] text-orange-50" : "bg-[#ff6900]/10 text-[#ff6900]")}>
                  {rec.rank}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={cn("size-8 rounded-lg flex items-center justify-center", rec.iconBg)}>{rec.icon}</div>
                    <h3 className="font-semibold text-lg" dangerouslySetInnerHTML={{ __html: rec.title }} />
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs px-2 py-0.5">{rec.category}</span>
                    <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs px-2 py-0.5">{rec.ward}</span>
                  </div>
                </div>
              </div>
              <div className={cn("size-[72px] rounded-full bg-white border-8 flex-shrink-0 flex flex-col justify-center items-center", rec.scoreCls)}>
                <span className={cn("font-semibold text-xl", rec.rank <= 2 ? "text-[#ff6900]" : "text-zinc-950")}>{rec.score}</span>
                <span className="text-[#71717b] text-[10px]">/100</span>
              </div>
            </div>

            <p className="text-[#71717b] text-sm mt-4 mb-4 leading-relaxed">{rec.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {[rec.urgency, rec.impact, rec.cost].map(tag => (
                <span key={tag} className={cn("font-medium rounded-full text-xs px-3 py-1", tagCls(tag))}>{tag}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 rounded-xl bg-zinc-50 border border-zinc-200 p-4 gap-3">
              {rec.scores.map(s => (
                <div key={s.label}>
                  <div className="text-[#71717b] text-xs flex justify-between items-center mb-2">
                    <span>{s.label}</span>
                    <span className="font-medium">{s.val}%</span>
                  </div>
                  <div className="rounded-full bg-white h-2">
                    <div className="rounded-full bg-[#ff6900] h-2" style={{ width: `${s.val}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button className="flex items-center gap-1.5 text-xs font-semibold text-[#ff6900] hover:underline">
                Take Action <ArrowRight size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
