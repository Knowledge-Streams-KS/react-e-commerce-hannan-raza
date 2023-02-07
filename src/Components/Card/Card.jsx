import React from "react";
import './Card.css'


const Card = (props) => {
  


return (
  <div className="product">
    <div className="products">
    <h1>{props.title}</h1>
    <h1>{props.price}</h1>
    {/* <h1>{props.description}</h1> */}
    <img src={props.image}/>
    </div>
   </div>
  )
};

export default Card;
