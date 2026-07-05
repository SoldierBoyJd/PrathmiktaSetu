'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DigitalTwinPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Digital Twin</h1>
          <p className="text-muted-foreground mt-1">Real-time virtual replica of city infrastructure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 3D Visualization */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>City Infrastructure Model</CardTitle>
                <CardDescription>Interactive 3D visualization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-5xl">🏗️</div>
                    <p className="text-muted-foreground">3D Digital Twin Visualization</p>
                    <p className="text-xs text-muted-foreground">Real-time city infrastructure model</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">Total Assets</p>
                <h3 className="text-2xl font-bold text-foreground">2,450</h3>
                <Badge variant="outline" className="mt-2">Tracked</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">In Good Condition</p>
                <h3 className="text-2xl font-bold text-secondary">87%</h3>
                <Badge className="mt-2 bg-secondary/10 text-secondary">Healthy</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">Needs Maintenance</p>
                <h3 className="text-2xl font-bold text-primary">245</h3>
                <Badge className="mt-2 bg-primary/10 text-primary">Flagged</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Infrastructure Status */}
        <Card>
          <CardHeader>
            <CardTitle>Infrastructure Status</CardTitle>
            <CardDescription>Health and maintenance status of key assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Roads & Pavements', total: 850, status: 'Good', percentage: 92 },
                { name: 'Water Pipelines', total: 520, status: 'Good', percentage: 88 },
                { name: 'Electrical Grid', total: 380, status: 'Fair', percentage: 75 },
                { name: 'Drainage System', total: 450, status: 'Fair', percentage: 78 },
                { name: 'Street Lights', total: 250, status: 'Poor', percentage: 62 },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    <Badge variant="outline">{item.total} assets</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.percentage >= 85 ? 'bg-secondary' : item.percentage >= 70 ? 'bg-accent' : 'bg-primary'}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{item.percentage}%</span>
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
