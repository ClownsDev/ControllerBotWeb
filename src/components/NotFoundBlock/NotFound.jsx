import React from "react";
import styles from "./NotFoundBlock.module.scss";

const NotFound = () => {
  return (
    <>
      <div className={styles.root}>
        Ошибка 404
        <span>Страница не найдена 😕</span>
      </div>
    </>
  );
};

export default NotFound;
