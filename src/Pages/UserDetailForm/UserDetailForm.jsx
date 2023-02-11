import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserDetailForm = () => {
  return (
    <div>
      <h1>UserDetailForm</h1>
      <Link to="confirmed-order">Confirm Order</Link>
      <Outlet />
    </div>
  );
};

export default UserDetailForm;
