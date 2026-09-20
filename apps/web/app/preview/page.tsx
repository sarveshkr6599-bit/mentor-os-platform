"use client";

const sections = [
  {
    title: "Student Dashboard",
    emoji: "🎓",
    pages: [
      ["Dashboard", "/student"],
      ["Assignments", "/student/assignments"],
      ["Submissions", "/student/submissions"],
      ["Progress", "/student/progress"],
      ["AI Feedback", "/student/ai-feedback"],
      ["Learning Resources", "/student/learning-resources"],
      ["Notifications", "/student/notifications"],
      ["Profile", "/student/profile"],
      ["Settings", "/student/settings"],
    ],
  },
  {
    title: "Mentor Dashboard",
    emoji: "👨‍🏫",
    pages: [
      ["Dashboard", "/mentor"],
      ["Students", "/mentor/students"],
      ["Submissions", "/mentor/submissions"],
      ["Feedback", "/mentor/feedback"],
      ["AI Insights", "/mentor/ai-insights"],
    ],
  },
  {
    title: "Admin Dashboard",
    emoji: "🛡️",
    pages: [
      ["Dashboard", "/admin"],
      ["Students", "/admin/students"],
      ["Mentors", "/admin/mentors"],
      ["Assignments", "/admin/assignments"],
      ["Analytics", "/admin/analytics"],
      ["AI Reports", "/admin/ai-reports"],
    ],
  },
];

export default function PreviewPage() {
  const openPage = (path: string) => {
    window.location.href = path;
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#172033",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            margin: "0 0 8px",
            color: "#6366f1",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.14em",
          }}
        >
          MENTOROS • COMPLETE WORKSPACE
        </p>

        <h1
          style={{
            margin: "0",
            fontSize: "40px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          All Dashboard Pages
        </h1>

        <p
          style={{
            margin: "10px 0 35px",
            color: "#7b8497",
            fontSize: "15px",
          }}
        >
          Student, Mentor and Admin dashboards — all pages in one place.
        </p>

        {sections.map((section) => (
          <section key={section.title} style={{ marginBottom: "40px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <span style={{ fontSize: "26px" }}>{section.emoji}</span>

              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  {section.title}
                </h2>

                <p
                  style={{
                    margin: "4px 0 0",
                    color: "#8b94a5",
                    fontSize: "12px",
                  }}
                >
                  {section.pages.length} pages
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
              }}
            >
              {section.pages.map(([name, path], index) => (
                <div
                  key={path}
                  style={{
                    background: "#fff",
                    border: "1px solid #e2e6ef",
                    borderRadius: "15px",
                    padding: "20px",
                    boxShadow:
                      "0 4px 18px rgba(15, 23, 42, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "9px",
                      background: "#eef2ff",
                      color: "#4f46e5",
                      fontWeight: 800,
                      marginBottom: "14px",
                    }}
                  >
                    {index + 1}
                  </div>

                  <h3
                    style={{
                      margin: "0 0 7px",
                      fontSize: "17px",
                    }}
                  >
                    {name}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 16px",
                      color: "#98a1b2",
                      fontSize: "11px",
                    }}
                  >
                    {path}
                  </p>

                  <button
                    onClick={() => openPage(path)}
                    style={{
                      width: "100%",
                      height: "40px",
                      border: 0,
                      borderRadius: "8px",
                      background: "#2563eb",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Open Page →
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}