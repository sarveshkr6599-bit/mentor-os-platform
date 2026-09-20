"use client";

import { useState } from "react";
import styles from "./Profile.module.css";

const tabs = [
  "Personal Information",
  "Academic Details",
  "Learning Preferences",
  "Account Settings",
  "Activity & Stats",
];

export default function StudentProfile() {
  const [activeTab, setActiveTab] = useState("Personal Information");

  const goTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <small>Learn · Build · Grow</small>
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
            onClick={(e) => {
              e.preventDefault();
              goTo("/student/notifications");
            }}
          >
            ♢ <span>Notifications</span>
            <b className={styles.badge}>3</b>
          </a>

          <a
            href="/student/profile"
            className={styles.active}
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
        </nav>

        <div className={styles.sidebarQuote}>
          <div>🚀</div>

          <strong>Your Journey Matters!</strong>

          <p>
            “Keep learning, keep building,
            <br />
            keep growing.”
          </p>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.search}>
            ⌕

            <input
              type="text"
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.user}>
            <button
              className={styles.notification}
              onClick={() => goTo("/student/notifications")}
              type="button"
            >
              ♟
            </button>

            <button
              className={styles.avatarSmall}
              onClick={() => goTo("/student/profile")}
              type="button"
            >
              SK
            </button>

            <div>
              <strong>Student</strong>
              <small>Student</small>
            </div>

            <button
              type="button"
              onClick={() => goTo("/student/profile")}
            >
              ⌄
            </button>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.headingRow}>
            <div className={styles.heading}>
              <div className={styles.headingIcon}>♙</div>

              <div>
                <h1>My Profile</h1>

                <p>
                  Manage your personal information, academic details,
                  and preferences.
                </p>
              </div>
            </div>

            <button className={styles.editButton}>
              ✎ Edit Profile
            </button>
          </div>

          <div className={styles.grid}>
            <section>
              <div className={styles.profileCard}>
                <div className={styles.profileLeft}>
                  <div className={styles.avatarLarge}>
                    SK
                    <button type="button">📷</button>
                  </div>

                  <div className={styles.identity}>
                    <h2>Shivam Kumar</h2>

                    <p>B.Tech Computer Science</p>
                    <p>4th Year | Delhi, India</p>

                    <span>Student</span>

                    <div className={styles.quote}>
                      “Small steps every day lead to big results.”

                      <button type="button">✎</button>
                    </div>
                  </div>
                </div>

                <div className={styles.contact}>
                  <div>
                    <span>▣</span>
                    <small>Student ID</small>
                    <strong>STU2025001</strong>
                  </div>

                  <div>
                    <span>✉</span>
                    <small>Email</small>
                    <strong>shivam.kumar@example.com</strong>
                  </div>

                  <div>
                    <span>☎</span>
                    <small>Phone</small>
                    <strong>+91 98765 43210</strong>
                  </div>

                  <div>
                    <span>▣</span>
                    <small>Joined On</small>
                    <strong>15 Jul 2025</strong>
                  </div>
                </div>
              </div>

              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={
                      activeTab === tab
                        ? styles.tabActive
                        : ""
                    }
                    onClick={() => setActiveTab(tab)}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className={styles.formCard}>
                <div className={styles.sectionTitle}>
                  <div>▣</div>

                  <div>
                    <h3>{activeTab}</h3>

                    <p>
                      Update your personal details and contact
                      information.
                    </p>
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <label>
                    <span>Full Name</span>
                    <input defaultValue="Shivam Kumar" />
                  </label>

                  <label>
                    <span>Email Address</span>
                    <input
                      defaultValue="shivam.kumar@example.com"
                    />
                  </label>

                  <label>
                    <span>Phone Number</span>
                    <input defaultValue="+91 98765 43210" />
                  </label>

                  <label>
                    <span>Date of Birth</span>
                    <input defaultValue="14 Mar 2003" />
                  </label>

                  <label>
                    <span>Gender</span>

                    <select defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label>
                    <span>Location</span>
                    <input defaultValue="Delhi, India" />
                  </label>
                </div>

                <label className={styles.bioField}>
                  <span>Bio</span>

                  <textarea
                    defaultValue="Passionate about web development and learning new technologies. Excited to build real-world projects and grow with MentorOS."
                  />

                  <small>92/300</small>
                </label>

                <div className={styles.formActions}>
                  <button
                    className={styles.cancel}
                    type="button"
                  >
                    Cancel
                  </button>

                  <button
                    className={styles.save}
                    type="button"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </section>

            <aside className={styles.rightSide}>
              <div className={styles.sideCard}>
                <h3>📊 Profile Completion</h3>

                <div className={styles.progressCircle}>
                  <strong>85%</strong>
                </div>

                <h4>Almost there!</h4>

                <p>
                  Complete your profile to get a better
                  learning experience.
                </p>

                <ul>
                  <li>✓ Basic Information</li>
                  <li>✓ Academic Details</li>
                  <li>✓ Profile Picture</li>
                  <li>✓ Learning Preferences</li>

                  <li className={styles.pending}>
                    ○ Social Links
                  </li>
                </ul>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideHeading}>
                  <h3>🏆 Achievements</h3>

                  <button
                    type="button"
                    onClick={() => goTo("/student/profile")}
                  >
                    View All
                  </button>
                </div>

                <div className={styles.achievements}>
                  <div>
                    <strong>📖</strong>
                    <b>Fast Learner</b>
                    <small>Completed 5 assignments</small>
                  </div>

                  <div>
                    <strong>◉</strong>
                    <b>Consistent</b>
                    <small>Submitted on time</small>
                  </div>

                  <div>
                    <strong>★</strong>
                    <b>AI Explorer</b>
                    <small>Used AI feedback</small>
                  </div>
                </div>
              </div>

              <div className={styles.sideCard}>
                <h3>⚡ Quick Actions</h3>

                <div className={styles.actions}>
                  <button
                    type="button"
                    onClick={() => goTo("/student/settings")}
                  >
                    🔑 Change Password <span>›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      goTo("/student/notifications")
                    }
                  >
                    🔔 Manage Notifications <span>›</span>
                  </button>

                  <button type="button">
                    ⬇ Download My Data <span>›</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      goTo("/student/settings")
                    }
                  >
                    ◉ Deactivate Account <span>›</span>
                  </button>
                </div>
              </div>

              <div className={styles.quoteCard}>
                <h3>
                  “Invest in yourself.
                  <br />
                  It’s the best interest.”
                </h3>

                <p>— Benjamin Franklin</p>

                <div>💻 👨‍💻</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}