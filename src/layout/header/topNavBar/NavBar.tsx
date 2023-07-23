import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";

import LogoIcon from "./logo/LogIcon";

import NavItem from "../../../routes/components/NavItem";
import ROUTES from "../../../routes/routesModel";

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ color: "white" }} elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        <LogoIcon />
        <RightNavBar />
      </Toolbar>

      <Toolbar
        sx={{
          justifyContent: "space-evenly",
          borderTop: "1px solid black", // Adjust the color and size of the top border
          borderBottom: "1px solid black", // Adjust the color and size of the bottom border
          padding: "16px",
          display: {
            xs: "none",
            md: "flex",
            alignItems: "center",
          },
        }}
      >
        <NavItem to={ROUTES.ABOUT} label="vegetables" />
        <NavItem to={ROUTES.PRODUCTS} label="fruits" />
        <NavItem to={ROUTES.PRODUCTS} label="meat" />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
