import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import CartCard from "../CartCard";
import PriceDetailsContainer from "../PriceDetailsContainer";
import AddressForm from "../AddressForm";
import ShowAddress from "../ShowAddress";
import { setPriceDetails } from "../../redux/slices/cartSlice";
import { data, useNavigate } from "react-router-dom";
import axios from "axios";
import { setIsContinue } from "../../redux/slices/cartSlice";
import { setIsLoading } from "../../redux/slices/cartSlice";
import LoadingView from "../LoadingView";
import { useEffect } from "react";


const CartView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItem);
  const address = useSelector((state) => state.orders.address);
  const orderPlaced = useSelector((state) => state.orders.orderPlaced);
  const isContinue = useSelector((state) => state.cart.isContinue);
  const ContinueBtnCls = isContinue ? "hide" : "continue-btn-container";
  const isLoading = useSelector((state) => state.cart.isLoading);
  // console.log(orderPlaced);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1500);
  }, []);

  // console.log(cartItemStore);
  // console.log(address);

  const onClickContinueBtn = async () => {
    dispatch(setIsContinue(true));
    try {
      const url = "https://nxt-trendz-backend.onrender.com/place-order";

      const response = await axios.post(url, cartItems);
      if (response.status === 200) {
        // console.log(response);
        dispatch(setPriceDetails(response.data));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickPlaceOrder = () => {
    if (address.length > 0 && cartItems.length > 0) {
      dispatch(setIsLoading(true));
      setTimeout(() => {
        !orderPlaced && navigate("/payment");
        dispatch(setIsLoading(false));
      }, 1500);
    }else {
      navigate("/cart")
    }
  };

  const renderCartContainer = () => {
    return (
      <div className="cart-container">
        <h1 className="cart-heading">My Cart</h1>
        <div className="cart-price-details-container">
          <ul className="cart-list-container">
            {cartItems.map((eachItem) => (
              <CartCard key={eachItem.id} cartDetails={eachItem} />
            ))}
            <div className={ContinueBtnCls}>
              <button
                type="button"
                className="continue-btn"
                onClick={onClickContinueBtn}
              >
                Continue
              </button>
            </div>
          </ul>
          <div>
            {isContinue && (
              <div className="price-details-address-container">
                <PriceDetailsContainer />
                {address.length === 0 ? <AddressForm /> : <ShowAddress />}
                <div className="place-order-container">
                  {address.length !== 0 &&
                    cartItems.length > 0 &&
                    !orderPlaced && (
                      <button
                        type="button"
                        className="placeorder-btn"
                        onClick={onClickPlaceOrder}
                      >
                        PLACE ORDER
                      </button>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return isLoading ? <LoadingView /> : renderCartContainer();
};

export default CartView;
