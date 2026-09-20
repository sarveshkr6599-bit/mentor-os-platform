"use client";

import { useMemo, useState } from "react";
import styles from "./Mentors.module.css";

type Mentor = {
  id: number;
  initials: string;
  name: string;
  email: string;
  specialization: string;
  students: number;
  rating: number;
  projects: number;
  status: "Active" | "Pending" | "Inactive";
  joined: string;
};

const mentors: Mentor[] = [
  {
    id: 1,
    initials: "AS",
    name: "Dr. Ankit Sharma",
    email: "ankit@example.com",
    specialization: "Full Stack Development",
    students: 24,
    rating: 4.9,
    projects: 18,
    status: "Active",
    joined: "Today",
  },
  {
    id: 2,
    initials: "NV",
    name: "Neha Verma",
    email: "neha@example.com",
    specialization: "Backend & APIs",
    students: 19,
    rating: 4.8,
    projects: 15,
    status: "Active",
    joined: "Yesterday",
  },
  {
    id: 3,
    initials: "RK",
    name: "Dr. Rajesh Kumar",
    email: "rajesh@example.com",
    specialization: "Database & Cloud",
    students: 17,
    rating: 4.6,
    projects: 13,
    status: "Active",
    joined: "2 days ago",
  },
  {
    id: 4,
    initials: "PS",
    name: "Priya Sharma",
    email: "priya@example.com",
    specialization: "UI/UX Design",
    students: 12,
    rating: 4.7,
    projects: 10,
    status: "Pending",
    joined: "3 days ago",
  },
  {
    id: 5,
    initials: "VS",
    name: "Vivek Singh",
    email: "vivek@example.com",
    specialization: "Data Science",
    students: 21,
    rating: 4.9,
    projects: 16,
    status: "Active",
    joined: "4 days ago",
  },
  {
    id: 6,
    initials: "RM",
    name: "Ritu Mehta",
    email: "ritu@example.com",
    specialization: "Mobile Development",
    students: 9,
    rating: 4.5,
    projects: 7,
    status: "Inactive",
    joined: "1 week ago",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Mentors() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selected, setSelected] = useState<Mentor | null>(null);

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        mentor.name.toLowerCase().includes(searchValue) ||
        mentor.email.toLowerCase().includes(searchValue) ||
        mentor.specialization.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All Status" ||
        mentor.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const activeMentors = mentors.filter(
    (mentor) => mentor.status === "Active"
  ).length;

  const pendingMentors = mentors.filter(
    (mentor) => mentor.status === "Pending"
  ).length;

  const averageRating = (
    mentors.reduce((total, mentor) => total + mentor.rating, 0) /
    mentors.length
  ).toFixed(1);

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
              style={navStyle}
            >
              🎓
              <span>Students</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/mentors")}
              style={activeNavStyle}
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

        {/* Bottom */}

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

      {/* ================= MAIN ================= */}

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

            <h1>Mentors</h1>

            <p>
              Manage mentors, review their performance, and monitor
              student assignments.
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
              👨‍🏫
            </div>

            <div>
              <span>Total Mentors</span>
              <strong>{mentors.length}</strong>
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
              <span>Active Mentors</span>
              <strong>{activeMentors}</strong>
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
              <span>Pending Approval</span>
              <strong>{pendingMentors}</strong>
            </div>

            <small className={styles.orangeText}>
              Need review
            </small>
          </div>

          <div className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles.purple}`}>
              ★
            </div>

            <div>
              <span>Average Rating</span>
              <strong>{averageRating}</strong>
            </div>

            <small className={styles.greenText}>
              Mentor rating
            </small>
          </div>
        </section>

        {/* ================= MENTOR MANAGEMENT ================= */}

        <section className={styles.contentCard}>
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionLabel}>
                MENTOR MANAGEMENT
              </div>

              <h2>All Mentors</h2>

              <p>
                View and manage mentors registered on MentorOS.
              </p>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => {
                alert(
                  "Add Mentor feature will be connected to backend."
                );
              }}
            >
              + Add Mentor
            </button>
          </div>

          {/* Filters */}

          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search mentor, email or specialization..."
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
                  <th>MENTOR</th>
                  <th>SPECIALIZATION</th>
                  <th>STUDENTS</th>
                  <th>RATING</th>
                  <th>PROJECTS</th>
                  <th>STATUS</th>
                  <th>JOINED</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {filteredMentors.map((mentor) => (
                  <tr key={mentor.id}>
                    <td>
                      <div className={styles.mentorCell}>
                        <div className={styles.mentorAvatar}>
                          {mentor.initials}
                        </div>

                        <div>
                          <strong>{mentor.name}</strong>
                          <span>{mentor.email}</span>
                        </div>
                      </div>
                    </td>

                    <td>{mentor.specialization}</td>

                    <td>
                      <strong>{mentor.students}</strong>
                    </td>

                    <td>
                      <div className={styles.rating}>
                        <span>★</span>
                        {mentor.rating}
                      </div>
                    </td>

                    <td>
                      <strong>{mentor.projects}</strong>
                    </td>

                    <td>
                      <span
                        className={`${styles.badge} ${
                          mentor.status === "Active"
                            ? styles.active
                            : mentor.status === "Pending"
                            ? styles.pending
                            : styles.inactive
                        }`}
                      >
                        {mentor.status}
                      </span>
                    </td>

                    <td>{mentor.joined}</td>

                    <td>
                      <button
                        type="button"
                        className={styles.actionButton}
                        onClick={() => setSelected(mentor)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredMentors.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className={styles.emptyState}
                    >
                      No mentors found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}

          <div className={styles.tableFooter}>
            <span>
              Showing {filteredMentors.length} of {mentors.length}{" "}
              mentors
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
                Keep mentor availability balanced across students.
              </h3>

              <p>
                Monitoring student-to-mentor assignments helps
                maintain better support and consistent learning
                outcomes.
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
                  setStatusFilter("Pending");
                  setSearch("");
                }}
              >
                Pending Approvals
              </button>

              <button
                type="button"
                onClick={() => goTo("/admin/students")}
              >
                Manage Students
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
                    MENTOR PROFILE
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
                  <span>Specialization</span>
                  <strong>{selected.specialization}</strong>
                </div>

                <div>
                  <span>Students</span>
                  <strong>{selected.students}</strong>
                </div>

                <div>
                  <span>Rating</span>
                  <strong>{selected.rating}</strong>
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
                      `Manage Mentor: ${selected.name}`
                    );
                  }}
                >
                  Manage Mentor
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}