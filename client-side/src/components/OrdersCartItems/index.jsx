import axios from "axios";
import "./index.css";

const OrdersCartItems = (props) => {
  const { itemDetails, activePaymentMode } = props;
  const { title, orderId, brand, quantity, price, imageUrl, id } = itemDetails;
  // console.log(itemDetails);
  // let itemsText = null;

  const onClickCancleBtn = async () => {
    try {
      const url = "http://localhost:3000/cancel-order";
      const values = { id, orderId };
      const response = await axios.post(url, values);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <li className="orders-cart-item">
        <>
          <div className="item-text-container">
            <h1 className="orders-item-text">{title}</h1>
            <p className="orders-item-brand">{orderId}</p>
            <p className="orders-item-brand">{brand}</p>
            <p className="orders-item-brand">
              {`items (${quantity} * ₹${price}/-)`}
            </p>
            <p className="orders-item-brand">
              {`Amount: 
          ₹${quantity * price}/-`}
            </p>
            <div className="order-cart-btn-container">
              {/* {activePaymentMode === "COD" ? (
                <p className="paid-class">Un Paid</p>
              ) : (
                <p className="paid-class">Paid</p>
              )} */}
              <button
                className="cancel-btn"
                type="button"
                onClick={onClickCancleBtn}
              >
                Cancel
              </button>
              {activePaymentMode === "COD" ? (
                <button className="pay-now-btn" type="button">
                  Pay Now
                </button>
              ) : (
                <p className="paid-class">PAID</p>
              )}
            </div>
          </div>
          <img src={imageUrl} alt={title} className="orders-cart-item-img" />
        </>
      </li>
    </>
  );
};

export default OrdersCartItems;
