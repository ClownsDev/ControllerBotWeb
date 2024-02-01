import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFoundBlock.module.scss";
import SimpleButton from "../UI/SimpleButton/SimpleButton";

const NotFound = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.box}>
          <img src="../../../public/notFound/background.png" alt="" />
        </div>
        <div className={styles.error}>
          <h1>404</h1>
          <span className={styles.description}>Страница не найдена 😕</span>
          <SimpleButton children={"На главную"} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
