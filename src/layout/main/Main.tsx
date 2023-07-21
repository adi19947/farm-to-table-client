import { Box, IconButton } from "@mui/material";
import React, { ReactNode } from "react";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import { useNavigate } from "react-router-dom";

import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../context/ThemeProvider";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <Box
        sx={{
          minHeight: "85vh",
          backgroundColor: isDark ? "#333333" : "#e3f2fd",
        }}
      >
        {children}
        {user ? (
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "fixed",
              bottom: 70,
              right: 10,
            }}
          >
            <IconButton onClick={() => navigate(`${ROUTES.CREATE_PRODUCT}`)}>
              <AddCircleSharpIcon
                sx={{
                  color: "#1976d2",
                  fontSize: "4rem",
                }}
              />
            </IconButton>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Main;
