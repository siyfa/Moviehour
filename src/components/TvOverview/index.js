import React, { useState, useContext } from "react";
import PropsTypes from "prop-types";
import API from "../../API";

//component
import Rate from "../Rate";

//styles
import { Text, Wrapper, Details } from "./TvOverview.styles";

//context
import { Context } from "../../context";

const TvOverview = ({ show }) => {
  const [user] = useContext(Context);
  const [message, setMessage] = useState("");

  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, show.id, value);
    setMessage(rate.status_message);
  };

  return (
    <Wrapper>
      <h2>{show.original_name}</h2>
      <Text>{show.overview}</Text>
      <Details>
        <h2>Details - </h2>
        <p>
          <strong>Status:</strong> <span>{show.status}</span>
        </p>
        <p>
          <strong>Tagline:</strong> <span>{show.tagline}</span>
        </p>
        <p>
          <strong>Show type:</strong> <span>{show.type}</span>
        </p>
        <p>
          <strong>First air date:</strong> <span>{show.first_air_date}</span>
        </p>
        <p>
          <strong>Last air date:</strong> <span>{show.last_air_date}</span>
        </p>
        <p>
          <strong>Original language: </strong>
          <span>{show.original_language}</span>
        </p>
        <p>
          <strong>Spoken languages: </strong>
          {show.spoken_languages.map((spoken) => (
            <span key={spoken.name}>{spoken.english_name}, </span>
          ))}
        </p>
        <p>
          <strong>Production countries: </strong>
          {show.production_countries.map((country) => (
            <span key={country.name}>{country.name}, </span>
          ))}
        </p>
        <p>
          <strong>Production companies: </strong>
          {show.production_companies.map((company) => (
            <span key={company.id}>{company.name}, </span>
          ))}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {show.genres.map((genre) => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </p>
        <p>
          <strong>Episode run time:</strong>{" "}
          <span>{show.episode_run_time}</span>
        </p>
        <p>
          <strong>Rating:</strong>{" "}
          <span className="score">{show.vote_average}</span>
        </p>
        {user && (
          <div>
            <Rate callback={handleRating} message={message} />
          </div>
        )}
      </Details>
    </Wrapper>
  );
};

export default TvOverview;
