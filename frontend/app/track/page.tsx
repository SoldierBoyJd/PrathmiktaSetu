'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Calendar, User, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TrackComplaintPage() {
  const [complaintId, setComplaintId] = useState('');
  const [email, setEmail] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  const complaint = {
    id: '#PS-12842',
    title: 'Potholes on Main Road',
    status: 'in-progress',
    category: 'Roads & Infrastructure',
    ward: 'Ward 12, Bhopal',
    location: 'Main Street, Near Market',
    submittedDate: '20 Jun 2025, 10:24 AM',
    reporter: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    priority: 'high',
    description: 'Multiple large potholes on Main Street causing traffic hazards and vehicle damage.',
    timeline: [
      {
        date: '21 Jun 2025, 2:30 PM',
        status: 'assigned',
        title: 'Assigned to Contractor',
        description: 'Complaint has been assigned to contractor for repair work'
      },
      {
        date: '21 Jun 2025, 9:00 AM',
        status: 'verified',
        title: 'Verified by Inspector',
        description: 'Inspector verified the issue and recommended immediate action'
      },
      {
        date: '20 Jun 2025, 3:15 PM',
        status: 'received',
        title: 'Received & Acknowledged',
        description: 'Complaint received and acknowledged by Ward Officer'
      },
      {
        date: '20 Jun 2025, 10:24 AM',
        status: 'submitted',
        title: 'Submitted',
        description: 'Complaint submitted by citizen'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-secondary text-white';
      case 'assigned':
      case 'in-progress':
        return 'bg-accent text-white';
      case 'verified':
        return 'bg-primary text-white';
      case 'received':
        return 'bg-primary/70 text-white';
      case 'submitted':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-destructive/10 text-destructive border-destructive';
      case 'high':
        return 'bg-primary/10 text-primary border-primary';
      case 'medium':
        return 'bg-accent/10 text-accent border-accent';
      case 'low':
        return 'bg-secondary/10 text-secondary border-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
          <div className="font-semibold text-foreground">Track Complaint</div>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {!searched ? (
            <>
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-2">Track Your Complaint</h1>
                <p className="text-muted-foreground">Enter your complaint ID and email to track the status</p>
              </div>

              {/* Search Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Find Your Complaint</CardTitle>
                  <CardDescription>You will need your complaint ID and email address</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="complaint-id">Complaint ID</Label>
                      <Input
                        id="complaint-id"
                        placeholder="#PS-12842"
                        value={complaintId}
                        onChange={(e) => setComplaintId(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        You received this ID when you submitted your complaint
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2">
                      <Search className="w-4 h-4" />
                      Track Complaint
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="ghost" onClick={() => setSearched(false)} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Search
                </Button>
              </div>

              {/* Complaint Details */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {/* Header Card */}
                  <Card className="mb-8">
                    <CardContent className="pt-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <Badge variant="outline" className="mb-3">{complaint.id}</Badge>
                          <h1 className="text-3xl font-bold text-foreground mb-2">{complaint.title}</h1>
                          <p className="text-muted-foreground">{complaint.description}</p>
                        </div>
                        <Badge className={getPriorityColor(complaint.priority)}>
                          {complaint.priority.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Category</span>
                          <div className="font-semibold text-foreground">{complaint.category}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Ward</span>
                          <div className="font-semibold text-foreground">{complaint.ward}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Location</span>
                          <div className="font-semibold text-foreground">{complaint.location}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Submitted</span>
                          <div className="font-semibold text-foreground">{complaint.submittedDate}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Status Timeline */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Status Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {complaint.timeline.map((item, idx) => (
                          <div key={idx} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <Badge className={getStatusColor(item.status)}>
                                {item.status.charAt(0).toUpperCase()}
                              </Badge>
                              {idx < complaint.timeline.length - 1 && (
                                <div className="w-0.5 h-16 bg-border my-2" />
                              )}
                            </div>
                            <div className="pb-4 flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-foreground">{item.title}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                              <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Current Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Current Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge className="bg-accent text-white w-full justify-center py-2 text-center">
                        IN PROGRESS
                      </Badge>
                      <p className="text-sm text-muted-foreground text-center mt-3">
                        Assigned to contractor for repair work
                      </p>
                    </CardContent>
                  </Card>

                  {/* Reporter Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Your Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <User className="w-4 h-4" />
                          <span className="text-sm">Name</span>
                        </div>
                        <p className="font-semibold text-foreground">{complaint.reporter}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Search className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </div>
                        <p className="font-semibold text-foreground">{complaint.email}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">Phone</span>
                        </div>
                        <p className="font-semibold text-foreground">{complaint.phone}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Actions */}
                  <Card>
                    <CardContent className="pt-6 space-y-2">
                      <Button variant="outline" className="w-full">Update Status</Button>
                      <Button variant="outline" className="w-full">Contact Officer</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
