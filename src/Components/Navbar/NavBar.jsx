import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="heading">
          <h1>E-COMMERCE</h1>
        </div>
        <div className="links">
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>{" "}
          </li>
          <li>
            <Link to="/checkout">Cart</Link>
          </li>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
