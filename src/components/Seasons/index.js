import React from "react";

//styles
import { Wrapper, Content } from "./Seasons.styles";

//Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//components
import Thumb from "../Thumb";

//Image
import NoImage from "../../images/no_image.jpg";

const Seasons = ({ show }) => (
  <Wrapper>
    <Content>
      {show.seasons.map((season) => (
        <div className="Thumb">
          <Thumb
            key={season.id}
            clickable={false}
            link={false}
            image={
              season.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + season.poster_path
                : NoImage
            }
            movieId={season.id}
          />
          <div className="info">
            <h2>{season.name}</h2>
            <p>{season.overview}</p>
            <p>
              <strong>Number of episodes:</strong>{" "}
              <span>{season.episode_count}</span>
            </p>
          </div>
        </div>
      ))}
    </Content>
  </Wrapper>
);

export default Seasons;
