'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CategoriesPage() {
  const categories = [
    { name: 'Roads & Infrastructure', complaints: 3200, resolved: 2800, percentage: 87.5, status: 'Optimal' },
    { name: 'Water Supply', complaints: 1800, resolved: 1620, percentage: 90, status: 'Excellent' },
    { name: 'Sanitation', complaints: 2100, resolved: 1890, percentage: 90, status: 'Excellent' },
    { name: 'Electricity', complaints: 1400, resolved: 1190, percentage: 85, status: 'Good' },
    { name: 'Waste Management', complaints: 2500, resolved: 2125, percentage: 85, status: 'Good' },
    { name: 'Street Lights', complaints: 1200, resolved: 960, percentage: 80, status: 'Fair' },
    { name: 'Public Transport', complaints: 642, resolved: 513, percentage: 79.9, status: 'Fair' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Complaint Categories</h1>
          <p className="text-muted-foreground mt-1">Performance breakdown by complaint type</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Categories</p>
              <h3 className="text-2xl font-bold text-foreground">{categories.length}</h3>
              <Badge variant="outline" className="mt-2">Active</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Avg Resolution Rate</p>
              <h3 className="text-2xl font-bold text-secondary">
                {(categories.reduce((acc, c) => acc + c.percentage, 0) / categories.length).toFixed(1)}%
              </h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">Good</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Complaints</p>
              <h3 className="text-2xl font-bold text-foreground">
                {categories.reduce((acc, c) => acc + c.complaints, 0).toLocaleString()}
              </h3>
              <Badge variant="outline" className="mt-2">All Time</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Categories Table */}
        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
            <CardDescription>Resolution metrics by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((cat, idx) => (
                <div key={idx} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{cat.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cat.resolved.toLocaleString()} of {cat.complaints.toLocaleString()} resolved
                      </p>
                    </div>
                    <Badge
                      className={
                        cat.percentage >= 90 ? 'bg-secondary/10 text-secondary' :
                        cat.percentage >= 85 ? 'bg-primary/10 text-primary' :
                        'bg-accent/10 text-accent'
                      }
                    >
                      {cat.percentage}%
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={
                        cat.percentage >= 90 ? 'bg-secondary' :
                        cat.percentage >= 85 ? 'bg-primary' :
                        'bg-accent'
                      }
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
