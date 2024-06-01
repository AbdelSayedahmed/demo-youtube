import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./Nav.css";
import CategoryNav from "./CategoryNav";
import { getAuth, signOut } from "firebase/auth";

export default function Nav({
  searchTerm,
  setSearchTerm,
  setCategory,
  currentUser,
  setCurrentUser,
  showCategory,
}) {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
        console.log(currentUser);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

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
          {currentUser ? (
            <Link to="/login" onClick={handleSignOut}>
              Sign Out
            </Link>
          ) : (
            <div>
              <Link to="/signup">Sign-Up</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
      {showCategory ? <CategoryNav setCategory={setCategory} /> : null}
    </div>
  );
}
