import React from "react";
import { Box, Container } from "@mui/material";
import Intro from "../components/IntroHomePage";
import ProductsIntro from "../components/ProductsIntro";

const products = [
  {
    name: "Meat",
    image: "/assets/images/meat.jpg",
    link: "/meat",
  },
  {
    name: "Fruits",
    image: "/assets/images/apples.jpg",
    link: "/fruits",
  },
  {
    name: "Vegetables",
    image: "/assets/images/vegetables.jpg",
    link: "/vegetables",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <img
          src="/assets/images/header-image.jpg"
          alt="Header-image"
          style={{ width: "100%", height: "40rem" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            padding: "20px",
          }}
        >
          <Intro />
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <img
          src="/assets/images/tree.jpg"
          alt="Header-image"
          style={{ width: "100%", height: "40rem" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            padding: "20px",
          }}
        >
          <ProductsIntro products={products} />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
