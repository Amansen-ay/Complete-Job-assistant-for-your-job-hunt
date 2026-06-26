import React, { useState } from "react";

const styles = {
  section: {
    background: "#f4f4f8",
    padding: "80px 24px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    textAlign: "center",
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
    color: "#aaa",
    maxWidth: "460px",
    margin: "0 auto 48px auto",
    lineHeight: 1.6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    maxWidth: "900px",
    margin: "0 auto 48px auto",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "28px 20px 22px 20px",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 2px 10px rgba(120,100,220,0.06)",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 32px rgba(120,100,220,0.15)",
  },
  statNum: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#6d52d8",
    marginBottom: "6px",
    lineHeight: 1,
  },
  statTitle: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
    marginBottom: "4px",
  },
  statDesc: {
    fontSize: "12px",
    color: "#bbb",
    margin: 0,
  },
  companiesLabel: {
    fontSize: "13px",
    color: "#bbb",
    marginBottom: "16px",
  },
  pillsRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    border: "1px solid #e0daf5",
    borderRadius: "99px",
    padding: "6px 16px",
    fontSize: "13px",
    fontWeight: "600",
    color: "#1a1a2e",
    background: "#fff",
    cursor: "default",
    transition: "background 0.18s, border-color 0.18s",
  },
  pillDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#7c5cbf",
    flexShrink: 0,
  },
};

const stats = [
  { num: "10k+", title: "Job seekers",      desc: "active on platform" },
  { num: "94%",  title: "Success rate",     desc: "land interviews within 60 days" },
  { num: "4.9",  title: "App store rating", desc: "across 2,400+ reviews" },
  { num: "500+", title: "Companies hired",  desc: "from our users this year" },
];

const companies = ["Stripe", "Notion", "Vercel", "Linear", "Figma", "Loom"];

function StatCard({ num, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.statNum}>{num}</div>
      <div style={styles.statTitle}>{title}</div>
      <p style={styles.statDesc}>{desc}</p>
    </div>
  );
}

function CompanyPill({ name }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.pill,
        background: hovered ? "#ede9fb" : "#fff",
        borderColor: hovered ? "#c4b5f4" : "#e0daf5",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={styles.pillDot} />
      {name}
    </div>
  );
}

export default function ProvenResultsSection() {
  return (
    <section style={styles.section}>
      <span style={styles.eyebrow}>Proven Results</span>
      <h2 style={styles.heading}>Built for people who want to get hired</h2>
      <p style={styles.subheading}>
        Join thousands of developers, designers, and product managers who use Trackify to land roles at top companies.
      </p>

      <div style={styles.grid}>
        {stats.map((s) => (
          <StatCard key={s.title} {...s} />
        ))}
      </div>

      <p style={styles.companiesLabel}>Trackify users have landed roles at</p>
      <div style={styles.pillsRow}>
        {companies.map((c) => (
          <CompanyPill key={c} name={c} />
        ))}
      </div>
    </section>
  );
}