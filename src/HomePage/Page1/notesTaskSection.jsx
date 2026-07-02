import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const styles = {
  section: {
    background: "#f4f4f8",
    padding: "80px 24px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "60px",
    flexWrap: "wrap",
  },

  // LEFT PANEL
  left: {
    flex: "1 1 360px",
    maxWidth: "440px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 12px rgba(120,100,220,0.07)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
  cardHeaderLeft: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "700",
    fontSize: "14px",
    color: "#1a1a2e",
  },
  dueBadge: {
    background: "#fff7ed",
    color: "#f59e42",
    fontSize: "11px",
    fontWeight: "700",
    borderRadius: "20px",
    padding: "3px 10px",
  },
  taskRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid #f3f3f3",
  },
  taskRowLast: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    borderRadius: "4px",
    border: "2px solid #d0c8f0",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  checkboxChecked: {
    width: "16px",
    height: "16px",
    borderRadius: "4px",
    background: "#7c5cbf",
    border: "2px solid #7c5cbf",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  taskLabel: {
    flex: 1,
    fontSize: "13px",
    color: "#1a1a2e",
  },
  taskLabelDone: {
    flex: 1,
    fontSize: "13px",
    color: "#aaa",
    textDecoration: "line-through",
  },

  // Notes card
  addBtn: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#7c5cbf",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  noteItem: {
    border: "1px solid #ececec",
    borderRadius: "10px",
    padding: "12px 14px",
    marginBottom: "10px",
  },
  noteItemLast: {
    border: "1px solid #ececec",
    borderRadius: "10px",
    padding: "12px 14px",
  },
  noteTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "6px",
  },
  noteCompany: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "700",
    fontSize: "13px",
    color: "#1a1a2e",
  },
  noteIcon: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: "700",
    color: "#fff",
  },
  noteDate: {
    fontSize: "11px",
    color: "#bbb",
  },
  noteText: {
    fontSize: "12px",
    color: "#888",
    lineHeight: 1.6,
    margin: 0,
  },

  // RIGHT
  right: {
    flex: "1 1 320px",
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
    marginBottom: "28px",
  },
  featureList: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    marginBottom: "32px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "14px",
    color: "#1a1a2e",
    fontWeight: "500",
  },
  featureIcon: {
    fontSize: "18px",
    width: "24px",
    textAlign: "center",
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
};

const tagStyles = {
  "Follow-Up": { background: "#ede9fb", color: "#7c5cbf" },
  "Prep":       { background: "#fff7ed", color: "#f59e42" },
  "Profile":    { background: "#edfaf3", color: "#34c48b" },
  "Research":   { background: "#e8f0fe", color: "#3b82f6" },
};

const Tag = ({ label }) => {
  const s = tagStyles[label] || { background: "#f3f3f3", color: "#888" };
  return (
    <span style={{
      fontSize: "11px", fontWeight: "700", borderRadius: "20px",
      padding: "3px 10px", background: s.background, color: s.color,
    }}>
      {label}
    </span>
  );
};

const initialTasks = [
  { id: 1, label: "Follow up with Stripe recruiter", tag: "Follow-Up", done: true },
  { id: 2, label: "Prepare system design answers for Notion", tag: "Prep", done: false },
  { id: 3, label: "Update portfolio with latest projects", tag: "Profile", done: true },
  { id: 4, label: "Send thank-you note to Linear interviewer", tag: "Follow-Up", done: false },
  { id: 5, label: "Research Vercel engineering culture", tag: "Research", done: false },
];

const notes = [
  {
    company: "Stripe", letter: "S", color: "#7c5cbf", date: "Jun 22",
    text: "Interviewer mentioned team uses Go + TypeScript. Loves infrastructure background. Very culture-first.",
  },
  {
    company: "Notion", letter: "N", color: "#3b82f6", date: "Jun 20",
    text: 'Two rounds: product sense + technical. Prepare "build a feature" question. CTO came from Google.',
  },
];

const features = [
  {
    icon: "📝",
    text: "Create unlimited notes for interviews and applications."
  },
  {
    icon: "🏢",
    text: "Keep company-specific information organized in one place."
  },
  {
    icon: "📚",
    text: "Store preparation tips, interview questions, and observations."
  },
  {
    icon: "⚡",
    text: "Access your notes anytime while tracking your applications."
  }
];

export default function NotesTasksSection() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggle = (id) =>
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));

  const dueCount = tasks.filter((t) => !t.done).length;

  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      {/* LEFT */}
      <div style={styles.left}>
        {/* Tasks Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.cardHeaderLeft}>
              <span>📋</span> Tasks
            </div>
            <span style={styles.dueBadge}>{dueCount} due</span>
          </div>

          {tasks.map((task, i) => (
            <div
              key={task.id}
              style={i === tasks.length - 1 ? styles.taskRowLast : styles.taskRow}
              onClick={() => toggle(task.id)}
            >
              <div style={task.done ? styles.checkboxChecked : styles.checkbox}>
                {task.done && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={task.done ? styles.taskLabelDone : styles.taskLabel}>
                {task.label}
              </span>
              <Tag label={task.tag} />
            </div>
          ))}
        </div>

        {/* Interview Notes Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <div style={styles.cardHeaderLeft}>
              <span>🗒️</span> Interview Notes
            </div>
            <button style={styles.addBtn}>+ Add</button>
          </div>

          {notes.map((note, i) => (
            <div key={note.company} style={i === notes.length - 1 ? styles.noteItemLast : styles.noteItem}>
              <div style={styles.noteTop}>
                <div style={styles.noteCompany}>
                  <div style={{ ...styles.noteIcon, background: note.color }}>{note.letter}</div>
                  {note.company}
                </div>
                <span style={styles.noteDate}>{note.date}</span>
              </div>
              <p style={styles.noteText}>{note.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div style={styles.right}>
        <span style={styles.eyebrow}>Notes &amp; Tasks</span>
        <h2 style={styles.heading}>Notes &amp; Tasks to keep you on track</h2>
        <p style={styles.subheading}>
          Stay organized with rich interview notes and smart task management. Never lose an important detail — keep everything linked to each application.
        </p>

        <div style={styles.featureList}>
          {features.map((f) => (
            <div key={f.text} style={styles.featureItem}>
              <span style={styles.featureIcon}>{f.icon}</span>
              {f.text}
            </div>
          ))}
        </div>

        <button style={styles.btn} onClick={()=>navigate('/signUp')}> Start Taking Notes</button>
      </div>
    </section>
  );
}