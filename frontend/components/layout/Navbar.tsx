"use client";

import { Bell, ChevronDown, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  userName?: string;
  userRole?: string;
  dateRange?: string;
  alertCount?: number;
}

export default function Navbar({
  userName = "Raghav Sharma",
  userRole = "MP",
  dateRange = "May 25 – Jun 20, 2025",
  alertCount = 3,
}: NavbarProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="fixed top-0 left-56 right-0 h-14 bg-white border-b border-[#E2E8F0] z-20 flex items-center px-5 gap-4 shadow-sm">
      {/* Welcome */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#1A2332] truncate">
            Welcome back, {userName}
          </span>
          <span className="text-base">👋</span>
        </div>
        <p className="text-xs text-[#718096] truncate">
          Here&apos;s what&apos;s happening in your constituency today.
        </p>
      </div>

      {/* Date Range */}
      <div className="flex items-center gap-1.5 text-xs text-[#4A5568] bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg px-3 py-1.5 hidden sm:flex">
        <Calendar size={13} className="text-[#A0AEC0]" />
        <span>{dateRange}</span>
      </div>

      {/* Alert Bell */}
      <button className="relative p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors">
        <Bell size={18} className="text-[#4A5568]" />
        {alertCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#E74C3C] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {alertCount}
          </span>
        )}
      </button>

      {/* User avatar */}
      <button className="flex items-center gap-2 hover:bg-[#F5F7FA] rounded-lg px-2 py-1.5 transition-colors">
        <div className="w-7 h-7 rounded-full bg-[#2D7A3A] flex items-center justify-center">
          <span className="text-white text-xs font-semibold">{initials}</span>
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-xs font-semibold text-[#1A2332] leading-tight">{userName}</p>
          <p className="text-[10px] text-[#718096] leading-tight">{userRole}</p>
        </div>
        <ChevronDown size={14} className="text-[#A0AEC0]" />
      </button>
    </header>
  );
}
