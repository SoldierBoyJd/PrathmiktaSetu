"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "May 20", total: 950, resolved: 700, pending: 250 },
  { month: "May 27", total: 1100, resolved: 820, pending: 280 },
  { month: "Jun 3", total: 1350, resolved: 1000, pending: 350 },
  { month: "Jun 10", total: 1200, resolved: 950, pending: 250 },
  { month: "Jun 17", total: 1500, resolved: 1100, pending: 400 },
  { month: "Jun 20", total: 1420, resolved: 1050, pending: 370 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-3 text-xs">
        <p className="font-semibold text-[#1A2332] mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 mb-1">
            <div
              className="w-2 h-2 rounded-full"
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
  return null;
};

export default function ComplaintsChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-[#1A2332]">Complaints Trend</h3>
        <select className="text-xs border border-[#E2E8F0] rounded-lg px-2 py-1 text-[#4A5568] bg-white focus:outline-none focus:ring-1 focus:ring-[#2D7A3A]">
          <option>30 Days</option>
          <option>7 Days</option>
          <option>90 Days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 10, fill: "#A0AEC0" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#A0AEC0" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
          />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#2D7A3A"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="resolved"
            stroke="#2980B9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="pending"
            stroke="#F5831F"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
