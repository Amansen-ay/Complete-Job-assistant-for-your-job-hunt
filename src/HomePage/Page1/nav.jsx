import logo from '../../assets/logo.png';
import dropDown from '../../assets/chevron.svg'
import { useNavigate } from "react-router-dom";
import './nav.css'

export default function Navbar(){

    const navigate = useNavigate();

    function handeler(e){
       navigate("/signup")
    }
    return (
     <>
     <nav style={{display:"flex",height:"13%"}}>
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"120px"}}>
          <img src={logo} alt="not found" height="40px"  width="40px"/>
          <h3>Trackly</h3>
        </div>
        <div id="texts" style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"80px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"4px"}} className="navOptions">
                <p>Products</p>
                <img src={dropDown}/>
                
            </div>
            <div  className="navOptions" style={{display:"flex",alignItems:"center",gap:"4px" }}>
                <p>Solutions</p>
                <img src={dropDown}/>
                
            </div>
            <div className="navOptions" style={{display:"flex",alignItems:"center",gap:"4px"}}>
                <p>Resources</p>
                <img src={dropDown}/>
                
            </div>
            <p className="navOptions">Pricing</p>
        </div>
        <div id="signBtns" style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"auto",marginRight:"20px"}}>
            <p id="loginBtn">Login</p>
            <button className="signupBtn" onClick={handeler} >Sign up — It's free</button>
        </div>
        
     </nav>
     </>
    )
}