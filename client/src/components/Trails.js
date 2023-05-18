import React, { useState } from "react";
import DifficultyFilter from "./DifficultyFilter";
import TrailList from "./TrailList";
import NewTrail from "./NewTrail";
function Trails({ trails, user }) {
  const [trailList, setTrailList] = useState(trails);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [expandedTrailId, setExpandedTrailId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const difficulties = ["Easy", "Moderate", "Hard"];

  const handleFilterChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setExpandedTrailId(null);
  };

  const handleFormToggle = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleTrailClick = (id) => {
    setExpandedTrailId(id);
  };

  const filteredTrails = selectedDifficulty
    ? trailList.filter((trail) => trail.difficulty === selectedDifficulty)
    : trailList;

  const handleNewTrailSubmit = (newTrail) => {
    setTrailList([newTrail, ...trailList]);
  };

  const sortedTrails = filteredTrails.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div>
      {user && (
        <button className="new-trail-toggle" onClick={handleFormToggle}>
          {isFormVisible ? "Hide Form" : "Add New Trail"}
        </button>
      )}
      {isFormVisible && (
        <NewTrail
          onNewTrailSubmit={handleNewTrailSubmit}
          onFormExpand={setIsFormVisible}
        />
      )}
      <h1>Trails</h1>
      <DifficultyFilter
        difficulties={difficulties}
        selectedDifficulty={selectedDifficulty}
        onFilterChange={handleFilterChange}
      />
      <TrailList
        trails={sortedTrails}
        expandedTrailId={expandedTrailId}
        onTrailClick={handleTrailClick}
      />
    </div>
  );
}

export default Trails;
