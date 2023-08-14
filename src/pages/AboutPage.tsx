import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import PageHeader from "../components/PageHeader";
import { useTheme } from "../context/ThemeProvider";

const AboutPage: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div>
      <Container>
        <PageHeader
          title="
Our Story"
          subtitle="From Farm to Table"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} md={8} alignSelf="center">
            <Typography sx={{ color: isDark ? "white" : "black" }}>
              Our story begins with a deep-rooted love for nature and a strong
              passion for providing people with the best, freshest, and most
              wholesome food possible. It all started on a small family farm
              nestled in the heart of the countryside, where we grew our own
              fruits and vegetables, tended to our animals, and embraced the
              true essence of sustainable agriculture. As we cultivated the land
              and nurtured our crops, we realized the immense potential of
              bringing our farm-fresh produce directly to the tables of our
              local community. The idea of a Farm-to-Table venture began to take
              shape, driven by the desire to bridge the gap between farmers and
              consumers and to celebrate the bounty of our land. With unwavering
              dedication and a commitment to quality, we expanded our farm and
              formed strong partnerships with neighboring farmers and artisans
              who shared our vision. Together, we fostered a close-knit network
              of passionate individuals, each dedicated to their craft and the
              art of producing the finest ingredients. As our Farm-to-Table
              concept grew, so did our community of customers, supporters, and
              food enthusiasts. We witnessed the joy on people's faces as they
              tasted the vibrant flavors of freshly harvested vegetables, the
              sweetness of ripe fruits, and the richness of artisanal products
              made with love and care. Our Farm-to-Table journey has been filled
              with challenges and triumphs, but through it all, our core values
              have remained unchanged – promoting sustainability, supporting
              local communities, and cherishing the connection between people
              and their food. Today, our Farm-to-Table venture stands as a
              testament to the power of mindful eating and the significance of
              conscious choices. We take pride in the relationships we have
              formed with our customers, who have become an integral part of our
              farm family. From our farm to your table, we invite you to
              experience the true taste of nature's bounty. With every bite,
              savor the story of our land, our farmers, and the collective
              effort that goes into creating the finest ingredients for your
              enjoyment. Thank you for being a part of our journey, and we look
              forward to sharing our passion for wholesome, sustainable, and
              delicious food with you, now and for generations to come.
              Together, let's celebrate the timeless tradition of Farm-to-Table
              and the abundance of nature's gifts.
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <img src="/assets/images/grapes.jpg" alt="grapes" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutPage;
