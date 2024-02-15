import React from "react";

import { NavLink } from "react-router-dom";
import dashboardStyles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <>
      <aside className={dashboardStyles.aside}>
        <div className={dashboardStyles.profileBox}>
          <img src="/Dashboard/avatar.jpg" alt="avatar" />
          <p>Никита</p>
        </div>
        <div className={dashboardStyles.category}>
          <ul className={dashboardStyles.categoryLink}>
            <li>
              <NavLink to="/dashboard/general">
                General <img src="/Dashboard/leaderboard.svg" alt="General" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/leaderboard">
                Leaderboard <img src="/Dashboard/award.svg" alt="Awards" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/personalizer">
                Bot Personalizer <img src="/Dashboard/bot.svg" alt="Bot" />{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/settings">
                Settings <img src="/Dashboard/settings.svg" alt="Settings" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/moderator">
                Moderator <img src="/Dashboard/shield.svg" alt="Moderator" />
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
