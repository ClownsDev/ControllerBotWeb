import React from "react";
import styles from "./SimpleButton.module.scss";
import { Link } from "react-router-dom";

function SimpleButton({ children, onClick, path }) {
  return (
    <Link to={path} className={styles.btn} onClick={() => onClick()}>
      {children}
      {/* Hover elements */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
}

export default SimpleButton;
