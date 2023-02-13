// import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="container1">
      <div className="products">
        <Link to={`/productDetails/${props.id}`}>{props.title}</Link>
        <h1>${props.price}</h1>
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
