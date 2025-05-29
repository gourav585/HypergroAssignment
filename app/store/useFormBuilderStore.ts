import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FieldType = "text" | "textarea" | "dropdown" | "checkbox" | "date";

export interface FieldOption {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
  options?: FieldOption[];
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

interface FormBuilderStore {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;

  fields: FormField[];
  setFields: (fields: FormField[]) => void;
  addField: (field: FormField) => void;
  updateField: (id: string, update: Partial<FormField>) => void;
  removeField: (id: string) => void;
  reorderFields: (from: number, to: number) => void;

  // For bonus: undo/redo
  history: FormField[][];
  future: FormField[][];
  undo: () => void;
  redo: () => void;
}

export const useFormBuilderStore = create<FormBuilderStore>()(
  persist(
    (set, get) => ({
      theme: "light",
      setTheme: (theme) => set({ theme }),
      fields: [],
      setFields: (fields) => set({ fields }),
      addField: (field) => {
        const prev = get().fields;
        set({
          history: [...get().history, prev],
          fields: [...prev, field],
          future: [],
        });
      },
      updateField: (id, update) => {
        const prev = get().fields;
        set({
          history: [...get().history, prev],
          fields: prev.map((f) =>
            f.id === id ? { ...f, ...update } : f
          ),
          future: [],
        });
      },
      removeField: (id) => {
        const prev = get().fields;
        set({
          history: [...get().history, prev],
          fields: prev.filter((f) => f.id !== id),
          future: [],
        });
      },
      reorderFields: (from, to) => {
        const prev = [...get().fields];
        const [moved] = prev.splice(from, 1);
        prev.splice(to, 0, moved);
        set({
          history: [...get().history, get().fields],
          fields: prev,
          future: [],
        });
      },
      // Undo/Redo
      history: [],
      future: [],
      undo: () => {
        const { history, fields, future } = get();
        if (history.length === 0) return;
        const prev = history[history.length - 1];
        set({
          fields: prev,
          history: history.slice(0, -1),
          future: [fields, ...future],
        });
      },
      redo: () => {
        const { history, fields, future } = get();
        if (future.length === 0) return;
        const next = future[0];
        set({
          fields: next,
          history: [...history, fields],
          future: future.slice(1),
        });
      },
    }),
    { name: "form-builder-state" }
  )
);