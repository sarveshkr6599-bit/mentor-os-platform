"use client";

import { useMemo, useState } from "react";
import styles from "./Feedback.module.css";

type FeedbackItem = {
  id: number;
  student: string;
  initials: string;
  assignment: string;
  score: number;
  status: "Pending" | "Draft" | "Submitted";
  priority: "High" | "Medium" | "Low";
  updated: string;
  comment: string;
};

const feedbackData: FeedbackItem[] = [
  {
    id: 1,
    student: "Rahul Kumar",
    initials: "RK",
    assignment: "React Dashboard",
    score: 86,
    status: "Pending",
    priority: "High",
    updated: "Today",
    comment:
      "Good implementation. Improve component structure and accessibility.",
  },
  {
    id: 2,
    student: "Priya Singh",
    initials: "PS",
    assignment: "Backend API",
    score: 78,
    status: "Draft",
    priority: "Medium",
    updated: "Today",
    comment: "API structure is good. Add better error handling.",
  },
  {
    id: 3,
    student: "Aman Verma",
    initials: "AV",
    assignment: "Authentication Module",
    score: 64,
    status: "Pending",
    priority: "High",
    updated: "Yesterday",
    comment:
      "Needs improvement in validation and security handling.",
  },
  {
    id: 4,
    student: "Simran Gupta",
    initials: "SG",
    assignment: "Portfolio Website",
    score: 92,
    status: "Submitted",
    priority: "Low",
    updated: "Yesterday",
    comment:
      "Excellent work. UI is clean and responsive.",
  },
  {
    id: 5,
    student: "Aditya Mishra",
    initials: "AM",
    assignment: "Database Design",
    score: 72,
    status: "Draft",
    priority: "Medium",
    updated: "2 days ago",
    comment:
      "Database structure is acceptable. Review relationships once.",
  },
  {
    id: 6,
    student: "Neha Kumari",
    initials: "NK",
    assignment: "JavaScript Project",
    score: 58,
    status: "Pending",
    priority: "High",
    updated: "3 days ago",
    comment:
      "Please work on code quality and add proper documentation.",
  },
];

