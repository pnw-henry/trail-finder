import React, { useState } from "react";
import VisitList from "./VisitList";
import NewVisit from "./NewVisit";

function Visits({ visits, trails, user }) {
  const [visitList, setVisitList] = useState(visits);
  const [showNewVisitForm, setShowNewVisitForm] = useState(false);

  const handleAddNewVisit = () => {
    setShowNewVisitForm(true);
  };

  const handleCancelNewVisit = () => {
    setShowNewVisitForm(false);
  };

  const handleNewVisitSubmit = (newVisit) => {
    setVisitList([...visitList, newVisit]);
    setShowNewVisitForm(false);
    console.log("newvisit", newVisit);
  };

  const handleEditVisit = (editedVisit) => {
    const updatedVisitList = visitList.map((visit) => {
      if (visit.id === editedVisit.id) {
        return editedVisit;
      } else {
        return visit;
      }
    });
    setVisitList([...updatedVisitList]);
    console.log("edited visits in handleeditvisit", updatedVisitList);
  };

  const handleDeleteVisit = (visitId) => {
    const updatedVisitList = visitList.filter((visit) => {
      return visit.id !== visitId;
    });
    setVisitList(updatedVisitList);
  };

  console.log("visits", visits);

  return (
    <div className="visits">
      {user !== null && !showNewVisitForm && (
        <button onClick={handleAddNewVisit}>Add New Visit</button>
      )}
      {user !== null && showNewVisitForm && (
        <NewVisit
          onNewVisitSubmit={handleNewVisitSubmit}
          onCancelNewVisit={handleCancelNewVisit}
          trails={trails}
          user={user}
        />
      )}
      <VisitList
        visits={visitList}
        onEditVisit={handleEditVisit}
        onDeleteVisit={handleDeleteVisit}
        user={user}
      />
    </div>
  );
}

export default Visits;
