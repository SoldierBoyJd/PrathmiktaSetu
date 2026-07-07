"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Globe,
  FileText,
  Settings,
  Waypoints,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/store/useAuthStore";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/heatmap", label: "Heatmap", icon: Map },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/complaints", label: "Complaints", icon: AlertCircle },
  { href: "/recommendations", label: "Recommendations", icon: Lightbulb },
  { href: "/priority-score", label: "Priority Scores", icon: TrendingUp },
  { href: "/budget-optimizer", label: "Budget Optimizer", icon: DollarSign },
  { href: "/emergency-alerts", label: "Emergency Alerts", icon: AlertTriangle },
  { href: "/digital-twin", label: "Digital Twin", icon: Globe },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = useState(false);

  const displayName = user?.full_name ?? "Raghav Sharma";
  const displayRole =
    user?.role === "mp"
      ? "MP / Constituency Officer"
      : user?.role === "admin"
      ? "Administrator"
      : "Constituency Officer";
  const initials = getInitials(displayName);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const SidebarContent = () => (
    <aside className="h-full bg-neutral-50 border-r border-zinc-200 flex flex-col w-[260px]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 border-b border-zinc-200 h-[72px] shrink-0">
        <div className="size-9 rounded-lg bg-[#ff6900] flex items-center justify-center shrink-0">
          <Waypoints className="size-5 text-orange-50" />
        </div>
        <div className="leading-none flex flex-col min-w-0">
          <span className="font-bold text-zinc-950 text-sm leading-5 tracking-tight truncate">
            Prathmikta Setu
          </span>
          <span className="text-[#71717b] text-[11px] truncate">
            Bridging Citizens &amp; Governance
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-0.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/dashboard"
              ? pathname === href || pathname === "/"
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#ff6900] text-orange-50 shadow-sm"
                  : "text-zinc-700 hover:bg-zinc-100"
              )}
            >
              <Icon
                size={16}
                className={cn("shrink-0", isActive ? "text-orange-50" : "text-[#71717b]")}
              />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User footer — single row only */}
      <div className="p-4 border-t border-zinc-200 shrink-0">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
            <span className="text-orange-50 font-semibold text-xs">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm text-zinc-950 truncate">{displayName}</p>
            <p className="text-[11px] text-[#71717b] truncate">{displayRole}</p>
          </div>
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="shrink-0 size-8 rounded-lg flex items-center justify-center text-[#71717b] hover:bg-red-50 hover:text-red-500 transition-colors"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar — fixed */}
      <div className="hidden lg:block fixed left-0 top-0 h-full z-30">
        <SidebarContent />
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 size-10 rounded-lg bg-white border border-zinc-200 shadow-sm flex items-center justify-center"
        aria-label="Open menu"
      >
        <Menu size={18} className="text-zinc-700" />
      </button>

      {/* Mobile overlay + drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full shadow-xl">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-[-44px] size-8 rounded-lg bg-white/90 border border-zinc-200 flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={14} className="text-zinc-700" />
            </button>
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
