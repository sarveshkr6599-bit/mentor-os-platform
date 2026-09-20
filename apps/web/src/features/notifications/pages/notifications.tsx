"use client";

import { useState } from "react";
import styles from "./Notifications.module.css";

type Notification = {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  unread: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "assignment",
    title: "New Assignment Posted",
    description:
      'A new assignment "Build a Responsive Navbar" has been assigned in Frontend Development.',
    time: "10 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "feedback",
    title: "AI Feedback Available",
    description:
      'Your submission for "UI/UX Design Implementation" has been reviewed by AI.',
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "graded",
    title: "Assignment Graded",
    description:
      'Your submission for "Design Database Schema" has been graded. Score: 92/100',
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    type: "deadline",
    title: "Upcoming Deadline",
    description:
      '"Create REST APIs" is due in 2 days. Make sure to submit on time.',
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 5,
    type: "announcement",
    title: "Announcement",
    description:
      "New learning resources have been added to the Frontend Development section.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 6,
    type: "comment",
    title: "Mentor Comment",
    description:
      "Your mentor has added a comment on your submission.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 7,
    type: "improvement",
    title: "Submission Needs Improvement",
    description:
      'Your submission for "API Integration" needs some improvements. Check the feedback.',
    time: "2 days ago",
    unread: false,
  },
  {
    id: 8,
    type: "milestone",
    title: "Milestone Achieved",
    description:
      "Congratulations! You have completed 5 assignments in Frontend Development.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 9,
    type: "resource",
    title: "New Resource Added",
    description:
      'A new tutorial "Git & GitHub Essentials" has been added to Learning Resources.',
    time: "3 days ago",
    unread: false,
  },
  {
    id: 10,
    type: "system",
    title: "System Notification",
    description:
      "Your profile information has been updated successfully.",
    time: "5 days ago",
    unread: false,
  },
];

const tabs = [
  ["All", 10],
  ["Assignments", 3],
  ["Feedback", 2],
  ["Announcements", 2],
  ["Reminders", 2],
  ["System", 1],
];

