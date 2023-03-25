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
    <div>
      <h1>Product Details</h1>
      {productDetails.title}
      <br></br>${productDetails.price}
      <br></br>
      {productDetails.category}
      <br></br>
      {productDetails.description}
      <br></br>
      <img src={productDetails.image} />
      <button onClick={handleIncrement}>+</button>
      {counts}
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
