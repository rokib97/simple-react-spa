import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./Card.css";

const Card = ({ data, handleAddToCart }) => {
  // console.log(data);
  const { name, img, bullet, capacity, action, price } = data;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(data)}>
          <BsFillCartFill className="icon" />
        </button>
        <h1>Price: ${price}</h1>
      </div>
    </div>
  );
};

export default Card;
