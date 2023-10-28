import React from "react";
import ActiveNote from "./ActiveNote";
import ArchivedNote from "./ArchivedNote";

function Notes({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
  return (
    <div className="bg-primary-subtle">
      <div id="aktif" className="container">
        <div className="py-5 px-4">
          <h2 className="fw-medium">Catatan Aktif</h2>
          {activeDatas.length !== 0 ? <ActiveNote onDelete={onDelete} notes={activeDatas} onActive={onActive} /> : <p className="text-secondary">Tidak ada catatan</p>}
        </div>
      </div>
      <div id="arsip" className="container">
        <div className="py-5 px-4">
          <h2 className="fw-medium">Arsip</h2>
          {archiveDatas.length !== 0 ? <ArchivedNote onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} /> : <p className="text-secondary">Tidak ada catatan</p>}
        </div>
      </div>
    </div>
  );
}

export default Notes;
