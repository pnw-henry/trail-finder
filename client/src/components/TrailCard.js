import React from "react";
function TrailCard({ trail, expandedTrailId, onTrailClick }) {
  const { name, location, difficulty, length, elevation_gain, highest_point } =
    trail;
  const isExpanded = expandedTrailId === trail.id;

  const handleExpand = () => {
    if (isExpanded) {
      onTrailClick(null);
    } else {
      onTrailClick(trail.id);
    }
  };

  return (
    <div
      className={`trail-card ${isExpanded ? "expanded" : ""}`}
      onClick={handleExpand}
    >
      <div className="trail-card-header">
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
      {isExpanded && (
        <div className="trail-card-body">
          <p>Difficulty: {difficulty}</p>
          <p>Length: {length} miles</p>
          <p>Elevation Gain: {elevation_gain} feet</p>
          <p>Highest Point: {highest_point} feet</p>
        </div>
      )}
    </div>
  );
}

export default TrailCard;
