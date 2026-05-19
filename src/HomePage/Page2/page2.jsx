import Header from './header.jsx'
import FeatureCard from './featureCard.jsx'
import Footer from './footer.jsx'
import cases from '../../assets/cases.svg'
import tag from '../../assets/tag.svg'
import barChart from '../../assets/barChart.svg'
import calendar from '../../assets/calendar.svg'
import arrowRight from '../../assets/arowRightAlt.svg'
import recordsBackground from '../../assets/dataimg.png'
import boy from '../../assets/boyfinal.png'
import play from '../../assets/play.svg'
import kite from '../../assets/kite.png'
import './page2.css'
import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();
  function handeler() {
   navigate("/signup")

  }
  
    return (
       <>
       <section className="wave-section" >
        
        <div className="content">
          <Header/>
        </div>
         </section>

         <section style={{backgroundColor:"#eef2ff",marginTop:"-10px"}}>
          
         <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div style={{marginTop:"50px",marginLeft:"30px"}}>
            <FeatureCard 
            img={cases}
            cardName={"Track applications"}
            discription={"Keep all your applications in one place and know exactly where you stand."}
            bgc={"#bebcea7e"}
            />
          </div>

           <div style={{marginTop:"50px",marginLeft:"30px"}}>
            <FeatureCard 
            img={calendar}
            cardName={"Never miss a follow up"}
            discription={"Set a reminder and get notified so you can follow up at the right time."}
            bgc={"#bceac17e"}
            />
          </div>

           <div style={{marginTop:"50px",marginLeft:"30px"}}>
            <FeatureCard 
            img={barChart}
            cardName={"See your progress"}
            discription={"Visualize ypur journew with the insightful stats and clear progress tracking."}
            bgc={"#eaecd4ad"}
            />
          </div>

           <div style={{marginTop:"50px",marginLeft:"30px"}}>
            <FeatureCard 
            img={tag}
            cardName={"Organize your way"}
            discription={"Use tags, notes and filters to organaize your search your way."}
            bgc={"#bebcea7e"}
            />
          </div>
          </div>

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px",gap:"5px"}}>
          <h4 style={{color:"#2e25d8"}}>Explore all features </h4>
          <img src={arrowRight} />
        </div>

        <div className="recordsBackground">

          <img src={recordsBackground} className="bg-img" width="100%" height="400px" style={{marginTop:"-80px"}} />

        </div>

         {/* boy image and text */}

         <div style={{width:"100%", height:"500px",marginTop:"-100px",padding:"28px",display:"flex"}}>
          <div style={{width:"50%"}}>
            <img src={boy} width="600px" height="400px" style={{borderRadius:"10px"}} />
          </div>
          <div style={{width:"50%",paddingTop:"80px",paddingLeft:"60px"}}>
            <p style={{marginBottom:"20px"}}>FOCUS ON WHAT MATTERS</p>
            <h1>Less chaos.</h1>
            <h1 style={{marginBottom:"20px"}}>More opportunities.</h1>
            <p>Job searching can be overwhelming. Trackly helps <br /> you cut through the noise and focus on what really <br />   moves you forward.</p>
            
            <div style={{display:"flex",gap:"25px",justifyContent:"center",alignItems:"center",width:"200px",height:"50px",backgroundColor:"#2e25d8",borderRadius:"6px",marginTop:"30px"}}>
            <button style={{backgroundColor:"#2e25d8",border:"2px solid #2e25d8",color:"white"}}>See how it works</button>
            <img src={play} style={{backgroundColor:"white",borderRadius:"50%"}}/>
            </div>

          </div>
          <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%",height:"180px",backgroundColor:"#d6def9",borderRadius:"15px"}}>
          <img src={kite} width="300px" height="210px" style={{marginLeft:"-160px",marginTop:"-15px"}} />
          
          <div style={{display:"flex",gap:"60px",marginTop:"-30px"}}>

            <div>
              <h1 style={{marginBottom:"10px"}} >Ready to take control of your job search?</h1>
              <p>Sign up for free and start tracking in less then a minute.</p>
            </div>

            <div>
              <button style={{marginLeft:"13px",padding:"10px 15px",backgroundColor:"#2e25d8",border:"2px solid #2e25d8",color:"white",borderRadius:"5px",marginBottom:"10px",cursor:"pointer"}} onClick={handeler}>Sign up  for free</button>
              <p>No credit card required</p>
            </div>
          
          </div>
          </div>

         </div>
         
          <section style={{marginTop:"140px"}}>
          <Footer/>
          </section>

      </section>
      
       
      
       
       </>
    )

}