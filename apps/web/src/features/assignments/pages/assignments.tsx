"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./Assignments.module.css";

type AssignmentStatus = "Pending" | "In Progress" | "Completed";

type Assignment = {
  title: string;
  description: string;
  subject: string;
  level: string;
  due: string;
  days: string;
  points: string;
  status: AssignmentStatus;
  icon: string;
  progress: number;
};

const assignments: Assignment[] = [
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
  {
    label: "Total",
    value: "5",
    className: "total",
  },
  {
    label: "Pending",
    value: "2",
    className: "pendingStat",
  },
  {
    label: "In Progress",
    value: "1",
    className: "progressStat",
  },
  {
    label: "Completed",
    value: "2",
    className: "completedStat",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Assignments() {
  const [activeTab, setActiveTab] = useState<
    "All" | AssignmentStatus
  >("All");

  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] =
    useState("All Subjects");

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [sortBy, setSortBy] =
    useState("Sort by Due Date");

  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);

  const filteredAssignments = useMemo(() => {
    let result = [...assignments];

    /* TAB FILTER */
    if (activeTab !== "All") {
      result = result.filter(
        (assignment) =>
          assignment.status === activeTab
      );
    }

    /* SEARCH */
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      result = result.filter((assignment) =>
        `${assignment.title} ${assignment.description} ${assignment.subject} ${assignment.level}`
          .toLowerCase()
          .includes(search)
      );
    }

    /* SUBJECT FILTER */
    if (subjectFilter !== "All Subjects") {
      result = result.filter(
        (assignment) =>
          assignment.subject === subjectFilter
      );
    }

    /* STATUS FILTER */
    if (statusFilter !== "All Status") {
      result = result.filter(
        (assignment) =>
          assignment.status === statusFilter
      );
    }

    /* SORT */
    if (sortBy === "Newest First") {
      result.reverse();
    }

    if (sortBy === "Oldest First") {
      result.reverse();
    }

    return result;
  }, [
    activeTab,
    searchTerm,
    subjectFilter,
    statusFilter,
    sortBy,
  ]);

  return (
    <div
      className={styles.shell}
      style={{
        fontFamily:
          'Inter, "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* ================= SIDEBAR ================= */}

      <aside
        className={styles.sidebar}
        style={{
          position: "relative",
          zIndex: 9999,
          pointerEvents: "auto",
        }}
      >
        {/* LOGO */}

        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            🎓
          </div>

          <div>
            <strong>MentorOS</strong>
            <span>Learn · Build · Grow</span>
          </div>
        </div>

        {/* NAVIGATION */}

        <nav
          className={styles.nav}
          style={{
            position: "relative",
            zIndex: 10000,
            pointerEvents: "auto",
          }}
        >
          <a
            href="/student"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student");
            }}
          >
            ⌂ <span>Dashboard</span>
          </a>

          <a
            href="/student/assignments"
            className={styles.activeNav}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/assignments");
            }}
          >
            ▣ <span>My Assignments</span>
            <b>5</b>
          </a>

          <a
            href="/student/submissions"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/submissions");
            }}
          >
            ◫ <span>My Submissions</span>
          </a>

          <a
            href="/student/progress"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/progress");
            }}
          >
            ◔ <span>Progress</span>
          </a>

          <a
            href="/student/ai-feedback"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/ai-feedback");
            }}
          >
            ✦ <span>AI Feedback</span>
          </a>

          <a
            href="/student/learning-resources"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/learning-resources");
            }}
          >
            ▤ <span>Learning Resources</span>
          </a>

          <a
            href="/student/notifications"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/notifications");
            }}
          >
            ♢ <span>Notifications</span>
            <b className={styles.notificationBadge}>
              3
            </b>
          </a>
        </nav>

        {/* SIDEBAR BOTTOM */}

        <div
          className={styles.sidebarBottom}
          style={{
            position: "relative",
            zIndex: 10000,
            pointerEvents: "auto",
          }}
        >
          <a
            href="/student/profile"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/profile");
            }}
          >
            ◉ <span>Profile</span>
          </a>

          <a
            href="/student/settings"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/settings");
            }}
          >
            ⚙ <span>Settings</span>
          </a>

          <div className={styles.keepLearning}>
            <div>🚀</div>

            <strong>Keep Learning!</strong>

            <p>
              “Consistency today creates tomorrow.”
            </p>
          </div>
        </div>
      </aside>

      {/* ================= MAIN PAGE ================= */}

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
            <button
              type="button"
              className={styles.iconButton}
              onClick={() =>
                goTo("/student/notifications")
              }
            >
              🔔
            </button>

            <div className={styles.profile}>
              <div className={styles.avatar}>
                SK
              </div>

              <div>
                <strong>Student</strong>
                <span>Student</span>
              </div>

              <span className={styles.chevron}>
                ⌄
              </span>
            </div>
          </div>
        </header>

        {/* ================= PAGE HEADER ================= */}

        <section className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.pageIcon}>
              ▤
            </div>

            <div>
              <p className={styles.eyebrow}>
                STUDENT WORKSPACE
              </p>

              <h1>My Assignments</h1>

              <p className={styles.subtitle}>
                View, complete, and submit your
                assignments. Keep track of your
                learning journey.
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={() =>
              goTo(
                "/student/learning-resources"
              )
            }
          >
            + View Learning Resources
          </button>
        </section>

        {/* ================= TABS ================= */}

        <div className={styles.tabs}>
          <button
            type="button"
            className={
              activeTab === "All"
                ? styles.activeTab
                : ""
            }
            onClick={() => setActiveTab("All")}
          >
            All Assignments <b>5</b>
          </button>

          <button
            type="button"
            className={
              activeTab === "Pending"
                ? styles.activeTab
                : ""
            }
            onClick={() =>
              setActiveTab("Pending")
            }
          >
            Pending <b>2</b>
          </button>

          <button
            type="button"
            className={
              activeTab === "In Progress"
                ? styles.activeTab
                : ""
            }
            onClick={() =>
              setActiveTab("In Progress")
            }
          >
            In Progress <b>1</b>
          </button>

          <button
            type="button"
            className={
              activeTab === "Completed"
                ? styles.activeTab
                : ""
            }
            onClick={() =>
              setActiveTab("Completed")
            }
          >
            Completed <b>2</b>
          </button>
        </div>

        {/* ================= CONTENT GRID ================= */}

        <div className={styles.contentGrid}>
          {/* ================= ASSIGNMENTS ================= */}

          <section className={styles.card}>
            <div className={styles.cardHeader}>
              <div>
                <p
                  className={
                    styles.sectionLabel
                  }
                >
                  YOUR LEARNING
                </p>

                <h2>Assignments</h2>
              </div>

              <span
                className={styles.resultCount}
              >
                {filteredAssignments.length}{" "}
                assignments
              </span>
            </div>

            {/* FILTERS */}

            <div className={styles.filters}>
              <div className={styles.searchBox}>
                <span>⌕</span>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  placeholder="Search assignments..."
                />
              </div>

              <select
                value={subjectFilter}
                onChange={(e) =>
                  setSubjectFilter(
                    e.target.value
                  )
                }
              >
                <option>
                  All Subjects
                </option>

                <option>
                  Frontend Development
                </option>

                <option>
                  Backend Development
                </option>

                <option>
                  Database
                </option>

                <option>
                  Full Stack
                </option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value
                  )
                }
              >
                <option>All Status</option>

                <option>Pending</option>

                <option>In Progress</option>

                <option>Completed</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option>
                  Sort by Due Date
                </option>

                <option>
                  Newest First
                </option>

                <option>
                  Oldest First
                </option>
              </select>
            </div>

            {/* ASSIGNMENT LIST */}

            <div
              className={
                styles.assignmentList
              }
            >
              {filteredAssignments.length ===
              0 ? (
                <div
                  style={
                    emptyStateStyle
                  }
                >
                  <div
                    style={
                      emptyIconStyle
                    }
                  >
                    🔎
                  </div>

                  <h3>
                    No assignments found
                  </h3>

                  <p>
                    Try changing your search
                    or filters.
                  </p>
                </div>
              ) : (
                filteredAssignments.map(
                  (assignment) => (
                    <article
                      className={
                        styles.assignment
                      }
                      key={assignment.title}
                    >
                      {/* ICON */}

                      <div
                        className={
                          styles.assignmentIcon
                        }
                      >
                        {assignment.icon}
                      </div>

                      <div
                        className={
                          styles.assignmentBody
                        }
                      >
                        {/* TOP */}

                        <div
                          className={
                            styles.assignmentTop
                          }
                        >
                          <div>
                            <h3>
                              {assignment.title}
                            </h3>

                            <p>
                              {
                                assignment.description
                              }
                            </p>
                          </div>

                          <span
                            className={`${styles.status} ${
                              assignment.status ===
                              "Pending"
                                ? styles.pending
                                : assignment.status ===
                                  "In Progress"
                                ? styles.inProgress
                                : styles.completed
                            }`}
                          >
                            {assignment.status}
                          </span>
                        </div>

                        {/* META */}

                        <div
                          className={
                            styles.meta
                          }
                        >
                          <span>
                            {assignment.subject}
                          </span>

                          <span>
                            {assignment.level}
                          </span>
                        </div>

                        {/* BOTTOM */}

                        <div
                          className={
                            styles.bottomRow
                          }
                        >
                          <div
                            className={
                              styles.assignmentInfo
                            }
                          >
                            <span>
                              ▣{" "}
                              {assignment.due}
                            </span>

                            <span
                              className={
                                assignment.status ===
                                "Completed"
                                  ? styles.completedDate
                                  : styles.dueDate
                              }
                            >
                              {assignment.days}
                            </span>

                            <span>
                              ◈{" "}
                              {assignment.points}
                            </span>
                          </div>

                          {/* PROGRESS */}

                          <div
                            className={
                              styles.progressArea
                            }
                          >
                            <span>
                              {
                                assignment.progress
                              }
                              %
                            </span>

                            <div
                              className={
                                styles.progressTrack
                              }
                            >
                              <div
                                className={
                                  styles.progressFill
                                }
                                style={{
                                  width: `${assignment.progress}%`,
                                }}
                              />
                            </div>
                          </div>

                          {/* VIEW DETAILS */}

                          <button
                            type="button"
                            className={
                              styles.viewButton
                            }
                            onClick={() =>
                              setSelectedAssignment(
                                assignment
                              )
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </article>
                  )
                )
              )}
            </div>
          </section>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside
            className={
              styles.sidebarContent
            }
          >
            {/* CALENDAR */}

            <section
              className={styles.sideCard}
            >
              <div
                className={
                  styles.sideHeader
                }
              >
                <div>
                  <h3>
                    Assignment Calendar
                  </h3>

                  <span>
                    September 2026
                  </span>
                </div>

                <div
                  className={
                    styles.calendarArrows
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Previous month"
                      )
                    }
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        "Next month"
                      )
                    }
                  >
                    ›
                  </button>
                </div>
              </div>

              <div
                className={
                  styles.calendarHeader
                }
              >
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              <div
                className={
                  styles.calendar
                }
              >
                {Array.from(
                  { length: 30 },
                  (_, i) => (
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
                  )
                )}
              </div>

              <div
                className={
                  styles.calendarLegend
                }
              >
                <span>
                  <i
                    className={
                      styles.redDot
                    }
                  />
                  Due Today
                </span>

                <span>
                  <i
                    className={
                      styles.blueDot
                    }
                  />
                  Upcoming
                </span>

                <span>
                  <i
                    className={
                      styles.greenDot
                    }
                  />
                  Completed
                </span>
              </div>
            </section>

            {/* STATS */}

            <section
              className={styles.sideCard}
            >
              <div
                className={
                  styles.sideTitle
                }
              >
                <span>▥</span>

                <h3>
                  Assignment Stats
                </h3>
              </div>

              <div
                className={
                  styles.miniStats
                }
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={
                      styles[
                        stat.className as keyof typeof styles
                      ]
                    }
                  >
                    <strong>
                      {stat.value}
                    </strong>

                    <span>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* HELP */}

            <section
              className={styles.helpCard}
            >
              <div
                className={
                  styles.helpIcon
                }
              >
                ?
              </div>

              <h3>Need Help?</h3>

              <p>
                Stuck on an assignment? Reach
                out to your mentor or check our
                learning resources.
              </p>

              <button
                type="button"
                onClick={() =>
                  goTo(
                    "/student/learning-resources"
                  )
                }
              >
                ▤ &nbsp; View Resources
              </button>
            </section>

            {/* MOTIVATION */}

            <section
              className={styles.quoteCard}
            >
              <div
                className={
                  styles.quoteContent
                }
              >
                <span>✦</span>

                <p>
                  Small steps
                  <br />
                  every day lead to
                  <br />
                  big results.
                </p>

                <strong>
                  ⚑ Keep going!
                </strong>
              </div>

              <div
                className={
                  styles.mountain
                }
              >
                ⌁
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* ================= DETAIL MODAL ================= */}

      {selectedAssignment && (
        <div
          style={modalOverlayStyle}
          onClick={() =>
            setSelectedAssignment(null)
          }
        >
          <div
            style={modalStyle}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <button
              type="button"
              onClick={() =>
                setSelectedAssignment(null)
              }
              style={closeButtonStyle}
            >
              ×
            </button>

            <div
              style={modalIconStyle}
            >
              {selectedAssignment.icon}
            </div>

            <p
              style={modalEyebrowStyle}
            >
              ASSIGNMENT DETAILS
            </p>

            <h2
              style={modalTitleStyle}
            >
              {selectedAssignment.title}
            </h2>

            <p
              style={modalDescriptionStyle}
            >
              {selectedAssignment.description}
            </p>

            <div
              style={modalMetaGridStyle}
            >
              <div>
                <small>Subject</small>
                <strong>
                  {selectedAssignment.subject}
                </strong>
              </div>

              <div>
                <small>Level</small>
                <strong>
                  {selectedAssignment.level}
                </strong>
              </div>

              <div>
                <small>Due Date</small>
                <strong>
                  {selectedAssignment.due}
                </strong>
              </div>

              <div>
                <small>Points</small>
                <strong>
                  {selectedAssignment.points}
                </strong>
              </div>
            </div>

            <div
              style={modalProgressStyle}
            >
              <div>
                <span>Progress</span>

                <strong>
                  {selectedAssignment.progress}%
                </strong>
              </div>

              <div
                style={
                  modalProgressTrackStyle
                }
              >
                <div
                  style={{
                    ...modalProgressFillStyle,
                    width: `${selectedAssignment.progress}%`,
                  }}
                />
              </div>
            </div>

            <div
              style={modalActionsStyle}
            >
              <button
                type="button"
                style={
                  modalSecondaryButtonStyle
                }
                onClick={() =>
                  setSelectedAssignment(null)
                }
              >
                Close
              </button>

              <button
                type="button"
                style={
                  modalPrimaryButtonStyle
                }
                onClick={() =>
                  goTo(
                    "/student/submissions"
                  )
                }
              >
                Go to Submissions →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================
   INLINE MODAL STYLES
========================= */

const modalOverlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  zIndex: 50000,
  background: "rgba(15, 23, 42, 0.62)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
};

const modalStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  maxWidth: "620px",
  background: "#ffffff",
  borderRadius: "22px",
  padding: "34px",
  boxShadow:
    "0 30px 80px rgba(15, 23, 42, 0.30)",
  color: "#0f172a",
  fontFamily:
    'Inter, "Segoe UI", ui-sans-serif, system-ui, sans-serif',
};

