type Status = "open" | "in-progress" | "resolved" | "closed" | "pending";

interface StatusChipProps {
  status: Status;
  label?: string;
}

const statusConfig: Record<Status, { bg: string; text: string; label: string }> = {
  open: { bg: "bg-blue-50", text: "text-blue-700", label: "Open" },
  "in-progress": { bg: "bg-purple-50", text: "text-purple-700", label: "In Progress" },
  resolved: { bg: "bg-green-50", text: "text-green-700", label: "Resolved" },
  closed: { bg: "bg-gray-50", text: "text-gray-700", label: "Closed" },
  pending: { bg: "bg-orange-50", text: "text-orange-700", label: "Pending" },
};

export function StatusChip({ status, label }: StatusChipProps) {
  const config = statusConfig[status];
  const displayLabel = label || config.label;

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1.5 rounded-lg
        text-xs font-semibold ${config.bg} ${config.text}
      `}
    >
      {displayLabel}
    </span>
  );
}
