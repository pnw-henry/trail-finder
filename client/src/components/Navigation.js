import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav>
      <NavLink
        to="/trails"
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      >
        All Trails
      </NavLink>
      <NavLink
        to="/visits"
        className={(isActive) => "nav-link" + (!isActive ? " unselected" : "")}
      >
        Hiking Visits
      </NavLink>
    </nav>
  );
}

export default Navigation;
