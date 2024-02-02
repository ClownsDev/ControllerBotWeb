import React from "react";
import { Routes, Route } from "react-router-dom";
import VisitPage from "../../pages/Visit/VisitPage";
import Servers from "../SelectServers/SelectServers";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VisitPage />} />
      <Route path="/servers" element={<Servers />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
