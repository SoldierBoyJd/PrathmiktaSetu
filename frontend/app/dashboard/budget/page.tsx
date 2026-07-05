'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const budgetData = [
  { department: 'Roads & Infrastructure', allocated: 5000000, spent: 3200000, pending: 1800000 },
  { department: 'Water Supply', allocated: 3000000, spent: 2100000, pending: 900000 },
  { department: 'Sanitation', allocated: 2500000, spent: 1950000, pending: 550000 },
  { department: 'Electricity', allocated: 2000000, spent: 1400000, pending: 600000 },
  { department: 'Waste Management', allocated: 2200000, spent: 1650000, pending: 550000 },
];

const spendingTrend = [
  { month: 'Apr', budgeted: 2500000, actual: 2100000 },
  { month: 'May', budgeted: 2500000, actual: 2350000 },
  { month: 'Jun', budgeted: 2500000, actual: 2400000 },
  { month: 'Jul', budgeted: 2500000, actual: 1800000 },
];

export default function BudgetPage() {
  const totalAllocated = budgetData.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = budgetData.reduce((acc, item) => acc + item.spent, 0);
  const totalPending = budgetData.reduce((acc, item) => acc + item.pending, 0);
  const spendingPercentage = (totalSpent / totalAllocated) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Budget Management</h1>
          <p className="text-muted-foreground mt-1">Complaint resolution budget allocation and spending</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Allocated</p>
              <h3 className="text-2xl font-bold text-foreground">₹{(totalAllocated / 1000000).toFixed(1)}M</h3>
              <Badge variant="outline" className="mt-2">FY 2024-25</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <h3 className="text-2xl font-bold text-secondary">₹{(totalSpent / 1000000).toFixed(1)}M</h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">
                {spendingPercentage.toFixed(1)}%
              </Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Pending Allocation</p>
              <h3 className="text-2xl font-bold text-primary">₹{(totalPending / 1000000).toFixed(1)}M</h3>
              <Badge variant="outline" className="mt-2">In Progress</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Remaining Budget</p>
              <h3 className="text-2xl font-bold text-accent">₹{((totalAllocated - totalSpent) / 1000000).toFixed(1)}M</h3>
              <Badge className="mt-2 bg-accent/10 text-accent">
                {((1 - spendingPercentage / 100) * 100).toFixed(1)}%
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Department Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Budget by Department</CardTitle>
            <CardDescription>Allocated vs Spent allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="department" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                  formatter={(value: any) => `₹${(value / 1000000).toFixed(2)}M`}
                />
                <Legend />
                <Bar dataKey="allocated" fill="var(--chart-1)" name="Allocated" />
                <Bar dataKey="spent" fill="var(--chart-2)" name="Spent" />
                <Bar dataKey="pending" fill="var(--chart-3)" name="Pending" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Spending Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
            <CardDescription>Budgeted vs Actual spending</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendingTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                <YAxis stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                  formatter={(value: any) => `₹${(value / 1000000).toFixed(2)}M`}
                />
                <Legend />
                <Line type="monotone" dataKey="budgeted" stroke="var(--muted-foreground)" strokeWidth={2} name="Budgeted" />
                <Line type="monotone" dataKey="actual" stroke="var(--primary)" strokeWidth={2} name="Actual" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Budget Allocation</CardTitle>
            <CardDescription>Department-wise budget breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {budgetData.map((item, idx) => {
                const spendPercentage = (item.spent / item.allocated) * 100;
                return (
                  <div key={idx} className="border-b border-border pb-4 last:border-0">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{item.department}</h4>
                        <p className="text-sm text-muted-foreground">
                          Allocated: ₹{(item.allocated / 1000000).toFixed(2)}M
                        </p>
                      </div>
                      <Badge className={spendPercentage > 80 ? 'bg-destructive/10 text-destructive' : 'bg-secondary/10 text-secondary'}>
                        {spendPercentage.toFixed(1)}%
                      </Badge>
                    </div>
                    <div className="space-y-1 mb-2">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">Spent:</span>
                        <span className="font-semibold text-foreground">₹{(item.spent / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-muted-foreground">Remaining:</span>
                        <span className="font-semibold text-secondary">₹{((item.allocated - item.spent) / 1000000).toFixed(2)}M</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all"
                        style={{ width: `${spendPercentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
