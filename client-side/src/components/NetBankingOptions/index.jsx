import { useState } from "react";
import "./index.css";
import NetBankingForm from "../NetBankingForm";
import ShowCardDetails from "../ShowCardDetails";
import { useSelector } from "react-redux";

const NetBankingOptions = () => {
  const [bankName, setBankName] = useState("");
  const cardDetails = useSelector((state) => state.orders.cardDetails);
  return (
    <>
      <div className="net-banking-options-container">
        <label>Select Bank</label>
        <select
          className="net-banking-options"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        >
          <option value="SBI">SBI</option>
          <option value="HDFC">HDFC</option>
          <option value="AXIS BANK">AXIS BANK</option>
          <option value="ICIC">ICIC</option>
        </select>
      </div>
      {cardDetails.length !== 0 ? <ShowCardDetails /> : <NetBankingForm />}
    </>
  );
};

export default NetBankingOptions;
