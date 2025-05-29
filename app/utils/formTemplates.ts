import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormBuilderStore {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const useFormBuilderStore = create<FormBuilderStore>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "form-builder-store" }
  )
);