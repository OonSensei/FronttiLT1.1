import { useState, useEffect } from "react";
import useCourses from "./stores/useCourses";
import useNotes from "./stores/useNotes";

function Courselist() {
    const fetchCourses = useCourses((state) => state.fetchCourses);
    const courses = useCourses((state) => state.courses);
    const fetchNotes = useNotes((state) => state.fetchNotes);
    const notes = useNotes((state) => state.notes);

    const [coursename, setCoursename] = useState("");
    const [notesname, setNotesname] = useState("");
    
    useEffect(() => {
        fetchCourses();
        fetchNotes();
    }, []);

const filterArray = notes.filter((note) => note.course.name == coursename)


    return(
        <div>
            <select value={coursename} onChange={(e) => setCoursename(e.target.value)}>
                <option>Kurssit</option>
                {
                    courses.map((c, i) => (
                        
                        <option key={i} value = {c.name}>{c.name}</option>
                    ))
                }               
            </select>
            <ul>
                {filterArray.length > 0 && filterArray.map((note, i) =>{return(
                    <li>{note.text}</li>
                )})}
            </ul>
        </div>
    )
}

export default Courselist;