"use client";

import styles from "./Assignments.module.css";

const assignments = [
  {
    title: "Build a Responsive Navbar",
    description:
      "Create a responsive navigation bar using HTML, CSS and JavaScript.",
    subject: "Frontend Development",
    level: "Intermediate",
    due: "12 Sep 2026",
    days: "3 days left",
    points: "100 points",
    status: "Pending",
    icon: "▣",
    progress: 20,
  },
  {
    title: "Create REST APIs",
    description:
      "Build REST APIs using Node.js and Express.js with proper routing.",
    subject: "Backend Development",
    level: "Intermediate",
    due: "15 Sep 2026",
    days: "6 days left",
    points: "100 points",
    status: "Pending",
    icon: "⚙",
    progress: 35,
  },
  {
    title: "Design Database Schema",
    description:
      "Design a database schema for the MentorOS project.",
    subject: "Database",
    level: "Beginner",
    due: "18 Sep 2026",
    days: "9 days left",
    points: "100 points",
    status: "In Progress",
    icon: "▤",
    progress: 65,
  },
  {
    title: "UI/UX Design Implementation",
    description:
      "Convert the approved design into a working UI using Next.js and CSS.",
    subject: "Frontend Development",
    level: "Advanced",
    due: "05 Sep 2026",
    days: "Completed on 04 Sep 2026",
    points: "100 points",
    status: "Completed",
    icon: "✎",
    progress: 100,
  },
  {
    title: "API Integration",
    description:
      "Integrate frontend screens with backend APIs.",
    subject: "Full Stack",
    level: "Intermediate",
    due: "01 Sep 2026",
    days: "Completed on 31 Aug 2026",
    points: "100 points",
    status: "Completed",
    icon: "</>",
    progress: 100,
  },
];

const stats = [
  { label: "Total", value: "5", className: "total" },
  { label: "Pending", value: "2", className: "pendingStat" },
  { label: "In Progress", value: "1", className: "progressStat" },
  { label: "Completed", value: "2", className: "completedStat" },
];

