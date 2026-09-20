"use client";

import { useEffect, useState } from "react";
import { api } from "@/src/shared/services/api/client";
import styles from "./StudentDashboard.module.css";

const goTo = (path: string) => {
  window.location.href = path;
};

export default function StudentDashboard() {
  const [message, setMessage] = useState("Checking Backend...");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        setMessage(response.data.message);
      } catch {
        setMessage("Backend Connection Failed");
      }
    };

    checkHealth();
  }, []);

  const backendConnected =
    message !== "Backend Connection Failed";

  return (
    <div
      className={styles.dashboard}
      style={{
        display: "flex",
        minHeight: "100vh",
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
            <a
              href="/student"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student");
              }}
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#2563eb",
                padding: "12px 14px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              ⌂ &nbsp; Dashboard
            </a>

            <a
              href="/student/assignments"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/assignments");
              }}
              style={navStyle}
            >
              ▣ &nbsp; My Assignments
              <span style={badgeStyle}>5</span>
            </a>

            <a
              href="/student/submissions"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/submissions");
              }}
              style={navStyle}
            >
              ◫ &nbsp; My Submissions
            </a>

            <a
              href="/student/progress"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/progress");
              }}
              style={navStyle}
            >
              ◔ &nbsp; Progress
            </a>

            <a
              href="/student/ai-feedback"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/ai-feedback");
              }}
              style={navStyle}
            >
              ✦ &nbsp; AI Feedback
            </a>

            <a
              href="/student/learning-resources"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/learning-resources");
              }}
              style={navStyle}
            >
              ▤ &nbsp; Learning Resources
            </a>

            <a
              href="/student/notifications"
              onClick={(e) => {
                e.preventDefault();
                goTo("/student/notifications");
              }}
              style={navStyle}
            >
              ♢ &nbsp; Notifications
              <span style={badgeStyle}>3</span>
            </a>
          </nav>
        </div>

        {/* BOTTOM NAV */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
        >
          <a
            href="/student/profile"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/profile");
            }}
            style={navStyle}
          >
            ◉ &nbsp; Profile
          </a>

          <a
            href="/student/settings"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/settings");
            }}
            style={navStyle}
          >
            ⚙ &nbsp; Settings
          </a>

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
              Keep Learning!
            </strong>

            <p
              style={{
                margin: "5px 0 0",
                fontSize: "10px",
                color: "#94a3b8",
              }}
            >
              Consistency today creates tomorrow.
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN DASHBOARD ================= */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* TOP HEADER */}
        <header className={styles.topHeader}>
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.topRight}>
            <button
              type="button"
              className={styles.notification}
              aria-label="Notifications"
              onClick={() => goTo("/student/notifications")}
              style={{ cursor: "pointer" }}
            >
              🔔
              <span />
            </button>

            <div
              className={styles.profile}
              onClick={() => goTo("/student/profile")}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.profileAvatar}>SK</div>

              <div className={styles.profileInfo}>
                <strong>Student</strong>
                <small>Student</small>
              </div>

              <span className={styles.profileArrow}>⌄</span>
            </div>
          </div>
        </header>

        {/* GREETING */}
        <section className={styles.welcome}>
          <div className={styles.welcomeLeft}>
            <div className={styles.wave}>👋</div>

            <div>
              <h1>Good Morning, Student!</h1>

              <p>
                Keep learning, keep building. You&apos;re doing great!
              </p>
            </div>
          </div>

          <div className={styles.dateBox}>
            <strong>Tuesday, 9 September 2025</strong>

            <span>
              Here&apos;s your learning overview for today.
            </span>
          </div>
        </section>

        {/* STAT CARDS */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div
              className={`${styles.statIcon} ${styles.blueIcon}`}
            >
              📄
            </div>

            <div className={styles.statContent}>
              <span>Total Assignments</span>
              <strong>5</strong>

              <small>
                3 Pending&nbsp;&nbsp;•&nbsp;&nbsp;2 Completed
              </small>
            </div>
          </div>

          <div className={styles.statCard}>
            <div
              className={`${styles.statIcon} ${styles.greenIcon}`}
            >
              ✓
            </div>

            <div className={styles.statContent}>
              <span>Submissions</span>
              <strong>3</strong>

              <small>
                2 Reviewed&nbsp;&nbsp;•&nbsp;&nbsp;1 Pending
              </small>
            </div>
          </div>

          <div className={styles.statCard}>
            <div
              className={`${styles.statIcon} ${styles.purpleIcon}`}
            >
              ▮
            </div>

            <div className={styles.statContent}>
              <span>Overall Progress</span>
              <strong>78%</strong>

              <small className={styles.positive}>
                ↑ +12% from last month
              </small>
            </div>
          </div>

          <div className={styles.statCard}>
            <div
              className={`${styles.statIcon} ${styles.goldIcon}`}
            >
              ★
            </div>

            <div className={styles.statContent}>
              <span>AI Feedback Score</span>
              <strong>4.2</strong>

              <small>Good Performance</small>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className={styles.mainLayout}>
          {/* LEFT COLUMN */}
          <main className={styles.leftColumn}>
            {/* LEARNING PROGRESS */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Learning Progress</h2>
                  <p>Your journey so far</p>
                </div>

                <button className={styles.monthButton}>
                  This Month <span>⌄</span>
                </button>
              </div>

              <div className={styles.learningContent}>
                <div className={styles.progressCircle}>
                  <div>
                    <strong>78%</strong>
                    <span>Completed</span>
                  </div>
                </div>

                <div className={styles.progressItems}>
                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>
                      <span>
                        <i className={styles.dotBlue} />
                        Assignments
                      </span>
                      <strong>8/10</strong>
                    </div>

                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressBlue}
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>

                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>
                      <span>
                        <i className={styles.dotGreen} />
                        Submissions
                      </span>
                      <strong>6/8</strong>
                    </div>

                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressGreen}
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>

                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>
                      <span>
                        <i className={styles.dotPurple} />
                        Mentor Feedback
                      </span>
                      <strong>4/6</strong>
                    </div>

                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressPurple}
                        style={{ width: "67%" }}
                      />
                    </div>
                  </div>

                  <div className={styles.progressItem}>
                    <div className={styles.progressLabel}>
                      <span>
                        <i className={styles.dotGold} />
                        Learning Hours
                      </span>
                      <strong>12/20</strong>
                    </div>

                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressGold}
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* RECENT ASSIGNMENTS */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <div>
                  <h2>Recent Assignments</h2>
                </div>

                <button
                  className={styles.viewAll}
                  onClick={() =>
                    goTo("/student/assignments")
                  }
                >
                  View All
                </button>
              </div>

              <div className={styles.tableWrapper}>
                <table className={styles.assignmentTable}>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Subject</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Build a Responsive Navbar</td>
                      <td>Frontend Development</td>
                      <td>12 Sep 2025</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.pending}`}
                        >
                          Pending
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() =>
                            goTo("/student/assignments")
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>Create REST APIs</td>
                      <td>Backend Development</td>
                      <td>15 Sep 2025</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.pending}`}
                        >
                          Pending
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() =>
                            goTo("/student/assignments")
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>Design Database Schema</td>
                      <td>Database</td>
                      <td>18 Sep 2025</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.inProgress}`}
                        >
                          In Progress
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() =>
                            goTo("/student/assignments")
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>UI/UX Design Implementation</td>
                      <td>Frontend Development</td>
                      <td>05 Sep 2025</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.completed}`}
                        >
                          Completed
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() =>
                            goTo("/student/assignments")
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>API Integration</td>
                      <td>Full Stack</td>
                      <td>01 Sep 2025</td>
                      <td>
                        <span
                          className={`${styles.status} ${styles.completed}`}
                        >
                          Completed
                        </span>
                      </td>
                      <td>
                        <button
                          className={styles.viewButton}
                          onClick={() =>
                            goTo("/student/assignments")
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>

          {/* RIGHT COLUMN */}
          <aside className={styles.rightColumn}>
            {/* UPCOMING DEADLINES */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>📅 Upcoming Deadlines</h2>

                <button
                  className={styles.viewAll}
                  onClick={() =>
                    goTo("/student/assignments")
                  }
                >
                  View All
                </button>
              </div>

              <div className={styles.deadlines}>
                <div className={styles.deadline}>
                  <div
                    className={`${styles.dateBadge} ${styles.dateRed}`}
                  >
                    <strong>12</strong>
                    <span>SEP</span>
                  </div>

                  <div className={styles.deadlineInfo}>
                    <strong>Frontend Assignment</strong>
                    <span>Build a responsive navbar</span>
                  </div>

                  <span className={styles.daysRed}>
                    3 days left
                  </span>
                </div>

                <div className={styles.deadline}>
                  <div className={styles.dateBadge}>
                    <strong>15</strong>
                    <span>SEP</span>
                  </div>

                  <div className={styles.deadlineInfo}>
                    <strong>Backend Assignment</strong>
                    <span>Create REST APIs</span>
                  </div>

                  <span className={styles.daysGold}>
                    6 days left
                  </span>
                </div>

                <div className={styles.deadline}>
                  <div className={styles.dateBadge}>
                    <strong>18</strong>
                    <span>SEP</span>
                  </div>

                  <div className={styles.deadlineInfo}>
                    <strong>Database Assignment</strong>
                    <span>Design database schema</span>
                  </div>

                  <span className={styles.daysBlue}>
                    9 days left
                  </span>
                </div>

                <div className={styles.deadline}>
                  <div className={styles.dateBadge}>
                    <strong>22</strong>
                    <span>SEP</span>
                  </div>

                  <div className={styles.deadlineInfo}>
                    <strong>Final Project Draft</strong>
                    <span>Submit project proposal</span>
                  </div>

                  <span className={styles.daysBlue}>
                    13 days left
                  </span>
                </div>
              </div>
            </section>

            {/* AI INSIGHTS */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>✦ AI Insights</h2>

                <button
                  className={styles.viewAll}
                  onClick={() =>
                    goTo("/student/ai-feedback")
                  }
                >
                  View Details
                </button>
              </div>

              <div className={styles.aiInsight}>
                <div className={styles.aiLight}>💡</div>

                <div>
                  <strong>You&apos;re doing well!</strong>

                  <p>
                    Your submission quality has improved by
                    20% compared to last month. Keep it up!
                  </p>
                </div>
              </div>
            </section>

            {/* QUICK ACTIONS */}
            <section className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>⚡ Quick Actions</h2>
              </div>

              <div className={styles.quickActions}>
                <button
                  className={styles.actionButton}
                  onClick={() =>
                    goTo("/student/assignments")
                  }
                >
                  <span>📄</span>
                  View Assignments
                </button>

                <button
                  className={styles.actionButton}
                  onClick={() =>
                    goTo("/student/submissions")
                  }
                >
                  <span>↥</span>
                  Submit Work
                </button>

                <button
                  className={styles.actionButton}
                  onClick={() =>
                    goTo("/student/ai-feedback")
                  }
                >
                  <span>💬</span>
                  View Feedback
                </button>

                <button
                  className={styles.actionButton}
                  onClick={() =>
                    goTo("/student/profile")
                  }
                >
                  <span>♙</span>
                  Update Profile
                </button>
              </div>
            </section>
          </aside>
        </div>

        {/* BACKEND STATUS */}
        <div className={styles.backendStatus}>
          <div>
            <span
              className={`${styles.backendDot} ${
                backendConnected
                  ? styles.connected
                  : styles.disconnected
              }`}
            />

            <strong>
              {backendConnected
                ? "MentorOS services are running"
                : "Backend connection unavailable"}
            </strong>
          </div>

          <span>{message}</span>
        </div>

        {/* BOTTOM MOTIVATION */}
        <section className={styles.motivation}>
          <div className={styles.motivationIcon}>▲</div>

          <div>
            <h2>Discipline today, success tomorrow.</h2>
            <p>
              Keep pushing. You&apos;re closer than you think.
            </p>
          </div>

          <div className={styles.mountain}>⛰️</div>

          <div className={styles.motivationBadge}>
            <strong>Better Students</strong>
            <span>Build Brighter Futures</span>
          </div>
        </section>
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