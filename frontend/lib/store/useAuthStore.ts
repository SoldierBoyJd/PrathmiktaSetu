import { create } from 'zustand';
import Cookies from 'js-cookie';

interface User {
  id: number;
  email: string;
  full_name: string;
  role: 'citizen' | 'mp' | 'admin';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: !!Cookies.get('access_token'),
  isLoading: true,
  setAuth: (user, accessToken, refreshToken) => {
    Cookies.set('access_token', accessToken, { secure: true, sameSite: 'strict' });
    Cookies.set('refresh_token', refreshToken, { secure: true, sameSite: 'strict' });
    set({ user, isAuthenticated: true, isLoading: false });
  },
  setUser: (user) => set({ user, isAuthenticated: true, isLoading: false }),
  logout: () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    set({ user: null, isAuthenticated: false, isLoading: false });
  },
}));
