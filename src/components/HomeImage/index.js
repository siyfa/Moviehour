import React from "react";
import PropsTypes from "prop-types";

//Styles
import { Wrapper, Content, Text } from "./HomeImage.styles";

const HomeImage = ({ image, text, title }) => (
  <div style={{ overflow: "hidden" }}>
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>Welcome To Movie Hour</h1>
          <p>
            You will get details of your favourite movies and shows here. Stay
            tune...
          </p>
          <div>
            <h3>
              Trending now - <span>{title}</span>
            </h3>
          </div>
        </Text>
      </Content>
    </Wrapper>
  </div>
);

HomeImage.propTypes = {
  image: PropsTypes.string,
  text: PropsTypes.string,
  title: PropsTypes.string,
};

export default HomeImage;
