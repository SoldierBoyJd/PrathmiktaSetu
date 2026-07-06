"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const radarData = [
  { subject: "Roads", A: 85, fullMark: 100 },
  { subject: "Water", A: 72, fullMark: 100 },
  { subject: "Sanitation", A: 68, fullMark: 100 },
  { subject: "Electricity", A: 55, fullMark: 100 },
  { subject: "Healthcare", A: 60, fullMark: 100 },
  { subject: "Education", A: 45, fullMark: 100 },
];

const wardScores = [
  { ward: "Ward 12", score: 91, issues: 642, trend: "↑" },
  { ward: "Ward 8", score: 83, issues: 481, trend: "↑" },
  { ward: "Ward 15", score: 78, issues: 394, trend: "→" },
  { ward: "Ward 9", score: 72, issues: 213, trend: "↓" },
  { ward: "Ward 5", score: 65, issues: 287, trend: "↑" },
  { ward: "Ward 3", score: 44, issues: 98, trend: "↓" },
];

function ScoreBar({ score }: { score: number }) {
  const color = score >= 80 ? "#E74C3C" : score >= 60 ? "#F5831F" : "#27AE60";
  return (
    <div className="flex items-center gap-2 flex-1">
      <div className="flex-1 h-2 bg-[#EDF2F7] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span className="text-xs font-bold min-w-[28px] text-right" style={{ color }}>{score}</span>
    </div>
  );
}

export default function PriorityScorePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Priority Score"
        subtitle="AI-computed priority scores help you focus on the most critical issues first."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Overall Score Card */}
        <div className="col-span-3 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0] flex flex-col items-center justify-center text-center">
          <p className="text-xs text-[#718096] uppercase tracking-wide mb-3">Constituency Priority Score</p>
          <div className="relative w-28 h-28 mb-3">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#EDF2F7" strokeWidth="10" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#E74C3C" strokeWidth="10"
                strokeDasharray={`${(74 / 100) * 251.2} 251.2`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#E74C3C]">74</span>
              <span className="text-[10px] text-[#718096]">/ 100</span>
            </div>
          </div>
          <span className="text-xs font-semibold bg-[#FEF2F2] text-[#E74C3C] px-3 py-1 rounded-full">High Priority</span>
          <p className="text-[11px] text-[#A0AEC0] mt-2">↑ 6 pts vs last month</p>
        </div>

        {/* Radar Chart */}
        <div className="col-span-5 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Category Priority Breakdown</h3>
          <ResponsiveContainer width="100%" height={220}>
            <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="#E2E8F0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#718096" }} />
              <Radar name="Score" dataKey="A" stroke="#2D7A3A" fill="#2D7A3A" fillOpacity={0.2} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Ward Score List */}
        <div className="col-span-4 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-3">Ward Priority Scores</h3>
          <div className="space-y-3">
            {wardScores.map((w) => (
              <div key={w.ward} className="flex items-center gap-3">
                <div className="w-16 flex-shrink-0">
                  <p className="text-xs font-medium text-[#1A2332]">{w.ward}</p>
                  <p className="text-[10px] text-[#A0AEC0]">{w.issues} issues</p>
                </div>
                <ScoreBar score={w.score} />
                <span className={`text-xs font-bold flex-shrink-0 ${
                  w.trend === "↑" ? "text-[#E74C3C]" : w.trend === "↓" ? "text-[#27AE60]" : "text-[#F5831F]"
                }`}>{w.trend}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar chart – scoring factors */}
        <div className="col-span-12 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Scoring Factors by Ward</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={wardScores.map((w) => ({ name: w.ward, score: w.score, issues: Math.round(w.issues / 10) }))}
              margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Bar dataKey="score" name="Priority Score" fill="#E74C3C" radius={[4, 4, 0, 0]} />
              <Bar dataKey="issues" name="Issue Density (×10)" fill="#2D7A3A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  );
}
