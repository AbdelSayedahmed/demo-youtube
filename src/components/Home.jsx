import React, { useEffect, useState } from "react";
import { getRandomVideos, getCategoryVideos } from "../utils/fetch.js";
import ShowGrid from "./ShowGrid";
import CategoryNav from "./CategoryNav.jsx";
import CategoryListing from "./CategoryListing.jsx";
import MiniGrid from "./MiniGrid.jsx";

export default function Home({ category, setCategory }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getRandomVideos()
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error fetching random videos:", error));
  }, []);

  return (
    <div className="home-container">
      <CategoryNav setCategory={setCategory} />
      <CategoryListing />
      <ul></ul>
    </div>
  );
}
