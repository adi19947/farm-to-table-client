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
            src="/assets/images/business-card.png"
            alt="business-card icon"
          />
        </IconButton>
      </NavBarLink>
    </>
  );
};

export default LogoIcon;
