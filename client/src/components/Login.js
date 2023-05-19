import React, { useState } from "react";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";

function Login({
  user,
  setUser,
  isLoggedIn,
  setIsLoggedIn,
  errors,
  setErrors,
  handleLogout,
}) {
  const [signUp, setSignUp] = useState(false);

  const toggleSignup = () => {
    setSignUp(!signUp);
  };

  return (
    <div className="login-signup">
      {isLoggedIn && user ? (
        <div className="welcome">
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="login-signup-button">
          {signUp ? (
            <div className="signup">
              <UserSignUp
                setUser={setUser}
                isLoggedIn={setIsLoggedIn}
                errors={errors}
                setErrors={setErrors}
                toggleSignup={toggleSignup}
                signUp={signUp}
              />
            </div>
          ) : (
            <div className="login">
              <UserLogin
                setUser={setUser}
                isLoggedIn={setIsLoggedIn}
                errors={errors}
                setErrors={setErrors}
                toggleSignup={toggleSignup}
                signUp={signUp}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Login;
