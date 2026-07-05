'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const complaintsTrendData = [
  { date: 'May 20', total: 400, resolved: 240, pending: 160 },
  { date: 'May 27', total: 600, resolved: 320, pending: 280 },
  { date: 'Jun 03', total: 800, resolved: 480, pending: 320 },
  { date: 'Jun 10', total: 650, resolved: 420, pending: 230 },
  { date: 'Jun 17', total: 750, resolved: 480, pending: 270 },
  { date: 'Jun 24', total: 950, resolved: 640, pending: 310 },
];

const categoryData = [
  { name: 'Roads', value: 3200 },
  { name: 'Water', value: 1800 },
  { name: 'Sanitation', value: 2100 },
  { name: 'Electricity', value: 1400 },
  { name: 'Waste', value: 2500 },
];

const COLORS = ['#ff9500', '#2d9c5d', '#5b6bf8', '#ff4757', '#ffc107'];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">Comprehensive complaint data analysis and insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Complaints', value: '12,842', change: '+18.6%', positive: true },
            { label: 'Resolution Rate', value: '61.4%', change: '+4.2%', positive: true },
            { label: 'Avg Resolution Time', value: '4.2 days', change: '-1.3 days', positive: true },
            { label: 'Satisfaction Score', value: '78%', change: '+6%', positive: true },
          ].map((metric, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{metric.value}</h3>
                <Badge variant="outline" className={metric.positive ? 'text-secondary' : 'text-destructive'}>
                  {metric.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Complaint Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Complaint Trends</CardTitle>
              <CardDescription>Monthly complaint volume trend</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={complaintsTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="total" stroke="var(--chart-1)" strokeWidth={2} />
                  <Line type="monotone" dataKey="resolved" stroke="var(--chart-2)" strokeWidth={2} />
                  <Line type="monotone" dataKey="pending" stroke="var(--chart-3)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Complaints by Category</CardTitle>
              <CardDescription>Distribution across complaint types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resolution Time Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Resolution Time Analysis</CardTitle>
              <CardDescription>Average days to resolve by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={[
                    { name: 'Roads', days: 5.2 },
                    { name: 'Water', days: 3.8 },
                    { name: 'Sanitation', days: 4.5 },
                    { name: 'Electricity', days: 3.2 },
                    { name: 'Waste', days: 4.1 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  />
                  <Bar dataKey="days" fill="var(--primary)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Current Status Distribution</CardTitle>
              <CardDescription>Breakdown of complaint statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { status: 'Resolved', count: 7892, percentage: 61.4, color: 'bg-secondary' },
                  { status: 'In Progress', count: 3667, percentage: 28.5, color: 'bg-accent' },
                  { status: 'Pending', count: 1283, percentage: 10.1, color: 'bg-primary' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="font-semibold text-foreground">{item.status}</span>
                      </div>
                      <span className="font-bold text-foreground">{item.count.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={item.color}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.percentage}%</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance Scorecard</CardTitle>
            <CardDescription>Key metrics by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Department</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Complaints</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Resolved</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Pending</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Avg. Time</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dept: 'Roads & Infrastructure', total: 3200, resolved: 2800, pending: 400, time: '5.2 days', rating: '4.5★' },
                    { dept: 'Water Supply', total: 1800, resolved: 1620, pending: 180, time: '3.8 days', rating: '4.7★' },
                    { dept: 'Sanitation', total: 2100, resolved: 1890, pending: 210, time: '4.5 days', rating: '4.4★' },
                    { dept: 'Electricity', total: 1400, resolved: 1190, pending: 210, time: '3.2 days', rating: '4.8★' },
                    { dept: 'Waste Management', total: 2500, resolved: 2125, pending: 375, time: '4.1 days', rating: '4.3★' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4 text-foreground font-semibold">{row.dept}</td>
                      <td className="text-right py-3 px-4 text-foreground">{row.total.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-secondary">{row.resolved.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-primary">{row.pending.toLocaleString()}</td>
                      <td className="text-right py-3 px-4 text-muted-foreground">{row.time}</td>
                      <td className="text-right py-3 px-4 font-semibold text-foreground">{row.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
