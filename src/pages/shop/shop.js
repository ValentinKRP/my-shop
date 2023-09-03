import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>MyShop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
