import Amazon from '../assets/amazon.png'
import './dataTable.css'
import {NavLink} from 'react-router-dom'
import recentApplication from '../assets/recentApplications.png'


const facts = ["Great start! 💪\nKeep applying to grow your opportunities.","☕A rejection usually means 'not this role', not 'not you'.","Candidates who tailor their resume are more likely to get interview calls."]

const myApplications = JSON.parse(localStorage.getItem("myApplications"))  || [] ;
function Placeholder(){
    return (
        <>
        <main className="placeholder-container-recent-applications">
        <div className="empty-placeholder-recent-applications">
            <img src={recentApplication} alt="not found" width="210px" height="150px"/>
            <h3 style={{color:"#313131"}}>No recent applications</h3>
            <p style={{color:"#313131"}}>You haven't added any job application yet.</p>
            <p>Add your first application to see it here.</p>
            <NavLink to="/dashboard/addNewJob" className="view-all-link-applications">
                <button className="go-to-applications">
                {/* <img src={calendarPurple} alt="not found"/> */}
               Add your application
                </button>
            </NavLink>
        </div>
        </main>
        </>
    )
}


function TableRow() {
    

    return (
        <>

        { myApplications.length>0?

             myApplications.slice(0,4).map((obj)=>{
            return (
                <>
                <div>
                    <div className="tableRow">

                    <div className="tableRowLeftPart">
                        <img src={Amazon} width="40px" height="40px" />

                        <div className="jobRole">
                            <h4>{obj.company}</h4>
                            <p>{obj.role}</p>   
                        </div>
                    </div>
                
               
                    <h4 id>{obj.status}</h4>
               
                

                    <p>{obj.dateApplied}</p>
                
                    </div>  
                </div>
              
            
            </>
            
            )
        })
            
        
        :
        <div className="placeholder-container-applications">
         <Placeholder/>
        </div>
        }
       
            
        </>
    )
}

export default function datatable() {
    return (
        <>
        <div className="tableContainer">
            <header className="tableHeader">
             <h3>Recent Applications</h3>
             <NavLink to="/dashboard/applications" className="view-all-link">
                <p>View all</p>
             </NavLink>
                
            </header    >
     
            <div id="strecher">
              <TableRow/> 
              {myApplications.length <= 3 && myApplications.length>0 && (
                
                    
                        facts.slice(0,facts.length-myApplications.length+1).map((fact)=>{
                            return (
                                <div className="encourage">
                                <p>{fact}</p>
                                </div>
                            )
                        })
                    
                
            )}
                 
            </div>
            
        </div>
        </>
    )
}