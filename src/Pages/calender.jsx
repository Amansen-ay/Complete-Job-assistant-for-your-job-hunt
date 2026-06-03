import './calender.css';
import {useState,useEffect} from 'react';
import arrowBack from '../assets/arrowBack.svg'
import arrowForward from '../assets/arrowForward.svg'
import amazon from '../assets/amazon.png'
import dateBlue from '../assets/dateBlue.svg'
import dateRed from '../assets/dateRed.svg'
import followUp from '../assets/followUp.svg'
import warning from '../assets/warning.svg'
import blueCalendar from '../assets/calendarBlue.svg'
import eventImg from '../assets/event.svg'
import Case from '../assets/case.svg'
import timer from '../assets/timer.svg'
import removeBtn from '../assets/removeBtn.svg'
import help from '../assets/help.svg'
import pin from '../assets/pin.svg'

export default function Calender() {

    const [eventTime,setEventTime] = useState("")

    const [selectedDate,setSelectedDate] = useState(null);

    const [showModal,setShowModal] = useState(false);

    const [eventTitle,setEventTitle] = useState("");

    const [eventRole,setEventRole] = useState("");


    const [events,setEvents] = useState(()=>{

        const savedEvents = localStorage.getItem("calendarEvents"); 

        return savedEvents

        ? JSON.parse(savedEvents)

        : [];

        });

    const [showMoreModal,setShowMoreModal] = useState(false);

    const [selectedDayEvents,setSelectedDayEvents] = useState([]);     

    const [deleteModal,setDeleteModal] = useState(false);

    const [selectedPill,setSelectedPill] = useState(null);

    const todayDate = new Date()
    todayDate.setHours(0,0,0,0);

    const upcomingEvents = events.filter((event)=>{
      
        const eventDate = new Date(
            event.year,
            event.month,
            event.date
        )

        return eventDate>=todayDate

    }).slice(0,5);

    

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

    const [currentDate,setCurrentDate] = useState(new Date());
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const [miniDate,setMiniDate] = useState(new Date());
    const miniYear = miniDate.getFullYear();
    const miniMonth = miniDate.getMonth();

    const miniTotalDays = new Date(
        miniYear,
        miniMonth+1,
        0
    ).getDate();

    const miniFirstDayOfMonth = new Date(
        miniYear,
        miniMonth,
        1
    ).getDay();

    const miniDays = [];

    for(let i=0;i<miniFirstDayOfMonth;i++){
        miniDays.push(null);
    }

    for(let i=1;i<=miniTotalDays;i++){
        miniDays.push(i)
    }

     function miniNextMonth(){

        setMiniDate(

        new Date(

            miniYear,

            miniDate.getMonth()+1,

            1

        )

    );

    }

    function miniPreviousMonth(){

        setMiniDate(

        new Date(

        miniYear,

        miniDate.getMonth()-1,

        1

      )

   );

    }

    function miniToday(){
        setMiniDate(new Date())
    }

    const totalDays = new Date(
        currentYear,
        currentMonth +1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    const days = [];

    for(let i=0; i<firstDayOfMonth;i++){
        days.push(null);
    }

     for(let i=1; i<=totalDays;i++){
        days.push(i);
    }

    function nextMonth(){

        setCurrentDate(

        new Date(

            currentYear,

            currentDate.getMonth()+1,

            1

        )

    );

    }

    function previousMonth(){

        setCurrentDate(

        new Date(

        currentYear,

        currentDate.getMonth()-1,

        1

      )

   );

    }

    function today(){
        setCurrentDate(new Date())
    }


    useEffect(()=>{

        localStorage.setItem(

        "calendarEvents",

        JSON.stringify(events)

        );

    },[events]);

    return (
      <>
      <div className="main-wrapper">
     <div className="entire-page-wrapper-calendar">

    <div className="calendar-header-section">
        <header>

            <h3>Calendar</h3>
            <p>Manage your interviews, deadlines and job search activities.</p>
        </header>

        <div className="subHeader-wrapper" >
            <div className="next-back-navs">
                <button id="todayBtn" onClick={today}>Today</button>
            <button id="arrowBackBtn" onClick={previousMonth}><img src={arrowBack}  width="15px" height="15px"/></button>
            <button id="arrowForwardBtn" onClick={nextMonth}><img src={arrowForward} width="15px" height="15px"/></button>
            <h3>{months[currentDate.getMonth()]} {currentYear}</h3>
            </div>

            <div className="month-week-list-final-btn-container-wrapper">
                <div className="month-week-list-btns-container">
                    <button>Month</button>
                    <button>Week</button>
                    <button>List</button>
                </div>
                <button>+ Add Event</button>
            
            </div>
            

            
        </div>

    </div>

       <div className="week-days-name-container">
        
            <p>SUN</p>
            <p>MON</p>
            <p>TUE</p>
            <p>WED</p>
            <p>THUR</p>
            <p>FRI</p>
            <p>SAT</p>

       </div>

    <div className="calendarGrid">

   {days.map((day)=>{

        const dayEvents = events.filter(
            (event)=>
            event.date === day &&
            event.month === currentMonth &&
            event.year === currentYear

        );

        return (

      <div className={`${day?"calendarCell":"emptyCell"} ${currentDate.getDate()===day?"current-date-styling":""}`} onClick={()=>{
           day &&
          setShowModal(true);
          setSelectedDate(day);
            }}>

         <span>{day}</span>


       {
        dayEvents.slice(0,2).map((event,index)=>(

        <div

         className="event-pill"

         key={index}

         onClick={(e)=>{

            e.stopPropagation();

            setDeleteModal(true);

            setSelectedPill(event);

         }}

        >

         {event.title}

        </div>


        ))
        } 

        {
            dayEvents.length>2 && 

            <div className="event-pill" onClick={(e)=>{

            e.stopPropagation();

            setSelectedDayEvents(dayEvents);

            setSelectedDate(day);

            setShowMoreModal(true);

        }}
>
            + {dayEvents.length-2} more

        </div>

        }

      
      </div>

   )

    })
    }

    </div>


    {
        showModal &&

    <div className="modalOverlay">

        <div className="eventModal">

            <div className="show-modal-header">
                <img src={blueCalendar} width="40px" height="40px" />
                <div>
                    <h3>Add Event - {selectedDate}</h3>
                    <p>On <span style={{color:"#2668bf"}}>{selectedDate} {months[currentMonth]} {currentYear}</span></p>
                </div>
            </div>


     <label htmlFor="event-tite">Enter event : </label>
      <div className="add-event-input">

        <img src={eventImg} />
        
        <input

         id="event-title"

         type="text"

         placeholder="Enter event title"

         value={eventTitle}

         maxLength={30}

         onChange={(e)=>setEventTitle(e.target.value)}

         />


        </div>
         

         <label htmlFor="eventRole" >Event role : <span style={{color:"#5c5c5c"}}>(optional)</span></label>

         <div className="add-event-input">

        <img src={Case} />

        <div className="input-and-instruction">

         <input 

         id="eventRole" 

         type="text" 

         value={eventRole}

         placeholder="Enter the role you aplied for ..."
         
         onChange={(e)=>{

            setEventRole(e.target.value)
            
         }} />

         </div>

        </div>

        <div className="instruction">
            <img src={help}  width="20px" height="20px"/>
            <p>Helps you remember what this event is for. </p>
        </div>
         

        <label htmlFor="evenTime">Enter Time : </label>

        <div className="add-event-input">

        <img src={timer} />

        <input

        id="eventTime"

        type="time"

        value={eventTime}

        onChange={(e)=>setEventTime(e.target.value)}

         />

        </div>
        <div className="instruction">
            <img src={help}  width="20px" height="20px"/>
            <p>Select the schedue time for this event. </p>
        </div>

         <div className="modalBtns">

            <button

            className="show-modal-cancel-button"

            onClick={() => {

               setShowModal(false);

            }}

            >

               Cancel

            </button>

            <button

            className="show-modal-save-button"

            onClick={() => {

               eventTitle.trim()!=="" && 

               setEvents([

                  ...events,

                  {

                     date:selectedDate,

                     title:eventTitle,

                     month:currentMonth,

                     year:currentYear,

                     role:eventRole,

                     time: eventTime,
                     

                  }

               ]);

               setEventTitle("");

               setShowModal(false);

               setEventRole("");

               setEventTime("");
            }}  

            >

               Save Event

            </button>

         </div>

      </div>

    </div>
}

{/* delete task pop up model */}

    {deleteModal && 
      <div className="modalOverlay">

        <div className="eventModal">
            
            <div className="delete-modal-warning-header">
                <img src={warning} width="40px" height="40px"/>
                <div className="warning-text">
                    <h3>Delete this task?</h3>
                    <p>This action cannot be undone. The task details will be permanently removed.</p> <p></p>
                </div>
            </div>

            <div className="row-in-delete-modal">
                <img src={blueCalendar} width="30px" height="30px" />
                <div className="label-and-titles">
                    <p>Date</p>
                    <h3 >{selectedPill.date} {months[selectedPill.month]} {selectedPill.year} </h3>
                </div>
            </div>

            <div className="row-in-delete-modal">
                <img src={eventImg} width="30px" height="30px" />
                <div className="label-and-titles">
                    <p>Event</p>
                    <h3 style={{color:"#2668bf"}} >{selectedPill.title}</h3>
                </div>
            </div>

            <div className="row-in-delete-modal">
                <img src={Case} width="30px" height="30px" />
                <div className="label-and-titles">
                    <p>Role</p>
                    <h3 style={{color:"#2668bf"}}>{selectedPill.role}</h3>
                </div>
            </div>

             <div className="row-in-delete-modal">
                <img src={timer} width="30px" height="30px" />
                <div className="label-and-titles">
                    <p>Time</p>
                    <h3>{selectedPill.time}</h3>
                </div>
            </div>
        

         <div className="modalBtns">
            <button className="delete-modal-cancel-button" onClick={()=>setDeleteModal(false)}>
                Cancel
            </button>
            <button 
                className="delete-modal-delete-button"
                onClick={()=>{
                const updatedEvents = events.filter((event)=> event!==selectedPill)
                setEvents(updatedEvents);
                setDeleteModal(false);
            }
                
            }>
               Delete Task
            </button>
         </div>

      </div>
    </div>

    }

    {/* +more modal */}

    {
     showMoreModal &&

    <div className="modalOverlay">

      <div className="eventModal">

          <div className="show-modal-header">
                <img src={blueCalendar} width="40px" height="40px" />
                <div>
                    <h3>All Events</h3>
                    <p><span style={{color:"#2668bf"}}>{selectedDate} {months[currentMonth]} {currentYear}</span></p>
                </div>
            </div>

         {

            selectedDayEvents.map((event,index)=>(

            <div

               className="all-events-pill"

               key={index}

               >
                <div className="event-task-pinned">
                    <img src={pin}/>

                    <div>
                        <h3>{event.title}</h3>
                        <p style={{color:"#2668bf"}}><span style={{color:"#5c5c5c"}}>Role : </span>{event.role}</p>

                    </div>
                  
               </div>

               <div className="event-task-pinned-time">{event.time}</div>

            </div>
                

            ))

            

         }

         <div className="event-task-pinned-warning">
            <img src={warning} />
            Deleting an event will remove it from your calendar and cannot be undone.
        </div>

        <div className="event-task-pinned-Btn-container">

        <button

         className="event-task-pinned-cancelBtn"

         onClick={()=>setShowMoreModal(false)}

         >

            Close

         </button>

         <button

         className="event-task-pinned-deleteAllBtn"
         
         onClick={() => {

            const updatedEvents = events.filter(

            (event)=>

            !(

            event.date === selectedDate &&

            event.month === currentMonth &&

            event.year === currentYear

         )

        );

        setEvents(updatedEvents);

        setShowMoreModal(false);

    }}>
                Delete All
         </button>

        </div>

         

      </div>

   </div>
 }
  

    </div> 

    <div className="calendar-reminder-stats-wrapper">

        <div className="mini-calendar-wrapper">
            <div className="mini-title-button">
                <p id="mini-title">Mini Calendar</p>
                <button onClick={miniToday}>Today</button>
            </div>
            
            <div className="month-and-nav-of-mini-calendar">
                <button onClick={miniPreviousMonth}><img src={arrowBack}/></button>
                <h5>{months[miniDate.getMonth()]} {miniYear}</h5>
                <button onClick={miniNextMonth}><img src={arrowForward} /></button>
            </div>
            <header className="mini-calendar-week-days-container">
                <p>SU</p>
                <p>MO</p>
                <p>TU</p>
                <p>WE</p>
                <p>TH</p>
                <p>FR</p>
                <p>SA</p>
            </header>
            <div className="mini-calendarGrid">
        
            {
                miniDays.map((day)=>(

                <div  className={`${day?"mini-calendar-cell":"mini-empty-cell"} ${miniDate.getDate()===day?"current-date-styling-mini":""}`}>

                    {day}

                </div>

            ))
        }
            </div>

        </div>

{ upcomingEvents.length>0 &&
    <div className="reminder-upcoming-container">
        <header>
            <p id="main-header-line">Upcoming Events</p>
            <p id="view-all-btn">View all</p>
        </header>

    
      <table className="upcoming-reminder-table">
            { upcomingEvents.map((event,index)=>(
    
            
                <tr key={index}>
                    <td><img src={amazon}  width="30px" height="30px" /></td>
                    <td>
                        <p>{event.title}</p>
                        <p className="role-in-reminder-section">{event.role}</p>
                    </td>
                    <td>
                        <p>{event.date} {months[event.month]}</p>
                        <p>{event.time}</p>
                    </td>
                </tr>

           
        

            ))} 
        
        </table>
    
    

    </div>
}
  

        <div className="stats-container">

        <header>
            <p id="main-header-line">Calendar Stats</p>
            <button>This Month</button>
        </header>

       <div className="stats-data-cell-container-wrapper-perent">
            <div className="stats-data-cell-container-wrapper">

            <div className="stats-data-cell-container"> 
                <img id="interviews-img" src={dateBlue} width="30px" height="30px" />
                <div className="stats-data-cell">
                    <h1>7</h1>
                    <p>Interviws</p>
                </div>

            </div>

            <div className="stats-data-cell-container"> 
                <img id="assesment-img" src={dateRed} width="30px" height="30px" />
                <div className="stats-data-cell">
                    <h1>7</h1>
                    <p>Assesment</p>
                </div>

            
            </div>    

          </div> 


          <div className="stats-data-cell-container-wrapper">

            <div className="stats-data-cell-container"> 
                <img id="follow-up-img" src={followUp} width="30px" height="30px" />
                <div className="stats-data-cell">
                    <h1>7</h1>
                    <p>Follow up</p>
                </div>

            </div>

            <div className="stats-data-cell-container"> 
                <img id="meetings-img" src={dateBlue} width="30px" height="30px" />
                <div className="stats-data-cell">
                    <h1>7</h1>
                    <p>Meetings</p>
                </div>

            
            </div>    

          </div> 


        </div>    

        </div>

    

        
        
        
    
    </div>


    </div>
      </>
    )
}