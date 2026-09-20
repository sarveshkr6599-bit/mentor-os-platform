"use client";

import { useState } from "react";

const pages = [
  { name: "Dashboard", path: "/student", icon: "🏠" },
  { name: "Assignments", path: "/student/assignments", icon: "📚" },
  { name: "Submissions", path: "/student/submissions", icon: "📤" },
  { name: "Progress", path: "/student/progress", icon: "📊" },
  { name: "AI Feedback", path: "/student/ai-feedback", icon: "🤖" },
  {
    name: "Learning Resources",
    path: "/student/learning-resources",
    icon: "📖",
  },
  { name: "Notifications", path: "/student/notifications", icon: "🔔" },
  { name: "Profile", path: "/student/profile", icon: "👤" },
  { name: "Settings", path: "/student/settings", icon: "⚙️" },
];

export default function StudentPreview() {
  const [selected, setSelected] = useState(pages[0]);

  const openPage = (path: string) => {
    window.location.href = path;
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
        fontFamily:
          'Inter, "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: "30px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "#eaf2ff",
              color: "#2563eb",
              fontSize: "12px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            STUDENT DASHBOARD
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: 800,
              color: "#111827",
            }}
          >
            Student Pages Preview
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#667085",
              fontSize: "15px",
            }}
          >
            Student ke saare pages ek jagah se open aur check karein.
          </p>
        </div>

        {/* PAGE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {pages.map((page) => {
            const isSelected = selected.path === page.path;

            return (
              <button
                key={page.path}
                onClick={() => setSelected(page)}
                style={{
                  border: isSelected
                    ? "2px solid #2563eb"
                    : "1px solid #e2e8f0",
                  background: isSelected ? "#eff6ff" : "#ffffff",
                  borderRadius: "14px",
                  padding: "20px",
                  cursor: "pointer",
                  textAlign: "left",
                  boxShadow: isSelected
                    ? "0 8px 24px rgba(37,99,235,0.12)"
                    : "0 4px 14px rgba(15,23,42,0.04)",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  {page.icon}
                </div>

                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#172033",
                  }}
                >
                  {page.name}
                </div>

                <div
                  style={{
                    marginTop: "6px",
                    fontSize: "12px",
                    color: "#667085",
                  }}
                >
                  {page.path}
                </div>
              </button>
            );
          })}
        </div>

        {/* SELECTED PAGE */}
        <div
          style={{
            marginTop: "28px",
            padding: "24px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            boxShadow:
              "0 8px 25px rgba(15,23,42,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#667085",
                  marginBottom: "5px",
                  fontWeight: 700,
                }}
              >
                SELECTED PAGE
              </div>

              <h2
                style={{
                  margin: 0,
                  fontSize: "24px",
                  color: "#111827",
                }}
              >
                {selected.icon} {selected.name}
              </h2>

              <p
                style={{
                  margin: "7px 0 0",
                  color: "#667085",
                  fontSize: "13px",
                }}
              >
                {selected.path}
              </p>
            </div>

            <button
              onClick={() => openPage(selected.path)}
              style={{
                border: 0,
                borderRadius: "10px",
                padding: "13px 22px",
                background:
                  "linear-gradient(135deg, #287cf4, #1765e7)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "0 8px 18px rgba(37,99,235,0.22)",
              }}
            >
              Open {selected.name} →
            </button>
          </div>
        </div>

        {/* RESPONSIVE CHECK INFO */}
        <div
          style={{
            marginTop: "18px",
            padding: "16px 20px",
            borderRadius: "12px",
            background: "#eef6ff",
            border: "1px solid #d6e8ff",
            color: "#315b92",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          <strong>Responsive Check:</strong>{" "}
          Har page ko open karke browser maximize, resize aur normal
          size mein check kar sakte ho.
        </div>
      </div>
    </main>
  );
}