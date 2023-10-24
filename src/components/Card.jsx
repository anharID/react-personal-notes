import React from "react";
import { showFormattedDate } from "../utils/index";

function Card({ changeButton, id, title, body, createdAt, onDelete, buttonData }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{showFormattedDate(createdAt)}</h6>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <button type="button" onClick={() => onDelete(id)} className="btn btn-danger m-2">
          Delete
        </button>
        <button type="button" onClick={() => buttonData(id)} className="btn btn-warning">
          {changeButton}
        </button>
      </div>
    </div>
  );
}

export default Card;
