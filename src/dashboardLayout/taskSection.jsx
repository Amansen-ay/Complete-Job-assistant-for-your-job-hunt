import './taskSection.css'
import {useState} from 'react'

const tasks = ["update resume","upload repo","make cv","apply on job"];

function TaskRow({taskTitle}) {

    
    return (
        <>
        <div className="Task-row-container">
            <div className="task-check">
            <input type="checkbox" />
            </div>

            <div className="task-title">
                <h3>{taskTitle}</h3>
            </div>

            <h4 id="dateOfTask">Today</h4>
            
        </div>
        
        </>
    )
}

export default function TaskSection() {
    const taskList = tasks.map((task)=>(
                <TaskRow taskTitle={task}/>
    ))

    return (
        <>
        <div className="task-section-container">
            <header className="taskSectionHeader">
                <h3>Tasks</h3>
                <p>View all </p>
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