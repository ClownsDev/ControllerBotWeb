import React from "react";

import Header from "../Header/Header";
import servers from "./Servers.module.scss";
import global from "../assets/styles/_global.module.scss";

const Servers = () => {
  return (
    <>
      <Header />
      <>
        <div className={global.container}>
          <h1 className={servers.title}>Select a server</h1>
        </div>
      </>
    </>
  );
};

export default Servers;
