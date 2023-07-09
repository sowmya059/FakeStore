import React, { useContext } from "react";
import "./Product.css";
import { CartProduct } from "../storecontext/Context";

export const Product = ({ item }) => {
  const { title, image, price, category } = item;

  const { cartProducts, setCartProducts } = useContext(CartProduct);

  const handleAddtoCart = (item) => {
    const itemIndex = cartProducts.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedCart = cartProducts.map((cartItem, index) => {
        if (index === itemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return { ...cartItem };
      });

      setCartProducts(updatedCart);
    } else {
      setCartProducts((prev) => [
        ...prev,
        {
          ...prev,
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          category: item.category,
          rating: item.rating,
          quantity: 1,
        },
      ]);
      console.log(cartProducts);
    }
  };

  return (
    <>
      <div className="cart">
        <img className="product-image" src={image} alt="card" />
      </div>
      <div>
        <h5 className="product-name">{title}</h5>
        <h4>price:{price}</h4>
        <h4>category:{category}</h4>

        <div>
          <button className="product-add" onClick={() => handleAddtoCart(item)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};
