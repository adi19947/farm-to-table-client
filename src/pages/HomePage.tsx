import React from "react";
import { Box } from "@mui/material";
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
      <Box
        sx={{
          backgroundImage: "url(/assets/images/header-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Set the height of the container to fill the viewport
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Intro />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundImage: "url(/assets/images/tree.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Set the height of the container to fill the viewport
          display: "flex",

          justifyContent: "center",
        }}
      >
        <Box>
          <ProductsIntro products={products} />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
