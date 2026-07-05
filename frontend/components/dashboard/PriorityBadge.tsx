type Priority = "critical" | "high" | "medium" | "low";

interface PriorityBadgeProps {
  priority: Priority;
  label?: string;
}

const priorityConfig: Record<Priority, { bg: string; text: string; label: string }> = {
  critical: { bg: "bg-red-50", text: "text-red-700", label: "Critical" },
  high: { bg: "bg-orange-50", text: "text-orange-700", label: "High" },
  medium: { bg: "bg-yellow-50", text: "text-yellow-700", label: "Medium" },
  low: { bg: "bg-green-50", text: "text-green-700", label: "Low" },
};

export function PriorityBadge({ priority, label }: PriorityBadgeProps) {
  const config = priorityConfig[priority];
  const displayLabel = label || config.label;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
        text-xs font-semibold ${config.bg} ${config.text}
      `}
    >
      <span className="w-2 h-2 rounded-full bg-current" />
      {displayLabel}
    </span>
  );
}
