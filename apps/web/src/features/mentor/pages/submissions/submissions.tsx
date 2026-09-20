"use client";

import { useMemo, useState } from "react";
import styles from "./Submissions.module.css";

type Submission = {
  id: number;
  student: string;
  initials: string;
  assignment: string;
  subject: string;
  submitted: string;
  score: number | null;
  status: "Pending Review" | "Reviewed" | "Needs Revision";
  priority: "High" | "Medium" | "Low";
};

const initialSubmissions: Submission[] = [
  {
    id: 1,
    student: "Rahul Kumar",
    initials: "RK",
    assignment: "API Integration",
    subject: "B.Tech Computer Science",
    submitted: "Today, 10:42 AM",
    score: null,
    status: "Pending Review",
    priority: "High",
  },
  {
    id: 2,
    student: "Priya Singh",
    initials: "PS",
    assignment: "Dashboard Component",
    subject: "B.Tech Computer Science",
    submitted: "Today, 09:15 AM",
    score: null,
    status: "Pending Review",
    priority: "High",
  },
  {
    id: 3,
    student: "Aman Verma",
    initials: "AV",
    assignment: "Authentication Module",
    subject: "BCA",
    submitted: "Yesterday, 04:30 PM",
    score: 86,
    status: "Reviewed",
    priority: "Low",
  },
  {
    id: 4,
    student: "Simran Gupta",
    initials: "SG",
    assignment: "Career Portfolio",
    subject: "Career Guidance",
    submitted: "Yesterday, 02:20 PM",
    score: 92,
    status: "Reviewed",
    priority: "Low",
  },
  {
    id: 5,
    student: "Aditya Mishra",
    initials: "AM",
    assignment: "Database Schema",
    subject: "BCA",
    submitted: "12 Sep 2026",
    score: null,
    status: "Needs Revision",
    priority: "Medium",
  },
  {
    id: 6,
    student: "Neha Kumari",
    initials: "NK",
    assignment: "UI/UX Implementation",
    subject: "B.Tech IT",
    submitted: "11 Sep 2026",
    score: 74,
    status: "Reviewed",
    priority: "Medium",
  },
];

