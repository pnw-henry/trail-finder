import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Trails from "./Trails";
import Visits from "./Visits";
import UserProfile from "./UserProfile";

import "../App.css";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);
  const [trails, setTrails] = useState([]);
  const [visits, setVisits] = useState([]);

  const trailsAPI = "/trails";
  const visitsAPI = "/visits";

  useEffect(() => {
    fetch(trailsAPI)
      .then((response) => response.json())
      .then((trails) => {
        setTrails(trails);
      });
  }, []);

  useEffect(() => {
    fetch(visitsAPI)
      .then((response) => response.json())
      .then((visits) => {
        setVisits(visits);
      });
  }, []);

  useEffect(() => {
    fetch("/me", { withCredentials: true })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            console.log(user);
            setIsLoggedIn(true);
            setUser(user);
          });
        } else {
          response.json().then((errorData) => {
            setErrors(errorData.errors);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setIsLoggedIn, setUser]);

  function handleLogout() {
    const config = {
      method: "DELETE",
      withCredentials: true,
    };
    fetch("/logout", config).then((response) => {
      if (response.ok) {
        setUser(null);
        setIsLoggedIn(false);
      }
    });
  }

  return (
    <div className="App">
      <Header user={user} isLoggedIn={isLoggedIn} />

      <main>
        <Routes>
          <Route
            path="/trails"
            element={
              <Trails trails={trails} setTrails={setTrails} user={user} />
            }
          ></Route>
          <Route
            path="/visits"
            element={
              <Visits
                visits={visits}
                setVisits={setVisits}
                trails={trails}
                user={user}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                errors={errors}
                setErrors={setErrors}
                handleLogout={handleLogout}
              />
            }
          ></Route>
          user, setUser, isLoggedIn, setIsLoggedIn, errors, setErrors,
          handleLogout
          <Route
            path="/profile"
            element={<UserProfile user={user} handleLogout={handleLogout} />}
          ></Route>
          <Route exact path="/" element={<Home trails={trails} />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
