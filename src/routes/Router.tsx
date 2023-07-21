import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import HomePage from "../pages/HomePage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
    </Routes>
  );
};

export default Router;
