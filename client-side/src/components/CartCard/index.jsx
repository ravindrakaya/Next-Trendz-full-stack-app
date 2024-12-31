import "./index.css";
import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addCartItem, removeCartItem } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useSelector } from "react-redux";

const CartCard = (props) => {
  const dispatch = useDispatch();
  const { cartDetails } = props;
  const { id, imageUrl, title, brand, quantity, price, rating } = cartDetails;
  // console.log(id, imageUrl, title, brand, quantity, price, rating);
  const isContinue = useSelector((state) => state.cart.isContinue);
  const productCountCls = isContinue ? "count-cls" : "product-count";

  const onClickRemoveItem = () => {
    dispatch(removeCartItem(id));
  };

  const onClickCartPlus = () => {
    dispatch(addCartItem({ ...cartDetails, quantity: 1 }));
  };

  const onClickCartMinus = () => {
    if (quantity > 1) {
      dispatch(addCartItem({ ...cartDetails, quantity: -1 }));
    } else {
      onClickRemoveItem();
    }
  };

  return (
    <li className="cart-list-item-container">
      <img src={imageUrl} alt={title} className="cart-item-image" />
      <div className="cart-item-content-container">
        <h1 className="cart-item-heading">{title}</h1>
        <p className="cart-item-brand">{brand}</p>
        <p className="cart-item-price">Rs. {price}/-</p>
        <div className="price-rating-container">
          <div className="rating-container">
            <p className="rating-text">{rating}</p>
            <FaStar className="start-icon" />
          </div>
        </div>
        <div className="quantity-items-container">
          <p className="cart-item-quantity">Qty:</p>
          {!isContinue && (
            <button
              type="button"
              className="count-icon-btn"
              onClick={onClickCartMinus}
            >
              <CiSquareMinus className="quantity-react-icon" />
            </button>
          )}

          <p className={productCountCls}>{quantity}</p>
          {!isContinue && (
            <button type="button" className="count-icon-btn">
              <CiSquarePlus
                className="quantity-react-icon"
                onClick={onClickCartPlus}
              />
            </button>
          )}
        </div>
        <button
          type="button"
          className="remove-btn"
          onClick={onClickRemoveItem}
        >
          <RiDeleteBin6Line className="remove-icon" />
          <p className="remove-text">Remove</p>
        </button>
      </div>
    </li>
  );
};

export default CartCard;
