import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import HomePage from "../pages/HomePage";
import Meat from "../pages/Meat";
import Fruits from "../pages/Fruits";
import Vegetables from "../pages/Vegetables";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.MEAT} element={<Meat />} />
      <Route path={ROUTES.FRUITS} element={<Fruits />} />
      <Route path={ROUTES.VEGETABLES} element={<Vegetables />} />
    </Routes>
  );
};

export default Router;
