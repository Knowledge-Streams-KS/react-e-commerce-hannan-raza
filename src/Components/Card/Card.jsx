import React from "react";


const Card = (props) => {
  


return (
  <div className="product">
    <h1>{props.title}</h1>
    <h1>{props.price}</h1>
    {/* <h1>{props.description}</h1> */}
    <img src={props.image}  />
  
   </div>
  )
};

export default Card;