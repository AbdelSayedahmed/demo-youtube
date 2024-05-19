import React from "react";
import { decoder } from "../utils/fetch";
import "./ShowListing.css";

export default function ShowListing({ title, thumbnail, channelId }) {
  return (
    <div className="listing-container">
      <img src={thumbnail} alt={`Thumbnail of ${title}`} />
      <h3>{decoder(title)}</h3>
    </div>
  );
}
