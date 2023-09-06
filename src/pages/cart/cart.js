import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, removeItem } = useContext(ShopContext);

  return (
    <div>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="Cart">
        {cartItems.map((product) => {
          return (
            <CartItem product={product} removeItem={removeItem}></CartItem>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
