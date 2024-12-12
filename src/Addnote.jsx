import {useState, useEffect} from "react";
import useNotes from "./stores/useNotes";
import useCourses from "./stores/useCourses";
import Listnotes from "./Listnotes";

function AddShit(){
    const [coursename, setCoursename] = useState("");
    const [note, setNote] = useState("");
    const addNotes = useNotes((state) => state.addNotes)
    const courses = useCourses((state) => state.courses);
    const fetchCourses = useCourses((state) => state.fetchCourses);
    const fetchNotes = useNotes((state) => state.fetchNotes);

    useEffect(() => {
        fetchCourses();
        fetchNotes();
    }, []);
  

    const handleSave = () => {
        if (note.length < 1) return
        if (coursename == "valitse arvo") return
        const time = new Date().toISOString()
        const p = {"text": note, "time": time, "course": {"name": coursename}};
        
        setCoursename("");
        setNote("");

        addNotes(p);
    };


    return (
        <div>
            <select coursename="kurssi" id="kurssi" onChange={(e) => setCoursename(e.target.value)}>
                <option> valitse arvo </option>
                {
                    courses.map((p) => (
                        
                        <option value = {p.name}>{p.name}</option>
                    ))
                }
            </select>

            <textarea
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="muistiinpanot"
            />
            <button onClick={handleSave}>Save</button>
            <Listnotes coursename={coursename}/>
        </div>
    );
    
}

export default AddShit;
