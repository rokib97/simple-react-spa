import { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "react-modal";
import "./App.css";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
import Navbar from "./Navbar/Navbar";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };
  return (
    <div className="App">
      <Navbar cart={cart} openModal={openModal} />

      <div className="card-container">
        {guns.map((gun) => (
          <Card key={gun.id} data={gun} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <IoIosCloseCircle className="icon" />
        </button>
        <div>
          {cart.map((item) => (
            <Cart item={item} key={item.id} />
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default App;
