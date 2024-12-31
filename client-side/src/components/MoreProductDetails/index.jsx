import { TbReplaceFilled } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { MdOutlineAirplaneTicket } from "react-icons/md";

import "./index.css";

const MoreProductDetails = () => {
  return (
    <>
      <div className="payment-type-container">
        <div className="payment-type-text-container">
          <p className="payment-type-text">Payment</p>
          <p className="secure-text">Secure transaction</p>
        </div>
        <div className="payment-type-ship-container">
          <p className="payment-type-text">Ships from</p>
          <p className="ship-text ship-text-large-screen">Nxt Trendz</p>
        </div>
        <div className="payment-type-ship-container">
          <p className="payment-type-text">Sold by</p>
          <p className="ship-text ship-text-large-screen">Nxt Trendz Private ltd.</p>
        </div>
      </div>
      <div className="deliver-container">
        <div className="delivery-content-container">
          <TbReplaceFilled className="delivery-react-icon" />
          <p className="delivery-text">7 days Service center Replacement</p>
        </div>
        <div className="delivery-content-container">
          <CiDeliveryTruck className="delivery-react-icon" />
          <p className="delivery-text">Free Delivery</p>
        </div>
        <div className="delivery-content-container">
          <SiTicktick className="delivery-react-icon" />
          <p className="delivery-text">1 Year Warranty</p>
        </div>
        <div className="delivery-content-container">
          <MdOutlineAirplaneTicket className="delivery-react-icon" />
          <p className="delivery-text">Cash/Pay on Delivery</p>
        </div>
      </div>
    </>
  );
};

export default MoreProductDetails;
