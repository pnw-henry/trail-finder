import React from "react";

function DifficultyFilter({
  difficulties,
  selectedDifficulty,
  onFilterChange,
}) {
  return (
    <div className="difficulty-filter">
      <h3>Filter by Difficulty:</h3>
      {difficulties.map((difficulty) => (
        <button
          key={difficulty}
          className={selectedDifficulty === difficulty ? "active" : ""}
          onClick={() => onFilterChange(difficulty)}
        >
          {difficulty}
        </button>
      ))}
    </div>
  );
}
export default DifficultyFilter;
