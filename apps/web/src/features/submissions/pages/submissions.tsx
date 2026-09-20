"use client";

import { useMemo, useState } from "react";
import styles from "./Submissions.module.css";

type SubmissionStatus =
  | "Reviewed"
  | "Pending Review"
  | "Needs Improvement";

type Submission = {
  title: string;
  assignment: string;
  date: string;
  file: string;
  status: SubmissionStatus;
  score?: number;
  icon: string;
};

const submissions: Submission[] = [
  {
    title: "Responsive Navbar Implementation",
    assignment: "Build a Responsive Navbar",
    date: "10 Sep 2025, 10:30 AM",
    file: "navbar.zip",
    status: "Reviewed",
    score: 85,
    icon: "</>",
  },
  {
    title: "User Authentication API",
    assignment: "Create REST APIs",
    date: "08 Sep 2025, 04:15 PM",
    file: "api-code.zip",
    status: "Pending Review",
    icon: "</>",
  },
  {
    title: "Database Schema Design",
    assignment: "Design Database Schema",
    date: "05 Sep 2025, 02:20 PM",
    file: "schema.sql",
    status: "Reviewed",
    score: 92,
    icon: "▣",
  },
  {
    title: "UI/UX Design",
    assignment: "UI/UX Design Implementation",
    date: "01 Sep 2025, 11:45 AM",
    file: "design.fig",
    status: "Needs Improvement",
    score: 68,
    icon: "✦",
  },
  {
    title: "Project Proposal",
    assignment: "Final Project Draft",
    date: "28 Aug 2025, 05:10 PM",
    file: "proposal.pdf",
    status: "Reviewed",
    score: 88,
    icon: "▤",
  },
  {
    title: "Frontend Setup",
    assignment: "Environment Setup",
    date: "25 Aug 2025, 09:30 AM",
    file: "setup.zip",
    status: "Reviewed",
    score: 95,
    icon: "</>",
  },
];

