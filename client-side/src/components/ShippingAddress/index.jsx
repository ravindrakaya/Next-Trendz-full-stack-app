import "./index.css";

const ShippingAddress = (props) => {
  const { itemDetails } = props;
  const { name, street, village, distruct, state, pincode, mobile } =
    itemDetails;
  // console.log(itemDetails);
  return (
    <div className="shipping-address-container">
      <p className="address-list-text">{name},</p>
      <p className="address-list-text">{street},</p>
      <p className="address-list-text">{village},</p>
      <p className="address-list-text">{distruct},</p>
      <p className="address-list-text">{state},</p>
      <p className="address-list-text">{pincode},</p>
      <p className="address-list-text">Mobile: +91 {mobile}</p>
    </div>
  );
};

export default ShippingAddress;
