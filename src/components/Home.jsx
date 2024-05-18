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
      <MiniGrid category={{ name: "Music", id: 10 }} />
      <MiniGrid category={{ name: "News", id: 25 }} />
      <MiniGrid category={{ name: "Sports", id: 17 }} />
      <MiniGrid category={{ name: "Gaming", id: 20 }} />
      <ShowGrid items={items} />
    </div>
  );
}
