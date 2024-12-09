import { create } from "zustand";

const useCourses = create((set) => ({
    courses: [],
        addCourses: (c) => set((state) => ({ courses: [...state.courses, c] })),
    fetchCourses: async () => {
        try {
            const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            set({courses:result})
          }
    catch (error) {
        console.error(error.message)
      }}
  }));

export default useCourses;