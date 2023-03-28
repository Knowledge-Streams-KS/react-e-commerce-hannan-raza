import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import Counter from "../Counter/Counter";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartAction";
import "./ProductDetail.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [counts, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (counts === 0) {
      return;
    }
    setCount((prevState) => prevState - 1);
  };

  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/getProductDetails?ids=${id}`
        );
        const resp = response.data;
        setProductDetails(resp);
        console.log(productDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const products = useSelector((state) => state);

  const handleCart = () => {
    {
      dispatch(addToCart({ ...productDetails, counts }));
      const message = "ADDED";
      alert(message);
    }
  };
  console.log(products);

  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <div className="product-title">{productDetails.title}</div>

      <div className="product-price">${productDetails.price}</div>

      <div className="product-category ">{productDetails.category}</div>
      <div>{productDetails.description}</div>

      <div className="product-image">
        <img src={productDetails.image} alt="" />
      </div>

      <div className="product-quantity">
        <button onClick={handleIncrement}>+</button>
        {counts}
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
