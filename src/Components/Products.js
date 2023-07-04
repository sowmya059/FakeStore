import React from "react";
import "./Products.css";

export const Product = ({ item }) => {
  const { title, image, description, price } = item;

  const cart = () => {};

  return (
    <>
      <div className="cart">
        <img className="product-image" src={image} alt="card" />
      </div>
      <div>
        <h5 className="product-name">{title}</h5>
        <h4>{description}</h4>
        <h4>price:{price}</h4>
        <div>
          <button className="product-add" onClick={cart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};
