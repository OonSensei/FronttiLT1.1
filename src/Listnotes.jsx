import useNotes from "./stores/useNotes";
import { Button } from "@/components/ui/button"

function Listnotes({coursename}){
    const notes = useNotes((state) => state.notes);
    const deletebyID = useNotes((state) => state.deleteNote);
    const filterArray = coursename ?
        notes.filter((note) => note.course.name == coursename) : notes;
    if (filterArray.length == 0 ){return(
        <p>Ei muistiinpanoja</p>
    )}
    return(
        <div>
            <ul>
                {filterArray.length > 0 && filterArray.map((note, i) =>{
                    let time = new Date(note.timestamp).toISOString()
                    return(
                        <div>
                    <li>ID:{note.course.id} Timestamp:{time}: {coursename ? "" : `${note.course.name} :`} {note.text}</li>
                    <Button onClick={() => {
                        deletebyID(note.id)
                    }}>Poista</Button>
                        </div>
                )})}
            </ul>
        </div>
    )
}

export default Listnotes