import { Box, IconButton } from "@mui/material";
import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import { useUser } from "../../../../users/providers/UserProvider";
import MoreButton from "./MoreButton";
import AddButton from "./AddButton";
import { useTheme } from "../../../../context/ThemeProvider";

const RightNavBar: React.FC = () => {
  const { isDark, toggleDarkMode } = useTheme();
  const { user } = useUser();

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user ? <Logged /> : <NotLogged />}
      </Box>
      {user ? <AddButton /> : null}
      <MoreButton />
    </>
  );
};

export default RightNavBar;
