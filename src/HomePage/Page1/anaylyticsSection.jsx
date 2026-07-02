import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // LEFT
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
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginBottom: "32px",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  featureIconBox: {
    width: "36px",
    height: "36px",
    borderRadius: "9px",
    background: "#ede9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    flexShrink: 0,
  },
  featureTitle: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
    marginBottom: "2px",
  },
  featureDesc: {
    fontSize: "12px",
    color: "#aaa",
    margin: 0,
    lineHeight: 1.5,
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
    flex: "1 1 420px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  // Top row: donut + weekly goal
  topRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  card: {
    background: "#fff",
    border: "1px solid #ececec",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 2px 12px rgba(120,100,220,0.06)",
  },
  cardTitle: {
    fontWeight: "700",
    fontSize: "13px",
    color: "#1a1a2e",
    marginBottom: "14px",
  },

  // Donut legend
  legendRow: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginTop: "8px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "11px",
    color: "#555",
  },
  legendLeft: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  legendDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    flexShrink: 0,
  },

  // Weekly goal
  goalNumber: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#1a1a2e",
    lineHeight: 1,
    marginBottom: "4px",
  },
  goalSub: {
    fontSize: "12px",
    color: "#aaa",
    marginBottom: "14px",
  },
  progressTrack: {
    height: "8px",
    background: "#ececec",
    borderRadius: "99px",
    overflow: "hidden",
    marginBottom: "12px",
  },
  progressFill: {
    height: "100%",
    background: "#7c5cbf",
    borderRadius: "99px",
    width: "100%",
  },
  goalNote: {
    fontSize: "11px",
    color: "#888",
    lineHeight: 1.5,
    marginBottom: "8px",
  },
  goalBadge: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "700",
    color: "#7c5cbf",
  },

  // Bottom row: bar chart + insights
  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: "14px",
  },

  // Insights
  insightRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #f5f5f5",
  },
  insightRowLast: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
  },
  insightLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    color: "#555",
  },
  insightValue: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#7c5cbf",
  },
};

// ── Donut Chart ──
const donutData = [
  { label: "Applied",    value: 21, color: "#7c5cbf" },
  { label: "Interview",  value: 5,  color: "#3b82f6" },
  { label: "Assessment", value: 3,  color: "#f59e42" },
  { label: "Offer",      value: 3,  color: "#34c48b" },
  { label: "Rejected",   value: 1,  color: "#ef4444" },
];

