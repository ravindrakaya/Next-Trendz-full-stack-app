import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orderDetails",
  initialState: {
    ordersList: [],
    orderedProductDetails: {},
    shippingAddress: [],
    activePaymentMode: "",
    ordersCart: [],
  },
  reducers: {
    setOrdersList: (state, action) => {
      state.ordersList = action.payload;
      // state.ordersList = [...state.ordersList, action.payload];
    },
    removeOrdersList: (state, action) => {},
    clearOrdersList: (state) => {
      state.ordersList = [];
    },
    setOrderedProductDetails: (state, action) => {
      state.orderedProductDetails = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setActivePaymentMode: (state, action) => {
      state.activePaymentMode = action.payload;
    },
    setOrdersCart: (state, action) => {
      state.orderedItems = action.payload;
    },
  },
});

export const {
  setOrdersList,
  removeOrdersList,
  clearOrdersList,
  setOrderedProductDetails,
  setShippingAddress,
  setActivePaymentMode,
  setOrdersCart,
} = ordersSlice.actions;
export default ordersSlice.reducer;
