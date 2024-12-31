import "./index.css";
import { useDispatch } from "react-redux";
import {
  toggleCategory,
  toggleRating,
} from "../../redux/slices/searchAndFilterSlice";

const categoryOptions = [
  {
    name: "Clothing",
    categoryId: "1",
  },
  {
    name: "Electronics",
    categoryId: "2",
  },
  {
    name: "Appliances",
    categoryId: "3",
  },
  {
    name: "Grocery",
    categoryId: "4",
  },
  {
    name: "Toys",
    categoryId: "5",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    rating: "4 Star & above",
  },
  {
    ratingId: "3",
    rating: "3 Star & above",
  },
  {
    ratingId: "2",
    rating: "2 Star & above",
  },
  {
    ratingId: "1",
    rating: "1 Star & above",
  },
];

const Filters = () => {
  const dispatch = useDispatch();

  const onClickApplyFilters = () => {
      dispatch(toggleNav());
      dispatch(applyFilters({ selectedCategories, selectedRatings }));
    };
  
    const onClickRemoveFilters = () => {
      dispatch(toggleNav());
      dispatch(setSearchInput(""));
    };

  const renderCategory = () => {
    const onChangeCategory = (event) => {
      const { checked, id } = event.target;
      dispatch(toggleCategory({ checked, id }));
    };

    return (
      <div className="category-container">
        <p className="filters-text">Category</p>
        {categoryOptions.map((eachItem) => (
          <div key={eachItem.categoryId} className="label-filter-container">
            <input
              type="checkbox"
              className="checkbox"
              id={eachItem.name}
              onChange={onChangeCategory}
            />
            <label className="label-filter" htmlFor={eachItem.name}>
              {eachItem.name}
            </label>
          </div>
        ))}
      </div>
    );
  };

  const renderRating = () => {
    const onChangeRating = (event) => {
      const { checked, id } = event.target;
      dispatch(toggleRating({ checked, id }));
    };
    return (
      <div className="category-container rating">
        <p className="filters-text">Rating</p>
        {ratingsList.map((eachItem) => (
          <div key={eachItem.ratingId} className="label-filter-container">
            <input
              type="checkbox"
              className="checkbox"
              id={eachItem.rating}
              onChange={onChangeRating}
            />
            <label className="label-filter" htmlFor={eachItem.rating}>
              {eachItem.rating}
            </label>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      {renderCategory()}
      {renderRating()}
      <button
        type="button"
        className="filter-btn apply"
        onClick={onClickApplyFilters}
      >
        Apply Filters
      </button>
      <button
        type="button"
        className="filter-btn"
        // onClick={onClickRemoveFilters}
      >
        Clear Filters
      </button>
    </>
  );
};

export default Filters;
