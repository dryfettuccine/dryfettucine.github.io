import React from "react";
import { Paper, Button } from "@mui/material";
import MusicPlayerOne from "./MusicPlayerOne";
import MusicPlayerTwo from "./MusicPlayerTwo";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";

import "../video.css";

const YoutubeSlide = ({ url, isSelected }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      width="50%"
      url={url}
      playing={isSelected}
      controls={true}
    />
  </div>
);

export const CarouselPlayer = () => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  return (
    <Carousel
      renderItem={customRenderItem}
      showIndicators={false}
      showStatus={false}
      useKeyboardArrows={true}
    >
      <YoutubeSlide
        key="youtube-1"
        url="https://www.youtube.com/embed/jfKfPfyJRdk"
      />
      <YoutubeSlide
        key="youtube-2"
        url="https://www.youtube.com/embed/kgx4WGK0oNU"
      />
      <YoutubeSlide
        key="youtube-3"
        url="https://www.youtube.com/embed/-5KAN9_CzSA"
      />
      <YoutubeSlide
        key="youtube-4"
        url="https://www.youtube.com/embed/7bSlyM1allk"
      />
      <YoutubeSlide
        key="youtube-5"
        url="https://www.youtube.com/embed/oXLulNhMgxQ"
      />
      <YoutubeSlide
        key="youtube-6"
        url="https://www.youtube.com/embed/N65Jb683pXQ"
      />
      <YoutubeSlide
        key="youtube-7"
        url="https://www.youtube.com/embed/6uddGul0oAc"
      />
      <YoutubeSlide
        key="youtube-8"
        url="https://www.youtube.com/embed/NuD3o-HTbc8"
      />
      <YoutubeSlide
        key="youtube-9"
        url="https://www.youtube.com/embed/UedTcufyrHc"
      />
    </Carousel>
  );
};

export default CarouselPlayer;
