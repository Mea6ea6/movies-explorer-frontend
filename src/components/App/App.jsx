import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurger() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header
              loggedIn={loggedIn}
              linkActive={`Main`}
              isBurgerOpen={isBurgerOpen}
              handleBurger={handleBurger}
            />
            <Main />
            <Footer />
          </>
        }
      />
      <Route
        path="/movies"
        element={
          <>
            <Header
              loggedIn={loggedIn}
              linkActive={`Films`}
              isBurgerOpen={isBurgerOpen}
              handleBurger={handleBurger}
            />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <>
            <Header
              loggedIn={loggedIn}
              linkActive={`SavedFilms`}
              isBurgerOpen={isBurgerOpen}
              handleBurger={handleBurger}
            />
            <SavedMovies loggedIn={loggedIn} />
            <Footer />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <Header
              loggedIn={loggedIn}
              isBurgerOpen={isBurgerOpen}
              handleBurger={handleBurger}
            />
            <Profile />
          </>
        }
      />
      <Route
        path="/signin"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Register />
          </>
        }
      />
      <Route
        path="/*"
        element={
          <>
            <NotFound />
          </>
        }
      />
    </Routes>
  );
}

export default App;
