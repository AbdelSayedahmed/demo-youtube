import React, { useEffect, useState } from "react";
import { getRandomVideos } from "../utils/fetch.js";
import ShowGrid from "./ShowGrid";
import { useParams } from "react-router-dom";
import CategoryNav from "./CategoryNav.jsx";

export default function Home() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const { categorySearch } = useParams();

  useEffect(() => {
    getRandomVideos(category)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error("Error fetching random videos:", error));
  }, [categorySearch]);

  return (
    <div>
      <CategoryNav setCategory={setCategory} />
      <ShowGrid items={items} />
    </div>
  );
}
