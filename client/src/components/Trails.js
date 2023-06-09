import React, { useState } from "react";
import DifficultyFilter from "./DifficultyFilter";
import TrailList from "./TrailList";
import NewTrail from "./NewTrail";
import { useContext } from "react";
import { UserContext } from "./UserContext";
function Trails({ trails, setTrails }) {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [expandedTrailId, setExpandedTrailId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const difficulties = ["Easy", "Moderate", "Hard"];

  const { user } = useContext(UserContext);

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
    ? trails.filter((trail) => trail.difficulty === selectedDifficulty)
    : trails;

  const handleNewTrailSubmit = (newTrail) => {
    setTrails([newTrail, ...trails]);
  };

  const sortedTrails = filteredTrails.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="trails">
      <header>
        <section>
          <h1>All Trails</h1>
          <DifficultyFilter
            difficulties={difficulties}
            selectedDifficulty={selectedDifficulty}
            onFilterChange={handleFilterChange}
          />
        </section>
        {user && (
          <button className="new-trail-toggle" onClick={handleFormToggle}>
            {isFormVisible ? "Hide Form" : "Add New Trail"}
          </button>
        )}
      </header>

      {isFormVisible && (
        <NewTrail
          onNewTrailSubmit={handleNewTrailSubmit}
          onFormExpand={setIsFormVisible}
        />
      )}
      <TrailList
        trails={sortedTrails}
        expandedTrailId={expandedTrailId}
        onTrailClick={handleTrailClick}
      />
    </div>
  );
}

export default Trails;
