import React from "react";
import { decoder } from "../utils/fetch";
import "./CategoryListing.css";

export default function CategoryListing({ title, thumbnail }) {
  return (
    <div className="listing-container">
      <img src={thumbnail} alt={`Thumbnail of ${title}`} />
      <h3>{decoder(title)}</h3>
    </div>
  );
}