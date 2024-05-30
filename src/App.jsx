import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Show from "./components/Show.jsx";
import Nav from "./components/Nav.jsx";
import Shows from "./components/Shows.jsx";
import Home from "./components/Home.jsx";
import Category from "./components/Category.jsx";
import Signup from "./components/Signup.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Login from "./components/Login.jsx";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav ? (
        <Nav
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setCategory={setCategory}
          showCategory={showCategory}
          setShowCategory={setShowCategory}
          setShowNav={setShowNav}
        />
      ) : null}
      <Routes>
        <Route path="/signup" element={<Signup setShowNav={setShowNav} />} />
        <Route path="/login" element={<Login setShowNav={setShowNav} />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home setCategory={setCategory} category={category} />} />
        <Route path="/:id" element={<Show setShowCategory={setShowCategory} />} />
        <Route path="/search/:query" element={<Shows setSearchTerm={setSearchTerm} />} />
        <Route path="/category/:categorySearch" element={<Category category={category} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
