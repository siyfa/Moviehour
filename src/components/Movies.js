import React from "react";
import { useParams } from "react-router-dom";

//components
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Tab from "./Tab";
import Footer from "./Footer";

//Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner style={{ marginTop: "25%" }} />;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} trailer={true} />
      <Tab movie={movie} />
      <Footer />
    </>
  );
};

export default Movie;
