import './reminderSection.css'
import {NavLink} from 'react-router-dom';
import calendarEmpty from '../assets/calendarEmpty.svg'
import calendarPurple from '../assets/calendarPurple.svg'

const months = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

];

const facts = ["📈 Great progress! Keep tracking deadlines and interviews.","🎯 Every reminder is a step closer to your next opportunity.","hi"];

function Placeholder(){
    return (
        <>
        <main className="placeholder-container-calendar">
        <div className="empty-placeholder-calendar-section">
            <img src={calendarEmpty} alt="not found" width="60px" height="60px"/>
            <h3 style={{color:"#313131"}}>No upcoming reminders</h3>
            <p style={{color:"#313131"}}>Create an event in the calendar.</p>
            <NavLink to="/dashboard/calendar" className="view-all-link-reminder-section">
                <button className="go-to-calendar">
                <img src={calendarPurple} alt="not found"/>
                Go to calendar
                </button>
            </NavLink>
        </div>
        </main>
        </>
    )
}

function ReminderSectionTableRow({task,time,role,date,month}) {
    return (
        <>
        <div className="ReminderSectionTableRow">
            <div className="date-reminder-container">
                <div className="dateContainer">
                <h3>{date}</h3>
                <p>{months[month]}</p> 
            </div>

            <div className="schedule">
                <h3>{task}</h3>
                <p>{time}</p>
            </div>

            </div>
           

            <h4 id="levelOfAppliction">{role}</h4>
            
        </div>
        </>
    )
}
export default function ReminderSection() {
    const savedEvents = JSON.parse(localStorage.getItem("calendarEvents")) || []; 

    const todayDate = new Date()
    todayDate.setHours(0,0,0,0);

    const upcomingEvents = savedEvents.filter((event)=>{
      
        const eventDate = new Date(
            event.year,
            event.month,
            event.date
        )

        return eventDate>=todayDate

    });

    return (
        <>
        <div className="reminderSectionContainer">
            <header className="reminderSectionHeader">
                <h3>Upcoming Reminders</h3>
                <NavLink to="/dashboard/calendar" className="view-all-link">
                    <p >View Calendar</p>
                </NavLink>
            </header>
            <div className={upcomingEvents.length===0 && "calendar-section-data-container"}>
            { upcomingEvents.length>0?
                <div>
                {
                    upcomingEvents.slice(-3).reverse().map((obj)=>(
                     <ReminderSectionTableRow task={obj.title} time={obj.time} role={obj.role} date={obj.date} month={obj.month}/>
                    ))
                }
            
                </div>
                :
                
                    <Placeholder/>
                
                
                
            }
            
            {upcomingEvents.length<3 && upcomingEvents.length>0 && (
            facts.slice(0,facts.length-upcomingEvents.length).map((fact)=>{
                return (
                    <div className="encourage">
                        <p>{fact}</p>
                    </div>
                )
            
            }))}


        </div>
        </div>
        </>
    )
}