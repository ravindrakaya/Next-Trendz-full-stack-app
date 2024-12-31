import { createSlice } from "@reduxjs/toolkit";

const searchAndFilterSlice = createSlice({
  name: "filters",
  initialState: {
    searchInput: "",
    selectedCategories: [],
    selectedRatings: [],
    filterResults: [],
  },
  reducers: {
    setSearchInput: (state, action) => {
      // console.log(action.payload);
      state.searchInput = action.payload;
    },
    toggleCategory: (state, action) => {
      const { checked, id } = action.payload;

      const updatedCategory = checked
        ? [...state.selectedCategories, id]
        : state.selectedCategories.filter((category) => category !== id);
      state.selectedCategories = updatedCategory;
    },
    toggleRating: (state, action) => {
      const { checked, id } = action.payload;
      const updatedRating = checked
        ? [...state.selectedRatings, id]
        : state.selectedRatings.filter((rating) => rating !== id);
      state.selectedRatings = updatedRating;
    },
    applyFilters: (state, action) => {
      // const { selectedCategories, selectedRatings } = action.payload;
      // const filters = {
      //   categories: selectedCategories,
      //   ratings: selectedRatings,
      // };
      // state.filtersList = filters;
    },
  },
});

export const { setSearchInput, toggleCategory, toggleRating, applyFilters } =
  searchAndFilterSlice.actions;

export default searchAndFilterSlice.reducer;
