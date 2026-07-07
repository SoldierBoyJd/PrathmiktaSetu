import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Inlined route lists (Edge Runtime cannot import from @/lib/routes) ──────

const MP_ROUTES = [
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

const CITIZEN_ROUTES = [
    "/citizen/dashboard",
    "/citizen/issues",
    "/citizen/submit",
    "/citizen/track",
    "/citizen/transparency",
    "/citizen/profile",
];

function isMPRoute(pathname: string): boolean {
    return MP_ROUTES.some((r) => pathname === r || pathname.startsWith(r + "/"));
}

function isCitizenRoute(pathname: string): boolean {
    return CITIZEN_ROUTES.some(
        (r) => pathname === r || pathname.startsWith(r + "/")
    );
}

// ─────────────────────────────────────────────────────────────────────────────

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("access_token")?.value;
    const role = request.cookies.get("user_role")?.value; // "mp" | "citizen" | "admin"

    const mpRoute = isMPRoute(pathname);
    const citizenRoute = isCitizenRoute(pathname);

    // ── 1. Not logged in → redirect to /login ─────────────────────────────────
    if ((mpRoute || citizenRoute) && !token) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        url.searchParams.set("from", pathname);
        return NextResponse.redirect(url);
    }

    // ── 2. Citizen tries to access MP pages → unauthorized ────────────────────
    if (mpRoute && token && role === "citizen") {
        const url = request.nextUrl.clone();
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
    }

    // ── 3. MP tries to access citizen pages → redirect to their dashboard ─────
    if (citizenRoute && token && (role === "mp" || role === "admin")) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths EXCEPT:
         * - _next/static, _next/image (Next.js internals)
         * - favicon.ico, public assets
         * - api routes
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
