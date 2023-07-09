import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "./Product";

const Products = () => {
  const [items, setItems] = useState([]);

  const getStore = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <>
      <Link to="/cart">Go to Cart</Link>
      <div className="products-wrapper">
        {items &&
          items.length > 0 &&
          items.map((item) => <Product key={item.id} item={item} />)}
      </div>
    </>
  );
};
export default Products;
