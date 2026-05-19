import './page1.css'
import HeroLeft from './heroLeft.jsx'
import avatar1 from '../../assets/avatar1.jpeg'
import avatar2 from '../../assets/avatar2.jpeg'
import avatar3 from '../../assets/avatar3.jpeg'
import DataCard from './dataCards.jsx' 
import spotify from '../../assets/finalspotify.png'
import airnb from '../../assets/airnbLogo.png'
import amazon from '../../assets/amazon.png'
import dropDown from '../../assets/chevron.svg'
import jobLogo from '../../assets/jobLogo.svg'
import {ProgressCard} from './dataCards.jsx'
import DonutChart from './chart.jsx' 
import creditCard from '../../assets/creditCard.svg'
import secure from '../../assets/secure.svg'
import heart from '../../assets/like.svg'
import companion from '../../assets/companion.svg'





export default function Page1(){
    return (
        <>
        <section style={{ display: "flex", minHeight: "100vh" }}>


            <div style={{width:"40%",padding:"40px",marginTop:"-18px"}}>
            <HeroLeft/>
            </div>


        <div style={{width:"60%",padding:"30px",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)",marginTop:"20px"}}>
                <div style={{height:"100%"}}>
                    <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"200px", marginBottom:"30px"}}>
                    <h2>Overview</h2>
                    <div style={{display:"flex",alignItems:"center",gap:"4px",backgroundColor:"#959494a7",borderRadius:"2px"}}>
                    <p style={{width:"fit-content",padding:"5px 8px"}}>This weak</p>
                    <img src={dropDown} />
                    </div>
                    </header>

                    <div id="cardContainer" style={{display:"flex",justifyContent:"space-between"}}>
                      <DataCard name={"Applications"} number={"28"} progress={"40%"}/>
                      <DataCard name={"Interviews"} number={"6"} progress={"20%"}/>
                      <DataCard name={"Offers"} number={"2"} progress={"100%"}/>
                      <DataCard name={"Rejections"} number={"8"} progress={"14%"}/>
                    </div>
                    <ProgressCard/>
                    <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>

                        <div style={{width:"50%", backgroundColor:"white",height:"220px",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)",padding:"10px"}}>
                            <h3 style={{marginBottom:"20px"}}>Recent Activity</h3>


                            <div style={{display:"flex",marginBottom:"15px"}}>
                                <img src={spotify} width="40px" height="40px"/>
                                <div style={{lineSpacing:"2px"}}>
                                    <p>Interview scheduled with Spotify</p>
                                    <p style={{fontSize:"10px"}}>May 24, 2024 - 10:00 AM</p>
                                </div>
                            </div>

                            <div style={{display:"flex",marginBottom:"15px"}}>
                                <img src={airnb} width="40px" height="40px"/>
                                <div style={{lineSpacing:"2px"}}>
                                    <p>Application viewed by airnb</p>
                                    <p style={{fontSize:"10px"}}>May 24, 2024 - 10:00 AM</p>
                                </div>
                            </div>

                            <div style={{display:"flex",marginBottom:"15px"}}>
                                <img src={amazon} width="40px" height="40px"/>
                                <div style={{lineSpacing:"2px"}}>
                                    <p>Moved to Interview at Amazon</p>
                                    <p style={{fontSize:"10px"}}>May 24, 2024 - 10:00 AM</p>
                                </div>
                            </div>
                            
                            

                        </div>
                        <div style={{width:"45%" , backgroundColor:"white",height:"220px",borderRadius: "12px",boxShadow: "0 10px 30px rgba(0,0,0,0.1)",padding:"10px"}}>
                           <DonutChart/>
                        </div>
                    </div>
                    
                </div>
        </div>
        </section>
        </>
    )
}

    
   





