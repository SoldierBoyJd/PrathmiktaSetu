"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "May 20", total: 950, resolved: 700, pending: 250 },
  { month: "May 27", total: 1100, resolved: 820, pending: 280 },
  { month: "Jun 3", total: 1350, resolved: 1000, pending: 350 },
  { month: "Jun 10", total: 1200, resolved: 950, pending: 250 },
  { month: "Jun 17", total: 1500, resolved: 1100, pending: 400 },
  { month: "Jun 20", total: 1420, resolved: 1050, pending: 370 },
];

export default function ComplaintsChart() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-zinc-950">Complaints Trend</h3>
        <select className="text-xs border border-zinc-200 rounded-lg px-2 py-1 text-[#71717b] bg-white focus:outline-none focus:ring-1 focus:ring-[#ff6900]">
          <option>30 Days</option>
          <option>7 Days</option>
          <option>90 Days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={185}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#71717b" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e4e4e7" }} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
          <Line type="monotone" dataKey="total" name="Total" stroke="#ff6900" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="resolved" name="Resolved" stroke="#1E8E3E" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="pending" name="Pending" stroke="#1E88E5" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
