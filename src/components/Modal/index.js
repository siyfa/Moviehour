import React from "react";

//component
import MovieTrailer from "../MovieTrailer";

//styles
import { Wrapper, Content } from "../Modal/Modal.styles";

const Modal = ({ show, movie }) => {
  return (
    <Wrapper>
      {show ? (
        <Content>
          <MovieTrailer
            title={movie.title}
            videoKey={movie.video.results[0].key}
          />
        </Content>
      ) : null}
    </Wrapper>
  );
};

export default Modal;
