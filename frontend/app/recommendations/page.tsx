"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { ArrowRight, Zap, TrendingUp, Users, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendations = [
  {
    id: 1,
    title: "Improve road conditions in Ward 12",
    description: "34% increase in road complaints this week. Immediate pothole patching and resurfacing recommended on Main Road and Ring Road.",
    category: "Roads",
    impact: "High Impact",
    affected: "4,200 residents",
    effort: "Medium",
    impactColor: "text-[#E74C3C] bg-[#FEF2F2]",
    icon: <AlertCircle size={16} className="text-[#E74C3C]" />,
  },
  {
    id: 2,
    title: "Fix water supply leakages in Ward 8",
    description: "Pipeline burst detected near Sector B. 3 days without water supply affecting 1,800 households. Emergency repair required.",
    category: "Water Supply",
    impact: "High Impact",
    affected: "1,800 households",
    effort: "High",
    impactColor: "text-[#E74C3C] bg-[#FEF2F2]",
    icon: <AlertCircle size={16} className="text-[#E74C3C]" />,
  },
  {
    id: 3,
    title: "Install solar street lights in Ward 5",
    description: "7 non-functional lights on Nehru Marg. Night-time safety concern. Solar installation recommended for sustainability.",
    category: "Electricity",
    impact: "Medium Impact",
    affected: "620 residents",
    effort: "Low",
    impactColor: "text-[#F5831F] bg-[#FFF7E6]",
    icon: <Zap size={16} className="text-[#F5831F]" />,
  },
  {
    id: 4,
    title: "Sanitation drive in Ward 9 & 15",
    description: "Garbage accumulation at 12 spots. Drain overflow risk during monsoon. Schedule weekly pickup and community cleaning drive.",
    category: "Sanitation",
    impact: "Medium Impact",
    affected: "3,100 residents",
    effort: "Medium",
    impactColor: "text-[#F5831F] bg-[#FFF7E6]",
    icon: <TrendingUp size={16} className="text-[#F5831F]" />,
  },
  {
    id: 5,
    title: "Mobile health camp in Ward 3",
    description: "Healthcare complaints up 22% this month. Recommend monthly mobile health camp focusing on preventive care and vaccinations.",
    category: "Healthcare",
    impact: "Low Impact",
    affected: "890 residents",
    effort: "Low",
    impactColor: "text-[#27AE60] bg-[#F0FDF4]",
    icon: <Users size={16} className="text-[#27AE60]" />,
  },
];

const effortColors: Record<string, string> = {
  Low: "text-[#27AE60] bg-[#F0FDF4]",
  Medium: "text-[#F5831F] bg-[#FFF7E6]",
  High: "text-[#E74C3C] bg-[#FEF2F2]",
};

export default function RecommendationsPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="AI Priority Recommendations"
        subtitle="AI-generated action items ranked by impact and urgency to help resolve constituency issues faster."
      />

      {/* Summary strip */}
      <div className="grid grid-cols-4 gap-4 mb-5">
        {[
          { label: "Total Recommendations", value: "24", color: "#2D7A3A" },
          { label: "High Priority", value: "8", color: "#E74C3C" },
          { label: "Medium Priority", value: "11", color: "#F5831F" },
          { label: "Low Priority", value: "5", color: "#27AE60" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}15` }}>
              <span className="text-lg font-bold" style={{ color: s.color }}>{s.value}</span>
            </div>
            <p className="text-xs text-[#718096] font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recommendations list */}
      <div className="space-y-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] hover:border-[#C6E6CB] hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center flex-shrink-0 text-sm font-bold text-[#718096]">
                {rec.id}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="text-sm font-semibold text-[#1A2332] group-hover:text-[#2D7A3A] transition-colors">
                    {rec.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", rec.impactColor)}>
                      {rec.impact}
                    </span>
                    <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", effortColors[rec.effort])}>
                      Effort: {rec.effort}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#718096] leading-relaxed mb-3">{rec.description}</p>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] bg-[#F5F7FA] text-[#4A5568] px-2 py-0.5 rounded-full font-medium border border-[#E2E8F0]">
                    {rec.category}
                  </span>
                  <span className="text-[10px] text-[#718096] flex items-center gap-1">
                    <Users size={10} />
                    {rec.affected}
                  </span>
                  <button className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-[#2D7A3A] hover:underline">
                    Take Action <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
