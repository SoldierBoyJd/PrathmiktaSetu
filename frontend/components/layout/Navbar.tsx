"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, ChevronDown, Search, User, LogOut, Settings } from "lucide-react";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { cn } from "@/lib/utils";

interface NavbarProps {
  title?: string;
  subtitle?: string;
  alertCount?: number;
}

function getInitials(name: string): string {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

const MOCK_NOTIFICATIONS = [
  { id: 1, text: "New complaint submitted in Ward 7",    time: "2m ago",  unread: true  },
  { id: 2, text: "Emergency alert: Flooding in Sector 4",time: "15m ago", unread: true  },
  { id: 3, text: "Budget report ready for review",       time: "1h ago",  unread: false },
];

export default function Navbar({ title, subtitle, alertCount }: NavbarProps) {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen]       = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef    = useRef<HTMLDivElement>(null);

  const displayName = user?.full_name ?? "Raghav Sharma";
  const displayRole =
    user?.role === "mp"    ? "MP" :
    user?.role === "admin" ? "Administrator" :
    "Constituency Officer";
  const initials   = getInitials(displayName);
  const badgeCount = alertCount ?? MOCK_NOTIFICATIONS.filter((n) => n.unread).length;
  const profileHref = user?.role === "citizen" ? "/citizen/profile" : "/mp/profile";

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    router.push("/login");
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false);
      if (notifRef.current    && !notifRef.current.contains(e.target as Node))    setNotifOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={cn(
        /* On mobile: full width. On lg+: offset by the 260px sidebar */
        "fixed top-0 right-0 z-20",
        "left-0 lg:left-[260px]",
        "h-[64px] sm:h-[72px]",
        "bg-white/95 backdrop-blur-sm border-b border-zinc-200",
        "flex items-center px-4 lg:px-8 justify-between gap-3"
      )}
    >
      {/* ── Left: hamburger-spacer + title/search ─────────────── */}
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* 
          Spacer that sits where the mobile hamburger button lives
          (the hamburger itself is rendered in Sidebar.tsx). 
          We only show it on mobile (lg: hidden) so the title doesn't
          collide with the hamburger button.
        */}
        <div className="lg:hidden w-10 shrink-0" aria-hidden />

        {title ? (
          <div className="flex flex-col min-w-0">
            <h1 className="font-bold text-zinc-950 text-sm sm:text-lg leading-6 sm:leading-7 truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[#71717b] text-xs leading-4 truncate hidden sm:block">
                {subtitle}
              </p>
            )}
          </div>
        ) : (
          <div className="relative w-full max-w-xs hidden sm:block">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717b]" />
            <input
              className="w-full bg-zinc-100/60 border border-zinc-200/60 rounded-lg pl-9 h-10 text-sm placeholder:text-[#71717b] focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
              placeholder="Search issues, wards…"
            />
          </div>
        )}
      </div>

      {/* ── Right: bell + user ────────────────────────────────── */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

        {/* Notification bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen((o) => !o)}
            className="relative size-9 sm:size-10 rounded-lg border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={15} className="text-[#71717b]" />
            {badgeCount > 0 && (
              <span className="absolute top-1.5 right-1.5 size-[15px] rounded-full bg-[#ff6900] flex items-center justify-center">
                <span className="text-[8px] font-bold text-white leading-none">
                  {badgeCount > 9 ? "9+" : badgeCount}
                </span>
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-2xl border border-zinc-200 shadow-lg overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
                <span className="font-semibold text-sm text-zinc-950">Notifications</span>
                <button className="text-[11px] text-[#ff6900] font-medium hover:underline">
                  Mark all read
                </button>
              </div>
              <div className="flex flex-col max-h-60 overflow-y-auto">
                {MOCK_NOTIFICATIONS.map((n) => (
                  <div
                    key={n.id}
                    className={cn(
                      "px-4 py-3 flex items-start gap-3 hover:bg-zinc-50 cursor-pointer transition-colors",
                      n.unread && "bg-[#ff6900]/[0.03]"
                    )}
                  >
                    <span
                      className={cn(
                        "size-2 rounded-full mt-1.5 shrink-0",
                        n.unread ? "bg-[#ff6900]" : "bg-transparent"
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-zinc-950 leading-relaxed">{n.text}</p>
                      <p className="text-[11px] text-[#71717b] mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t border-zinc-100 text-center">
                <span className="text-xs text-[#71717b] hover:text-zinc-950 cursor-pointer transition-colors">
                  View all notifications
                </span>
              </div>
            </div>
          )}
        </div>

        {/* User dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-1.5 sm:gap-2 hover:bg-zinc-50 rounded-lg px-1.5 sm:px-2 py-1.5 transition-colors"
          >
            <div className="size-8 sm:size-9 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
              <span className="text-orange-50 font-semibold text-xs">{initials}</span>
            </div>
            {/* Name only on sm+ */}
            <div className="leading-tight hidden sm:flex flex-col text-left">
              <span className="font-medium text-sm leading-5 text-zinc-950 max-w-[100px] truncate">
                {displayName}
              </span>
              <span className="text-[#71717b] text-[11px]">{displayRole}</span>
            </div>
            <ChevronDown
              size={13}
              className={cn("text-[#71717b] transition-transform", dropdownOpen && "rotate-180")}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-zinc-200 shadow-lg overflow-hidden z-50">
              {/* Header */}
              <div className="px-4 py-3 border-b border-zinc-100">
                <p className="font-semibold text-sm text-zinc-950 truncate">{displayName}</p>
                <p className="text-[11px] text-[#71717b] truncate">{user?.email ?? "officer@gov.in"}</p>
                <span
                  className={cn(
                    "inline-flex items-center mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full",
                    user?.role === "citizen"
                      ? "bg-[#1E8E3E]/10 text-[#1E8E3E]"
                      : "bg-[#ff6900]/10 text-[#ff6900]"
                  )}
                >
                  {user?.role === "citizen" ? "👤 Citizen" : "🏛️ MP / Official"}
                </span>
              </div>

              <div className="py-1">
                <Link
                  href={profileHref}
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
                >
                  <User size={14} className="text-[#71717b]" />
                  My Profile
                </Link>
                {user?.role !== "citizen" && (
                  <Link
                    href="/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors"
                  >
                    <Settings size={14} className="text-[#71717b]" />
                    Settings
                  </Link>
                )}
              </div>

              <div className="border-t border-zinc-100 py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
