import React from "react";
import TrailCard from "./TrailCard";
function TrailList({ trails }) {
  const trail = trails.map((trail) => {
    return <TrailCard key={trail.id} trail={trail} />;
  });

  return (
    <div>
      <h1>Trail List</h1>
      {trail}
    </div>
  );
}

export default TrailList;
