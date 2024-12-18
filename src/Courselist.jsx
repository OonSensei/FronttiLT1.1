import { useState, useEffect } from "react";
import useCourses from "./stores/useCourses";
import useNotes from "./stores/useNotes";
import Listnotes from "./Listnotes";
import Notes from "./Notes";

function Courselist() {
    const courses = useCourses((state) => state.courses);


    const [coursename, setCoursename] = useState("");
    



    return(
        <div>
            <select value={coursename} onChange={(e) => setCoursename(e.target.value)}>
                <option value="">Kurssit</option>
                {
                    courses.map((c, i) => (
                        
                        <option key={i} value = {c.name}>{c.name}</option>
                    ))
                }               
            </select>
            <Listnotes coursename={coursename}/>
        </div>
    )
}

export default Courselist;