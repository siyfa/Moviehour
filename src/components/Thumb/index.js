import React from "react";
import { Link } from "react-router-dom";
import PropsTypes from "prop-types";

//styles
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, link, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${link}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropsTypes.string,
  movieId: PropsTypes.number,
};

export default Thumb;
