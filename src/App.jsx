import Homepage from './HomePage/completeHomepage.jsx'
import SignupForm from "./Forms/signupForm.jsx"
import Dashboard from './Pages/dashboard.jsx'
import ContentHome from './dashboardLayout/content.jsx'
import Applications from './Pages/applications.jsx'
import AddNewJob from './Pages/addNewJob.jsx'
import Calender from './Pages/calender.jsx'
import TaskPage from './Pages/taskPage.jsx'
import Analytics from './Pages/analytics.jsx'
import NotesPage from './Pages/notesPage.jsx'
import Navbar from './dashboardLayout/dashboardNavbar.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';


export default function App(){


  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={<SignupForm/>}/>


      <Route path ="/dashboard" element={<Dashboard/>}>

        <Route index element={<ContentHome />} />
        <Route path="applications" element={<Applications />} />
        <Route path="addNewJob" element={<AddNewJob/>} />
        <Route path="calendar" element={<Calender/>} />
        <Route path="taskPage" element={<TaskPage/>}/>
        <Route path="analytics" element={<Analytics />} />
        <Route path="notesPage" element={<NotesPage />} />

      </Route>  
      

    </Routes>
    </BrowserRouter>
    </>
      
  )
}