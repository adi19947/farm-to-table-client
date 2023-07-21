import React from "react";

import NavBarLink from "./NavBarLink";
import MenuItem from "@mui/material/MenuItem";

import { useTheme } from "../../context/ThemeProvider";
import { makeFirstLetterCapital } from "../../utils/algoMethods";

interface MenuLinkProps {
  navigateTo: string;
  onClick?: () => void;
  text: string;
  styles?: React.CSSProperties;
}

const MenuLink: React.FC<MenuLinkProps> = ({
  text,
  navigateTo,
  onClick,
  styles,
}) => {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem
        sx={{ color: isDark ? "white" : "black", ...styles }}
        onClick={onClick}
      >
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};

export default MenuLink;
