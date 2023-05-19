import React, { useState } from "react";
import UserLogin from "./UserLogin";
import UserSignUp from "./UserSignUp";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Login({ errors, setErrors, handleLogout }) {
  const { user, isLoggedIn } = useContext(UserContext);

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
                errors={errors}
                setErrors={setErrors}
                toggleSignup={toggleSignup}
                signUp={signUp}
              />
            </div>
          ) : (
            <div className="login">
              <UserLogin
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