export default function Feedback() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [selected, setSelected] =
    useState<FeedbackItem | null>(null);

  const filteredFeedback = useMemo(() => {
    return feedbackData.filter((item) => {
      const matchesSearch =
        item.student
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.assignment
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All Status" ||
        item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const pendingCount = feedbackData.filter(
    (item) => item.status === "Pending"
  ).length;

  const draftCount = feedbackData.filter(
    (item) => item.status === "Draft"
  ).length;

  const submittedCount = feedbackData.filter(
    (item) => item.status === "Submitted"
  ).length;

  const averageScore = Math.round(
    feedbackData.reduce(
      (sum, item) => sum + item.score,
      0
    ) / feedbackData.length
  );

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All Status");
  };

  const reviewPending = () => {
    setSearch("");
    setStatusFilter("Pending");
  };

  const openDrafts = () => {
    setSearch("");
    setStatusFilter("Draft");
  };

  const viewStudents = () => {
    window.location.href = "/mentor/students";
  };

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}

      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>
            MENTOROS • MENTOR WORKSPACE
          </div>

          <h1>Feedback</h1>

          <p>
            Review student work, provide feedback,
            and help students improve their learning
            outcomes.
          </p>
        </div>

        <div className={styles.headerProfile}>
          <button
            type="button"
            className={styles.notificationButton}
            onClick={() => {
              window.location.href =
                "/student/notifications";
            }}
          >
            ♧
          </button>

          <div className={styles.avatar}>M</div>

          <div>
            <strong>Mentor</strong>
            <span>Workspace</span>
          </div>
        </div>
      </header>

      {/* ================= STATS ================= */}

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.blue}`}
          >
            ✎
          </div>

          <div>
            <span>Pending Feedback</span>
            <strong>{pendingCount}</strong>
          </div>

          <small className={styles.greenText}>
            Needs review
          </small>
        </div>

        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.orange}`}
          >
            ◷
          </div>

          <div>
            <span>Draft Feedback</span>
            <strong>{draftCount}</strong>
          </div>

          <small className={styles.orangeText}>
            In progress
          </small>
        </div>

        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.green}`}
          >
            ✓
          </div>

          <div>
            <span>Submitted</span>
            <strong>{submittedCount}</strong>
          </div>

          <small className={styles.greenText}>
            Completed
          </small>
        </div>

        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.purple}`}
          >
            ★
          </div>

          <div>
            <span>Average Score</span>
            <strong>{averageScore}%</strong>
          </div>

          <small className={styles.greenText}>
            Student average
          </small>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className={styles.contentCard}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>
              STUDENT FEEDBACK
            </div>

            <h2>Review &amp; Manage Feedback</h2>

            <p>
              Create, edit and submit feedback for your
              assigned students.
            </p>
          </div>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={() => {
              alert(
                "New Feedback form will be connected here."
              );
            }}
          >
            + New Feedback
          </button>
        </div>

        {/* ================= FILTERS ================= */}

        <div className={styles.filters}>
          <div className={styles.searchBox}>
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search student or assignment..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Draft</option>
            <option>Submitted</option>
          </select>

          <button
            type="button"
            className={styles.clearButton}
            onClick={clearFilters}
          >
            Clear
          </button>
        </div>

        {/* ================= TABLE ================= */}

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>ASSIGNMENT</th>
                <th>SCORE</th>
                <th>STATUS</th>
                <th>PRIORITY</th>
                <th>UPDATED</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredFeedback.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className={styles.studentCell}>
                      <div
                        className={
                          styles.studentAvatar
                        }
                      >
                        {item.initials}
                      </div>

                      <div>
                        <strong>
                          {item.student}
                        </strong>

                        <span>
                          Assigned student
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>{item.assignment}</td>

                  <td>
                    <strong>{item.score}%</strong>
                  </td>

                  <td>
                    <span
                      className={`${styles.badge} ${
                        item.status === "Pending"
                          ? styles.pending
                          : item.status === "Draft"
                          ? styles.draft
                          : styles.submitted
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`${styles.priority} ${
                        item.priority === "High"
                          ? styles.high
                          : item.priority === "Medium"
                          ? styles.medium
                          : styles.low
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>

                  <td>{item.updated}</td>

                  <td>
                    <button
                      type="button"
                      className={
                        styles.actionButton
                      }
                      onClick={() =>
                        setSelected(item)
                      }
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}

              {filteredFeedback.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className={styles.emptyState}
                  >
                    No feedback found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= FOOTER ================= */}

        <div className={styles.tableFooter}>
          Showing {filteredFeedback.length} of{" "}
          {feedbackData.length} feedback records

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
        <div className={styles.insightCard}>
          <div className={styles.insightIcon}>
            ✓
          </div>

          <div>
            <div className={styles.sectionLabel}>
              FEEDBACK INSIGHT
            </div>

            <h3>
              Keep your feedback specific and
              actionable.
            </h3>

            <p>
              Students improve faster when feedback
              explains what went well, what needs
              improvement, and what to do next.
            </p>
          </div>
        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div className={styles.quickCard}>
          <div className={styles.sectionLabel}>
            QUICK ACTIONS
          </div>

          <h3>Need to act?</h3>

          <div className={styles.quickButtons}>
            <button
              type="button"
              onClick={reviewPending}
            >
              Review Pending
            </button>

            <button
              type="button"
              onClick={openDrafts}
            >
              Open Drafts
            </button>

            <button
              type="button"
              onClick={viewStudents}
            >
              View Students
            </button>
          </div>
        </div>
      </section>

      {/* ================= REVIEW MODAL ================= */}

      {selected && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelected(null)}
        >
          <div
            className={styles.modal}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className={styles.modalHeader}>
              <div>
                <div
                  className={styles.sectionLabel}
                >
                  FEEDBACK REVIEW
                </div>

                <h2>{selected.student}</h2>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={() =>
                  setSelected(null)
                }
              >
                ×
              </button>
            </div>

            <div className={styles.modalInfo}>
              <div>
                <span>Assignment</span>
                <strong>
                  {selected.assignment}
                </strong>
              </div>

              <div>
                <span>Score</span>
                <strong>
                  {selected.score}%
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selected.status}
                </strong>
              </div>

              <div>
                <span>Priority</span>
                <strong>
                  {selected.priority}
                </strong>
              </div>
            </div>

            <div className={styles.commentBox}>
              <label>Mentor Feedback</label>

              <textarea
                defaultValue={selected.comment}
              />
            </div>

            <div className={styles.modalActions}>
              <button
                type="button"
                className={
                  styles.secondaryButton
                }
                onClick={() =>
                  setSelected(null)
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className={
                  styles.primaryButton
                }
                onClick={() => {
                  alert(
                    "Feedback saved successfully."
                  );
                  setSelected(null);
                }}
              >
                Save Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}