import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div
      className="total-price"
      style={{
        display: totalPrice > 0 ? "block" : "none",
      }}
    >
      <h2>Total: R {totalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default TotalPrice;
