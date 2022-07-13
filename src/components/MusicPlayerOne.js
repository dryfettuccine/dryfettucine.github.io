import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material";

const MusicPlayerOne = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={0}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default MusicPlayerOne;
