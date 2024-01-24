import React from "react";
import styles from "./SimpleButton.module.scss";
import { Link } from "react-router-dom";

function SimpleButton({ children }) {
  return (
    <Link to="/" className={styles.btn}>
      {children}
    </Link>
  );
}

export default SimpleButton;
