import { create } from "zustand";
import Cookies from "js-cookie";
import type { UserRole } from "@/lib/routes";

export interface User {
  id: number;
  email: string;
  full_name: string;
  role: UserRole;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  /** Full login — sets user + cookies */
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  /** Hydrate user without changing token */
  setUser: (user: User) => void;
  logout: () => void;
}

const COOKIE_OPTS: Cookies.CookieAttributes = {
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  expires: 7, // days
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: !!Cookies.get("access_token"),
  isLoading: true,

  setAuth: (user, accessToken, refreshToken) => {
    Cookies.set("access_token", accessToken, COOKIE_OPTS);
    Cookies.set("refresh_token", refreshToken, COOKIE_OPTS);
    // Store role separately so middleware / server can read it easily
    Cookies.set("user_role", user.role, COOKIE_OPTS);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  setUser: (user) => {
    Cookies.set("user_role", user.role, COOKIE_OPTS);
    set({ user, isAuthenticated: true, isLoading: false });
  },

  logout: () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("user_role");
    set({ user: null, isAuthenticated: false, isLoading: false });
  },
}));
