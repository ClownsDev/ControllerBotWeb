import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFoundBlock.module.scss";

const NotFound = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.box}>
          <img src="../../../public/notFound/background.png" alt="" />
        </div>
        <div className={styles.error}>
          <h1>404</h1>
          <span className={styles.test}>Страница не найдена 😕</span>
          <Link className={styles.btn} to="/">
            На главную
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
