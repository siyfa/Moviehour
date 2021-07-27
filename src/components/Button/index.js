import React from "react";
import PropsTypes from "prop-types";

//styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback }) => (
  <Wrapper typeof="button" onClick={callback}>
    {text}
  </Wrapper>
);
Button.propTypes = {
  text: PropsTypes.string,
  callback: PropsTypes.func,
};

export default Button;
