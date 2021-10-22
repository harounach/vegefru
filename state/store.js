import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoriteReducer from "./features/favorite/favoriteSlice";
import userReducer from "./features/user/userSlice";
import orderReducer from "./features/order/orderSlice";

const store = configureStore({
  reducer: {
    cartProducts: cartReducer,
    favoriteProducts: favoriteReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export default store;
