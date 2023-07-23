import React from "react";
import { MenuProvider } from "../../context/MenuProvider";
import NavBar from "./topNavBar/NavBar";
import { Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box>
      <MenuProvider>
        <NavBar />
      </MenuProvider>
    </Box>
  );
};

export default Header;
