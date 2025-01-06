import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { useState } from "react";
import NetBankingOptions from "../NetBankingOptions";
import { setOrderPlaced } from "../../redux/slices/placeOrederSlice";
import { clearCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import {
  removeAddress,
  removeCardDetails,
} from "../../redux/slices/placeOrederSlice";
import axios from "axios";

const PaymentGateway = () => {
  // console.log(isLoading)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentMode, setPaymentMode] = useState("COD");
  const cartItem = useSelector((state) => state.cart.cartItem);
  const cardDetails = useSelector((state) => state.orders.cardDetails);
  const address = useSelector((state) => state.orders.address);
  const priceDetails = useSelector((state) => state.cart.priceDetails);
  const { totalAmount } = priceDetails;

  const orderPlaced = useSelector((state) => state.orders.orderPlaced);
  // console.log("orderPlaced", orderPlaced);
  const hidePamentGateWay = orderPlaced ? "hide-payment" : "";

  const onCompletePayment = (status) => {
    if (status === "SUCCESS") {
      dispatch(setOrderPlaced(true));
      dispatch(clearCart());
      dispatch(removeAddress())
      setTimeout(() => {
        navigate("/orders");
        dispatch(setOrderPlaced(false));
      }, 1000);
    }
  };

  const onClickPayOrder = async () => {
    try {
      // Sending Payment Details to Backend
      let url = null;
      let paymentData = null;
      if (
        (address.length > 0 && paymentMode === "COD") ||
        (address.length > 0 &&
          cardDetails.length > 0 &&
          paymentMode === "DebitCard")
      ) {
        // url = "https://nxt-trendz-backend.onrender.com/payment";
        url = "http://localhost:3000/payment";
        paymentData = { cartItem, address, totalAmount, paymentMode };
        const response = await axios.post(url, paymentData);
        onCompletePayment("SUCCESS");
        // console.log(response.data);
      }

      // console.log(url,paymentData)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className={`payment-gateway-container ${hidePamentGateWay}`}>
        <h1 className="payment-gateway-text">Payment Gateway</h1>
        <p className="payment-gateway-amount">Total Amount: ₹{totalAmount}</p>
        <div className="payment-mode-container">
          <label>Patment Mode</label>
          <select
            className="drop-down-container"
            value={paymentMode}
            onChange={(e) => setPaymentMode(e.target.value)}
          >
            <option value="COD">Cash On Delivery</option>
            <option value="DebitCard">Debit Card</option>
          </select>
        </div>
        {paymentMode === "DebitCard" && <NetBankingOptions />}
        <button className="pay-now-btn" type="button" onClick={onClickPayOrder}>
          {paymentMode === "COD" ? "Confirm Order" : "Pay Now"}
        </button>
      </div>
      {orderPlaced && (
        <div className="order-success-container">
          <h1 className="success-msg">
            {paymentMode === "COD"
              ? "Order Placed Successfully!"
              : "Payment Successfull And Order Placed!"}
          </h1>
        </div>
      )}
    </>
  );
};

export default PaymentGateway;
