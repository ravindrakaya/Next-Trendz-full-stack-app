import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../redux/slices/placeOrederSlice";
import "./index.css";

const ShowAddress = () => {
  const address = useSelector((state) => state.orders.address);
  const dispatch = useDispatch();

  const onClickChangeBtn = () => {
    dispatch(removeAddress());
  };

  return (
    <div className="show-address-container">
      <div className="change-address-container">
        <h1 className="show-address-text">Address</h1>
        <button className="change-btn" type="button" onClick={onClickChangeBtn}>
          Change
        </button>
      </div>
      {address.map((eachItem) => (
        <div key={eachItem.id} className="address-list-container">
          <p className="address-list-text">{eachItem.name},</p>
          <p className="address-list-text">{eachItem.street},</p>
          <p className="address-list-text">{eachItem.village},</p>
          <p className="address-list-text">{eachItem.distruct},</p>
          <p className="address-list-text">{eachItem.state},</p>
          <p className="address-list-text">{eachItem.pincode},</p>
          <p className="address-list-text">Mobile: +91 {eachItem.mobile}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowAddress;
