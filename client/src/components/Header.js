import Logo from "./Logo";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

function Header() {
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <header>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <h1 className="title">Treasured Trails</h1>

      <Navigation />

      <div className="login">
        {isLoggedIn && user ? (
          <div className="welcome">
            <NavLink to="/profile">{user.name}</NavLink>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
