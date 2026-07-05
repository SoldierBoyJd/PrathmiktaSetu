"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  ClipboardList,
  Lightbulb,
  DollarSign,
  Zap,
  AlertTriangle,
  Grid3x3,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Heatmap", href: "/dashboard/heatmap", icon: Map },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Complaints", href: "/issues", icon: ClipboardList },
  { label: "Recommendations", href: "/dashboard/recommendations", icon: Lightbulb },
  { label: "Budget Optimizer", href: "/dashboard/budget", icon: DollarSign },
  { label: "Priority Scores", href: "/dashboard/clustering", icon: Zap },
  { label: "Emergency Alerts", href: "/dashboard/emergencies", icon: AlertTriangle },
  { label: "Digital Twin", href: "/dashboard/digital-twin", icon: Grid3x3 },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Settings", href: "/dashboard/categories", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded-lg border border-border shadow-sm hover:bg-muted"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-white border-r border-border
          transform transition-transform duration-300 z-40 md:z-0
          md:translate-x-0 overflow-y-auto md:overflow-visible
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border sticky top-0 bg-white">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">PS</span>
            </div>
            <div>
              <h1 className="font-bold text-sm text-foreground">Prathmikta</h1>
              <p className="text-xs text-muted-foreground">Setu</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium
                  ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground hover:bg-muted"
                  }
                `}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-muted/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold text-sm">RS</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground truncate">Raghav Sharma</p>
              <p className="text-xs text-muted-foreground truncate">MP Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Desktop spacer */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  );
}
