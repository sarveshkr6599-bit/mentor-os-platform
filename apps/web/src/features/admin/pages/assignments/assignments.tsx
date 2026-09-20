"use client";

import { useMemo, useState } from "react";
import styles from "./Assignments.module.css";

type Assignment = {
  id: number;
  title: string;
  course: string;
  mentor: string;
  submissions: number;
  totalStudents: number;
  dueDate: string;
  status: "Active" | "Completed" | "Draft";
  priority: "High" | "Medium" | "Low";
};

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Build REST API",
    course: "B.Tech Computer Science",
    mentor: "Dr. Ankit Sharma",
    submissions: 18,
    totalStudents: 24,
    dueDate: "Today",
    status: "Active",
    priority: "High",
  },
  {
    id: 2,
    title: "Database Design",
    course: "B.Tech Computer Science",
    mentor: "Neha Verma",
    submissions: 14,
    totalStudents: 19,
    dueDate: "Tomorrow",
    status: "Active",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Cloud Deployment",
    course: "BCA",
    mentor: "Dr. Rajesh Kumar",
    submissions: 12,
    totalStudents: 17,
    dueDate: "2 days ago",
    status: "Completed",
    priority: "Low",
  },
  {
    id: 4,
    title: "UI/UX Case Study",
    course: "B.Tech IT",
    mentor: "Priya Sharma",
    submissions: 8,
    totalStudents: 12,
    dueDate: "3 days",
    status: "Active",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Data Analysis Project",
    course: "BCA",
    mentor: "Vivek Singh",
    submissions: 16,
    totalStudents: 21,
    dueDate: "5 days",
    status: "Active",
    priority: "High",
  },
  {
    id: 6,
    title: "Mobile App Prototype",
    course: "B.Tech Computer Science",
    mentor: "Ritu Mehta",
    submissions: 7,
    totalStudents: 9,
    dueDate: "1 week",
    status: "Draft",
    priority: "Low",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Assignments() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selected, setSelected] = useState<Assignment | null>(null);

  const filteredAssignments = useMemo(() => {
    return assignments.filter((assignment) => {
      const value = search.toLowerCase();

      const matchesSearch =
        assignment.title.toLowerCase().includes(value) ||
        assignment.course.toLowerCase().includes(value) ||
        assignment.mentor.toLowerCase().includes(value);

      const matchesStatus =
        statusFilter === "All Status" ||
        assignment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const activeCount = assignments.filter(
    (item) => item.status === "Active"
  ).length;

  const completedCount = assignments.filter(
    (item) => item.status === "Completed"
  ).length;

  const totalSubmissions = assignments.reduce(
    (total, item) => total + item.submissions,
    0
  );

  const totalStudents = assignments.reduce(
    (total, item) => total + item.totalStudents,
    0
  );

  const submissionRate = Math.round(
    (totalSubmissions / totalStudents) * 100
  );

  const navStyle: React.CSSProperties = {
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
    gap: "8px",
    textAlign: "left",
    boxSizing: "border-box",
  };

  const activeNavStyle: React.CSSProperties = {
    ...navStyle,
    color: "#ffffff",
    background: "#2563eb",
  };

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
          color: "#ffffff",
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
          {/* Logo */}

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

          {/* Navigation */}

          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            <button
              type="button"
              onClick={() => goTo("/admin")}
              style={navStyle}
            >
              🏠
              <span>Dashboard</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/students")}
              style={navStyle}
            >
              🎓
              <span>Students</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/mentors")}
              style={navStyle}
            >
              👨‍🏫
              <span>Mentors</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/assignments")}
              style={activeNavStyle}
            >
              📋
              <span>Assignments</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/analytics")}
              style={navStyle}
            >
              📊
              <span>Analytics</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/ai-reports")}
              style={navStyle}
            >
              ✦
              <span>AI Reports</span>
            </button>
          </nav>
        </div>

        {/* Bottom Sidebar */}

        <div>
          <button
            type="button"
            onClick={() => goTo("/admin/analytics")}
            style={{
              ...navStyle,
              marginBottom: "15px",
            }}
          >
            ⚡
            <span>Platform Analytics</span>
          </button>

          <div
            style={{
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

      {/* ================= MAIN CONTENT ================= */}

      <main
        className={styles.page}
        style={{
          flex: 1,
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Header */}

        <header className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              MENTOROS • ADMIN WORKSPACE
            </div>

            <h1>Assignments</h1>

            <p>
              Create, monitor, and manage assignments across the
              platform.
            </p>
          </div>

          <div className={styles.headerProfile}>
            <button
              type="button"
              className={styles.notificationButton}
              onClick={() => goTo("/admin/ai-reports")}
            >
              🔔
            </button>

            <div className={styles.avatar}>A</div>

            <div>
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>
          </div>
        </header>

        {/* ================= STATS ================= */}

        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.blue}`}>
              📝
            </div>

            <div>
              <span>Total Assignments</span>
              <strong>{assignments.length}</strong>
            </div>

            <small className={styles.greenText}>
              All assignments
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.green}`}>
              ✓
            </div>

            <div>
              <span>Active</span>
              <strong>{activeCount}</strong>
            </div>

            <small className={styles.greenText}>
              Currently running
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.purple}`}>
              ★
            </div>

            <div>
              <span>Completed</span>
              <strong>{completedCount}</strong>
            </div>

            <small className={styles.greenText}>
              Finished
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.orange}`}>
              ◷
            </div>

            <div>
              <span>Submission Rate</span>
              <strong>{submissionRate}%</strong>
            </div>

            <small className={styles.greenText}>
              Overall rate
            </small>
          </div>
        </section>

        {/* ================= ASSIGNMENT MANAGEMENT ================= */}

        <section className={styles.contentCard}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>
                ASSIGNMENT MANAGEMENT
              </div>

              <h2>All Assignments</h2>

              <p>
                View and manage assignments created across MentorOS.
              </p>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => {
                alert(
                  "Create Assignment feature will be connected to backend."
                );
              }}
            >
              + Create Assignment
            </button>
          </div>

          {/* Filters */}

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search assignment, course or mentor..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Completed</option>
              <option>Draft</option>
            </select>

            <button
              type="button"
              className={styles.clearButton}
              onClick={() => {
                setSearch("");
                setStatusFilter("All Status");
              }}
            >
              Clear
            </button>
          </div>

          {/* Table */}

          <div className={styles.tableWrapper}>
            <table>
              <thead>
                <tr>
                  <th>ASSIGNMENT</th>
                  <th>COURSE</th>
                  <th>MENTOR</th>
                  <th>SUBMISSIONS</th>
                  <th>DUE DATE</th>
                  <th>PRIORITY</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredAssignments.map((assignment) => {
                  const percentage = Math.round(
                    (assignment.submissions /
                      assignment.totalStudents) *
                      100
                  );

                  return (
                    <tr key={assignment.id}>
                      <td>
                        <div className={styles.assignmentCell}>
                          <div className={styles.assignmentIcon}>
                            📝
                          </div>

                          <div>
                            <strong>{assignment.title}</strong>
                            <span>
                              {assignment.totalStudents} students
                            </span>
                          </div>
                        </div>
                      </td>

                      <td>{assignment.course}</td>

                      <td>{assignment.mentor}</td>

                      <td>
                        <div className={styles.submissionCell}>
                          <div className={styles.progressTrack}>
                            <div
                              className={styles.progressFill}
                              style={{
                                width: `${percentage}%`,
                              }}
                            />
                          </div>

                          <span>
                            {assignment.submissions}/
                            {assignment.totalStudents}
                          </span>
                        </div>
                      </td>

                      <td>{assignment.dueDate}</td>

                      <td>
                        <span
                          className={`${styles.badge} ${
                            assignment.priority === "High"
                              ? styles.high
                              : assignment.priority === "Medium"
                              ? styles.medium
                              : styles.low
                          }`}
                        >
                          {assignment.priority}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`${styles.badge} ${
                            assignment.status === "Active"
                              ? styles.active
                              : assignment.status === "Completed"
                              ? styles.completed
                              : styles.draft
                          }`}
                        >
                          {assignment.status}
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className={styles.actionButton}
                          onClick={() =>
                            setSelected(assignment)
                          }
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}

                {filteredAssignments.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className={styles.emptyState}
                    >
                      No assignments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}

          <div className={styles.tableFooter}>
            <span>
              Showing {filteredAssignments.length} of{" "}
              {assignments.length} assignments
            </span>

            <div className={styles.pagination}>
              <button type="button">‹</button>

              <button
                type="button"
                className={styles.activePage}
              >
                1
              </button>

              <button type="button">2</button>

              <button type="button">3</button>

              <button type="button">›</button>
            </div>
          </div>
        </section>

        {/* ================= BOTTOM ================= */}

        <section className={styles.bottomGrid}>
          <div className={styles.insightCard}>
            <div className={styles.insightIcon}>✓</div>

            <div>
              <div className={styles.sectionLabel}>
                ADMIN INSIGHT
              </div>

              <h3>
                Keep assignment deadlines and submissions visible.
              </h3>

              <p>
                Tracking active assignments helps mentors identify
                delayed submissions and students who need support.
              </p>
            </div>
          </div>

          <div className={styles.quickCard}>
            <div className={styles.sectionLabel}>
              QUICK ACTIONS
            </div>

            <h3>Need to act?</h3>

            <div className={styles.quickButtons}>
              <button
                type="button"
                onClick={() => {
                  alert(
                    "Create Assignment feature will be connected to backend."
                  );
                }}
              >
                Create Assignment
              </button>

              <button
                type="button"
                onClick={() => goTo("/mentor/submissions")}
              >
                View Submissions
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/analytics")}
              >
                View Analytics
              </button>
            </div>
          </div>
        </section>

        {/* ================= MODAL ================= */}

        {selected && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelected(null)}
          >
            <div
              className={styles.modal}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className={styles.modalHeader}>
                <div>
                  <div className={styles.sectionLabel}>
                    ASSIGNMENT DETAILS
                  </div>

                  <h2>{selected.title}</h2>
                </div>

                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
              </div>

              <div className={styles.modalGrid}>
                <div>
                  <span>Course</span>
                  <strong>{selected.course}</strong>
                </div>

                <div>
                  <span>Mentor</span>
                  <strong>{selected.mentor}</strong>
                </div>

                <div>
                  <span>Submissions</span>
                  <strong>
                    {selected.submissions}/
                    {selected.totalStudents}
                  </strong>
                </div>

                <div>
                  <span>Due Date</span>
                  <strong>{selected.dueDate}</strong>
                </div>

                <div>
                  <span>Priority</span>
                  <strong>{selected.priority}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{selected.status}</strong>
                </div>
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => {
                    alert(
                      `Manage Assignment: ${selected.title}`
                    );
                  }}
                >
                  Manage Assignment
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}