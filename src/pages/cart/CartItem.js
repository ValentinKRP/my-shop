import React from "react";

const CartItem = ({ product, removeItem }) => {
  return (
    <div>
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> Price: ${product.price}</p>
        <p> Quantity: ${product.quantity}</p>
        <div className="countHandler">
          <button onClick={() => removeItem(product.id)}> Remove Item </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
