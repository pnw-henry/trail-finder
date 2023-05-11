import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Home from "./Home";
import Trails from "./Trails";
import Visits from "./Visits";
import UserProfile from "./UserProfile";

function App() {
  const [user, setUser] = useState(null);
  const [trails, setTrails] = useState([]);
  const [visits, setVisits] = useState([]);

  const trailsAPI = "http://localhost:3000/trails";
  const visitsAPI = "http://localhost:3000/visits";

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
  console.log("trails", trails);
  console.log("visits", visits);

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path="/trails" element={<Trails trails={trails} />}></Route>
        <Route path="/visits" element={<Visits visits={visits} />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
