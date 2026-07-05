'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';

export default function AlertsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Alerts</h1>
          <p className="text-muted-foreground mt-1">Monitor and manage system notifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Bell className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total Alerts</p>
              <h3 className="text-2xl font-bold text-foreground">247</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Bell className="w-8 h-8 text-destructive mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Critical</p>
              <h3 className="text-2xl font-bold text-destructive">12</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Bell className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Warning</p>
              <h3 className="text-2xl font-bold text-accent">34</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Bell className="w-8 h-8 text-secondary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Resolved</p>
              <h3 className="text-2xl font-bold text-secondary">201</h3>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alert History</CardTitle>
            <CardDescription>Recent system alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { id: 1, title: 'High complaint volume - Ward 15', severity: 'Critical', time: '5 min ago' },
                { id: 2, title: 'Emergency water shortage alert', severity: 'Critical', time: '15 min ago' },
                { id: 3, title: 'Budget threshold exceeded - Roads dept', severity: 'Warning', time: '1 hour ago' },
                { id: 4, title: 'Unusually high fraud detection rate', severity: 'Warning', time: '2 hours ago' },
                { id: 5, title: 'Average resolution time increased', severity: 'Info', time: '3 hours ago' },
                { id: 6, title: 'Department performance review scheduled', severity: 'Info', time: '5 hours ago' },
              ].map((alert) => (
                <div key={alert.id} className="border-l-4 border-primary p-4 bg-muted/50 rounded flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{alert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                  <Badge
                    className={
                      alert.severity === 'Critical' ? 'bg-destructive text-white' :
                      alert.severity === 'Warning' ? 'bg-accent text-white' :
                      'bg-muted text-muted-foreground'
                    }
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
