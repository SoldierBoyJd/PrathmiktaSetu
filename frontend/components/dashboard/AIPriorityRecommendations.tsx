import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const recommendations = [
  { id: 1, title: "Improve road conditions at Ward 12", ward: "Ward 12", priority: "High Impact", priorityColor: "text-red-600 bg-red-50" },
  { id: 2, title: "Fix water supply leakages in Ward 8", ward: "Ward 8", priority: "High Impact", priorityColor: "text-red-600 bg-red-50" },
  { id: 3, title: "Repair street lights at Ward 5", ward: "Ward 5", priority: "Medium Impact", priorityColor: "text-[#ff6900] bg-[#ff6900]/10" },
];

export default function AIPriorityRecommendations() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 h-full">
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
        <h3 className="text-sm font-semibold text-zinc-950">AI Priority Recommendations</h3>
        <button className="text-xs text-[#ff6900] font-medium hover:underline">View all →</button>
      </div>
      <div className="p-3 space-y-2">
        {recommendations.map((rec) => (
          <div key={rec.id} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 hover:bg-orange-50 transition-colors cursor-pointer group border border-transparent hover:border-[#ff6900]/20">
            <div className="w-6 h-6 rounded-full bg-[#ff6900]/10 flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-[#ff6900]">
              {rec.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-zinc-950 truncate">{rec.title}</p>
              <p className="text-[10px] text-[#71717b] mt-0.5">{rec.ward}</p>
            </div>
            <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0", rec.priorityColor)}>
              {rec.priority}
            </span>
            <ArrowRight size={12} className="text-[#71717b] group-hover:text-[#ff6900] transition-colors flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
