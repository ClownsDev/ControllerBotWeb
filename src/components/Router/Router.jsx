import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import NotFoundPage from "../../pages/NotFound/NotFoundPage";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  )
}

export default Router