import React from "react";
import { useParams } from "react-router-dom";

//components
import TabTv from "./TabTv";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Footer from "./Footer";

//Hooks
import { useTvFetch } from "../hooks/useTvFetch";

const TvShow = () => {
  const { showId } = useParams();

  const { state: show, loading, error } = useTvFetch(showId);

  console.log(show);
  if (loading) return <Spinner style={{ marginTop: "25%" }} />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      {/* <Link to="/tv">TvShow ||</Link> */}
      <BreadCrumb movieTitle={show.original_name} link={"tv"} />
      <MovieInfo movie={show} trailer={false} />
      <TabTv show={show} />
      <Footer />
    </>
  );
};

export default TvShow;
