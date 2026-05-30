import './taskSection.css'
import {useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'



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
          
            <div>
           {
            taskList
           }
            </div>
        </div>
        </>
    )
}