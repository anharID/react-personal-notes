import React from "react";
import Card from "./Card";

function ArchivedNote({ notes, onDelete, onArchive }) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {notes.map((note) => (
        <div className="col">
          <Card changeButton="Aktif" key={note.id} onDelete={onDelete} buttonData={onArchive} {...note} />
        </div>
      ))}
    </div>
  );
}

export default ArchivedNote;
