import jobLogo from '../../assets/jobLogo.svg'
import avatar1 from '../../assets/avatar1.jpeg'
import avatar2 from '../../assets/avatar2.jpeg'
import avatar3 from '../../assets/avatar3.jpeg'
import creditCard from '../../assets/creditCard.svg'
import secure from '../../assets/secure.svg'
import heart from '../../assets/like.svg'
import companion from '../../assets/companion.svg'

export default function Heroleft(){
    return (
        <>
             <div style={{height:"100%"}}>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",width:"fit-content",borderRadius:"20px",color:"#2e25d8",padding:"8px",border:"1px solid #2e25d8 ",gap:"5px"}}>
                        <span><img src={jobLogo}  /></span>
                        <p>
                            For job seekers who want to stay organinzed
                        </p>
                        </div>               
                        <h1 style={{fontSize:"50px",marginTop:"30px",marginBottom:"30px"}}>Your job search completely under <span style={{color:"blue"}}>Control</span></h1>
                        <p style={{fontSize:"20px",fontWeight:"400", marginBottom:"30px"}}>Track applications, manage follow-ups, and analyze <br /> progress — all in one simple dashboard.</p>
                        <input type="text" placeholder="Enter your Email" style={{width:"200px",height:"40px",borderRadius:"8px",paddingLeft:"10px"}}/>
                        <button id="getStartedBtn" style={{backgroundColor:"#2e25d8",width:"130px", height:"40px",marginLeft:"30px",border:"2px solid #2e25d8",borderRadius:"8px",color:"white"}}>Get started free</button>
                        
                    <div className="trust" style={{marginTop:"30px"}}>
              
                           <div className="avatars">
                           <img src={avatar1} alt="" />
                           <img src={avatar2} alt="" />
                           <img src={avatar3} alt="" />
                        </div>
        
                       <div className="stars">
                       ⭐⭐⭐⭐⭐
                       </div>
        
                      <p className="text">
                      Join 10,000+ job seekers already tracking smarter
                    </p>
        
                  </div>
                 <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
        
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={creditCard} style={{backgroundColor:"#eceef593",borderRadius:"50%",padding:"5px"}}/>
                        <p>No credit card required</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={secure} style={{backgroundColor:"#d8f8d8ac",borderRadius:"50%",padding:"5px"}}/>
                        <p>Private & secure</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={companion} style={{backgroundColor:"#eceef593",borderRadius:"50%",padding:"5px"}}/>
                        <p>Your only job companion</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={heart} style={{backgroundColor:"#d8f8d8ac",borderRadius:"50%",padding:"5px"}}/>
                        <p>Loved by job seekers</p>
                    </div>
                 </div>
                </div>
        </>
    )
}