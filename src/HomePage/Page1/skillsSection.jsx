import React from "react";
import {useNavigate} from 'react-router-dom';
const styles = {
  section: {
    background: "rgb(255, 255, 255)",
    padding: "80px 24px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap",
  },

  // LEFT
  left: {
    flex: "1 1 340px",
    maxWidth: "420px",
  },
  eyebrow: {
    display: "inline-block",
    background: "#ede9fb",
    color: "#7c5cbf",
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    borderRadius: "20px",
    padding: "5px 14px",
    marginBottom: "16px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "800",
    color: "#1a1a2e",
    margin: "0 0 14px 0",
    lineHeight: 1.2,
  },
  subheading: {
    fontSize: "14px",
    color: "#888",
    lineHeight: 1.7,
    marginBottom: "32px",
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
    marginBottom: "36px",
  },
  featureItem: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
  },
  featureIcon: {
    fontSize: "22px",
    width: "32px",
    flexShrink: 0,
    marginTop: "2px",
  },
  featureText: {},
  featureTitle: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
    marginBottom: "3px",
  },
  featureDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: 1.6,
    margin: 0,
  },
  btn: {
    background: "#7c5cbf",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "13px 28px",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
  },

  // RIGHT
  right: {
    flex: "1 1 360px",
    maxWidth: "460px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  skillCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "22px 22px 16px 22px",
    boxShadow: "0 2px 12px rgba(120,100,220,0.07)",
  },
  skillCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  skillCardTitle: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#1a1a2e",
  },
  skillCardSub: {
    fontSize: "12px",
    color: "#bbb",
  },
  skillRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "13px",
  },
  skillName: {
    width: "130px",
    flexShrink: 0,
    fontSize: "13px",
    color: "#1a1a2e",
    fontWeight: "500",
  },
  barTrack: {
    flex: 1,
    height: "8px",
    background: "#ececec",
    borderRadius: "99px",
    overflow: "hidden",
  },
  skillPct: {
    width: "36px",
    textAlign: "right",
    fontSize: "12px",
    fontWeight: "700",
    color: "#888",
    flexShrink: 0,
  },
  skillFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6px",
    paddingTop: "12px",
    borderTop: "1px solid #f3f3f3",
  },
  legendRow: {
    display: "flex",
    gap: "14px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "11px",
    color: "#888",
  },
  legendDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  overallScore: {
    fontSize: "13px",
    color: "#888",
  },
  overallNum: {
    color: "#3b82f6",
    fontWeight: "800",
  },
  bottomCards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  gapCard: {
    background: "#fff9ee",
    border: "1px solid #fde68a",
    borderRadius: "12px",
    padding: "14px 16px",
  },
  strengthCard: {
    background: "#edfaf3",
    border: "1px solid #6ee7b7",
    borderRadius: "12px",
    padding: "14px 16px",
  },
  bottomCardTop: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    fontWeight: "700",
    fontSize: "13px",
    marginBottom: "5px",
  },
  bottomCardText: {
    fontSize: "12px",
    color: "#888",
    lineHeight: 1.5,
    margin: 0,
  },
};

const skills = [
  { name: "React / TypeScript", pct: 88, color: "#7c5cbf" },
  { name: "Node.js / Express",  pct: 74, color: "#3b82f6" },
  { name: "System Design",      pct: 65, color: "#f59e42" },
  { name: "PostgreSQL / SQL",   pct: 80, color: "#34c48b" },
  { name: "Communication",      pct: 90, color: "#8b5cf6" },
  { name: "LeetCode (DSA)",     pct: 58, color: "#ef4444" },
];

const features = [
  {
    icon: "🎯",
    title: "Skill gap analysis",
    desc: "See exactly what skills are most requested for jobs you applied to.",
  },
  {
    icon: "📚",
    title: "Learning paths",
    desc: "Get curated resources to level up your weakest skills fast.",
  },
  {
    icon: "📊",
    title: "Progress tracking",
    desc: "Mark milestones as you learn and watch your profile score rise.",
  },
];

export default function SkillIntelligenceSection() {
    const navigate = useNavigate();
  return (
    <main >
        <section style={styles.section} >
      {/* LEFT */}
      <div style={styles.left}>
        <span style={styles.eyebrow}>Skill Intelligence</span>
        <h2 style={styles.heading}>Focus on the right skills</h2>
        <p style={styles.subheading}>
          Trackly analyzes the job descriptions you applied to and surfaces the exact skills you need to invest in to dramatically improve your interview rate.
        </p>

        <div style={styles.featureList}>
          {features.map((f) => (
            <div key={f.title} style={styles.featureItem}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <div style={styles.featureText}>
                <div style={styles.featureTitle}>{f.title}</div>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.btn} onClick={()=>navigate('/signUp')}>Analyze My Skills</button>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        {/* Skill Profile Card */}
        <div style={styles.skillCard}>
          <div style={styles.skillCardHeader}>
            <span style={styles.skillCardTitle}>Your Skill Profile</span>
            <span style={styles.skillCardSub}>vs. job market demand</span>
          </div>

          {skills.map((s) => (
            <div key={s.name} style={styles.skillRow}>
              <span style={styles.skillName}>{s.name}</span>
              <div style={styles.barTrack}>
                <div style={{
                  height: "100%",
                  width: `${s.pct}%`,
                  background: s.color,
                  borderRadius: "99px",
                  transition: "width 0.6s ease",
                }} />
              </div>
              <span style={styles.skillPct}>{s.pct}%</span>
            </div>
          ))}

          <div style={styles.skillFooter}>
            <div style={styles.legendRow}>
              <div style={styles.legendItem}>
                <span style={{ ...styles.legendDot, background: "#7c5cbf" }} />
                Your level
              </div>
              <div style={styles.legendItem}>
                <span style={{ ...styles.legendDot, background: "#ececec", border: "1.5px solid #ccc" }} />
                Market avg
              </div>
            </div>
            <span style={styles.overallScore}>
              Overall: <span style={styles.overallNum}>76/100</span>
            </span>
          </div>
        </div>

        {/* Bottom Cards */}
        <div style={styles.bottomCards}>
          <div style={styles.gapCard}>
            <div style={styles.bottomCardTop}>
              <span>⚠️</span>
              <span style={{ color: "#d97706" }}>Gap detected</span>
            </div>
            <p style={styles.bottomCardText}>
              System Design is requested in 64% of your target roles
            </p>
          </div>
          <div style={styles.strengthCard}>
            <div style={styles.bottomCardTop}>
              <span>🚀</span>
              <span style={{ color: "#059669" }}>Top strength</span>
            </div>
            <p style={styles.bottomCardText}>
              React skills match 94% of Frontend Engineer postings
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
    
  );
}