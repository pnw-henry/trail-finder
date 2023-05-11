import React from "react";
function TrailCard({ trail }) {
  const { name, location, difficulty, length, elevation_gain, highest_point } =
    trail;
  return (
    <div className="trail-card">
      <h2>
        <strong>{name}</strong>
      </h2>
      <p>Location: {location}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Length: {length}</p>
      <p>Elevation Gain: {elevation_gain}</p>
      <p>Highest Point: {highest_point}</p>
    </div>
  );
}

export default TrailCard;
