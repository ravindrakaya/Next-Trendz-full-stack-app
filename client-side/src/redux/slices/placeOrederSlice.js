import { createSlice } from "@reduxjs/toolkit";

const placeOrederSlice = createSlice({
  name: "orders",
  initialState: {
    address: JSON.parse(localStorage.getItem("address")) || [],
    orderPlaced: false,
    cardDetails: [],
  },
  reducers: {
    setAddress: (state, action) => {
      // console.log(action.payload);
      state.address = [...state.address, action.payload];
      localStorage.setItem("address", JSON.stringify(state.address));
    },
    removeAddress: (state) => {
      state.address = [];
      localStorage.removeItem("address");
    },
    setOrderPlaced: (state, action) => {
      state.orderPlaced = action.payload;
    },
    setCardDetails: (state, action) => {
      // console.log(action.payload);
      // state.cardDetails = action.payload;
      state.cardDetails = [...state.cardDetails, action.payload];
    },
    removeCardDetails: (state) => {
      state.cardDetails = [];
    },
  },
});

export const {
  setAddress,
  removeAddress,
  setOrderPlaced,
  setCardDetails,
  removeCardDetails,
} = placeOrederSlice.actions;

export default placeOrederSlice.reducer;
