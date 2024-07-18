import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // the array that contains the items that are added to the cart
  items: [],
  // the sum of all the items
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // new item is equal to the users input
      const newItem = action.payload;

      // Looking through the items array to see if the item was already added to the cart
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // if the item does not exist push the values to the items array
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        // increase the quantity of the item if the item is already in the items array
        existingItem.quantity++;
        // the total price of the existing item is equal to the quantity multiplied by the price
        existingItem.totalPrice = existingItem.quantity * newItem.price;
      }
      // adding the new item price to the total price
      state.totalPrice += newItem.price;
    },

    removeItem: (state, action) => {
      // Looking through the items array to see if the item was already added to the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // decreasing the total price by subtracting all the item's prices
        state.totalPrice -= existingItem.price * existingItem.quantity;
        // filtering the array to remove the item from the items array
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    increaseItemQuantity: (state, action) => {
      // Looking through the items array to see if the item was already added to the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item exists in the items array , the quantity will be increased by 1
        existingItem.quantity += 1;
        // adding the item's price to the total price
        state.totalPrice += existingItem.price;
      }
    },

    decreaseItemQuantity: (state, action) => {
      // Looking through the items array to see if the item was already added to the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item exists in the items array , the quantity will be decreased by 1
        existingItem.quantity -= 1;
        // adding the item's price to the total price
        state.totalPrice -= existingItem.price;

        // if the quantity of the item is less than 1 , the item will be removed from the items array
        if (existingItem.quantity < 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
