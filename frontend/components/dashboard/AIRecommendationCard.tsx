import { Lightbulb, TrendingUp } from "lucide-react";

interface AIRecommendationCardProps {
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  actionable: boolean;
  icon?: string;
  onClick?: () => void;
}

export function AIRecommendationCard({
  title,
  description,
  impact,
  actionable,
  icon,
  onClick,
}: AIRecommendationCardProps) {
  const impactColors = {
    high: { bg: "bg-red-50", text: "text-red-700", label: "High Impact" },
    medium: { bg: "bg-orange-50", text: "text-orange-700", label: "Medium Impact" },
    low: { bg: "bg-blue-50", text: "text-blue-700", label: "Low Impact" },
  };

  const colors = impactColors[impact];

  return (
    <div
      onClick={onClick}
      className={`
        bg-gradient-to-br from-white to-primary/5 border border-primary/10
        rounded-2xl p-5 transition-all duration-200
        hover:shadow-lg hover:border-primary/20
        ${onClick ? "cursor-pointer" : ""}
      `}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
          <Lightbulb size={20} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1 text-sm">
            {title}
          </h4>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-2">
            <span className={`
              inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
              text-xs font-medium ${colors.bg} ${colors.text}
            `}>
              <TrendingUp size={14} />
              {colors.label}
            </span>
            {actionable && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-lg
                bg-green-50 text-green-700">
                Actionable
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
