import "./Shows.css";
import { Link } from "react-router-dom";
import ShowListing from "./ShowListing";
import { useEffect, useState } from "react";
import { getRandomVideos, searchVideos } from "../utils/fetch.js";

export default function Shows({ query }) {
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     searchVideos(query)
  //       .then((data) => {
  //         setItems(data);
  //       })
  //       .catch((error) => console.error("Error searching videos:", error));
  //   }, [query]);

  return (
    <div className="shows-container">
      {items.map((item) => (
        <Link key={item.videoId} to={`/${item.videoId}`}>
          <ShowListing title={item.title} thumbnail={item.thumbnail} />
        </Link>
      ))}
    </div>
  );
}
