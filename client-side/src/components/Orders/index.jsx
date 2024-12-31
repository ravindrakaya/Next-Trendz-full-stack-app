import "./index.css";
import Header from "../Header";
import { useEffect } from "react";
import axios from "axios";
import { setOrdersList } from "../../redux/slices/ordersSlice";
import { useDispatch, useSelector } from "react-redux";
import OrdersEmptyView from "../OrdersEmptyView";
import OrdersContainer from "../OrdersContainer";
import { setApiStatus } from "../../redux/slices/productSlice";
import LoadingView from "../LoadingView";
import FailureView from "../FailureView";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Orders = () => {
  const ordersList = useSelector((state) => state.orderDetails.ordersList);
  const apiStatusStore = useSelector((state) => state.products.apiStatus);
  // console.log(apiStatusStore);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrdersList();
  }, []);

  const getOrdersList = async () => {
    try {
      dispatch(setApiStatus(apiStatusConstants.inProgress));
      const url = "http://localhost:3000/orders";
      const response = await axios(url);
      // console.log(response);
      if (response.status === 200) {
        dispatch(setApiStatus(apiStatusConstants.success));
        dispatch(setOrdersList(response.data.updatedRows));
      } else {
        dispatch(setApiStatus(apiStatusConstants.failure));
      }
    } catch (error) {
      dispatch(setApiStatus(apiStatusConstants.failure));
    }
  };

  const renderOrdersView = () => {
    switch (apiStatusStore) {
      case apiStatusConstants.inProgress:
        return <LoadingView />;
      case apiStatusConstants.success:
        return ordersList.length === 0 ? (
          <OrdersEmptyView />
        ) : (
          <OrdersContainer />
        );
      case apiStatusConstants.failure:
        return <FailureView />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {renderOrdersView()}
    </>
  );
};

export default Orders;
