import { useEffect, useState } from "react";
import "./CategoryNav.css";
import { useNavigate } from "react-router-dom";
// import { categorySearch } from "../utils/fetch";

export default function CategoryNav({ setCategory }) {
  const categories = [
    { name: "Music", id: 10 },
    { name: "News", id: 25 },
    { name: "Movies", id: 30 },
    { name: "TVShows", id: 43 },
    { name: "Sports", id: 42 },
    { name: "Gaming", id: 20 },
  ];

  const navigate = useNavigate();

  const handleClick = (category) => {
    setCategory(category.id);
    navigate(`/category/${category.name}`);
  };

  return (
    <div className="Category-nav-container">
      {categories.map((category, i) => (
        <button key={i} onClick={() => handleClick(category)}>
          {category.name}
        </button>
      ))}
    </div>
  );
}
