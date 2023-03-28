import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmedOrder.css";
const ConfirmedOrder = () => {
  const storeData = useSelector((state) => state);
  console.log("store Data :", storeData);
  return (
    <div className="orderCompleted">
      <h1>Your Order has Been Confirmed</h1>
      <div className="button">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default ConfirmedOrder;
