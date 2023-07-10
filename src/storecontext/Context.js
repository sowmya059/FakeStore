<<<<<<< HEAD
import { createContext, useState } from "react";

export const CartProduct = createContext();
const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleIncrease = (item) => {
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
      setCartProducts((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const handleDecrease = (item) => {
    const itemIndex = cartProducts.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (itemIndex !== -1) {
      const updatedCart = [...cartProducts];
      updatedCart[itemIndex].quantity -= 1;

      if (updatedCart[itemIndex].quantity === 0) {
        updatedCart.splice(itemIndex, 1);
      }

      setCartProducts(updatedCart);
    }
  };

  return (
    <CartProduct.Provider
      value={{ cartProducts, setCartProducts, handleIncrease, handleDecrease }}
    >
      {children}
    </CartProduct.Provider>
  );
};
export default CartProvider;
=======
import { createContext, useState } from "react";

export const CartProduct = createContext();
const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const handleIncrease = (item) => {
    const isProduct = cartProducts.findIndex(
      (product) => product.id === item.id
    );

    if (isProduct !== -1) {
      const updatedCartProducts = cartProducts.map((product, index) => {
        if (index === isProduct) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });

      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const handleDecrease = (item) => {
    const isProduct = cartProducts.findIndex(
      (product) => product.id === item.id
    );

    if (isProduct !== -1) {
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts[isProduct].quantity -= 1;

      if (updatedCartProducts[isProduct].quantity === 0) {
        updatedCartProducts.splice(isProduct, 1);
      }

      setCartProducts(updatedCartProducts);
    }
  };

  return (
    <CartProduct.Provider
      value={{ cartProducts, setCartProducts, handleIncrease, handleDecrease }}
    >
      {children}
    </CartProduct.Provider>
  );
};
export default CartProvider;
>>>>>>> 27a2b71827e3cd51d909c723c9a414fdeb304ed8
