import React from "react";
import PropsTypes from "prop-types";

//Styles
import { Wrapper, Content, Text } from "./HeroImage.styles";

const HeroImage = ({ image, text, title }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>Get Movies And Tv Show Updates</h1>
        <p>
          Get all the latest about your favourites here, stay tune and keep
          visiting...
        </p>
      </Text>
    </Content>
  </Wrapper>
);

HeroImage.propTypes = {
  image: PropsTypes.string,
  text: PropsTypes.string,
  title: PropsTypes.string,
};

export default HeroImage;
