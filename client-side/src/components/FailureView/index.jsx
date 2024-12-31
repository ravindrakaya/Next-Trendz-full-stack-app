import "./index.css";

const FailureView = () => {
  return (
    <div className="product-failure-view">
      {/* <img
        src="nxt-trendz-products-error-view.png"
        className="product-failure-image"
        alt="all-product-error"
      /> */}
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        className="product-failure-image"
        alt="all-product-error"
      />

      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );
};

export default FailureView;
