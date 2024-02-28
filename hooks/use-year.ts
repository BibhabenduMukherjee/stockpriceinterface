import { create } from "zustand";

interface FileSelectedYear {
  year: string;
  setYear: (year: string) => void;
}

export const useFileSelectedYear = create<FileSelectedYear>((set) => ({
  year: "",
  setYear: (s: string) => set({ year: s }),
}));
