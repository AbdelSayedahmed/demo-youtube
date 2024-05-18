import React, { useEffect, useState } from "react";
import { getRandomVideos } from "../utils/fetch.js";
import CategoryNav from "./CategoryNav.jsx";
import ShowGrid from "./ShowGrid";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRandomVideos()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error fetching random videos:", error));
  }, []);

  return (
    <div>
      <CategoryNav />
      <ShowGrid items={items} />
    </div>
  );
}
