import { useEffect } from "react";
import useNotes from "./stores/useNotes";

function Notes() {
  const notes = useNotes((state) => state.notes);
  const fetchNotes = useNotes((state) => state.fetchNotes);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <div>
      <h3>
        Muistiinpanot
      </h3>
      {notes.length > 0 && (
        <ul>
          {notes.map((note, i) => {
            return (
              <li key= {i}>{note.text}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Notes;