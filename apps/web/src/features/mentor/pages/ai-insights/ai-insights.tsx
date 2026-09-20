"use client";

import { useMemo, useState } from "react";
import styles from "./AI-Insights.module.css";

type Insight = {
  id: number;
  student: string;
  initials: string;
  risk: "High Risk" | "Medium Risk" | "Low Risk";
  score: number;
  attendance: number;
  trend: "Improving" | "Stable" | "Declining";
  insight: string;
  recommendation: string;
};

const insights: Insight[] = [
  {
    id: 1,
    student: "Rahul Kumar",
    initials: "RK",
    risk: "Low Risk",
    score: 86,
    attendance: 94,
    trend: "Improving",
    insight:
      "Strong academic performance with consistent assignment completion.",
    recommendation:
      "Continue current learning plan and introduce advanced tasks.",
  },
  {
    id: 2,
    student: "Priya Singh",
    initials: "PS",
    risk: "Medium Risk",
    score: 72,
    attendance: 81,
    trend: "Stable",
    insight:
      "Performance is stable but recent assignment activity has decreased.",
    recommendation:
      "Schedule a short mentor check-in and review pending work.",
  },
  {
    id: 3,
    student: "Aman Verma",
    initials: "AV",
    risk: "High Risk",
    score: 58,
    attendance: 67,
    trend: "Declining",
    insight:
      "Lower attendance and declining scores indicate possible learning gaps.",
    recommendation:
      "Arrange a one-to-one session and create a focused recovery plan.",
  },
  {
    id: 4,
    student: "Simran Gupta",
    initials: "SG",
    risk: "Low Risk",
    score: 93,
    attendance: 97,
    trend: "Improving",
    insight:
      "Excellent performance with strong engagement across learning activities.",
    recommendation:
      "Provide advanced challenges and leadership opportunities.",
  },
  {
    id: 5,
    student: "Aditya Mishra",
    initials: "AM",
    risk: "Medium Risk",
    score: 69,
    attendance: 76,
    trend: "Stable",
    insight:
      "Student is progressing steadily but needs support in technical topics.",
    recommendation:
      "Recommend additional practice resources and weekly review.",
  },
  {
    id: 6,
    student: "Neha Kumari",
    initials: "NK",
    risk: "High Risk",
    score: 52,
    attendance: 61,
    trend: "Declining",
    insight:
      "Reduced engagement and assignment completion may affect progress.",
    recommendation:
      "Contact student and create an immediate intervention plan.",
  },
];

