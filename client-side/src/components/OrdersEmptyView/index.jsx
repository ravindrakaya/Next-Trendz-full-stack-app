import { Link } from "react-router-dom";
import "./index.css";

const OrdersEmptyView = () => {
  return (
    <div className="cart-empty-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        className="cart-empty-image"
        alt="cart empty"
      />
      <h1 className="cart-empty-heading">No Orders</h1>

      <Link to="/products">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default OrdersEmptyView;
