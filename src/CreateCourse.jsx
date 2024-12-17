import { useState, useEffect } from "react";
import useCourses from "./stores/useCourses";
import Courses from "./Courses";

function CreateCourse(){
    const [coursename, setCoursename] = useState("");
    const addCourses = useCourses((state) => state.addCourses)
    const courses = useCourses((state) => state.courses);
    const [tulostus, setTulostus] = useState("");

    const handleSave = () => {
        const newID = courses.length + 1
        if (coursename.length < 1) return
        const newCourse = {name: coursename, id: newID};
        addCourses(newCourse);
        setCoursename("");
        setTulostus(`Opintojakso ${coursename} lisätty ID:llä ${newID}`) 
    };

    return(
        <div>
            <label htmlFor="course">Course</label>
            <input 
            type="text"
            id="course"
            value={ coursename } 
            onChange={(c) => setCoursename(c.target.value)}
            placeholder="kurssi"
            />
            <button onClick={handleSave}>Add</button>
            {tulostus !="" && <p>{tulostus}</p>}
        </div>
    )
}

export default CreateCourse;