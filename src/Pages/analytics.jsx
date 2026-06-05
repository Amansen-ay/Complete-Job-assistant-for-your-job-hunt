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

function MonthlyApplicationsChart() {

  const data = [
    { month: "Jan", applications: 8 },
    { month: "Feb", applications: 14 },
    { month: "Mar", applications: 11 },
    { month: "Apr", applications: 18 },
    { month: "May", applications: 22 },
    { month: "Jun", applications: 15 },
  ];

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
                    <tr>
                        <td>
                            <img src={LinkedIn} width="30px" height="30px" />
                            LinkedIn
                            </td>
                        <td>16</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={indeed} width="30px" height="30px"/>
                            Indeed
                            </td>
                        <td>12</td>
                        <td>8</td>
                        <td>4</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={naukri} width="30px" height="30px"/>
                            Naukri.com
                            </td>
                        <td>14</td>
                        <td>6</td>
                        <td>10</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={apna} width="30px" height="30px"/>
                            Apna
                            </td>
                        <td>16</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>
                            <img src={internshala} width="30px" height="30px"/>
                            Internshala
                            </td>
                        <td>16</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>Others</td>
                        <td>16</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>
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
                        <h3 ><span style={{color:"blue"}}>32</span> Applied</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(0, 157, 255)"}}>12</span> Interviews</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(235, 166, 47)"}}>5</span> Assessments</h3>
                    </div>

                    <div className="connceter">
                        <p>———————</p>
                        <h3><span style={{color:"rgb(0, 255, 128)"}}>2</span> offers</h3>
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
                    <h3>32</h3>
                    <p>Applied</p>
                </div>
                <div className="arrow">↓</div>
            </div>
           </div>
           
        
            

            <div className="funnel-bar-container">
                <div className="funnel-step">

                    <div className="interview">
                        <h3>12</h3>
                        <p>Interview</p>
                    </div>
                    <div className="arrow">↓</div>
                </div>
            </div>
        
        

       

        <div className="funnel-bar-container">
            
            <div className="funnel-step">
                <div className="assessment">
                    <h3>5</h3>
                    <p>Assessment</p>
                </div>
                <div className="arrow">↓</div>
            </div>
        </div>

        

        <div className="funnel-bar-container">
            <div className="funnel-step">
                <div className="offer">
                    <h3>2</h3>
                    <p>Offer</p>
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
                        
                        <p><b>Frontend developer</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={hikeArrow} width="30px" height="30px" />
                            <p>Interview rate</p>
                        </div>
                        
                        <p><b>25%</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={trophy} width="30px" height="30px" />
                            <p>Offer rate</p>
                        </div>
                        
                        <p><b>6%</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={calendarInsight} width="30px" height="30px" />
                            <p>Most active month</p>
                        </div>
                        
                        <p><b>May</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={time} width="30px" height="30px" />
                            <p>Aplications this week</p>
                        </div>
                        
                        <p><b>7</b></p>
                    </div>

                    <div className="insight-card-row">
                        <div className="insight-card-row-left-part">
                            <img src={time} width="30px" height="30px" />
                            <p>Average response time</p>
                        </div>
                        
                        <p><b>9 days</b></p>
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
                    <h2 style={{color:"green",marginTop:"10px"}}>LinkedIn</h2>
                    </div>

                <div>

                    <div className="icon-and-header">
                        <img src={interview} width="20px" height="20px"/>
                        <h3>Highets Interview rate</h3>
                    </div>
                    <div className="source-and-record">
                        <h2 style={{color:"#1f66f4"}}>Indeed </h2>
                        <p>(66%)</p>
                    </div>
                    
                </div>

                <div>

                    <div className="icon-and-header">
                        <img src={offerNew} width="20px" height="20px"/>
                        <h3>Highest offer rate</h3>
                    </div>

                    <div className="source-and-record">
                        <h2 style={{color:"#1f66f4"}}>Naukri.com</h2>
                        <p>(71%)</p>
                    </div>
                    
                </div>

                <div className="recommendation">
                    <p><b>Recommendation</b></p> 
                    <p id="reco"><b>Focus more on Indeed and Naukri !</b></p>   
                </div> 
                </div>
                
            </div>  


        </div>
            

        
        </>
    )
}