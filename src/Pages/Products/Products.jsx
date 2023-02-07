
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(Response => {
      const resp = Response.data
      setProducts(resp);
      setSearch(resp);
      
    });
    }, []);

    const handleSearch = (event) =>{
      const input = event.target.value;
      const search = products.filter((param) =>{
        return param.title.toLowerCase().includes(input.toLowerCase());
      })
      setSearch(search);
    }
  return (
    <div>
      <div>
      <input placeholder="Search" onChange={handleSearch}></input>
      </div>
      <div>

  
  <h1>Hello</h1>
  <ul>
  {search.map((param,index) => (
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
