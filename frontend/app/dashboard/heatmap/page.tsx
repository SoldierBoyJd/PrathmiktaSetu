'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function HeatmapPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Issue Heatmap</h1>
          <p className="text-muted-foreground mt-1">Visualize complaint distribution across wards</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="roads">Roads & Infrastructure</SelectItem>
              <SelectItem value="water">Water Supply</SelectItem>
              <SelectItem value="sanitation">Sanitation</SelectItem>
              <SelectItem value="electricity">Electricity</SelectItem>
              <SelectItem value="waste">Waste Management</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="30">
            <SelectTrigger className="w-full md:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 Days</SelectItem>
              <SelectItem value="30">Last 30 Days</SelectItem>
              <SelectItem value="90">Last 90 Days</SelectItem>
              <SelectItem value="365">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Heatmap Card */}
        <Card>
          <CardHeader>
            <CardTitle>Complaint Distribution by Ward</CardTitle>
            <CardDescription>Geographic hotspots of issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Map Visualization */}
              <div className="w-full h-96 bg-gradient-to-br from-muted to-muted/50 rounded-lg border border-border flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🗺️</div>
                  <p className="text-muted-foreground">Interactive heatmap visualization</p>
                  <p className="text-xs text-muted-foreground">Hot zones show high concentration of complaints</p>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-5 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="h-8 bg-blue-100 rounded border border-blue-300" />
                  <p className="text-muted-foreground">Low (0-50)</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-cyan-100 rounded border border-cyan-300" />
                  <p className="text-muted-foreground">Medium (51-100)</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-yellow-100 rounded border border-yellow-300" />
                  <p className="text-muted-foreground">High (101-200)</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-orange-100 rounded border border-orange-300" />
                  <p className="text-muted-foreground">Very High (201-300)</p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 bg-red-100 rounded border border-red-300" />
                  <p className="text-muted-foreground">Critical (300+)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ward Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Ward-wise Statistics</CardTitle>
            <CardDescription>Top wards with highest complaint concentration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { ward: 'Ward 15', complaints: 345, change: '+15%', severity: 'Critical' },
                { ward: 'Ward 8', complaints: 298, change: '+12%', severity: 'Very High' },
                { ward: 'Ward 12', complaints: 276, change: '+8%', severity: 'Very High' },
                { ward: 'Ward 5', complaints: 234, change: '+5%', severity: 'High' },
                { ward: 'Ward 20', complaints: 198, change: '+3%', severity: 'High' },
              ].map((ward, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{ward.ward}</h4>
                    <p className="text-sm text-muted-foreground">{ward.complaints} complaints</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className={
                        ward.severity === 'Critical'
                          ? 'text-destructive'
                          : ward.severity === 'Very High'
                            ? 'text-primary'
                            : 'text-accent'
                      }
                    >
                      {ward.severity}
                    </Badge>
                    <span className="text-sm text-secondary font-semibold">{ward.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trend Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
            <CardDescription>Weekly complaint volume trend</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { week: 'Week 1', volume: 240, avg: 34, emoji: '📊' },
                { week: 'Week 2', volume: 285, avg: 41, emoji: '📈' },
                { week: 'Week 3', volume: 198, avg: 28, emoji: '📉' },
                { week: 'Week 4', volume: 320, avg: 46, emoji: '📊' },
              ].map((trend, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{trend.week}</span>
                    <span className="text-2xl">{trend.emoji}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-muted rounded-full">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(trend.volume / 320) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold">{trend.volume}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Average: {trend.avg} per day</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
