import React from "react";
import { Routes, Route } from "react-router-dom";

import VisitPage from "../../pages/Visit/VisitPage";
import ServersPage from "../../pages/Servers/ServersPage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import GeneralPage from "../../pages/Dashboard/General/GeneralPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VisitPage />} />
      <Route path="/servers" element={<ServersPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/:id" element={<GeneralPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