export default function Submissions() {
  const [submissions, setSubmissions] =
    useState<Submission[]>(initialSubmissions);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      const query = search.toLowerCase();

      const matchesSearch =
        item.student.toLowerCase().includes(query) ||
        item.assignment.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All Status" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, submissions]);

  const pendingCount = submissions.filter(
    (item) => item.status === "Pending Review"
  ).length;

  const reviewedCount = submissions.filter(
    (item) => item.status === "Reviewed"
  ).length;

  const revisionCount = submissions.filter(
    (item) => item.status === "Needs Revision"
  ).length;

  const reviewSubmission = (id: number) => {
    setSubmissions((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Reviewed",
              score: item.score ?? 85,
            }
          : item
      )
    );

    setSelectedSubmission(null);
  };

  return (
    <main className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>MENTOROS · MENTOR WORKSPACE</div>

          <h1>Review Submissions</h1>

          <p>
            Review student work, provide feedback, and track submission
            progress.
          </p>
        </div>

        <div className={styles.headerRight}>
          <button className={styles.notificationButton}>♧</button>

          <div className={styles.profile}>
            <div className={styles.profileAvatar}>M</div>

            <div>
              <strong>Mentor</strong>
              <span>Mentor</span>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}>▣</div>

          <div>
            <span>Total Submissions</span>
            <strong>{submissions.length}</strong>
          </div>

          <small>+8 this week</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.orange}`}>◷</div>

          <div>
            <span>Pending Review</span>
            <strong>{pendingCount}</strong>
          </div>

          <small className={styles.warningText}>Needs attention</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}>✓</div>

          <div>
            <span>Reviewed</span>
            <strong>{reviewedCount}</strong>
          </div>

          <small>+12 this month</small>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}>★</div>

          <div>
            <span>Average Score</span>
            <strong>84%</strong>
          </div>

          <small>Excellent</small>
        </div>
      </section>

      {/* MAIN CARD */}
      <section className={styles.mainCard}>
        <div className={styles.cardHeader}>
          <div>
            <span className={styles.sectionLabel}>STUDENT WORK</span>
            <h2>All Submissions</h2>
            <p>Review and manage work submitted by your students.</p>
          </div>

          <button
            className={styles.exportButton}
            onClick={() => alert("Export feature coming soon")}
          >
            ↓ Export
          </button>
        </div>

        {/* FILTER BAR */}
        <div className={styles.toolbar}>
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students, assignments, or subjects..."
            />
          </div>

          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>Pending Review</option>
            <option>Reviewed</option>
            <option>Needs Revision</option>
          </select>

          <button
            className={styles.filterButton}
            onClick={() => {
              setSearch("");
              setStatusFilter("All Status");
            }}
          >
            ⚙ Filters
          </button>
        </div>

        {/* TABLE */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>ASSIGNMENT</th>
                <th>SUBMITTED</th>
                <th>SCORE</th>
                <th>STATUS</th>
                <th>PRIORITY</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredSubmissions.map((submission) => (
                <tr key={submission.id}>
                  <td>
                    <div className={styles.studentCell}>
                      <div className={styles.avatar}>
                        {submission.initials}
                      </div>

                      <div>
                        <strong>{submission.student}</strong>
                        <span>{submission.subject}</span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className={styles.assignmentCell}>
                      <strong>{submission.assignment}</strong>
                      <span>Student submission</span>
                    </div>
                  </td>

                  <td>
                    <span className={styles.date}>
                      {submission.submitted}
                    </span>
                  </td>

                  <td>
                    {submission.score !== null ? (
                      <strong className={styles.score}>
                        {submission.score}%
                      </strong>
                    ) : (
                      <span className={styles.notScored}>Not scored</span>
                    )}
                  </td>

                  <td>
                    <span
                      className={`${styles.status} ${
                        submission.status === "Reviewed"
                          ? styles.reviewed
                          : submission.status === "Needs Revision"
                            ? styles.revision
                            : styles.pending
                      }`}
                    >
                      {submission.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`${styles.priority} ${
                        submission.priority === "High"
                          ? styles.high
                          : submission.priority === "Medium"
                            ? styles.medium
                            : styles.low
                      }`}
                    >
                      {submission.priority}
                    </span>
                  </td>

                  <td>
                    <button
                      className={styles.viewButton}
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      {submission.status === "Reviewed"
                        ? "View"
                        : "Review"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredSubmissions.length === 0 && (
            <div className={styles.emptyState}>
              <div>⌕</div>
              <strong>No submissions found</strong>
              <span>Try changing your search or filter.</span>
            </div>
          )}
        </div>

        <div className={styles.tableFooter}>
          <span>
            Showing <strong>{filteredSubmissions.length}</strong> of{" "}
            <strong>{submissions.length}</strong> submissions
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

      {/* BOTTOM CARDS */}
      <section className={styles.bottomGrid}>
        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>✓</div>

          <div>
            <span className={styles.sectionLabel}>REVIEW INSIGHT</span>

            <h3>Keep your students moving forward.</h3>

            <p>
              You have <strong>{pendingCount} submissions</strong> waiting
              for review. Timely feedback helps students improve faster.
            </p>
          </div>
        </div>

        <div className={styles.quickCard}>
          <span className={styles.sectionLabel}>QUICK ACTIONS</span>

          <h3>Need to take action?</h3>

          <div className={styles.quickActions}>
            <button onClick={() => setStatusFilter("Pending Review")}>
              Review Pending
            </button>

            <button onClick={() => setStatusFilter("Needs Revision")}>
              Needs Revision
            </button>

            <button onClick={() => setStatusFilter("Reviewed")}>
              View Reviewed
            </button>
          </div>
        </div>
      </section>

      {/* REVIEW MODAL */}
      {selectedSubmission && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedSubmission(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedSubmission(null)}
            >
              ×
            </button>

            <div className={styles.modalProfile}>
              <div className={styles.modalAvatar}>
                {selectedSubmission.initials}
              </div>

              <div>
                <span className={styles.sectionLabel}>SUBMISSION REVIEW</span>
                <h2>{selectedSubmission.student}</h2>
                <p>{selectedSubmission.assignment}</p>
              </div>
            </div>

            <div className={styles.modalInfo}>
              <div>
                <span>Subject</span>
                <strong>{selectedSubmission.subject}</strong>
              </div>

              <div>
                <span>Submitted</span>
                <strong>{selectedSubmission.submitted}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedSubmission.status}</strong>
              </div>

              <div>
                <span>Score</span>
                <strong>
                  {selectedSubmission.score !== null
                    ? `${selectedSubmission.score}%`
                    : "Not scored"}
                </strong>
              </div>
            </div>

            <div className={styles.modalActions}>
              {selectedSubmission.status !== "Reviewed" && (
                <button
                  className={styles.primaryAction}
                  onClick={() => reviewSubmission(selectedSubmission.id)}
                >
                  ✓ Mark as Reviewed
                </button>
              )}

              <button
                className={styles.secondaryAction}
                onClick={() => setSelectedSubmission(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}