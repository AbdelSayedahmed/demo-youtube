import React, { useEffect, useState } from "react";
import { getRandomVideos, getCategoryVideos } from "../utils/fetch.js";
import CategoryNav from "./CategoryNav.jsx";
import CategoryListing from "./Category.jsx";
import MiniGrid from "./MiniGrid.jsx";

export default function Home({ setCategory }) {
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
      <ul></ul>
    </div>
  );
}
