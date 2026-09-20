"use client";

import { useMemo, useState } from "react";
import styles from "./Students.module.css";

type Student = {
  id: number;
  initials: string;
  name: string;
  email: string;
  course: string;
  year: string;
  progress: number;
  assignments: string;
  status: "On Track" | "Needs Attention" | "Excellent";
  lastActive: string;
};

const students: Student[] = [
  {
    id: 1,
    initials: "RK",
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    course: "B.Tech Computer Science",
    year: "4th Year",
    progress: 82,
    assignments: "12 / 15",
    status: "Excellent",
    lastActive: "Today",
  },
  {
    id: 2,
    initials: "PS",
    name: "Priya Singh",
    email: "priya.singh@example.com",
    course: "B.Tech Computer Science",
    year: "3rd Year",
    progress: 68,
    assignments: "9 / 14",
    status: "On Track",
    lastActive: "2 hours ago",
  },
  {
    id: 3,
    initials: "AV",
    name: "Aman Verma",
    email: "aman.verma@example.com",
    course: "BCA",
    year: "3rd Year",
    progress: 54,
    assignments: "7 / 13",
    status: "Needs Attention",
    lastActive: "Yesterday",
  },
  {
    id: 4,
    initials: "SG",
    name: "Simran Gupta",
    email: "simran.gupta@example.com",
    course: "B.Tech Computer Science",
    year: "4th Year",
    progress: 91,
    assignments: "14 / 15",
    status: "Excellent",
    lastActive: "Today",
  },
  {
    id: 5,
    initials: "AM",
    name: "Aditya Mishra",
    email: "aditya.mishra@example.com",
    course: "BCA",
    year: "2nd Year",
    progress: 73,
    assignments: "10 / 14",
    status: "On Track",
    lastActive: "Yesterday",
  },
  {
    id: 6,
    initials: "NK",
    name: "Neha Kumari",
    email: "neha.kumari@example.com",
    course: "B.Tech IT",
    year: "3rd Year",
    progress: 46,
    assignments: "6 / 13",
    status: "Needs Attention",
    lastActive: "3 days ago",
  },
];

export default function Students() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Students");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        student.name.toLowerCase().includes(searchText) ||
        student.email.toLowerCase().includes(searchText) ||
        student.course.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All Students" ||
        student.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <main className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>MENTOROS · MENTOR WORKSPACE</div>
          <h1>My Students</h1>
          <p>
            View, manage, and support all students assigned to you.
          </p>
        </div>

        <div className={styles.headerActions}>
          <button className={styles.notificationButton}>♢</button>

          <div className={styles.mentorProfile}>
            <div className={styles.profileAvatar}>M</div>
            <div>
              <strong>Mentor</strong>
              <span>Mentor</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>♟</div>
          <div>
            <span>Total Students</span>
            <strong>48</strong>
          </div>
          <small>+6 this month</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>✓</div>
          <div>
            <span>Active Students</span>
            <strong>42</strong>
          </div>
          <small>87.5% active</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>↗</div>
          <div>
            <span>Average Progress</span>
            <strong>76%</strong>
          </div>
          <small>+4% this month</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>★</div>
          <div>
            <span>Needs Attention</span>
            <strong>6</strong>
          </div>
          <small>Review recommended</small>
        </div>
      </section>

      {/* Main Card */}
      <section className={styles.mainCard}>
        <div className={styles.cardHeader}>
          <div>
            <span className={styles.sectionLabel}>STUDENT MANAGEMENT</span>
            <h2>All Students</h2>
            <p>Manage your assigned students and track their progress.</p>
          </div>

          <button className={styles.addButton}>+ Add Student</button>
        </div>

        {/* Search + Filter */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search students by name, email, or course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Students</option>
            <option>Excellent</option>
            <option>On Track</option>
            <option>Needs Attention</option>
          </select>

          <button className={styles.filterButton}>☷ Filters</button>
        </div>

        {/* Table */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>COURSE</th>
                <th>PROGRESS</th>
                <th>ASSIGNMENTS</th>
                <th>STATUS</th>
                <th>LAST ACTIVE</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className={styles.studentCell}>
                      <div className={styles.avatar}>{student.initials}</div>
                      <div>
                        <strong>{student.name}</strong>
                        <span>{student.email}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.courseCell}>
                      <strong>{student.course}</strong>
                      <span>{student.year}</span>
                    </div>
                  </td>

                  <td>
                    <div className={styles.progressCell}>
                      <div className={styles.progressTop}>
                        <strong>{student.progress}%</strong>
                      </div>
                      <div className={styles.progressTrack}>
                        <div
                          className={styles.progressBar}
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={styles.assignmentCount}>
                      {student.assignments}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`${styles.status} ${
                        student.status === "Excellent"
                          ? styles.excellent
                          : student.status === "On Track"
                            ? styles.onTrack
                            : styles.attention
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <span className={styles.lastActive}>
                      {student.lastActive}
                    </span>
                  </td>

                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() => setSelectedStudent(student)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
            <div className={styles.emptyState}>
              <div>⌕</div>
              <strong>No students found</strong>
              <span>Try changing your search or filter.</span>
            </div>
          )}
        </div>

        <div className={styles.tableFooter}>
          <span>
            Showing <strong>{filteredStudents.length}</strong> of{" "}
            <strong>{students.length}</strong> students
          </span>

          <div className={styles.pagination}>
            <button>‹</button>
            <button className={styles.activePage}>1</button>
            <button>2</button>
            <button>3</button>
            <button>›</button>
          </div>
        </div>
      </section>

      {/* Bottom Insights */}
      <section className={styles.bottomGrid}>
        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>✓</div>
          <div>
            <span className={styles.sectionLabel}>STUDENT PERFORMANCE</span>
            <h3>Students are progressing well</h3>
            <p>
              Most of your students are actively completing assignments and
              maintaining steady progress.
            </p>
          </div>
        </div>

        <div className={styles.quickCard}>
          <span className={styles.sectionLabel}>QUICK ACTIONS</span>
          <h3>Need to take action?</h3>

          <div className={styles.quickActions}>
            <button>Review Submissions</button>
            <button>Send Feedback</button>
            <button>View Analytics</button>
          </div>
        </div>
      </section>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedStudent(null)}
            >
              ×
            </button>

            <div className={styles.modalProfile}>
              <div className={styles.modalAvatar}>
                {selectedStudent.initials}
              </div>

              <div>
                <span className={styles.sectionLabel}>STUDENT PROFILE</span>
                <h2>{selectedStudent.name}</h2>
                <p>{selectedStudent.email}</p>
              </div>
            </div>

            <div className={styles.modalStats}>
              <div>
                <span>Course</span>
                <strong>{selectedStudent.course}</strong>
              </div>

              <div>
                <span>Year</span>
                <strong>{selectedStudent.year}</strong>
              </div>

              <div>
                <span>Progress</span>
                <strong>{selectedStudent.progress}%</strong>
              </div>

              <div>
                <span>Assignments</span>
                <strong>{selectedStudent.assignments}</strong>
              </div>
            </div>

            <div className={styles.modalActions}>
              <button>View Progress</button>
              <button>Send Feedback</button>
              <button>Review Work</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}