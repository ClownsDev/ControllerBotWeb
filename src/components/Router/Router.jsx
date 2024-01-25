import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import VisitPage from "../../pages/Visit/VisitPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<VisitPage />} />
      <Route path="/server" element={<h1>SERVER!!</h1>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
