import React, { useState, useContext } from "react";
import PropsTypes from "prop-types";
import API from "../../API";

//styles
import { Text, Wrapper, Details } from "./MovieOverview.styles";

//context
import { Context } from "../../context";
//component
import Rate from "../Rate";

//helpers
import { calcTime, convertMoney } from "../../helpers";

const MovieOverview = ({ movie }) => {
  const [user] = useContext(Context);
  const [message, setMessage] = useState("");

  const handleRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    setMessage(rate.status_message);
  };
  return (
    <Wrapper>
      <h2>{movie.original_title}</h2>
      <Text>{movie.overview}</Text>
      <Details>
        <h2>Info - </h2>
        <p>
          <strong>Status:</strong> <span>{movie.status}</span>
        </p>
        <p>
          <strong>Released date:</strong> <span>{movie.release_date}</span>
        </p>
        <p>
          <strong>Tagline:</strong> <span>{movie.tagline}</span>
        </p>
        <p>
          <strong>Original language: </strong>
          <span>{movie.original_language}</span>
        </p>
        <p>
          <strong>Spoken languages: </strong>
          {movie.spoken_languages.map((spoken) => (
            <span key={spoken.name}>{spoken.english_name}, </span>
          ))}
        </p>
        <p>
          <strong>Production countries: </strong>
          {movie.production_countries.map((country) => (
            <span key={country.name}>{country.name}, </span>
          ))}
        </p>
        <p>
          <strong>Production companies: </strong>
          {movie.production_companies.map((company) => (
            <span key={company.id}>{company.name}, </span>
          ))}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </p>
        <p>
          <strong>Duration:</strong> <span>{calcTime(movie.runtime)}</span>
        </p>
        <p>
          <strong>Budget:</strong> <span>{convertMoney(movie.budget)}</span>
        </p>
        <p>
          <strong>Revenue:</strong> <span>{convertMoney(movie.revenue)}</span>
        </p>
        <p>
          <strong>Rating:</strong>{" "}
          <span className="score">{movie.vote_average}</span>
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

export default MovieOverview;
