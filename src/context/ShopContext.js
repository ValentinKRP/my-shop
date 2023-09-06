import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prodID) => {
    const existingProductInCartIndex = cartItems.findIndex((product) => {
      return product.id === prodID;
    });

    if (existingProductInCartIndex !== -1) {
      const updatedCart = [...cartItems];

      updatedCart[existingProductInCartIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const selectedProduct = PRODUCTS.find((product) => {
        return product.id === prodID;
      });

      setCartItems([...cartItems, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeItem = (productID) => {
    const updatedCart = cartItems.filter((item) => {
      return productID !== item.id;
    });

    setCartItems(updatedCart);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
