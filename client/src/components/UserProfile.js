import React from "react";
import { Link } from "react-router-dom";
function UserProfile({ user }) {
  return (
    <div>
      <h2>Hiking Profile</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Experience:</strong> {user.experience}
      </div>

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
  );
}

export default UserProfile;
