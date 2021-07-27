import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./Grid.styles";

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

Grid.propTypes = {
  header: PropsTypes.string,
};

export default Grid;
