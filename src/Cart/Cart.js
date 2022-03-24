import React from "react";
import "./Cart.css";

const Cart = ({ item }) => {
  console.log(item);
  return (
    <div className="cart">
      <img className="cart-image" src={item.img} alt="" />
      <div>
        <h1>{item.name}</h1>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
};

export default Cart;
