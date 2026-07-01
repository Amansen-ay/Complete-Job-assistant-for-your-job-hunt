import Menu from '../assets/sidebarIcons/menu.svg'
import Search from '../assets/sidebarIcons/search.svg'
import Home from '../assets/home.svg'
import { useLocation , NavLink} from "react-router-dom";
import './dashboardNavbar.css'



export default function DashboardNavbar({ sidebarToggler, showSidebar }) {

    const username = JSON.parse(localStorage.getItem("users")).at(-1).name.split(" ")[0]


    console.log(showSidebar)

    const location = useLocation();

    let title = "";

    if (location.pathname === "/dashboard") {

        title = "Dashboard";

    }
    else if (location.pathname === "/dashboard/taskPage") {

        title = "Tasks";

    }
    else if (location.pathname === "/dashboard/applications") {

        title = "Applications";

    }
    else if (location.pathname === "/dashboard/addNewJob") {

        title = "Add New Job"

    }
    else if (location.pathname === "/dashboard/analytics") {

        title = "Analytics"

    }
    else if (location.pathname === "/dashboard/notesPage") {

        title = "Notes"


    } else if (location.pathname === "/dashboard/calendar") {

        title = "calendar"

    }

    return (
        <>

            <nav className={showSidebar ? "dashboardNavContainer margin-active" : "dashboardNavContainer"}>

                <div id="Menu">
                    <img src={Menu} onClick={sidebarToggler} />
                    <h2>{title}</h2>
                </div>

                <div id="profileSection">
                    {/* <img src={Search} /> */}
                    <NavLink to="/dashboard">
                        <img src={Home} />
                    </NavLink>
                    
                    <p id="profile-pic">{username[0]}</p>
                </div>

            </nav>

        </>
    )
}