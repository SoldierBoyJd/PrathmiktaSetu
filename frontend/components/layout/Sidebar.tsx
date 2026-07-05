"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  BarChart3,
  FileText,
  Lightbulb,
  ClipboardList,
  AlertCircle,
  MessageSquare,
  MapPin,
  Flag,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Heatmap",
    href: "/dashboard/heatmap",
    icon: Activity,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Complaints",
    href: "/dashboard/complaints",
    icon: FileText,
  },
  {
    label: "Recommendations",
    href: "/dashboard/recommendations",
    icon: Lightbulb,
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    icon: ClipboardList,
  },
  {
    label: "Categories",
    href: "/dashboard/categories",
    icon: MapPin,
  },
  {
    label: "Alerts",
    href: "/dashboard/alerts",
    icon: AlertCircle,
  },
  {
    label: "Feedback",
    href: "/dashboard/feedback",
    icon: MessageSquare,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Flag className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-sidebar-foreground">
              PRATHMIKTA
            </span>
            <span className="text-xs text-secondary font-semibold">SETU</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
            RS
          </div>
          <div>
            <p className="font-semibold text-sm text-sidebar-foreground">
              Raghav Sharma
            </p>
            <p className="text-xs text-muted-foreground">MP Admin</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-sm">
          <div className="flex justify-center mb-2">
            <div className="text-3xl">🏛️</div>
          </div>
          <p className="font-semibold text-green-900 text-center mb-2">
            Our Mission
          </p>
          <p className="text-xs text-green-800 text-center leading-relaxed">
            Prioritize issues. Take Action. Build better Communities.
          </p>
        </div>

        {/* Core Values */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-lg">👥</span>
            <span className="text-sidebar-foreground font-medium">People First</span>
            <span className="text-muted-foreground">Citizen centric approach</span>
          </div>
        </div>
      </div>
    </div>
  );
}
