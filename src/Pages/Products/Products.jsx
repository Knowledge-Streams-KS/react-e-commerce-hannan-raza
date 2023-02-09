import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/category/${id}`)
        .then((Response) => {
          const resp = Response.data;
          setProducts(resp);
          setSearch(resp);
        });
    } else {
      axios.get("https://fakestoreapi.com/products").then((Response) => {
        const resp = Response.data;
        setProducts(resp);
        setSearch(resp);
      });
    }
  }, []);

  const handleSearch = (event) => {
    const input = event.target.value;
    const search = products.filter((param) => {
      return param.title.toLowerCase().includes(input.toLowerCase());
    });
    setSearch(search);
  };

  const handleMaxSort = () => {
    let sortedProducts = [...products].sort((p1, p2) =>
      p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
    );
    setSearch(sortedProducts);
  };

  const handleMinSort = () => {
    let sortedProducts = [...products].sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
    setSearch(sortedProducts);
  };

  const handleAlphabeticOrder = () => {
    let sortedProducts = [...products].sort((p1, p2) =>
      p1.title > p2.title ? 1 : p1.title < p2.title ? -1 : 0
    );
    setSearch(sortedProducts);
  };

  return (
    <div>
      <div>
        <button onClick={handleMaxSort}>MIN To MAX</button>
        <button onClick={handleMinSort}>MAX To MIN</button>
        <button onClick={handleAlphabeticOrder}>ALPHABETICS</button>
      </div>
      <div>
        <input placeholder="Search" onChange={handleSearch}></input>
      </div>
      <div>
        <h1>Hello</h1>
        <ul>
          {search.map((param, index) => (
            // <li key={products.id}>{products.title}{products.price}
            // </li>
            <Card
              key={index}
              id={param.id}
              title={param.title}
              price={param.price}
              // description = {param.description}
              category={param.category}
              image={param.image}
            ></Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
