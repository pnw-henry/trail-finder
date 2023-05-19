import React from "react";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <div className="nav-bar">
      <div>
        <NavLink
          to="/"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/trails"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          All Trails
        </NavLink>
        <NavLink
          to="/visits"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          Hiking Visits
        </NavLink>
        <NavLink
          to="/profile"
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
