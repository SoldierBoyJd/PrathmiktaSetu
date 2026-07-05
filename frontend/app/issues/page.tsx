'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Issue {
  id: string;
  title: string;
  category: string;
  ward: string;
  status: 'pending' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high' | 'critical';
  date: string;
  votes: number;
  description: string;
}

export default function IssuesFeedPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const issues: Issue[] = [
    {
      id: '#PS-12842',
      title: 'Potholes on Main Road',
      category: 'Roads & Infrastructure',
      ward: 'Ward 12, Bhopal',
      status: 'pending',
      priority: 'high',
      date: '20 Jun 2025',
      votes: 124,
      description: 'Multiple large potholes on Main Street causing traffic and safety hazards'
    },
    {
      id: '#PS-12841',
      title: 'Water leakage in pipeline',
      category: 'Water Supply',
      ward: 'Ward 7, Bhopal',
      status: 'in-progress',
      priority: 'medium',
      date: '20 Jun 2025',
      votes: 89,
      description: 'Continuous water leakage from main pipeline affecting water supply'
    },
    {
      id: '#PS-12840',
      title: 'Street light not working',
      category: 'Electricity',
      ward: 'Ward 4, Bhopal',
      status: 'resolved',
      priority: 'low',
      date: '19 Jun 2025',
      votes: 56,
      description: 'Street light on intersection of road and avenue has been non-functional'
    },
    {
      id: '#PS-12839',
      title: 'Garbage not collected',
      category: 'Waste Management',
      ward: 'Ward 15, Bhopal',
      status: 'pending',
      priority: 'medium',
      date: '19 Jun 2025',
      votes: 142,
      description: 'Garbage not collected for past 3 days in residential area'
    },
    {
      id: '#PS-12838',
      title: 'Drain overflow',
      category: 'Sanitation',
      ward: 'Ward 9, Bhopal',
      status: 'in-progress',
      priority: 'high',
      date: '19 Jun 2025',
      votes: 198,
      description: 'Main drain overflowing causing water stagnation and health hazard'
    },
  ];

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          issue.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || issue.category === selectedCategory;
    const matchesStatus = !selectedStatus || issue.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-secondary/10 text-secondary border-secondary';
      case 'in-progress':
        return 'bg-accent/10 text-accent border-accent';
      case 'pending':
        return 'bg-primary/10 text-primary border-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-destructive';
      case 'high':
        return 'text-primary';
      case 'medium':
        return 'text-accent';
      case 'low':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="font-semibold text-foreground">PRATHMIKTA SETU</Link>
          <Button asChild>
            <Link href="/submit">Report Issue</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Community Issues</h1>
            <p className="text-muted-foreground">Track and vote on issues in your community</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Roads & Infrastructure">Roads & Infrastructure</SelectItem>
                <SelectItem value="Water Supply">Water Supply</SelectItem>
                <SelectItem value="Sanitation">Sanitation</SelectItem>
                <SelectItem value="Electricity">Electricity</SelectItem>
                <SelectItem value="Waste Management">Waste Management</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Issues List */}
          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <Link key={issue.id} href={`/issues/${issue.id}`}>
                <Card className="hover:shadow-lg hover:border-primary/50 transition cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <Badge variant="outline" className="mt-0.5">{issue.id}</Badge>
                          <Badge className={`mt-0.5 ${getStatusColor(issue.status)}`}>
                            {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{issue.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{issue.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {issue.ward}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {issue.date}
                          </div>
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(issue.priority)}`}>
                            {issue.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {issue.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{issue.votes}</div>
                          <div className="text-xs text-muted-foreground">votes</div>
                        </div>
                        <Button variant="ghost" className="gap-2">
                          View <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredIssues.length === 0 && (
            <Card>
              <CardContent className="pt-8 text-center">
                <p className="text-muted-foreground mb-4">No issues found</p>
                <Button asChild>
                  <Link href="/submit">Report a New Issue</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
