import React from "react";
import styles from "./HeaderBlock.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <nav>
        logo
        <ul>
          <li>
            <a href="#">first</a>
          </li>
          <li>
            <a href="#">second</a>
          </li>
          <li>
            <a href="#">third</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
