import StatCard from "@/components/dashboard/StatCard";
import IssueHeatmap from "@/components/dashboard/IssueHeatmap";
import ComplaintsChart from "@/components/dashboard/ComplaintsChart";
import TopIssuesChart from "@/components/dashboard/TopIssuesChart";
import RecentComplaints from "@/components/dashboard/RecentComplaints";
import AIPriorityRecommendations from "@/components/dashboard/AIPriorityRecommendations";
import BottomStats from "@/components/dashboard/BottomStats";
import { FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function MPDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col gap-0.5">
        <h1 className="font-bold text-zinc-950 text-2xl leading-8 tracking-tight">
          Welcome back, Raghav Sharma 👋
        </h1>
        <p className="text-[#71717b] text-sm">
          Here&apos;s what&apos;s happening in your constituency today.
        </p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-4 gap-5">
        <StatCard
          title="Total Complaints"
          value={12842}
          delta="↑ 18.6% vs last 30 days"
          deltaPositive={true}
          icon={<FileText size={20} className="text-[#ff6900]" />}
          iconBg="bg-[#ff6900]/10"
          borderColor="border-l-[#ff6900]"
        />
        <StatCard
          title="Pending"
          value={4283}
          delta="↓ 11.4% vs last 30 days"
          deltaPositive={false}
          icon={<Clock size={20} className="text-amber-600" />}
          iconBg="bg-amber-50"
          borderColor="border-l-amber-500"
        />
        <StatCard
          title="Resolved"
          value={7892}
          delta="↑ 24.1% vs last 30 days"
          deltaPositive={true}
          icon={<CheckCircle size={20} className="text-[#1E8E3E]" />}
          iconBg="bg-[#1E8E3E]/10"
          borderColor="border-l-[#1E8E3E]"
        />
        <StatCard
          title="Emergency Alerts"
          value={243}
          delta="↑ 6.2% vs last 30 days"
          deltaPositive={false}
          icon={<AlertTriangle size={20} className="text-red-600" />}
          iconBg="bg-red-50"
          borderColor="border-l-red-500"
        />
      </div>

      {/* Heatmap + Trend + Donut */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4"><IssueHeatmap /></div>
        <div className="col-span-5"><ComplaintsChart /></div>
        <div className="col-span-3"><TopIssuesChart /></div>
      </div>

      {/* Table + Recommendations */}
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8"><RecentComplaints /></div>
        <div className="col-span-4"><AIPriorityRecommendations /></div>
      </div>

      {/* Bottom Stats */}
      <BottomStats />
    </div>
  );
}
