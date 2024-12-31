import { useSelector } from "react-redux";

import "./index.css";
import OrdersCard from "../OrdersCard";
import ShippingAddress from "../ShippingAddress";
import OrdersEmptyView from "../OrdersEmptyView";

const OrdersContainer = () => {
  const ordersList = useSelector((state) => state.orderDetails.ordersList);
  // const ordersCart = useSelector((state) => state.orderDetails.ordersCart);
  const orderedProductDetails = useSelector(
    (state) => state.orderDetails.orderedProductDetails
  );
  const shippingAddress = useSelector(
    (state) => state.orderDetails.shippingAddress
  );
  // console.log("ordersCart: ", ordersCart);
  // console.log("ordersList: ", ordersList);
  const {
    totalAmount,
    transactionId,
    shipping,
    orderStatus,
    expectedDelivery,
    createdAt,
  } = orderedProductDetails;

  const renderOrdersContainer = () => {
    return (
      <div className="orders-main-container">
        {/* {orderedItems.length === 0 && <OrdersEmptyView />} */}
        {/* {orderedItems.length !== 0 && (
          <h1 className="orders-container-text">Orders</h1>
        )} */}
        <h1 className="orders-container-text">Orders</h1>

        <div className="orders-price-main-container">
          <ul className="orders-list-container">
            {ordersList.map((eachItem) => (
              <OrdersCard key={eachItem.uniqueId} itemDetails={eachItem} />
            ))}
          </ul>
          {(
            <div className="orders-price-details-container">
              <h1 className="orders-price-details-text">Order Details</h1>
              <p className="orders-price-text">Order Status: {orderStatus} </p>
              <p className="orders-price-text">
                Transation ID: {transactionId}{" "}
              </p>
              <p className="orders-price-text">Ordered At: {createdAt} </p>
              <p className="orders-price-text">
                Shipping will Start from: {shipping}
              </p>
              <p className="orders-price-details-text">
                Expected Delivery: {expectedDelivery}
              </p>
              <h1 className="orders-price-details-text">
                Total Amount: {totalAmount}
              </h1>
              <hr />
              <h1 className="orders-price-details-text">Shipping Address</h1>
              {shippingAddress.map((eachItem) => (
                <ShippingAddress key={eachItem.id} itemDetails={eachItem} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return renderOrdersContainer();

  // return ordersCart.length !== 0 ? (
  //   renderOrdersContainer()
  // ) : (
  //   <OrdersEmptyView />
  // );
};

export default OrdersContainer;
