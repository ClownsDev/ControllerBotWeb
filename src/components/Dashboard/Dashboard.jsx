import React from "react";

import dashboardStyles from "./Dashboard.module.scss";
import { Link } from "react-router-dom";

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
              <Link to="/dashboard/general">
                General <img src="/Dashboard/leaderboard.svg" alt="General" />
              </Link>
            </li>
            <li>
              <Link>
                Leaderboard <img src="/Dashboard/award.svg" alt="Awards" />
              </Link>
            </li>
            <li>
              <Link>
                Bot Personalizer <img src="/Dashboard/bot.svg" alt="Bot" />{" "}
              </Link>
            </li>
            <li>
              <Link>
                Settings <img src="/Dashboard/settings.svg" alt="Settings" />
              </Link>
            </li>
            <li>
              <Link>
                Moderator <img src="/Dashboard/shield.svg" alt="Moderator" />
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Dashboard;
