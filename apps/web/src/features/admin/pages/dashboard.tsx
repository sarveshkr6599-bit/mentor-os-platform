"use client";

import styles from "./AdminDashboard.module.css";

const goTo = (path: string) => {
  window.location.href = path;
};

export default function AdminDashboard() {
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
          minHeight: "100vh",
          background: "#0f172a",
          color: "#fff",
          padding: "24px 14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          height: "100vh",
          boxSizing: "border-box",
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
              🛡️
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
                Admin Workspace
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
              href="/admin"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin");
              }}
              style={activeNavStyle}
            >
              ⌂ &nbsp; Dashboard
            </a>

            <a
              href="/admin/students"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin/students");
              }}
              style={navStyle}
            >
              🎓 &nbsp; Students
            </a>

            <a
              href="/admin/mentors"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin/mentors");
              }}
              style={navStyle}
            >
              👨‍🏫 &nbsp; Mentors
            </a>

            <a
              href="/admin/assignments"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin/assignments");
              }}
              style={navStyle}
            >
              📋 &nbsp; Assignments
            </a>

            <a
              href="/admin/analytics"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin/analytics");
              }}
              style={navStyle}
            >
              📊 &nbsp; Analytics
            </a>

            <a
              href="/admin/ai-reports"
              onClick={(e) => {
                e.preventDefault();
                goTo("/admin/ai-reports");
              }}
              style={navStyle}
            >
              ✦ &nbsp; AI Reports
            </a>
          </nav>
        </div>

        {/* BOTTOM */}
        <div>
          <button
            type="button"
            onClick={() => goTo("/admin/analytics")}
            style={navButtonStyle}
          >
            ⚡ &nbsp; Platform Analytics
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
              Manage MentorOS
            </strong>

            <p
              style={{
                margin: "5px 0 0",
                fontSize: "10px",
                color: "#94a3b8",
                lineHeight: 1.5,
              }}
            >
              Manage students, mentors and platform activities.
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main
        className={styles.dashboard}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* TOP BAR */}
        <div className={styles.topBar}>
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search students, mentors, projects..."
            />
          </div>

          <div className={styles.topRight}>
            <button
              className={styles.bell}
              type="button"
              onClick={() => goTo("/admin/ai-reports")}
              style={{ cursor: "pointer" }}
            >
              🔔
            </button>

            <div
              className={styles.profile}
              onClick={() => goTo("/admin/students")}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.profileAvatar}>A</div>

              <div>
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>

              <span className={styles.chevron}>⌄</span>
            </div>
          </div>
        </div>

        {/* GREETING */}
        <section className={styles.greeting}>
          <div>
            <div className={styles.greetingTitle}>
              <span>👋</span>
              <h1>Good Morning, Admin!</h1>
            </div>

            <p>
              Manage your platform. Keep students and mentors moving forward.
            </p>
          </div>

          <div className={styles.dateBox}>
            <strong>Tuesday, 9 September 2025</strong>
            <span>Here is your platform overview for today.</span>
          </div>
        </section>

        {/* STATS */}
        <section className={styles.statsGrid}>
          <div
            className={styles.statCard}
            onClick={() => goTo("/admin/students")}
            style={{ cursor: "pointer" }}
          >
            <div className={`${styles.statIcon} ${styles.purple}`}>
              👨‍🎓
            </div>

            <div className={styles.statContent}>
              <span>Total Students</span>
              <strong>1,248</strong>
              <small>+12% from last month</small>
            </div>
          </div>

          <div
            className={styles.statCard}
            onClick={() => goTo("/admin/mentors")}
            style={{ cursor: "pointer" }}
          >
            <div className={`${styles.statIcon} ${styles.green}`}>
              👨‍🏫
            </div>

            <div className={styles.statContent}>
              <span>Total Mentors</span>
              <strong>86</strong>
              <small>+5 this month</small>
            </div>
          </div>

          <div
            className={styles.statCard}
            onClick={() => goTo("/admin/assignments")}
            style={{ cursor: "pointer" }}
          >
            <div className={`${styles.statIcon} ${styles.blue}`}>
              📚
            </div>

            <div className={styles.statContent}>
              <span>Active Projects</span>
              <strong>342</strong>
              <small>28 started this week</small>
            </div>
          </div>

          <div
            className={styles.statCard}
            onClick={() => goTo("/admin/analytics")}
            style={{ cursor: "pointer" }}
          >
            <div className={`${styles.statIcon} ${styles.orange}`}>
              ✅
            </div>

            <div className={styles.statContent}>
              <span>Completed Tasks</span>
              <strong>8,492</strong>
              <small>+18% from last month</small>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className={styles.contentGrid}>
          {/* PLATFORM ACTIVITY */}
          <div className={styles.largeCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Platform Activity</h2>
                <p>Weekly learning activity across MentorOS</p>
              </div>

              <button
                type="button"
                className={styles.dropdown}
                onClick={() => goTo("/admin/analytics")}
              >
                View Analytics →
              </button>
            </div>

            <div className={styles.activityChart}>
              <div className={styles.chartYAxis}>
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className={styles.chartArea}>
                <div className={styles.chartLines}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.bars}>
                  {[
                    ["52%", "Mon"],
                    ["68%", "Tue"],
                    ["45%", "Wed"],
                    ["76%", "Thu"],
                    ["63%", "Fri"],
                    ["88%", "Sat"],
                    ["58%", "Sun"],
                  ].map(([height, day]) => (
                    <div className={styles.barItem} key={day}>
                      <div
                        className={styles.bar}
                        style={{ height }}
                      />
                      <span>{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ADMIN OVERVIEW */}
          <div className={styles.sideCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Admin Overview</h2>
                <p>Current platform status</p>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => goTo("/admin/analytics")}
              >
                View All
              </button>
            </div>

            <div className={styles.overviewList}>
              <div
                className={styles.overviewItem}
                onClick={() => goTo("/admin/students")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.overviewIcon}>👨‍🎓</div>

                <div>
                  <strong>Students</strong>
                  <span>1,248 registered</span>
                </div>

                <b className={styles.success}>Active</b>
              </div>

              <div
                className={styles.overviewItem}
                onClick={() => goTo("/admin/mentors")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.overviewIcon}>👨‍🏫</div>

                <div>
                  <strong>Mentors</strong>
                  <span>86 available</span>
                </div>

                <b className={styles.success}>Active</b>
              </div>

              <div
                className={styles.overviewItem}
                onClick={() => goTo("/admin/assignments")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.overviewIcon}>📚</div>

                <div>
                  <strong>Projects</strong>
                  <span>342 in progress</span>
                </div>

                <b className={styles.info}>Running</b>
              </div>

              <div
                className={styles.overviewItem}
                onClick={() => goTo("/admin/ai-reports")}
                style={{ cursor: "pointer" }}
              >
                <div className={styles.overviewIcon}>📝</div>

                <div>
                  <strong>Pending Reviews</strong>
                  <span>24 submissions</span>
                </div>

                <b className={styles.warning}>Pending</b>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT STUDENTS */}
        <section className={styles.middleGrid}>
          <div className={styles.largeCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Recent Students</h2>
                <p>Latest students registered on MentorOS</p>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => goTo("/admin/students")}
              >
                View All
              </button>
            </div>

            <div className={styles.studentTable}>
              <div className={styles.tableHeader}>
                <span>Student</span>
                <span>Project</span>
                <span>Progress</span>
                <span>Status</span>
              </div>

              {[
                ["R", "Rahul Kumar", "AI Learning Platform", "82%", "Active"],
                ["P", "Priya Singh", "REST API Project", "68%", "Active"],
                ["A", "Aman Verma", "Database System", "42%", "Pending"],
                ["S", "Simran Patel", "Frontend Development", "91%", "Active"],
              ].map(([initial, name, project, progress, status]) => (
                <div className={styles.studentRow} key={name}>
                  <div className={styles.studentName}>
                    <div className={styles.userAvatar}>{initial}</div>

                    <div>
                      <strong>{name}</strong>
                      <span>{name.toLowerCase().replace(" ", ".")}@example.com</span>
                    </div>
                  </div>

                  <span>{project}</span>

                  <div className={styles.progressCell}>
                    <div className={styles.progressTrack}>
                      <div
                        className={styles.progressFill}
                        style={{ width: progress }}
                      />
                    </div>

                    <span>{progress}</span>
                  </div>

                  <b
                    className={
                      status === "Active"
                        ? styles.statusActive
                        : styles.statusPending
                    }
                  >
                    {status}
                  </b>
                </div>
              ))}
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className={styles.sideCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>Recent Activity</h2>
                <p>Latest platform updates</p>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => goTo("/admin/analytics")}
              >
                View All
              </button>
            </div>

            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>👨‍🎓</div>
                <div>
                  <strong>New student registered</strong>
                  <span>Rahul Kumar joined MentorOS</span>
                  <small>10 minutes ago</small>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>📚</div>
                <div>
                  <strong>New project created</strong>
                  <span>AI Learning Platform</span>
                  <small>1 hour ago</small>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>👨‍🏫</div>
                <div>
                  <strong>Mentor approved</strong>
                  <span>Dr. Ankit Sharma</span>
                  <small>3 hours ago</small>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.activityIcon}>✅</div>
                <div>
                  <strong>Project completed</strong>
                  <span>Frontend Development</span>
                  <small>5 hours ago</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS + QUICK ACTIONS */}
        <section className={styles.bottomGrid}>
          <div className={styles.insightCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>💡 Platform Insights</h2>
                <p>Important information for administrators</p>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => goTo("/admin/ai-reports")}
              >
                View Details
              </button>
            </div>

            <div className={styles.insightBox}>
              <span className={styles.insightEmoji}>💡</span>

              <div>
                <strong>Platform is performing well!</strong>

                <p>
                  Student activity has increased by 18% compared to last
                  month. Keep monitoring project completion and mentor
                  availability.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.quickCard}>
            <div className={styles.cardHeader}>
              <div>
                <h2>⚡ Quick Actions</h2>
                <p>Frequently used admin tools</p>
              </div>
            </div>

            <div className={styles.quickActions}>
              <button
                type="button"
                onClick={() => goTo("/admin/students")}
              >
                <span>👨‍🎓</span>
                <strong>Manage Students</strong>
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/mentors")}
              >
                <span>👨‍🏫</span>
                <strong>Manage Mentors</strong>
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/analytics")}
              >
                <span>📊</span>
                <strong>View Analytics</strong>
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/ai-reports")}
              >
                <span>🤖</span>
                <strong>AI Reports</strong>
              </button>
            </div>
          </div>
        </section>

        {/* STATUS */}
        <div className={styles.statusBar}>
          <div>
            <span className={styles.onlineDot}></span>
            <strong>MentorOS services are running</strong>
          </div>

          <span>System Connected</span>
        </div>

        {/* BANNER */}
        <section className={styles.banner}>
          <div className={styles.bannerIcon}>◆</div>

          <div>
            <h3>Build better learning experiences.</h3>
            <p>
              Keep your students, mentors and projects moving forward.
            </p>
          </div>

          <div className={styles.bannerBadge}>
            <strong>MentorOS Admin</strong>
            <span>Platform Management</span>
          </div>
        </section>
      </main>
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
};

const activeNavStyle: React.CSSProperties = {
  ...navStyle,
  color: "#fff",
  background: "#2563eb",
};

const navButtonStyle: React.CSSProperties = {
  width: "100%",
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