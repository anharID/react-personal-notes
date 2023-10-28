import React from "react";
import { showFormattedDate } from "../utils/initial_data";

function Card({ id, title, body, createdAt, onDelete, changeButton, buttonData }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{showFormattedDate(createdAt)}</h6>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <div className="text-center">
          <button type="button" className="btn btn-danger m-2" onClick={() => onDelete(id)}>
            Hapus
          </button>
          <button type="button" className="btn btn-primary" onClick={() => buttonData(id)}>
            {changeButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
