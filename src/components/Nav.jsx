import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./Nav.css";
import CategoryNav from "./CategoryNav";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Nav({
  searchTerm,
  setSearchTerm,
  setCategory,
  showCategory,
  setShowCategory,
  setShowNav,
  currentUser,
  setCurrentUser,
}) {
  const logout = () => {
    return signOut(auth);
  };

  const handleSignOut = () => {
    logout()
      .then(() => {
        setCurrentUser("");
        setShowCategory(true);
        setShowNav(true);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  
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
          {currentUser ? (
            <Link onClick={handleSignOut}>Sign Out</Link>
          ) : (
            <div>
              <Link to="/signup" onClick={() => setShowNav(false)}>
                Sign-Up
              </Link>
              <Link to="/login" onClick={() => setShowNav(false)}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
      {showCategory ? <CategoryNav setCategory={setCategory} /> : null}
    </div>
  );
}
