import React from "react";

//styles
import { Wrapper, Iframe } from "./MovieTrailer.styles";

const MovieTrailer = ({ title, videoKey }) => (
  <Wrapper>
    <Iframe
      src={`https://www.youtube.com/embed/${videoKey}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </Wrapper>
);

export default MovieTrailer;
