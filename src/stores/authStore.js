import { create } from "zustand";
import { httpRequest } from "../services/httpRequest";

export const useAuth = create((set) => {
  return {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: JSON.parse(localStorage.getItem("token")) || {},
    setToken: (token) => {
      localStorage.setItem("token", JSON.stringify(token));
      set({ token });
    },
    getUser: async () => {
      try {
        const response = await httpRequest.get("/profile");
        const user = response.data;
        return user;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    setUser: (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      set({ user });
    },
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      set({user: null});
      set({token: null});
    }
  };
});