export default function AIInsights() {
  const [selected, setSelected] = useState<Insight | null>(null);
  const [riskFilter, setRiskFilter] = useState<
    "All" | "High Risk" | "Progress"
  >("All");

  const highRisk = insights.filter(
    (item) => item.risk === "High Risk"
  ).length;

  const mediumRisk = insights.filter(
    (item) => item.risk === "Medium Risk"
  ).length;

  const lowRisk = insights.filter(
    (item) => item.risk === "Low Risk"
  ).length;

  const averageScore = Math.round(
    insights.reduce(
      (sum, item) => sum + item.score,
      0
    ) / insights.length
  );

  const filteredInsights = useMemo(() => {
    if (riskFilter === "High Risk") {
      return insights.filter(
        (item) => item.risk === "High Risk"
      );
    }

    if (riskFilter === "Progress") {
      return insights.filter(
        (item) =>
          item.trend === "Declining" ||
          item.trend === "Stable"
      );
    }

    return insights;
  }, [riskFilter]);

  const runAnalysis = () => {
    alert(
      "AI Analysis completed successfully. Student insights are up to date."
    );
  };

  const viewStudents = () => {
    window.location.href = "/mentor/students";
  };

  const reviewProgress = () => {
    setRiskFilter("Progress");
  };

  const clearFilter = () => {
    setRiskFilter("All");
  };

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}

      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>
            MENTOROS • MENTOR WORKSPACE
          </div>

          <h1>AI Insights</h1>

          <p>
            AI-powered insights to help you identify
            student risks and take better mentoring
            actions.
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
            className={`${styles.statIcon} ${styles.red}`}
          >
            !
          </div>

          <div>
            <span>High Risk Students</span>
            <strong>{highRisk}</strong>
          </div>

          <small className={styles.redText}>
            Needs attention
          </small>
        </div>

        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.orange}`}
          >
            ◷
          </div>

          <div>
            <span>Medium Risk</span>
            <strong>{mediumRisk}</strong>
          </div>

          <small className={styles.orangeText}>
            Monitor
          </small>
        </div>

        <div className={styles.statCard}>
          <div
            className={`${styles.statIcon} ${styles.green}`}
          >
            ✓
          </div>

          <div>
            <span>Low Risk Students</span>
            <strong>{lowRisk}</strong>
          </div>

          <small className={styles.greenText}>
            On track
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

      {/* ================= CONTENT ================= */}

      <section className={styles.contentCard}>
        <div className={styles.sectionHeader}>
          <div>
            <div className={styles.sectionLabel}>
              AI-POWERED ANALYSIS
            </div>

            <h2>
              Student Risk &amp; Performance Insights
            </h2>

            <p>
              Review AI-generated signals and
              recommended mentor actions.
            </p>
          </div>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={runAnalysis}
          >
            Run AI Analysis
          </button>
        </div>

        {/* ================= ACTIVE FILTER ================= */}

        {riskFilter !== "All" && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              marginBottom: "14px",
              padding: "10px 14px",
              borderRadius: "8px",
              background: "#eef5ff",
              border: "1px solid #d7e6fb",
              color: "#286fd8",
              fontSize: "13px",
            }}
          >
            <strong>
              {riskFilter === "High Risk"
                ? "Showing High Risk Students"
                : "Showing Students Needing Progress Review"}
            </strong>

            <button
              type="button"
              onClick={clearFilter}
              style={{
                border: "0",
                background: "transparent",
                color: "#2879ef",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* ================= NOTICE ================= */}

        <div className={styles.notice}>
          <div className={styles.noticeIcon}>
            ✦
          </div>

          <div>
            <strong>AI Insight Summary</strong>

            <p>
              AI has identified {highRisk} high-risk
              students who may benefit from immediate
              mentor intervention.
            </p>
          </div>
        </div>

        {/* ================= TABLE ================= */}

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>STUDENT</th>
                <th>RISK LEVEL</th>
                <th>SCORE</th>
                <th>ATTENDANCE</th>
                <th>TREND</th>
                <th>AI INSIGHT</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredInsights.map((item) => (
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

                  <td>
                    <span
                      className={`${styles.riskBadge} ${
                        item.risk === "High Risk"
                          ? styles.highRisk
                          : item.risk === "Medium Risk"
                          ? styles.mediumRisk
                          : styles.lowRisk
                      }`}
                    >
                      {item.risk}
                    </span>
                  </td>

                  <td>
                    <strong>
                      {item.score}%
                    </strong>
                  </td>

                  <td>
                    {item.attendance}%
                  </td>

                  <td>
                    <span
                      className={`${styles.trend} ${
                        item.trend === "Improving"
                          ? styles.improving
                          : item.trend === "Declining"
                          ? styles.declining
                          : styles.stable
                      }`}
                    >
                      {item.trend}
                    </span>
                  </td>

                  <td>
                    <div
                      className={
                        styles.insightText
                      }
                    >
                      {item.insight}
                    </div>
                  </td>

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
                      View Insight
                    </button>
                  </td>
                </tr>
              ))}

              {filteredInsights.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    style={{
                      textAlign: "center",
                      padding: "30px",
                    }}
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= BOTTOM ================= */}

      <section className={styles.bottomGrid}>
        <div className={styles.insightCard}>
          <div className={styles.bigIcon}>
            ✦
          </div>

          <div>
            <div className={styles.sectionLabel}>
              AI RECOMMENDATION
            </div>

            <h3>
              Focus on students showing declining
              engagement.
            </h3>

            <p>
              Early mentor intervention can help
              identify learning gaps, improve
              engagement, and keep students on track.
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
              onClick={() =>
                setRiskFilter("High Risk")
              }
            >
              High Risk Students
            </button>

            <button
              type="button"
              onClick={viewStudents}
            >
              View Students
            </button>

            <button
              type="button"
              onClick={reviewProgress}
            >
              Review Progress
            </button>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}

      {selected && (
        <div
          className={styles.modalOverlay}
          onClick={() =>
            setSelected(null)
          }
        >
          <div
            className={styles.modal}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className={styles.modalHeader}>
              <div>
                <div
                  className={
                    styles.sectionLabel
                  }
                >
                  AI STUDENT INSIGHT
                </div>

                <h2>
                  {selected.student}
                </h2>
              </div>

              <button
                type="button"
                className={
                  styles.closeButton
                }
                onClick={() =>
                  setSelected(null)
                }
              >
                ×
              </button>
            </div>

            <div className={styles.modalGrid}>
              <div>
                <span>Risk Level</span>
                <strong>
                  {selected.risk}
                </strong>
              </div>

              <div>
                <span>Score</span>
                <strong>
                  {selected.score}%
                </strong>
              </div>

              <div>
                <span>Attendance</span>
                <strong>
                  {selected.attendance}%
                </strong>
              </div>

              <div>
                <span>Trend</span>
                <strong>
                  {selected.trend}
                </strong>
              </div>
            </div>

            <div className={styles.detailBox}>
              <label>AI Insight</label>

              <p>
                {selected.insight}
              </p>
            </div>

            <div className={styles.detailBox}>
              <label>
                Recommended Mentor Action
              </label>

              <p>
                {selected.recommendation}
              </p>
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
                Close
              </button>

              <button
                type="button"
                className={
                  styles.primaryButton
                }
                onClick={() => {
                  alert(
                    "Mentor action recorded successfully."
                  );
                  setSelected(null);
                }}
              >
                Take Action
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}