import "./Home.css";
import { Link } from "react-router-dom";
import ShowListing from "./ShowListing";
import { useEffect, useState } from "react";
import { getRandomVideos } from "../utils/fetch.js";

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
    <div className="shows-container">
      {items.map((item, i) => (
        <Link key={item.videoId + item.title + i} to={`/${item.videoId}`}>
          <ShowListing title={item.title} thumbnail={item.thumbnail} />
        </Link>
      ))}
    </div>
  );
}
