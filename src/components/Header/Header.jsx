import React from "react";
import { Link } from "react-router-dom";

import headerStyle from "./HeaderBlock.module.scss";
import globalStyle from "../assets/styles/_global.module.scss";
import Logo from "../UI/Logo/Logo";
import DropMenu from "../UI/DropMenu/DropMenu";

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <div className={globalStyle.container}>
        <nav>
          <Link to="/">
            <Logo color="#fff" />
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
            <li>
              <a href="#">Справочник</a>
            </li>
            <li>
              <a href="#">Донаты</a>
            </li>
          </ul>
          <DropMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
