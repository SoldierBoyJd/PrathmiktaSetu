import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  alertCount?: number;
}

/**
 * DashboardLayout — wraps all MP/official portal pages.
 * Sidebar is fixed on desktop; on mobile it becomes a hamburger drawer.
 */
export default function DashboardLayout({
  children,
  title,
  subtitle,
  alertCount,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAF8]">
      {/* Fixed sidebar (desktop) */}
      <Sidebar />

      {/* Fixed top navbar — offset by sidebar width on lg */}
      <Navbar title={title} subtitle={subtitle} alertCount={alertCount} />

      {/* Main content area — left margin only on lg (sidebar visible) */}
      <main className="lg:ml-[260px] pt-[72px] min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
