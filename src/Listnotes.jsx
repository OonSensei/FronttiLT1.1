import useNotes from "./stores/useNotes";

function Listnotes({coursename}){
    const notes = useNotes((state) => state.notes);
    const filterArray = coursename ?
        notes.filter((note) => note.course.name == coursename) : notes;

    return(
        <div>
            <ul>
                {filterArray.length > 0 && filterArray.map((note, i) =>{
                    let time = new Date(note.timestamp).toISOString()
                    return(
                    <li>{time}: {coursename ? "" : `${note.course.name} :`} {note.text}</li> 
                )})}
            </ul>
        </div>
    )
}

export default Listnotes