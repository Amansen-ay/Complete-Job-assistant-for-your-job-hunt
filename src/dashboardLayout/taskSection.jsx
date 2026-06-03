import './taskSection.css'
import {useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import addCircle from '../assets/addCircle.svg'
import assignment from '../assets/assignment.svg'



function TaskRow({taskTitle,dueDate}) {

    
    return (
        <>
        <div className="Task-row-container">
            <div className="task-check">
            <span>{">"}</span>
            </div>

            <div className="task-title">
                <h3>{taskTitle}</h3>
            </div>

            <h4 id="dateOfTask">{dueDate}</h4>
            
        </div>
        
        </>
    )
}

function Placeholder(){
    return (
        <>
        <main className="placeholder-container-task">
        <div className="empty-placeholder-task-section">
            <img src={assignment} alt="not found" width="60px" height="60px"/>
            <h3 style={{color:"#313131"}}>No tasks yet</h3>
            <p style={{color:"#313131"}}>Add a task to stay on a track.</p>
            <NavLink to="/dashboard/taskPage" className="view-all-link-task">
                <button className="go-to-task">
                <img src={addCircle} alt="not found"/>
                Go to Tasks
                </button>
            </NavLink>
        </div>
        </main>
        </>
    )
}

export default function TaskSection() {

    

    const tasks =
      JSON.parse(localStorage.getItem("myTasks")) || [];

   

    const taskList = tasks.slice(0,4).map((obj)=>(
                <TaskRow taskTitle={obj.task} dueDate={obj.dueDate}/>
    ))

    return (
        <>
        <div className="task-section-container">
            <header className="taskSectionHeader">
                <h3>Tasks</h3>
                <NavLink to="/dashboard/taskPage" className="view-all-link" >
                    <p>View all </p>
                </NavLink>
            </header>

        <div className={taskList .length===0 && "task-section-data-container"}>

          {taskList.length>0?
            <div>
           {
            taskList
           }
            </div>
            :
            <Placeholder/>
          }

        </div>

        </div>

        </>
    )
}