import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "redux";
import { REMOVE_FROM_CART } from "../../redux/cart/cartType";
import { removeFromCart } from "../../redux/cart/cartAction";
import { useState } from "react";
import CartCounter from "../../Components/CartCounter/CartCounter";
import "./Cart.css";
import OrderCompleted from "../OrderCompleted/OrderCompleted";

const Cart = (props) => {
  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counts === 0) {
      return;
    }
    setCount((prevState) => prevState - 1);
  };

  const RemFrmCart = (arr, index) => {
    dispatch(removeFromCart(arr, index));
  };

  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const quantity = storeData.quantity;
  const [counts, setCount] = useState(0);
  return (
    <div className="cart">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {storeData.products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.titles}</td>
              <td>
                <img src={product.image} alt="" className="details" />
              </td>
              <td>{product.price}</td>

              <td>
                <CartCounter count={product.counts} />
              </td>
              <td>
                <button
                  onClick={() => {
                    RemFrmCart(product, index);
                  }}
                >
                  REMOVE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Link to="order-completed">Order Completed</Link>
      </div>
      <div>
        <Link to="users-detail-form">User Deatil Form</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Cart;
