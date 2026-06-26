import ContentCard from '../dashboardLayout/contentCard.jsx';
import jobIcon from '../assets/job.svg'
import Bookmark from '../assets/bookmark.svg'
import Offer from '../assets/offer.svg'
import Visibility from '../assets/visibility.svg'
import insightsBulb from '../assets/bulbInsight.svg'
import caseInsights from '../assets/caseInsights.svg'
import hikeArrow from '../assets/hikeArrow.svg'
import trophy from '../assets/trophy.svg'
import calendarInsight from '../assets/calendarInsight.svg'
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
  CartesianGrid,
  BarChart as ReBarChart,
  Bar,
  Cell as ReCell
} from "recharts";

import {
  PieChart,
  Pie,
  Cell
} from "recharts";


import donut from '../assets/donut.svg'

const COLORS = [
  "#7c3aed",
  "#6366f1",
  "#fbbf24",
  "#4ade80",
  "#f87171"
];


function Chart({ myApplications = [] }){

    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received");
    const assessment = myApplications.filter((obj)=>obj.status==="Assessment");

    const showChart = myApplications.length > 0;
    
    const data = [
      { name: "Applied", value: myApplications.length},
      { name: "Interview", value: interviews.length },
      { name: "Assessment", value: assessment.length },
      { name: "Offer", value: offers.length},
      { name: "Rejected", value: rejections.length}
    ];

  const total = data.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return(

    <>
    

  
    <header className="chartHeader">
     <h3>Application overview</h3>
    
    </header>
    
    { showChart?

    <>

      
      <div className="chartWrapper-analytics">


      <div className="chartContainer">

        <PieChart width={250} height={250}>

          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >

            {
              data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))
            }

          </Pie>

          <Tooltip />

        </PieChart>

      </div>

     

      <div className="legendContainer">

        {
          data.map((item, index) => (

            <div
              key={index}
              className="legendItem"
            >

              <div className="legendLeft">

                <span
                  className="dot"
                  style={{
                    backgroundColor: COLORS[index]
                  }}
                ></span>

                <p>{item.name}</p>

              </div>

              <span>

                {item.value}

              </span>

            </div>

          ))
        }

      </div>
    </div>
    </>
    
    
    
    
  :
  
  <div className="donut-chart-empty-placeholder">
    <img src={donut} width="50px" height="50px" />
    <h3>No application data yet</h3>
    <p>Start applyting to jobs and track your progress.</p>
  </div>}
    </>
  )
}



const monthNames = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const logos  = [LinkedIn,indeed,naukri,apna,internshala]

