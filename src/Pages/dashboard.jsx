import Sidebar from '../dashboardLayout/sidebar.jsx'
import Navbar from '../dashboardLayout/dashboardNavbar.jsx'
import Content from '../dashboardLayout/content.jsx'
import { Outlet } from "react-router-dom";
import './dashboard.css'
import {useState} from 'react';

export default function Dashboard() {

  const [showSidebar,setShowSidebar] = useState(false);
  

    return (
        <>
        <div className="finalDashboardContainer">
           
            <Sidebar showSidebar={showSidebar}/>
            
            {showSidebar && (
                <div className="sidebarOverlay" onClick={() => setShowSidebar(false)}></div>
            )}
            
            <div className="mainDashboardSection">
               <Navbar sidebarToggler={()=>{
                setShowSidebar(!showSidebar)
               }} showSidebar={showSidebar}/>
               <div className={showSidebar?"dashboardContent mainDashboardSection margin-active-dashboard":"dashboardContent mainDashboardSection"}>
                <Outlet context={{showSidebar}}/>
               </div>
            </div>
            
        </div>
        </>
    )
}