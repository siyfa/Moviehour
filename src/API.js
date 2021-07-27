import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  SHOW_POPULAR_BASE_URL,
  SHOW_SEARCH_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

const defaultConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  //TvsShos
  fetchShows: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SHOW_SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${SHOW_POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopMovies: async () => {
    const endpoint = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    return await (await fetch(endpoint)).json();
  },
  fetchTopTv: async () => {
    const endpoint = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    return await (await fetch(endpoint)).json();
  },
  fetchTrending: async () => {
    const endpoint = `${API_URL}trending/all/day?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShow: async (showId) => {
    const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShowReviews: async (showId) => {
    const endpoint = `${API_URL}tv/${showId}/reviews?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchShowEpisodes: async (showId, season) => {
    const endpoint = `${API_URL}tv/${showId}/season/2?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchVideo: async (movieId) => {
    const videoUrl = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
    return await (await fetch(videoUrl)).json();
  },
  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
