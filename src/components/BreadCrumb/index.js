import React from "react";
import PropsTypes from "prop-types";

import { Link } from "react-router-dom";
import { Content, Wrapper } from "./BreadCrumb.styles";

const BreadCrumb = ({ movieTitle, link }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home || </span>
      </Link>
      {link === "tv" ? (
        <Link to="/tv">
          <span>Tv Shows || </span>
        </Link>
      ) : (
        <Link to="/movies">
          <span>Movies || </span>
        </Link>
      )}
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrumb.propTypes = {
  movieTitle: PropsTypes.string,
  link: PropsTypes.string,
};

export default BreadCrumb;
