import React from "react";
import { Link } from "react-router-dom";

//styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = () => (
  <Wrapper>
    <Content>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>

        <li>
          <Link to="/tv">Tv Shows</Link>
        </li>
      </ul>
      <div>
        <p>Designed By Siyfa | copyright 2021</p>
      </div>
    </Content>
  </Wrapper>
);

export default Footer;
