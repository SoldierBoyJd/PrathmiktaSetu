import DashboardLayout from "@/components/layout/DashboardLayout";

export default function MPLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
