import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const styles = {
  section: {
    background: "#fff",
    padding: "80px 24px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap",
  },
  left: {
    maxWidth: "420px",
    flex: "1 1 340px",
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
    marginBottom: "28px",
  },
  statsList: {
    display: "flex",
    flexDirection: "column",
    gap: "0",
    border: "1px solid #ececec",
    borderRadius: "14px",
    overflow: "hidden",
    marginBottom: "28px",
  },
  statRow: {
    padding: "14px 18px",
    borderBottom: "1px solid #ececec",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
  },
  statRowLast: {
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
  },
  statLabel: {
    fontSize: "12px",
    color: "#aaa",
    marginBottom: "3px",
  },
  statValue: {
    fontSize: "18px",
    fontWeight: "800",
    color: "#1a1a2e",
  },
  badge: {
    background: "#e8fbf3",
    color: "#34c48b",
    fontSize: "12px",
    fontWeight: "700",
    borderRadius: "20px",
    padding: "4px 10px",
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
  right: {
    flex: "1 1 380px",
    maxWidth: "460px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  chartCard: {
    background: "#fff",
    border: "1px solid #ececec",
    borderRadius: "16px",
    padding: "20px 20px 12px 20px",
    boxShadow: "0 2px 12px rgba(120,100,220,0.06)",
  },
  chartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  chartTitle: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
  },
  tabRow: {
    display: "flex",
    gap: "4px",
  },
  tab: {
    fontSize: "12px",
    fontWeight: "600",
    padding: "3px 9px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    background: "transparent",
    color: "#aaa",
  },
  tabActive: {
    fontSize: "12px",
    fontWeight: "700",
    padding: "3px 9px",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    background: "#ede9fb",
    color: "#7c5cbf",
  },
  legendRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "8px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    color: "#555",
  },
  legendDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  infoCardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  infoCard: {
    background: "#fff",
    border: "1px solid #ececec",
    borderRadius: "12px",
    padding: "12px 14px",
    boxShadow: "0 2px 8px rgba(120,100,220,0.04)",
  },
  infoCardTop: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "4px",
  },
  infoCardLabel: {
    fontSize: "11px",
    color: "#aaa",
  },
  infoCardValue: {
    fontSize: "15px",
    fontWeight: "800",
    color: "#1a1a2e",
  },
};

// SVG Line Chart
const WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const appsData =      [30, 45, 52, 60, 58, 72, 80, 95];
const interviewData =  [10, 18, 22, 28, 30, 35, 38, 48];

function LineChart() {
  const W = 380, H = 160;
  const padL = 10, padR = 10, padT = 10, padB = 24;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxVal = 110;

  const toX = (i) => padL + (i / (WEEKS.length - 1)) * chartW;
  const toY = (v) => padT + chartH - (v / maxVal) * chartH;

  const polyline = (data) =>
    data.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");

  const areaPath = (data) => {
    const pts = data.map((v, i) => `${toX(i)},${toY(v)}`).join(" L ");
    return `M ${toX(0)},${toY(data[0])} L ${pts} L ${toX(data.length - 1)},${toY(0) + padB} L ${toX(0)},${toY(0) + padB} Z`;
  };

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="appGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cbf" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="intGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34c48b" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#34c48b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Dashed grid lines */}
      {[0.25, 0.5, 0.75].map((p, i) => (
        <line
          key={i}
          x1={padL} y1={padT + chartH * (1 - p)}
          x2={W - padR} y2={padT + chartH * (1 - p)}
          stroke="#ececec" strokeWidth="1" strokeDasharray="4 4"
        />
      ))}

      {/* Area fills */}
      <path d={areaPath(appsData)} fill="url(#appGrad)" />
      <path d={areaPath(interviewData)} fill="url(#intGrad)" />

      {/* Lines */}
      <polyline points={polyline(appsData)} fill="none" stroke="#7c5cbf" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={polyline(interviewData)} fill="none" stroke="#34c48b" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

      {/* X labels */}
      {WEEKS.map((w, i) => (
        <text key={w} x={toX(i)} y={H - 4} textAnchor="middle" fontSize="10" fill="#bbb">{w}</text>
      ))}
    </svg>
  );
}

const stats = [
  { label: "Response rate", value: "34%", badge: "↑ +12%", last: false },
  { label: "Avg. time to response", value: "4.2 days", badge: "↑ -1.5d", last: false },
  { label: "Interview conversion", value: "62%", badge: "↑ +8%", last: false },
  { label: "Active applications", value: "24", badge: "↑ +6", last: true },
];

const infoCards = [
  { icon: "📅", label: "Best day to apply", value: "Tuesday" },
  { icon: "🔗", label: "Top channel", value: "LinkedIn" },
  { icon: "💰", label: "Avg. salary target", value: "$125k" },
];

const TABS = ["8W", "3M", "1Y"];

export default function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState("8W");
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      {/* LEFT */}
      <div style={styles.left}>
        <span style={styles.eyebrow}>Analytics</span>
        <h2 style={styles.heading}>Analytics that help you improve</h2>
        <p style={styles.subheading}>
          Understand exactly where you stand in your job search. Track response rates, identify the best-performing application strategies, and make data-driven decisions.
        </p>

        <div style={styles.statsList}>
          {stats.map((s) => (
            <div key={s.label} style={s.last ? styles.statRowLast : styles.statRow}>
              <div>
                <div style={styles.statLabel}>{s.label}</div>
                <div style={styles.statValue}>{s.value}</div>
              </div>
              <span style={styles.badge}>{s.badge}</span>
            </div>
          ))}
        </div>

        <button style={styles.btn} onClick={()=>navigate('/signUp')}>View Full Analytics</button>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <div style={styles.chartCard}>
          <div style={styles.chartHeader}>
            <span style={styles.chartTitle}>Application Trends</span>
            <div style={styles.tabRow}>
              {TABS.map((t) => (
                <button
                  key={t}
                  style={activeTab === t ? styles.tabActive : styles.tab}
                  onClick={() => setActiveTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div style={styles.legendRow}>
            <div style={styles.legendItem}>
              <span style={{ ...styles.legendDot, background: "#7c5cbf" }} />
              Applications
            </div>
            <div style={styles.legendItem}>
              <span style={{ ...styles.legendDot, background: "#34c48b" }} />
              Interviews
            </div>
          </div>
          <LineChart />
        </div>

        <div style={styles.infoCardsRow}>
          {infoCards.map((c) => (
            <div key={c.label} style={styles.infoCard}>
              <div style={styles.infoCardTop}>
                <span>{c.icon}</span>
                <span style={styles.infoCardLabel}>{c.label}</span>
              </div>
              <div style={styles.infoCardValue}>{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}