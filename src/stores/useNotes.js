import { create } from "zustand";

  const useNotes = create((set) => ({
    notes: [],
        addNotes: (n) => set((state) => ({ notes: [...state.notes, n] })),
    fetchNotes: async () => {
        try {
            const response = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            set({notes:result})
          }
    catch (error) {
        console.error(error.message)
      }},
      deleteNote: (id) => set((state) => ({
        notes: state.notes.filter((sid) => sid.id != id)
      }))
  }));

export default useNotes;