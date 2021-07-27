import { useState, useEffect } from "react";

//API
import API from "../API";

//Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useShowsFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchShows = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const shows = await API.fetchShows(searchTerm, page);

      setState((prev) => ({
        ...shows,
        results:
          page > 1 ? [...prev.results, ...shows.results] : [...shows.results],
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial render and search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("showHome");

      if (sessionState) {
        console.log("Grabbing from session storage");
        setState(sessionState);
        return;
      }
    }
    console.log("Grabbing from  Api");

    setState(initialState);
    fetchShows(1, searchTerm);
  }, [searchTerm]);

  //Load More
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchShows(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //write to sessionStorrage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem("showHome", JSON.stringify(state));
  }, [searchTerm, state]);

  return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
};
