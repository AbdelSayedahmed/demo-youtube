import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Show from "./components/Show.jsx";
import Nav from "./components/Nav.jsx";
import Shows from "./components/Shows.jsx";
import Home from "./components/Home.jsx";
import Category from "./components/Category.jsx";
import Register from "./components/Register.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(true);

  const handleCategoryShow = (input) => setShowCategory(input);

  return (
    <>
      <Nav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setCategory={setCategory}
        showCategory={showCategory}
        handleCategoryShow={handleCategoryShow}
      />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Show setShowCategory={setShowCategory} />} />
        <Route path="/search/:query" element={<Shows setSearchTerm={setSearchTerm} />} />
        <Route path="/home" element={<Home setCategory={setCategory} category={category} />} />
        <Route path="/category/:categorySearch" element={<Category category={category} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
