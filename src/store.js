import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import loginReducer from "./slices/loginSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: loginReducer,
  },
});
