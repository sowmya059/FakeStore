import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "./Products";

const Home = () => {
  const [items, setItems] = useState([]);
  const getStore = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
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
      <div className="items">
        {items &&
          items.length > 0 &&
          items.map((item) => <Product key={item.id} item={item} />)}
      </div>
    </>
  );
};
export default Home;
