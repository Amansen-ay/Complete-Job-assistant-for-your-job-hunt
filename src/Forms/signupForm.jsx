import user from '../assets/user.svg'
import {useState} from 'react'
import Password from '../assets/password.svg'
import mail from '../assets/mail.svg'
import logo from '../assets/logo.png'
import './signupForm.css'
import {useNavigate } from "react-router-dom";

export default function  SignupForm() {

    const navigate = useNavigate();
    const [showPassword,setShowPassword] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [checked,setChecked] = useState(false)

    function nameHandeler(e) {
        setName(e.target.value)
    
    }

    function emailHandeler(e) {
      setEmail(e.target.value)
    }


    function passwordHandeler(e) {
     setPassword(e.target.value)      

    }

    function confirmPasswordHandeler(e) {
        setConfirmPassword(e.target.value)
    }

    function signupHandeler(e) {

      e.preventDefault();

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

      if(!name || !email || !password || !confirmPassword){
        alert("Please fill all information");
        return
      }  else if (!emailPattern.test(email.trim())){
        alert("Enter valid email");
        return
      } else if(!passwordPattern.test(password.trim())){
        alert("Password must contain uppercase, lowercase, number and special character");
        return
      }  else if(password!==confirmPassword) {
        alert("Passwords do not match");
        return
      } else if(!checked) {
        alert("Please accept terms and conditions")
        return
      }

      const userData = {
        name,
        password,
        email
      };

     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
     
     const userExists = existingUsers.some((user) => user.email === email);

    if(userExists){
      alert("User already exists with the current email");
      return;
    }

      existingUsers.push(userData);

      localStorage.setItem(
       "users",
       JSON.stringify(existingUsers)
    );

    alert("sign Up successfull")
    navigate("/dashboard")
    
     
 }
   

    return (
     <>
     <div id="mainContainerWrapper">
      <main id="mainContainer">
      <form className="form">

       <header className="header">
       <img src={logo} width="40px" height="40px"/>
       <h1>Trackly</h1>
       </header>

       <header className="header2">
        <h1>Create your account 🚀</h1>
        <p>Start your journey to organize your job search</p>
       </header>
       
       <div className="mainForm">
       <div className="fields">

        <div className="input-box fieldContainer">
       <img src={user} className="icon" />
       <input type="text" placeholder="Enter your full name"  onChange={nameHandeler}/>
       </div>

       <div className="input-box fieldContainer">
       <img src={mail} className="icon" />
       <input type="email" placeholder="Enter your email" onChange={emailHandeler} />
       </div>
<div className="input-box fieldContainer">

  <img src={Password} className="icon" />

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Create a password"
    onChange={passwordHandeler}
  />

  <button
    type="button"
    className="toggle-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>

</div>

<div className="input-box fieldContainer">

  <img src={Password} className="icon" />

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Confirm your password"
    onChange={confirmPasswordHandeler}
  />

  <button
    type="button"
    className="toggle-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>

</div>
       
       </div>

       {/* <div> 
       
       </div> */}
       
       </div>
      
   </form>

   <section id="TandC">
    <div >
     <input id="checkbox" type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
     <label htmlFor="checkbox">I agree to the  <span style={{color:"blue"}}>Terms of service</span> and <span style={{color:"blue"}}>Privacy policy</span></label>
     
   </div>
   </section>
   
    <button id="createBtn" onClick={signupHandeler}>Create account</button>
   
    </main>
    </div>
     </>
    )
}