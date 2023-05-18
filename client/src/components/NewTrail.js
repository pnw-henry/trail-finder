import React, { useState } from "react";

function NewTrail({ onNewTrailSubmit, onFormExpand }) {
  const [errors, setErrors] = useState([]);
  const [newTrail, setNewTrail] = useState({
    name: "",
    difficulty: "",
    length: "",
    elevation_gain: "",
    highest_point: "",
    location: "",
  });
  const handleChange = (event) => {
    setNewTrail({
      ...newTrail,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrail),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newTrail) => {
          onNewTrailSubmit(newTrail);
          onFormExpand(false);
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors);
          console.log(errorData);
        });
      }
    });
  };
  return (
    <div className="new-trail-form">
      <h2>Add a New Trail</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          name="name"
          value={newTrail.name}
          onChange={handleChange}
        />
        <div className="difficulty-dropdown">
          <select id="difficulty" name="difficulty" onChange={handleChange}>
            <option value="" disabled selected>
              Difficulty
            </option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Length (miles)"
          autoComplete="off"
          name="length"
          value={newTrail.length}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Elevation Gain (feet)"
          autoComplete="off"
          name="elevation_gain"
          value={newTrail.elevation_gain}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Highest Point (feet)"
          autoComplete="off"
          name="highest_point"
          value={newTrail.highest_point}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Location"
          autoComplete="off"
          name="location"
          value={newTrail.location}
          onChange={handleChange}
        />
        <button type="submit">Add Trail</button>
      </form>
      {errors.length > 0 ? (
        <div className="errors">
          <h3>The following errors prohibited the trail from being saved:</h3>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default NewTrail;
