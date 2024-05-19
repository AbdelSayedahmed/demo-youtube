import React from "react";
import { decoder, dateFormatter } from "../utils/fetch";
import "./ShowListing.css";

export default function ShowListing({ title, thumbnail, channelTitle, publishedAt }) {
  return (
    <div className="listing-container">
      <img id="thumbnail" src={thumbnail} alt={`Thumbnail of ${title}`} />
      <div className="listing-container_content">
        <img id="profile-pic" src="../assets/placeholder.png" alt="profile picture" />
        <div>
          <h3>{decoder(title)}</h3>
          <p>{decoder(channelTitle)}  -  {dateFormatter(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}
