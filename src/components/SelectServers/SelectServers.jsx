import React from "react";

import Header from "../Header/Header";
import servers from "./SelectServers.module.scss";
import global from "../assets/styles/_global.module.scss";

const Servers = () => {
  return (
    <>
      <Header />
      <>
        <div className={global.container}>
          <div className={servers.page}>
          <h1 className={servers.title}>Select a server</h1>
          <div className={servers.grid}>
          <div className={servers.case}>
          <div className={servers.box}>
            <div className={servers.imageAndLogo}>
              <div className={servers.image}></div>
              <div className={servers.logo}></div>
            </div>
            <div className={servers.description}>
              <div className={servers.text}>
                <h3 className={servers.serverName}>FuckMyMom</h3>
                <div className={servers.serverRole}>Owner</div>
              </div>
              <button className={servers.buttonSetup}>Setup</button>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>

      </>
    </>
  );
};

export default Servers;
