'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';

export default function EmergenciesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Emergency Alerts</h1>
          <p className="text-muted-foreground mt-1">Critical issues requiring immediate action</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <AlertCircle className="w-8 h-8 text-destructive mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Critical Alerts</p>
              <h3 className="text-2xl font-bold text-destructive">12</h3>
              <Badge className="mt-2 bg-destructive/10 text-destructive">Urgent</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <AlertCircle className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">High Priority</p>
              <h3 className="text-2xl font-bold text-primary">34</h3>
              <Badge className="mt-2 bg-primary/10 text-primary">Important</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <AlertCircle className="w-8 h-8 text-accent mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Active Incidents</p>
              <h3 className="text-2xl font-bold text-accent">8</h3>
              <Badge className="mt-2 bg-accent/10 text-accent">In Progress</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Emergency Incidents</CardTitle>
            <CardDescription>Critical issues under investigation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: '#EM-001', title: 'Water Main Burst - Ward 7', status: 'Active', reported: '30 min ago', severity: 'Critical' },
                { id: '#EM-002', title: 'Power Outage - Ward 14', status: 'Active', reported: '1 hour ago', severity: 'Critical' },
                { id: '#EM-003', title: 'Road Cave-in - Ward 15', status: 'Investigation', reported: '2 hours ago', severity: 'Critical' },
                { id: '#EM-004', title: 'Gas Leak - Ward 3', status: 'Contained', reported: '4 hours ago', severity: 'High' },
                { id: '#EM-005', title: 'Flooding - Ward 9', status: 'Drainage', reported: '6 hours ago', severity: 'High' },
              ].map((incident, idx) => (
                <div key={idx} className="border-l-4 border-destructive p-4 bg-muted/50 rounded">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">{incident.id}</Badge>
                      <h4 className="font-semibold text-foreground">{incident.title}</h4>
                    </div>
                    <Badge className={incident.severity === 'Critical' ? 'bg-destructive text-white' : 'bg-primary text-white'}>
                      {incident.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Status: {incident.status}</span>
                    <span>Reported: {incident.reported}</span>
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
