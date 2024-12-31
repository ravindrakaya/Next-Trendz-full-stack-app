import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    productDetails: {},
    apiStatus: "INITIAL",
  },
  reducers: {
    setProductList: (state, action) => {
      state.productsList = action.payload;
    },
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setApiStatus: (state, action) => {
      state.apiStatus = action.payload;
    },
  },
});

export const { setProductList, setProductDetails, setApiStatus } =
  productSlice.actions;

export default productSlice.reducer;
