import { useEffect } from "react";
import useCourses from "./stores/useCourses";

function Courses() {
  const courses = useCourses((state) => state.courses);
  const fetchCourses = useCourses((state) => state.fetchCourses);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div>
      <h3>
        Kurssit
      </h3>
      {courses.length > 0 && (
        <ul>
          {courses.map((course, i) => {
            return (
              <li key= {i}>{course.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Courses;