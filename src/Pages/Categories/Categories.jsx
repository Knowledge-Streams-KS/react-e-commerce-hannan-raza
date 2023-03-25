import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/product/getCategory").then((Response) => {
      const resp = Response.data;
      setCategory(resp);
    });
  }, []);

  return (
    <div className="container">
      <h1>Categories</h1>

      {category.map((param, index) => (
        <li>
          <Link to={`/products/${param}`}>
            <button className="buttonCategory">{param}</button>
          </Link>
        </li>
      ))}
      <Link to="/">
        <button className="buttonHomeCategory">Home Page</button>
      </Link>
    </div>
  );
};

export default Categories;
