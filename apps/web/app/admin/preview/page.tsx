"use client";

const adminPages = [
  {
    title: "Admin Dashboard",
    path: "/admin",
    description: "Main admin overview",
  },
  {
    title: "Students",
    path: "/admin/students",
    description: "Manage all students",
  },
  {
    title: "Mentors",
    path: "/admin/mentors",
    description: "Manage mentors and approvals",
  },
  {
    title: "Assignments",
    path: "/admin/assignments",
    description: "Manage assignments",
  },
  {
    title: "Analytics",
    path: "/admin/analytics",
    description: "View platform analytics",
  },
  {
    title: "AI Reports",
    path: "/admin/ai-reports",
    description: "View AI-generated reports",
  },
];

export default function AdminPreview() {
  const openPage = (path: string) => {
    window.location.href = path;
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#6366f1",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            marginBottom: "8px",
          }}
        >
          MENTOROS • ADMIN WORKSPACE
        </p>

        <h1
          style={{
            fontSize: "36px",
            margin: "0 0 10px",
            fontWeight: 800,
          }}
        >
          Admin Pages Preview
        </h1>

        <p
          style={{
            color: "#7b8497",
            fontSize: "15px",
            marginBottom: "32px",
          }}
        >
          Open and verify all Admin dashboard pages from one place.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {adminPages.map((page, index) => (
            <div
              key={page.path}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e6ef",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 18px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "#eef2ff",
                  color: "#4f46e5",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  marginBottom: "16px",
                }}
              >
                {index + 1}
              </div>

              <h2
                style={{
                  fontSize: "19px",
                  margin: "0 0 8px",
                }}
              >
                {page.title}
              </h2>

              <p
                style={{
                  color: "#7b8497",
                  fontSize: "13px",
                  margin: "0 0 20px",
                }}
              >
                {page.description}
              </p>

              <button
                onClick={() => openPage(page.path)}
                style={{
                  width: "100%",
                  height: "42px",
                  border: "0",
                  borderRadius: "9px",
                  background: "#2563eb",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Open Page →
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}