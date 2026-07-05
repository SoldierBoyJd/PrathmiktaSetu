'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, MapPin, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const features = [
    {
      icon: MapPin,
      title: 'Geo-Location Based',
      description: 'Track issues by location and visualize problem areas on an interactive map'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'Monitor complaint trends and resolution metrics in real-time'
    },
    {
      icon: Users,
      title: 'Citizen Engagement',
      description: 'Direct line of communication between citizens and government officials'
    },
    {
      icon: Zap,
      title: 'Fast Resolution',
      description: 'Track complaint status and get faster resolution through transparency'
    },
    {
      icon: CheckCircle,
      title: 'Accountability',
      description: 'Government officials held accountable with public performance metrics'
    },
    {
      icon: TrendingUp,
      title: 'Data Driven',
      description: 'Decisions backed by comprehensive data and analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              PS
            </div>
            <span className="font-semibold text-foreground">PRATHMIKTA SETU</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/submit">Submit a Complaint</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold text-foreground leading-tight">
            Bridging Citizens & Governance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            PRATHMIKTA SETU is a citizen-centric complaint management system that ensures every voice is heard and every issue is resolved with transparency and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="gap-2">
              <Link href="/submit">
                Report an Issue <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/issues">View All Issues</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary">12,842</div>
              <div className="text-muted-foreground mt-2">Total Complaints</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary">7,892</div>
              <div className="text-muted-foreground mt-2">Resolved</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent">4,283</div>
              <div className="text-muted-foreground mt-2">In Progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose PRATHMIKTA SETU?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="border border-border">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: 'People First', icon: '👥' },
              { title: 'Transparent', icon: '📋' },
              { title: 'Data Driven', icon: '📊' },
              { title: 'Secure', icon: '🔒' },
              { title: 'Responsive', icon: '⚡' }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-4xl">{value.icon}</div>
                <h3 className="font-semibold text-foreground">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/10 border-y border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Make a Difference?</h2>
          <p className="text-lg text-muted-foreground">
            Submit your complaint today and help us build better communities together.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/submit">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-semibold text-foreground mb-4">PRATHMIKTA SETU</div>
              <p className="text-sm text-muted-foreground">Bridging Citizens & Governance</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/submit" className="hover:text-foreground">Submit Complaint</Link></li>
                <li><Link href="/issues" className="hover:text-foreground">View Issues</Link></li>
                <li><Link href="/transparency" className="hover:text-foreground">Transparency</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">FAQs</a></li>
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 PRATHMIKTA SETU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
