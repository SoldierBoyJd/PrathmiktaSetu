import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Sidebar />
      <Navbar />
      <main className="ml-56 pt-14 min-h-screen">
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}
