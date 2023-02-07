
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(Response => {
      const res = Response.data
      setProducts(res);
      
    });
    }, []);
  return (
    <div>
      <div>
  {console.log(products)}
  <h1>Hello</h1>
  <ul>
  {products.map((param,index) => (
    // <li key={products.id}>{products.title}{products.price}
    // </li>
    <Card
    key={index}
    id={param.id}
    title = {param.title}
    price = {param.price}
    // description = {param.description} 
    category = {param.category}
    image = {param.image}>
    </Card>
  ))}
  </ul>
  </div>
    </div>
  );
};

export default Products;
