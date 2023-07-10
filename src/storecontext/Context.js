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
