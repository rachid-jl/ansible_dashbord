import api from './api';
import type { User } from '@/types';

interface LoginResponse {
  user: User;
  token: string;
}

export const authService = {
  async login(credentials: { username: string; password: string }): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>('/api/auth/login', credentials);
    return data;
  },

  async getProfile(): Promise<User> {
    const { data } = await api.get<User>('/api/auth/profile');
    return data;
  },
};