import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { useDispatch } from "react-redux";
import { setAddress } from "../../redux/slices/placeOrederSlice";

const AddressForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [street, setStreet] = useState("");
  const [village, setVillage] = useState("");
  const [distruct, setDistruct] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [errObj, setErrObj] = useState({});
  const dispatch = useDispatch();

  const validateForm = () => {
    const mobileRegex = /^[6-9][0-9]{9}$/; // Adjust regex for specific country rules
    let isValid = true;
    let newObj = {};

    if (!name.trim()) {
      newObj.name = "*Provide Valid Name";
      isValid = false;
    }

    if (!mobileRegex.test(mobile.trim())) {
      newObj.mobile = "*Enter a valid 10-digit mobile number";
      isValid = false;
    }

    if (!street.trim()) {
      newObj.street = "*Provide Valid Street";
      isValid = false;
    }

    if (!village.trim()) {
      newObj.village = "*Provide Valid Village";
      isValid = false;
    }

    if (!distruct.trim()) {
      newObj.distruct = "*Provide Valid Distruct";
      isValid = false;
    }
    if (!state.trim()) {
      newObj.state = "*Provide Valid State";
      isValid = false;
    }
    if (!pincode.trim()) {
      newObj.pincode = "*Provide Valid Pincode";
      isValid = false;
    }
    setErrObj(newObj);
    return isValid;
  };

  const onSubmitAdressForm = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      mobile,
      street,
      village,
      distruct,
      state,
      pincode,
    };

    if (validateForm()) {
      dispatch(setAddress(newItem));
      setName("");
      setMobile("");
      setStreet("");
      setVillage("");
      setDistruct("");
      setState("");
      setPincode("");
      setErrObj({});
    }
  };

  return (
    <form className="address-form" onSubmit={onSubmitAdressForm}>
      <h1 className="show-address-text">Address</h1>
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Name">
          Name:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      {errObj.name && <span className="err-msg">{errObj.name}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Mobile">
          Mobile:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Name"
          placeholder="Enter Mobile"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
      </div>
      {errObj.mobile && <span className="err-msg">{errObj.mobile}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Street">
          Street:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Street"
          placeholder="Enter Street"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        />
      </div>
      {errObj.street && <span className="err-msg">{errObj.street}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Village">
          Village:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Village"
          placeholder="Enter Village"
          onChange={(e) => setVillage(e.target.value)}
          value={village}
        />
      </div>
      {errObj.village && <span className="err-msg">{errObj.village}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Distruct">
          Distruct:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Distruct"
          placeholder="Enter Distruct"
          onChange={(e) => setDistruct(e.target.value)}
          value={distruct}
        />
      </div>
      {errObj.distruct && <span className="err-msg">{errObj.distruct}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="State">
          State:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="State"
          placeholder="Enter State"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </div>
      {errObj.state && <span className="err-msg">{errObj.state}</span>}
      <div className="address-input-container">
        <label className="address-input-label" htmlFor="Pincode">
          Pincode:
        </label>
        <input
          type="text"
          className="address-input-el"
          id="Pincode"
          placeholder="Enter Pincode"
          onChange={(e) => setPincode(e.target.value)}
          value={pincode}
        />
      </div>
      {errObj.pincode && <span className="err-msg">{errObj.pincode}</span>}
      <div className="submit-btn-container">
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
