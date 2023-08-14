import { Box } from "@mui/material";
import React from "react";

import { useUser } from "../../../../users/providers/UserProvider";

import { useLocation } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";
import NavItem from "../../../../routes/components/NavItem";
import SearchBar from "../search-bar/SearchBar";
import CartIcon from "./CartIcon";

const LeftNavBar: React.FC = () => {
  const { user } = useUser();
  const location = useLocation();
  const hideSearchBar = location.pathname.includes("product-info");

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            alignItems: "center",
          },
        }}
      >
        {!hideSearchBar && <SearchBar />}
        <CartIcon />
        {user && <NavItem to={ROUTES.PRODUCTS} label="PRODUCTS" />}
        {user && <NavItem to={ROUTES.FAV_PRODUCTS} label="favorites" />}
        {user && <NavItem to={ROUTES.MY_CART} label="MY Cards" />}
        {user && <NavItem to={ROUTES.USERS} label="users management" />}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
