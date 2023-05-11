import React from "react";
import TrailList from "./TrailList";
function Trails({ trails }) {
  console.log("trails", trails);
  const sortedTrails = trails.sort((a, b) => {
    return a.difficulty.localeCompare(b.difficulty);
  });
  return (
    <div>
      <h1>Treasured Trails</h1>
      <TrailList trails={sortedTrails} />
    </div>
  );
}

export default Trails;
