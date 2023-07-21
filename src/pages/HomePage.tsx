import React from "react";
import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ position: "absolute", top: 0, width: "100%" }}>
      <img
        src="/assets/images/header-image.jpg"
        alt="Header"
        style={{ width: "100%", height: "40rem" }}
      />
    </Box>
  );
};

export default HomePage;
