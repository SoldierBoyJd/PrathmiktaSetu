"use client";

import { useState } from "react";

// Mock heatmap grid – colour intensity represents complaint density
const GRID_ROWS = 10;
const GRID_COLS = 14;

// Deterministic pseudo-random so SSR and client match
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateHeatData() {
  const center = { r: 4.5, c: 7 };
  const rows: number[][] = [];
  let seed = 0;
  for (let r = 0; r < GRID_ROWS; r++) {
    const row: number[] = [];
    for (let c = 0; c < GRID_COLS; c++) {
      const dist = Math.sqrt(
        Math.pow((r - center.r) * 1.2, 2) + Math.pow((c - center.c) * 0.9, 2)
      );
      const base = Math.max(0, 1 - dist / 5.5);
      const noise = seededRandom(seed++) * 0.3;
      row.push(Math.min(1, base + noise));
    }
    rows.push(row);
  }
  return rows;
}

// Computed once at module level — deterministic, no hydration mismatch
const heatData = generateHeatData();

function cellColor(val: number) {
  if (val < 0.15) return "bg-[#F0FDF4]";
  if (val < 0.3) return "bg-[#86EFAC]";
  if (val < 0.5) return "bg-[#4ADE80]";
  if (val < 0.65) return "bg-[#F5831F]/70";
  if (val < 0.8) return "bg-[#F5831F]";
  return "bg-[#E74C3C]";
}

const constituencies = ["All Constituencies", "Ward 1-5", "Ward 6-10", "Ward 11-15"];

export default function IssueHeatmap() {
  const [selected, setSelected] = useState("All Constituencies");

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[#1A2332]">AI Issue Heatmap</h3>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="text-xs border border-[#E2E8F0] rounded-lg px-2 py-1 text-[#4A5568] bg-white focus:outline-none focus:ring-1 focus:ring-[#2D7A3A]"
        >
          {constituencies.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Heatmap grid */}
      <div className="rounded-lg overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC]">
        {heatData.map((row, ri) => (
          <div key={ri} className="flex">
            {row.map((val, ci) => (
              <div
                key={ci}
                className={`flex-1 h-[18px] ${cellColor(val)} transition-colors cursor-pointer hover:opacity-80`}
                title={`Intensity: ${(val * 100).toFixed(0)}%`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-3">
        <span className="text-[10px] text-[#A0AEC0]">Low</span>
        <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-[#F0FDF4] via-[#4ADE80] via-[#F5831F] to-[#E74C3C]" />
        <span className="text-[10px] text-[#A0AEC0]">High</span>
      </div>
    </div>
  );
}
