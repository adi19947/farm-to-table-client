import React from "react";
import { Box, Typography } from "@mui/material";

const Intro: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        color="white"
        sx={{ textDecoration: "underline" }}
      >
        FARM TO TABLE
      </Typography>
      <Typography variant="h6" fontWeight="bold" color="white">
        Welcome to our Farm-to-Table Web-Shop! We take pride in bringing you the
        freshest, locally sourced produce and artisanal products right from our
        farm to your table. Our mission is to promote sustainable agriculture
        and support local farmers, ensuring that you receive the highest quality
        products while contributing to the well-being of our community. From
        farm-fresh vegetables and fruits to organic dairy and handcrafted goods,
        every item in our shop is carefully curated with your health and taste
        buds in mind. Join us on this journey towards a healthier and more
        sustainable lifestyle. Happy shopping!
      </Typography>
    </Box>
  );
};

export default Intro;
