import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "./Filter";
import "./Nav.css";

export default function Nav({ searchTerm, setSearchTerm, setCategory }) {
  const navigate = useNavigate();

  const handleReturn = () => {
    setCategory(null);
    navigate("/");
  };

  return (
    <div className="nav-container">
      <div className="nav-container_left">
        <button onClick={handleReturn}>
          <img src="../assets/youtubelogo.png" alt="Home" id="youtubelogo" />
        </button>
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="nav-container_right">
        <Link to="/about" className="nav-container">
          About
        </Link>
      </div>
    </div>
  );
}
