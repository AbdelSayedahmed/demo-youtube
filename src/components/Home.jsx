import React, { useEffect, useState } from "react";
import { getRandomVideos } from "../utils/fetch.js";
import ShowGrid from "./ShowGrid";
import CategoryNav from "./CategoryNav.jsx";

export default function Home({category, setCategory}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRandomVideos(category)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error fetching random videos:", error));
  }, [category]);

  return (
    <div>
      <CategoryNav setCategory={setCategory} />
      <ShowGrid items={items} />
    </div>
  );
}
