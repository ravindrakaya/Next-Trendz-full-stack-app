import { useDispatch, useSelector } from "react-redux";
import { setCardDetails } from "../../redux/slices/placeOrederSlice";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import { useState } from "react";

const NetBankingForm = () => {
  const dispatch = useDispatch();
  const [holderName, setHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [errObj, setErrObj] = useState({});

  const validateForm = () => {
    let isValid = true;
    let newObj = {};
    if (!holderName.trim()) {
      newObj.holderName = "* Provide Valid Account Holder Name";
      isValid = false;
    }
    if (!/^[0-9]{16}$/.test(cardNumber.trim())) {
      newObj.cardNumber = "* Card Number must be 16 digits";
      isValid = false;
    }
    if (!/^[0-9]{3,4}$/.test(cvv.trim())) {
      newObj.cvv = "* CVV must be 3 or 4 digits";
      isValid = false;
    }
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiry.trim())) {
      newObj.expiry = "* Expiry must be in MM/YY format";
      isValid = false;
    }

    setErrObj(newObj);
    // console.log(newObj)
    return isValid;
  };

  const onSubmitAdd = (event) => {
    event.preventDefault();

    const newCard = {
      id: uuidv4(),
      holderName,
      cardNumber,
      cvv,
      expiry,
    };
    if (validateForm()) {
      // console.log(newCard);
      dispatch(setCardDetails(newCard));
      setHolderName("");
      setCardNumber("");
      setCvv("");
      setExpiry("");
      setErrObj({});
    }
  };
  return (
    <form className="netbanking-form" onSubmit={onSubmitAdd}>
      <div className="account-filed">
        <label className="account-filed-label" htmlFor="Account Holder Name">
          Account Holder Name
        </label>
        <input
          className="account-filed-input"
          id="Account Holder Name"
          type="text"
          placeholder="Enter Account Holder Name"
          onChange={(e) => setHolderName(e.target.value)}
          value={holderName}
        />
      </div>
      {errObj.holderName && <p className="error-msg">{errObj.holderName}</p>}
      <div className="account-filed">
        <label className="account-filed-label" htmlFor="Card Number">
          Card Number
        </label>
        <input
          className="account-filed-input"
          id="Card Number"
          type="text"
          placeholder="Enter Account Card Number"
          onChange={(e) => setCardNumber(e.target.value)}
          value={cardNumber}
        />
      </div>
      {errObj.cardNumber && <p className="error-msg">{errObj.cardNumber}</p>}
      
      <div className="account-filed-cvv-expiry">
        <input
          className="account-filed-cvv"
          type="text"
          placeholder="CVV ?"
          onChange={(e) => setCvv(e.target.value)}
          value={cvv}
        />

        <input
          className="account-filed-expiry"
          type="text"
          placeholder="Expiry MM/YY"
          onChange={(e) => setExpiry(e.target.value)}
          value={expiry}
        />
      </div>
      {errObj.cvv && <p className="error-msg">{errObj.cvv}</p>}
      {errObj.expiry && <p className="error-msg">{errObj.expiry}</p>}
      <div className="account-filed-add-btn">
        <button className="add-btn" type="submit">
          ADD
        </button>
      </div>
    </form>
  );
};

export default NetBankingForm;
