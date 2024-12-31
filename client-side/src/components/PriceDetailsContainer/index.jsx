import { useSelector } from "react-redux";

import "./index.css";

const PriceDetailsContainer = () => {
  const priceDetails = useSelector((state) => state.cart.priceDetails);
  const { totalItems, totalPrice, discount, charges, totalAmount, savings } =
    priceDetails;

  const totalItemsText = `Price (${totalItems} items) `;

  return (
    <div className="price-details-container">
      <h1 className="price-details-text">Price Details</h1>
      <div className="price-container">
        <p className="price-text">{totalItemsText} </p>
        <p className="price-text">₹{totalPrice}</p>
      </div>
      <div className="price-container">
        <p className="price-text">Discount</p>
        <p className="discount-text">₹{discount}</p>
      </div>
      <div className="price-container">
        <p className="price-text">Platform Charges</p>
        <p className="charges-text">₹{charges}</p>
      </div>
      <div className="price-container">
        <p className="price-text">Delivery Charges</p>
        <p className="discount-text">FREE Delivery </p>
      </div>
      <div className="amount-container">
        <p className="amount-text">Total Amount</p>
        <p className="total-amount-text">₹{totalAmount}</p>
      </div>
      <p className="save-text">You will save ₹{savings} on this order</p>
    </div>
  );
};

export default PriceDetailsContainer;
