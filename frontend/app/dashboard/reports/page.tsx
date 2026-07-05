'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Generate and download comprehensive reports</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>Generate custom reports for analysis and sharing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Monthly Performance Report', desc: 'Comprehensive monthly metrics and trends', format: 'PDF', generated: '5 days ago' },
                { name: 'Department Scorecard', desc: 'Individual department performance evaluation', format: 'Excel', generated: '2 days ago' },
                { name: 'Complaint Analysis Report', desc: 'Detailed complaint data and categorization', format: 'PDF', generated: '10 days ago' },
                { name: 'Budget Utilization Report', desc: 'Budget allocation and spending analysis', format: 'Excel', generated: '3 days ago' },
                { name: 'Citizen Feedback Summary', desc: 'Compiled feedback and satisfaction metrics', format: 'PDF', generated: '1 day ago' },
                { name: 'Trend Forecast Report', desc: 'Predictive analysis for future trends', format: 'PDF', generated: 'Just now' },
              ].map((report, idx) => (
                <div key={idx} className="border border-border rounded-lg p-4 flex items-start justify-between hover:bg-muted/50 transition">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{report.name}</h4>
                      <p className="text-sm text-muted-foreground">{report.desc}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">{report.format}</Badge>
                        <Badge variant="outline" className="text-xs">{report.generated}</Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2 flex-shrink-0">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Report Builder</CardTitle>
            <CardDescription>Create custom reports with selected metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Select Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Total Complaints', 'Resolution Rate', 'Average Resolution Time',
                    'Department Performance', 'Budget Analysis', 'Citizen Satisfaction',
                    'Trend Analysis', 'Complaint Breakdown', 'Ward Comparison', 'Priority Distribution'
                  ].map((metric, idx) => (
                    <label key={idx} className="flex items-center gap-2 p-3 border border-border rounded cursor-pointer hover:bg-muted/50">
                      <input type="checkbox" defaultChecked={idx < 4} className="rounded" />
                      <span className="text-sm text-foreground">{metric}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button>Generate Report</Button>
                <Button variant="outline">Preview</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