function Icon({ type }: { type: string }) {
  const icons: Record<string, string> = {
    assignment: "▤",
    feedback: "★",
    graded: "✓",
    deadline: "▣",
    announcement: "➤",
    comment: "▰",
    improvement: "!",
    milestone: "🏆",
    resource: "▥",
    system: "⚙",
  };

  return <span>{icons[type] || "•"}</span>;
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("All");

  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const unreadCount = notifications.filter(
    (item) => item.unread
  ).length;

  const goTo = (path: string) => {
    window.location.href = path;
  };

  const markAllAsRead = () => {
    setNotifications((items) =>
      items.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter((item) => {
          /* UNREAD */
          if (activeTab === "Unread") {
            return item.unread;
          }

          /* ASSIGNMENTS */
          if (activeTab === "Assignments") {
            return ["assignment", "graded", "deadline"].includes(
              item.type
            );
          }

          /* FEEDBACK */
          if (activeTab === "Feedback") {
            return ["feedback", "improvement"].includes(
              item.type
            );
          }

          /* ANNOUNCEMENTS */
          if (activeTab === "Announcements") {
            return item.type === "announcement";
          }

          /* REMINDERS */
          if (activeTab === "Reminders") {
            return item.type === "deadline";
          }

          /* SYSTEM */
          if (activeTab === "System") {
            return item.type === "system";
          }

          return true;
        });

  const setFilter = (filter: string) => {
    setActiveTab(filter);
  };

  return (
    <div className={styles.page}>
      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>🎓</div>

          <div>
            <div className={styles.logo}>MentorOS</div>

            <div className={styles.tagline}>
              Learn · Build · Grow
            </div>
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
            ▣ <span>Learning Resources</span>
          </a>

          <a
            href="/student/notifications"
            className={styles.active}
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/notifications");
            }}
          >
            ♢ <span>Notifications</span>

            {unreadCount > 0 && (
              <b>{unreadCount}</b>
            )}
          </a>
        </nav>

        <div className={styles.sidebarCard}>
          <div className={styles.rocket}>🚀</div>

          <strong>Stay Updated!</strong>

          <p>
            “Good learners never miss an opportunity.”
          </p>
        </div>

        {/* PROFILE + SETTINGS */}

        <div className={styles.nav}>
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
      </aside>

      {/* =========================
          MAIN
      ========================= */}

      <main className={styles.main}>
        {/* TOP BAR */}

        <header className={styles.topbar}>
          <div className={styles.search}>
            ⌕

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
              ♟
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

            <button
              type="button"
              onClick={() =>
                goTo("/student/profile")
              }
            >
              <strong>Student</strong>
              <small>Student</small>
            </button>

            <button
              type="button"
              onClick={() =>
                goTo("/student/profile")
              }
            >
              ⌄
            </button>
          </div>
        </header>

        {/* =========================
            CONTENT
        ========================= */}

        <div className={styles.content}>
          <div className={styles.headingRow}>
            <div className={styles.heading}>
              <div className={styles.headingIcon}>
                ♟
              </div>

              <div>
                <h1>Notifications</h1>

                <p>
                  Stay updated with important alerts,
                  feedback, and announcements.
                </p>
              </div>
            </div>

            <button
              type="button"
              className={styles.markRead}
              onClick={markAllAsRead}
            >
              ✓ Mark All as Read
            </button>
          </div>

          <div className={styles.layout}>
            {/* =========================
                NOTIFICATION PANEL
            ========================= */}

            <section
              className={styles.notificationPanel}
            >
              {/* TABS */}

              <div className={styles.tabs}>
                {tabs.map(([name, count]) => (
                  <button
                    type="button"
                    key={name}
                    className={
                      activeTab === name
                        ? styles.tabActive
                        : ""
                    }
                    onClick={() =>
                      setActiveTab(name as string)
                    }
                  >
                    {name}

                    <span>{count}</span>
                  </button>
                ))}
              </div>

              {/* NOTIFICATIONS */}

              <div
                className={styles.notificationList}
              >
                {filteredNotifications.length > 0 ? (
                  filteredNotifications.map((item) => (
                    <div
                      key={item.id}
                      className={`${styles.notification} ${
                        item.unread
                          ? styles.unread
                          : ""
                      }`}
                    >
                      <div
                        className={`${styles.notificationIcon} ${
                          styles[item.type]
                        }`}
                      >
                        <Icon type={item.type} />
                      </div>

                      <div
                        className={
                          styles.notificationBody
                        }
                      >
                        <div
                          className={
                            styles.notificationTitle
                          }
                        >
                          <strong>
                            {item.title}
                          </strong>

                          {item.unread && (
                            <span
                              className={
                                styles.newBadge
                              }
                            >
                              New
                            </span>
                          )}
                        </div>

                        <p>
                          {item.description}
                        </p>
                      </div>

                      <div
                        className={
                          styles.notificationMeta
                        }
                      >
                        <span>{item.time}</span>

                        <span
                          className={`${styles.dot} ${
                            item.unread
                              ? styles.dotActive
                              : ""
                          }`}
                        />

                        <button
                          type="button"
                          aria-label="More options"
                        >
                          •••
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    style={{
                      padding: "40px 20px",
                      textAlign: "center",
                      color: "#8b94a5",
                    }}
                  >
                    No notifications found.
                  </div>
                )}
              </div>

              <button
                type="button"
                className={styles.loadMore}
              >
                ↓ Load More Notifications
              </button>
            </section>

            {/* =========================
                RIGHT COLUMN
            ========================= */}

            <aside className={styles.rightColumn}>
              {/* NOTIFICATION PREFERENCES */}

              <div className={styles.card}>
                <div className={styles.cardTitle}>
                  <span>⚙</span>

                  <div>
                    <strong>
                      Notification Preferences
                    </strong>

                    <p>
                      Manage what notifications you want
                      to receive.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.outlineButton}
                  onClick={() =>
                    goTo("/student/settings")
                  }
                >
                  ⚙ Open Settings
                </button>
              </div>

              {/* QUICK FILTERS */}

              <div className={styles.card}>
                <div className={styles.cardHeading}>
                  ⚑ Quick Filters
                </div>

                <div className={styles.filters}>
                  {/* ALL */}

                  <div
                    className={
                      activeTab === "All"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("All")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("All");
                      }
                    }}
                  >
                    ▣ All Notifications
                    <b>{notifications.length}</b>
                  </div>

                  {/* UNREAD */}

                  <div
                    className={
                      activeTab === "Unread"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("Unread")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("Unread");
                      }
                    }}
                  >
                    ○ Unread
                    <b>{unreadCount}</b>
                  </div>

                  {/* ASSIGNMENTS */}

                  <div
                    className={
                      activeTab === "Assignments"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("Assignments")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("Assignments");
                      }
                    }}
                  >
                    ▣ Assignments
                    <b>3</b>
                  </div>

                  {/* FEEDBACK */}

                  <div
                    className={
                      activeTab === "Feedback"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("Feedback")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("Feedback");
                      }
                    }}
                  >
                    ★ Feedback
                    <b>2</b>
                  </div>

                  {/* ANNOUNCEMENTS */}

                  <div
                    className={
                      activeTab === "Announcements"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("Announcements")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("Announcements");
                      }
                    }}
                  >
                    ➤ Announcements
                    <b>2</b>
                  </div>

                  {/* REMINDERS */}

                  <div
                    className={
                      activeTab === "Reminders"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("Reminders")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("Reminders");
                      }
                    }}
                  >
                    ▣ Reminders
                    <b>2</b>
                  </div>

                  {/* SYSTEM */}

                  <div
                    className={
                      activeTab === "System"
                        ? styles.filterActive
                        : ""
                    }
                    onClick={() =>
                      setFilter("System")
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" ||
                        e.key === " "
                      ) {
                        setFilter("System");
                      }
                    }}
                  >
                    ⚙ System
                    <b>1</b>
                  </div>
                </div>
              </div>

              {/* UPDATE CARD */}

              <div className={styles.updateCard}>
                <div className={styles.updateIcon}>
                  🔔
                </div>

                <h3>Never Miss an Update</h3>

                <p>
                  Enable browser notifications to get
                  instant alerts about assignments,
                  feedback, and announcements.
                </p>

                <button type="button">
                  🔔 Enable Notifications
                </button>
              </div>

              {/* QUOTE CARD */}

              <div className={styles.quoteCard}>
                <h2>
                  “Stay informed.
                  <br />
                  Stay ahead.”
                </h2>

                <p>— MentorOS</p>

                <div
                  className={
                    styles.studentIllustration
                  }
                >
                  💻 🧑‍💻 🔔
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}