import './taskPage.css'
import more from '../assets/more.svg'

import {

   PieChart,

   Pie,

   Cell,

   ResponsiveContainer,

   Tooltip

} from "recharts";

const data = [

   {

      name:"To Do",

      value:6,

      color:"#6D5DFC"

   },

   {

      name:"In Progress",

      value:4,

      color:"#3B82F6"

   },

   {

      name:"Completed",

      value:4,

      color:"#34D399"

   },

   {

      name:"Overdue",

      value:1,

      color:"#F87171"

   }

];

function TaskDonutChart(){
    return (
        <>
        <div className="taskOverviewCard">

   <h3>

      Task Overview

   </h3>

   <div className="chartWrapper-task-page">

      <div className="chartContainer-task-page">

         <ResponsiveContainer width={150} height={150}>

            <PieChart>

        <Pie

            data={data}

            dataKey="value"

            innerRadius={45}

            outerRadius={60}

            paddingAngle={2}

        >

      {

         data.map((entry,index)=>(

            <Cell

               key={index}

               fill={entry.color}

            />

         ))

      }

   </Pie>

   <Tooltip />

</PieChart>

         </ResponsiveContainer>

         <div className="centerText">

            <h2>14</h2>

            <p>Total Tasks</p>

         </div>

      </div>

      <div className="legendContainer-task-page">

         {

            data.map((item,index)=>(

               <div

                  className="legendItem"

                  key={index}

               >

                  <span

                     className="legendDot"

                     style={{

                        backgroundColor:item.color

                     }}

                  >

                  </span>

                  <p>

                     {item.name}

                  </p>

                  <span>

                     {item.value}

                  </span>

               </div>

            ))

         }

      </div>

   </div>

</div>
        </>
    )
}


export default function TaskPage() {
    return (
    <>
    <div className="entire-task-page-container">
        <div>
            <header className="Task-Page-Top-Header">
                <h1>My tasks</h1>
                <p>Stay organize and track all your job search tasks in one place.</p>
            </header>
       
         <div className="header-section-btns-containers">

            <div className="header-section-btns">
                <button>All tasks</button>
                <button>To do </button>
                <button>In Progress</button>
                <button>Completed</button>
            </div>
            <div className="add-new-task-btn">
                <button>+ Add new task</button>
            </div>
            
        </div>

          <div className="task-page-table-container-wrapper">
            <table className="task-page-table-container">
                <tr>
                    <th>Task</th>
                    <th>Related To</th>
                    <th>Due Date</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th></th>
                </tr>

                <tr>
                    <td>
                        <h3>update resume</h3>
                        <p>Add recent project and skills</p>
                    </td>
                    <td>
                        <h3>Google</h3>
                        <p>Frontend developer </p>
                    </td>
                    <td>
                        <h3>20 May 2025</h3>
                        <p>Today</p>
                    </td>
                    <td>
                        <h3>High</h3>
                    </td>
                    <td> To do</td>
                    <td><img src={more}/></td>
                </tr>

                
                <tr>
                    <td>
                        <h3>update resume</h3>
                        <p>Add recent project and skills</p>
                    </td>
                    <td>
                        <h3>Google</h3>
                        <p>Frontend developer </p>
                    </td>
                    <td>
                        <h3>20 May 2025</h3>
                        <p>Today</p>
                    </td>
                    <td>
                        <h3>High</h3>
                    </td>
                    <td> To do</td>
                    <td><img src={more}/></td>
                </tr>

                
                <tr>
                    <td>
                        <h3>update resume</h3>
                        <p>Add recent project and skills</p>
                    </td>
                    <td>
                        <h3>Google</h3>
                        <p>Frontend developer </p>
                    </td>
                    <td>
                        <h3>20 May 2025</h3>
                        <p>Today</p>
                    </td>
                    <td>
                        <h3>High</h3>
                    </td>
                    <td> To do</td>
                    <td><img src={more}/></td>
                </tr>

                
                <tr>
                    <td>
                        <h3>update resume</h3>
                        <p>Add recent project and skills</p>
                    </td>
                    <td>
                        <h3>Google</h3>
                        <p>Frontend developer </p>
                    </td>
                    <td>
                        <h3>20 May 2025</h3>
                        <p>Today</p>
                    </td>
                    <td>
                        <h3>High</h3>
                    </td>
                    <td> To do</td>
                    <td><img src={more}/></td>
                </tr>

                
                <tr>
                    <td>
                        <h3>update resume</h3>
                        <p>Add recent project and skills</p>
                    </td>
                    <td>
                        <h3>Google</h3>
                        <p>Frontend developer </p>
                    </td>
                    <td>
                        <h3>20 May 2025</h3>
                        <p>Today</p>
                    </td>
                    <td>
                        <h3>High</h3>
                    </td>
                    <td> To do</td>
                    <td><img src={more}/></td>
                </tr>
            </table>

        <div className="pagination-container">
           <p>Showing 1 to 6 of 24 Tasks</p>
           <h3>Pagination placeholder</h3>
        </div>


        </div>

        </div>

        <div className="donut-chart-task-page-container">
            {/* <TaskDonutChart/> */}
        </div>
            
    </div>
        </>
    )
}