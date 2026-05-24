import './taskPage.css'
import more from '../assets/more.svg'
import {useState,useEffect} from 'react';
import removeBtn from '../assets/removeBtn.svg'

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

    const [showTaskModal,setShowTaskModal] = useState(false);

    const [taskObj,setTaskObj] = useState(()=>{

        const savedObj = localStorage.getItem("myTasks");

        return savedObj? JSON.parse(savedObj):[];
        });

    const [task,setTask] = useState("");
    const [relatedTo,setRelatedTo] = useState("");
    const [dueDate,setDueDate] = useState("");
    const [priority,setPriority] = useState("");
    const [status,setStatus] = useState(""); 
    const [showMenu,setShowMenu] = useState(null);

    const [selectedTaskRow,setSelectedTaskRow] = useState(null);

    useEffect(()=>{

        localStorage.setItem("myTasks",JSON.stringify(taskObj))

    },[taskObj])

 
    function deleteTaskHandeler() {
        const filteredTaskObj = taskObj.filter((obj)=>(
            obj!==selectedTaskRow
        ))
         setTaskObj(filteredTaskObj);
         setShowMenu(false);
    }


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
                <button onClick={()=>setShowTaskModal(true)}>+ Add new task</button>
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
            { taskObj.map((obj,index)=>(

                <tr key={index}>
                    <td>
                        <h3>{obj.task}</h3>
                        {/* <p>-</p> */}
                    </td>
                    <td>
                        <h3>{obj.relatedTo}</h3>
                        {/* <p>- </p> */}
                    </td>
                    <td>
                        <h3>{obj.dueDate}</h3>
                        {/* <p>-</p> */}
                    </td>
                    <td>
                        <h3>{obj.priority}</h3>
                    </td>
                    <td> {obj.status}</td>
                    <td>
                        <div className="menu-wrapper">
                            <img  className="three-dots-btn" src={more} onClick={()=>{
                                setShowMenu(showMenu===index?null:index);
                                setSelectedTaskRow(obj);
                        
                            }}/>

                    {
                        

                    showMenu === index && (

                    <div className="dropdown-menu">

                     <button onClick={()=>{
                        setTask(selectedTaskRow.task);
                        setPriority(selectedTaskRow.priority);
                        setDueDate(selectedTaskRow.dueDate);
                        setRelatedTo(selectedTaskRow.relatedTo);
                        setStatus(selectedTaskRow.status);
                        setShowTaskModal(true);
                     }}>Edit</button>

                     <button onClick={deleteTaskHandeler}>Delete</button>

                     <button onClick={()=>{
                        setTaskObj(
                            taskObj.map((obj)=>{
                               return  obj===selectedTaskRow?
                                {
                                task:obj.task,
                                priority:obj.priority,
                                relatedTo:obj.relatedTo,
                                dueDate:obj.dueDate,
                                status:"Completed"
                                }:obj
                            })
                        )
                     }}>Mark Complete</button>

                    </div>

                        )

                    }

                    </div>

                    </td>

                </tr>

            ))
                
            }
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

    {/* ADD TASK MODAL */}

{
  showTaskModal && (

    <div className="task-modal-overlay">

      <div className="task-modal">

        {/* HEADER */}

        <div className="task-modal-header">

          <div className="task-modal-title-section">

            <div className="task-modal-icon">
              <span className="material-symbols-rounded">task_alt</span>
            </div>

            <div>
              <h2>Add New Task</h2>
              <p>Create a new task and track your progress.</p>
            </div>

          </div>

          <button
            className="task-modal-close-btn"
            onClick={() => setShowTaskModal(false)}
          >
            <img className="material-symbols-rounded" src={removeBtn}/>
          </button>

        </div>

        {/* BODY */}

        <div className="task-modal-body">

          {/* TASK TITLE */}

          <div className="task-modal-field">

            <label>Task Title <span>*</span></label>

            <input
              onChange={(e)=>setTask(e.target.value)}
              value={task}
              type="text"
              placeholder="Enter task title"
            />

            <p className="task-input-helper">
              A clear and concise title helps you stay organized.
            </p>

          </div>

          {/* ROW */}

          <div className="task-modal-row">

            <div className="task-modal-field">

              <label>Related To <span>*</span></label>

              <select
                onChange={(e)=>setRelatedTo(e.target.value)}
                value={relatedTo}>
                <option>Select company</option>
                <option>Google</option>
                <option>Microsoft</option>
                <option>Amazon</option>
              </select>

            </div>

            <div className="task-modal-field">

              <label>Due Date <span>*</span></label>

              <input 
              onChange={(e)=>setDueDate(e.target.value)}
              value={dueDate}
              type="date" 
              />

            </div>

            <div className="task-modal-field">

              <label>Priority <span>*</span></label>

              <select
                onChange={(e)=>setPriority(e.target.value)}
                value={priority}>
                <option>Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

            </div>

          </div>

          {/* ROW */}

          <div className="task-modal-row">

            <div className="task-modal-field">

              <label>Status <span>*</span></label>

              <select
                onChange={(e)=>setStatus(e.target.value)}
                value={status}>
                <option>Select status</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

            </div>

            <div className="task-modal-field">

              <label>Assigned To</label>

              <select>
                <option>Select assignee (optional)</option>
              </select>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="task-modal-field">

            <label>Description</label>

            <textarea
              placeholder="Add task details, notes, or any important information..."
            ></textarea>

            <p className="task-input-helper">
              Add any additional details that will help you complete this task.
            </p>

          </div>

        </div>

        {/* FOOTER */}

        <div className="task-modal-footer">

          <button
            className="task-cancel-btn"
            onClick={() => setShowTaskModal(false)}
          >
            Cancel
          </button>

          <button className="task-save-btn"
          onClick={()=>{
            setTaskObj(
                selectedTaskRow===null?[
                    ...taskObj,
                    {
                    task:task,
                    priority:priority,
                    relatedTo:relatedTo,
                    status:status,
                    dueDate:dueDate
                }]
                :
               
                taskObj.map((obj)=>{
                    return obj===selectedTaskRow?
                    {task:task,
                    relatedTo:relatedTo,
                    dueDate:dueDate,
                    priority:priority,
                    status:status}:obj
                }),
                
            )
            setTask("");
            setRelatedTo("");
            setDueDate("");
            setPriority("");
            setStatus("");
            setShowTaskModal(false);
            setSelectedTaskRow(null);
            setShowMenu(null);
          }}>

            <span className="material-symbols-rounded">Add Task</span>

            

          </button>

        </div>

      </div>

    </div>

  )
}

{/* dropdownMenu */}

{}
        </>
    )
}