import './reminderSection.css'


function ReminderSectionTableRow({service}) {
    return (
        <>
        <div className="ReminderSectionTableRow">
            <div className="dateContainer">
            <h3>22</h3>
            <p>May</p> 
            </div>

            <div className="schedule">
                <h3>Interview with {service}</h3>
                <p>10:30 AM - 11:30 AM</p>
            </div>

            <h4 id="levelOfAppliction">Interview</h4>
            
        </div>
        </>
    )
}
export default function ReminderSection() {
    return (
        <>
        <div className="reminderSectionContainer">
            <header className="reminderSectionHeader">
                <h3>Upcoming Reminders</h3>
                <p>View Calendar</p>
            </header>
            <div>
                <ReminderSectionTableRow service={"Google"}/>
                <ReminderSectionTableRow service={"Microsoft"}/>
                <ReminderSectionTableRow service={"Amazon"}/>
            </div>


        </div>
        </>
    )
}