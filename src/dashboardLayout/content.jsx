import './content.css'
import jobIcon from '../assets/job.svg'
import ContentCard from './contentCard.jsx'
import Visibility from '../assets/visibility.svg'
import Bookmark from '../assets/bookmark.svg'
import Offer from '../assets/offer.svg'
import DonutChart from '../HomePage/Page1/donutChart.jsx'
import DataTable from './dataTable.jsx'
import ReminderSection from './reminderSection.jsx'
import Chart from './chart.jsx'
import TaskSection from './taskSection.jsx'
import ExploreJobs from './exploreJobsSection.jsx'
import Navbar from './dashboardNavbar.jsx'


export default function Content() {

    const myApplications = JSON.parse(localStorage.getItem("myApplications")) || [];
    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received")
    return (
        <>
        <div>
            <header id="headerWithUsername">
                <h3>Welcome back, Aman!👋 </h3>
                <p>Keep tracking your progress and land your dream job.</p>
            </header>
            <div className="cardContainer">
                <ContentCard icon={jobIcon} number={myApplications.length} header={"Applications"} bottomRecord={"12% from  week"} bgc={"#eef2ff"}/>
                <ContentCard icon={Visibility} number={interviews.length} header={"Interview calls"} bottomRecord={"5% from last week"} bgc={"#eef2ff"}/>
                <ContentCard icon={Bookmark} number={rejections.length} header={"Rejections"} bottomRecord={"8% from last week"} bgc={"#fff0ee"}/>
                <ContentCard icon={Offer} number={offers.length} header={"Offers"} bottomRecord={"3% from last week"} bgc={"#efffee"}/>
            </div>

         <div className="chartAndTableContainer">
            <div className="finalContainer">
             <Chart/>
            </div>
            <div className="wholeTableContainer">
             <DataTable/>
            </div>
         </div>

         <div className="reminder-task-section-container">
        <ReminderSection />
        <TaskSection />
         </div>
            
           
        </div>
        </>
    )
}