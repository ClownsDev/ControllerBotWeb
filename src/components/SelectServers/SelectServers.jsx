import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import servers from "./SelectServers.module.scss";
import global from "../assets/styles/_global.module.scss";

const Servers = () => {
  return (
    <>
      <Header />
      <>
        <div className={global.container}>
          <h1 className={servers.title}>Select a server</h1>
          <div className={servers.wrapper}>
            <div className={servers.box}>
              <div className={servers.imageAndLogo}>
                <div className={servers.image}></div>
                <div className={servers.logo}></div>
              </div>
              <div className={servers.description}>
                <div className={servers.text}>
                  <h3 className={servers.serverName}>Nickname</h3>
                  <p className={servers.serverRole}>Owner</p>
                </div>
                <Link to="/dashboard" className={servers.buttonSetup}>
                  Setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Servers;
