import React from "react";
import ProductCard from "../components/productCard";
import products from "../components/productData";
import TotalPrice from "../components/totalPrice";
import "./product.css";

const Product = () => {
  return (
    <div>
      <div className="product-section">
        {/* the product array is mapped over to create a ProductCard for each individual product */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
