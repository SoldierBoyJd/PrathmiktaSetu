"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import {
  LayoutGrid,
  AlertTriangle,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
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
import { Button } from "@/components/ui/button";
import Link from "next/link";

const complaintsData = [
  { date: "May 20", total: 3200, resolved: 2400, pending: 800 },
  { date: "May 27", total: 4100, resolved: 2900, pending: 1200 },
  { date: "Jun 03", total: 5500, resolved: 4000, pending: 1500 },
  { date: "Jun 10", total: 6800, resolved: 5100, pending: 1700 },
  { date: "Jun 17", total: 7200, resolved: 5800, pending: 1400 },
  { date: "Jun 20", total: 7892, resolved: 6200, pending: 1692 },
];

const categoriesData = [
  { name: "Roads", value: 3592, percentage: 28.4 },
  { name: "Water Supply", value: 2795, percentage: 22.1 },
  { name: "Sanitation", value: 2225, percentage: 17.6 },
  { name: "Electricity", value: 1671, percentage: 13.2 },
  { name: "Waste Mgmt", value: 1241, percentage: 9.8 },
  { name: "Others", value: 1078, percentage: 8.5 },
];

const sourceData = [
  { name: "Mobile App", value: 6112, percentage: 48.5 },
  { name: "Web Portal", value: 3116, percentage: 24.7 },
  { name: "Public Kiosk", value: 1556, percentage: 12.3 },
  { name: "Call Center", value: 1130, percentage: 8.9 },
  { name: "Others", value: 708, percentage: 5.6 },
];

const recentComplaints = [
  {
    id: "PS-12842",
    issue: "Potholes on Main Road",
    location: "Ward 12, Bhopal",
    category: "Roads",
    priority: "High",
    status: "Pending",
    date: "20 Jun 2025, 10:24 AM",
  },
  {
    id: "PS-12841",
    issue: "Water leakage in pipeline",
    location: "Ward 7, Bhopal",
    category: "Water Supply",
    priority: "Medium",
    status: "In Progress",
    date: "20 Jun 2025, 09:11 AM",
  },
  {
    id: "PS-12840",
    issue: "Street light not working",
    location: "Ward 4, Bhopal",
    category: "Electricity",
    priority: "Low",
    status: "Resolved",
    date: "19 Jun 2025, 08:42 PM",
  },
  {
    id: "PS-12839",
    issue: "Garbage not collected",
    location: "Ward 15, Bhopal",
    category: "Waste Mgmt",
    priority: "Medium",
    status: "Pending",
    date: "19 Jun 2025, 06:35 PM",
  },
  {
    id: "PS-12838",
    issue: "Drain overflow",
    location: "Ward 9, Bhopal",
    category: "Sanitation",
    priority: "High",
    status: "In Progress",
    date: "19 Jun 2025, 05:12 PM",
  },
];

