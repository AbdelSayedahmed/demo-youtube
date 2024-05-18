import "./Options.css";
import { Link } from "react-router-dom";
import {} from "../utils/fetch.js";

export default function Options() {
  const options = ["Music", "News", "Movies", "TV Shows", "Live", "Gaming"];

  return (
    <div className="options-container">
      {options.map((option, i) => (
        <Link key={i}>{option}</Link>
      ))}
    </div>
  );
}
