import { cn } from "@/lib/utils";

const complaints = [
  { id: "PS-0841", title: "Potholes on Main Road", ward: "Ward 12, Bhopal", category: "Roads", priority: "High", status: "In Progress", date: "20 Jun 2025, 10:34 AM" },
  { id: "PS-0847", title: "Water leakage in pipeline", ward: "Ward 8, Bhopal", category: "Water Supply", priority: "High", status: "In Progress", date: "20 Jun 2025, 09:17 AM" },
  { id: "PS-0828", title: "Garbage not collected", ward: "Ward 15, Bhopal", category: "Sanitation", priority: "Medium", status: "Pending", date: "19 Jun 2025, 05:22 PM" },
  { id: "PS-0838", title: "Drain overflow", ward: "Ward 9, Bhopal", category: "Sanitation", priority: "High", status: "In Progress", date: "19 Jun 2025, 12:09 PM" },
];

const priorityStyles: Record<string, string> = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-[#ff6900]/10 text-[#ff6900]",
  Low: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
};

const statusStyles: Record<string, string> = {
  "In Progress": "bg-[#1E88E5]/10 text-[#1E88E5]",
  Pending: "bg-[#ff6900]/10 text-[#ff6900]",
  Resolved: "bg-[#1E8E3E]/10 text-[#1E8E3E]",
};

export default function RecentComplaints() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200">
      <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100">
        <h3 className="text-sm font-semibold text-zinc-950">Recent Complaints</h3>
        <button className="text-xs text-[#ff6900] font-medium hover:underline">View all complaints →</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-zinc-50">
              {["ID", "Title", "Location", "Category", "Priority", "Status", "Reported At"].map(h => (
                <th key={h} className="px-4 py-2.5 text-left font-semibold text-[#71717b] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {complaints.map(c => (
              <tr key={c.id} className="hover:bg-zinc-50 transition-colors">
                <td className="px-4 py-2.5 font-mono font-medium text-[#ff6900]">{c.id}</td>
                <td className="px-4 py-2.5 font-medium text-zinc-950 max-w-[160px] truncate">{c.title}</td>
                <td className="px-4 py-2.5 text-[#71717b]">{c.ward}</td>
                <td className="px-4 py-2.5 text-zinc-700">{c.category}</td>
                <td className="px-4 py-2.5">
                  <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", priorityStyles[c.priority])}>
                    {c.priority}
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", statusStyles[c.status])}>
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-[#71717b] whitespace-nowrap">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
