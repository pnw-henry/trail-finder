import React, { useState } from "react";

function Home({ trails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrail, setSelectedTrail] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedTrail(null);
  };

  const handleTrailClick = (trail) => {
    setSelectedTrail(trail);
  };

  const filteredTrails = trails.filter((trail) => {
    return trail.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="home">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for a trail by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="trail-list">
        {searchTerm !== "" && (
          <div className="search-results">
            {selectedTrail ? (
              <div className="trail-detail">
                <h2>{selectedTrail.name}</h2>
                <p>Difficulty: {selectedTrail.difficulty}</p>
                <p>Length: {selectedTrail.length} miles</p>
                <p>Elevation Gain: {selectedTrail.elevation_gain} feet</p>
                <p>Highest Point: {selectedTrail.highest_point} feet</p>
                <p>Location: {selectedTrail.location}</p>
              </div>
            ) : (
              filteredTrails.map((trail) => {
                return (
                  <div
                    className="trail-card"
                    key={trail.id}
                    onClick={() => handleTrailClick(trail)}
                  >
                    <h2>{trail.name}</h2>
                    <p>{trail.location}</p>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
