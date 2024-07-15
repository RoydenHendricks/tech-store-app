import React from "react";

import { useSelector } from "react-redux";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../slices/cartSlice";
import "./cart.css";
import { useDispatch } from "react-redux";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    // Dispatch removeItem action here
    dispatch(removeItem(item));
  };

  const handleIncreaseQuantity = (item) => {
    // Dispatch increaseItemQuantity action here
    dispatch(increaseItemQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    // Dispatch decreaseItemQuantity action here
    dispatch(decreaseItemQuantity(item));
  };

  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>
      <div>
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="cart-img" src={item.img} alt={item.title} />
            <div className="middle-div">
              <h3 className="cart-item-heading">{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <div>
                <button
                  className="cart-buttons"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </button>
                <button
                  className="cart-buttons"
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </button>
              </div>
            </div>
            <div className="remove-price-div">
              <button
                className="cart-remove-btn"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
              <p className="cart-price"> R {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <p>Total Price: R{totalPrice}</p>
    </div>
  );
};

export default Cart;
