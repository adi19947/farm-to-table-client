import { Button, Typography } from "@mui/material";
import { object, string } from "prop-types";
import React from "react";
import NavBarLink from "./NavBarLink";
import { useTheme } from "../../context/ThemeProvider";

interface NavItemProps {
  to: string;
  sx?: object;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, sx, label }) => {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={to} sx={sx}>
      <Button color="inherit">
        <Typography
          sx={{
            color: "white",

            "&:hover": {
              color: "yellowgreen", // Change the color to red on hover
              cursor: "pointer", // Optional: Show pointer cursor on hover
            },
            fontWeight: "bold",
          }}
        >
          {label}
        </Typography>
      </Button>
    </NavBarLink>
  );
};

NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object,
};

export default NavItem;
