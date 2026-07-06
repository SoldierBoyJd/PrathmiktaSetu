import { cn } from "@/lib/utils";

const complaints = [
  {
    id: "PS-0841",
    title: "Potholes on Main Road",
    ward: "Ward 12, Bhopal",
    category: "Roads",
    priority: "High",
    status: "In Progress",
    date: "20 Jun 2025, 10:34 AM",
  },
  {
    id: "PS-0847",
    title: "Water leakage in pipeline",
    ward: "Ward 8, Bhopal",
    category: "Water Supply",
    priority: "Decline",
    status: "In Progress",
    date: "20 Jun 2025, 09:17 AM",
  },
  {
    id: "PS-0828",
    title: "Garbage not collected",
    ward: "Ward 15, Bhopal",
    category: "Sanitation",
    priority: "Medium",
    status: "Pending",
    date: "19 Jun 2025, 05:22 PM",
  },
  {
    id: "PS-0838",
    title: "Drain overflow",
    ward: "Ward 9, Bhopal",
    category: "Sanitation",
    priority: "High",
    status: "In Progress",
    date: "19 Jun 2025, 12:09 PM",
  },
];

const priorityStyles: Record<string, string> = {
  High: "bg-[#FEF2F2] text-[#E74C3C]",
  Medium: "bg-[#FFF7E6] text-[#F5831F]",
  Low: "bg-[#F0FDF4] text-[#27AE60]",
  Decline: "bg-[#EBF8FF] text-[#2980B9]",
};

const statusStyles: Record<string, string> = {
  "In Progress": "bg-[#EBF8FF] text-[#2980B9]",
  Pending: "bg-[#FFF7E6] text-[#F5831F]",
  Resolved: "bg-[#F0FDF4] text-[#27AE60]",
};

export default function RecentComplaints() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#F0F0F0]">
        <h3 className="text-sm font-semibold text-[#1A2332]">Recent Complaints</h3>
        <button className="text-xs text-[#2D7A3A] font-medium hover:underline">
          View all complaints →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#F8FAFC]">
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Category
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Priority
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-2.5 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">
                Reported At
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F0F0F0]">
            {complaints.map((c) => (
              <tr key={c.id} className="hover:bg-[#F8FAFC] transition-colors">
                <td className="px-4 py-2.5 font-mono font-medium text-[#2D7A3A]">
                  {c.id}
                </td>
                <td className="px-4 py-2.5 text-[#1A2332] font-medium max-w-[180px] truncate">
                  {c.title}
                </td>
                <td className="px-4 py-2.5 text-[#718096]">{c.ward}</td>
                <td className="px-4 py-2.5 text-[#4A5568]">{c.category}</td>
                <td className="px-4 py-2.5">
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                      priorityStyles[c.priority] || "bg-[#F5F7FA] text-[#718096]"
                    )}
                  >
                    {c.priority}
                  </span>
                </td>
                <td className="px-4 py-2.5">
                  <span
                    className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-semibold",
                      statusStyles[c.status] || "bg-[#F5F7FA] text-[#718096]"
                    )}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-[#718096] whitespace-nowrap">
                  {c.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
