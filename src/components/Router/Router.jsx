import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";
import VisitPage from "../../pages/Visit/VisitPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/visit" element={<VisitPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
