import './calender.css';
import {useState,useEffect} from 'react';
import arrowBack from '../assets/arrowBack.svg'
import arrowForward from '../assets/arrowForward.svg'
import amazon from '../assets/amazon.png'
import dateBlue from '../assets/dateBlue.svg'
import dateRed from '../assets/dateRed.svg'
import followUp from '../assets/followUp.svg'

export default function Calender() {

    const [selectedDate,setSelectedDate] = useState(null);

    const [showModal,setShowModal] = useState(false);

    const [eventTitle,setEventTitle] = useState("");

    const [events,setEvents] = useState(()=>{

        const savedEvents = localStorage.getItem("calendarEvents"); 

        return savedEvents

        ? JSON.parse(savedEvents)

        : [];

        });

    const [showMoreModal,setShowMoreModal] = useState(false);

    const [selectedDayEvents,setSelectedDayEvents] = useState([]);     

    const [deleteModal,setDeleteModal] = useState(false);

    const [selectedPill,setSelectedPill] = useState(null)

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

         <h3>

            Add Event - {selectedDate}

         </h3>

         <input

         type="text"

         placeholder="Enter event"

         value={eventTitle}

         maxLength={30}

         onChange={(e)=>setEventTitle(e.target.value)}

         />

         <div className="modalBtns">

            <button

            onClick={() => {

               setShowModal(false);

            }}

            >

               Cancel

            </button>

            <button

            onClick={() => {

               setEvents([

                  ...events,

                  {

                     date:selectedDate,

                     title:eventTitle,

                     month:currentMonth,

                     year:currentYear

                  }

               ]);

               setEventTitle("");

               setShowModal(false);

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

         <h3>
            Want to delete the Task for {selectedDate} {months[currentMonth]}? 
            
         </h3>
         <h3 style={{color:"#007de3"}}>"{selectedPill.title}"</h3>

         <div className="modalBtns">
            <button onClick={()=>setDeleteModal(false)}>
                Cancel
            </button>
            <button onClick={()=>{
                const updatedEvents = events.filter((event)=> event!==selectedPill)
                setEvents(updatedEvents);
                setDeleteModal(false);
            }
                
            }>
               Delete
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

         <h3>

            All Events -  {months[currentDate.getMonth()]} {selectedDate}

         </h3>

         {

            selectedDayEvents.map((event,index)=>(

               <div

               className="all-events-pill"

               key={index}

               >

                  {event.title}

               </div>

            ))

         }

         <button

         onClick={()=>setShowMoreModal(false)}

         >

            Close

         </button>

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

        <div className="reminder-upcoming-container">
            <header>
                <p id="main-header-line">Upcoming Events</p>
                <p id="view-all-btn">View all</p>
            </header>

            <table>
                <tr>
                    <td><img src={amazon}  width="30px" height="30px" /></td>
                    <td>
                        <p>Interview with google</p>
                        <p className="role-in-reminder-section">Frontend Developer</p>
                    </td>
                    <td>
                        <p>20 May</p>
                        <p>10:30 AM</p>
                    </td>
                </tr>

                <tr>
                    <td><img src={amazon}  width="30px" height="30px" /></td>
                     <td>
                        <p>Interview with google</p>
                        <p className="role-in-reminder-section">Frontend Developer</p>
                    </td>
                     <td>
                        <p>20 May</p>
                        <p>10:30 AM</p>
                    </td>
                </tr>

                <tr>
                    <td><img src={amazon}  width="30px" height="30px" /></td>
                     <td>
                        <p>Interview with google</p>
                        <p className="role-in-reminder-section">Frontend Developer</p>
                    </td>
                     <td>
                        <p>20 May</p>
                        <p>10:30 AM</p>
                    </td>
                </tr>

                <tr>
                    <td><img src={amazon}  width="30px" height="30px" /></td>
                     <td>
                        <p>Interview with google</p>
                        <p className="role-in-reminder-section">Frontend Developer</p>
                    </td>
                     <td>
                        <p>20 May</p>
                        <p>10:30 AM</p>
                    </td>
                </tr>
            </table>
        </div>

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