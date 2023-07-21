import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import RecentActorsIcon from "@mui/icons-material/RecentActors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyleIcon from "@mui/icons-material/Style";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0, zIndex: 9999 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<FavoriteIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            label="Cards"
            icon={<StyleIcon />}
            onClick={() => navigate(ROUTES.CARDS)}
          />
        )}
        {user && (
          <BottomNavigationAction
            label="My cards"
            icon={<RecentActorsIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
        {user && (
          <BottomNavigationAction
            label="Favorite cards"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
