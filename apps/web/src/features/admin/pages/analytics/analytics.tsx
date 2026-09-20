"use client";

import { useMemo, useState } from "react";
import styles from "./Analytics.module.css";

type Metric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

type Course = {
  name: string;
  students: number;
  completion: number;
  score: number;
};

const monthlyData = [
  { month: "Mar", students: 420, submissions: 280, completions: 210 },
  { month: "Apr", students: 470, submissions: 315, completions: 238 },
  { month: "May", students: 520, submissions: 350, completions: 276 },
  { month: "Jun", students: 565, submissions: 390, completions: 302 },
  { month: "Jul", students: 610, submissions: 425, completions: 338 },
  { month: "Aug", students: 648, submissions: 468, completions: 376 },
  { month: "Sep", students: 682, submissions: 510, completions: 414 },
];

const courses: Course[] = [
  {
    name: "Full Stack Development",
    students: 186,
    completion: 82,
    score: 91,
  },
  {
    name: "Backend Development",
    students: 142,
    completion: 76,
    score: 87,
  },
  {
    name: "Data Science",
    students: 118,
    completion: 71,
    score: 84,
  },
  {
    name: "UI/UX Design",
    students: 96,
    completion: 88,
    score: 92,
  },
  {
    name: "Cloud Computing",
    students: 84,
    completion: 68,
    score: 81,
  },
];

