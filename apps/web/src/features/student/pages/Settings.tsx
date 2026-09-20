"use client";

import { useState } from "react";
import styles from "./Settings.module.css";

const tabs = [
  "General",
  "Notifications",
  "Appearance",
  "Privacy & Security",
  "Connected Accounts",
  "Data & Storage",
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("General");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [assignmentUpdates, setAssignmentUpdates] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [feedbackNotifications, setFeedbackNotifications] = useState(true);
  const [learningResources, setLearningResources] = useState(false);
  const [announcements, setAnnouncements] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [theme, setTheme] = useState("Light");

  const Toggle = ({
    enabled,
    onClick,
  }: {
    enabled: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      className={`${styles.toggle} ${
        enabled ? styles.toggleOn : ""
      }`}
      onClick={onClick}
      aria-label="Toggle setting"
    >
      <span />
    </button>
  );

  return (
    <div className={styles.page}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <small>Learn · Build · Grow</small>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="/student">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/student/assignments">
            <span>▣</span>
            My Assignments
          </a>

          <a href="/student/submissions">
            <span>➤</span>
            My Submissions
          </a>

          <a href="/student/progress">
            <span>↗</span>
            Progress
          </a>

          <a href="/student/ai-feedback">
            <span>✦</span>
            AI Feedback
          </a>

          <a href="/student/learning-resources">
            <span>▤</span>
            Learning Resources
          </a>

          <a href="/student/notifications">
            <span>♢</span>
            Notifications
            <b className={styles.badge}>3</b>
          </a>

          <a href="/student/profile">
            <span>♙</span>
            Profile
          </a>

          <a
            href="/student/settings"
            className={styles.active}
          >
            <span>⚙</span>
            Settings
          </a>
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.miniIcon}>🚀</div>

          <strong>Better Settings.</strong>
          <strong>A Brighter You!</strong>

          <p>
            “Small changes today create
            better learning tomorrow.”
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

          <div className={styles.topUser}>
            <button className={styles.topNotification}>
              ♟
              <i />
            </button>

            <div className={styles.avatar}>SK</div>

            <div className={styles.userText}>
              <strong>Student</strong>
              <small>Student</small>
            </div>

            <span className={styles.chevron}>⌄</span>
          </div>
        </header>

        <div className={styles.content}>
          {/* PAGE HEADER */}
          <div className={styles.pageHeader}>
            <div className={styles.titleArea}>
              <div className={styles.titleIcon}>⚙</div>

              <div>
                <h1>Settings</h1>
                <p>
                  Customize your experience and manage your
                  account preferences.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.layout}>
            {/* LEFT CONTENT */}
            <section className={styles.primary}>
              {/* TABS */}
              <div className={styles.tabs}>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={
                      activeTab === tab
                        ? styles.tabActive
                        : ""
                    }
                  >
                    <span>
                      {tab === "General" && "⚙"}
                      {tab === "Notifications" && "♟"}
                      {tab === "Appearance" && "◉"}
                      {tab === "Privacy & Security" && "♢"}
                      {tab === "Connected Accounts" && "⌘"}
                      {tab === "Data & Storage" && "▣"}
                    </span>

                    {tab}
                  </button>
                ))}
              </div>

              {/* GENERAL */}
              {activeTab === "General" && (
                <>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitleIcon}>
                        👤
                      </div>

                      <div>
                        <h2>General Information</h2>
                        <p>
                          Manage your basic account information.
                        </p>
                      </div>

                      <button className={styles.editButton}>
                        ✎ Edit Profile
                      </button>
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
                        <span>Student ID</span>
                        <input
                          defaultValue="STU2025001"
                          disabled
                        />
                      </label>

                      <label>
                        <span>Phone Number</span>
                        <input
                          defaultValue="+91 98765 43210"
                        />
                      </label>

                      <label>
                        <span>Department / Course</span>
                        <select defaultValue="B.Tech Computer Science">
                          <option>
                            B.Tech Computer Science
                          </option>
                          <option>B.Tech Information Technology</option>
                          <option>BCA</option>
                          <option>MCA</option>
                        </select>
                      </label>

                      <label>
                        <span>Year</span>
                        <select defaultValue="4th Year">
                          <option>1st Year</option>
                          <option>2nd Year</option>
                          <option>3rd Year</option>
                          <option>4th Year</option>
                        </select>
                      </label>

                      <label>
                        <span>Location</span>
                        <input defaultValue="Delhi, India" />
                      </label>

                      <label>
                        <span>Language</span>
                        <select defaultValue="English (India)">
                          <option>English (India)</option>
                          <option>English (US)</option>
                          <option>Hindi</option>
                        </select>
                      </label>
                    </div>

                    <div className={styles.cardActions}>
                      <button className={styles.secondaryButton}>
                        Cancel
                      </button>

                      <button className={styles.primaryButton}>
                        Save Changes
                      </button>
                    </div>
                  </div>

                  {/* NOTIFICATIONS */}
                  <div className={styles.card}>
                    <div className={styles.sectionHeading}>
                      <div className={styles.cardTitleIcon}>
                        🔔
                      </div>

                      <div>
                        <h2>Notification Preferences</h2>
                        <p>
                          Choose what notifications you want
                          to receive.
                        </p>
                      </div>
                    </div>

                    <div className={styles.notificationGrid}>
                      <SettingToggle
                        icon="▣"
                        title="Assignment Updates"
                        description="Get notified about new assignments and deadlines"
                        enabled={assignmentUpdates}
                        toggle={() =>
                          setAssignmentUpdates(
                            !assignmentUpdates
                          )
                        }
                        Toggle={Toggle}
                      />

                      <SettingToggle
                        icon="◫"
                        title="Reminder Notifications"
                        description="Get reminders about upcoming deadlines"
                        enabled={reminders}
                        toggle={() => setReminders(!reminders)}
                        Toggle={Toggle}
                      />

                      <SettingToggle
                        icon="★"
                        title="Feedback Notifications"
                        description="Get notified when AI or mentor feedback is available"
                        enabled={feedbackNotifications}
                        toggle={() =>
                          setFeedbackNotifications(
                            !feedbackNotifications
                          )
                        }
                        Toggle={Toggle}
                      />

                      <SettingToggle
                        icon="▤"
                        title="Learning Resources"
                        description="Get notified about new learning materials"
                        enabled={learningResources}
                        toggle={() =>
                          setLearningResources(
                            !learningResources
                          )
                        }
                        Toggle={Toggle}
                      />

                      <SettingToggle
                        icon="➤"
                        title="Announcements"
                        description="Receive important announcements from admin"
                        enabled={announcements}
                        toggle={() =>
                          setAnnouncements(!announcements)
                        }
                        Toggle={Toggle}
                      />

                      <SettingToggle
                        icon="✉"
                        title="Email Notifications"
                        description="Receive important updates through email"
                        enabled={emailNotifications}
                        toggle={() =>
                          setEmailNotifications(
                            !emailNotifications
                          )
                        }
                        Toggle={Toggle}
                      />
                    </div>
                  </div>

                  {/* APPEARANCE */}
                  <div className={styles.card}>
                    <div className={styles.sectionHeading}>
                      <div className={styles.cardTitleIcon}>
                        ◉
                      </div>

                      <div>
                        <h2>Appearance Settings</h2>
                        <p>
                          Customize how MentorOS looks for you.
                        </p>
                      </div>
                    </div>

                    <div className={styles.appearanceGrid}>
                      <div>
                        <span className={styles.fieldLabel}>
                          Theme
                        </span>

                        <div className={styles.themeButtons}>
                          {["Light", "Dark", "System"].map(
                            (item) => (
                              <button
                                key={item}
                                className={
                                  theme === item
                                    ? styles.themeActive
                                    : ""
                                }
                                onClick={() =>
                                  setTheme(item)
                                }
                              >
                                {item === "Light" && "☀"}
                                {item === "Dark" && "◐"}
                                {item === "System" && "▣"}
                                {item}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      <label>
                        <span>Language</span>
                        <select defaultValue="English (India)">
                          <option>English (India)</option>
                          <option>Hindi</option>
                        </select>
                      </label>

                      <div>
                        <span className={styles.fieldLabel}>
                          Font Size
                        </span>

                        <div className={styles.fontButtons}>
                          <button>A</button>
                          <button className={styles.fontActive}>
                            A
                          </button>
                          <button>A</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* NOTIFICATIONS TAB */}
              {activeTab === "Notifications" && (
                <div className={styles.card}>
                  <div className={styles.largeEmptyIcon}>
                    🔔
                  </div>

                  <h2 className={styles.centerTitle}>
                    Notification Center
                  </h2>

                  <p className={styles.centerText}>
                    Manage all your MentorOS notification
                    preferences from one place.
                  </p>

                  <div className={styles.notificationGrid}>
                    <SettingToggle
                      icon="✉"
                      title="Email Notifications"
                      description="Receive important updates through email"
                      enabled={emailNotifications}
                      toggle={() =>
                        setEmailNotifications(
                          !emailNotifications
                        )
                      }
                      Toggle={Toggle}
                    />

                    <SettingToggle
                      icon="▣"
                      title="Assignment Updates"
                      description="Stay updated about your assignments"
                      enabled={assignmentUpdates}
                      toggle={() =>
                        setAssignmentUpdates(
                          !assignmentUpdates
                        )
                      }
                      Toggle={Toggle}
                    />

                    <SettingToggle
                      icon="◫"
                      title="Deadline Reminders"
                      description="Never miss an important deadline"
                      enabled={reminders}
                      toggle={() => setReminders(!reminders)}
                      Toggle={Toggle}
                    />
                  </div>
                </div>
              )}

              {/* APPEARANCE TAB */}
              {activeTab === "Appearance" && (
                <div className={styles.card}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.cardTitleIcon}>
                      ◉
                    </div>

                    <div>
                      <h2>Appearance</h2>
                      <p>
                        Personalize the look and feel of your
                        dashboard.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bigThemeGrid}>
                    {["Light", "Dark", "System"].map(
                      (item) => (
                        <button
                          key={item}
                          className={`${styles.themePreview} ${
                            theme === item
                              ? styles.themePreviewActive
                              : ""
                          }`}
                          onClick={() => setTheme(item)}
                        >
                          <div
                            className={
                              item === "Dark"
                                ? styles.previewDark
                                : styles.previewLight
                            }
                          >
                            <div />
                            <div />
                            <div />
                          </div>

                          <strong>{item}</strong>

                          <span>
                            {theme === item
                              ? "✓ Selected"
                              : "Select theme"}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* SECURITY TAB */}
              {activeTab === "Privacy & Security" && (
                <>
                  <div className={styles.card}>
                    <div className={styles.sectionHeading}>
                      <div className={styles.cardTitleIcon}>
                        🛡
                      </div>

                      <div>
                        <h2>Privacy & Security</h2>
                        <p>
                          Keep your account secure and control
                          your privacy.
                        </p>
                      </div>
                    </div>

                    <div className={styles.securityRows}>
                      <div>
                        <div className={styles.securityIcon}>
                          🔑
                        </div>

                        <div>
                          <strong>Change Password</strong>
                          <p>
                            Update your password regularly for
                            better security.
                          </p>
                        </div>

                        <button>Change ›</button>
                      </div>

                      <div>
                        <div className={styles.securityIcon}>
                          📱
                        </div>

                        <div>
                          <strong>Two-Factor Authentication</strong>
                          <p>
                            Add an extra layer of protection to
                            your account.
                          </p>
                        </div>

                        <Toggle
                          enabled={twoFactor}
                          onClick={() =>
                            setTwoFactor(!twoFactor)
                          }
                        />
                      </div>

                      <div>
                        <div className={styles.securityIcon}>
                          🖥
                        </div>

                        <div>
                          <strong>Active Sessions</strong>
                          <p>
                            Manage devices currently signed into
                            your account.
                          </p>
                        </div>

                        <button>Manage ›</button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dangerCard}>
                    <div>
                      <strong>Deactivate Account</strong>
                      <p>
                        Temporarily disable your MentorOS
                        account.
                      </p>
                    </div>

                    <button>Deactivate</button>
                  </div>
                </>
              )}

              {/* CONNECTED ACCOUNTS */}
              {activeTab === "Connected Accounts" && (
                <div className={styles.card}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.cardTitleIcon}>
                      🔗
                    </div>

                    <div>
                      <h2>Connected Accounts</h2>
                      <p>
                        Connect your favorite services for a
                        better experience.
                      </p>
                    </div>
                  </div>

                  <AccountRow
                    icon="⚫"
                    name="GitHub"
                    description="Connect your GitHub account"
                  />

                  <AccountRow
                    icon="G"
                    name="Google"
                    description="Connect your Google account"
                  />

                  <AccountRow
                    icon="in"
                    name="LinkedIn"
                    description="Connect your LinkedIn account"
                  />
                </div>
              )}

              {/* DATA */}
              {activeTab === "Data & Storage" && (
                <div className={styles.card}>
                  <div className={styles.sectionHeading}>
                    <div className={styles.cardTitleIcon}>
                      ▣
                    </div>

                    <div>
                      <h2>Data & Storage</h2>
                      <p>
                        Manage your personal data and storage
                        preferences.
                      </p>
                    </div>
                  </div>

                  <div className={styles.storageBox}>
                    <div>
                      <strong>Storage Usage</strong>
                      <span>2.4 GB of 10 GB used</span>
                    </div>

                    <div className={styles.storageBar}>
                      <span />
                    </div>

                    <small>24% used</small>
                  </div>

                  <div className={styles.dataActions}>
                    <button>
                      ⬇ Download My Data
                    </button>

                    <button>
                      🗑 Clear Cached Data
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* RIGHT SIDE */}
            <aside className={styles.rightSide}>
              <div className={styles.experienceCard}>
                <div>
                  <span>YOUR SETTINGS</span>
                  <h3>
                    Your Settings
                    <br />
                    Your Experience
                  </h3>

                  <p>
                    Personalize your workspace and make
                    MentorOS work better for you.
                  </p>
                </div>

                <div className={styles.experienceArt}>
                  ⚙️
                </div>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideCardHeader}>
                  <div className={styles.greenIcon}>✓</div>

                  <div>
                    <h3>Security</h3>
                    <p>
                      Keep your account safe and secure.
                    </p>
                  </div>
                </div>

                <div className={styles.sideLinks}>
                  <button>
                    🔑 Change Password
                    <span>›</span>
                  </button>

                  <button>
                    🔒 Manage Devices
                    <span>›</span>
                  </button>

                  <button>
                    🛡 Two-Factor Authentication
                    <span
                      className={
                        twoFactor
                          ? styles.enabled
                          : styles.notEnabled
                      }
                    >
                      {twoFactor
                        ? "Enabled"
                        : "Not Enabled"}
                    </span>
                  </button>

                  <button>
                    ◷ Login Activity
                    <span>›</span>
                  </button>
                </div>
              </div>

              <div className={styles.sideCard}>
                <div className={styles.sideCardHeader}>
                  <div className={styles.linkIcon}>🔗</div>

                  <div>
                    <h3>Connected Accounts</h3>
                    <p>
                      Link your accounts for a better
                      experience.
                    </p>
                  </div>
                </div>

                <div className={styles.accountsMini}>
                  <MiniAccount name="GitHub" icon="⚫" />
                  <MiniAccount name="Google" icon="G" />
                  <MiniAccount name="LinkedIn" icon="in" />
                </div>
              </div>

              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>?</div>

                <div>
                  <h3>Need Help?</h3>
                  <p>
                    If you face any issues or have questions,
                    we're here to help.
                  </p>

                  <button>✉ Contact Support</button>
                </div>

                <div className={styles.helpArt}>👨‍💻</div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

function SettingToggle({
  icon,
  title,
  description,
  enabled,
  toggle,
  Toggle,
}: {
  icon: string;
  title: string;
  description: string;
  enabled: boolean;
  toggle: () => void;
  Toggle: React.ComponentType<{
    enabled: boolean;
    onClick: () => void;
  }>;
}) {
  return (
    <div className={styles.settingItem}>
      <div className={styles.settingIcon}>{icon}</div>

      <div className={styles.settingInfo}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>

      <Toggle enabled={enabled} onClick={toggle} />
    </div>
  );
}

function AccountRow({
  icon,
  name,
  description,
}: {
  icon: string;
  name: string;
  description: string;
}) {
  return (
    <div className={styles.accountRow}>
      <div className={styles.accountIcon}>{icon}</div>

      <div>
        <strong>{name}</strong>
        <p>{description}</p>
      </div>

      <button>Connect</button>
    </div>
  );
}

function MiniAccount({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <div className={styles.miniAccount}>
      <div className={styles.miniAccountIcon}>{icon}</div>

      <div>
        <strong>{name}</strong>
        <small>Not Connected</small>
      </div>

      <button>Connect</button>
    </div>
  );
}