const recommendations = [
  {
    title: "Improve road conditions in Ward 12",
    priority: "High Impact",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Fix water supply leakage in Ward 7",
    priority: "High Impact",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Increase waste collection in Ward 15",
    priority: "Medium Impact",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Repair street lights in Ward 4",
    priority: "Medium Impact",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const COLORS = {
  roads: "#2d9c5d",
  water: "#5b6bf8",
  sanitation: "#ff9500",
  electricity: "#ff4757",
  waste: "#ffc107",
  other: "#999999",
};

const categoryColors = [
  "#2d9c5d",
  "#5b6bf8",
  "#ff9500",
  "#ff4757",
  "#ffc107",
  "#999999",
];

const sourceColors = ["#2d9c5d", "#5b6bf8", "#ff9500", "#ff4757", "#ffc107"];

function getPriorityColor(priority: string): string {
  switch (priority) {
    case "High":
      return "text-destructive";
    case "Medium":
      return "text-primary";
    case "Low":
      return "text-secondary";
    default:
      return "text-muted-foreground";
  }
}

function getStatusBadge(status: string): string {
  switch (status) {
    case "Resolved":
      return "bg-green-100 text-secondary";
    case "In Progress":
      return "bg-blue-100 text-accent";
    case "Pending":
      return "bg-orange-100 text-primary";
    default:
      return "bg-gray-100 text-muted-foreground";
  }
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Complaints"
            value="12,842"
            icon={<LayoutGrid className="w-6 h-6 text-secondary" />}
            trend={{ value: 18.6, isPositive: true }}
            iconBg="bg-green-100"
          />
          <MetricCard
            title="Pending"
            value="4,283"
            icon={<Clock className="w-6 h-6 text-primary" />}
            trend={{ value: 12.4, isPositive: true }}
            iconBg="bg-orange-100"
          />
          <MetricCard
            title="Resolved"
            value="7,892"
            icon={<CheckCircle className="w-6 h-6 text-secondary" />}
            trend={{ value: 24.1, isPositive: true }}
            iconBg="bg-green-100"
          />
          <MetricCard
            title="Emergency Alerts"
            value="243"
            icon={<AlertTriangle className="w-6 h-6 text-destructive" />}
            trend={{ value: 6.3, isPositive: false }}
            iconBg="bg-red-100"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Complaints Trend - Full Width */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">
                Complaints Trend
              </h2>
              <div className="text-muted-foreground text-sm">30 Days ▼</div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={complaintsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0ddd8" />
                <XAxis dataKey="date" stroke="#666666" />
                <YAxis stroke="#666666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e0ddd8",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#2d9c5d"
                  name="Total"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#5b6bf8"
                  name="Resolved"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#ff9500"
                  name="Pending"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Issue Categories */}
          <div className="bg-white rounded-lg border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-6">
              Top Issue Categories
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoriesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ percentage }) => `${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryColors.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 space-y-2 text-sm">
              {categoriesData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span className="font-semibold text-foreground">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Complaints Table */}
        <div className="bg-white rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-foreground">
              Recent Complaints
            </h2>
            <Link
              href="/dashboard/complaints"
              className="text-secondary hover:text-secondary/80 font-medium text-sm flex items-center gap-1"
            >
              View all complaints <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Issue
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Category
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Priority
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Reported At
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentComplaints.map((complaint) => (
                  <tr key={complaint.id} className="border-b border-border hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {complaint.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {complaint.issue}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {complaint.location}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {complaint.category}
                    </td>
                    <td className={`px-4 py-3 text-sm font-medium ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {complaint.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Section - Recommendations & Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recommendations */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-foreground">
                AI Priority Recommendations
              </h2>
              <Link
                href="/dashboard/recommendations"
                className="text-secondary hover:text-secondary/80 font-medium text-sm flex items-center gap-1"
              >
                View all recommendations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between p-4 bg-muted/30 rounded-lg"
                >
                  <p className="text-sm font-medium text-foreground">
                    {rec.title}
                  </p>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${rec.color}`}>
                    {rec.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions & Complaint Sources */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white justify-start gap-2">
                  <span>➕</span> Add Complaint
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 border-border"
                >
                  <span>📊</span> Generate Report
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 border-border"
                >
                  <span>📢</span> Broadcast Alert
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 border-border"
                >
                  <span>⬇️</span> Download Data
                </Button>
              </div>
            </div>

            {/* Complaint Sources */}
            <div className="bg-white rounded-lg border border-border p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Complaint Sources
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {sourceColors.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2 text-xs">
                {sourceData.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-semibold text-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section - Values */}
        <div className="bg-white rounded-lg border border-border p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <p className="text-lg">👥</p>
              <p className="font-semibold text-foreground mt-2">People First</p>
              <p className="text-xs text-muted-foreground mt-1">
                Citizen centric approach
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg">✅</p>
              <p className="font-semibold text-foreground mt-2">Transparent</p>
              <p className="text-xs text-muted-foreground mt-1">
                Open & accountable
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg">📊</p>
              <p className="font-semibold text-foreground mt-2">Data Driven</p>
              <p className="text-xs text-muted-foreground mt-1">
                Smart decisions
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg">🔒</p>
              <p className="font-semibold text-foreground mt-2">Secure</p>
              <p className="text-xs text-muted-foreground mt-1">
                Your data is protected
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg">📱</p>
              <p className="font-semibold text-foreground mt-2">Responsive</p>
              <p className="text-xs text-muted-foreground mt-1">
                Act fast, resolve faster
              </p>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="bg-gradient-to-r from-secondary to-secondary/80 rounded-lg p-8 text-center text-white">
          <p className="text-2xl font-bold mb-2">
            Let&apos;s build better communities together.
          </p>
          <p className="text-sm opacity-90">
            Your governance, our commitment, citizens&apos; trust.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
