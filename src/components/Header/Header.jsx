import React from "react";

import { Link } from "react-router-dom";

import headerStyle from "./HeaderBlock.module.scss";
import globalStyle from "../assets/styles/_global.module.scss";

const Header = () => {
  return (
    <header className={headerStyle.root}>
      <div className={globalStyle.container}>
        <nav>
          <Link to="/">
            <img src="./logo.svg" alt="waves" />
          </Link>
          <ul>
            <li>
              <a href="#">Сообщество</a>
            </li>
            <li>
              <a href="#">Справочник</a>
            </li>
            <li>
              <a href="#">Донаты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
