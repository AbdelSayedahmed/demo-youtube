import React from "react";
import "./Filter.css";

export default function Filter({ handleFilter }) {
  return (
    <form className="filter-form">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          onSubmit={(e) => handleFilter(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
