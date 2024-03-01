import React from "react";
import { Routes, Route } from "react-router-dom";

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
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </>
        }
      />
      <Route
        path="/movies"
        element={
          <>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route
        path="/saved-movies"
        element={
          <>
            <Header loggedIn={loggedIn} />
            <SavedMovies loggedIn={loggedIn} />
            <Footer />
          </>
        }
      />
      <Route
        path="/profile"
        element={
          <>
            <Header loggedIn={loggedIn} />
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