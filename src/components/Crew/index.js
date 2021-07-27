import React from "react";
import PropsTypes from "prop-types";

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//component
import Grid from "../Grid";

//Images
import NoImage from "../../images/no_image.jpg";

//styles
import {
  Wrapper,
  Content,
  Director,
  Actors,
  Image,
  Actor,
} from "./Crew.styles";

const Crew = ({ actors, directors }) => (
  <Wrapper>
    <Content>
      <Director>
        <h2>DIRECTOR{directors.length > 1 ? "S" : ""}</h2>
        <Grid>
          {directors.map((director) => (
            <div key={director.credit_id} className="section">
              <Image
                src={
                  director.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${director.profile_path}`
                    : NoImage
                }
                alt="director-thumb"
              />
              <h3>{director.name}</h3>
              <p>{director.job}</p>
            </div>
          ))}
        </Grid>
      </Director>
      <Actor>
        <h2>ACTORS</h2>
        <Grid>
          {actors.map((actor) => (
            <Actors key={actor.credit_id}>
              <Image
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                    : NoImage
                }
                alt="actor-thumb"
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </Actors>
          ))}
        </Grid>
      </Actor>
    </Content>
  </Wrapper>
);

Crew.propTypes = {
  name: PropsTypes.string,
  character: PropsTypes.string,
  imageUrl: PropsTypes.string,
};

export default Crew;
