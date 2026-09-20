"use client";

import { useState } from "react";
import styles from "./AI-Feedback.module.css";

const submissions = [
  {
    title: "Build a Responsive Navbar",
    category: "Frontend Development",
    date: "12 Sep 2025",
    score: 85,
    icon: "▣",
  },
  {
    title: "Create REST APIs",
    category: "API Integration",
    date: "08 Sep 2025",
    score: 68,
    icon: "</>",
  },
  {
    title: "Design Database Schema",
    category: "Database",
    date: "05 Sep 2025",
    score: 92,
    icon: "▤",
  },
  {
    title: "UI/UX Design Implementation",
    category: "UI/UX Design",
    date: "01 Sep 2025",
    score: 76,
    icon: "◉",
  },
  {
    title: "API Integration",
    category: "Full Stack",
    date: "28 Aug 2025",
    score: 88,
    icon: "↗",
  },
  {
    title: "Environment Setup",
    category: "DevOps",
    date: "20 Aug 2025",
    score: 95,
    icon: "⚙",
  },
];

const strengths = [
  "Clean and organized code structure",
  "Responsive design works on all screen sizes",
  "Good use of CSS Flexbox",
  "Smooth hover effects and transitions",
  "Mobile menu functionality implemented",
];

const improvements = [
  "Add proper ARIA labels for accessibility",
  "Improve keyboard navigation",
  "Optimize CSS for better performance",
  "Consider using semantic HTML elements",
  "Add active state for current page",
];

const scoreItems = [
  ["Functionality", "85%", "blue"],
  ["Code Quality", "90%", "green"],
  ["Responsive Design", "80%", "purple"],
  ["UI/UX", "80%", "orange"],
  ["Best Practices", "78%", "red"],
];

