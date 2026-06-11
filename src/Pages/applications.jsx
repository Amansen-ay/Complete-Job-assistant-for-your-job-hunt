import './applications.css'
import Filter from '../assets/filter.svg'
import Amazon from '../assets/amazon.png'
import {useEffect,useRef,useState} from 'react';
import more from '../assets/more.svg'
import applicationsEmpty from '../assets/applicationsEmpty.png'
import {NavLink} from 'react-router-dom';
function ApplicationTable() {

       
     
       const menuRef = useRef()
       const [myApplications,setMyApplications] = useState(JSON.parse(localStorage.getItem("myApplications")) || []) 
       const [showMenu,setShowMenu] = useState(false);
       const [selectedApplicationRow,setSelectedApplicationRow] = useState({});


        function deleteApplicationHandeler() {
            const filteredMyApplications = myApplications.filter((obj)=>(
            obj!==selectedApplicationRow
         ))
         setMyApplications(filteredMyApplications);
         setShowMenu(-1);
        }

        useEffect(()=>{
            localStorage.setItem("myApplications",JSON.stringify(myApplications))
        },[myApplications]);
        

        const jobsPerPage = 5;
        const [currentPage,setCurrentPage] = useState(1);
        const totalPages = Math.ceil(myApplications.length/jobsPerPage);
        const lastIndex = currentPage*jobsPerPage;
        const firstIndex = lastIndex - jobsPerPage;


    return (
        <>
        { myApplications.length>0?
        <div className="application-table">
          <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Date Applied</th>
                    <th>Next step</th>
                    <th>Employment type</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                { 
                   myApplications.slice(firstIndex,lastIndex).map((obj,index)=>{
                     return (
                        <>
                        <tr key={index}>
                            <td className="service-and-logo">
                                <p><b>{obj.company}</b></p>
                            </td>
                            <td>{obj.role}</td>
                            <td>
                                <div className={obj.status==="Interview Scheduled" || obj.status==="Tech Interview" || obj.status==="HR Interview" ? "Interview" : obj.status==="Applied" ?"Applied" : obj.status==="Under Review" ? "Under-Review" : obj.status==="Assessment" || obj.status==="Offer Received" ? "assessment-offer" : "Rejected" }>
                                    {obj.status}
                                </div>
                            </td>
                            <td>{obj.dateApplied}</td>
                            <td>{obj.nextStep}</td>
                            <td>{obj.employmentType}</td>
                            <td>
                                <div className="menu-wrapper">
                                    <img  className="three-dots-btn" src={more} onClick={()=>{
                                    setShowMenu((prev)=>prev===index?-1:index);
                                    setSelectedApplicationRow(obj);
                                    }}/>
                            
                                    {
                                        showMenu === index && (
                            
                                        <div ref={menuRef} className="dropdown-menu" onClick={(e)=>e.stopPropagation()}>
                            
                                        <button onClick={deleteApplicationHandeler}>Delete</button>
                            
                                        </div>
                            
                                        )
                            
                                    }
                            
                                </div>
                            
                            </td>

                        </tr>
                        </>
                     )
                   }) 
                }
                

            </tbody>

          </table>

          <div className="pagination-container">

          { myApplications.length >0 &&
             <div className="pagination-ui-block">
            
                <button 
                
                id="prevBtn"
                
                disabled = {currentPage===1}
 
                onClick={()=>setCurrentPage(currentPage-1)}> {"<"} Prev</button>
                
            
                <p className="pages-data">Page {currentPage} of {totalPages}</p>

                <button 

                id="nextBtn"

                disabled = {currentPage===totalPages}
 
                onClick={()=>setCurrentPage(currentPage+1)}

                >Next {">"}</button>
           
            </div>
          }
          
        </div>


          </div>

        :
        <div className="application-empty-img-wrapper">
                  <img src={applicationsEmpty}  width="280px" height="250px"/>
                  <h3>No applications yet!</h3>
                  <p>You haven't added any job application yet.</p>
                  <p>Click the button below to add your first application.</p>
        
                  <NavLink to="/dashboard/addNewJob" className="add-new-job-btn-placeholder">
                        <button onClick={()=>setShowTaskModal(true)}>+ Add new application</button>
                  </NavLink>
        </div>
        
        }
       
        </>
    )
}


export default function Applications() {
    return (
        <> 
        <div>
            <header className="appliation-navs-container" >
                <div className="application-navs">
                    <p>All Applications</p>
                    <p>Applied</p>
                    <p>Interview</p>
                    <p>Assesment</p>
                    <p>Offers</p>
                    <p>Rejected</p> 
                </div>

                <div className="filter-and-addJob">
                    <div><img src={Filter} />
                    <p>Filter</p>
                    </div>
                    <NavLink to="/dashboard/addNewJob">
                        <button> + Add New Job</button>
                    </NavLink>
                    
                </div>
            
            </header>

            <div className="application-table-container">
                <ApplicationTable/>
            </div>
        </div>
        </>
    )
}