import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import IssueHeatmap from "@/components/dashboard/IssueHeatmap";
import ComplaintsChart from "@/components/dashboard/ComplaintsChart";
import TopIssuesChart from "@/components/dashboard/TopIssuesChart";
import RecentComplaints from "@/components/dashboard/RecentComplaints";
import AIPriorityRecommendations from "@/components/dashboard/AIPriorityRecommendations";
import BottomStats from "@/components/dashboard/BottomStats";
import {
  FileText,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-5">

        {/* ── Stat Cards Row ── */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            title="Total Complaints"
            value={12842}
            delta="↑ 18.6% vs last 30 days"
            deltaPositive={true}
            icon={<FileText size={20} className="text-[#2D7A3A]" />}
            iconBg="bg-[#E8F5E9]"
            borderColor="border-l-[#2D7A3A]"
          />
          <StatCard
            title="Pending"
            value={4283}
            delta="↓ 11.4% vs last 30 days"
            deltaPositive={false}
            icon={<Clock size={20} className="text-[#F5831F]" />}
            iconBg="bg-[#FFF7E6]"
            borderColor="border-l-[#F5831F]"
          />
          <StatCard
            title="Resolved"
            value={7892}
            delta="↑ 24.1% vs last 30 days"
            deltaPositive={true}
            icon={<CheckCircle size={20} className="text-[#2980B9]" />}
            iconBg="bg-[#EBF8FF]"
            borderColor="border-l-[#2980B9]"
          />
          <StatCard
            title="Emergency Alerts"
            value={243}
            delta="↑ 6.2% vs last 30 days"
            deltaPositive={false}
            icon={<AlertTriangle size={20} className="text-[#E74C3C]" />}
            iconBg="bg-[#FEF2F2]"
            borderColor="border-l-[#E74C3C]"
          />
        </div>

        {/* ── Heatmap + Trend + Top Issues ── */}
        <div className="grid grid-cols-12 gap-4">
          {/* Heatmap – 4 cols */}
          <div className="col-span-4">
            <IssueHeatmap />
          </div>
          {/* Complaints Trend – 5 cols */}
          <div className="col-span-5">
            <ComplaintsChart />
          </div>
          {/* Top Issues Donut – 3 cols */}
          <div className="col-span-3">
            <TopIssuesChart />
          </div>
        </div>

        {/* ── Recent Complaints + AI Recommendations ── */}
        <div className="grid grid-cols-12 gap-4">
          {/* Recent Complaints Table – 8 cols */}
          <div className="col-span-8">
            <RecentComplaints />
          </div>
          {/* AI Priority Recommendations – 4 cols */}
          <div className="col-span-4">
            <AIPriorityRecommendations />
          </div>
        </div>

        {/* ── Bottom Stats Row ── */}
        <BottomStats />

      </div>
    </DashboardLayout>
  );
}
