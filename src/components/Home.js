import React, { useState, useEffect } from "react";

//Config
import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Componenets
import HomeSlides from "./HomeSlides";
import HomeImage from "./HomeImage";
import Spinner from "./Spinner";

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//styles
import { Wrapper, Content } from "./Home.styles";
import Footer from "./Footer";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  const [seconds, setSeconds] = useState(0);

  const { trending, topRatedTv, topRatedMovies } = state;

  let randomImage = trending[0];

  randomImage = trending[Math.floor(Math.random() * trending.length)];

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (error)
    return <div style={{ margin: "auto" }}>Something went wrong...</div>;
  return (
    <Wrapper>
      {trending[0] ? (
        <HomeImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${randomImage.backdrop_path}`}
          title={
            randomImage.original_title
              ? randomImage.original_title
              : randomImage.original_name
          }
          text={randomImage.overview}
        />
      ) : null}
      {loading && <Spinner />}
      {!loading && (
        <Content>
          <HomeSlides items={trending} header={"TRENDING"} link={""} />
          <HomeSlides
            items={topRatedMovies}
            header={"TOP MOVIES"}
            link={"/movies/"}
          />
          <HomeSlides
            items={topRatedTv}
            header={"TOP TV SHOWS"}
            link={"/tv/"}
          />
          <Footer />
        </Content>
      )}
    </Wrapper>
  );
};

export default Home;
