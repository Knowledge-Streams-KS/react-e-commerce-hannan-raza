import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <br></br>
      <Link to="/categories">Categories</Link>
      <br></br>
      <br></br>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Home;
