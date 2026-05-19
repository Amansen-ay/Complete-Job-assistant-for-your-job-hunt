import './footer.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import x from '../../assets/twitter.svg'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <h2>Join thousands of job seekers</h2>
        <p>Track smarter and land your dream job faster</p>

        <div className="footer-stats">
          <div>
            <h3>10K+</h3>
            <p>Active Users</p>
          </div>
          <div>
            <h3>250K+</h3>
            <p>Applications Tracked</p>
          </div>
          <div>
            <h3>95%</h3>
            <p>Would Recommend</p>
          </div>
        </div>
      </div>

      <div className="footer-links">
        
        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Integrations</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div>
          <h4>Resources</h4>
          <p>Help Center</p>
          <p>Contact</p>
          <p>Privacy</p>
        </div>

        <div>
          <h4>Social</h4>
          <p><span><img src={x} /></span> Twitter</p>
          <p><span><img src={linkedin} /></span>LinkedIn</p>
          <p><span><img src={github} /></span>GitHub</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Trackly. All rights reserved.</p>
      </div>

    </footer>
  );
}