'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, Users, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TransparencyPage() {
  const metrics = [
    {
      title: 'Total Complaints',
      value: '12,842',
      change: '+18.6%',
      positive: true,
      icon: AlertCircle,
    },
    {
      title: 'Resolved',
      value: '7,892',
      change: '+24.1%',
      positive: true,
      icon: TrendingUp,
    },
    {
      title: 'Average Resolution Time',
      value: '4.2 days',
      change: '-1.3 days',
      positive: true,
      icon: Clock,
    },
    {
      title: 'Citizen Satisfaction',
      value: '78%',
      change: '+6%',
      positive: true,
      icon: Users,
    },
  ];

  const departmentPerformance = [
    { department: 'Roads & Infrastructure', complaints: 3200, resolved: 2800, percentage: 87.5 },
    { department: 'Water Supply', complaints: 1800, resolved: 1620, percentage: 90 },
    { department: 'Sanitation', complaints: 2100, resolved: 1890, percentage: 90 },
    { department: 'Electricity', complaints: 1400, resolved: 1190, percentage: 85 },
    { department: 'Waste Management', complaints: 2500, resolved: 2125, percentage: 85 },
    { department: 'Street Lights', complaints: 1200, resolved: 960, percentage: 80 },
    { department: 'Public Transport', complaints: 642, resolved: 513, percentage: 79.9 },
  ];

  const officerPerformance = [
    { name: 'Rajesh Kumar', ward: 'Ward 5', resolved: 450, pending: 45, rating: 4.8 },
    { name: 'Priya Sharma', ward: 'Ward 8', resolved: 380, pending: 38, rating: 4.6 },
    { name: 'Amit Patel', ward: 'Ward 12', resolved: 320, pending: 52, rating: 4.2 },
    { name: 'Neha Singh', ward: 'Ward 3', resolved: 410, pending: 30, rating: 4.7 },
    { name: 'Vikram Nair', ward: 'Ward 15', resolved: 290, pending: 60, rating: 4.1 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Button variant="ghost" className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
          <div className="font-semibold text-foreground">Transparency Report</div>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Government Transparency</h1>
            <p className="text-muted-foreground">Real-time performance metrics and accountability data</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{metric.value}</h3>
                    <Badge variant="outline" className={metric.positive ? 'text-secondary' : 'text-destructive'}>
                      {metric.change}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Department Performance */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Department Performance</CardTitle>
              <CardDescription>Resolution rate by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentPerformance.map((dept, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-foreground">{dept.department}</h4>
                      <span className="text-lg font-bold text-primary">{dept.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-secondary h-full rounded-full transition-all"
                          style={{ width: `${dept.percentage}%` }}
                        />
                      </div>
                      <span className="whitespace-nowrap">
                        {dept.resolved}/{dept.complaints}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Officer Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Ward Officer Performance</CardTitle>
              <CardDescription>Top performing officials by resolution metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {officerPerformance.map((officer, idx) => (
                  <div key={idx} className="border-b border-border pb-4 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{officer.name}</h4>
                        <p className="text-sm text-muted-foreground">{officer.ward}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="font-bold text-primary">{officer.rating}</div>
                          <div className="text-xs text-muted-foreground">rating</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex-1">
                        <div className="text-muted-foreground mb-1">Resolved: {officer.resolved}</div>
                        <div className="h-2 bg-muted rounded-full">
                          <div
                            className="bg-secondary h-full rounded-full"
                            style={{ width: `${(officer.resolved / (officer.resolved + officer.pending)) * 100}%` }}
                          />
                        </div>
                      </div>
                      <Badge variant="outline" className="text-destructive">
                        {officer.pending} pending
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
