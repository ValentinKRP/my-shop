import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <div className="description">
        <p>
          <b>{product.productName}</b>
        </p>
        <p> ${product.price}</p>
      </div>
      <button onClick={() => addToCart(product.id)}>Add To Cart</button>
    </div>
  );
};

export default Product;
