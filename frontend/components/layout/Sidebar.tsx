"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  FileText,
  Lightbulb,
  Star,
  DollarSign,
  AlertTriangle,
  Globe,
  FileBarChart,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/heatmap", label: "Heatmap", icon: Map },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/complaints", label: "Complaints", icon: FileText },
  { href: "/recommendations", label: "Recommendations", icon: Lightbulb },
  { href: "/priority-score", label: "Priority Score", icon: Star },
  { href: "/budget-optimizer", label: "Budget Optimizer", icon: DollarSign },
  { href: "/emergency-alerts", label: "Emergency Alerts", icon: AlertTriangle },
  { href: "/digital-twin", label: "Digital Twin", icon: Globe },
  { href: "/reports", label: "Reports", icon: FileBarChart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white border-r border-[#E2E8F0] flex flex-col z-30 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-4 border-b border-[#E2E8F0]">
        <div className="w-8 h-8 rounded-lg bg-[#2D7A3A] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">PS</span>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-[#2D7A3A] leading-tight uppercase tracking-wide">
            Prathmikta Setu
          </p>
          <p className="text-[9px] text-[#718096] leading-tight truncate">
            Bhavya Bharat ki Governance
          </p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === "/dashboard"
              ? pathname === href || pathname === "/"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 mx-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group",
                isActive
                  ? "bg-[#E8F5E9] text-[#2D7A3A]"
                  : "text-[#4A5568] hover:bg-[#F5F7FA] hover:text-[#2D7A3A]"
              )}
            >
              <Icon
                size={16}
                className={cn(
                  "flex-shrink-0 transition-colors",
                  isActive ? "text-[#2D7A3A]" : "text-[#A0AEC0] group-hover:text-[#2D7A3A]"
                )}
              />
              <span className="truncate">{label}</span>
              {isActive && (
                <ChevronRight size={12} className="ml-auto text-[#2D7A3A]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer tag */}
      <div className="px-4 py-3 border-t border-[#E2E8F0]">
        <p className="text-[10px] text-[#A0AEC0] text-center">
          © 2025 Prathmikta Setu
        </p>
      </div>
    </aside>
  );
}
