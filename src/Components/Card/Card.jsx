import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="cardDiv">
      <div className="products">
        <div className="headingText">
          <Link to={`/productDetails/${props.id}`}>{props.title}</Link>
        </div>
        <h1>${props.price}</h1>
        <img className="image" src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
