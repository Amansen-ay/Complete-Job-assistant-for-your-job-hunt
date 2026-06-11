import './addNewJob.css';
import {useState,useEffect} from 'react';
import removeBtn from '../assets/removeBtn.svg'
import apartment from '../assets/apartment.svg'
import globe from '../assets/globe.svg'
import location from '../assets/location.svg'
import bulb from '../assets/bulbNew.svg'
import trackPath from '../assets/trackPathnew.svg'
import tipsTag from '../assets/tipsTagnew.svg'
import details from '../assets/details.svg'
import BackBtn from '../assets/goBack.svg'
import {NavLink} from 'react-router-dom';


export default function AddNewJob() {
   const [applicationArr,setApplicationArr] = useState(() => {

   return JSON.parse(
      localStorage.getItem("myApplications")
   ) || [];

});
    const [tags,setTags]  = useState([]);
    const [companyWebsite,setCompanyWebsite] = useState("")
    const [input,setInput] = useState("");
    const [employmentType,setEmploymentType] = useState("")
    const [note,setNote] = useState("");
    const [discription,setDiscription] = useState("");
    const [companyName,setCompanyName] = useState("");
    const [jobRole,setJobRole] = useState("");
    const [dateApplied,setDateApplied] = useState("");
    const [currentStatus,setCurrentStatus] = useState("");
    const [nextStep,setNextStep] = useState("");
    const [portalName,setPortalName] = useState("");

    const fields = [companyName,jobRole,dateApplied,currentStatus,nextStep,portalName];
    const completedFields = fields.filter((field) => field.trim() !=="").length;
    const progress = (completedFields/fields.length)*100

    function universalHandeler(e,setState){
        e.preventDefault();
         setState(e.target.value)
    }


    function tagInputHandeler(e) {
       
        setInput(e.target.value);

    }

    function addTag(e) {
        if(tags.length>=5){
            return;
        }
        if(e.key === "Enter") {
            e.preventDefault();
            setTags([...tags,input]);
            setInput("");
        }
    }

    function removeBtnHandeler(tagToRemove,e) {
        // e.preventDefault();
        const updatedTags = tags.filter((tag)=>tag!==tagToRemove);
        setTags(updatedTags);
    }

    function noteTextHandeler(e) {
        setNote(e.target.value)
    }

    function discriptionHandeler(e) {
        setDiscription(e.target.value)
    }
    
    useEffect(()=>{

       localStorage.setItem("myApplications",JSON.stringify(applicationArr))

    },[applicationArr])
    return (
        <>

        <div className="entire-page-wrapper">

        <div className="entire-form-container">
            <header className="application-page-header">
                <div className="page-title-and-backBtn">
                    <h1>Add New Job Application</h1>

                    <NavLink to="/dashboard/applications"  className="view-all-link">
                        <button > 
                        <img src={BackBtn}/>
                        <p>Back to Applications</p>
                        </button>
                    </NavLink>
                    
                </div>
                
                <p>Add the details of the job you've applied for to keep track of your progress.</p>
            </header>

            <div>
                <form>
                    <main className="company-and-role-details-container">


                        <header>
                        <h3>Company and role details</h3>
                        </header>

                    <div className="label-and-field-container-parent">

                        <div className="label-and-field-container">

                            <div className="label-and-field">
                                <label htmlFor="companyName">Company Name*</label>
                                <div className="input-focus-element">
                                    <input  id="companyName" type="text" placeholder="Enter your company name" value={companyName} onChange={(e)=>universalHandeler(e,setCompanyName)} />
                                    <img src={apartment} />
                                </div>
                                
                            </div>

                            <div className="label-and-field">
                                <label htmlFor="companyWebsite">Company Website*</label>
                                <div className="input-focus-element">
                                    <input id="companyWesite" type="text" placeholder="www.companyname.com"  value={companyWebsite} onChange={(e)=>universalHandeler(e,setCompanyWebsite)}/>
                                    <img src={globe} />
                                </div>
                                
                            </div>

                        </div>

                         <div className="label-and-field-container">

                            <div className="label-and-field">
                                <label htmlFor="jobRole">Job Title / Role*</label>
                                <div className="input-focus-element"> 
                                    <input id="jobRole" type="text" placeholder="Enter your job role" value={jobRole} onChange={(e)=>universalHandeler(e,setJobRole)} />
                                </div>
                                
                            </div>

                            <div className="label-and-field">
                                <label htmlFor="employmentType">Employment type*</label>
                                <select id="employmentType" value={employmentType} onChange={(e)=>universalHandeler(e,setEmploymentType)}>
                                    <option>Select type</option>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Full-time / Remote">Full-time / Remote</option>
                                    <option value="Part-time / Remote">Part-time / Remote</option>
                                </select>
                            </div>

                        </div>

                         <div className="label-and-field-container">

                            <div className="label-and-field">
                                <label htmlFor="jobLocation">Job location*</label>
                                <div className="input-focus-element">
                                    <input id="jobLocation" type="text" placeholder="Enter your location" />
                                    <img src={location} />
                                </div>
                                
                            </div>

                            <div className="label-and-field">
                                <label htmlFor="experienceLevel">Experience level*</label>
                                <select id="experienceLevel">
                                    <option value="Select Experience">Select Experience</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="0-2 years">0-2 years</option>
                                    <option value="3-5 Years">3-5 Years</option>
                                    <option value="5-10 Years">5-10 Years</option>
                                    <option value="10 + Years">10 + years</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    
                </main>


                <main className="company-and-role-details-container">


                        <header>
                        <h3>Application details</h3>
                        </header>

                    <div className="label-and-field-container-parent">

                        <div className="label-and-field-container">

                            <div className="label-and-field">
                                <label htmlFor="dateApplied">Date Applied*</label>
                                <input id="dateApplied" type="date" value={dateApplied} onChange={(e)=>universalHandeler(e,setDateApplied)} />
                            </div>

                            <div className="label-and-field">
                                <label htmlFor="currentStatus">Current Status*</label>
                                <select  id="currentStatus" value={currentStatus} onChange={(e)=>universalHandeler(e,setCurrentStatus)}>
                                   
                                    <option>Select status</option>
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

                        </div>

                         <div className="label-and-field-container">

                            <div className="label-and-field">
                                <label htmlFor="nextStep">Next Step*</label>

                                <select id="nextStep" value={nextStep} onChange={(e)=>universalHandeler(e,setNextStep)}>

                                    <option value="Select next step">Select next step</option>

                                    <option value="Wait for response">Wait for response</option>

                                    <option value="Prepare for interview">Prepare for interview</option>

                                    <option value="Complete assessment">Complete assessment</option>

                                    <option value="Send follow-up email">Send follow-up email</option>

                                    <option value="Attend interview">Attend interview</option>

                                    <option value="Review offer">Review offer</option>

                                    <option value="Submit documents">Submit documents</option>

                                    <option value="Schedule HR call">Schedule HR call</option>

                                    <option value="Negotiate salary">Negotiate salary</option>

                                    <option value="No action required">No action required</option>

                                </select>
                            </div>

                            <div className="label-and-field">
                                <label htmlFor="sourceName">Portal Name*</label>
                                {/* <input id="nextStepDate" type="date" value={nextStepDate} onChange={(e)=>universalHandeler(e,setNextStepDate)}/> */}
                                <select name="Source" id="sourceName" value={portalName} onChange={(e)=>universalHandeler(e,setPortalName)}>
                                    <option value="">Select source</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Indeed">Indeed</option>
                                    <option value="Naukri">Naukri</option>
                                    <option value="Apna">Apna</option>
                                    <option value="Internshala">Internshala</option>
                                    <option value="others">others</option>
    
                                </select>
                            </div>

                        </div>

                      
                    </div>
                    
                </main>

                <main className="additional-info-container">
                    <header className="additional-info-header">
                        <h3>Additional information</h3>
                        <p>Job description (optional)</p>
                    </header>
                    <div className="discription-container">
                        <textarea  maxLength={500} placeholder="Write the job discription" onChange={discriptionHandeler}></textarea>
                        <p>{discription.length}/500</p>
                    </div>

                   <div className="tags-and-input-container-wrapper">
                    <header>
                        <h4>Add tags</h4>
                        <p>(Maximum 5)</p>
                    </header>
                    
                    <div className="tags-and-input-container input-focus-element">
                        {tags.map((tag)=>(
                         <div className="tag-container">
                            <p>{tag}</p>
                            <button type="button" onClick={()=>removeBtnHandeler(tag)}><img src={removeBtn} width="19px" height="19px"/></button>
                         </div>
                        ))}
                        
                        <input type="text" value={input} placeholder="React.js, Python, HTML..." onChange={tagInputHandeler} onKeyDown={addTag}/>
                    </div>
                   </div>

                   <div className="notes-container">
                    <header>
                        <h3>Notes (optional)</h3>
                    </header>
                    <div className="noteText-and-length-container">
                        <textarea maxLength={200} className="notes-textarea" placeholder="Add your note " onChange={noteTextHandeler}></textarea>
                        <p>{note.length}/200</p>
                    </div>
                    
                   </div>

                   <div className="save-and-cancel-btn">

                     <button id="cancelBtn">Cancel</button>
                     <button 
                     id="saveApplicationBtn"
                     type="button"
                     onClick={()=>{
                        companyName!=="" && jobRole!=="" && currentStatus!=="" && dateApplied!=="" && nextStep!=="" && employmentType!=="" &&
                        setApplicationArr([
                         ...applicationArr,
                        {
                            company:companyName,
                            role:jobRole,
                            status:currentStatus,
                            dateApplied:dateApplied,
                            nextStep:nextStep,
                            employmentType:employmentType,
                            portal:portalName,
                        }
                    ]
                       
                    )

                    setCompanyName("");
                    setJobRole("");
                    setDateApplied("");
                    setNextStep("");
                    setEmploymentType("");
                    setNote("");
                    setDiscription("");
                    setCurrentStatus("");
                    setPortalName("");
                    setCompanyWebsite("");

                     }
                    
                     }>Save Application</button>

                   </div>

                </main>
   
                </form>
            </div>

        </div>

        <div className="tips-and-progress-container-wrapper">

            <div className="tips-and-progress-container">
                <div className="tips-logo">
                    <img src={bulb}/>
                    <p>Tips</p>
                </div>
                

                <div className="tips-container">
                    <header>
                        <img src={details}/>
                        Add as much details as possible
                    </header>
                    <p>It helps you stay organize and prepare better.</p>
                </div>
                <div className="tips-container">
                    <header>
                        <img src={trackPath}/>
                        Track next steps
                        </header>
                    <p>Always update the next step and expected date.</p>
                </div>
                <div className="tips-container">
                    <header>
                        <img src={tipsTag}/>
                        Use tags
                        </header>
                    <p>Tags helps you filter and find applications easily.</p>
                </div>
            </div>

       
        <div className="applicationProgressCard">

            <h3>Application Progress</h3>

            <p className="progressText"> {progress}% Completed</p>

            <div className="progressBar">

                <div className="progressFill" style={{ width:`${progress}%`}}/>

              </div>


        <div className="progressChecklist">

            <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Company Name</p>

            </div>

            {
                companyName
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

        </div>



        <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Job Title</p>

            </div>

            {
                jobRole
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

        </div>



        <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Date Applied</p>

            </div>

            {
                dateApplied
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

        </div>



        <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Current Status</p>

            </div>

            {
                currentStatus
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

        </div>



        <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Next Step</p>

            </div>

            {
                nextStep
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

        </div>



        <div className="progressItem">

            <div className="progressItemLeft">

                <span>›</span>

                <p>Next step date</p>

            </div>

            {
                portalName
                ?
                <span className="completed">✔</span>
                :
                <span className="pending">○</span>
            }

            </div>

        </div>

        </div>

        </div>
     </div>
        
        </>
    )
}