'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function FraudDetectionPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fraud Detection</h1>
          <p className="text-muted-foreground mt-1">AI-powered anomaly and fraud detection system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Suspicious Activities</p>
              <h3 className="text-2xl font-bold text-primary">23</h3>
              <Badge className="mt-2 bg-primary/10 text-primary">Flagged</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">False Reports Detected</p>
              <h3 className="text-2xl font-bold text-accent">8</h3>
              <Badge className="mt-2 bg-accent/10 text-accent">Removed</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Detection Accuracy</p>
              <h3 className="text-2xl font-bold text-secondary">94.2%</h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">Reliable</Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Flagged Activities</CardTitle>
            <CardDescription>Suspicious patterns and potential fraud</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: '#FD-001', type: 'Duplicate Report', details: 'Same location reported 5 times in 1 hour', risk: 'High', action: 'Review' },
                { id: '#FD-002', type: 'Fake Contact Info', details: 'Invalid email and phone number pattern', risk: 'High', action: 'Block' },
                { id: '#FD-003', type: 'Spam Pattern', details: 'Account submitted 50+ complaints today', risk: 'Critical', action: 'Investigate' },
                { id: '#FD-004', type: 'Coordinated Activity', details: '12 complaints from same IP range', risk: 'Medium', action: 'Monitor' },
                { id: '#FD-005', type: 'Inconsistent Data', details: 'Location mismatch with IP geolocation', risk: 'Low', action: 'Flag' },
              ].map((activity, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge variant="outline" className="mb-2">{activity.id}</Badge>
                      <h4 className="font-semibold text-foreground">{activity.type}</h4>
                      <p className="text-sm text-muted-foreground">{activity.details}</p>
                    </div>
                    <Badge className={activity.risk === 'Critical' ? 'bg-destructive text-white' : activity.risk === 'High' ? 'bg-primary text-white' : 'bg-accent text-white'}>
                      {activity.risk} Risk
                    </Badge>
                  </div>
                  <div className="flex justify-end pt-2 border-t border-border">
                    <Badge variant="outline">{activity.action}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detection Rules</CardTitle>
            <CardDescription>Active fraud detection rules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                'Duplicate location complaints within 1 hour',
                'Invalid contact information patterns',
                'Submission rate > 10 per hour per user',
                'Same IP address from multiple locations',
                'Repeated complaints from same location without resolution',
                'Missing or suspicious GPS coordinates',
              ].map((rule, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-foreground">{rule}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
