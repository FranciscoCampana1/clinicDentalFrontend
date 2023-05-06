import React from "react";
import "./TablePagination.scss";

export default function TablePagination({ page, limit, count, onChange }) {
  const offsetStart = (page - 1) * limit + 1;
  const offsetEnd = page * limit;

  return (
    <div className="TablePagination">
      <span>
        {offsetStart} - {offsetEnd} of {count}
      </span>
      <button data-page={"prev"} disabled={page == 1} onClick={onChange}>
        <svg className="nav-icon" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
      </button>
      <button
        data-page={"next"}
        disabled={page >= Math.ceil(count / limit)}
        onClick={onChange}
      >
        <svg className="nav-icon" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </button>
    </div>
  );
}