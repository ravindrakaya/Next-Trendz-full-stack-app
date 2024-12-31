import { useEffect } from "react";
import OrdersCartItems from "../OrdersCartItems";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  setOrderedProductDetails,
  setOrdersList,
} from "../../redux/slices/ordersSlice";
import { setShippingAddress } from "../../redux/slices/ordersSlice";
import { setActivePaymentMode } from "../../redux/slices/ordersSlice";
import { setOrdersCart } from "../../redux/slices/ordersSlice";

const OrdersCard = (props) => {
  const { itemDetails } = props;
  const { cartItems, address, orderDetails, activePaymentMode } = itemDetails;
  console.log("cartItems: ", cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setOrderedProductDetails(orderDetails));
    dispatch(setShippingAddress(address));
    dispatch(setActivePaymentMode(activePaymentMode));
    dispatch(setOrdersCart(cartItems));
  }, []);

  return (
    <li className="orders-list-item-container">
      <ul className="orders-cart-items-container">
        {cartItems.length !== 0 &&
          cartItems.map((eachItem) => (
            <OrdersCartItems
              key={eachItem.id}
              itemDetails={eachItem}
              activePaymentMode={activePaymentMode}
            />
          ))}
      </ul>
    </li>
  );
};

export default OrdersCard;