const metrics: Metric[] = [
  {
    label: "Total Students",
    value: "682",
    change: "+12.8%",
    trend: "up",
  },
  {
    label: "Avg. Completion",
    value: "78.4%",
    change: "+6.2%",
    trend: "up",
  },
  {
    label: "Avg. Performance",
    value: "87.6%",
    change: "+4.8%",
    trend: "up",
  },
  {
    label: "Active Mentors",
    value: "24",
    change: "+9.1%",
    trend: "up",
  },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function Analytics() {
  const [period, setPeriod] = useState("7 months");

  const [activeMetric, setActiveMetric] = useState<
    "students" | "submissions" | "completions"
  >("students");

  const maxValue = useMemo(() => {
    return Math.max(
      ...monthlyData.map((item) => item[activeMetric])
    );
  }, [activeMetric]);

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
              style={navStyle}
            >
              📋
              <span>Assignments</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/analytics")}
              style={activeNavStyle}
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

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>ADMINISTRATION</p>

            <h1>Analytics</h1>

            <p className={styles.subtitle}>
              Track platform performance, student growth and learning
              outcomes.
            </p>
          </div>

          <div className={styles.headerActions}>
            <select
              className={styles.periodSelect}
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option>7 months</option>
              <option>6 months</option>
              <option>3 months</option>
              <option>30 days</option>
            </select>

            <button
              type="button"
              className={styles.exportButton}
              onClick={() => {
                alert(
                  `Analytics report for ${period} is ready for export.`
                );
              }}
            >
              ↓ Export Report
            </button>
          </div>
        </div>

        {/* ================= METRICS ================= */}

        <div className={styles.metricsGrid}>
          {metrics.map((metric) => (
            <div
              className={styles.metricCard}
              key={metric.label}
            >
              <div className={styles.metricTop}>
                <span>{metric.label}</span>

                <div className={styles.metricIcon}>
                  {metric.label === "Total Students" && "👥"}
                  {metric.label === "Avg. Completion" && "✓"}
                  {metric.label === "Avg. Performance" && "◈"}
                  {metric.label === "Active Mentors" && "♙"}
                </div>
              </div>

              <div className={styles.metricBottom}>
                <strong>{metric.value}</strong>

                <span
                  className={
                    metric.trend === "up"
                      ? styles.positive
                      : styles.negative
                  }
                >
                  ↗ {metric.change}
                </span>
              </div>

              <small>vs. previous period</small>
            </div>
          ))}
        </div>

        {/* ================= CHART + PERFORMANCE ================= */}

        <div className={styles.mainGrid}>
          <section className={styles.chartCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  PLATFORM ACTIVITY
                </p>

                <h2>Growth &amp; Engagement</h2>

                <span>
                  Platform activity over the selected period
                </span>
              </div>

              <div className={styles.legend}>
                <button
                  type="button"
                  className={
                    activeMetric === "students"
                      ? styles.activeLegend
                      : ""
                  }
                  onClick={() =>
                    setActiveMetric("students")
                  }
                >
                  <i />
                  Students
                </button>

                <button
                  type="button"
                  className={
                    activeMetric === "submissions"
                      ? styles.activeLegend
                      : ""
                  }
                  onClick={() =>
                    setActiveMetric("submissions")
                  }
                >
                  <i />
                  Submissions
                </button>

                <button
                  type="button"
                  className={
                    activeMetric === "completions"
                      ? styles.activeLegend
                      : ""
                  }
                  onClick={() =>
                    setActiveMetric("completions")
                  }
                >
                  <i />
                  Completions
                </button>
              </div>
            </div>

            <div className={styles.chart}>
              <div className={styles.yAxis}>
                <span>700</span>
                <span>525</span>
                <span>350</span>
                <span>175</span>
                <span>0</span>
              </div>

              <div className={styles.chartArea}>
                <div className={styles.gridLines}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.bars}>
                  {monthlyData.map((item) => {
                    const height = Math.max(
                      8,
                      (item[activeMetric] / maxValue) * 100
                    );

                    return (
                      <div
                        className={styles.barColumn}
                        key={item.month}
                      >
                        <div className={styles.barValue}>
                          {item[activeMetric]}
                        </div>

                        <div className={styles.barTrack}>
                          <div
                            className={styles.bar}
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        </div>

                        <span>{item.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Performance */}

          <section className={styles.overviewCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  PLATFORM OVERVIEW
                </p>

                <h2>Performance</h2>
              </div>
            </div>

            <div className={styles.overviewList}>
              <div className={styles.overviewItem}>
                <div>
                  <span>Assignment Completion</span>
                  <strong>78.4%</strong>
                </div>

                <div className={styles.circularProgress}>
                  <div
                    style={
                      {
                        "--progress": "78.4%",
                      } as React.CSSProperties
                    }
                  >
                    78%
                  </div>
                </div>
              </div>

              <div className={styles.overviewItem}>
                <div>
                  <span>Submission Rate</span>
                  <strong>74.8%</strong>
                </div>

                <div className={styles.miniProgress}>
                  <div style={{ width: "74.8%" }} />
                </div>
              </div>

              <div className={styles.overviewItem}>
                <div>
                  <span>Mentor Engagement</span>
                  <strong>91.2%</strong>
                </div>

                <div className={styles.miniProgress}>
                  <div style={{ width: "91.2%" }} />
                </div>
              </div>

              <div className={styles.overviewItem}>
                <div>
                  <span>Student Retention</span>
                  <strong>88.6%</strong>
                </div>

                <div className={styles.miniProgress}>
                  <div style={{ width: "88.6%" }} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= COURSES + INSIGHTS ================= */}

        <div className={styles.bottomGrid}>
          <section className={styles.tableCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  COURSE PERFORMANCE
                </p>

                <h2>Top Performing Courses</h2>

                <span>
                  Student performance across active courses
                </span>
              </div>

              <button
                type="button"
                className={styles.viewAll}
                onClick={() => goTo("/admin/assignments")}
              >
                View All →
              </button>
            </div>

            <div className={styles.courseList}>
              {courses.map((course, index) => (
                <div
                  className={styles.courseRow}
                  key={course.name}
                >
                  <div className={styles.rank}>
                    {index + 1}
                  </div>

                  <div className={styles.courseName}>
                    <strong>{course.name}</strong>
                    <span>{course.students} students</span>
                  </div>

                  <div className={styles.courseCompletion}>
                    <div>
                      <span>Completion</span>
                      <strong>{course.completion}%</strong>
                    </div>

                    <div className={styles.miniProgress}>
                      <div
                        style={{
                          width: `${course.completion}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles.score}>
                    <span>Score</span>
                    <strong>{course.score}%</strong>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Insights */}

          <section className={styles.insightsCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  KEY INSIGHTS
                </p>

                <h2>Analytics Summary</h2>
              </div>
            </div>

            <div className={styles.insightList}>
              <div className={styles.insight}>
                <div className={styles.insightIcon}>↗</div>

                <div>
                  <strong>Student growth is strong</strong>

                  <p>
                    Student enrollment has increased by 12.8%
                    compared with the previous period.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>✓</div>

                <div>
                  <strong>
                    Completion rate improved
                  </strong>

                  <p>
                    Average assignment completion increased
                    by 6.2% across the platform.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>★</div>

                <div>
                  <strong>
                    Performance remains healthy
                  </strong>

                  <p>
                    Students are maintaining an average
                    performance score above 85%.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>!</div>

                <div>
                  <strong>
                    Cloud Computing needs attention
                  </strong>

                  <p>
                    Its completion rate is currently lower
                    than other active courses.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= FOOTER ================= */}

        <div className={styles.footerBanner}>
          <div>
            <div className={styles.bannerIcon}>✓</div>

            <div>
              <strong>Analytics are up to date</strong>

              <p>
                Data is refreshed regularly to help you make
                informed platform decisions.
              </p>
            </div>
          </div>

          <span>Last updated: Just now</span>
        </div>
      </main>
    </div>
  );
}