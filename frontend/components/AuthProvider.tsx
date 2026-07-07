"use client";

/**
 * AuthProvider — runs once on client mount to hydrate the auth store.
 *
 * In this demo we reconstruct a User object from cookies so the store
 * is populated even after a page refresh without a real backend.
 *
 * In production: swap the cookie reads for a /me API call.
 */

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAuthStore } from "@/lib/store/useAuthStore";
import type { User } from "@/lib/store/useAuthStore";
import type { UserRole } from "@/lib/routes";

// Demo user objects that match the role stored in the cookie.
const DEMO_USERS: Record<string, User> = {
  mp: {
    id: 1,
    email: "raghav@parliament.in",
    full_name: "Raghav Sharma",
    role: "mp",
  },
  citizen: {
    id: 2,
    email: "priya@citizen.in",
    full_name: "Priya Sharma",
    role: "citizen",
  },
  admin: {
    id: 0,
    email: "admin@prathmikta.in",
    full_name: "Admin User",
    role: "mp", // admin sees MP portal
  },
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setUser, logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    const token = Cookies.get("access_token");
    const roleCookie = Cookies.get("user_role") as UserRole | undefined;

    if (token && roleCookie) {
      // Hydrate the in-memory store from cookie data
      const user = DEMO_USERS[roleCookie] ?? DEMO_USERS["mp"];
      setUser({ ...user, role: roleCookie });
    } else {
      // Cookie gone — mark as logged out
      useAuthStore.setState({ isLoading: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
