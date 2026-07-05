import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  fullHeight?: boolean;
}

export function ChartCard({
  title,
  subtitle,
  children,
  footer,
  fullHeight = false,
}: ChartCardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl border border-border p-6
        flex flex-col ${fullHeight ? "h-full" : ""}
      `}
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      <div className="flex-1 min-h-0">
        {children}
      </div>

      {footer && (
        <div className="mt-6 pt-6 border-t border-border">
          {footer}
        </div>
      )}
    </div>
  );
}
