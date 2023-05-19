import React from "react";

function DifficultyFilter({
  difficulties,
  selectedDifficulty,
  onFilterChange,
}) {
  return (
    <div className="difficulty-filter">
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
