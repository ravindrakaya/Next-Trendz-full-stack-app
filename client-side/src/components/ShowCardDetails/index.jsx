import { useDispatch, useSelector } from "react-redux";
import { removeCardDetails } from "../../redux/slices/placeOrederSlice";
import "./index.css"
const ShowCardDetails = () => {
  const cardDetails = useSelector((state) => state.orders.cardDetails);
  const dispatch = useDispatch();
  const onClickChangeBtn = () => {
    dispatch(removeCardDetails());
  };
  return (
    <div className="show-card-container">
      <div className="change-card-container">
        <h1 className="show-card-text">Card Details</h1>
        <button className="change-btn" type="button" onClick={onClickChangeBtn}>
          Change
        </button>
      </div>
      {cardDetails.map((eachItem) => (
        <div key={eachItem.id} className="address-list-container">
          <p className="address-list-text">{eachItem.holderName},</p>
          <p className="address-list-text">Card No:{eachItem.cardNumber},</p>
          <p className="address-list-text">cvv: ****,</p>
          <p className="address-list-text">expires: *****,</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCardDetails;
