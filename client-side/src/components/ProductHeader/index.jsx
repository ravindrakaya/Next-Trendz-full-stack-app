import { BsFilterRight } from "react-icons/bs";
import "./index.css";

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ProductHeader = () => {
  return (
    <div className="products-header-container">
      <h1 className="products-header-text">All Products</h1>
      {/* <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by-text">Sort by</p>
        <select className="sort-by-select">
          {sortbyOptions.map((eachOption) => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default ProductHeader;
