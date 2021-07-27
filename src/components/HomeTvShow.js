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
import { useShowsFetch } from "../hooks/useHomeTvFetch";

//Image
import NoImage from "../images/no_image.jpg";
import Footer from "./Footer";

const HomeTvShow = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useShowsFetch();
  const shows = state.results;
  const randomImage = shows[Math.floor(Math.random() * shows.length)];

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
      <Grid header={searchTerm ? "Search Result" : "Popular Tv Shows"}>
        {state.results.map((show) => (
          <Thumb
            key={show.id}
            clickable
            link={`tv/${show.id}`}
            image={
              show.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + show.poster_path
                : NoImage
            }
            showId={show.id}
          />
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

export default HomeTvShow;
