import ContentCard from '../dashboardLayout/contentCard.jsx';
import jobIcon from '../assets/job.svg'
import Bookmark from '../assets/bookmark.svg'
import Offer from '../assets/offer.svg'
import Visibility from '../assets/visibility.svg'
import Chart from '../dashboardLayout/chart.jsx'
import insightsBulb from '../assets/bulbInsight.svg'
import caseInsights from '../assets/caseInsights.svg'
import hikeArrow from '../assets/hikeArrow.svg'
import trophy from '../assets/trophy.svg'
import calendarInsight from '../assets/calendarinsight.svg'
import time from '../assets/time.svg'
import newTrophy from '../assets/newTrophy.svg'
import offerNew from '../assets/offerNew.svg'
import interview from '../assets/interview.svg'
import LinkedIn from '../assets/linkedInNew.svg'
import indeed from '../assets/indeed.svg'
import naukri from '../assets/naukri.jpeg'
import internshala from '../assets/internshala.webp'
import apna from '../assets/apna.png';
import rejection from '../assets/rejection.svg'
import './analytics.css'
import { useOutletContext } from "react-router-dom";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

    const myApplications = JSON.parse(localStorage.getItem("myApplications")) || [];
    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received");
    const assessment = myApplications.filter((obj)=>obj.status==="Assessment");

const monthNames = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const logos  = [LinkedIn,indeed,naukri,apna,internshala]


const monthlyCount  = {};

myApplications.forEach((app) => {

  const date = new Date(app.dateApplied);

  const month = monthNames[date.getMonth()];

  monthlyCount[month] = (monthlyCount[month] || 0) + 1;

});

const data = monthNames.map((month) => ({
  month,
  applications: monthlyCount[month] || 0
}));


const months = Object.keys(monthlyCount);

const mostActiveMonth =
  months.length > 0
    ? months.reduce((maxMonth, currentMonth) =>
        monthlyCount[currentMonth] > monthlyCount[maxMonth]
          ? currentMonth
          : maxMonth
      )
    : "-";

const roles = myApplications.map((obj)=>{
    return obj.role
})
const freq = roles.reduce((acc, role) => {
  acc[role] = (acc[role] || 0) + 1;
  return acc;
}, {});


const roleKeys = Object.keys(freq);

const mostAppliedRole =
  roleKeys.length > 0
    ? roleKeys.reduce((maxRole, currentRole) =>
        freq[currentRole] > freq[maxRole]
          ? currentRole
          : maxRole
      )
    : "-";

    const interviewRate =
        myApplications.length > 0
        ? ((interviews.length / myApplications.length) * 100).toFixed(0)
        : 0;

    const rejectionRate = 
        myApplications.length > 0
        ? ((rejections.length / myApplications.length) * 100).toFixed(0)
        : 0;
   
    const offerRate =
    myApplications.length > 0
    ? ((offers.length / myApplications.length) * 100).toFixed(0)
    : 0;


    const applicationsThisWeek = myApplications.filter((app) => {

        const today = new Date();

        const applicationDate = new Date(app.dateApplied);

        const differenceInDays =
        (today - applicationDate) /
        (1000 * 60 * 60 * 24);

        return differenceInDays >= 0 &&
         differenceInDays <= 7;
});

    const portals = [
            "LinkedIn",
            "Indeed",
            "Naukri",
            "Apna",
            "Internshala",
            "Others"
        ];


    const portalStats = {};
    myApplications.forEach((app) => {

    if (!portalStats[app.portal]) {
    portalStats[app.portal] = {
      applications: 0,
      interviews: 0,
      offers: 0
    };
  }

    portalStats[app.portal].applications++;

    if (
    app.status === "HR Interview" ||
    app.status === "Tech Interview" ||
    app.status === "Interview Scheduled"
    ) {
        portalStats[app.portal].interviews++;
    }

    if (app.status === "Offer Received") {
    portalStats[app.portal].offers++;
    }

    });
    const sourceData = portals.map((portal) => ({
    portal,
    applications: portalStats[portal]?.applications || 0,
    interviews: portalStats[portal]?.interviews || 0,
    offers: portalStats[portal]?.offers || 0
}));

    const activeSources = sourceData.filter(
    source => source.applications > 0
    );

    const topSource =
    activeSources.length > 0
    ? activeSources.reduce((max, current) =>
        current.applications > max.applications
          ? current
          : max
      )
    : null;

    const topSourceByOffer =
    activeSources.length > 0
    ? activeSources.reduce((max, current) =>
        current.offer > max.offer
          ? current
          : max
      )
    : null;


    console.log(topSourceByOffer)


    const sourcesWithRates = activeSources.map(source => ({
    ...source,
    interviewRate:
    source.applications > 0
      ? (source.interviews / source.applications) * 100
      : 0,

    offerRate:
    source.applications > 0
      ? (source.offers / source.applications) * 100
      : 0

    }));

    const highestInterviewSource =
    sourcesWithRates.length > 0
    ? sourcesWithRates.reduce((max, current) =>
        current.interviewRate > max.interviewRate
          ? current
          : max
      )
    : null;

    const highestOfferSource =
    sourcesWithRates.length > 0
    ? sourcesWithRates.reduce((max, current) =>
        current.offerRate > max.offerRate
          ? current
          : max
      )
    : null;


