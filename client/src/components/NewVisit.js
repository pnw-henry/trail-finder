import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function NewVisit({ onNewVisitSubmit, onCancelNewVisit, trails, user }) {
  const [selectedTrailId, setSelectedTrailId] = useState("");
  const [search, setSearch] = useState("");
  const [filteredTrails, setFilteredTrails] = useState(trails);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isPlaceHolderVisible, setIsPlaceHolderVisible] = useState(true);
  const [visitForm, setVisitForm] = useState({
    date: "",
    condition: "",
    summary: "",
    trail_id: "",
    user_id: user.id,
  });

  const handleSummaryChange = (e) => {
    setVisitForm({ ...visitForm, [e.target.id]: e.target.value });
    setIsPlaceHolderVisible(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredTrails = trails.filter((trail) => {
      return trail.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredTrails(filteredTrails);
  };

  const trailOptions = filteredTrails.map((trail) => (
    <option key={trail.id} value={trail.id}>
      {trail.name}
    </option>
  ));

  const handleTrailSelect = (e) => {
    setSelectedTrailId(e.target.value);
  };

  const handleVisitChange = (e) => {
    setVisitForm({ ...visitForm, [e.target.id]: e.target.value });
  };

  const handleNewVisitSubmit = (e) => {
    e.preventDefault();
    const newVisit = {
      date: visitForm.date,
      condition: visitForm.condition,
      summary: visitForm.summary,
      trail_id: selectedTrailId,
      user_id: user.id,
    };
    fetch("/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVisit),
    }).then((response) => {
      if (response.ok) {
        response.json().then((newVisit) => {
          onNewVisitSubmit(newVisit);
        });
      } else {
        response.json().then((errorData) => {
          console.log(errorData);
        });
      }
    });
  };

  return (
    <form onSubmit={handleNewVisitSubmit}>
      <label htmlFor="trailSearch">Search Trail:</label>
      <input
        type="text"
        id="trailSearch"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search for a trail..."
      />
      <label htmlFor="trail">Trail:</label>
      <select
        id="trail"
        value={selectedTrailId}
        onChange={handleTrailSelect}
        required
      >
        <option value="" disabled>
          Select a trail
        </option>
        {trailOptions}
      </select>
      <br></br>
      <h2>Date:</h2>
      <Datetime
        value={selectedDate}
        onChange={(e) => {
          setSelectedDate(e._d);
          setVisitForm({ ...visitForm, date: e._d });
        }}
        initialViewMode="days"
        timeFormat={false}
        dateFormat="YYYY-MM-DD"
        initialViewDate={new Date()}
        closeOnSelect={true}
      />
      <br></br>
      <select
        id="condition"
        onChange={handleVisitChange}
        value={visitForm.condition}
      >
        <option value="" disabled selected>
          Select a Condition
        </option>
        <option value="clear">Clear</option>
        <option value="overcast">Overcast</option>
        <option value="rain">Rain</option>
        <option value="snow">Snow</option>
        <option value="wind">Wind</option>
      </select>
      <textarea
        type="text"
        placeholder={isPlaceHolderVisible ? "How was the hike?" : null}
        value={visitForm.summary}
        onChange={handleSummaryChange}
        id="summary"
      ></textarea>
      <button type="submit">Add Visit</button>
      <button type="button" onClick={onCancelNewVisit}>
        Cancel
      </button>
    </form>
  );
}

export default NewVisit;
