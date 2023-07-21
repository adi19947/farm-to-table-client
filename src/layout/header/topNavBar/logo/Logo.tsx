import { Typography } from "@mui/material";
import React from "react";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";
import { useTheme } from "../../../../context/ThemeProvider";

const Logo: React.FC = () => {
  const { isDark } = useTheme();
  return (
    <>
      <NavBarLink to={ROUTES.ROOT} sx={{ color: "black" }}>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", md: "inline-flex" },
            marginRight: 2,
            fontFamily: "fantasy",
            color: isDark ? "white" : "black",
          }}
        >
          BCard
        </Typography>
      </NavBarLink>
    </>
  );
};

export default Logo;
