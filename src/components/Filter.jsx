// Filter.js
import React, { useState } from "react";
import "./Filter.css";

export default function Filter({ handleFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          id="search-input"
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
