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
            
            <div className="mainDashboardSection">
               <Navbar sidebarToggler={()=>{
                setShowSidebar(!showSidebar)
               }}/>
               <div className="dashboardContent mainDashboardSection">
                <Outlet/>
               </div>
            </div>
            
        </div>
        </>
    )
}