import dropDown from '../../assets/chevron.svg'
import spotify from '../../assets/finalspotify.png'
import airnb from '../../assets/airnbLogo.png'
import amazon from '../../assets/amazon.png'
import DataCard from  './dataCards.jsx'
import {ProgressCard} from './dataCards.jsx'
import DonutChart from './donutChart.jsx'
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Google", value: 6, color: "#6366f1" },
  { name: "Spotify", value: 4, color: "#22c55e" },
  { name: "Airbnb", value: 3, color: "#ef4444" },
  { name: "Microsoft", value: 2, color: "#f97316" },
  { name: "Others", value: 13, color: "#fbbf24" },
];


export default function HeroRight(){

    return (
        <>
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
                
        </>
    )
}

export function Legend() {

  return (

   <div>
  {data.map((item) => (
    <div key={item.name} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <div style={{
        width: "10px",
        height: "10px",
        background: item.color,
        borderRadius: "50%"
      }}></div>

      <span>{item.name} ({item.value})</span>
    </div>
  ))}
</div>)}