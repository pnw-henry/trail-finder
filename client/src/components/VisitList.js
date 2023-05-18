import React from "react";
import VisitCard from "./VisitCard";
function VisitList({ visits, onEditVisit, onDeleteVisit, user }) {
  const visit = visits.map((visit) => {
    return (
      <VisitCard
        key={visit.id}
        visit={visit}
        onEditVisit={onEditVisit}
        onDeleteVisit={onDeleteVisit}
        user={user}
      />
    );
  });
  return <div>{visit}</div>;
}

export default VisitList;
