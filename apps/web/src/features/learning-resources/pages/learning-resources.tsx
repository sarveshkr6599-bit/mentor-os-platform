"use client";

import { useState } from "react";
import styles from "./Learning-Resources.module.css";

const resources = [
  {
    title: "Next.js Complete Guide",
    type: "Video",
    category: "Frontend",
    duration: "28:15",
    level: "Beginner",
    views: "1.2K",
    icon: "NEXT.",
  },
  {
    title: "Node.js Crash Course",
    type: "Video",
    category: "Backend",
    duration: "32:40",
    level: "Beginner",
    views: "980",
    icon: "node",
  },
  {
    title: "PostgreSQL for Beginners",
    type: "Video",
    category: "Database",
    duration: "25:10",
    level: "Beginner",
    views: "764",
    icon: "◉",
  },
  {
    title: "Figma UI Design Basics",
    type: "Video",
    category: "UI/UX",
    duration: "18:25",
    level: "Beginner",
    views: "892",
    icon: "F",
  },
  {
    title: "VS Code Productivity Tips",
    type: "Video",
    category: "Tools",
    duration: "12:30",
    level: "Beginner",
    views: "1.1K",
    icon: "⌘",
  },
  {
    title: "Git & GitHub Essentials",
    type: "Video",
    category: "Tools",
    duration: "20:15",
    level: "Beginner",
    views: "1.5K",
    icon: "◆",
  },
  {
    title: "System Design Basics",
    type: "Article",
    category: "Career",
    duration: "40:00",
    level: "Intermediate",
    views: "642",
    icon: "▣",
  },
  {
    title: "REST API Best Practices",
    type: "PDF",
    category: "Backend",
    duration: "15 min",
    level: "Intermediate",
    views: "1.3K",
    icon: "▤",
  },
];

const categories = [
  ["Frontend", 6],
  ["Backend", 5],
  ["Database", 4],
  ["UI/UX", 4],
  ["Tools", 3],
  ["Career Development", 2],
];

const recommended = [
  ["TypeScript Basics", "Beginner", "TS"],
  ["Tailwind CSS Guide", "Beginner", "TW"],
  ["Prisma ORM", "Intermediate", "P"],
  ["Project Deployment", "Intermediate", "PD"],
];

