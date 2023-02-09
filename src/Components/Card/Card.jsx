// import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  {
  }
  return (
    <div className="product">
      <div className="products">
        <Link to={`/productDetails/${props.id}`}>{props.title}</Link>

        <h1>${props.price}</h1>
        {/* <h1>{props.description}</h1> */}
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
