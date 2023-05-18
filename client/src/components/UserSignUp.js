import React, { useState } from "react";

function UserSignUp({ setUser, isLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const signupApi = "/users";

  function handleNewUserSubmit(e) {
    e.preventDefault();
    const userData = {
      name: name,
      experience: experience,
      username: username,
      password: password,
      password_confirmation: passwordConfirmation,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      withCredentials: true,
    };
    fetch(signupApi, config).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user);
          isLoggedIn(true);
          setUser(user);
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors);
        });
      }
    });
  }

  return (
    <div className="signup-form">
      <form onSubmit={handleNewUserSubmit}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="experience-dropdown">
          <select
            id="experience"
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="" disabled selected>
              Experience
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
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
        <input
          type="password"
          placeholder="Password Confirmation"
          autoComplete="current-password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" value="Sign Up" />
      </form>
      {errors.length > 0 ? (
        <div className="errors">
          <p>There were errors with your submission:</p>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default UserSignUp;
