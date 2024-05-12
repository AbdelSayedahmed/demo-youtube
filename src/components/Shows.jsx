import "./Shows.css";
import { Link, useParams } from "react-router-dom";
import ShowListing from "./ShowListing";
import { useEffect, useState } from "react";
import { searchVideos } from "../utils/fetch.js";

export default function Shows({ setSearchTerm }) {
  const [items, setItems] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    searchVideos(query)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error searching videos:", error));
    return () => {
      setSearchTerm("");
    };
  }, [query]);

  return (
    <div className="shows-container">
      {items.map((item, i) => (
        <Link key={`${item.videoId}${i}`} to={`/${item.videoId}`}>
          <ShowListing title={item.title} thumbnail={item.thumbnail} key={`${i}${item.videoId}`}/>
        </Link>
      ))}
    </div>
  );
}
