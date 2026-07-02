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
  featureIconBox: {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: "#ede9fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },
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
    flex: "1 1 400px",
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
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
    marginBottom: "12px",
  },

  // Calendar
  calHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  calMonthLabel: {
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
  },
  calNavBtn: {
    background: "none",
    border: "1px solid #ececec",
    borderRadius: "6px",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    fontSize: "12px",
    color: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  calNavRow: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
  calGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "3px",
  },
  calDayLabel: {
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "700",
    color: "#bbb",
    padding: "4px 0",
    textTransform: "uppercase",
  },
  calCell: {
    minHeight: "42px",
    borderRadius: "8px",
    border: "1px solid #f3f3f3",
    padding: "4px 5px",
    fontSize: "11px",
    color: "#1a1a2e",
    position: "relative",
    background: "#fff",
  },
  calCellToday: {
    minHeight: "42px",
    borderRadius: "8px",
    border: "1px solid #c4b5f4",
    padding: "4px 5px",
    fontSize: "11px",
    color: "#1a1a2e",
    position: "relative",
    background: "#ede9fb",
  },
  calCellEmpty: {
    minHeight: "42px",
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "4px 5px",
  },
  eventDot: {
    width: "100%",
    height: "5px",
    borderRadius: "3px",
    marginTop: "3px",
  },

  // Bottom row
  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "14px",
  },
  upcomingItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "8px 0",
    borderBottom: "1px solid #f5f5f5",
  },
  upcomingItemLast: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "8px 0",
  },
  upcomingDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    marginTop: "4px",
    flexShrink: 0,
  },
  upcomingTitle: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#1a1a2e",
  },
  upcomingDate: {
    fontSize: "11px",
    color: "#aaa",
  },

  // Distribution
  distRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  distLabel: {
    fontSize: "11px",
    color: "#888",
    width: "72px",
    flexShrink: 0,
  },
  distTrack: {
    flex: 1,
    height: "7px",
    background: "#f0f0f0",
    borderRadius: "99px",
    overflow: "hidden",
  },
  distFill: {
    height: "100%",
    borderRadius: "99px",
  },
};

const DAY_LABELS = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

// July 2026 — starts on Wednesday (index 3)
const JULY_EVENTS = {
  2:  { color: "#7c5cbf", label: "Interview" },
  8:  { color: "#3b82f6", label: "General" },
  10: { color: "#ef4444", label: "Interview" },
  15: { color: "#f59e42", label: "Follow up" },
  18: { color: "#06b6d4", label: "Assessment" },
  22: { color: "#3b82f6", label: "General" },
  25: { color: "#ef4444", label: "Interview" },
};

const UPCOMING = [
  { title: "Stripe Interview", date: "Jul 10", color: "#ef4444" },
  { title: "Notion Follow-up", date: "Jul 15", color: "#f59e42" },
  { title: "Vercel Assessment", date: "Jul 18", color: "#06b6d4" },
];

const DISTRIBUTION = [
  { label: "General",    color: "#3b82f6", pct: 70 },
  { label: "Interview",  color: "#ef4444", pct: 85 },
  { label: "Follow up",  color: "#f59e42", pct: 35 },
  { label: "Assessment", color: "#06b6d4", pct: 50 },
  { label: "Offer",      color: "#34c48b", pct: 15 },
];

const features = [
  {
    icon: "📅",
    title: "Interview & deadline tracking",
    desc: "Pin interviews, follow-ups, and deadlines directly on calendar dates.",
  },
  {
    icon: "🗂️",
    title: "Category-wise event types",
    desc: "Color-coded events — Interview, Follow up, Assessment, Offer, and General.",
  },
  {
    icon: "🔔",
    title: "Upcoming events panel",
    desc: "See what's coming up next so you never miss a critical step.",
  },
  {
    icon: "📊",
    title: "Event distribution view",
    desc: "Visual breakdown of how your time is split across event categories.",
  },
];

function MiniCalendar() {
  // July 2026 starts on Wednesday = offset 3
  const startOffset = 3;
  const totalDays = 31;
  const cells = [];

  // Empty cells before day 1
  for (let i = 0; i < startOffset; i++) {
    cells.push(<div key={`e-${i}`} style={styles.calCellEmpty} />);
  }

  // Day cells
  for (let d = 1; d <= totalDays; d++) {
    const event = JULY_EVENTS[d];
    const isToday = d === 2;
    cells.push(
      <div key={d} style={isToday ? styles.calCellToday : styles.calCell}>
        <span style={{ fontWeight: isToday ? "800" : "500", fontSize: "11px" }}>{d}</span>
        {event && (
          <div style={{ ...styles.eventDot, background: event.color }} />
        )}
      </div>
    );
  }

  return (
    <div>
      <div style={styles.calHeader}>
        <span style={styles.calMonthLabel}>July 2026</span>
        <div style={styles.calNavRow}>
          <button style={styles.calNavBtn}>‹</button>
          <button style={styles.calNavBtn}>›</button>
        </div>
      </div>
      <div style={styles.calGrid}>
        {DAY_LABELS.map((d) => (
          <div key={d} style={styles.calDayLabel}>{d}</div>
        ))}
        {cells}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      {/* LEFT */}
      <div style={styles.left}>
        <span style={styles.eyebrow}>Calendar</span>
        <h2 style={styles.heading}>Never miss an important date</h2>
        <p style={styles.subheading}>
          Trackly's built-in calendar keeps your interviews, follow-ups, and deadlines organized in one place — so you always know what's next.
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
          Open My Calendar
        </button>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        {/* Main calendar card */}
        <div style={styles.card}>
          <MiniCalendar />
        </div>

        {/* Bottom: upcoming + distribution */}
        <div style={styles.bottomRow}>
          {/* Upcoming events */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>📌 Upcoming Events</div>
            {UPCOMING.map((ev, i) => (
              <div key={ev.title} style={i === UPCOMING.length - 1 ? styles.upcomingItemLast : styles.upcomingItem}>
                <div style={{ ...styles.upcomingDot, background: ev.color }} />
                <div>
                  <div style={styles.upcomingTitle}>{ev.title}</div>
                  <div style={styles.upcomingDate}>{ev.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Event distribution */}
          <div style={styles.card}>
            <div style={styles.cardTitle}>📊 Event Types</div>
            {DISTRIBUTION.map((d) => (
              <div key={d.label} style={styles.distRow}>
                <span style={styles.distLabel}>{d.label}</span>
                <div style={styles.distTrack}>
                  <div style={{ ...styles.distFill, width: `${d.pct}%`, background: d.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}