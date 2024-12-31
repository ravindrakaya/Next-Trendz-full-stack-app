import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../Filters";
import { toggleNav } from "../../redux/slices/navSlice";
import {
  setSearchInput,
  applyFilters,
} from "../../redux/slices/searchAndFilterSlice";
import "./index.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navStore = useSelector((state) => state.navToggle.isClicked);
  // const productsList = useSelector((state) => state.products.productsList);
  const searchInput = useSelector((state) => state.filters.searchInput);
  // const categories = useSelector((state) => state.filters.selectedCategories);
  // const ratings = useSelector((state) => state.filters.selectedRatings);
  // console.log(ratings);

  const showOrHidecls = navStore ? "" : "hide";

  

  const onChangeSearchInput = (event) => {
    dispatch(setSearchInput(event.target.value));
  };
  return (
    <div className={`side-bar ${showOrHidecls}`}>
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search for title or brand"
          onChange={onChangeSearchInput}
          value={searchInput}
        />
        <CiSearch className="search-icon" />
      </div>
      <p className="filters-text">Filters</p>
      <Filters />
    </div>
  );
};

export default Sidebar;