function DonutChart() {
  const total = donutData.reduce((s, d) => s + d.value, 0);
  const cx = 52, cy = 52, r = 38, stroke = 14;
  const circ = 2 * Math.PI * r;
  let offset = circ * 0.25;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
      <svg width="104" height="104" style={{ flexShrink: 0 }}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f0f0" strokeWidth={stroke} />
        {donutData.map((d) => {
          const dash = (d.value / total) * circ - 2;
          const el = (
            <circle
              key={d.label}
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${circ}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          );
          offset -= (d.value / total) * circ;
          return el;
        })}
      </svg>
      <div style={styles.legendRow}>
        {donutData.map((d) => (
          <div key={d.label} style={styles.legendItem}>
            <div style={styles.legendLeft}>
              <span style={{ ...styles.legendDot, background: d.color }} />
              {d.label}
            </div>
            <span style={{ fontWeight: "700", color: "#1a1a2e", marginLeft: "8px" }}>{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Bar/Area Chart (Applications per month) ──
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const monthData = [0,0,0,0,0,10,11,0,0,0,0,0];

function MonthChart() {
  const W = 280, H = 120;
  const padL = 24, padR = 10, padT = 16, padB = 28;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const maxVal = 12;

  const toX = (i) => padL + (i / (MONTHS.length - 1)) * chartW;
  const toY = (v) => padT + chartH - (v / maxVal) * chartH;

  const pts = monthData.map((v, i) => `${toX(i)},${toY(v)}`).join(" L ");
  const area = `M ${toX(0)},${toY(0)} L ${pts} L ${toX(11)},${toY(0)} Z`;
  const line = `M ${pts}`;

  // Y axis labels
  const yLabels = [0, 3, 6, 9, 12];

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="monthGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7c5cbf" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y axis labels */}
      {yLabels.map((v) => (
        <text key={v} x={padL - 4} y={toY(v) + 4} textAnchor="end" fontSize="9" fill="#ccc">{v}</text>
      ))}

      {/* Grid lines */}
      {yLabels.map((v) => (
        <line key={v} x1={padL} y1={toY(v)} x2={W - padR} y2={toY(v)} stroke="#f0f0f0" strokeWidth="1" />
      ))}

      {/* Area + line */}
      <path d={area} fill="url(#monthGrad)" />
      <path d={line} fill="none" stroke="#7c5cbf" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

      {/* Data point labels */}
      {monthData.map((v, i) => v > 0 && (
        <text key={i} x={toX(i)} y={toY(v) - 5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#7c5cbf">{v}</text>
      ))}

      {/* X labels */}
      {MONTHS.map((m, i) => (
        <text key={m} x={toX(i)} y={H - 4} textAnchor="middle" fontSize="8" fill="#bbb">{m}</text>
      ))}
    </svg>
  );
}

const insights = [
  { icon: "💼", label: "Most applied role",   value: "Frontend Dev",  last: false },
  { icon: "📈", label: "Interview rate",       value: "24%",           last: false },
  { icon: "🏆", label: "Offer rate",           value: "14%",           last: false },
  { icon: "📅", label: "Most active month",    value: "Jul",           last: false },
  { icon: "⚡", label: "Applications this week", value: "11",          last: false },
  { icon: "👤", label: "Rejection rate",       value: "5%",            last: true  },
];

const features = [
  { icon: "🍩", title: "Application overview", desc: "Visual donut breakdown of Applied, Interview, Offer, and Rejected." },
  { icon: "🎯", title: "Weekly goal tracking",  desc: "Set a weekly target and watch your progress bar fill up." },
  { icon: "📊", title: "Monthly trends",        desc: "Area chart showing applications submitted across the year." },
  { icon: "💡", title: "Job search insights",   desc: "Key metrics like interview rate, offer rate, and top roles at a glance." },
];

export default function AnalyticsSection() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      {/* LEFT */}
      <div style={styles.left}>
        <span style={styles.eyebrow}>Analytics</span>
        <h2 style={styles.heading}>Analytics that help you improve</h2>
        <p style={styles.subheading}>
          Understand exactly where you stand in your job search. Trackly gives you a full picture — from weekly goals to monthly trends and smart insights.
        </p>

        <div style={styles.featureList}>
          {features.map((f) => (
            <div key={f.title} style={styles.featureItem}>
              <div style={styles.featureIconBox}>{f.icon}</div>
              <div>
                <div style={styles.featureTitle}>{f.title}</div>
                <p style={styles.featureDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.btn} onClick={() => navigate("/signUp")}>
          View Full Analytics
        </button>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        {/* Row 1: Donut + Weekly Goal */}
        <div style={styles.topRow}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Application overview</div>
            <DonutChart />
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Weekly Goal</div>
            <div style={styles.goalNumber}>11 <span style={{ fontSize: "16px", color: "#aaa", fontWeight: "500" }}>/ 10</span></div>
            <div style={styles.goalSub}>applications this week</div>
            <div style={styles.progressTrack}>
              <div style={styles.progressFill} />
            </div>
            <div style={styles.goalNote}>You've gone beyond your weekly target. Your dedication is paying off.</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "11px", color: "#888" }}>🔥 1 above your goal</span>
              <span style={styles.goalBadge}>Outstanding 🚀</span>
            </div>
          </div>
        </div>

        {/* Row 2: Monthly chart + Insights */}
        <div style={styles.bottomRow}>
          <div style={styles.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <div style={styles.cardTitle}>Applications per month</div>
              <span style={{ fontSize: "11px", color: "#aaa" }}>This year</span>
            </div>
            <MonthChart />
          </div>

          <div style={styles.card}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "12px" }}>
              <span style={{ fontSize: "16px" }}>💡</span>
              <div style={styles.cardTitle}>Job search insights</div>
            </div>
            {insights.map((ins) => (
              <div key={ins.label} style={ins.last ? styles.insightRowLast : styles.insightRow}>
                <div style={styles.insightLabel}>
                  <span>{ins.icon}</span>
                  {ins.label}
                </div>
                <span style={styles.insightValue}>{ins.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}