import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const LogoIcon: React.FC = () => {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton>
          <Avatar
            src="/assets/images/farm-to-table-icon.png"
            alt="business-card icon"
            sx={{ width: 130, height: 130 }}
          />
        </IconButton>
      </NavBarLink>
    </>
  );
};

export default LogoIcon;
