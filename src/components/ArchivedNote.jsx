import React from "react";
import Card from "./Card";

function ArchivedNote({ onDelete, notes, onArchive }) {
  return (
    <div className="">
      {notes.map((note) => (
        <Card changeButton="Pindah" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
      ))}
    </div>
  );
}

export default ArchivedNote;
