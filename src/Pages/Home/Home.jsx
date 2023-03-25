import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import productService from "../../utils/Services/api";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
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

  return (
    <>
      <div className="homeImage">
        <div className="womenText">
          <h1>Eid Deal's</h1>
          <h2>20</h2>
        </div>
        <div class="womenImageWrapper">
          <img
            className="womenImage"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&w=1200&q=75"
          ></img>
        </div>
        <div className="menText">
          <h1>Exclusive</h1>
          <h2>23</h2>
        </div>
        <div class="menImageWrapper">
          <img
            className="menImage"
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&w=1200&q=75"
          ></img>
        </div>
      </div>

      <div className="categoriesSlider">
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwoman.jpg&w=128&q=75"
            alt=""
          />
          <div className="headingText">
            <Link to="products/women's%20clothing">
              <h1>women's clothing</h1>
            </Link>
          </div>
        </div>

        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fman.jpg&w=128&q=75"
            alt=""
          />
          <div className="headingText">
            <Link to="products/men's%20clothing">
              <h1>men's clothing</h1>
            </Link>
          </div>
        </div>
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Ftwo%2Fjewellers%2F1.png&w=384&q=75"
            alt=""
          />
          <div className="headingText">
            <Link to="products/jewelery">
              <h1>jewelery</h1>
            </Link>
          </div>
        </div>
        <div className="categoriesCard">
          <img
            src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fcategory%2Fwatch.jpg&w=128&q=75"
            alt=""
          />
          <div className="headingText">
            <Link to="products/electronics">
              <h1>electronics</h1>
            </Link>
          </div>
        </div>
      </div>
      <h1>Featured Products</h1>
      <div>
        <div className="itemcard">
          {search.splice(2, 8).map((product, index) => (
            <Card
              key={index}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
