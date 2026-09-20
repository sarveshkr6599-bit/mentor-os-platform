"use client";

import { useMemo, useState } from "react";
import styles from "./Students.module.css";

type Student = {
  id: number;
  initials: string;
  name: string;
  email: string;
  course: string;
  mentor: string;
  progress: number;
  projects: number;
  status: "Active" | "Pending" | "Inactive";
  joined: string;
};

const students: Student[] = [
  {
    id: 1,
    initials: "RK",
    name: "Rahul Kumar",
    email: "rahul@example.com",
    course: "B.Tech Computer Science",
    mentor: "Dr. Ankit Sharma",
    progress: 82,
    projects: 4,
    status: "Active",
    joined: "Today",
  },
  {
    id: 2,
    initials: "PS",
    name: "Priya Singh",
    email: "priya@example.com",
    course: "B.Tech Computer Science",
    mentor: "Neha Verma",
    progress: 68,
    projects: 3,
    status: "Active",
    joined: "Yesterday",
  },
  {
    id: 3,
    initials: "AV",
    name: "Aman Verma",
    email: "aman@example.com",
    course: "BCA",
    mentor: "Dr. Rajesh Kumar",
    progress: 42,
    projects: 2,
    status: "Pending",
    joined: "2 days ago",
  },
  {
    id: 4,
    initials: "SP",
    name: "Simran Patel",
    email: "simran@example.com",
    course: "B.Tech IT",
    mentor: "Dr. Ankit Sharma",
    progress: 91,
    projects: 5,
    status: "Active",
    joined: "3 days ago",
  },
  {
    id: 5,
    initials: "AM",
    name: "Aditya Mishra",
    email: "aditya@example.com",
    course: "BCA",
    mentor: "Neha Verma",
    progress: 57,
    projects: 2,
    status: "Active",
    joined: "4 days ago",
  },
  {
    id: 6,
    initials: "NK",
    name: "Neha Kumari",
    email: "neha@example.com",
    course: "B.Tech Computer Science",
    mentor: "Dr. Rajesh Kumar",
    progress: 35,
    projects: 1,
    status: "Inactive",
    joined: "1 week ago",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selected, setSelected] = useState<Student | null>(null);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue) ||
        student.course.toLowerCase().includes(searchValue) ||
        student.mentor.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All Status" ||
        student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const activeStudents = students.filter(
    (student) => student.status === "Active"
  ).length;

  const pendingStudents = students.filter(
    (student) => student.status === "Pending"
  ).length;

  const averageProgress = Math.round(
    students.reduce((total, student) => total + student.progress, 0) /
      students.length
  );

  const navStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    textDecoration: "none",
    background: "transparent",
    color: "#cbd5e1",
    padding: "12px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
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
                flexShrink: 0,
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
              style={activeNavStyle}
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
              style={navStyle}
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

            <h1>Students</h1>

            <p>
              Manage students, monitor progress, and keep learning
              activities on track.
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
              👨‍🎓
            </div>

            <div>
              <span>Total Students</span>
              <strong>{students.length}</strong>
            </div>

            <small className={styles.greenText}>
              All registered
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.green}`}>
              ✓
            </div>

            <div>
              <span>Active Students</span>
              <strong>{activeStudents}</strong>
            </div>

            <small className={styles.greenText}>
              Currently active
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.orange}`}>
              ◷
            </div>

            <div>
              <span>Pending</span>
              <strong>{pendingStudents}</strong>
            </div>

            <small className={styles.orangeText}>
              Need action
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.purple}`}>
              ★
            </div>

            <div>
              <span>Average Progress</span>
              <strong>{averageProgress}%</strong>
            </div>

            <small className={styles.greenText}>
              Overall progress
            </small>
          </div>
        </section>

        {/* ================= STUDENT MANAGEMENT ================= */}

        <section className={styles.contentCard}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>
                STUDENT MANAGEMENT
              </div>

              <h2>All Students</h2>

              <p>
                View and manage every student registered on MentorOS.
              </p>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => {
                alert("Add Student feature will be connected to backend.");
              }}
            >
              + Add Student
            </button>
          </div>

          {/* Filters */}

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search student, email, course or mentor..."
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
              <option>Pending</option>
              <option>Inactive</option>
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
                  <th>STUDENT</th>
                  <th>COURSE</th>
                  <th>MENTOR</th>
                  <th>PROGRESS</th>
                  <th>PROJECTS</th>
                  <th>STATUS</th>
                  <th>JOINED</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <div className={styles.studentCell}>
                        <div className={styles.studentAvatar}>
                          {student.initials}
                        </div>

                        <div>
                          <strong>{student.name}</strong>
                          <span>{student.email}</span>
                        </div>
                      </div>
                    </td>

                    <td>{student.course}</td>

                    <td>{student.mentor}</td>

                    <td>
                      <div className={styles.progressCell}>
                        <div className={styles.progressTrack}>
                          <div
                            className={styles.progressFill}
                            style={{
                              width: `${student.progress}%`,
                            }}
                          />
                        </div>

                        <span>{student.progress}%</span>
                      </div>
                    </td>

                    <td>
                      <strong>{student.projects}</strong>
                    </td>

                    <td>
                      <span
                        className={`${styles.badge} ${
                          student.status === "Active"
                            ? styles.active
                            : student.status === "Pending"
                            ? styles.pending
                            : styles.inactive
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>

                    <td>{student.joined}</td>

                    <td>
                      <button
                        type="button"
                        className={styles.actionButton}
                        onClick={() => setSelected(student)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className={styles.emptyState}
                    >
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}

          <div className={styles.tableFooter}>
            <span>
              Showing {filteredStudents.length} of {students.length}{" "}
              students
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

        {/* ================= BOTTOM SECTION ================= */}

        <section className={styles.bottomGrid}>
          {/* Admin Insight */}

          <div className={styles.insightCard}>
            <div className={styles.insightIcon}>✓</div>

            <div>
              <div className={styles.sectionLabel}>
                ADMIN INSIGHT
              </div>

              <h3>
                Monitor students with lower progress regularly.
              </h3>

              <p>
                Early intervention can help students overcome
                learning gaps and improve project completion.
              </p>
            </div>
          </div>

          {/* Quick Actions */}

          <div className={styles.quickCard}>
            <div className={styles.sectionLabel}>
              QUICK ACTIONS
            </div>

            <h3>Need to act?</h3>

            <div className={styles.quickButtons}>
              <button
                type="button"
                onClick={() => {
                  setStatusFilter("Pending");
                  setSearch("");
                }}
              >
                Pending Students
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/mentors")}
              >
                Manage Mentors
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

        {/* ================= STUDENT MODAL ================= */}

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
                    STUDENT PROFILE
                  </div>

                  <h2>{selected.name}</h2>
                </div>

                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>
              </div>

              <div className={styles.modalProfile}>
                <div className={styles.largeAvatar}>
                  {selected.initials}
                </div>

                <div>
                  <strong>{selected.name}</strong>
                  <span>{selected.email}</span>
                </div>
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
                  <span>Progress</span>
                  <strong>{selected.progress}%</strong>
                </div>

                <div>
                  <span>Projects</span>
                  <strong>{selected.projects}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{selected.status}</strong>
                </div>

                <div>
                  <span>Joined</span>
                  <strong>{selected.joined}</strong>
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
                      `Manage Student: ${selected.name}`
                    );
                  }}
                >
                  Manage Student
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}