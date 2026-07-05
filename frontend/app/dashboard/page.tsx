"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import {
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
import Link from "next/link";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const complaintsData = [
  { date: "May 20", total: 3200, resolved: 2400, pending: 800 },
  { date: "May 27", total: 4100, resolved: 2900, pending: 1200 },
  { date: "Jun 03", total: 5500, resolved: 4000, pending: 1500 },
  { date: "Jun 10", total: 6800, resolved: 5100, pending: 1700 },
  { date: "Jun 17", total: 7200, resolved: 5800, pending: 1400 },
  { date: "Jun 20", total: 7892, resolved: 6200, pending: 1692 },
];

const categoriesData = [
  { name: "Roads", value: 28.4, color: "#1e8e3e" },
  { name: "Water Supply", value: 22.1, color: "#f57c00" },
  { name: "Sanitation", value: 17.6, color: "#0369a1" },
  { name: "Electricity", value: 13.2, color: "#7c3aed" },
  { name: "Waste Mgmt", value: 9.8, color: "#06b6d4" },
  { name: "Others", value: 8.9, color: "#6b7280" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Total Complaints"
          value="12,842"
          trend="+18.6% vs last 30 days"
          trendUp={true}
          icon="📊"
        />
        <MetricCard
          title="Pending"
          value="4,283"
          trend="+12.4% vs last 30 days"
          trendUp={true}
          icon="⏳"
        />
        <MetricCard
          title="Resolved"
          value="7,892"
          trend="+24.1% vs last 30 days"
          trendUp={true}
          icon="✓"
        />
        <MetricCard
          title="Emergency Alerts"
          value="243"
          trend="-6.3% vs last 30 days"
          trendUp={false}
          icon="🚨"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Complaints Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-foreground">Complaints Trend</h2>
            <select className="text-sm px-3 py-1 border border-border rounded-lg">
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
            </select>
          </div>
          <div className="h-64 md:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={complaintsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#1e8e3e"
                  strokeWidth={2}
                  dot={{ fill: "#1e8e3e", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#0369a1"
                  strokeWidth={2}
                  dot={{ fill: "#0369a1", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#f57c00"
                  strokeWidth={2}
                  dot={{ fill: "#f57c00", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Issue Categories */}
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-6">
            Top Issue Categories
          </h2>
          <div className="h-64 md:h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoriesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value.toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Complaints Table */}
      <div className="bg-white rounded-2xl border border-border p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-lg md:text-xl font-bold text-foreground">Recent Complaints</h2>
          <Link
            href="/issues"
            className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1"
          >
            View all complaints →
          </Link>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {[
            {
              id: "PS-12842",
              issue: "Potholes on Main Road",
              location: "Ward 12",
              priority: "High",
              status: "Pending",
            },
            {
              id: "PS-12841",
              issue: "Water leakage in pipeline",
              location: "Ward 7",
              priority: "Medium",
              status: "In Progress",
            },
            {
              id: "PS-12840",
              issue: "Street light not working",
              location: "Ward 4",
              priority: "Low",
              status: "Resolved",
            },
          ].map((complaint) => (
            <Link
              key={complaint.id}
              href={`/issues/${complaint.id}`}
              className="block p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-semibold text-foreground text-sm">{complaint.id}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                    complaint.status === "Resolved"
                      ? "bg-green-100 text-green-800"
                      : complaint.status === "In Progress"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {complaint.status}
                </span>
              </div>
              <p className="font-medium text-foreground mb-1">{complaint.issue}</p>
              <p className="text-xs text-muted-foreground mb-2">{complaint.location}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 text-xs font-semibold rounded ${
                    complaint.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : complaint.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {complaint.priority}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Issue</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Location</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Priority</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "PS-12842",
                  issue: "Potholes on Main Road",
                  location: "Ward 12",
                  priority: "High",
                  status: "Pending",
                },
                {
                  id: "PS-12841",
                  issue: "Water leakage in pipeline",
                  location: "Ward 7",
                  priority: "Medium",
                  status: "In Progress",
                },
                {
                  id: "PS-12840",
                  issue: "Street light not working",
                  location: "Ward 4",
                  priority: "Low",
                  status: "Resolved",
                },
                {
                  id: "PS-12839",
                  issue: "Garbage not collected",
                  location: "Ward 15",
                  priority: "Medium",
                  status: "Pending",
                },
                {
                  id: "PS-12838",
                  issue: "Drain overflow",
                  location: "Ward 9",
                  priority: "High",
                  status: "In Progress",
                },
              ].map((complaint) => (
                <tr key={complaint.id} className="border-b border-border hover:bg-muted">
                  <td className="py-3 px-4 font-semibold text-foreground">{complaint.id}</td>
                  <td className="py-3 px-4 text-foreground">{complaint.issue}</td>
                  <td className="py-3 px-4 text-muted-foreground">{complaint.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        complaint.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : complaint.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {complaint.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        complaint.status === "Resolved"
                          ? "bg-green-100 text-green-800"
                          : complaint.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/submit"
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">Add Complaint</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>
            <Link
              href="/dashboard/reports"
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">Generate Report</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>
            <Link
              href="/dashboard/emergencies"
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">Broadcast Alert</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>
            <Link
              href="/track"
              className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground">Download Data</span>
              <ArrowUpRight size={18} className="text-primary" />
            </Link>
          </div>
        </div>

        {/* AI Recommendations Preview */}
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">
            AI Priority Recommendations
          </h2>
          <div className="space-y-3">
            {[
              { title: "Improve road conditions in Ward 12", impact: "High", score: 92 },
              { title: "Fix water supply leakage in Ward 7", impact: "High", score: 88 },
              { title: "Upgrade sanitation facilities", impact: "Medium", score: 75 },
            ].map((rec, i) => (
              <div key={i} className="p-3 border border-border rounded-lg">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-medium text-foreground text-sm">{rec.title}</p>
                  <span className="text-lg font-bold text-primary">{rec.score}</span>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    rec.impact === "High"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {rec.impact} Impact
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/dashboard/recommendations"
            className="mt-4 w-full py-2 px-4 bg-primary text-white rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors"
          >
            View All Recommendations
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
