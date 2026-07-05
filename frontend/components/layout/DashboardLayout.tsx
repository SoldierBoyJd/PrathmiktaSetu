"use client";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:h-auto md:flex-row flex-col">
      {/* Sidebar - Fixed on desktop, overlay on mobile */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:overflow-visible">
        {/* Navbar */}
        <Navbar />

        {/* Content - Scrollable */}
        <main className="flex-1 overflow-auto bg-background">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
