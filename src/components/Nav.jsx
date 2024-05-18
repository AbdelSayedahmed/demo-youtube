import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import "./Nav.css";
import CategoryNav from "./CategoryNav";

export default function Nav({ searchTerm, setSearchTerm, setCategory }) {
  const navigate = useNavigate();

  // const handleReturn = () => {
  //   setCategory(null);
  //   navigate("/");
  // };

  return (
    <div>
      <div className="nav-container">
        <div className="nav-container_left">
          <Link to={"/"}>
            <img src="../assets/youtubelogo.png" alt="Home" id="youtubelogo" />
          </Link>
          <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="nav-container_right">
          <Link to="/about" className="nav-container">
            About
          </Link>
        </div>
      </div>
      <CategoryNav setCategory={setCategory} />
    </div>
  );
}
