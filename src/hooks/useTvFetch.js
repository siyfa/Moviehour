import { useState, useEffect, useCallback } from "react";
import API from "../API";
//Helpers
import { isPersistedState } from "../helpers";

export const useTvFetch = (showId, season) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchShow = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);

      const show = await API.fetchShow(showId);
      const episodes = await API.fetchShowEpisodes(showId, season);
      const reviews = await API.fetchShowReviews(showId);
      //   const credits = await API.fetchCredits(movieId);
      //Get Directors only
      //   const directors = credits.crew.filter(
      //     (member) => member.job === "Director"
      //   );
      setState({
        ...show,
        ...episodes,
        ...reviews,
      });
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [showId, season]);

  useEffect(() => {
    const sessionState = isPersistedState(showId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }
    fetchShow();
  }, [showId, fetchShow]);

  //Write sessionStorage
  useEffect(() => {
    sessionStorage.setItem(showId, JSON.stringify(state));
  }, [showId, state]);

  return { state, loading, error };
};
