"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { PriorityBadge } from "@/components/dashboard/PriorityBadge";
import { StatusChip } from "@/components/dashboard/StatusChip";
import { AIRecommendationCard } from "@/components/dashboard/AIRecommendationCard";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const trendsData = [
  { name: "Week 1", total: 240, resolved: 120, pending: 85 },
  { name: "Week 2", total: 300, resolved: 150, pending: 120 },
  { name: "Week 3", total: 280, resolved: 140, pending: 110 },
  { name: "Week 4", total: 350, resolved: 200, pending: 120 },
];

const categoriesData = [
  { name: "Roads", value: 35, color: "#1e8e3e" },
  { name: "Water", value: 25, color: "#f57c00" },
  { name: "Electricity", value: 20, color: "#0369a1" },
  { name: "Sanitation", value: 15, color: "#7c3aed" },
  { name: "Other", value: 5, color: "#06b6d4" },
];

const recentComplaints = [
  {
    id: "PS-001234",
    title: "Pothole on Main Road",
    location: "Ward 12, Sector A",
    category: "Roads",
    priority: "high" as const,
    status: "in-progress" as const,
    date: "2 hours ago",
  },
  {
    id: "PS-001233",
    title: "Water Pipeline Leak",
    location: "Ward 7, Sector C",
    category: "Water Supply",
    priority: "critical" as const,
    status: "open" as const,
    date: "4 hours ago",
  },
  {
    id: "PS-001232",
    title: "Street Light Not Working",
    location: "Ward 4, Sector B",
    category: "Electricity",
    priority: "medium" as const,
    status: "resolved" as const,
    date: "1 day ago",
  },
  {
    id: "PS-001231",
    title: "Garbage Not Collected",
    location: "Ward 15, Sector D",
    category: "Sanitation",
    priority: "high" as const,
    status: "pending" as const,
    date: "2 days ago",
  },
  {
    id: "PS-001230",
    title: "Drainage Overflow",
    location: "Ward 9, Sector A",
    category: "Sanitation",
    priority: "high" as const,
    status: "in-progress" as const,
    date: "2 days ago",
  },
];

const recommendations = [
  {
    title: "Urgent: High-Concentration Pothole Zone",
    description: "Ward 12 has 23 pothole complaints in the last week. Prioritize immediate repair.",
    impact: "high" as const,
    actionable: true,
  },
  {
    title: "Seasonal Water Supply Surge",
    description: "Water complaints increase 40% during monsoon. Pre-position repair teams.",
    impact: "high" as const,
    actionable: true,
  },
  {
    title: "Optimize Service Routes",
    description: "Clustering analysis suggests consolidating collections in Sectors B&C.",
    impact: "medium" as const,
    actionable: true,
  },
  {
    title: "Community Satisfaction Alert",
    description: "Roads category satisfaction dropped 12%. Consider increasing funding.",
    impact: "medium" as const,
    actionable: false,
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Real-time insights into your constituency&apos;s infrastructure and citizen complaints
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Complaints"
          value="12,842"
          subtitle="All time"
          trend={{ value: 18.6, isPositive: true }}
          icon="📋"
        />
        <StatCard
          title="Pending Resolution"
          value="4,283"
          subtitle="Action needed"
          trend={{ value: 12.4, isPositive: true }}
          icon="⏳"
        />
        <StatCard
          title="Successfully Resolved"
          value="7,892"
          subtitle="Completion rate"
          trend={{ value: 24.1, isPositive: true }}
          icon="✅"
        />
        <StatCard
          title="Emergency Alerts"
          value="243"
          subtitle="Critical issues"
          trend={{ value: 6.3, isPositive: false }}
          icon="🚨"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trends Chart */}
        <div className="lg:col-span-2">
          <ChartCard title="Complaint Trends" subtitle="4-week overview">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: 12 }} />
                <YAxis stroke="#6b7280" style={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#1e8e3e"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#0369a1"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#f57c00"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Categories Pie Chart */}
        <ChartCard title="Complaint Categories" subtitle="Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoriesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoriesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Recommendations Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">AI-Powered Recommendations</h2>
          <p className="text-muted-foreground mt-1">
            Data-driven insights to optimize your governance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recommendations.map((rec, idx) => (
            <AIRecommendationCard
              key={idx}
              title={rec.title}
              description={rec.description}
              impact={rec.impact}
              actionable={rec.actionable}
            />
          ))}
        </div>
      </div>

      {/* Recent Complaints Table */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Recent Complaints</h2>
          <p className="text-muted-foreground mt-1">Latest citizen-reported issues</p>
        </div>
        <DataTable
          columns={[
            { id: "id", label: "ID", width: "w-24" },
            { id: "title", label: "Issue" },
            { id: "location", label: "Location" },
            {
              id: "priority",
              label: "Priority",
              render: (value) => <PriorityBadge priority={value} />,
            },
            {
              id: "status",
              label: "Status",
              render: (value) => <StatusChip status={value} />,
            },
            { id: "date", label: "Date", width: "w-32" },
          ]}
          data={recentComplaints}
          onRowClick={(row) => console.log("Clicked:", row)}
        />
      </div>

      {/* Quick Stats Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Average Resolution Time
          </p>
          <p className="text-3xl font-bold text-foreground">4.2 days</p>
          <p className="text-xs text-green-600 mt-2">↓ 8% improvement</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">
            Citizen Satisfaction
          </p>
          <p className="text-3xl font-bold text-foreground">78%</p>
          <p className="text-xs text-green-600 mt-2">↑ 3% increase</p>
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2">
            On-Time Resolution Rate
          </p>
          <p className="text-3xl font-bold text-foreground">82%</p>
          <p className="text-xs text-orange-600 mt-2">↓ 2% decline</p>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
