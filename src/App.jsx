import { useState, useEffect } from 'react'
import './App.css'
import Notes from './Notes'
import Courses from './Courses'
import Courselist from './Courselist'
import AddShit from './Addnote'
import CreateCourse from './CreateCourse'
import Header from './Header'
import { Routes, Route, Outlet } from 'react-router-dom'
import useNotes from "./stores/useNotes";
import useCourses from "./stores/useCourses";

function App() {

  const fetchCourses = useCourses((state) => state.fetchCourses);
  const fetchNotes = useNotes((state) => state.fetchNotes);

  useEffect(() => {
      fetchCourses();
      fetchNotes();
  }, []);

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route pathpath="/" element={<Layout />}></Route>
          {/* <Route index element={<MainBody />} /> */}
            <Route path="/create" element={<CreateCourse/>} />
            <Route path="/list" element={<Courselist/>} />
            <Route path="/add" element={<AddShit/>} />
        </Routes>
      {/* <Courses/> */}
      {/* <Notes/> */}
      {/* <Courselist/>
      <AddShit/>
      <CreateCourse/> */}
      </div>
    </>
  )
}

function Layout(){
  return(
    <main>
      <Outlet/>
    </main>
  );
}


export default App
