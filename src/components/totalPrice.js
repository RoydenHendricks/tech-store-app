import React from "react";
import { useSelector } from "react-redux";

// function that displays the total price
const TotalPrice = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    // if the total price is less than 0 then the total price wont be displayed
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
