"use client";

import styles from "./MentorDashboard.module.css";

const goTo = (path: string) => {
  window.location.href = path;
};

export default function MentorDashboard() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8fafc",
      }}
    >
      {/* ================= SIDEBAR ================= */}
      <aside
        style={{
          width: "240px",
          minWidth: "240px",
          background: "#0f172a",
          color: "#fff",
          padding: "24px 14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 9999,
          boxSizing: "border-box",
        }}
      >
        <div>
          {/* LOGO */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 12px 30px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🎓
            </div>

            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "17px",
                }}
              >
                MentorOS
              </strong>

              <span
                style={{
                  fontSize: "9px",
                  color: "#94a3b8",
                }}
              >
                Learn · Build · Grow
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            {/* Dashboard */}
            <a
              href="/mentor"
              onClick={(e) => {
                e.preventDefault();
                goTo("/mentor");
              }}
              style={activeNavStyle}
            >
              ⌂ &nbsp; Dashboard
            </a>

            {/* Students */}
            <a
              href="/mentor/students"
              onClick={(e) => {
                e.preventDefault();
                goTo("/mentor/students");
              }}
              style={navStyle}
            >
              🎓 &nbsp; My Students
              <span style={badgeStyle}>48</span>
            </a>

            {/* Submissions */}
            <a
              href="/mentor/submissions"
              onClick={(e) => {
                e.preventDefault();
                goTo("/mentor/submissions");
              }}
              style={navStyle}
            >
              📝 &nbsp; Submissions
            </a>

            {/* Feedback */}
            <a
              href="/mentor/feedback"
              onClick={(e) => {
                e.preventDefault();
                goTo("/mentor/feedback");
              }}
              style={navStyle}
            >
              💬 &nbsp; Feedback
            </a>

            {/* AI Insights */}
            <a
              href="/mentor/ai-insights"
              onClick={(e) => {
                e.preventDefault();
                goTo("/mentor/ai-insights");
              }}
              style={navStyle}
            >
              ✦ &nbsp; AI Insights
            </a>
          </nav>
        </div>

        {/* BOTTOM AREA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
        >
          <button
            type="button"
            onClick={() => goTo("/mentor/ai-insights")}
            style={navButtonStyle}
          >
            ⚡ &nbsp; Mentor Tools
          </button>

          <div
            style={{
              marginTop: "15px",
              padding: "15px",
              borderRadius: "12px",
              background: "#172554",
              color: "#dbeafe",
            }}
          >
            <div style={{ fontSize: "22px" }}>🚀</div>

            <strong
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "13px",
              }}
            >
              Keep Mentoring!
            </strong>

            <p
              style={{
                margin: "5px 0 0",
                fontSize: "10px",
                color: "#94a3b8",
                lineHeight: 1.5,
              }}
            >
              Guide students, track progress and build better outcomes.
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Header */}
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>MENTOROS MENTOR WORKSPACE</p>

            <h1>Mentor Dashboard</h1>

            <p className={styles.subtitle}>
              Manage your students, projects and mentoring activities.
            </p>
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.notificationButton}
              type="button"
              onClick={() => goTo("/mentor/submissions")}
              style={{ cursor: "pointer" }}
            >
              🔔
            </button>

            <div
              className={styles.avatar}
              onClick={() => goTo("/mentor/students")}
              style={{ cursor: "pointer" }}
            >
              M
            </div>
          </div>
        </header>

        {/* Status */}
        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>
            <span className={styles.statusDot} />
            <span>All systems operational</span>
          </div>

          <span className={styles.statusMessage}>
            Last updated: Just now
          </span>
        </div>

        {/* Stats */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>🎓</div>

            <div>
              <span className={styles.statLabel}>My Students</span>
              <strong>48</strong>
            </div>

            <span className={styles.statTrend}>+6 this month</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>📋</div>

            <div>
              <span className={styles.statLabel}>Active Projects</span>
              <strong>16</strong>
            </div>

            <span className={styles.statTrend}>+3 this week</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>✅</div>

            <div>
              <span className={styles.statLabel}>Tasks Reviewed</span>
              <strong>126</strong>
            </div>

            <span className={styles.statTrend}>+18 this week</span>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>⭐</div>

            <div>
              <span className={styles.statLabel}>Student Rating</span>
              <strong>4.8</strong>
            </div>

            <span className={styles.statMeta}>Excellent</span>
          </div>
        </section>

        {/* Main Grid */}
        <div className={styles.mainGrid}>
          {/* Students */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.sectionLabel}>STUDENTS</span>
                <h2>My Students</h2>
              </div>

              <button
                className={styles.viewAll}
                type="button"
                onClick={() => goTo("/mentor/students")}
              >
                View all
              </button>
            </div>

            <div className={styles.studentList}>
              <div className={styles.student}>
                <div className={styles.studentAvatar}>R</div>

                <div className={styles.studentInfo}>
                  <strong>Rahul Kumar</strong>
                  <span>MentorOS Platform</span>
                </div>

                <div className={styles.studentProgress}>
                  <span>82%</span>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.student}>
                <div className={styles.studentAvatar}>P</div>

                <div className={styles.studentInfo}>
                  <strong>Priya Singh</strong>
                  <span>AI Learning Assistant</span>
                </div>

                <div className={styles.studentProgress}>
                  <span>68%</span>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "68%" }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.student}>
                <div className={styles.studentAvatar}>A</div>

                <div className={styles.studentInfo}>
                  <strong>Aman Verma</strong>
                  <span>Student Management System</span>
                </div>

                <div className={styles.studentProgress}>
                  <span>54%</span>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "54%" }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.student}>
                <div className={styles.studentAvatar}>S</div>

                <div className={styles.studentInfo}>
                  <strong>Simran Gupta</strong>
                  <span>Career Guidance App</span>
                </div>

                <div className={styles.studentProgress}>
                  <span>91%</span>

                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "91%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.sectionLabel}>MENTOR TOOLS</span>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className={styles.actionList}>
              <button
                className={styles.action}
                type="button"
                onClick={() => goTo("/mentor/students")}
              >
                <span className={styles.actionIcon}>🎓</span>

                <span>
                  <strong>Manage Students</strong>
                  <small>View and manage your students</small>
                </span>
              </button>

              <button
                className={styles.action}
                type="button"
                onClick={() => goTo("/mentor/submissions")}
              >
                <span className={styles.actionIcon}>📝</span>

                <span>
                  <strong>Review Submissions</strong>
                  <small>Review pending student work</small>
                </span>
              </button>

              <button
                className={styles.action}
                type="button"
                onClick={() => goTo("/mentor/feedback")}
              >
                <span className={styles.actionIcon}>💬</span>

                <span>
                  <strong>Send Feedback</strong>
                  <small>Give feedback to students</small>
                </span>
              </button>

              <button
                className={styles.action}
                type="button"
                onClick={() => goTo("/mentor/ai-insights")}
              >
                <span className={styles.actionIcon}>📊</span>

                <span>
                  <strong>View AI Insights</strong>
                  <small>Check student performance</small>
                </span>
              </button>
            </div>
          </section>
        </div>

        {/* Bottom Grid */}
        <div className={styles.bottomGrid}>
          {/* Upcoming Reviews */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.sectionLabel}>WORK QUEUE</span>
                <h2>Upcoming Reviews</h2>
              </div>

              <button
                className={styles.viewAll}
                type="button"
                onClick={() => goTo("/mentor/submissions")}
              >
                View all
              </button>
            </div>

            <div className={styles.reviewList}>
              <div className={styles.review}>
                <div className={styles.reviewIcon}>📋</div>

                <div>
                  <strong>API Integration</strong>
                  <span>Rahul Kumar · Due today</span>
                </div>

                <span className={styles.highPriority}>High</span>
              </div>

              <div className={styles.review}>
                <div className={styles.reviewIcon}>💻</div>

                <div>
                  <strong>Dashboard Components</strong>
                  <span>Priya Singh · Tomorrow</span>
                </div>

                <span className={styles.mediumPriority}>Medium</span>
              </div>

              <div className={styles.review}>
                <div className={styles.reviewIcon}>🔐</div>

                <div>
                  <strong>Authentication Module</strong>
                  <span>Aman Verma · Sep 15</span>
                </div>

                <span className={styles.lowPriority}>Low</span>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.sectionLabel}>ACTIVITY</span>
                <h2>Recent Activity</h2>
              </div>

              <button
                className={styles.viewAll}
                type="button"
                onClick={() => goTo("/mentor/feedback")}
              >
                View all
              </button>
            </div>

            <div className={styles.activityList}>
              <div className={styles.activity}>
                <div className={styles.activityIcon}>✓</div>

                <div>
                  <strong>Reviewed Rahul&apos;s submission</strong>
                  <span>1 hour ago</span>
                </div>
              </div>

              <div className={styles.activity}>
                <div className={styles.activityIcon}>💬</div>

                <div>
                  <strong>Sent feedback to Priya</strong>
                  <span>3 hours ago</span>
                </div>
              </div>

              <div className={styles.activity}>
                <div className={styles.activityIcon}>🎓</div>

                <div>
                  <strong>Added a new student</strong>
                  <span>Yesterday</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ================= NAV STYLES ================= */

const navStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#cbd5e1",
  padding: "12px 14px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  position: "relative",
};

const activeNavStyle: React.CSSProperties = {
  ...navStyle,
  color: "#fff",
  background: "#2563eb",
};

const navButtonStyle: React.CSSProperties = {
  border: "none",
  background: "transparent",
  color: "#cbd5e1",
  padding: "12px 14px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  textAlign: "left",
};

const badgeStyle: React.CSSProperties = {
  marginLeft: "auto",
  background: "#ef4444",
  color: "#fff",
  minWidth: "20px",
  height: "20px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  fontWeight: 700,
};