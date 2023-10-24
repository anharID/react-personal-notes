import React from "react";
import Card from "./Card";

function ActiveNode({ onDelete, onActive, notes }) {
  return (
    <div className="row row-cols-4">
      {notes.map((note) => (
        <Card className="m-2" changeButton="Arsip" key={note.id} onDelete={onDelete} buttonData={onActive} {...note} />
      ))}
    </div>
  );
}

export default ActiveNode;
