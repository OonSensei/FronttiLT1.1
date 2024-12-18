import {useState, useEffect} from "react";
import useNotes from "./stores/useNotes";
import useCourses from "./stores/useCourses";
import Listnotes from "./Listnotes";

function AddShit(){
    const [coursename, setCoursename] = useState("");
    const [note, setNote] = useState("");
    const [newnotes, setNewnotes] = useState([]);
    const addNotes = useNotes((state) => state.addNotes)
    const courses = useCourses((state) => state.courses);

  

    const handleSave = () => {
        if (note.length < 1) return
        if (coursename == "") return
        const time = new Date().toISOString()
        const p = {"text": note, "timestamp": time, "course": {"name": coursename}};
        
        setNote("");

        addNotes(p);
        setNewnotes([...newnotes, p]);
    };

    const handleBack = () => {
        setCoursename("");
        setNote("");
        setNewnotes([]);
    }
    if(courses.length == 0){return(<p>ei kurssia ei pääsyä</p>)}
    return (
        <div>
            <select value={coursename} id="kurssi" onChange={(e) => setCoursename(e.target.value)}disabled={coursename !== ""}>
                <option>valitse arvo</option>
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
            <button onClick={handleBack}>Back</button>
            <ul>
                {newnotes.map((n) => {return(
                    <li>{n.text}  </li>
                )})}
            </ul>
        </div>
    );
    
}

export default AddShit;
