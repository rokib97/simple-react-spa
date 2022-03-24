import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = ({ openModal, cart }) => {
  return (
    <div className="navbar">
      <h1>Kopa Samsu Store</h1>
      <div onClick={openModal} className="cart-counter">
        <span>{cart.length}</span>
        <BsFillCartFill className="icon" color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
