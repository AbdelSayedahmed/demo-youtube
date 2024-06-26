import React, { useEffect, useState } from "react";
import ShowGrid from "./ShowGrid";
import { getCategoryVideos } from "../utils/fetch";

export default function Category({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCategoryVideos(category, 32)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error searching videos:", error));
  }, [category]);

  return (
    <div className="category-grid-container">
      <ShowGrid items={items} />
    </div>
  );
}
