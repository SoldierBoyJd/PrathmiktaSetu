'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, MapPin, FileUp } from 'lucide-react';
import Link from 'next/link';

export default function SubmitComplaintPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    ward: '',
    location: '',
    description: '',
    priority: 'medium',
    attachment: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Roads & Infrastructure',
    'Water Supply',
    'Sanitation',
    'Electricity',
    'Waste Management',
    'Street Lights',
    'Public Transport',
    'Parks & Recreation',
    'Other'
  ];

  const wards = Array.from({ length: 20 }, (_, i) => `Ward ${i + 1}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </Button>
          <div className="font-semibold text-foreground">Submit Complaint</div>
          <div className="w-8" />
        </div>
      </nav>

      {/* Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <Card className="border-secondary bg-secondary/5">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="text-6xl">✓</div>
                <h2 className="text-2xl font-bold text-secondary">Complaint Submitted Successfully!</h2>
                <p className="text-muted-foreground">
                  Your complaint has been received with ID: <span className="font-semibold text-foreground">#PS-{Date.now()}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  You will receive updates via email. Track your complaint status anytime.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                  <Button asChild>
                    <Link href="/issues">View All Issues</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Report an Issue</CardTitle>
                <CardDescription>
                  Help us improve our community by reporting issues and complaints
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  {/* Issue Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Issue Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="priority">Priority *</Label>
                        <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                          <SelectTrigger id="priority">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ward">Ward *</Label>
                        <Select value={formData.ward} onValueChange={(value) => setFormData({ ...formData, ward: value })}>
                          <SelectTrigger id="ward">
                            <SelectValue placeholder="Select ward" />
                          </SelectTrigger>
                          <SelectContent>
                            {wards.map((ward) => (
                              <SelectItem key={ward} value={ward}>{ward}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Specific Location *</Label>
                        <Input
                          id="location"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g., Main Street, Near Market"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Complaint Description *</Label>
                    <Textarea
                      id="description"
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please describe the issue in detail..."
                      rows={5}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="attachment">Attach Photos/Documents (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition">
                      <FileUp className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Drag and drop files or click to upload</p>
                      <Input
                        id="attachment"
                        type="file"
                        className="hidden"
                        onChange={(e) => setFormData({ ...formData, attachment: e.target.files?.[0] || null })}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">Submit Complaint</Button>
                    <Button type="button" variant="outline" asChild className="flex-1">
                      <Link href="/">Cancel</Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
