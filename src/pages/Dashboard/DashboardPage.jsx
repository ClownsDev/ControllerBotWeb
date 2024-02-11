import Dashboard from "../../components/Dashboard/Dashboard";
import Header from "../../components/Header/Header";

import global from "../../components/assets/styles/_global.module.scss";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={global.containerSecond}>
        <Dashboard />
      </div>
    </>
  );
};

export default DashboardPage;
