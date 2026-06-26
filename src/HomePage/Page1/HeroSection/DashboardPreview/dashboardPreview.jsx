import React from "react";

const styles = {
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 40px rgba(120,100,220,0.10)",
    padding: "24px",
    width: "360px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    fontSize: "13px",
    color: "#1a1a2e",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  dashboardLabel: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#1a1a2e",
  },
  dateLabel: {
    color: "#888",
    fontSize: "13px",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#7c5cbf",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "12px",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "0",
    border: "1px solid #ececec",
    borderRadius: "10px",
    marginBottom: "18px",
    overflow: "hidden",
  },
  statCell: {
    padding: "12px 10px",
    borderRight: "1px solid #ececec",
    textAlign: "left",
  },
  statCellLast: {
    padding: "12px 10px",
    textAlign: "left",
  },
  statNumber: {
    fontWeight: "800",
    fontSize: "20px",
    color: "#1a1a2e",
    lineHeight: 1,
    marginBottom: "2px",
  },
  statNumberBlue: {
    fontWeight: "800",
    fontSize: "20px",
    color: "#a78be8",
    lineHeight: 1,
    marginBottom: "2px",
  },
  statNumberGreen: {
    fontWeight: "800",
    fontSize: "20px",
    color: "#34c48b",
    lineHeight: 1,
    marginBottom: "2px",
  },
  statNumberOrange: {
    fontWeight: "800",
    fontSize: "20px",
    color: "#f59e42",
    lineHeight: 1,
    marginBottom: "2px",
  },
  statLabel: {
    color: "#aaa",
    fontSize: "11px",
    fontWeight: "500",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "18px",
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: "11px",
    letterSpacing: "0.08em",
    color: "#aaa",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
  barsContainer: {
    display: "flex",
    alignItems: "flex-end",
    gap: "5px",
    height: "56px",
    marginBottom: "6px",
  },
  barWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  bar: {
    width: "100%",
    borderRadius: "4px 4px 0 0",
    background: "#e8e2f8",
  },
  barActive: {
    width: "100%",
    borderRadius: "4px 4px 0 0",
    background: "#7c5cbf",
  },
  daysRow: {
    display: "flex",
    gap: "5px",
    marginTop: "4px",
  },
  dayLabel: {
    flex: 1,
    textAlign: "center",
    fontSize: "10px",
    color: "#bbb",
  },
  donutWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  donutSvg: {
    display: "block",
    marginBottom: "10px",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "11px",
    color: "#555",
    marginBottom: "3px",
  },
  legendDot: {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    display: "inline-block",
  },
  recentList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  recentRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  recentIcon: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "12px",
    color: "#fff",
    flexShrink: 0,
  },
  recentInfo: {
    flex: 1,
  },
  recentName: {
    fontWeight: "600",
    fontSize: "13px",
    color: "#1a1a2e",
  },
  recentRole: {
    fontSize: "11px",
    color: "#aaa",
  },
  badge: {
    borderRadius: "20px",
    padding: "3px 10px",
    fontSize: "11px",
    fontWeight: "600",
  },
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const BAR_HEIGHTS = [32, 22, 44, 50, 38, 20, 28];
const ACTIVE_DAY = 3;

function DonutChart() {
  const cx = 36, cy = 36, r = 28, stroke = 10;
  const circ = 2 * Math.PI * r;
  const applied = 0.6, interview = 0.25, offer = 0.15;
  const gap = 0.012;

  const appliedDash = circ * (applied - gap);
  const interviewDash = circ * (interview - gap);
  const offerDash = circ * (offer - gap);

  const rotate = -90;

  return (
    <svg width="72" height="72" style={styles.donutSvg}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e8e2f8" strokeWidth={stroke} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#7c5cbf" strokeWidth={stroke}
        strokeDasharray={`${appliedDash} ${circ}`}
        strokeDashoffset={circ * 0.25}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f59e42" strokeWidth={stroke}
        strokeDasharray={`${interviewDash} ${circ}`}
        strokeDashoffset={circ * 0.25 - circ * applied}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#34c48b" strokeWidth={stroke}
        strokeDasharray={`${offerDash} ${circ}`}
        strokeDashoffset={circ * 0.25 - circ * (applied + interview)}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        strokeLinecap="round"
      />
    </svg>
  );
}

const recentJobs = [
  { letter: "S", color: "#7c5cbf", name: "Stripe", role: "Frontend Eng", badge: "Interview", badgeColor: "#f59e42", badgeBg: "#fff7ed" },
  { letter: "N", color: "#3b82f6", name: "Notion", role: "Product Design", badge: "Applied", badgeColor: "#7c5cbf", badgeBg: "#f3f0fb" },
  { letter: "V", color: "#34c48b", name: "Vercel", role: "DX Engineer", badge: "Offer", badgeColor: "#34c48b", badgeBg: "#edfaf3" },
  { letter: "L", color: "#f59e42", name: "Linear", role: "Full Stack Dev", badge: "Applied", badgeColor: "#7c5cbf", badgeBg: "#f3f0fb" },
];

export default function DashboardPreview() {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.dashboardLabel}>Dashboard</span>
          <span style={styles.dateLabel}>Jun 2026</span>
        </div>
        <div style={styles.avatar}>JD</div>
      </div>

      <div style={styles.statsRow}>
        <div style={styles.statCell}>
          <div style={styles.statNumber}>24</div>
          <div style={styles.statLabel}>Applied</div>
        </div>
        <div style={styles.statCell}>
          <div style={styles.statNumberBlue}>8</div>
          <div style={styles.statLabel}>Interviews</div>
        </div>
        <div style={styles.statCell}>
          <div style={styles.statNumberGreen}>2</div>
          <div style={styles.statLabel}>Offers</div>
        </div>
        <div style={styles.statCellLast}>
          <div style={styles.statNumberOrange}>33%</div>
          <div style={styles.statLabel}>Rate</div>
        </div>
      </div>

      <div style={styles.twoCol}>
        <div>
          <div style={styles.sectionTitle}>Weekly Activity</div>
          <div style={styles.barsContainer}>
            {BAR_HEIGHTS.map((h, i) => (
              <div key={i} style={styles.barWrapper}>
                <div style={{ ...(i === ACTIVE_DAY ? styles.barActive : styles.bar), height: `${h}px` }} />
              </div>
            ))}
          </div>
          <div style={styles.daysRow}>
            {DAYS.map((d) => (
              <div key={d} style={styles.dayLabel}>{d}</div>
            ))}
          </div>
        </div>

        <div style={styles.donutWrapper}>
          <div style={styles.sectionTitle}>Status</div>
          <DonutChart />
          <div>
            {[
              { color: "#7c5cbf", label: "Applied" },
              { color: "#f59e42", label: "Interview" },
              { color: "#34c48b", label: "Offer" },
            ].map(({ color, label }) => (
              <div key={label} style={styles.legendItem}>
                <span style={{ ...styles.legendDot, background: color }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={styles.sectionTitle}>Recent</div>
      <div style={styles.recentList}>
        {recentJobs.map((job) => (
          <div key={job.name} style={styles.recentRow}>
            <div style={{ ...styles.recentIcon, background: job.color }}>{job.letter}</div>
            <div style={styles.recentInfo}>
              <div style={styles.recentName}>{job.name}</div>
              <div style={styles.recentRole}>{job.role}</div>
            </div>
            <span style={{ ...styles.badge, color: job.badgeColor, background: job.badgeBg }}>{job.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}