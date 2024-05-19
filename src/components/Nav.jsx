import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./Nav.css";
import CategoryNav from "./CategoryNav";

export default function Nav({
  searchTerm,
  setSearchTerm,
  setCategory,
  showCategory,
  handleCategoryShow,
}) {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-container_left">
          <Link to={"/"} onClick={() => handleCategoryShow(true)}>
            <img src="../assets/youtubelogo.png" alt="Home" id="youtubelogo" />
          </Link>
          <Filter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleCategoryShow={handleCategoryShow}
          />
        </div>
        <div className="nav-container_right">
          <Link
            to="/about"
            className="nav-container"
            onClick={() => handleCategoryShow(false)}
          >
            About
          </Link>
        </div>
      </div>
      {showCategory ? <CategoryNav setCategory={setCategory} /> : null}
    </div>
  );
}
