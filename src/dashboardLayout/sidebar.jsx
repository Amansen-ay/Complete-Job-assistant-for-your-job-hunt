import Logo from '../assets/logo.png'
import Dashboard from '../assets/sidebarIcons/dashboard.svg'
import Application from '../assets/sidebarIcons/application.svg'
import Addnew from '../assets/sidebarIcons/addNew.svg'
import Calendar from '../assets/sidebarIcons/calendar.svg'
import Tasks from '../assets/sidebarIcons/tasks.svg'
import Contacts from '../assets/sidebarIcons/contacts.svg'
import Notes from '../assets/sidebarIcons/notes.svg'
import Analytics from '../assets/sidebarIcons/analytics.svg'
import Settings from '../assets/sidebarIcons/settings.svg'
import Help from '../assets/sidebarIcons/help.svg'
import { NavLink } from "react-router-dom";

import './sidebar.css'


export default function Sidebar(){
    return (
        <>
        <main id="sidebarContainer">
          <header className="sidebarHeader">
            <img src={Logo} width="40px" height="40px"/>
            <h1>Trackly</h1>
           </header>
        <div id="optionsContainer">

            <NavLink to="/dashboard" end  className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
                <img src={Dashboard}/><p>Dashboard</p>
            </NavLink>

            <NavLink to="/dashboard/applications" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
              <img src={Application}/><p>Applications</p>
            </NavLink>

            <NavLink to="/dashboard/addNewJob" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
              <img src={Addnew} /><p>Add New job</p>
            </NavLink>

            <NavLink to="/dashboard/calendar" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
               <img src={Calendar}/><p>Calendar</p> 
            </NavLink>
            
            <NavLink to="/dashboard/taskPage" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
               <img src={Tasks} /><p>Tasks</p>
            </NavLink>
            
            <NavLink className="sidebarOption" style={{textDecoration:"none"}}>
               <img src={Contacts}/><p>Contacts</p>
            </NavLink>

            <NavLink to="/dashboard/notesPage" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
              <img src={Notes}/><p>Notes</p>
            </NavLink>
            
            <NavLink to="/dashboard/analytics" className={({isActive})=> isActive ? "sidebarOption active-option-in-sidebar":"sidebarOption non-active-option-in-sidebar"}>
                <img src={Analytics} /><p>Analytics</p>
            </NavLink>
            
            <NavLink className="sidebarOption" style={{textDecoration:"none"}}>
              <img src={Settings} /><p>Settings</p>
            </NavLink>
            
        </div>
        <div id="helpDiv"> <img src={Help} /><p>Need help ?</p></div>

        </main>
        </>
    )
}