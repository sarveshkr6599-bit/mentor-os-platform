"use client";

import { useState } from "react";
import styles from "./AI-Reports.module.css";

type Report = {
  id: number;
  title: string;
  type: string;
  generated: string;
  score: number;
  status: "Ready" | "Processing";
};

const reports: Report[] = [
  {
    id: 1,
    title: "Student Performance Report",
    type: "Performance",
    generated: "Today, 02:30 PM",
    score: 94,
    status: "Ready",
  },
  {
    id: 2,
    title: "Mentor Effectiveness Report",
    type: "Mentor Insights",
    generated: "Today, 01:15 PM",
    score: 91,
    status: "Ready",
  },
  {
    id: 3,
    title: "Assignment Risk Analysis",
    type: "Risk Analysis",
    generated: "Today, 11:45 AM",
    score: 88,
    status: "Ready",
  },
  {
    id: 4,
    title: "Learning Engagement Report",
    type: "Engagement",
    generated: "Yesterday, 05:20 PM",
    score: 96,
    status: "Ready",
  },
  {
    id: 5,
    title: "At-Risk Students Report",
    type: "Risk Analysis",
    generated: "Yesterday, 03:10 PM",
    score: 89,
    status: "Ready",
  },
];

const aiMetrics = [
  { label: "Performance Insights", value: 94 },
  { label: "Risk Detection", value: 91 },
  { label: "Recommendation Quality", value: 96 },
  { label: "Trend Prediction", value: 88 },
];

const chartData = [
  { month: "Mar", value: 72 },
  { month: "Apr", value: 76 },
  { month: "May", value: 79 },
  { month: "Jun", value: 83 },
  { month: "Jul", value: 86 },
  { month: "Aug", value: 90 },
  { month: "Sep", value: 94 },
];

const goTo = (path: string) => {
  window.location.href = path;
};

