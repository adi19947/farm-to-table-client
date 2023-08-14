import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

type Product = {
  name: string;
  image: string;
  link: string;
};

type IntroProps = {
  products: Product[];
};

const ProductsIntro: React.FC<IntroProps> = ({ products }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{ textDecoration: "underline", mt: 5, mb: 5, color: "white" }}
      >
        OUR PRODUCTS
      </Typography>

      <Grid container sx={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box key={product.name} sx={{ textAlign: "center" }}>
              <Link href={product.link} underline="none">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "250px", height: "250px" }}
                />
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  color="white"
                  sx={{ textDecoration: "underline" }}
                >
                  {product.name}
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsIntro;
