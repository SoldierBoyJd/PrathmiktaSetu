import { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: ReactNode;
  onClick?: () => void;
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  onClick,
}: StatCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl border border-border p-6
        transition-all duration-200 hover:shadow-lg hover:border-primary/20
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-foreground">
            {value}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        {icon && <div className="text-2xl">{icon}</div>}
      </div>

      {trend && (
        <div className="flex items-center gap-1">
          {trend.isPositive ? (
            <>
              <ArrowUpRight size={16} className="text-green-600" />
              <span className="text-sm font-medium text-green-600">
                +{trend.value}%
              </span>
            </>
          ) : (
            <>
              <ArrowDownRight size={16} className="text-red-600" />
              <span className="text-sm font-medium text-red-600">
                -{trend.value}%
              </span>
            </>
          )}
          <span className="text-xs text-muted-foreground ml-1">
            vs last month
          </span>
        </div>
      )}
    </div>
  );
}