export default function LearningResources() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const goTo = (path: string) => {
    window.location.href = path;
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      resource.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.app}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.logo}>🎓</div>

          <div>
            <strong>MentorOS</strong>
            <span>Learn · Build · Grow</span>
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
            className={styles.active}
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
            <b>3</b>
          </a>
        </nav>

        <div className={styles.bottomNav}>
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

        <div className={styles.sidebarCard}>
          <div className={styles.rocket}>🚀</div>

          <strong>Keep Learning!</strong>

          <p>
            “Keep new knowledge, create new opportunities.”
          </p>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.searchTop}>
            <span>⌕</span>

            <input
              placeholder="Search assignments, resources, or anything..."
            />
          </div>

          <div className={styles.profile}>
            <button
              className={styles.notificationDot}
              onClick={() => goTo("/student/notifications")}
            >
              ●
            </button>

            <button
              className={styles.avatar}
              onClick={() => goTo("/student/profile")}
            >
              SK
            </button>

            <div>
              <strong>Student</strong>
              <small>Student</small>
            </div>

            <span>⌄</span>
          </div>
        </header>

        <section className={styles.pageHeader}>
          <div className={styles.headerIcon}>▣</div>

          <div>
            <h1>Learning Resources</h1>

            <p>
              Explore curated resources, learn new skills, and strengthen your
              foundation.
            </p>
          </div>

          <button className={styles.uploadButton}>
            ＋ Upload a Resource
          </button>
        </section>

        <div className={styles.contentArea}>
          <section className={styles.resourceArea}>
            <div className={styles.categoryTabs}>
              {[
                ["All", 24],
                ["Frontend", 6],
                ["Backend", 5],
                ["Database", 4],
                ["UI/UX", 4],
                ["Tools", 3],
                ["Career", 2],
              ].map(([name, count]) => (
                <button
                  key={name}
                  className={
                    activeCategory === name
                      ? styles.categoryActive
                      : ""
                  }
                  onClick={() => setActiveCategory(String(name))}
                >
                  {name}
                  <span>{count}</span>
                </button>
              ))}
            </div>

            <div className={styles.filters}>
              <div className={styles.resourceSearch}>
                ⌕

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search resources..."
                />
              </div>

              <select>
                <option>All Topics</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Database</option>
              </select>

              <select>
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>

              <select>
                <option>All Types</option>
                <option>Video</option>
                <option>Article</option>
                <option>PDF</option>
              </select>

              <select>
                <option>Latest First</option>
                <option>Most Viewed</option>
              </select>
            </div>

            <div className={styles.banner}>
              <div>
                <small>LEARN · PRACTICE · GROW</small>

                <h2>
                  Knowledge today. Better opportunities tomorrow.
                </h2>

                <p>
                  Access high-quality resources curated by mentors and industry
                  experts.
                </p>
              </div>

              <div className={styles.bannerIllustration}>
                💡 <span>👨🏻‍💻</span> 🌿
              </div>
            </div>

            <div className={styles.resourceGrid}>
              {filteredResources.map((resource) => (
                <article
                  className={styles.resourceCard}
                  key={resource.title}
                >
                  <div className={styles.resourceVisual}>
                    <strong>{resource.icon}</strong>

                    <span className={styles.play}>
                      {resource.type === "Video" ? "▶" : "▤"}
                    </span>

                    <time>{resource.duration}</time>
                  </div>

                  <div className={styles.resourceBody}>
                    <div className={styles.resourceMeta}>
                      <span>{resource.category}</span>
                      <small>{resource.type}</small>
                    </div>

                    <h3>{resource.title}</h3>

                    <p>
                      Learn practical concepts and build stronger development
                      skills.
                    </p>

                    <div className={styles.resourceFooter}>
                      <em>{resource.level}</em>

                      <span>◉ {resource.views}</span>

                      <button aria-label="Save resource">
                        ♡
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className={styles.rightSidebar}>
            <article className={styles.sideCard}>
              <h3>🔥 Learning Streak</h3>

              <div className={styles.streak}>
                <div>🔥</div>

                <div>
                  <strong>12 Days</strong>
                  <span>Keep learning consistently!</span>
                </div>
              </div>

              <div className={styles.days}>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, index) => (
                    <div key={day}>
                      <i className={index < 4 ? styles.dayDone : ""}>
                        {index < 4 ? "✓" : "○"}
                      </i>

                      <span>{day}</span>
                    </div>
                  )
                )}
              </div>
            </article>

            <article className={styles.sideCard}>
              <div className={styles.sideTitle}>
                <h3>⭐ Recommended for You</h3>

                <button
                  type="button"
                  onClick={() => goTo("/student/learning-resources")}
                >
                  View All
                </button>
              </div>

              <div className={styles.recommendedList}>
                {recommended.map(([title, level, icon]) => (
                  <div
                    className={styles.recommended}
                    key={title}
                  >
                    <div className={styles.recIcon}>{icon}</div>

                    <div>
                      <strong>{title}</strong>
                      <span>{level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.sideCard}>
              <div className={styles.sideTitle}>
                <h3>▣ Resource Categories</h3>

                <button
                  type="button"
                  onClick={() => goTo("/student/learning-resources")}
                >
                  View All
                </button>
              </div>

              <div className={styles.categoryList}>
                {categories.map(([name, count]) => (
                  <div key={name}>
                    <span>▪ {name}</span>
                    <b>{count}</b>
                  </div>
                ))}
              </div>
            </article>

            <article className={styles.quoteCard}>
              <div>❝</div>

              <p>“Learning never exhausts the mind.”</p>

              <strong>— Leonardo da Vinci</strong>
            </article>
          </aside>
        </div>
      </main>
    </div>
  );
}