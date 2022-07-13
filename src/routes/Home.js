import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MusicPlayerOne from "../components/MusicPlayerOne";
import CarouselPlayer from "../components/CarouselPlayer";
import { Container } from "@mui/material";

function Home() {
  return (
    <Grid>
      <CarouselPlayer></CarouselPlayer>
    </Grid>
  );
}

export default Home;
