"use client";

import * as React from "react";
import { ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  { label: string; color: string }
>;

interface ChartContainerProps {
  config: ChartConfig;
  children: React.ReactNode;
  className?: string;
}

export function ChartContainer({
  config,
  children,
  className,
}: ChartContainerProps) {
  // Inject CSS variables for each configured key
  const style = Object.entries(config).reduce<Record<string, string>>(
    (acc, [key, val]) => {
      acc[`--color-${key}`] = val.color;
      return acc;
    },
    {}
  );

  return (
    <div className={cn("w-full", className)} style={style as React.CSSProperties}>
      <ResponsiveContainer width="100%" height="100%">
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 shadow-lg text-xs">
      {label && <p className="font-semibold text-[#1A2332] mb-1.5">{label}</p>}
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 mb-0.5">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: entry.color }}
          />
          <span className="text-[#718096] capitalize">{entry.name}:</span>
          <span className="font-semibold text-[#1A2332]">
            {entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
