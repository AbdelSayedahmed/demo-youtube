import "./CategoryNav.css";
import { useNavigate } from "react-router-dom";

export default function CategoryNav({ setCategory }) {
  const categories = [
    { name: "Music", id: 10 },
    { name: "News", id: 25 },
    { name: "Sports", id: 17 },
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
