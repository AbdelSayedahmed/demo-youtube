import React, { useEffect, useState } from "react";
import { getRandomVideos } from "../utils/fetch.js";
import MiniGrid from "./MiniGrid.jsx";
import ShowGrid from "./ShowGrid.jsx";

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
    <div className="home-container">
      <MiniGrid category={"10"} />
      <MiniGrid category={"25"} />
      <MiniGrid category={"17"} />
      <MiniGrid category={"20"} />
      <ShowGrid items={items} />
    </div>
  );
}