export default function AIFeedback() {
  const [activeTab, setActiveTab] = useState("AI Feedback");
  const [selected, setSelected] = useState(0);

  const goTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <span>Learn · Build · Grow</span>
          </div>
        </div>

        <nav className={styles.nav}>
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
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/assignments");
            }}
          >
            ▣ <span>My Assignments</span>
          </a>

          <a
            href="/student/submissions"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/submissions");
            }}
          >
            ➤ <span>My Submissions</span>
          </a>

          <a
            href="/student/progress"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/progress");
            }}
          >
            ↗ <span>Progress</span>
          </a>

          <a
            className={styles.active}
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
            <b>3</b>
          </a>
        </nav>

        <div className={styles.bottomNav}>
          <a
            href="/student/profile"
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/profile");
            }}
          >
            ♙ <span>Profile</span>
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
        </div>

        <div className={styles.sidebarCard}>
          <div className={styles.rocket}>🚀</div>

          <strong>Keep improving!</strong>

          <p>
            “Feedback is a gift. Use it to grow.”
          </p>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.search}>
            <span>⌕</span>

            <input
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.profile}>
            <button
              type="button"
              className={styles.bell}
              onClick={() =>
                goTo("/student/notifications")
              }
            >
              ●
            </button>

            <button
              type="button"
              className={styles.avatar}
              onClick={() =>
                goTo("/student/profile")
              }
            >
              SK
            </button>

            <div>
              <strong>Student</strong>
              <small>Student</small>
            </div>

            <span>⌄</span>
          </div>
        </header>

        <section className={styles.pageHeader}>
          <div className={styles.headerIcon}>✦</div>

          <div>
            <h1>AI Feedback</h1>

            <p>
              Get detailed AI-powered feedback on your
              submissions. Learn, improve, and do better.
            </p>
          </div>

          <div className={styles.tip}>
            💡{" "}
            <span>
              AI Feedback helps you understand your
              mistakes, learn better approaches,
              <br />
              and improve your skills step by step.
            </span>
          </div>
        </section>

        <div className={styles.workspace}>
          <aside className={styles.submissions}>
            <h3>My Submissions</h3>

            <div className={styles.submissionSearch}>
              ⌕ <span>Search submissions...</span>
            </div>

            {submissions.map((item, index) => (
              <button
                type="button"
                key={item.title}
                className={`${styles.submission} ${
                  selected === index
                    ? styles.selected
                    : ""
                }`}
                onClick={() =>
                  setSelected(index)
                }
              >
                <div
                  className={styles.submissionIcon}
                >
                  {item.icon}
                </div>

                <div
                  className={styles.submissionInfo}
                >
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                  <small>{item.date}</small>
                </div>

                <em
                  className={
                    item.score >= 85
                      ? styles.goodScore
                      : styles.averageScore
                  }
                >
                  {item.score}
                </em>
              </button>
            ))}
          </aside>

          <section className={styles.content}>
            <div className={styles.contentTop}>
              <div>
                <a
                  className={styles.back}
                  href="/student/submissions"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("/student/submissions");
                  }}
                >
                  ← Back to Submissions
                </a>

                <h2>Build a Responsive Navbar</h2>

                <p>Frontend Development</p>

                <span>
                  Create a responsive navigation bar
                  using HTML, CSS and JavaScript.
                </span>

                <div className={styles.tags}>
                  <i>HTML</i>
                  <i>CSS</i>
                  <i>JavaScript</i>
                  <i>Responsive Design</i>
                </div>
              </div>

              <div className={styles.scoreCard}>
                <div className={styles.scoreCircle}>
                  <strong>85</strong>
                  <span>/ 100</span>
                </div>

                <div>
                  <h3>Good Work!</h3>

                  <p>
                    Your code is clean and
                    <br />
                    well-structured. Keep it up!
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.tabs}>
              {[
                "AI Feedback",
                "Detailed Review",
                "Suggestions",
                "Similar Examples",
              ].map((tab) => (
                <button
                  type="button"
                  key={tab}
                  className={
                    activeTab === tab
                      ? styles.tabActive
                      : ""
                  }
                  onClick={() =>
                    setActiveTab(tab)
                  }
                >
                  {tab === "AI Feedback"
                    ? "✦"
                    : tab === "Detailed Review"
                    ? "▤"
                    : tab === "Suggestions"
                    ? "◎"
                    : "◉"}{" "}
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.feedbackGrid}>
              <div className={styles.feedbackMain}>
                <article className={styles.card}>
                  <h3>
                    ▣ &nbsp; Overall Feedback
                  </h3>

                  <p>
                    Great job! You have successfully
                    implemented a responsive navbar
                    with clean code structure. The
                    design works well across different
                    screen sizes. There are a few
                    minor improvements you can make
                    to enhance accessibility and code
                    organization.
                  </p>
                </article>

                <div className={styles.twoCards}>
                  <article
                    className={`${styles.card} ${styles.successCard}`}
                  >
                    <h3>
                      ✓ &nbsp; What You Did Well
                    </h3>

                    <ul>
                      {strengths.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>

                  <article
                    className={`${styles.card} ${styles.warningCard}`}
                  >
                    <h3>
                      ⚠ &nbsp; Areas for Improvement
                    </h3>

                    <ul>
                      {improvements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>

                <article
                  className={styles.commentsCard}
                >
                  <div className={styles.cardHeader}>
                    <h3>
                      &lt;/&gt; AI Comments
                      (Line by Line)
                    </h3>

                    <button
                      type="button"
                      onClick={() =>
                        goTo(
                          "/student/ai-feedback"
                        )
                      }
                    >
                      View Full Review
                    </button>
                  </div>

                  <div
                    className={styles.codeReview}
                  >
                    <div className={styles.code}>
                      <span>1</span>{" "}
                      &lt;nav className="navbar"&gt;
                      <br />

                      <span>2</span>{" "}
                      &nbsp;&nbsp;&lt;div
                      className="container"&gt;
                      <br />

                      <span>3</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;div
                      className="logo"&gt;MentorOS&lt;/div&gt;
                      <br />

                      <span>4</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul
                      className="nav-links"&gt;
                      <br />

                      <span>5</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;
                      &lt;a href="#"&gt;Home&lt;/a&gt;
                      &lt;/li&gt;
                      <br />

                      <span>6</span>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
                    </div>

                    <div className={styles.comments}>
                      <p>
                        ✓ <b>Good:</b> Semantic HTML
                        element used
                      </p>

                      <p>
                        ✓ <b>Good:</b> Clean class naming
                      </p>

                      <p>
                        💡 <b>Suggestion:</b> Consider
                        using an &lt;nav&gt; tag for
                        better semantics
                      </p>

                      <p>
                        ✓ <b>Good:</b> Proper list
                        structure
                      </p>

                      <p>
                        ✓ <b>Good:</b> Clear navigation
                        links
                      </p>

                      <p>
                        ⚠ <b>Consider:</b> Add active
                        state for current page
                      </p>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.download}
                    >
                      ⇩ &nbsp; Download Feedback (PDF)
                    </button>

                    <button
                      type="button"
                      className={styles.primary}
                      onClick={() =>
                        goTo(
                          "/student/submissions"
                        )
                      }
                    >
                      ↗ &nbsp; View Original Submission
                    </button>
                  </div>
                </article>
              </div>

              <aside className={styles.rightColumn}>
                <article className={styles.card}>
                  <h3>
                    ◉ &nbsp; Score Breakdown
                  </h3>

                  {scoreItems.map(
                    ([label, value, color]) => (
                      <div
                        className={styles.scoreRow}
                        key={label}
                      >
                        <div>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>

                        <div className={styles.bar}>
                          <i
                            className={
                              styles[
                                color as keyof typeof styles
                              ]
                            }
                            style={{
                              width: value,
                            }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </article>

                <article className={styles.card}>
                  <h3>
                    ✺ &nbsp; AI Model
                  </h3>

                  <strong>
                    Enhanced using GPT-4
                  </strong>

                  <p>
                    Analysis based on code quality,
                    best practices, functionality,
                    and design principles.
                  </p>
                </article>
              </aside>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}