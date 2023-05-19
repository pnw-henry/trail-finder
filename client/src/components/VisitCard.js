import React, { useState } from "react";

function VisitCard({ visit, onEditVisit, onDeleteVisit, user }) {
  const [showSummary, setShowSummary] = useState(false);
  const [editedSummary, setEditedSummary] = useState(visit.summary);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState([]);

  const { id, date, condition, summary, trail } = visit;
  const visitApi = "/visits";

  const handleToggleSummary = () => {
    setShowSummary(!showSummary);
  };

  const handleEditSummary = (e) => {
    setEditedSummary(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedSummary(visit.summary);
  };

  const handleSaveEdit = () => {
    const editedVisit = {
      ...visit,
      summary: editedSummary,
    };
    fetch(`${visitApi}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedVisit),
    }).then((response) => {
      if (response.ok) {
        response.json().then((editedVisit) => {
          onEditVisit(editedVisit);
          setEditing(false);
          console.log("editedVisit in server response", editedVisit);
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors);
          console.log("errorData in visit patch", errorData);
        });
      }
    });
  };

  const handleDelete = () => {
    fetch(`${visitApi}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        onDeleteVisit(id);
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors);
        });
      }
    });
  };

  return (
    <div className="visit-card">
      <div className="visit-card-header">
        <h3>Visit to: {trail.name} </h3>
        <h4>{date}</h4>
        <h4>Conditions: {condition}</h4>
      </div>
      {summary && (
        <div className="summary-button">
          <button onClick={handleToggleSummary}>
            {showSummary ? "Hide Visit Report" : "Show Visit Report"}
          </button>
        </div>
      )}
      {showSummary && visit.summary && (
        <div>
          {editing ? (
            <div>
              <textarea
                value={editedSummary}
                onChange={handleEditSummary}
              ></textarea>
              <button onClick={handleSaveEdit}>Save Summary</button>
              <button onClick={handleCancelClick}>Cancel</button>
              {errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : (
            <div className="visit-card-summary">
              <p>{summary}</p>
              {user !== null && user.id === visit.user_id && (
                <div>
                  <button onClick={handleEditClick}>Edit Summary</button>
                  <button onClick={handleDelete}>Delete Visit</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default VisitCard;
