import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((Response) => {
        const resp = Response.data;
        setCategory(resp);
      });
  }, []);

  return (
    <div>
      <h1>Categories</h1>

      {category.map((param, index) => (
        <li>
          <Link to={`/products/${param}`}>{param}</Link>
        </li>
      ))}
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Categories;
