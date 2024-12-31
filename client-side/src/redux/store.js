import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import navReducer from "./slices/navSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import filterReducer from "./slices/searchAndFilterSlice";
import placeOrderSlice from "./slices/placeOrederSlice";
import ordersSlice from "./slices/ordersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    navToggle: navReducer,
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
    orders: placeOrderSlice,
    orderDetails: ordersSlice,
  },
});

export default store;
