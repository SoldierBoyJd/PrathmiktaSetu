/**
 * app/mp layout — pass-through only.
 *
 * Pages under /mp/* re-export from standalone pages that already include
 * DashboardLayout. This layout must NOT add DashboardLayout again.
 */
export default function MPGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
