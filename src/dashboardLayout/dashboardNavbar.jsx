import Menu from '../assets/sidebarIcons/menu.svg'
import Search from  '../assets/sidebarIcons/search.svg'
import Notifications from  '../assets/sidebarIcons/notifications.svg'
import { useLocation } from "react-router-dom";
import './dashboardNavbar.css'



export default function DashboardNavbar({sidebarToggler,showSidebar}) {

    console.log(showSidebar)

    const location = useLocation();

    let title = "";

    if(location.pathname === "/dashboard"){

        title = "Dashboard";

    }
    else if(location.pathname === "/dashboard/taskPage"){

        title = "Tasks";

    }
    else if(location.pathname === "/dashboard/applications"){

        title = "Applications";

    }
    else if(location.pathname === "/dashboard/addNewJob"){

        title = "Add New Job"

    }
    else if(location.pathname === "/dashboard/analytics"){

        title = "Analytics"

    }
    else if (location.pathname === "/dashboard/notesPage"){

        title = "Notes"


    } else if(location.pathname === "/dashboard/calendar") {

        title = "calendar"

    }

    return (
        <>
        
            <nav className={showSidebar?"dashboardNavContainer margin-active":"dashboardNavContainer"}>

                <div id="Menu">
                <img src={Menu} onClick={sidebarToggler}/>
                <h2>{title}</h2>  
                </div>

                <div id="profileSection">
                    {/* <img src={Search} /> */}
                    <img src={Notifications} />
                    <p>porfile</p>
                </div>
                
            </nav>
        
        </>
    )
}