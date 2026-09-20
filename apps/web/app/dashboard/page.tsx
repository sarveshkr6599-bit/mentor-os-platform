"use client";

import type { CSSProperties } from "react";

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Dashboard() {
  return (
    <main style={pageStyle}>
      {/* Background decoration */}
      <div style={glowOne}></div>
      <div style={glowTwo}></div>
      <div style={gridPattern}></div>

      <div style={containerStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={logoBadgeStyle}>MENTOROS</div>

          <h1 style={headingStyle}>All Dashboard Pages</h1>

          <p style={subtitleStyle}>
            Choose your workspace to continue
          </p>
        </div>

        {/* Dashboard Cards */}
        <div style={cardsGridStyle}>
          {/* Student */}
          <button
            type="button"
            onClick={() => goTo("/student")}
            style={studentCardStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, studentCardStyle);
            }}
          >
            <div style={{ ...iconStyle, background: "#eff6ff" }}>🎓</div>

            <div style={roleLabelStyle}>LEARNING WORKSPACE</div>

            <h2 style={titleStyle}>Student</h2>

            <p style={descriptionStyle}>
              Access assignments, submissions, progress, learning resources
              and AI feedback.
            </p>

            <span style={studentButtonStyle}>
              Open Student Dashboard →
            </span>
          </button>

          {/* Mentor */}
          <button
            type="button"
            onClick={() => goTo("/mentor")}
            style={mentorCardStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, mentorCardStyle);
            }}
          >
            <div style={{ ...iconStyle, background: "#ecfdf5" }}>👨‍🏫</div>

            <div style={roleLabelStyle}>MENTOR WORKSPACE</div>

            <h2 style={titleStyle}>Mentor</h2>

            <p style={descriptionStyle}>
              Manage students, submissions, feedback and AI-powered insights.
            </p>

            <span style={mentorButtonStyle}>
              Open Mentor Dashboard →
            </span>
          </button>

          {/* Admin */}
          <button
            type="button"
            onClick={() => goTo("/admin")}
            style={adminCardStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyle);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, adminCardStyle);
            }}
          >
            <div style={{ ...iconStyle, background: "#fff7ed" }}>🛡️</div>

            <div style={roleLabelStyle}>ADMIN WORKSPACE</div>

            <h2 style={titleStyle}>Admin</h2>

            <p style={descriptionStyle}>
              Manage students, mentors, assignments, analytics and AI reports.
            </p>

            <span style={adminButtonStyle}>
              Open Admin Dashboard →
            </span>
          </button>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <span style={footerDotStyle}></span>
          MentorOS • Unified Learning & Mentoring Platform
        </div>
      </div>
    </main>
  );
}

/* =========================
   PAGE
========================= */

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  padding: "70px 28px",
  fontFamily:
    'Inter, "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',

  background:
    "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.20), transparent 30%), radial-gradient(circle at 85% 15%, rgba(99,102,241,0.22), transparent 30%), linear-gradient(135deg, #07111f 0%, #0f172a 45%, #172554 100%)",

  color: "#ffffff",
};

const containerStyle: CSSProperties = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
};

const headerStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: "52px",
};

const logoBadgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px 16px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.10)",
  border: "1px solid rgba(255,255,255,0.16)",
  color: "#93c5fd",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "3px",
  backdropFilter: "blur(12px)",
  marginBottom: "18px",
};

const headingStyle: CSSProperties = {
  margin: 0,
  fontSize: "clamp(34px, 5vw, 56px)",
  lineHeight: 1.1,
  fontWeight: 800,
  letterSpacing: "-1.5px",
  color: "#ffffff",
};

const subtitleStyle: CSSProperties = {
  margin: "16px 0 0",
  color: "#cbd5e1",
  fontSize: "clamp(15px, 2vw, 18px)",
};

const cardsGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "26px",
};

const baseCardStyle: CSSProperties = {
  minHeight: "350px",
  borderRadius: "24px",
  padding: "34px 28px",
  textAlign: "center",
  cursor: "pointer",
  fontFamily: "inherit",
  transition: "all 0.25s ease",
  position: "relative",
  overflow: "hidden",
};

const studentCardStyle: CSSProperties = {
  ...baseCardStyle,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(239,246,255,0.96))",
  border: "1px solid rgba(147,197,253,0.65)",
  boxShadow: "0 20px 50px rgba(30,64,175,0.22)",
};

const mentorCardStyle: CSSProperties = {
  ...baseCardStyle,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(236,253,245,0.96))",
  border: "1px solid rgba(110,231,183,0.65)",
  boxShadow: "0 20px 50px rgba(5,150,105,0.18)",
};

const adminCardStyle: CSSProperties = {
  ...baseCardStyle,
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,247,237,0.96))",
  border: "1px solid rgba(253,186,116,0.65)",
  boxShadow: "0 20px 50px rgba(194,65,12,0.18)",
};

const cardHoverStyle: CSSProperties = {
  ...baseCardStyle,
  transform: "translateY(-8px)",
  boxShadow: "0 28px 65px rgba(0,0,0,0.28)",
};

const iconStyle: CSSProperties = {
  width: "76px",
  height: "76px",
  borderRadius: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "36px",
  margin: "0 auto 20px",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
};

const roleLabelStyle: CSSProperties = {
  color: "#64748b",
  fontSize: "10px",
  fontWeight: 800,
  letterSpacing: "1.8px",
  marginBottom: "8px",
};

const titleStyle: CSSProperties = {
  margin: "0 0 12px",
  color: "#0f172a",
  fontSize: "26px",
  fontWeight: 800,
};

const descriptionStyle: CSSProperties = {
  color: "#475569",
  fontSize: "14px",
  lineHeight: 1.7,
  minHeight: "72px",
  margin: "0 auto",
  maxWidth: "310px",
};

const baseButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "24px",
  padding: "12px 18px",
  borderRadius: "12px",
  color: "#ffffff",
  fontSize: "13px",
  fontWeight: 700,
  border: "none",
  boxShadow: "0 8px 20px rgba(15,23,42,0.14)",
};

const studentButtonStyle: CSSProperties = {
  ...baseButtonStyle,
  background: "#2563eb",
};

const mentorButtonStyle: CSSProperties = {
  ...baseButtonStyle,
  background: "#059669",
};

const adminButtonStyle: CSSProperties = {
  ...baseButtonStyle,
  background: "#ea580c",
};

/* =========================
   BACKGROUND
========================= */

const glowOne: CSSProperties = {
  position: "absolute",
  width: "380px",
  height: "380px",
  borderRadius: "50%",
  background: "rgba(37,99,235,0.18)",
  filter: "blur(80px)",
  top: "-140px",
  left: "-120px",
  zIndex: 0,
};

const glowTwo: CSSProperties = {
  position: "absolute",
  width: "420px",
  height: "420px",
  borderRadius: "50%",
  background: "rgba(124,58,237,0.16)",
  filter: "blur(90px)",
  right: "-150px",
  bottom: "-170px",
  zIndex: 0,
};

const gridPattern: CSSProperties = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  opacity: 0.08,
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
  backgroundSize: "42px 42px",
};

const footerStyle: CSSProperties = {
  marginTop: "42px",
  textAlign: "center",
  color: "#94a3b8",
  fontSize: "12px",
  letterSpacing: "0.3px",
};

const footerDotStyle: CSSProperties = {
  display: "inline-block",
  width: "7px",
  height: "7px",
  borderRadius: "50%",
  background: "#34d399",
  marginRight: "8px",
};