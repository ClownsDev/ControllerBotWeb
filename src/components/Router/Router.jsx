import React from "react";
import { Routes, Route } from "react-router-dom";

import VisitPage from "../../pages/Visit/VisitPage";
import ServersPage from "../../pages/Servers/ServersPage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VisitPage />} />
      <Route path="/servers" element={<ServersPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
