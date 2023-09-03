import React from "react";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> ${product.price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
