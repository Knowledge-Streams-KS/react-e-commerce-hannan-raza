import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <h1>Cart</h1>
      <div>
        <Link to="order-completed">Order Completed</Link>
        <Link to="user-details-form">User Detail Form</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Cart;
