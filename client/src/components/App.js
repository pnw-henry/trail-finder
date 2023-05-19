import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import Trails from "./Trails";
import Visits from "./Visits";
import UserProfile from "./UserProfile";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
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

  const toggleSignup = () => {
    setSignUp(!signUp);
  };

  return (
    <div>
      <Navigation />
      <Header />
      <div className="login-signup">
        {isLoggedIn && user ? (
          <div className="welcome">
            <h1>Welcome, {user.username}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={toggleSignup}>
              {signUp ? "Login" : "Sign Up"}
            </button>
            {signUp ? (
              <UserSignUp
                setUser={setUser}
                isLoggedIn={setIsLoggedIn}
                errors={errors}
                setErrors={setErrors}
              />
            ) : (
              <UserLogin
                setUser={setUser}
                isLoggedIn={setIsLoggedIn}
                errors={errors}
                setErrors={setErrors}
              />
            )}
          </div>
        )}
      </div>

      <Routes>
        <Route
          path="/trails"
          element={<Trails trails={trails} setTrails={setTrails} user={user} />}
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
        <Route path="/profile" element={<UserProfile user={user} />}></Route>
        <Route exact path="/" element={<Home trails={trails} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
