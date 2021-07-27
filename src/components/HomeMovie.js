import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Componenets
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//Hook
import { useHomeMovieFetch } from "../hooks/useHomeMovieFetch";

//Image
import NoImage from "../images/no_image.jpg";
import Footer from "./Footer";

const HomeMovie = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useHomeMovieFetch();
  const movies = state.results;
  const randomImage = movies[Math.floor(Math.random() * movies.length)];

  if (error)
    return <div style={{ margin: "auto" }}>Something went wrong...</div>;
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${randomImage.backdrop_path}`}
          title={randomImage.original_title}
          text={randomImage.overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            link={`/movies/${movie.id}`}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
          //   <div key={movie.id}>{movie.title}</div>
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
      <Footer />
    </>
  );
};

export default HomeMovie;
