import React from "react";
import { decoder } from "../utils/fetch";
import "./CategoryGrid.css";

export default function CategoryGrid({ title, thumbnail }) {
  return (
    <div className="category-grid-container">
      <img src={thumbnail} alt={`Thumbnail of ${title}`} />
      <h3>{decoder(title)}</h3>
    </div>
  );
}