export default function AIReports() {
  const [period, setPeriod] = useState("7 months");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

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
              style={navStyle}
            >
              📊
              <span>Analytics</span>
            </button>

            <button
              type="button"
              onClick={() => goTo("/admin/ai-reports")}
              style={activeNavStyle}
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

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>ADMINISTRATION</p>

            <h1>AI Reports</h1>

            <p className={styles.subtitle}>
              AI-powered insights to understand performance, risks
              and learning trends.
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
              onClick={() =>
                alert(
                  `AI Report for ${period} is ready for export.`
                )
              }
            >
              ↓ Export Report
            </button>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span>AI Reports Generated</span>
              <div className={styles.statIcon}>✦</div>
            </div>

            <div className={styles.statValue}>
              <strong>128</strong>
              <span className={styles.positive}>↗ 18.4%</span>
            </div>

            <small>vs. previous period</small>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span>Students Analyzed</span>
              <div className={styles.statIcon}>👥</div>
            </div>

            <div className={styles.statValue}>
              <strong>682</strong>
              <span className={styles.positive}>↗ 12.8%</span>
            </div>

            <small>platform-wide coverage</small>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span>Risks Identified</span>
              <div className={styles.statIcon}>⚠</div>
            </div>

            <div className={styles.statValue}>
              <strong>47</strong>
              <span className={styles.positive}>↘ 8.2%</span>
            </div>

            <small>compared with last period</small>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statTop}>
              <span>AI Accuracy</span>
              <div className={styles.statIcon}>◎</div>
            </div>

            <div className={styles.statValue}>
              <strong>92%</strong>
              <span className={styles.positive}>↗ 4.6%</span>
            </div>

            <small>average prediction accuracy</small>
          </div>
        </div>

        {/* ================= CHART + AI ENGINE ================= */}

        <div className={styles.mainGrid}>
          <section
            className={`${styles.card} ${styles.chartCard}`}
          >
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  AI PERFORMANCE
                </p>

                <h2>AI Insight Accuracy</h2>

                <p>
                  Accuracy trend across AI-generated platform
                  insights
                </p>
              </div>
            </div>

            <div className={styles.chart}>
              {chartData.map((item) => {
                const height = Math.max(
                  10,
                  (item.value / 100) * 100
                );

                return (
                  <div
                    className={styles.chartColumn}
                    key={item.month}
                  >
                    <span className={styles.chartValue}>
                      {item.value}%
                    </span>

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
          </section>

          {/* AI Engine */}

          <section
            className={`${styles.card} ${styles.aiCard}`}
          >
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  AI ENGINE
                </p>

                <h2>Model Health</h2>

                <p>Current AI system performance</p>
              </div>
            </div>

            <div className={styles.aiScore}>
              <strong>92%</strong>
              <span>Overall</span>
            </div>

            <div className={styles.aiList}>
              {aiMetrics.map((metric) => (
                <div
                  className={styles.aiItem}
                  key={metric.label}
                >
                  <div>
                    <div className={styles.aiIcon}>✦</div>

                    <div>
                      <strong>{metric.label}</strong>
                      <small>AI confidence score</small>
                    </div>
                  </div>

                  <span className={styles.aiPercent}>
                    {metric.value}%
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ================= REPORTS + INSIGHTS ================= */}

        <div className={styles.bottomGrid}>
          <section className={styles.reportCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  GENERATED REPORTS
                </p>

                <h2>Recent AI Reports</h2>

                <p>
                  Latest reports generated by the AI engine
                </p>
              </div>
            </div>

            <div className={styles.reportList}>
              {reports.map((report) => (
                <div
                  className={styles.reportRow}
                  key={report.id}
                >
                  <div className={styles.reportIcon}>✦</div>

                  <div className={styles.reportName}>
                    <strong>{report.title}</strong>

                    <span>
                      {report.type} · {report.generated}
                    </span>
                  </div>

                  <span className={styles.reportStatus}>
                    {report.status}
                  </span>

                  <span className={styles.reportScore}>
                    {report.score}%
                  </span>

                  <button
                    type="button"
                    className={styles.viewButton}
                    onClick={() =>
                      setSelectedReport(report)
                    }
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Key Findings */}

          <section className={styles.insightsCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.cardEyebrow}>
                  AI INSIGHTS
                </p>

                <h2>Key Findings</h2>
              </div>
            </div>

            <div className={styles.insightList}>
              <div className={styles.insight}>
                <div className={styles.insightIcon}>↗</div>

                <div>
                  <strong>
                    Overall performance improved
                  </strong>

                  <p>
                    AI analysis shows a positive trend in
                    student performance across the platform.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>⚠</div>

                <div>
                  <strong>
                    47 students need attention
                  </strong>

                  <p>
                    The AI engine identified students showing
                    signs of reduced engagement or progress.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>★</div>

                <div>
                  <strong>
                    Mentor engagement is strong
                  </strong>

                  <p>
                    Mentor interaction remains above the
                    platform target and is supporting better
                    completion rates.
                  </p>
                </div>
              </div>

              <div className={styles.insight}>
                <div className={styles.insightIcon}>!</div>

                <div>
                  <strong>
                    Assignment risk detected
                  </strong>

                  <p>
                    Several upcoming assignments may require
                    additional mentor intervention.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ================= BANNER ================= */}

        <div className={styles.banner}>
          <div className={styles.bannerLeft}>
            <div className={styles.bannerIcon}>✦</div>

            <div>
              <strong>AI analysis is up to date</strong>

              <p>
                Reports and insights are refreshed automatically
                as new platform data becomes available.
              </p>
            </div>
          </div>

          <span>Last updated: Just now</span>
        </div>

        {/* ================= MODAL ================= */}

        {selectedReport && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedReport(null)}
          >
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <div>
                  <p>AI REPORT</p>

                  <h2>{selectedReport.title}</h2>
                </div>

                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() =>
                    setSelectedReport(null)
                  }
                >
                  ×
                </button>
              </div>

              <div className={styles.modalBody}>
                <p>
                  This AI-generated report has an overall
                  confidence score of{" "}
                  <strong>
                    {selectedReport.score}%
                  </strong>
                  .
                </p>

                <p>
                  Report type:{" "}
                  <strong>{selectedReport.type}</strong>
                </p>

                <p>
                  Generated:{" "}
                  <strong>
                    {selectedReport.generated}
                  </strong>
                </p>

                <p>
                  The report summarizes platform patterns,
                  identifies important signals and highlights
                  areas that may require administrative attention.
                </p>
              </div>

              <div className={styles.modalFooter}>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() =>
                    setSelectedReport(null)
                  }
                >
                  Close
                </button>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => {
                    alert(
                      `Exporting: ${selectedReport.title}`
                    );
                  }}
                >
                  Export Report
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}