export default function Assignments() {
  return (
    <div className={styles.shell}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <span>Learn · Build · Grow</span>
          </div>
        </div>

        {/* STUDENT NAVIGATION */}
        <nav className={styles.nav}>
          <a href="/student">
            ⌂ <span>Dashboard</span>
          </a>

          <a href="/student/assignments" className={styles.activeNav}>
            ▣ <span>My Assignments</span>
            <b>5</b>
          </a>

          <a href="/student/submissions">
            ◫ <span>My Submissions</span>
          </a>

          <a href="/student/progress">
            ◔ <span>Progress</span>
          </a>

          <a href="/student/ai-feedback">
            ✦ <span>AI Feedback</span>
          </a>

          <a href="/student/learning-resources">
            ▤ <span>Learning Resources</span>
          </a>

          <a href="/student/notifications">
            ♢ <span>Notifications</span>
            <b className={styles.notificationBadge}>3</b>
          </a>
        </nav>

        <div className={styles.sidebarBottom}>
          <a href="/student/profile">
            ◉ <span>Profile</span>
          </a>

          <a href="/student/settings">
            ⚙ <span>Settings</span>
          </a>

          <div className={styles.keepLearning}>
            <div>🚀</div>

            <strong>Keep Learning!</strong>

            <p>
              “Consistency today
              creates tomorrow.”
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN WORKSPACE */}
      <main className={styles.page}>
        {/* TOP BAR */}
        <header className={styles.topBar}>
          <div className={styles.search}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.topActions}>
            <button className={styles.iconButton}>🔔</button>

            <div className={styles.profile}>
              <div className={styles.avatar}>SK</div>

              <div>
                <strong>Student</strong>
                <span>Student</span>
              </div>

              <span className={styles.chevron}>⌄</span>
            </div>
          </div>
        </header>

        {/* PAGE HEADER */}
        <section className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.pageIcon}>▤</div>

            <div>
              <p className={styles.eyebrow}>STUDENT WORKSPACE</p>

              <h1>My Assignments</h1>

              <p className={styles.subtitle}>
                View, complete, and submit your assignments. Keep track of your
                learning journey.
              </p>
            </div>
          </div>

          <button
            className={styles.primaryButton}
            onClick={() => {
              window.location.href = "/student/learning-resources";
            }}
          >
            + View Learning Resources
          </button>
        </section>

        {/* TABS */}
        <div className={styles.tabs}>
          <button className={styles.activeTab}>
            All Assignments <b>5</b>
          </button>

          <button>
            Pending <b>2</b>
          </button>

          <button>
            In Progress <b>1</b>
          </button>

          <button>
            Completed <b>2</b>
          </button>
        </div>

        {/* CONTENT */}
        <div className={styles.contentGrid}>
          {/* ASSIGNMENTS */}
          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.sectionLabel}>YOUR LEARNING</p>
                <h2>Assignments</h2>
              </div>

              <span className={styles.resultCount}>5 assignments</span>
            </div>

            <div className={styles.filters}>
              <div className={styles.searchBox}>
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search assignments..."
                />
              </div>

              <select defaultValue="All Subjects">
                <option>All Subjects</option>
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Database</option>
                <option>Full Stack</option>
              </select>

              <select defaultValue="All Status">
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              <select defaultValue="Sort by Due Date">
                <option>Sort by Due Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
              </select>
            </div>

            <div className={styles.assignmentList}>
              {assignments.map((assignment) => (
                <article
                  className={styles.assignment}
                  key={assignment.title}
                >
                  <div className={styles.assignmentIcon}>
                    {assignment.icon}
                  </div>

                  <div className={styles.assignmentBody}>
                    <div className={styles.assignmentTop}>
                      <div>
                        <h3>{assignment.title}</h3>

                        <p>{assignment.description}</p>
                      </div>

                      <span
                        className={`${styles.status} ${
                          assignment.status === "Pending"
                            ? styles.pending
                            : assignment.status === "In Progress"
                            ? styles.inProgress
                            : styles.completed
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <div className={styles.meta}>
                      <span>{assignment.subject}</span>
                      <span>{assignment.level}</span>
                    </div>

                    <div className={styles.bottomRow}>
                      <div className={styles.assignmentInfo}>
                        <span>▣ {assignment.due}</span>

                        <span
                          className={
                            assignment.status === "Completed"
                              ? styles.completedDate
                              : styles.dueDate
                          }
                        >
                          {assignment.days}
                        </span>

                        <span>◈ {assignment.points}</span>
                      </div>

                      <div className={styles.progressArea}>
                        <span>{assignment.progress}%</span>

                        <div className={styles.progressTrack}>
                          <div
                            className={styles.progressFill}
                            style={{
                              width: `${assignment.progress}%`,
                            }}
                          />
                        </div>
                      </div>

                      <button className={styles.viewButton}>
                        View Details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.sidebarContent}>
            {/* CALENDAR */}
            <section className={styles.sideCard}>
              <div className={styles.sideHeader}>
                <div>
                  <h3>Assignment Calendar</h3>
                  <span>September 2026</span>
                </div>

                <div className={styles.calendarArrows}>
                  <button>‹</button>
                  <button>›</button>
                </div>
              </div>

              <div className={styles.calendarHeader}>
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              <div className={styles.calendar}>
                {Array.from({ length: 30 }, (_, i) => (
                  <span
                    key={i}
                    className={
                      i + 1 === 12
                        ? styles.today
                        : i + 1 === 15
                        ? styles.upcoming
                        : i + 1 === 18
                        ? styles.completedDay
                        : i + 1 === 5
                        ? styles.deadline
                        : ""
                    }
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              <div className={styles.calendarLegend}>
                <span>
                  <i className={styles.redDot} />
                  Due Today
                </span>

                <span>
                  <i className={styles.blueDot} />
                  Upcoming
                </span>

                <span>
                  <i className={styles.greenDot} />
                  Completed
                </span>
              </div>
            </section>

            {/* STATS */}
            <section className={styles.sideCard}>
              <div className={styles.sideTitle}>
                <span>▥</span>
                <h3>Assignment Stats</h3>
              </div>

              <div className={styles.miniStats}>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={styles[stat.className]}
                  >
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* HELP */}
            <section className={styles.helpCard}>
              <div className={styles.helpIcon}>?</div>

              <h3>Need Help?</h3>

              <p>
                Stuck on an assignment? Reach out to your mentor or check our
                learning resources.
              </p>

              <button
                onClick={() => {
                  window.location.href = "/student/learning-resources";
                }}
              >
                ▤ &nbsp; View Resources
              </button>
            </section>

            {/* MOTIVATION */}
            <section className={styles.quoteCard}>
              <div className={styles.quoteContent}>
                <span>✦</span>

                <p>
                  Small steps
                  <br />
                  every day lead to
                  <br />
                  big results.
                </p>

                <strong>⚑ Keep going!</strong>
              </div>

              <div className={styles.mountain}>⌁</div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}