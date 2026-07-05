import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon?: string;
}

export function MetricCard({ title, value, trend, trendUp = true, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-border p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 text-xs md:text-sm">
              {trendUp ? (
                <ArrowUpTrendIcon />
              ) : (
                <ArrowDownTrendIcon />
              )}
              <span className={trendUp ? "text-green-600" : "text-destructive"}>
                {trend}
              </span>
            </div>
          )}
        </div>
        {icon && <div className="text-3xl md:text-4xl flex-shrink-0">{icon}</div>}
      </div>
    </div>
  );
}

function ArrowUpTrendIcon() {
  return (
    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function ArrowDownTrendIcon() {
  return (
    <svg className="w-4 h-4 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17H7m0 0V7m0 0h8m0 0l-8-8-4 4-6-6" />
    </svg>
  );
}