const closeButtonStyle: CSSProperties = {
  position: "absolute",
  top: "16px",
  right: "18px",
  width: "36px",
  height: "36px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  background: "#f8fafc",
  color: "#475569",
  fontSize: "24px",
  cursor: "pointer",
};

const modalIconStyle: CSSProperties = {
  width: "58px",
  height: "58px",
  borderRadius: "16px",
  background: "#eff6ff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "26px",
  marginBottom: "18px",
};

const modalEyebrowStyle: CSSProperties = {
  margin: 0,
  color: "#2563eb",
  fontSize: "10px",
  fontWeight: 800,
  letterSpacing: "2px",
};

const modalTitleStyle: CSSProperties = {
  margin: "8px 0 10px",
  fontSize: "26px",
  lineHeight: 1.25,
};

const modalDescriptionStyle: CSSProperties = {
  margin: "0 0 24px",
  color: "#64748b",
  fontSize: "14px",
  lineHeight: 1.7,
};

const modalMetaGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "repeat(2, minmax(0, 1fr))",
  gap: "12px",
  marginBottom: "24px",
};

const modalProgressStyle: CSSProperties = {
  padding: "16px",
  borderRadius: "14px",
  background: "#f8fafc",
  marginBottom: "24px",
};

const modalProgressTrackStyle: CSSProperties = {
  height: "8px",
  borderRadius: "999px",
  background: "#e2e8f0",
  overflow: "hidden",
  marginTop: "10px",
};

const modalProgressFillStyle: CSSProperties = {
  height: "100%",
  borderRadius: "999px",
  background: "#2563eb",
};

const modalActionsStyle: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: "10px",
};

const modalSecondaryButtonStyle: CSSProperties = {
  padding: "11px 18px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: "#475569",
  fontWeight: 700,
  cursor: "pointer",
};

const modalPrimaryButtonStyle: CSSProperties = {
  padding: "11px 18px",
  borderRadius: "10px",
  border: "none",
  background: "#2563eb",
  color: "#ffffff",
  fontWeight: 700,
  cursor: "pointer",
};

const emptyStateStyle: CSSProperties = {
  textAlign: "center",
  padding: "70px 20px",
  color: "#64748b",
};

const emptyIconStyle: CSSProperties = {
  fontSize: "36px",
  marginBottom: "12px",
};