import "./hero.css";
import DashBoardPreview from './DashboardPreview/dashboardPreview.jsx'
import {useNavigate} from 'react-router-dom';
export default function Hero() {
    const navigate = useNavigate()
  return (
    <section className="hero-section">

      {/* Left Side */}
      <div className="hero-left">

        <div className="hero-badge">
          JOB SEARCH MADE SIMPLE
        </div>

        <h1 className="hero-heading">
          Track. Analyze.
          <br />
          <span>Get Hired.</span>
        </h1>

        <p className="hero-description">
          The all-in-one platform to manage your job applications,
          track your progress, and land your dream role faster than
          ever.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn" onClick={()=>navigate('/signUp')}>
            Get Started Free
          </button>

          <button className="secondary-btn">
            <a href="#Features" style={{textDecoration:"none",color:"inherit"}}> ▶ See how it works</a>
           
          </button>

        </div>

        <div className="hero-users">

          <div className="avatars">

            <div className="avatar purple">1</div>
            <div className="avatar orange">2</div>
            <div className="avatar green">3</div>
            <div className="avatar blue">4</div>

          </div>

          <p>
            <strong>2,400+</strong> job seekers landed offers this month
          </p>

        </div>

      </div>

      {/* Right Side */}

      <div className="hero-right">

        <div className="dashboard-bg">

          

          <DashBoardPreview/>

        </div>

      </div>

    </section>
  );
}