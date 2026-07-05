"use client";

import { Bell, Calendar, Plus } from "lucide-react";

export function Navbar() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-30 md:z-20">
      <div className="flex flex-col gap-3 px-4 md:px-6 py-4 md:pt-5 md:pb-4">
        {/* Top Row - Welcome */}
        <div className="ml-14 md:ml-0">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">
            Welcome back, Raghav Sharma
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening in your constituency.
          </p>
        </div>

        {/* Bottom Row - Actions */}
        <div className="flex items-center justify-between gap-2 ml-14 md:ml-0">
          {/* Date Range Selector */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-sm">
            <Calendar size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="font-medium text-foreground whitespace-nowrap">
              May 20 – Jun 20
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell size={18} className="text-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>

            {/* Add Complaint Button */}
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-lg transition-colors">
              <Plus size={18} />
              <span>Add Complaint</span>
            </button>

            {/* Mobile Add Button */}
            <button className="md:hidden p-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors">
              <Plus size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
