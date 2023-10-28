import React from "react";
import Card from "./Card";

function ActiveNode({ notes, onDelete, onActive }) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {notes.map((note) => (
        <div className="col">
          <Card changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
        </div>
      ))}
    </div>
  );
}

export default ActiveNode;
