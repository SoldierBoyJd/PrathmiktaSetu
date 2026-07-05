'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Lightbulb, TrendingUp, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RecommendationsPage() {
  const recommendations = [
    {
      id: 1,
      title: 'Increase road maintenance frequency',
      category: 'Roads & Infrastructure',
      impact: 'High',
      description: 'Current complaints about potholes have increased by 45% in Q2. Recommend increasing maintenance frequency to 2x per month.',
      priority: 'Critical',
      affectedWards: ['Ward 12', 'Ward 15', 'Ward 8'],
      estimatedSavings: '₹2.5L',
      timeline: '30 days',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Deploy additional water tankers',
      category: 'Water Supply',
      impact: 'High',
      description: 'Water supply complaints peaked at 890 in the last month. Deploy 5 additional water tankers to high-demand wards.',
      priority: 'High',
      affectedWards: ['Ward 7', 'Ward 14', 'Ward 5'],
      estimatedSavings: '₹1.8L',
      timeline: '15 days',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Schedule street light replacement',
      category: 'Electricity',
      impact: 'Medium',
      description: 'Plan bulk replacement of street lights showing degraded performance. Target 200+ units across all wards.',
      priority: 'High',
      affectedWards: ['Ward 3', 'Ward 9', 'Ward 18', 'Ward 20'],
      estimatedSavings: '₹3.2L',
      timeline: '45 days',
      status: 'in-progress',
    },
    {
      id: 4,
      title: 'Optimize waste collection routes',
      category: 'Waste Management',
      impact: 'Medium',
      description: 'Data analysis shows 25% efficiency gain possible by reorganizing waste collection routes. Expected reduction in complaints by 30%.',
      priority: 'Medium',
      affectedWards: ['Ward 15', 'Ward 11', 'Ward 6'],
      estimatedSavings: '₹4.1L',
      timeline: '20 days',
      status: 'pending',
    },
    {
      id: 5,
      title: 'Establish drainage maintenance task force',
      category: 'Sanitation',
      impact: 'High',
      description: 'Create dedicated drainage maintenance team to handle overflow issues. Reduce response time from 5 days to 2 days.',
      priority: 'High',
      affectedWards: ['Ward 9', 'Ward 14', 'Ward 2'],
      estimatedSavings: '₹2.3L',
      timeline: '25 days',
      status: 'pending',
    },
    {
      id: 6,
      title: 'Launch community awareness campaign',
      category: 'General',
      impact: 'Medium',
      description: 'Educate citizens on proper waste disposal and civic responsibility to reduce preventable complaints by 20%.',
      priority: 'Medium',
      affectedWards: ['All Wards'],
      estimatedSavings: '₹1.5L',
      timeline: '40 days',
      status: 'pending',
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-primary/10 text-primary border-primary';
      case 'Medium':
        return 'bg-accent/10 text-accent border-accent';
      case 'Low':
        return 'bg-secondary/10 text-secondary border-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-destructive/10 text-destructive border-destructive';
      case 'High':
        return 'bg-primary/10 text-primary border-primary';
      case 'Medium':
        return 'bg-accent/10 text-accent border-accent';
      default:
        return 'bg-secondary/10 text-secondary border-secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-primary" />;
      case 'in-progress':
        return <TrendingUp className="w-5 h-5 text-accent" />;
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-secondary" />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Priority Recommendations</h1>
          <p className="text-muted-foreground mt-1">Data-driven recommendations to improve governance and citizen satisfaction</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <Lightbulb className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total Recommendations</p>
              <h3 className="text-2xl font-bold text-foreground">{recommendations.length}</h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <AlertCircle className="w-8 h-8 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Pending Action</p>
              <h3 className="text-2xl font-bold text-foreground">
                {recommendations.filter(r => r.status === 'pending').length}
              </h3>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="w-8 h-8 text-secondary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Estimated Total Savings</p>
              <h3 className="text-2xl font-bold text-foreground">₹18.4L</h3>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations List */}
        <div className="space-y-4">
          {recommendations.map((rec, idx) => (
            <Card key={idx} className="hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getStatusIcon(rec.status)}
                      <h3 className="text-lg font-semibold text-foreground">{rec.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{rec.description}</p>
                  </div>
                </div>

                {/* Tags and Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">{rec.category}</Badge>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority}
                    </Badge>
                    <Badge className={getImpactColor(rec.impact)}>
                      {rec.impact} Impact
                    </Badge>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm border-t border-border pt-4">
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Affected Wards</p>
                      <p className="font-semibold text-foreground">{rec.affectedWards.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Est. Savings</p>
                      <p className="font-semibold text-secondary">{rec.estimatedSavings}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs mb-1">Timeline</p>
                      <p className="font-semibold text-foreground">{rec.timeline}</p>
                    </div>
                    <div className="text-right">
                      <Button variant="ghost" className="gap-2 h-8">
                        View Details <ArrowRight className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Implementation Guide</CardTitle>
            <CardDescription>Steps to implement recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Review & Prioritize', desc: 'Review recommendations and prioritize by impact and feasibility' },
                { step: 2, title: 'Resource Allocation', desc: 'Allocate budget and resources based on implementation timeline' },
                { step: 3, title: 'Task Assignment', desc: 'Assign tasks to departments and set accountability metrics' },
                { step: 4, title: 'Monitor Progress', desc: 'Track implementation progress and measure outcomes' },
                { step: 5, title: 'Evaluate Impact', desc: 'Evaluate impact on complaint volume and satisfaction' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-semibold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
