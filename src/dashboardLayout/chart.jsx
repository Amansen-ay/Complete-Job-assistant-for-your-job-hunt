import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

import './chart.css'
import donut from '../assets/donut.svg'

    const myApplications = JSON.parse(localStorage.getItem("myApplications")) || [];
    const interviews = myApplications.filter((obj)=>obj.status==="HR Interview" || obj.status==="Tech Interview" || obj.status==="Interview Scheduled")
    const rejections = myApplications.filter((obj)=>obj.status==="Rejected");
    const offers = myApplications.filter((obj)=>obj.status==="Offer Received");
    const assessment = myApplications.filter((obj)=>obj.status==="Assessment");

    const showChart = myApplications.length || interviews.length || rejections.length || offers.length || assessment.length
    

const data = [

  { name: "Applied", value: myApplications.length},

  { name: "Interview", value: interviews.length },

  { name: "Assessment", value: rejections.length },

  { name: "Offer", value: offers.length},

  { name: "Rejected", value: assessment.length}

];

const COLORS = [

  "#7c3aed",
  "#6366f1",
  "#fbbf24",
  "#4ade80",
  "#f87171"

];

export default function Chart(){

  const total = data.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return(

    <>
    

  
    <header className="chartHeader">
     <h3>Application overview</h3>
     <p>view all</p>
    </header>
    
    { showChart?

    <>

      
      <div className="chartWrapper">


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