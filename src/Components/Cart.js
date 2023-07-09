import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartProduct } from "../storecontext/Context";

const Cart = () => {
  const [items, setItems] = useState([]);

  const { cartProducts, handleDecrease, handleIncrease } =
    useContext(CartProduct);

  return (
    <div>
      <Link to="/">Back to home </Link>

      {cartProducts.map((item, index) => (
        <div className="cart-product" key={index}>
          <img src={item.image} alt={item.title} width={60} />
          <p>{item.title}</p>

          <div>
            <button onClick={() => handleDecrease(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrease(item)}>+</button>
          </div>
          <div>
            <span>price:{item.price}</span>
          </div>
        </div>
      ))}
      <div>
        Total price :
        {parseInt(
          cartProducts.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        )}
      </div>
    </div>
  );
};
export default Cart;
