import { Box } from "@mui/material";
import React from "react";

import { useUser } from "../../../../users/providers/UserProvider";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogIcon";
import ROUTES from "../../../../routes/routesModel";
import NavItem from "../../../../routes/components/NavItem";

const LeftNavBar: React.FC = () => {
  const { user } = useUser();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <LogoIcon />
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            alignItems: "center",
          },
        }}
      >
        <Logo />
        {user && <NavItem to={ROUTES.PRODUCTS} label="PRODUCTS" />}
        <NavItem to={ROUTES.ABOUT} label="ABOUT" />
        {user && <NavItem to={ROUTES.FAV_PRODUCTS} label="favorites" />}
        {user && <NavItem to={ROUTES.MY_CART} label="MY Cards" />}
        {user && <NavItem to={ROUTES.USERS} label="users management" />}
      </Box>
    </Box>
  );
};

export default LeftNavBar;
