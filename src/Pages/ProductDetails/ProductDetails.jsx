import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((Response) => {
      const resp = Response.data;
      setProductDetails(resp);
      console.log(productDetails);
    });
  }, []);
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
    </div>
  );
};

export default ProductDetails;
