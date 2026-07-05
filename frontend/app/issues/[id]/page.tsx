'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, MapPin, Calendar, User, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function IssueDetailPage({ params }: { params: { id: string } }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState(124);
  const [newComment, setNewComment] = useState('');

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  const issue = {
    id: '#PS-12842',
    title: 'Potholes on Main Road',
    category: 'Roads & Infrastructure',
    ward: 'Ward 12, Bhopal',
    status: 'pending' as const,
    priority: 'high' as const,
    date: '20 Jun 2025, 10:24 AM',
    votes: votes,
    description: 'Multiple large potholes on Main Street are causing serious traffic hazards and damage to vehicles. This issue has been reported multiple times but no action has been taken yet.',
    reporter: 'John Doe',
    email: 'john@example.com',
    images: ['/placeholder.jpg'],
    updates: [
      {
        date: '21 Jun 2025',
        status: 'Pending',
        message: 'Issue received and acknowledged by Ward Officer'
      },
      {
        date: '20 Jun 2025',
        status: 'Submitted',
        message: 'Issue submitted by citizen'
      }
    ],
    comments: [
      {
        author: 'Jane Smith',
        date: '20 Jun 2025',
        text: 'I also experienced damage to my vehicle due to these potholes. Please fix it urgently!'
      },
      {
        author: 'Mike Johnson',
        date: '19 Jun 2025',
        text: 'This has been an issue for weeks. Thank you for reporting it!'
      }
    ]
  };

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
          <Link href="/issues" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="font-semibold text-foreground">{issue.id}</div>
          <div className="w-20" />
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl font-bold text-foreground">{issue.title}</h1>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className={getStatusColor(issue.status)}>
                {issue.status.charAt(0).toUpperCase() + issue.status.slice(1)}
              </Badge>
              <Badge className={getPriorityColor(issue.priority)}>
                {issue.priority.toUpperCase()} PRIORITY
              </Badge>
              <Badge variant="outline">{issue.category}</Badge>
            </div>
            <div className="flex flex-wrap gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {issue.ward}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {issue.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {issue.reporter}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Issue Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{issue.description}</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="aspect-video bg-muted rounded flex items-center justify-center">
                      <span className="text-muted-foreground">Image Placeholder</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardHeader>
                  <CardTitle>Status Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {issue.updates.map((update, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary mt-1.5" />
                          {idx < issue.updates.length - 1 && (
                            <div className="w-0.5 h-12 bg-border my-2" />
                          )}
                        </div>
                        <div className="pb-4">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">{update.status}</span>
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{update.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Comments */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Comments</CardTitle>
                  <CardDescription>{issue.comments.length} comments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Comment */}
                  <div className="space-y-3 border-b border-border pb-6">
                    <Textarea
                      placeholder="Share your thoughts or experience with this issue..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                    />
                    <Button>Post Comment</Button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {issue.comments.map((comment, idx) => (
                      <div key={idx} className="border-b border-border pb-4 last:border-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">{comment.author}</span>
                          <span className="text-sm text-muted-foreground">{comment.date}</span>
                        </div>
                        <p className="text-muted-foreground">{comment.text}</p>
                        <div className="flex gap-4 mt-3 text-xs">
                          <button className="text-muted-foreground hover:text-foreground">Like</button>
                          <button className="text-muted-foreground hover:text-foreground">Reply</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vote Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-4xl">{issue.votes}</CardTitle>
                  <CardDescription className="text-center">community votes</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleVote}
                    disabled={hasVoted}
                    className="w-full gap-2"
                    variant={hasVoted ? 'secondary' : 'default'}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    {hasVoted ? 'Voted' : 'Vote for this issue'}
                  </Button>
                </CardContent>
              </Card>

              {/* Share Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Share Issue</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </CardContent>
              </Card>

              {/* Reporter Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Reporter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold text-foreground">{issue.reporter}</div>
                    <div className="text-sm text-muted-foreground">{issue.email}</div>
                  </div>
                  <Button variant="outline" className="w-full">Contact Reporter</Button>
                </CardContent>
              </Card>

              {/* Related Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Link href="/issues">View All Issues</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Link href="/submit">Report Similar Issue</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
