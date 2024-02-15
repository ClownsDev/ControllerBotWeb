import React from "react";
import { Link } from "react-router-dom";

import headerStyle from "./HeaderBlock.module.scss";
import globalStyle from "../assets/styles/_global.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.root}>
      {/* <div className={globalStyle.containerSecond}> */}
      <nav>
        <Link to="/">
          <img src="/logo.svg" alt="waves" />
        </Link>
        <ul>
          <li>
            <Link to="#">Сообщество</Link>
          </li>
          <li>
            <Link to="#">Справочник</Link>
          </li>
          <li>
            <Link to="#">Донаты</Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
