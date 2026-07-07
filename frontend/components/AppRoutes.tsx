"use client";

/**
 * AppRoutes — role-aware navigation guard component.
 *
 * Usage: wrap any layout that needs role-gating.
 * Shows a loading state while auth hydrates, then either renders children
 * or redirects the user to their correct portal.
 */

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { isMPRoute, isCitizenRoute, getDefaultRoute } from "@/lib/routes";

interface AppRoutesProps {
  children: React.ReactNode;
}

export default function AppRoutes({ children }: AppRoutesProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (isLoading) return;

    // Not authenticated — middleware handles redirect, but belt-and-suspenders here
    if (!isAuthenticated) return;

    const role = user?.role;
    if (!role) return;

    // Citizen trying to access MP area
    if (isMPRoute(pathname) && role === "citizen") {
      router.replace(getDefaultRoute("citizen"));
      return;
    }

    // MP trying to access citizen area
    if (isCitizenRoute(pathname) && (role === "mp" || role === "admin")) {
      router.replace(getDefaultRoute("mp"));
      return;
    }
  }, [isAuthenticated, isLoading, pathname, router, user]);

  // While auth store is hydrating, show a minimal skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAF8] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="size-10 rounded-xl bg-[#ff6900] animate-pulse" />
          <div className="text-sm text-[#71717b]">Loading…</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
