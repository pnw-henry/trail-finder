import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

function UserProfile({ handleLogout }) {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <div className="user-profile">
          <section>
            <h2>Hiking Profile</h2>
            <div>
              <strong>Name:</strong> {user.name}
            </div>
            <div>
              <strong>Experience:</strong> {user.experience}
            </div>
          </section>

          <button onClick={handleLogout}>Logout</button>

          <h3>Visited Trails</h3>
          {user.trails.length > 0 ? (
            <div>
              {user.trails.map((trail) => (
                <div key={trail.id}>{trail.name}</div>
              ))}
            </div>
          ) : (
            <p>
              You haven't visited any trails yet. Why not go hiking? {""}
              <Link to="/trails">Find a trail</Link>
            </p>
          )}
        </div>
      ) : (
        <p>Sign in or create an account to see your profile!</p>
      )}
    </div>
  );
}

export default UserProfile;
