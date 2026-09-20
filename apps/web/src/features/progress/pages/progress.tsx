"use client";

import React from "react";
import styles from "./Progress.module.css";

const subjects = [
  { name: "Frontend Development", value: 85 },
  { name: "Backend Development", value: 72 },
  { name: "Database", value: 68 },
  { name: "UI/UX Design", value: 90 },
  { name: "API Integration", value: 60 },
];

const activities = [
  {
    icon: "✓",
    type: "success",
    title: "Submitted Assignment",
    text: "UI/UX Design Implementation",
    time: "2 hours ago",
  },
  {
    icon: "▤",
    type: "blue",
    title: "Completed Assignment",
    text: "Design Database Schema",
    time: "1 day ago",
  },
  {
    icon: "▣",
    type: "purple",
    title: "Received AI Feedback",
    text: "Good! Your code structure is clean.",
    time: "2 days ago",
  },
  {
    icon: "✓",
    type: "success",
    title: "Submitted Assignment",
    text: "Create REST APIs",
    time: "3 days ago",
  },
  {
    icon: "★",
    type: "orange",
    title: "Achieved Milestone",
    text: "Completed 5 assignments!",
    time: "5 days ago",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Progress() {
  return (
    <div className={styles.app}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>🎓</div>

          <div>
            <div className={styles.brandName}>MentorOS</div>
            <div className={styles.brandTag}>
              Learn · Build · Grow
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          <a
            href="/student"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student");
            }}
          >
            ⌂ <span>Dashboard</span>
          </a>

          <a
            href="/student/assignments"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/assignments");
            }}
          >
            ▣ <span>My Assignments</span>
          </a>

          <a
            href="/student/submissions"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/submissions");
            }}
          >
            ➤ <span>My Submissions</span>
          </a>

          <a
            href="/student/progress"
            className={`${styles.navItem} ${styles.active}`}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/progress");
            }}
          >
            ↗ <span>Progress</span>
          </a>

          <a
            href="/student/ai-feedback"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/ai-feedback");
            }}
          >
            ✦ <span>AI Feedback</span>
          </a>

          <a
            href="/student/learning-resources"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/learning-resources");
            }}
          >
            ▤ <span>Learning Resources</span>
          </a>

          <a
            href="/student/notifications"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/notifications");
            }}
          >
            ♢ <span>Notifications</span>
            <b className={styles.notification}>3</b>
          </a>
        </nav>

        <div className={styles.navBottom}>
          <a
            href="/student/profile"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/profile");
            }}
          >
            ♙ <span>Profile</span>
          </a>

          <a
            href="/student/settings"
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/settings");
            }}
          >
            ⚙ <span>Settings</span>
          </a>
        </div>

        <div className={styles.sidebarMotivation}>
          <div className={styles.rocket}>🚀</div>

          <strong>Keep Going!</strong>

          <p>
            “Progress today creates opportunities tomorrow.”
          </p>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        {/* TOP BAR */}
        <header className={styles.topbar}>
          <div className={styles.search}>
            <span>⌕</span>

            <input
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.topRight}>
            <button
              className={styles.iconButton}
              onClick={() =>
                goTo("/student/notifications")
              }
            >
              ♟
            </button>

            <div
              className={styles.userAvatar}
              onClick={() =>
                goTo("/student/profile")
              }
              style={{ cursor: "pointer" }}
            >
              SK
            </div>

            <div
              className={styles.userInfo}
              onClick={() =>
                goTo("/student/profile")
              }
              style={{ cursor: "pointer" }}
            >
              <strong>Student</strong>
              <span>Student</span>
            </div>

            <span className={styles.chevron}>⌄</span>
          </div>
        </header>

        {/* PAGE HEADER */}
        <section className={styles.pageHeader}>
          <div className={styles.titleGroup}>
            <div className={styles.pageIcon}>▥</div>

            <div>
              <div className={styles.eyebrow}>
                STUDENT WORKSPACE
              </div>

              <h1>My Progress</h1>

              <p>
                Track your learning journey, see your growth,
                and stay motivated.
              </p>
            </div>
          </div>

          <button className={styles.periodButton}>
            ◫ &nbsp; This Month &nbsp;⌄
          </button>
        </section>

        {/* DASHBOARD GRID */}
        <div className={styles.dashboardGrid}>
          <section className={styles.content}>
            {/* STATS */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div
                  className={`${styles.statIcon} ${styles.blueIcon}`}
                >
                  ▥
                </div>

                <div>
                  <strong>78%</strong>
                  <span>Overall Progress</span>
                  <small>↑ +12% from last month</small>
                </div>
              </div>

              <div className={styles.statCard}>
                <div
                  className={`${styles.statIcon} ${styles.greenIcon}`}
                >
                  ✓
                </div>

                <div>
                  <strong>6</strong>
                  <span>Assignments Completed</span>
                  <small>↑ 2 this month</small>
                </div>
              </div>

              <div className={styles.statCard}>
                <div
                  className={`${styles.statIcon} ${styles.orangeIcon}`}
                >
                  ◷
                </div>

                <div>
                  <strong>12h</strong>
                  <span>Learning Hours</span>
                  <small>↑ +3h from last month</small>
                </div>
              </div>

              <div className={styles.statCard}>
                <div
                  className={`${styles.statIcon} ${styles.yellowIcon}`}
                >
                  ★
                </div>

                <div>
                  <strong>4.2</strong>
                  <span>AI Feedback Score</span>
                  <small>Good Performance</small>
                </div>
              </div>
            </div>

            {/* OVERVIEW + SUBJECT */}
            <div className={styles.middleGrid}>
              {/* GRAPH */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h2>Progress Overview</h2>
                    <p>Your learning progress over time</p>
                  </div>

                  <button className={styles.smallSelect}>
                    Overall Progress ⌄
                  </button>
                </div>

                <div className={styles.chart}>
                  <div className={styles.yAxis}>
                    <span>100%</span>
                    <span>75%</span>
                    <span>50%</span>
                    <span>25%</span>
                    <span>0%</span>
                  </div>

                  <div className={styles.chartArea}>
                    <div className={styles.gridLine} />
                    <div className={styles.gridLine} />
                    <div className={styles.gridLine} />
                    <div className={styles.gridLine} />

                    <svg
                      className={styles.svgChart}
                      viewBox="0 0 700 220"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="progressFill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#2477ff"
                            stopOpacity="0.25"
                          />

                          <stop
                            offset="100%"
                            stopColor="#2477ff"
                            stopOpacity="0.02"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 185 L85 160 L170 145 L255 112 L340 108 L425 78 L510 66 L595 38 L680 20 L680 220 L0 220 Z"
                        fill="url(#progressFill)"
                      />

                      <polyline
                        points="0,185 85,160 170,145 255,112 340,108 425,78 510,66 595,38 680,20"
                        fill="none"
                        stroke="#2477ff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {[
                        [0, 185],
                        [85, 160],
                        [170, 145],
                        [255, 112],
                        [340, 108],
                        [425, 78],
                        [510, 66],
                        [595, 38],
                        [680, 20],
                      ].map(([x, y], index) => (
                        <circle
                          key={index}
                          cx={x}
                          cy={y}
                          r="5"
                          fill="#ffffff"
                          stroke="#2477ff"
                          strokeWidth="3"
                        />
                      ))}
                    </svg>

                    <div className={styles.chartMonths}>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                    </div>

                    <div className={styles.chartBadge}>
                      78%
                    </div>
                  </div>
                </div>
              </div>

              {/* SUBJECT PROGRESS */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h2>Subject-wise Progress</h2>
                  </div>
                </div>

                <div className={styles.subjectList}>
                  {subjects.map((subject) => (
                    <div
                      className={styles.subject}
                      key={subject.name}
                    >
                      <div className={styles.subjectTop}>
                        <span>{subject.name}</span>
                        <strong>{subject.value}%</strong>
                      </div>

                      <div className={styles.subjectTrack}>
                        <div
                          className={styles.subjectFill}
                          style={{
                            width: `${subject.value}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ACTIVITY + INSIGHTS */}
            <div className={styles.bottomGrid}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h2>◷ &nbsp;Recent Activity</h2>
                  </div>

                  <button
                    className={styles.viewAll}
                    onClick={() =>
                      goTo("/student/notifications")
                    }
                  >
                    View All
                  </button>
                </div>

                <div className={styles.activityList}>
                  {activities.map(
                    (activity, index) => (
                      <div
                        className={styles.activity}
                        key={index}
                      >
                        <div
                          className={`${styles.activityIcon} ${
                            styles[activity.type]
                          }`}
                        >
                          {activity.icon}
                        </div>

                        <div
                          className={
                            styles.activityText
                          }
                        >
                          <strong>
                            {activity.title}
                          </strong>

                          <span>
                            {activity.text}
                          </span>
                        </div>

                        <time>
                          {activity.time}
                        </time>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h2>
                    💡 &nbsp;Learning Insights
                  </h2>
                </div>

                <div className={styles.insights}>
                  <div className={styles.insight}>
                    <div
                      className={
                        styles.insightIcon
                      }
                    >
                      ↗
                    </div>

                    <div>
                      <strong>
                        You’re 12% ahead
                      </strong>

                      <p>
                        You’re progressing faster
                        than last month.
                      </p>
                    </div>
                  </div>

                  <div className={styles.insight}>
                    <div
                      className={
                        styles.insightIcon
                      }
                    >
                      ◷
                    </div>

                    <div>
                      <strong>
                        Most active on Tuesdays
                      </strong>

                      <p>
                        You submit more work on
                        Tuesdays.
                      </p>
                    </div>
                  </div>

                  <div className={styles.insight}>
                    <div
                      className={
                        styles.insightIcon
                      }
                    >
                      ▥
                    </div>

                    <div>
                      <strong>
                        Frontend is your strongest
                        subject
                      </strong>

                      <p>
                        You have 85% completion rate
                        in Frontend.
                      </p>
                    </div>
                  </div>

                  <div className={styles.nextStep}>
                    <div className={styles.nextIcon}>
                      ★
                    </div>

                    <div>
                      <strong>
                        Recommended Next Steps
                      </strong>

                      <span>
                        Start Next Assignment
                      </span>

                      <small>
                        API Integration · Due: 15
                        Sep 2026
                      </small>
                    </div>

                    <button
                      onClick={() =>
                        goTo(
                          "/student/assignments"
                        )
                      }
                    >
                      View Assignment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDEBAR */}
          <aside className={styles.rightSidebar}>
            {/* PROGRESS CARD */}
            <div
              className={`${styles.sideCard} ${styles.greatCard}`}
            >
              <div>
                <h2>
                  You’re
                  <br />
                  Making Great
                  <br />
                  Progress!
                </h2>

                <p>
                  Keep learning, keep building.
                  You’re closer to your goals.
                </p>
              </div>

              <div className={styles.trophy}>
                🏆
              </div>
            </div>

            {/* STREAK */}
            <div className={styles.sideCard}>
              <h3>🔥 &nbsp;Your Streak</h3>

              <div className={styles.streakBox}>
                <div className={styles.fire}>
                  🔥
                </div>

                <div>
                  <strong>12 Days</strong>
                  <span>Learning Streak</span>

                  <small>
                    Keep it up! Consistency leads to
                    mastery.
                  </small>
                </div>
              </div>
            </div>

            {/* GOALS */}
            <div className={styles.sideCard}>
              <div className={styles.sideHeader}>
                <h3>🎯 &nbsp;Upcoming Goals</h3>

                <button
                  onClick={() =>
                    goTo("/student/assignments")
                  }
                >
                  View All
                </button>
              </div>

              <div className={styles.goals}>
                <label>
                  <span
                    className={styles.circle}
                  />
                  Complete 2 more assignments
                </label>

                <label>
                  <span
                    className={styles.circle}
                  />
                  Maintain 80%+ progress
                </label>

                <label>
                  <span
                    className={styles.circle}
                  />
                  Submit final project
                </label>

                <label>
                  <span
                    className={styles.circle}
                  />
                  Get 4.5+ AI feedback score
                </label>
              </div>
            </div>

            {/* QUOTE */}
            <div className={styles.quoteCard}>
              <div className={styles.quoteMark}>
                “
              </div>

              <p>
                Small steps every day
                <br />
                lead to big results.
              </p>

              <span>— MentorOS</span>

              <div
                className={
                  styles.mountains
                }
              >
                ⌁⌁⌁
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}