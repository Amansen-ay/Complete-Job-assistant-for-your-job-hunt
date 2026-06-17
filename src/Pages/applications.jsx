import './applications.css'
import Filter from '../assets/filter.svg'
import Amazon from '../assets/amazon.png'
import {useEffect,useRef,useState} from 'react';
import more from '../assets/more.svg'
import applicationsEmpty from '../assets/applicationsEmpty.png'
import {NavLink} from 'react-router-dom';
function ApplicationTable({ activeStatus }) {

       
     
       const menuRef = useRef()
       const [myApplications,setMyApplications] = useState(JSON.parse(localStorage.getItem("myApplications")) || []) 
       const [showMenu,setShowMenu] = useState(-1);
       const [selectedApplicationRow,setSelectedApplicationRow] = useState({});
       const [showEditModal, setShowEditModal] = useState(false);
       const [editData, setEditData] = useState({});


        function deleteApplicationHandeler() {
            const filteredMyApplications = myApplications.filter((obj)=>(
            obj!==selectedApplicationRow
         ))
         setMyApplications(filteredMyApplications);
         setShowMenu(-1);
        }

        function handleEditClick() {
            setEditData(selectedApplicationRow);
            setShowEditModal(true);
            setShowMenu(-1);
        }

        function handleUpdateApplication(updatedApp) {
            const updatedApps = myApplications.map(app => 
                app === selectedApplicationRow ? updatedApp : app
            );
            setMyApplications(updatedApps);
            setShowEditModal(false);
        }

        useEffect(()=>{
            localStorage.setItem("myApplications",JSON.stringify(myApplications));
            window.dispatchEvent(new Event("applicationsUpdated"));
        },[myApplications]);

        useEffect(() => {
            function handleClickOutside(event) {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setShowMenu(-1);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);
        
        const filteredApps = [...myApplications].reverse().filter(app => {
            if (activeStatus === "All Applications") return true;
            if (activeStatus === "Interview") return app.status.toLowerCase().includes("interview");
            if (activeStatus === "Assesment") return app.status === "Assessment";
            if (activeStatus === "Offers") return app.status === "Offer Received";
            return app.status === activeStatus;
        });

        const jobsPerPage = 5;
        const [currentPage,setCurrentPage] = useState(1);
        
        useEffect(() => {
            setCurrentPage(1);
        }, [activeStatus]);

        const totalPages = Math.ceil(filteredApps.length/jobsPerPage);
        const lastIndex = currentPage*jobsPerPage;
        const firstIndex = lastIndex - jobsPerPage;


    return (
        <>
        { filteredApps.length>0?
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
                   filteredApps.slice(firstIndex,lastIndex).map((obj,index)=>{
                     return (
                        <tr key={index}>
                            <td className="service-and-logo">
                                <div className="company-badge">
                                    {obj.company}
                                </div>
                            </td>
                            <td>
                                <div className="next-step-badge">
                                    {obj.role}
                                </div>
                            </td>
                            <td>
                                <div className={`status-badge ${
                                    obj.status === "Interview Scheduled" || obj.status === "Tech Interview" || obj.status === "HR Interview" ? "status-interview" : 
                                    obj.status === "Applied" ? "status-applied" : 
                                    obj.status === "Under Review" ? "status-review" : 
                                    obj.status === "Assessment" ? "status-assessment" : 
                                    obj.status === "Offer Received" ? "status-offer" : 
                                    "status-rejected"
                                }`}>
                                    {obj.status}
                                </div>
                            </td>
                            <td>
                                <div className="next-step-badge">
                                    {obj.dateApplied}
                                </div>
                            </td>
                            <td>
                                {obj.nextStep && (
                                    <div className="next-step-badge">
                                        {obj.nextStep}
                                    </div>
                                )}
                            </td>
                            <td>
                                <div className="next-step-badge">
                                    {obj.employmentType}
                                </div>
                            </td>
                            <td>
                                <div className="menu-wrapper" ref={showMenu === index ? menuRef : null}>
                                    <img  className="three-dots-btn" src={more} onClick={()=>{
                                    setShowMenu((prev)=>prev===index?-1:index);
                                    setSelectedApplicationRow(obj);
                                    }}/>
                            
                                    {
                                        showMenu === index && (
                            
                                        <div ref={menuRef} className="dropdown-menu" onClick={(e)=>e.stopPropagation()}>
                            
                                        <button onClick={handleEditClick}>Edit</button>
                                        <button onClick={deleteApplicationHandeler}>Delete</button>
                            
                                        </div>
                            
                                        )
                            
                                    }
                            
                                </div>
                            
                            </td>

                        </tr>
                     )
                   }) 
                }
                

            </tbody>

          </table>

          <div className="pagination-container">

          { filteredApps.length > 0 &&
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
                  <h3>No applications found!</h3>
                  <p>You haven't added any applications with the status "{activeStatus}" yet.</p>
                  
                  <NavLink to="/dashboard/addNewJob" className="add-new-job-btn-placeholder">
                        <button>+ Add new application</button>
                  </NavLink>
        </div>
        
        }

        {showEditModal && (
            <EditModal 
                data={editData} 
                onClose={() => setShowEditModal(false)} 
                onSave={handleUpdateApplication}
            />
        )}
       
        </>
    )
}

function EditModal({ data, onClose, onSave }) {
    const [formData, setFormData] = useState({ ...data });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="modal-overlay-notes-page">
            <div className="note-modal edit-app-modal">
                <div className="modal-header-notes-page">
                    <h2>Edit Application</h2>
                    <button className="close-btn-note-page" onClick={onClose}>✕</button>
                </div>
                <div className="modal-body-notes-page">
                    <div className="label-and-field">
                        <label>Company</label>
                        <input maxLength={50} name="company" value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="label-and-field">
                        <label>Role</label>
                        <input maxLength={50}name="role" value={formData.role} onChange={handleChange} />
                    </div>
                    <div className="label-and-field">
                        <label>Status</label>
                        <select name="status" value={formData.status} onChange={handleChange}>
                            <option>Applied</option>
                            <option>Under Review</option>
                            <option>Interview Scheduled</option>
                            <option>Tech Interview</option>
                            <option>HR Interview</option>
                            <option>Assessment</option>
                            <option>Offer Received</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                    <div className="label-and-field">
                        <label>Next Step</label>
                        <input name="nextStep" value={formData.nextStep} onChange={handleChange} />
                    </div>
                    <div className="label-and-field">
                        <label>Employment Type</label>
                        <select name="employmentType" value={formData.employmentType} onChange={handleChange}>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Remote">Remote</option>
                            <option value="Full-time / Remote">Full-time / Remote</option>
                            <option value="Part-time / Remote">Part-time / Remote</option>
                        </select>
                    </div>
                </div>
                <div className="modal-footer-notes-page">
                    <button className="cancel-btn-notes-page" onClick={onClose}>Cancel</button>
                    <button className="save-btn-notes-page" onClick={() => onSave(formData)}>Save Changes</button>
                </div>
            </div>
        </div>
    );
}


export default function Applications() {
    const [myApplications] = useState(JSON.parse(localStorage.getItem("myApplications")) || []);
    const [activeStatus, setActiveStatus] = useState("All Applications");
    
    const getCount = (status) => {
        if (status === "All Applications") return myApplications.length;
        if (status === "Interview") return myApplications.filter(app => app.status.toLowerCase().includes("interview")).length;
        if (status === "Assesment") return myApplications.filter(app => app.status === "Assessment").length;
        if (status === "Offers") return myApplications.filter(app => app.status === "Offer Received").length;
        return myApplications.filter(app => app.status === status).length;
    };

    const statuses = [
        { label: "All Applications", value: "All Applications" },
        { label: "Applied", value: "Applied" },
        { label: "Interview", value: "Interview" },
        { label: "Assesment", value: "Assesment" },
        { label: "Offers", value: "Offers" },
        { label: "Rejected", value: "Rejected" }
    ];

    return (
        <> 
        <div>
            <header className="appliation-navs-container" >
                <div className="application-navs">
                    {statuses.map(status => (
                        <p 
                            key={status.value} 
                            onClick={() => setActiveStatus(status.value)}
                            className={activeStatus === status.value ? "active" : ""}
                        >
                            {status.label} ({getCount(status.value)})
                        </p>
                    ))}
                </div>

                <div className="filter-and-addJob">
                   
                    <NavLink to="/dashboard/addNewJob">
                        <button> + Add New Job</button>
                    </NavLink>
                    
                </div>
            
            </header>

            <div className="application-table-container">
                <ApplicationTable activeStatus={activeStatus}/>
            </div>
        </div>
        </>
    )
}