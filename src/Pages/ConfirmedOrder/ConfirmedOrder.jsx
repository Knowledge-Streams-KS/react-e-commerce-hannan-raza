import { useSelector, useDispatch } from "react-redux";
import { Store } from "redux";
import React from "react";

const ConfirmedOrder = () => {
  const storeData = useSelector((state) => state);
  console.log("store Data :", storeData);
  return (
    <div>
      <h1>Confirmed Order</h1>
      <h1>Confirmed Order</h1>
      <h1>Confirmed Order</h1>
      <h1>Confirmed Order</h1>
    </div>
  );
};

export default ConfirmedOrder;
