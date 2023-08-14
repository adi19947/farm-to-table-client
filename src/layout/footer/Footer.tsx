import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../context/ThemeProvider";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ bgcolor: isDark ? "black" : "#ff5722" }}
        showLabels
      >
        <BottomNavigationAction
          label="About"
          icon={<FavoriteIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
          sx={{ color: "white" }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
