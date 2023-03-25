import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "redux";

const OrderCompleted = () => {
  const storeData = useSelector((state) => state);
  console.log("store Data :", storeData);
  return (
    <div>
      <h1>Order Completed</h1>
    </div>
  );
};

export default OrderCompleted;
