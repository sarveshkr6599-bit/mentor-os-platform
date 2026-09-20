.dashboard {
  min-height: 100vh;
  padding: 28px 42px 44px;
  background:
    radial-gradient(circle at 10% 0%, rgba(99, 102, 241, 0.08), transparent 28%),
    radial-gradient(circle at 95% 5%, rgba(14, 165, 233, 0.07), transparent 25%),
    #f7f8fc;
  color: #0f172a;
  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

/* =========================
   COMMON WIDTH
========================= */

.topBar,
.greeting,
.statsGrid,
.contentGrid,
.middleGrid,
.bottomGrid,
.statusBar,
.banner {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

/* =========================
   TOP BAR
========================= */

.topBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.searchBox {
  width: 390px;
  height: 44px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(15, 23, 42, 0.05);
  transition: 0.2s ease;
}

.searchBox:focus-within {
  border-color: #818cf8;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.searchBox span {
  color: #64748b;
  font-size: 20px;
}

.searchBox input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #1e293b;
  font-size: 13px;
}

.searchBox input::placeholder {
  color: #94a3b8;
}

.topRight {
  display: flex;
  align-items: center;
  gap: 14px;
}

.bell {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  font-size: 17px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
  transition: 0.2s ease;
}

.bell:hover {
  transform: translateY(-2px);
  border-color: #c7d2fe;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
}

.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 8px 5px 5px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
}