function MonthlyApplicationsChart() {

//   const data = [
//     { month: "Jan", applications: 8 },
//     { month: "Feb", applications: 14 },
//     { month: "Mar", applications: 11 },
//     { month: "Apr", applications: 18 },
//     { month: "May", applications: 22 },
//     { month: "Jun", applications: 15 },
//   ];

  return (
    <div className="line-chart-card">

      <header className="line-chart-header">
        <h3>Applications submitted per month</h3>
        {/* <select>
          <option>This year</option>
        </select> */}
        <p>This year</p>
      </header>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>

          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6D4AFF" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#6D4AFF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="applications"
            stroke="#6D4AFF"
            strokeWidth={3}
            fill="url(#purpleGradient)"
            label={{
              position: "top",
              fill: "#111827",
              fontWeight: 600
            }}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}


function SourceTable(){
    return (
        <>
         <div className="applicaton-sources-container">
             <table>
                <thead>
                    <tr>
                    <th>Source</th>
                    <th>Applications</th>
                    <th>Interviews</th>
                    <th>Offers</th>
                </tr>
                </thead>

                <tbody>
                    {sourceData.map((source,index)=>(
                    <tr>
                        <td key={source.portal}>
                            <img src={logos[index]} width="30px" height="30px" />
                            {source.portal}
                        </td>
                        <td>{source.applications}</td>
                        <td>{source.interviews}</td>
                        <td>{source.offers}</td>
                    </tr>
                    ))
                        
                    }
                    
                </tbody>
                
             </table>
            </div>
        </>
    )
}
function Connecter(){
    return (
        <>
        <div className="connceterContainer">
                    <div className="connceter">
                        <p>———————</p>
                        <h3 ><span style={{color:"blue"}}>{myApplications.length}</span> Applied</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(0, 157, 255)"}}>{interviews.length}</span> Interviews</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(235, 166, 47)"}}>{assessment.length}</span> Assessments</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(0, 255, 128)"}}>{offers.length}</span> offers</h3>
                    </div>
        </div>        
        </>
    )
}
function FunnelChart(){

    return (

        <>
        

            <div className="funnel-container">

           <div className="funnel-bar-container">
             <div className="funnel-step">
                <div className="applied">
                    <h3>{myApplications.length}</h3>
                    <p>Applied</p>
                </div>
                <div className="arrow">↓</div>
            </div>
           </div>
           
        
            

            <div className="funnel-bar-container">
                <div className="funnel-step">

                    <div className="interview">
                        <h3>{interviews.length}</h3>
                        <p>Interview</p>
                    </div>
                    <div className="arrow">↓</div>
                </div>
            </div>
        
        

       

        <div className="funnel-bar-container">
            
            <div className="funnel-step">
                <div className="assessment">
                    <h3>{assessment.length}</h3>
                    <p>Assessment</p>
                </div>
                <div className="arrow">↓</div>
            </div>
        </div>

        

        <div className="funnel-bar-container">
            <div className="funnel-step">
                <div className="offer">
                    <h3>{offers.length}</h3>
                    <p>Offers</p>
                </div>
            </div>
        </div>

            </div>

          
        
        </>
    )
}


