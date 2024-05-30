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
  setShowCategory,
  setShowNav,
}) {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-container_left">
          <Link to={"/"} onClick={() => setShowCategory(true)}>
            <img src="../assets/youtubelogo.png" alt="Home" id="youtubelogo" />
          </Link>
          <Filter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setShowCategory={setShowCategory}
          />
        </div>
        <div className="nav-container_right">
          <Link
            to="/about"
            className="nav-container"
            onClick={() => setShowCategory(false)}
          >
            About
          </Link>
          <Link to="/signup" onClick={() => setShowNav(false)}>Sign-Up</Link>
          <Link to="/login" onClick={() => setShowNav(false)}>Login</Link>
        </div>
      </div>
      {showCategory ? <CategoryNav setCategory={setCategory} /> : null}
    </div>
  );
}