.profileAvatar {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: linear-gradient(135deg, #312e81, #6366f1);
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 5px 12px rgba(79, 70, 229, 0.25);
}

.profile div:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.profile strong {
  font-size: 12px;
  color: #0f172a;
}

.profile span {
  color: #64748b;
  font-size: 9px;
}

.chevron {
  color: #64748b;
  font-size: 14px;
}

/* =========================
   GREETING
========================= */

.greeting {
  margin-top: 32px;
  margin-bottom: 22px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

.greetingTitle {
  display: flex;
  align-items: center;
  gap: 11px;
}

.greetingTitle span {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border-radius: 12px;
  font-size: 19px;
}

.greeting h1 {
  margin: 0;
  color: #0f172a;
  font-size: 27px;
  font-weight: 750;
  letter-spacing: -0.8px;
}

.greeting p {
  margin: 8px 0 0 49px;
  color: #64748b;
  font-size: 12px;
}

.dateBox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.dateBox strong {
  color: #334155;
  font-size: 11px;
}

.dateBox span {
  color: #94a3b8;
  font-size: 9px;
}

/* =========================
   STAT CARDS
========================= */

.statsGrid {
  margin-bottom: 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.statCard {
  position: relative;
  min-height: 105px;
  padding: 19px;
  display: flex;
  align-items: center;
  gap: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.045);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.statCard::after {
  content: "";
  position: absolute;
  width: 90px;
  height: 90px;
  right: -35px;
  top: -35px;
  background: rgba(99, 102, 241, 0.06);
  border-radius: 50%;
}

.statCard:hover {
  transform: translateY(-3px);
  border-color: #c7d2fe;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
}

.statIcon {
  width: 43px;
  height: 43px;
  flex: 0 0 43px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  font-size: 18px;
}

.purple {
  background: #eef2ff;
}

.green {
  background: #ecfdf5;
}

.blue {
  background: #eff6ff;
}

.orange {
  background: #fff7ed;
}

.statContent {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.statContent span {
  color: #64748b;
  font-size: 10px;
  font-weight: 500;
}

.statContent strong {
  color: #0f172a;
  font-size: 25px;
  line-height: 1;
  letter-spacing: -0.5px;
}

.statContent small {
  margin-top: 3px;
  color: #059669;
  font-size: 9px;
  font-weight: 700;
}

/* =========================
   GRID / CARDS
========================= */

.contentGrid,
.middleGrid,
.bottomGrid {
  margin-bottom: 18px;
  display: grid;
  gap: 15px;
}

.contentGrid,
.middleGrid {
  grid-template-columns: 1.9fr 1fr;
}

.bottomGrid {
  grid-template-columns: 1.6fr 1fr;
}

.largeCard,
.sideCard,
.insightCard,
.quickCard {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(15, 23, 42, 0.045);
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.largeCard:hover,
.sideCard:hover,
.insightCard:hover,
.quickCard:hover {
  border-color: #d8def0;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.065);
}

.largeCard,
.sideCard {
  min-height: 300px;
}

.cardHeader {
  padding: 18px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #eef2f7;
}

.cardHeader h2 {
  margin: 0;
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.2px;
}

.cardHeader p {
  margin: 5px 0 0;
  color: #94a3b8;
  font-size: 10px;
}

.dropdown {
  padding: 8px 11px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 9px;
  color: #475569;
  font-size: 9px;
  cursor: pointer;
  transition: 0.2s ease;
}

.dropdown:hover {
  background: #eef2ff;
  border-color: #c7d2fe;
  color: #4f46e5;
}

.viewAll {
  border: 0;
  background: transparent;
  color: #4f46e5;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
}

.viewAll:hover {
  color: #3730a3;
}

/* =========================
   PROGRESS
========================= */

.progressArea {
  padding: 30px;
}

.progressSummary {
  display: flex;
  align-items: center;
  gap: 55px;
}

.circleProgress {
  width: 175px;
  height: 175px;
  flex: 0 0 175px;
  display: grid;
  place-items: center;
  position: relative;
  border-radius: 50%;
  background: conic-gradient(
    #6366f1 0 78%,
    #e8ecf5 78% 100%
  );
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.12);
}

.circleProgress::before {
  content: "";
  position: absolute;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background: #ffffff;
}

.circleProgress div {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.circleProgress strong {
  color: #0f172a;
  font-size: 31px;
  letter-spacing: -1px;
}

.circleProgress span {
  margin-top: 4px;
  color: #94a3b8;
  font-size: 9px;
  font-weight: 600;
}

.progressStats {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.progressStats > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progressStats > div > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.progressStats strong {
  color: #334155;
  font-size: 10px;
}

.progressStats small {
  color: #94a3b8;
  font-size: 8px;
}

.dotBlue,
.dotGreen,
.dotPurple,
.dotOrange {
  width: 9px;
  height: 9px;
  flex: 0 0 9px;
  border-radius: 50%;
}

.dotBlue {
  background: #6366f1;
}

.dotGreen {
  background: #10b981;
}

.dotPurple {
  background: #8b5cf6;
}

.dotOrange {
  background: #f59e0b;
}

/* =========================
   DEADLINES
========================= */

.deadlineList {
  padding: 7px 20px 12px;
}

.deadline {
  min-height: 70px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid #eef2f7;
}

.deadline:last-child {
  border-bottom: 0;
}

.dateBadge {
  width: 40px;
  height: 43px;
  flex: 0 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border: 1px solid #eef2f7;
  border-radius: 10px;
}

.dateBadge strong {
  color: #0f172a;
  font-size: 13px;
}

.dateBadge span {
  margin-top: 2px;
  color: #94a3b8;
  font-size: 7px;
  font-weight: 700;
}

.deadline > div:nth-child(2) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.deadline > div:nth-child(2) strong {
  color: #334155;
  font-size: 10px;
}

.deadline > div:nth-child(2) span {
  color: #94a3b8;
  font-size: 8px;
}

.deadline b {
  padding: 5px 8px;
  border-radius: 20px;
  font-size: 7px;
  font-weight: 700;
}

.redBadge {
  background: #fef2f2;
  color: #ef4444;
}

.orangeBadge {
  background: #fff7ed;
  color: #ea580c;
}

.blueBadge {
  background: #eff6ff;
  color: #2563eb;
}

/* =========================
   STUDENT TABLE
========================= */

.studentTable {
  width: 100%;
}

.tableHeader,
.studentRow {
  display: grid;
  grid-template-columns: 1.45fr 1.1fr 1fr 0.65fr;
  align-items: center;
  gap: 14px;
  padding: 0 20px;
}

.tableHeader {
  min-height: 39px;
  background: #f8fafc;
  border-bottom: 1px solid #eef2f7;
  color: #94a3b8;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.studentRow {
  min-height: 68px;
  border-bottom: 1px solid #eef2f7;
  color: #64748b;
  font-size: 8px;
  transition: background 0.2s ease;
}

.studentRow:hover {
  background: #fafbff;
}

.studentRow:last-child {
  border-bottom: 0;
}

.studentName {
  display: flex;
  align-items: center;
  gap: 10px;
}

.userAvatar {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  color: #475569;
  font-size: 10px;
  font-weight: 800;
}

.studentName div:last-child {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.studentName strong {
  color: #1e293b;
  font-size: 10px;
}

.studentName span {
  color: #94a3b8;
  font-size: 7px;
}

.progressCell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.progressTrack {
  width: 75px;
  height: 6px;
  overflow: hidden;
  background: #e9edf4;
  border-radius: 20px;
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #818cf8);
  border-radius: inherit;
}

.progressCell span {
  color: #64748b;
  font-size: 8px;
  font-weight: 700;
}

.statusActive,
.statusPending {
  width: fit-content;
  padding: 5px 9px;
  border-radius: 20px;
  font-size: 7px;
  font-weight: 700;
}

.statusActive {
  background: #ecfdf5;
  color: #059669;
}

.statusPending {
  background: #fff7ed;
  color: #ea580c;
}

/* =========================
   ACTIVITY
========================= */

.activityList {
  padding: 5px 20px 12px;
}

.activityItem {
  min-height: 68px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid #eef2f7;
}

.activityItem:last-child {
  border-bottom: 0;
}

.activityIcon {
  width: 35px;
  height: 35px;
  flex: 0 0 35px;
  display: grid;
  place-items: center;
  background: #f8fafc;
  border: 1px solid #eef2f7;
  border-radius: 11px;
  font-size: 13px;
}

.activityItem > div:last-child {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.activityItem strong {
  color: #1e293b;
  font-size: 9px;
}

.activityItem span {
  color: #64748b;
  font-size: 8px;
}

.activityItem small {
  color: #a1aab8;
  font-size: 7px;
}

/* =========================
   INSIGHTS
========================= */

.insightCard,
.quickCard {
  min-height: 155px;
}

.insightBox {
  margin: 14px;
  padding: 17px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: linear-gradient(
    135deg,
    #eef2ff,
    #f5f3ff
  );
  border: 1px solid #e0e7ff;
  border-radius: 13px;
}

.insightEmoji {
  font-size: 18px;
}

.insightBox strong {
  color: #4338ca;
  font-size: 10px;
}

.insightBox p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 8px;
  line-height: 1.7;
}

/* =========================
   QUICK ACTIONS
========================= */

.quickActions {
  padding: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 9px;
}

.quickActions button {
  min-height: 51px;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  color: #334155;
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.quickActions button:hover {
  transform: translateY(-2px);
  background: #f8faff;
  border-color: #c7d2fe;
  box-shadow: 0 7px 16px rgba(79, 70, 229, 0.08);
}

.quickActions span {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  background: #f1f5f9;
  border-radius: 8px;
  font-size: 12px;
}

.quickActions strong {
  font-size: 8px;
}

/* =========================
   SYSTEM STATUS
========================= */

.statusBar {
  min-height: 38px;
  margin-bottom: 16px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  color: #64748b;
  font-size: 8px;
}

.statusBar > div {
  display: flex;
  align-items: center;
  gap: 7px;
}

.statusBar strong {
  color: #334155;
  font-size: 8px;
}

.onlineDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
}

/* =========================
   BANNER
========================= */

.banner {
  min-height: 82px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  gap: 16px;
  background:
    radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.8), transparent 25%),
    linear-gradient(110deg, #e0e7ff, #eef2ff 50%, #fff7ed);
  border: 1px solid #e0e7ff;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.06);
}

.bannerIcon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  color: #6366f1;
  font-size: 17px;
  transform: none;
}

.banner h3 {
  margin: 0;
  color: #1e293b;
  font-size: 13px;
}

.banner p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 8px;
}

.bannerBadge {
  margin-left: auto;
  min-width: 125px;
  padding: 9px 13px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.bannerBadge strong {
  color: #334155;
  font-size: 8px;
}

.bannerBadge span {
  color: #94a3b8;
  font-size: 7px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {
  .dashboard {
    padding: 24px 25px 35px;
  }

  .contentGrid,
  .middleGrid,
  .bottomGrid {
    grid-template-columns: 1fr;
  }

  .statsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .dashboard {
    padding: 16px;
  }

  .topBar,
  .greeting {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .searchBox {
    width: 100%;
  }

  .topRight {
    width: 100%;
    justify-content: flex-end;
  }

  .dateBox {
    align-items: flex-start;
  }

  .greeting p {
    margin-left: 0;
  }

  .statsGrid {
    grid-template-columns: 1fr;
  }

  .progressSummary {
    flex-direction: column;
  }

  .progressStats {
    width: 100%;
  }

  .tableHeader {
    display: none;
  }

  .studentRow {
    grid-template-columns: 1fr;
    gap: 9px;
    padding: 14px 20px;
  }

  .banner {
    align-items: flex-start;
  }

  .bannerBadge {
    display: none;
  }
}