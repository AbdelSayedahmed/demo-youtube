import "./CategoryNav.css";
import { Link, useNavigate } from "react-router-dom";
import {} from "../utils/fetch.js";

export default function CategoryNav({ category, setCategory }) {
  const categories = [
    "Music",
    "News",
    "Movies",
    "TV Shows",
    "Sports",
    "Gaming",
  ];
  // Music id: 10
  // News id: 25
  // Movies id: 30
  // TV Shows id: 43
  // Sports id: 42
  // Gaming id: 20
  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    e.preventDefault();
    navigate(`/category/${category}`);
  };

  return (
    <div className="Category-nav-container">
      {categories.map((option, i) => (
        <button key={i} onClick={handleClick}>
          {option}
        </button>
      ))}
    </div>
  );
}
