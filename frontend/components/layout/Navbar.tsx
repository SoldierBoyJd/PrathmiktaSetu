"use client";

import { Bell, Calendar, Menu, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="bg-white border-b border-border sticky top-0 z-10">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left side - Menu and Welcome */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Welcome back, Raghav Sharma 👋
            </h1>
            <p className="text-sm text-muted-foreground">
              Here&apos;s what&apos;s happening in your constituency.
            </p>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-4">
          {/* Date Range Selector */}
          <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">
              May 20 – Jun 20, 2025
            </span>
            <div className="text-muted-foreground">▼</div>
          </div>

          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>

          {/* Add Complaint Button */}
          <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2">
            <Plus className="w-4 h-4" />
            Add Complaint
          </Button>
        </div>
      </div>
    </div>
  );
}
