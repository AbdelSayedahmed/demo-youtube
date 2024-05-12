import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "/src/components/About.jsx";
import Show from "/src/components/Show.jsx";
import Nav from "/src/components/Nav.jsx";
import Shows from "/src/components/Shows.jsx";
import Home from "/src/components/Home.jsx";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Nav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Show />} />
        <Route
          path="/search/:query"
          element={<Shows setSearchTerm={setSearchTerm} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
