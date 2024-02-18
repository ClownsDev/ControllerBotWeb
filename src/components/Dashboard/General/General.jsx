import React from "react";
import Header from "../../Header/Header";
import Dashboard from "../Dashboard";

import generalStyles from "./General.module.scss";

const General = () => {
  return (
    <>
      <Header />
      <div className={generalStyles.box}>
        <Dashboard />
        <div className={generalStyles.options}>
          <h1>General</h1>
        </div>
      </div>
    </>
  );
};
export default General;
