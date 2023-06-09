import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserLogin({ toggleSignup, signUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const { setUser, setIsLoggedIn } = useContext(UserContext);

  const loginApi = "/login";

  function handleLogin(e) {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      withCredentials: true,
    };
    fetch(loginApi, config).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user);
          setUser(user);
          setIsLoggedIn(true);
          navigate("/");
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors);
        });
      }
    });
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <fieldset className="buttons">
          <input type="submit" value="Login" />
          <button onClick={toggleSignup}>{signUp ? "Login" : "Sign Up"}</button>
        </fieldset>
      </form>
      {errors.length > 0 ? (
        <div className="errors">
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default UserLogin;
