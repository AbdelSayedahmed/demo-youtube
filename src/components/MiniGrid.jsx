import { useEffect, useState } from "react";
import "./MiniGrid.css";
import { getCategoryVideos } from "../utils/fetch";
import ShowListing from "./ShowListing";
import { Link, useNavigate } from "react-router-dom";

export default function MiniGrid({ category }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${category.name}`);
  };

  useEffect(() => {
    getCategoryVideos(category.id, 10)
      .then((data) => {
        setItems(data);
      })
      .catch((error) =>
        console.error("Error finding categorized videos videos:", error)
      );
  }, [category]);

  return (
    <>
      <div className="mini-grid-container">
        <button onClick={() => handleClick(category)}>{category.name}</button>
        <div className="mini-grid-container_videos">
          {items.map((item, i) => (
            <Link key={i} to={`/${item.videoId}`}>
              <ShowListing title={item.title} thumbnail={item.thumbnail} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
