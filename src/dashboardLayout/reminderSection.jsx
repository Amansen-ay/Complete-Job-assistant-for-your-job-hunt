import './reminderSection.css'
import {NavLink} from 'react-router-dom';

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


function ReminderSectionTableRow({task,time,role,date,month}) {
    return (
        <>
        <div className="ReminderSectionTableRow">
            <div className="dateContainer">
            <h3>{date}</h3>
            <p>{months[month]}</p> 
            </div>

            <div className="schedule">
                <h3>{task}</h3>
                <p>{time}</p>
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
            <div>
                {
                    upcomingEvents.slice(0,3).map((obj)=>(
                     <ReminderSectionTableRow task={obj.title} time={obj.time} role={obj.role} date={obj.date} month={obj.month}/>
                    ))
                }
            </div>


        </div>
        </>
    )
}