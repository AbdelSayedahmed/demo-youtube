import "./Shows.css";
import data from "/src/utils/dummydata.json";
import { Link } from "react-router-dom";
import ShowListing from "./ShowListing";

export default function Shows({ query }) {
  return (
    <div className="shows-container">
      {data.items.map((item) => (
        <Link key={item.id} to={`/${item.id}`}>
          <ShowListing
            title={item.snippet.title}
            thumbnail={item.snippet.thumbnails.standard.url}
          />
        </Link>
      ))}
    </div>
  );
}
