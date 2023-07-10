<<<<<<< HEAD
import React, { useContext } from "react";
import "./Products.css";
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
=======
import React, { useContext } from 'react'
import { CartProduct } from '../storecontext/Context'

export const Product = ({ item }) => {
  const { title, image, price, category } = item

  const { cartProducts, setCartProducts } = useContext(CartProduct)

  const handleAddtoCart = item => {
    const isProduct = cartProducts.findIndex(product => product.id === item.id)

    if (isProduct !== -1) {
      const updatedCartProducts = cartProducts.map((product, index) => {
        if (index === isProduct) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return { ...product }
      })

      setCartProducts(updatedCartProducts)
    } else {
      setCartProducts(prev => [
>>>>>>> 27a2b71827e3cd51d909c723c9a414fdeb304ed8
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
<<<<<<< HEAD
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
=======
      ])
      console.log(cartProducts)
    }
  }

  return (
    <div className='product'>
      <img className='product-image' src={image} alt='card' />
      <h5 className='product-name'>{title}</h5>
      <h4>price:{price}</h4>
      <h4>category:{category}</h4>

      <div>
        <button className='product-add' onClick={() => handleAddtoCart(item)}>
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
>>>>>>> 27a2b71827e3cd51d909c723c9a414fdeb304ed8
