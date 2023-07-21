import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar";
import RightNavBar from "./right-navigation/RightNavBar";
import SearchBar from "./search-bar/SearchBar";
import { useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const location = useLocation();
  const hideSearchBar = location.pathname.includes("product-info");

  return (
    <AppBar position="sticky" color="transparent" elevation={10}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavBar />
        {!hideSearchBar && <SearchBar />}
        <RightNavBar />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
