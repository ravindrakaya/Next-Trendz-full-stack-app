import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: JSON.parse(localStorage.getItem("cartItem")) || [],
    priceDetails: JSON.parse(localStorage.getItem("priceDetails")) || {},
    isContinue: false,
    isLoading: true,
  },
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (each) => each.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItem = [...state.cartItem, newItem];
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    removeCartItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (each) => each.id !== action.payload
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    clearCart: (state) => {
      state.cartItem = [];
      localStorage.clear();
    },
    setPriceDetails: (state, action) => {
      state.priceDetails = action.payload;
      localStorage.setItem("priceDetails", JSON.stringify(state.priceDetails));
    },
    setIsContinue: (state, action) => {
      state.isContinue = !state.isContinue 
      // state.isContinue = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      // state.isLoading = !state.isLoading
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  clearCart,
  setPriceDetails,
  setIsContinue,
  setIsLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
