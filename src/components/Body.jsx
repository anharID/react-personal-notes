import React from "react";
import ActiveNote from "./ActiveNote";
import ArchivedNote from "./ArchivedNote";

function Body({ onDelete, onActive, onArchive, activeDatas, archiveDatas }) {
  return (
    <>
      <section className="container">
        <div className="">
          <h2 className="fw-bold mb-8">Catatan Aktif</h2>
          {activeDatas.length !== 0 ? <ActiveNote onDelete={onDelete} notes={activeDatas} onActive={onActive} /> : <p className="text-secondary">Tidak ada catatan</p>}
        </div>
      </section>
      <section className="container">
        <div className="">
          <h2 className="fw-bold mb-8">Arsip</h2>
          {archiveDatas.length !== 0 ? <ArchivedNote onDelete={onDelete} notes={archiveDatas} onArchive={onArchive} /> : <p className="text-secondary">Tidak ada catatan</p>}
        </div>
      </section>
    </>
  );
}

export default Body;
