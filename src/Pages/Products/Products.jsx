import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import productService from "../../utils/Services/api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response;
        if (id) {
          response = await productService.getProductsByCategory(id);
        } else {
          response = await productService.getAllProducts();
        }
        const data = response.data;
        setProducts(data);
        setSearch(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [id]);

  const handleSearch = (event) => {
    const input = event.target.value;
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(input.toLowerCase());
    });
    setSearch(filteredProducts);
  };

  const handleMaxSort = () => {
    const sortedProducts = [...search].sort((a, b) => a.price - b.price);
    setSearch(sortedProducts);
  };

  const handleMinSort = () => {
    const sortedProducts = [...search].sort((a, b) => b.price - a.price);
    setSearch(sortedProducts);
  };

  const handleAlphabeticOrder = () => {
    const sortedProducts = [...search].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSearch(sortedProducts);
  };

  const handleReverseOrder = () => {
    const sortedProducts = [...search].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setSearch(sortedProducts);
  };

  return (
    <div>
      <div>
        <button onClick={handleMaxSort}>MIN To MAX</button>
        <button onClick={handleMinSort}>MAX To MIN</button>
        <button onClick={handleAlphabeticOrder}>ALPHABETICS</button>
        <button onClick={handleReverseOrder}>ReverseALPHABETICS</button>
      </div>
      <div>
        <input placeholder="Search" onChange={handleSearch}></input>
      </div>
      <div>
        <h1>HelloHellp</h1>
        <ul>
          {search.map((product, index) => (
            <Card
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
