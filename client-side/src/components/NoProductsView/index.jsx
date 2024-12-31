import "./index.css";

const NoProductsView = () => {
  return (
    <div className="no-products-view">
      {/* <img
        src="nxt-trendz-no-products-view.png"
        className="no-products-img"
        alt="no products"
      /> */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        className="no-products-img"
        alt="no products"
      />

      <h1 className="no-products-heading">No Products Found</h1>
      <p className="no-products-description">
        We could not find any products. Try other filters.
      </p>
    </div>
  );
};

export default NoProductsView;
