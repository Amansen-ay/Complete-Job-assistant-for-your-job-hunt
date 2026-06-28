import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const styles = {
  wrapper: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },

  // ── CTA SECTION ──
  cta: {
    background: "linear-gradient(135deg, #7c5cbf 0%, #6d52d8 100%)",
    padding: "80px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
    flexWrap: "wrap",
    position: "relative",
    overflow: "hidden",
  },
  ctaLeft: {
    flex: "1 1 340px",
    maxWidth: "440px",
  },
  ctaHeading: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 14px 0",
    lineHeight: 1.2,
  },
  ctaSubheading: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.7,
    marginBottom: "28px",
  },
  ctaBtnRow: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "12px",
  },
  btnPrimary: {
    background: "#fff",
    color: "#6d52d8",
    border: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },
  btnOutline: {
    background: "transparent",
    color: "#fff",
    border: "2px solid rgba(255,255,255,0.6)",
    borderRadius: "10px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },
  ctaNote: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.55)",
  },

  // Floating cards area
  ctaRight: {
    flex: "1 1 300px",
    maxWidth: "360px",
    position: "relative",
    height: "240px",
  },

  // Individual floating cards
  floatCard: {
    background: "#fff",
    borderRadius: "14px",
    padding: "12px 16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    whiteSpace: "nowrap",
  },
  floatIcon: {
    fontSize: "20px",
    flexShrink: 0,
  },
  floatTitle: {
    fontWeight: "700",
    fontSize: "13px",
    color: "#1a1a2e",
  },
  floatSub: {
    fontSize: "11px",
    color: "#aaa",
  },

  // Stats mini card
  statsCard: {
    background: "#fff",
    borderRadius: "14px",
    padding: "14px 20px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
    position: "absolute",
    display: "flex",
    gap: "20px",
  },
  statItem: {
    textAlign: "center",
  },
  statNum: {
    fontWeight: "800",
    fontSize: "20px",
  },
  statLabel: {
    fontSize: "10px",
    color: "#aaa",
  },

  // ── FOOTER ──
  footer: {
    background: "#16141f",
    padding: "48px 24px 24px 24px",
  },
  footerTop: {
    display: "flex",
    gap: "48px",
    flexWrap: "wrap",
    maxWidth: "900px",
    margin: "0 auto 40px auto",
  },
  footerBrand: {
    flex: "1 1 200px",
    maxWidth: "240px",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
  },
  logoIcon: {
    width: "28px",
    height: "28px",
    background: "#7c5cbf",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },
  logoName: {
    fontWeight: "800",
    fontSize: "16px",
    color: "#fff",
  },
  footerTagline: {
    fontSize: "13px",
    color: "#888",
    lineHeight: 1.6,
    marginBottom: "16px",
  },
  socialRow: {
    display: "flex",
    gap: "8px",
  },
  socialBtn: {
    width: "32px",
    height: "32px",
    border: "1px solid #333",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
    color: "#888",
    cursor: "pointer",
    background: "transparent",
    transition: "border-color 0.18s, color 0.18s",
  },
  footerCol: {
    flex: "1 1 100px",
  },
  footerColTitle: {
    fontWeight: "700",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#555",
    marginBottom: "14px",
  },
  footerLink: {
    display: "block",
    fontSize: "13px",
    color: "#888",
    marginBottom: "10px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.18s",
  },
  footerBottom: {
    borderTop: "1px solid #222",
    paddingTop: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  },
  footerCopy: {
    fontSize: "12px",
    color: "#555",
  },
  footerBottomLinks: {
    display: "flex",
    gap: "20px",
  },
  footerBottomLink: {
    fontSize: "12px",
    color: "#555",
    cursor: "pointer",
    transition: "color 0.18s",
  },
};

// Keyframe injection for float animations
const floatKeyframes = `
  @keyframes float1 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes float2 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  @keyframes float3 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
`;

function FooterLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{ ...styles.footerLink, color: hovered ? "#fff" : "#888" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}

function FooterBottomLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      style={{ ...styles.footerBottomLink, color: hovered ? "#ccc" : "#555" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}

function SocialBtn({ label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      style={{
        ...styles.socialBtn,
        borderColor: hovered ? "#7c5cbf" : "#333",
        color: hovered ? "#fff" : "#888",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
}

export default function CtaFooterSection() {
    const navigate = useNavigate();
  return (
    <div style={styles.wrapper}>
      <style>{floatKeyframes}</style>

      {/* ── CTA ── */}
      <section style={styles.cta}>
        <div style={styles.ctaLeft}>
          <h2 style={styles.ctaHeading}>Ready to get organized and get hired?</h2>
          <p style={styles.ctaSubheading}>
            Join over 10,000 job seekers using Trackly to turn their job search into a streamlined, data-driven process. Start free — no credit card required.
          </p>
          <div style={styles.ctaBtnRow}>
            <button style={styles.btnPrimary} onClick={()=>navigate('/signUp')}>Get Started Free</button>
            <button style={styles.btnOutline}><a style={{textDecoration:"none",color:"inherit"}} href="#Hero">Schedule a Demo</a></button>
          </div>
          <p style={styles.ctaNote}>Free forever plan available · No credit card needed</p>
        </div>

        {/* Floating Cards */}
        <div style={styles.ctaRight}>

          {/* Offer received */}
          <div style={{
            ...styles.floatCard,
            top: "10px", left: "0px",
            animation: "float1 3.2s ease-in-out infinite",
          }}>
            <span style={styles.floatIcon}>🎉</span>
            <div>
              <div style={styles.floatTitle}>Offer received!</div>
              <div style={styles.floatSub}>Stripe · Senior Engineer</div>
            </div>
          </div>

          {/* Stats card */}
          <div style={{
            ...styles.statsCard,
            top: "90px", left: "60px",
            animation: "float2 4s ease-in-out infinite",
          }}>
            <div style={styles.statItem}>
              <div style={{ ...styles.statNum, color: "#1a1a2e" }}>24</div>
              <div style={styles.statLabel}>Applied</div>
            </div>
            <div style={styles.statItem}>
              <div style={{ ...styles.statNum, color: "#f59e42" }}>8</div>
              <div style={styles.statLabel}>Interviews</div>
            </div>
            <div style={styles.statItem}>
              <div style={{ ...styles.statNum, color: "#34c48b" }}>2</div>
              <div style={styles.statLabel}>Offers</div>
            </div>
          </div>

          {/* Interview tomorrow */}
          <div style={{
            ...styles.floatCard,
            top: "180px", left: "80px",
            animation: "float3 3.6s ease-in-out infinite",
          }}>
            <span style={styles.floatIcon}>📅</span>
            <div>
              <div style={styles.floatTitle}>Interview tomorrow</div>
              <div style={styles.floatSub}>Notion · 10:00 AM</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerTop}>

          {/* Brand */}
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>
              <div style={styles.logoIcon}>✓</div>
              <span style={styles.logoName}>Trackly</span>
            </div>
            <p style={styles.footerTagline}>
              The smarter way to manage your job search. Track, analyze, and get hired faster.
            </p>
            <div style={styles.socialRow}>
              <SocialBtn label="𝕏" />
              <SocialBtn label="in" />
              <SocialBtn label="⌥" />
            </div>
          </div>

          {/* Product */}
          <div style={styles.footerCol}>
            <div style={styles.footerColTitle}>Product</div>
            {["Features", "Pricing", "Changelog", "Roadmap"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>

          {/* Company */}
          <div style={styles.footerCol}>
            <div style={styles.footerColTitle}>Company</div>
            {["About", "Blog", "Careers", "Press"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>

          {/* Resources */}
          <div style={styles.footerCol}>
            <div style={styles.footerColTitle}>Resources</div>
            {["Docs", "API Reference", "Community", "Status"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>

          {/* Legal */}
          <div style={styles.footerCol}>
            <div style={styles.footerColTitle}>Legal</div>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <FooterLink key={l}>{l}</FooterLink>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={styles.footerBottom}>
          <span style={styles.footerCopy}>© 2026 Trackly, Inc. All rights reserved.</span>
          <div style={styles.footerBottomLinks}>
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <FooterBottomLink key={l}>{l}</FooterBottomLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}