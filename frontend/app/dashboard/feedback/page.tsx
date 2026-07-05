'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Star } from 'lucide-react';

export default function FeedbackPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Citizen Feedback</h1>
          <p className="text-muted-foreground mt-1">Monitor and analyze citizen satisfaction and feedback</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <MessageSquare className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total Feedback</p>
              <h3 className="text-2xl font-bold text-foreground">2,458</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Avg Rating</p>
              <h3 className="text-2xl font-bold text-foreground">4.2</h3>
              <p className="text-xs text-muted-foreground">out of 5</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Satisfaction</p>
              <h3 className="text-2xl font-bold text-secondary">78%</h3>
              <Badge className="mt-2 bg-secondary/10 text-secondary">Good</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-1">Response Rate</p>
              <h3 className="text-2xl font-bold text-accent">92%</h3>
              <Badge className="mt-2 bg-accent/10 text-accent">Excellent</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Recent Feedback */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Feedback</CardTitle>
            <CardDescription>Latest citizen reviews and comments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { author: 'Rajesh Kumar', rating: 5, comment: 'Excellent response to my pothole complaint. Fixed within 3 days!', date: '2 hours ago' },
                { author: 'Priya Singh', rating: 4, comment: 'Good service but took longer than expected for water issue resolution.', date: '4 hours ago' },
                { author: 'Amit Patel', rating: 5, comment: 'Very transparent system. I could track my complaint at every step.', date: '6 hours ago' },
                { author: 'Neha Sharma', rating: 3, comment: 'Process is good but need faster resolution times overall.', date: '8 hours ago' },
                { author: 'Vikram Nair', rating: 4, comment: 'Government is doing great job. Keep up the good work!', date: '10 hours ago' },
              ].map((feedback, idx) => (
                <div key={idx} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{feedback.author}</h4>
                      <p className="text-xs text-muted-foreground">{feedback.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < feedback.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feedback Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Satisfaction Breakdown</CardTitle>
            <CardDescription>Distribution of satisfaction ratings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { stars: '5 Stars', count: 892, percentage: 36 },
                { stars: '4 Stars', count: 756, percentage: 31 },
                { stars: '3 Stars', count: 560, percentage: 23 },
                { stars: '2 Stars', count: 200, percentage: 8 },
                { stars: '1 Star', count: 50, percentage: 2 },
              ].map((rating, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{rating.stars}</span>
                    <span className="text-sm text-muted-foreground">{rating.count} responses</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className={
                        idx === 0 ? 'bg-secondary' :
                        idx === 1 ? 'bg-primary' :
                        idx === 2 ? 'bg-accent' :
                        'bg-primary/50'
                      }
                      style={{ width: `${rating.percentage}%` }}
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