export default function Analytics() {

    const myApplications = JSON.parse(localStorage.getItem("myApplications")) || [];
    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received")
    const { showSidebar } = useOutletContext();
    // console.log("sidebarState =", sidebarState);
    return (
        <>
        
        <header className="analytics-page-header">
            <h1>Your job search analytics</h1>
            <p>Track your application performance and progress overtime.</p>
        </header>
       <div className="cardContainer-analytics-page">
                       <ContentCard icon={jobIcon} number={myApplications.length} header={"Applications"} bottomRecord={"12% from  week"} bgc={"#eef2ff"}/>
                       <ContentCard icon={Visibility} number={interviews.length} header={"Interview calls"} bottomRecord={"5% from last week"} bgc={"#eef2ff"}/>
                       <ContentCard icon={Bookmark} number={rejections.length} header={"Rejections"} bottomRecord={"8% from last week"} bgc={"#fff0ee"}/>
                       <ContentCard icon={Offer} number={offers.length} header={"Offers"} bottomRecord={"3% from last week"} bgc={"#efffee"}/>
        </div>

        <div className="chart-funnel-container-analytics-page">
            <div className="chart-container-analytics-page">
                <Chart/>
            </div>


        <div className="funnel-container-analytics-page-perent">

            <header className="funnel-container-header">
                <h3>Application funnel</h3>
                <p>View all</p>
            </header>

            <div className="funnel-container-analytics-page">
                
                <FunnelChart/>
            
             {
              !showSidebar && 
              <Connecter/>
             }
                
            </div>

        </div>
        </div>

        {/* <div className="lineChartContainer"> */}
            
            <div className="line-chart-and-insights">
                 <MonthlyApplicationsChart/>

                 <div className="insights-card-container">
                    <header>
                        <img src={insightsBulb} width="40px" height="40px" />
                        <h3>Job search insights</h3>
                    </header>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={caseInsights} width="25px" height="25px" />
                            <p>Most applied role</p>
                        </div>
                        
                        <p><b>{mostAppliedRole}</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={hikeArrow} width="30px" height="30px" />
                            <p>Interview rate</p>
                        </div>
                        
                        <p><b>{interviewRate}%</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={trophy} width="30px" height="30px" />
                            <p>Offer rate</p>
                        </div>
                        
                        <p><b>{offerRate}%</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={calendarInsight} width="30px" height="30px" />
                            <p>Most active month</p>
                        </div>
                        
                        <p><b>{mostActiveMonth}</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={time} width="30px" height="30px" />
                            <p>Aplications this week</p>
                        </div>
                        
                        <p><b>{applicationsThisWeek.length}</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={rejection} width="30px" height="30px" />
                            <p>Rejection rate</p>
                        </div>
                        
                        <p><b>{rejectionRate}%</b></p>
                    </div>
                    
                 </div>
            </div>
           

        <div className="source-table-and-top-performer-conatiner">
            <div className="source-table-wraper">
                <SourceTable/>
            </div>
              
            
            <div className="top-performer-container">
                <header>
                    <h3>Source insights</h3>
                </header>

                <div className="sources-and-performance">
                    <div>
                        <div className="icon-and-header">
                            <img src={newTrophy} width="30px" height="30px"/>
                            <h3>Top performing source</h3>
                        </div>
                    <h2 style={{color:"green",marginTop:"10px"}}>{topSource?.portal || "No data yet"}</h2>
                    </div>

                <div>

                    <div className="icon-and-header">
                        <img src={interview} width="20px" height="20px"/>
                        <h3>Highets Interview rate</h3>
                    </div>
                    <div className="source-and-record">
                        <h2 style={{color:"#1f66f4"}}>{highestInterviewSource?.portal || "No data yet"}</h2>
                        <p>({highestInterviewSource?.interviewRate.toFixed(0)}%)</p>
                    </div>
                    
                </div>

                <div>

                    <div className="icon-and-header">
                        <img src={offerNew} width="20px" height="20px"/>
                        <h3>Highest offer rate</h3>
                    </div>

                    <div className="source-and-record">
                        <h2 style={{color:"#1f66f4"}}>{highestOfferSource?.portal || "No data yet"}</h2>
                        <p>({highestOfferSource?.offerRate.toFixed(0)}%)</p>
                    </div>
                    
                </div>

                <div className="recommendation">
                    <p><b>Recommendation</b></p> 
                    <p id="reco"><b>Focus more on {highestInterviewSource?.portal} and {highestOfferSource?.portal}!</b></p>   
                </div> 
                </div>
                
            </div>  


        </div>
            

        
        </>
    )
}