const navItems = [
  ["⌂", "Dashboard", "/student"],
  ["▣", "My Assignments", "/student/assignments"],
  ["➤", "My Submissions", "/student/submissions"],
  ["◷", "Progress", "/student/progress"],
  ["✦", "AI Feedback", "/student/ai-feedback"],
  ["▤", "Learning Resources", "/student/learning-resources"],
  ["♢", "Notifications", "/student/notifications"],
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Submissions() {
  const [activeTab, setActiveTab] = useState("All Submissions");
  const [search, setSearch] = useState("");

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.assignment.toLowerCase().includes(search.toLowerCase());

      const matchesTab =
        activeTab === "All Submissions" ||
        item.status ===
          activeTab.replace("Pending", "Pending Review");

      return matchesSearch && matchesTab;
    });
  }, [activeTab, search]);

  return (
    <div className={styles.shell}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <span>Learn • Build • Grow</span>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map(([icon, label, path]) => (
            <a
              key={label}
              href={path}
              className={
                label === "My Submissions"
                  ? styles.activeNav
                  : ""
              }
              onClick={(e) => {
                e.preventDefault();
                goTo(path);
              }}
              style={{
                cursor: "pointer",
                pointerEvents: "auto",
              }}
            >
              <span className={styles.navIcon}>
                {icon}
              </span>

              <span>{label}</span>

              {label === "Notifications" && (
                <b
                  className={
                    styles.notificationBadge
                  }
                >
                  3
                </b>
              )}
            </a>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <a
            href="/student/profile"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/profile");
            }}
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <span className={styles.navIcon}>
              ◎
            </span>

            <span>Profile</span>
          </a>

          <a
            href="/student/settings"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/settings");
            }}
            style={{
              cursor: "pointer",
              pointerEvents: "auto",
            }}
          >
            <span className={styles.navIcon}>
              ⚙
            </span>

            <span>Settings</span>
          </a>

          <div className={styles.learningCard}>
            <div className={styles.rocket}>🚀</div>

            <strong>Keep Building!</strong>

            <p>
              Every submission is a step closer
              to your goals.
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.page}>
        {/* TOP BAR */}
        <header className={styles.topBar}>
          <div className={styles.globalSearch}>
            <span>⌕</span>

            <input
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.topRight}>
            <button
              className={styles.bell}
              onClick={() =>
                goTo("/student/notifications")
              }
            >
              ♟
            </button>

            <div
              className={styles.profile}
              onClick={() =>
                goTo("/student/profile")
              }
              style={{ cursor: "pointer" }}
            >
              <div className={styles.avatar}>
                SK
              </div>

              <div>
                <strong>Student</strong>
                <span>Student</span>
              </div>

              <span
                className={
                  styles.profileArrow
                }
              >
                ⌄
              </span>
            </div>
          </div>
        </header>

        {/* PAGE HEADER */}
        <section className={styles.pageHeader}>
          <div className={styles.heading}>
            <div className={styles.headingIcon}>
              ↗
            </div>

            <div>
              <div className={styles.eyebrow}>
                STUDENT WORKSPACE
              </div>

              <h1>My Submissions</h1>

              <p>
                Track your submitted work, view
                feedback, and improve continuously.
              </p>
            </div>
          </div>

          <button
            className={styles.primaryButton}
            onClick={() =>
              goTo("/student/submissions")
            }
          >
            + Submit New Work
          </button>
        </section>

        {/* SUMMARY */}
        <section className={styles.summaryGrid}>
          <SummaryCard
            icon="➤"
            value="6"
            label="Total Submissions"
          />

          <SummaryCard
            icon="✓"
            value="4"
            label="Reviewed"
            type="green"
          />

          <SummaryCard
            icon="◷"
            value="1"
            label="Pending Review"
            type="orange"
          />

          <SummaryCard
            icon="!"
            value="1"
            label="Needs Improvement"
            type="red"
          />
        </section>

        {/* CONTENT */}
        <div className={styles.contentGrid}>
          <section className={styles.mainCard}>
            {/* TABS */}
            <div className={styles.tabs}>
              {[
                "All Submissions",
                "Reviewed",
                "Pending",
                "Needs Improvement",
              ].map((tab) => (
                <button
                  key={tab}
                  className={
                    activeTab === tab
                      ? styles.activeTab
                      : ""
                  }
                  onClick={() =>
                    setActiveTab(tab)
                  }
                >
                  {tab}

                  <span>
                    {getTabCount(tab)}
                  </span>
                </button>
              ))}
            </div>

            {/* FILTERS */}
            <div className={styles.filters}>
              <div
                className={
                  styles.filterSearch
                }
              >
                <span>⌕</span>

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search submissions..."
                />
              </div>

              <select>
                <option>All Subjects</option>
                <option>
                  Frontend Development
                </option>
                <option>
                  Backend Development
                </option>
                <option>
                  UI/UX Design
                </option>
              </select>

              <select>
                <option>Sort by Date</option>
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Highest Score</option>
              </select>
            </div>

            {/* LIST */}
            <div
              className={
                styles.submissionList
              }
            >
              {filteredSubmissions.map(
                (submission) => (
                  <article
                    className={
                      styles.submission
                    }
                    key={submission.title}
                  >
                    <div
                      className={
                        styles.submissionIcon
                      }
                    >
                      {submission.icon}
                    </div>

                    <div
                      className={
                        styles.submissionBody
                      }
                    >
                      <div
                        className={
                          styles.submissionTitleRow
                        }
                      >
                        <div>
                          <h3>
                            {submission.title}
                          </h3>

                          <p>
                            Assignment:{" "}
                            <span>
                              {
                                submission.assignment
                              }
                            </span>
                          </p>
                        </div>

                        <StatusBadge
                          status={
                            submission.status
                          }
                        />
                      </div>

                      <div
                        className={
                          styles.submissionMeta
                        }
                      >
                        <span>
                          ▣ {submission.date}
                        </span>

                        <span>
                          ▧ {submission.file}
                        </span>
                      </div>
                    </div>

                    <div
                      className={
                        styles.submissionAction
                      }
                    >
                      {submission.score ? (
                        <div
                          className={styles.score}
                        >
                          <strong>
                            {submission.score}
                          </strong>

                          <span>/100</span>
                        </div>
                      ) : (
                        <div
                          className={
                            styles.noScore
                          }
                        >
                          —
                        </div>
                      )}

                      <button
                        className={
                          styles.actionButton
                        }
                      >
                        {submission.status ===
                        "Pending Review"
                          ? "View Submission"
                          : "View Feedback"}
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.rightColumn}>
            <div
              className={
                styles.analyticsCard
              }
            >
              <div
                className={
                  styles.sideTitle
                }
              >
                <span>▥</span>
                Submission Analytics
              </div>

              <div
                className={
                  styles.analyticsBody
                }
              >
                <div className={styles.donut}>
                  <div>
                    <strong>67%</strong>
                    <span>Reviewed</span>
                  </div>
                </div>

                <div className={styles.legend}>
                  <Legend
                    color="green"
                    label="Reviewed"
                    value="4"
                  />

                  <Legend
                    color="orange"
                    label="Pending"
                    value="1"
                  />

                  <Legend
                    color="red"
                    label="Needs Improvement"
                    value="1"
                  />
                </div>
              </div>
            </div>

            <div
              className={
                styles.feedbackCard
              }
            >
              <div
                className={
                  styles.sideTitle
                }
              >
                <span>▣</span>

                Recent Feedback

                <button
                  onClick={() =>
                    goTo("/student/ai-feedback")
                  }
                >
                  View All
                </button>
              </div>

              <Feedback
                score="85"
                title="Responsive Navbar Implementation"
                text="Very good work! Code is clean and responsive."
                date="10 Sep 2025"
                type="green"
              />

              <Feedback
                score="92"
                title="Database Schema Design"
                text="Great structure and relationships."
                date="05 Sep 2025"
                type="green"
              />

              <Feedback
                score="68"
                title="UI/UX Design"
                text="Good effort, but needs better color contrast."
                date="01 Sep 2025"
                type="red"
              />
            </div>

            <div className={styles.helpCard}>
              <div
                className={
                  styles.helpIcon
                }
              >
                ?
              </div>

              <h3>Need Help?</h3>

              <p>
                Stuck on a submission? Reach out
                to your mentor for guidance and
                support.
              </p>

              <button
                onClick={() =>
                  goTo("/student/notifications")
                }
              >
                💬 Contact Mentor
              </button>
            </div>

            <div
              className={
                styles.quoteCard
              }
            >
              <div
                className={
                  styles.quoteMark
                }
              >
                “
              </div>

              <p>
                Feedback turns your work into
                growth.
              </p>

              <span>— MentorOS</span>

              <div
                className={
                  styles.quoteShape
                }
              >
                ✦
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function SummaryCard({
  icon,
  value,
  label,
  type = "blue",
}: {
  icon: string;
  value: string;
  label: string;
  type?: string;
}) {
  return (
    <div
      className={`${styles.summaryCard} ${styles[type]}`}
    >
      <div
        className={
          styles.summaryIcon
        }
      >
        {icon}
      </div>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: SubmissionStatus;
}) {
  const className =
    status === "Reviewed"
      ? styles.reviewed
      : status === "Pending Review"
        ? styles.pendingReview
        : styles.needsImprovement;

  return (
    <span
      className={`${styles.status} ${className}`}
    >
      {status}
    </span>
  );
}

function Legend({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className={styles.legendRow}>
      <span
        className={`${styles.dot} ${styles[color]}`}
      />

      <span>{label}</span>

      <strong>{value}</strong>
    </div>
  );
}

function Feedback({
  score,
  title,
  text,
  date,
  type,
}: {
  score: string;
  title: string;
  text: string;
  date: string;
  type: "green" | "red";
}) {
  return (
    <div className={styles.feedback}>
      <div
        className={`${styles.feedbackScore} ${styles[type]}`}
      >
        {score}
      </div>

      <div>
        <strong>{title}</strong>

        <p>{text}</p>

        <span>{date}</span>
      </div>
    </div>
  );
}

function getTabCount(tab: string) {
  if (tab === "All Submissions") return 6;
  if (tab === "Reviewed") return 4;
  if (tab === "Pending") return 1;

  return 1;
}