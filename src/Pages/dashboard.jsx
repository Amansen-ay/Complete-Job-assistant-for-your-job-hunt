import Sidebar from '../dashboardLayout/sidebar.jsx'
import Navbar from '../dashboardLayout/dashboardNavbar.jsx'
import Content from '../dashboardLayout/content.jsx'
import { Outlet } from "react-router-dom";
import './dashboard.css'

export default function Dashboard() {
    return (
        <>
        <div className="finalDashboardContainer">
            <Sidebar/>
            <div className="mainDashboardSection">
               <Navbar/>
               <div className="dashboardContent mainDashboardSection">
                <Outlet/>
               </div>
            </div>
            
        </div>
        </>
    )
}