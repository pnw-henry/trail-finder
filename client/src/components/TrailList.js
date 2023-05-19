import React from "react";
import TrailCard from "./TrailCard";
function TrailList({ trails, expandedTrailId, onTrailClick }) {
  const trail = trails.map((trail) => {
    return (
      <TrailCard
        key={trail.id}
        trail={trail}
        expandedTrailId={expandedTrailId}
        onTrailClick={onTrailClick}
      />
    );
  });

  return <div className="trail-cards">{trail}</div>;
}

export default TrailList;