function MonthlyApplicationsChart({ data }) {

  return (
    <div className="line-chart-card">

      <header className="line-chart-header">
        <h3>Applications submitted per month</h3>
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


function SourceTable({ sourceData }){
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
                    <tr key={source.portal}>
                        <td>
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

function FunnelChart({ applications, interviews, assessment, offers }){

    const chartData = [
        { value: applications.length, name: "Applied", fill: "#4f46e5" },
        { value: interviews.length, name: "Interview", fill: "#3b82f6" },
        { value: assessment.length, name: "Assessment", fill: "#f59e0b" },
        { value: offers.length, name: "Offers", fill: "#10b981" }
    ];

    return (

        <>
    
            <div className="funnel-container" style={{ width: '100%', height: '280px', marginTop: '20px' }}>
               
              
                <ResponsiveContainer width="100%" height="100%">
                    <ReBarChart
                        layout="vertical"
                        data={chartData}
                        margin={{ top: 5, right: 30, left: -12, bottom: 5 }}
                    >
                        <XAxis type="number" hide/>
                        <YAxis 
                            dataKey="name" 
                            type="category" 
                            width={100} 
                            tick={{ fontSize: 13, fill: '#5c5c5c', fontWeight: 600 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip 
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={25}>
                            {chartData.map((entry, index) => (
                                <ReCell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </ReBarChart>
                </ResponsiveContainer>

            </div>

          
        
        </>
    )
}


export default function Analytics() {

    const myApplications = JSON.parse(localStorage.getItem("myApplications")) || [];
    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received")
    const assessment = myApplications.filter((obj)=>obj.status==="Assessment");

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

    const monthsWithData = Object.keys(monthlyCount);
    const mostActiveMonth = monthsWithData.length > 0
        ? monthsWithData.reduce((maxMonth, currentMonth) =>
            monthlyCount[currentMonth] > monthlyCount[maxMonth]
              ? currentMonth
              : maxMonth
          )
        : "-";

    const roles = myApplications.map((obj)=>obj.role);
    const freq = roles.reduce((acc, role) => {
      acc[role] = (acc[role] || 0) + 1;
      return acc;
    }, {});

    const roleKeys = Object.keys(freq);
    const mostAppliedRole = roleKeys.length > 0
        ? roleKeys.reduce((maxRole, currentRole) =>
            freq[currentRole] > freq[maxRole]
              ? currentRole
              : maxRole
          )
        : "-";

    const interviewRate = myApplications.length > 0
        ? ((interviews.length / myApplications.length) * 100).toFixed(0)
        : 0;

    const rejectionRate = myApplications.length > 0
        ? ((rejections.length / myApplications.length) * 100).toFixed(0)
        : 0;
   
    const offerRate = myApplications.length > 0
        ? ((offers.length / myApplications.length) * 100).toFixed(0)
        : 0;

    const applicationsThisWeek = myApplications.filter((app) => {
        const today = new Date();
        const applicationDate = new Date(app.dateApplied);
        const differenceInDays = (today - applicationDate) / (1000 * 60 * 60 * 24);
        return differenceInDays >= 0 && differenceInDays <= 7;
    });

    const portals = ["LinkedIn", "Indeed", "Naukri", "Apna", "Internshala", "Others"];

    const portalStats = {};
    myApplications.forEach((app) => {
        if (!portalStats[app.portal]) {
            portalStats[app.portal] = { applications: 0, interviews: 0, offers: 0 };
        }
        portalStats[app.portal].applications++;
        if (app.status === "HR Interview" || app.status === "Tech Interview" || app.status === "Interview Scheduled") {
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

    const activeSources = sourceData.filter(source => source.applications > 0);
    const topSource = activeSources.length > 0
        ? activeSources.reduce((max, current) => current.applications > max.applications ? current : max)
        : null;

    const sourcesWithRates = activeSources.map(source => ({
        ...source,
        interviewRate: source.applications > 0 ? (source.interviews / source.applications) * 100 : 0,
        offerRate: source.applications > 0 ? (source.offers / source.applications) * 100 : 0
    }));

    const highestInterviewSource = sourcesWithRates.length > 0
        ? sourcesWithRates.reduce((max, current) => current.interviewRate > max.interviewRate ? current : max)
        : null;

    const highestOfferSource = sourcesWithRates.length > 0
        ? sourcesWithRates.reduce((max, current) => current.offerRate > max.offerRate ? current : max)
        : null;

    return (
        <>
        
        <header className="analytics-page-header">
            <h1>Your job search analytics</h1>
            <p>Track your application performance and progress overtime.</p>
        </header>
       <div className="cardContainer-analytics-page">
                       <ContentCard icon={jobIcon} number={myApplications.length} header={"Applications"} bottomRecord={"Total applications tracked"} bgc={"#eef2ff"}/>
                       <ContentCard icon={Visibility} number={interviews.length} header={"Interview calls"} bottomRecord={"Interview stage reached"} bgc={"#eef2ff"}/>
                       <ContentCard icon={Bookmark} number={rejections.length} header={"Rejections"} bottomRecord={"Application rejected"} bgc={"#fff0ee"}/>
                       <ContentCard icon={Offer} number={offers.length} header={"Offers"} bottomRecord={"Offer received"} bgc={"#efffee"}/>
        </div>

        <div className="chart-funnel-container-analytics-page">
            <div className="chart-container-analytics-page">
                <Chart myApplications={myApplications}/>
            </div>


            <div className="bar-chart-conatiner">
                <header>
                    <h3>Application bar chart</h3>
                </header>
                
                 <FunnelChart 
                    applications={myApplications} 
                    interviews={interviews} 
                    assessment={assessment} 
                    offers={offers} 
                />
            </div>
            
                
          
                
               
            

        </div>
        

        {/* <div className="lineChartContainer"> */}
            
            <div className="line-chart-and-insights">
                 <MonthlyApplicationsChart data={data} />

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
                <SourceTable sourceData={sourceData} />
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