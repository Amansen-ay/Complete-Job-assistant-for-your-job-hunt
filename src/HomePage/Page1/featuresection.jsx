import React from "react";
import './featureSection.css'

const styles = {
  section: {
    background: "#f4f4f8",
    padding: "80px 24px",
    textAlign: "center",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
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
    marginBottom: "18px",
  },
  heading: {
    fontSize: "38px",
    fontWeight: "800",
    color: "#1a1a2e",
    margin: "0 0 14px 0",
    lineHeight: 1.15,
  },
  subheading: {
    fontSize: "15px",
    color: "#888",
    maxWidth: "460px",
    margin: "0 auto 48px auto",
    lineHeight: 1.6,
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "28px 24px",
    textAlign: "left",
    boxShadow: "0 2px 12px rgba(120,100,220,0.06)",
  },
  iconWrapper: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    fontSize: "20px",
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#1a1a2e",
    marginBottom: "8px",
  },
  cardDesc: {
    fontSize: "13px",
    color: "#888",
    lineHeight: 1.6,
    margin: 0,
  },
};

const features = [
  {
    icon: "📋",
    iconBg: "#ede9fb",
    title: "Track Applications",
    desc: "Log every application with status, dates, contacts, and notes in one central place.",
  },
  {
    icon: "✅",
    iconBg: "#e8f0fe",
    title: "Analyze Performance",
    desc: "Spot trends in your response rates, identify bottlenecks, and refine your strategy.",
  },
  {
    icon: "🔔",
    iconBg: "#fef9e7",
    title: "Smart Reminders",
    desc: "Never miss a follow-up or interview. Get timely reminders for every critical step.",
  },
  {
    icon: "📝",
    iconBg: "#e8fbf3",
    title: "Resume Tailor",
    desc: "Match your resume to each job description with keyword suggestions and ATS scoring.",
  },
  {
    icon: "🖥️",
    iconBg: "#ede9fb",
    title: "Interview Prep",
    desc: "Practice common questions, record answers, and get AI-powered feedback before the big day.",
  },
  {
    icon: "🔗",
    iconBg: "#fdecea",
    title: "Network Tracker",
    desc: "Manage your professional contacts and track every referral to amplify your reach.",
  },
];

export default function FeaturesSection() {
  return (
    <section style={styles.section}>
      <span style={styles.eyebrow}>Features</span>
      <h2 style={styles.heading}>All the tools for a smarter job search</h2>
      <p style={styles.subheading}>
        From application tracking to interview prep, we have everything you need to land your dream role faster than ever before.
      </p>
      <div  className="grid">
        {features.map((f) => (
          <div key={f.title} style={styles.card}>
            <div style={{ ...styles.iconWrapper, background: f.iconBg }}>
              {f.icon}
            </div>
            <div style={styles.cardTitle}>{f.title}</div>
            <p style={styles.cardDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}