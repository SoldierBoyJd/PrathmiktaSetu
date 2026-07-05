import { TrendingUp, TrendingDown } from "lucide-react";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconBg?: string;
}

export function MetricCard({
  title,
  value,
  icon,
  trend,
  iconBg = "bg-blue-100",
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-border">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              {trend.isPositive ? (
                <TrendingUp className="w-4 h-4 text-secondary" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? "text-secondary" : "text-destructive"
                }`}
              >
                {trend.isPositive ? "+" : "-"}
                {Math.abs(trend.value)}% vs last 30 days
              </span>
            </div>
          )}
        </div>
        <div className={`${iconBg} rounded-lg p-3`}>{icon}</div>
      </div>
    </div>
  );
}
