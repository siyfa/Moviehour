import React, { useState } from "react";
import PropsTypes from "prop-types";

//components
import Modal from "../Modal";

//styles
import { Wrapper, Content, Thumb } from "./MovieInfo.styles";

const MovieInfo = ({ movie, trailer }) => {
  const [show, setShow] = useState(false);

  // const showHideClassName = show ? "display-block" : "display-none";

  const openModal = () => {
    setShow(true);
  };
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      {trailer === true ? (
        <Content>
          {show ? <Modal show={show} movie={movie} /> : null}
          <Thumb backdrop={movie.poster_path} />
          <div className="trailer">
            <button onClick={openModal}>
              <img
                src="https://img.icons8.com/ios-filled/100/000000/play--v2.png"
                alt="play icon"
              />
            </button>
            <h3>Watch Trailer</h3>
          </div>
        </Content>
      ) : null}
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropsTypes.object,
};

export default MovieInfo;
