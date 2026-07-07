/**
 * Central route configuration for Prathmikta Setu.
 * Every page is categorized as public, mp-only, or citizen-only.
 */

export type UserRole = "mp" | "citizen" | "admin";

// ─── Public routes (no auth required) ───────────────────────────────────────
export const PUBLIC_ROUTES = [
    "/",
    "/about",
    "/contact",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/transparency",
    "/issues",
    "/track",
    "/submit-complaint",
    "/unauthorized",
];

// ─── MP / Official routes ────────────────────────────────────────────────────
export interface NavItem {
    href: string;
    label: string;
    icon: string; // lucide icon name — resolved in Sidebar
}

export const MP_ROUTES = [
    "/dashboard",
    "/heatmap",
    "/analytics",
    "/complaints",
    "/recommendations",
    "/priority-score",
    "/budget-optimizer",
    "/emergency-alerts",
    "/digital-twin",
    "/reports",
    "/settings",
    "/mp/profile",
];

export const MP_NAV_ITEMS = [
    { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
    { href: "/heatmap", label: "Heatmap", icon: "Map" },
    { href: "/analytics", label: "Analytics", icon: "BarChart3" },
    { href: "/complaints", label: "Complaints", icon: "AlertCircle" },
    { href: "/recommendations", label: "Recommendations", icon: "Lightbulb" },
    { href: "/priority-score", label: "Priority Scores", icon: "TrendingUp" },
    { href: "/budget-optimizer", label: "Budget Optimizer", icon: "DollarSign" },
    { href: "/emergency-alerts", label: "Emergency Alerts", icon: "AlertTriangle" },
    { href: "/digital-twin", label: "Digital Twin", icon: "Globe" },
    { href: "/reports", label: "Reports", icon: "FileText" },
    { href: "/settings", label: "Settings", icon: "Settings" },
] as const;

// ─── Citizen routes ──────────────────────────────────────────────────────────
export const CITIZEN_ROUTES = [
    "/citizen/dashboard",
    "/citizen/issues",
    "/citizen/submit",
    "/citizen/track",
    "/citizen/transparency",
    "/citizen/profile",
];

export const CITIZEN_NAV_ITEMS = [
    { href: "/citizen/dashboard", label: "Dashboard" },
    { href: "/citizen/issues", label: "Issues" },
    { href: "/citizen/submit", label: "Submit" },
    { href: "/citizen/track", label: "Track" },
    { href: "/citizen/transparency", label: "Transparency" },
] as const;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Default landing page after login, per role. */
export function getDefaultRoute(role: UserRole): string {
    if (role === "citizen") return "/citizen/dashboard";
    return "/dashboard"; // mp or admin
}

/** Check if a pathname belongs to an MP-only area. */
export function isMPRoute(pathname: string): boolean {
    return MP_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
}

/** Check if a pathname belongs to a citizen-only area. */
export function isCitizenRoute(pathname: string): boolean {
    return CITIZEN_ROUTES.some(
        (r) => pathname === r || pathname.startsWith(r + "/")
    );
}

/** Check if a pathname is publicly accessible. */
export function isPublicRoute(pathname: string): boolean {
    return PUBLIC_ROUTES.some(
        (r) => pathname === r || pathname.startsWith(r + "/")
    );
}
