"use client";

import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Column {
  id: string;
  label: string;
  width?: string;
  render?: (value: any) => ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onRowClick?: (row: any) => void;
  emptyMessage?: string;
  striped?: boolean;
}

export function DataTable({
  columns,
  data,
  onRowClick,
  emptyMessage = "No data available",
  striped = true,
}: DataTableProps) {
  if (data.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-border p-8 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={`px-6 py-4 text-left text-sm font-semibold text-foreground ${
                    column.width || ""
                  }`}
                >
                  {column.label}
                </th>
              ))}
              {onRowClick && <th className="px-6 py-4 w-10" />}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                onClick={() => onRowClick?.(row)}
                className={`
                  border-b border-border last:border-b-0
                  transition-colors duration-150
                  ${
                    striped && idx % 2 === 1
                      ? "bg-muted/30"
                      : "bg-white"
                  }
                  ${onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
                `}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={`px-6 py-4 text-sm text-foreground ${
                      column.width || ""
                    }`}
                  >
                    {column.render
                      ? column.render(row[column.id])
                      : row[column.id]}
                  </td>
                ))}
                {onRowClick && (
                  <td className="px-6 py-4">
                    <ChevronRight size={18} className="text-muted-foreground" />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
