import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>E-Store</h1>
      <p>The largest E-Store of Pakistan.</p>

      <Link to="/categories">
        <button className="buttonHome">Categories</button>
      </Link>

      <Link to="/products">
        <button className="buttonHome">Products</button>
      </Link>
    </div>
  );
};

export default Home;
