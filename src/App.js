import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import Header from "./components/Header";
import HomeMovie from "./components/HomeMovie";
import Movie from "./components/Movies";
import TvShow from "./components/TvShow";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import HomeTvShow from "./components/HomeTvShow";

//Context
import UserProvider from "./context";
//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<HomeMovie />} />
        <Route path="/tv" element={<HomeTvShow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/tv/:showId" element={<TvShow />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
