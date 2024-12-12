import useNotes from "./stores/useNotes";

function Listnotes({coursename}){
    const notes = useNotes((state) => state.notes);
    const filterArray = notes.filter((note) => note.course.name == coursename)

    return(
        <div>
            <ul>
                {filterArray.length > 0 && filterArray.map((note, i) =>{return(
                    <li>{note.text}</li>
                )})}
            </ul>
        </div>
    )
}

export default Listnotes