import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

import './chart.css'

const data = [

  { name: "Applied", value: 12 },

  { name: "Interview", value: 6 },

  { name: "Assessment", value: 3 },

  { name: "Offer", value: 3 },

  { name: "Rejected", value: 0 }

];

const COLORS = [

  "#7c3aed",
  "#6366f1",
  "#fbbf24",
  "#4ade80",
  "#f87171"

];

export default function Content(){

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
  )
}