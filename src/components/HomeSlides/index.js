import React, { useRef } from "react";
import PropTypes from "prop-types";

//Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../config";
//styles
import { Wrapper, Content, Left, Right } from "./HomeSlides.styles";

//components
import Thumb from "../Thumb";

//Image
import NoImage from "../../images/no_image.jpg";
import LeftButton from "../../images/icons8-chevron-left-30.png";
import RightButton from "../../images/icons8-chevron-right-30.png";
import Spinner from "../Spinner";

const HomeSlides = ({ items, header, link }) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Left>
        <button onClick={() => scroll(-200)}>
          <img src={LeftButton} alt="left button" />
        </button>
      </Left>
      <Content ref={ref}>
        {items.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            link={
              movie.media_type
                ? movie.media_type === "tv"
                  ? `/tv/${movie.id}`
                  : `/movies/${movie.id}`
                : link + movie.id
            }
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Content>
      <Right>
        <button onClick={() => scroll(200)}>
          <img src={RightButton} alt="right button" />
        </button>
      </Right>
    </Wrapper>
  );
};

HomeSlides.propTypes = {
  name: PropTypes.string,
};

export default HomeSlides;
