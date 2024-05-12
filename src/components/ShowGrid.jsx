import React from "react";
import { Link } from "react-router-dom";
import ShowListing from "./ShowListing";

export default function ShowGrid({ items }) {
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
