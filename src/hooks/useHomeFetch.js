import { useState, useEffect, useCallback } from "react";
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  trending: [],
  topRatedMovies: [],
  topRatedTv: [],
};
export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHome = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const topMovies = await API.fetchTopMovies();
      const trendingRes = await API.fetchTrending();
      const topTvRes = await API.fetchTopTv();

      setState({
        trending: trendingRes.results,
        topRatedMovies: topMovies.results,
        topRatedTv: topTvRes.results,
      });
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    const sessionState = isPersistedState("HomeData");

    if (sessionState) {
      console.log("Grabbing from session storage");
      setState(sessionState);
      setLoading(false);
      return;
    }
    console.log("Grabbing from API");
    setState(initialState);
    fetchHome();
  }, [fetchHome]);

  // Write sessionStorage
  useEffect(() => {
    sessionStorage.setItem("HomeData", JSON.stringify(state));
  }, [state]);

  return { state, loading, error };
};
