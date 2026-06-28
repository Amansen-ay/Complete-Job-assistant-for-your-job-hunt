import "./nav.css";
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo">
        <img  src={logo} width="40px" height="40px"/>
        <h2>Trackly</h2>
      </div>

      <nav className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#Features">Features</a>
        <a href="#Analytics">Analytics</a>
        <a href="#Skills">Skills</a>
        <a href="#About">About</a>
      </nav>

      <div className="nav-buttons">
        <button className="sign-in-btn">Sign In</button>
        <button className="get-started-btn" onClick={()=>navigate('/signUp')}>Get Started</button>
      </div>
    </header>
  );
}