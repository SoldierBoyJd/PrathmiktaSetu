import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Improve road conditions at Ward 12",
    ward: "Ward 12",
    priority: "High Impact",
    priorityColor: "text-[#E74C3C] bg-[#FEF2F2]",
  },
  {
    id: 2,
    title: "Fix water supply leakages in Ward 8",
    ward: "Ward 8",
    priority: "High Impact",
    priorityColor: "text-[#E74C3C] bg-[#FEF2F2]",
  },
  {
    id: 3,
    title: "Repair street lights at Ward 5",
    ward: "Ward 5",
    priority: "Medium Impact",
    priorityColor: "text-[#F5831F] bg-[#FFF7E6]",
  },
];

export default function AIPriorityRecommendations() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0]">
        <h3 className="text-sm font-semibold text-[#1A2332]">AI Priority Recommendations</h3>
        <button className="text-xs text-[#2D7A3A] font-medium hover:underline">
          View all →
        </button>
      </div>
      <div className="p-3 space-y-2">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-[#F8FAFC] hover:bg-[#F0FDF4] transition-colors cursor-pointer group border border-transparent hover:border-[#C6E6CB]"
          >
            <div className="w-6 h-6 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-[#2D7A3A]">
              {rec.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#1A2332] truncate">{rec.title}</p>
              <p className="text-[10px] text-[#A0AEC0] mt-0.5">{rec.ward}</p>
            </div>
            <span
              className={cn(
                "text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0",
                rec.priorityColor
              )}
            >
              {rec.priority}
            </span>
            <ArrowRight
              size={12}
              className="text-[#A0AEC0] group-hover:text-[#2D7A3A] transition-colors flex-shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
