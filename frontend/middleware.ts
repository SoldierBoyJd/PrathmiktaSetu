import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isMPRoute, isCitizenRoute } from "./lib/routes";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("access_token")?.value;
    const role = request.cookies.get("user_role")?.value; // "mp" | "citizen" | "admin"

    const mpRoute = isMPRoute(pathname);
    const citizenRoute = isCitizenRoute(pathname);

    // ── 1. Not logged in → redirect to /login ──────────────────────────────────
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
