import React, { useState } from "react";
import VisitList from "./VisitList";
import NewVisit from "./NewVisit";
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Visits({ visits, setVisits, trails }) {
  const [showNewVisitForm, setShowNewVisitForm] = useState(false);

  const { user } = useContext(UserContext);

  const handleAddNewVisit = () => {
    setShowNewVisitForm(true);
  };

  const handleCancelNewVisit = () => {
    setShowNewVisitForm(false);
  };

  const handleNewVisitSubmit = (newVisit) => {
    setVisits([...visits, newVisit]);
    setShowNewVisitForm(false);
  };

  const handleEditVisit = (editedVisit) => {
    const updatedVisitList = visits.map((visit) => {
      if (visit.id === editedVisit.id) {
        return editedVisit;
      } else {
        return visit;
      }
    });
    setVisits([...updatedVisitList]);
  };

  const handleDeleteVisit = (visitId) => {
    const updatedVisitList = visits.filter((visit) => {
      return visit.id !== visitId;
    });
    setVisits(updatedVisitList);
  };

  return (
    <div className="visits">
      <header>
        <section>
          <h1>All Visits</h1>
        </section>
        {user !== null && !showNewVisitForm && (
          <button onClick={handleAddNewVisit}>Add New Visit</button>
        )}
      </header>
      {user !== null && showNewVisitForm && (
        <NewVisit
          onNewVisitSubmit={handleNewVisitSubmit}
          onCancelNewVisit={handleCancelNewVisit}
          trails={trails}
          user={user}
        />
      )}
      <VisitList
        visits={visits}
        onEditVisit={handleEditVisit}
        onDeleteVisit={handleDeleteVisit}
        user={user}
      />
    </div>
  );
}

export default Visits;
