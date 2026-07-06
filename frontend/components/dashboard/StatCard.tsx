import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  delta?: string;
  deltaPositive?: boolean;
  icon: React.ReactNode;
  iconBg: string;
  borderColor: string;
}

export default function StatCard({
  title,
  value,
  delta,
  deltaPositive,
  icon,
  iconBg,
  borderColor,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-4 border-l-4 shadow-sm hover:shadow-md transition-shadow",
        borderColor
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-[#718096] uppercase tracking-wider mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-[#1A2332] leading-tight">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
          {delta && (
            <div className="flex items-center gap-1 mt-1.5">
              {deltaPositive ? (
                <TrendingUp size={12} className="text-[#27AE60]" />
              ) : (
                <TrendingDown size={12} className="text-[#E74C3C]" />
              )}
              <span
                className={cn(
                  "text-xs font-medium",
                  deltaPositive ? "text-[#27AE60]" : "text-[#E74C3C]"
                )}
              >
                {delta}
              </span>
              <span className="text-xs text-[#A0AEC0]">vs last 30 days</span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
            iconBg
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
