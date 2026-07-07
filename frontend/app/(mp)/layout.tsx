/**
 * (mp) route group layout — pass-through only.
 *
 * The standalone MP pages (/dashboard, /analytics, etc.) each include
 * DashboardLayout internally. This group exists solely for organisational
 * purposes and must NOT wrap children in any layout to avoid double-wrapping.
 */
export default function MPRouteGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
