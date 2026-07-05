'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ClusteringPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Complaint Clustering</h1>
          <p className="text-muted-foreground mt-1">AI-driven clustering and pattern analysis</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Total Clusters Identified</p>
              <h3 className="text-2xl font-bold text-foreground">24</h3>
              <Badge variant="outline" className="mt-2">Active</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Largest Cluster</p>
              <h3 className="text-2xl font-bold text-primary">342</h3>
              <Badge className="mt-2 bg-primary/10 text-primary">Roads (Ward 15)</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Avg Cluster Size</p>
              <h3 className="text-2xl font-bold text-secondary">187</h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">Complaints</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Complaint Clusters</CardTitle>
            <CardDescription>Grouped by location and type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'CL-001', issue: 'Road Damage - Ward 15', complaints: 342, severity: 'Critical', pattern: 'Pothole Formation' },
                { id: 'CL-002', issue: 'Water Leakage - Ward 7', complaints: 285, severity: 'High', pattern: 'Pipeline Issues' },
                { id: 'CL-003', issue: 'Street Lights - Ward 20', complaints: 198, severity: 'High', pattern: 'Bulb Failure' },
                { id: 'CL-004', issue: 'Drainage - Ward 9', complaints: 167, severity: 'High', pattern: 'Overflow' },
                { id: 'CL-005', issue: 'Waste Collection - Ward 15', complaints: 145, severity: 'Medium', pattern: 'Schedule Delay' },
              ].map((cluster, idx) => (
                <div key={idx} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">{cluster.id}</Badge>
                      <h4 className="font-semibold text-foreground">{cluster.issue}</h4>
                      <p className="text-sm text-muted-foreground">Pattern: {cluster.pattern}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{cluster.complaints}</div>
                      <Badge className={cluster.severity === 'Critical' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}>
                        {cluster.severity}
                      </Badge>
                    </div>
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
