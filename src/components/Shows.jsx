import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchVideos } from "../utils/fetch.js";
import ShowGrid from "./ShowGrid";
import "./Shows.css";

export default function Shows({ setSearchTerm, setShowCategory }) {
  const [items, setItems] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    setShowCategory(false);
    
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
      <h2>{`Results for "${query}"`}</h2>
      <ShowGrid items={items} />
    </div>
  );
}
