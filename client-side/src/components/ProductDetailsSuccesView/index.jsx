import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import MoreProductDetails from "../MoreProductDetails";
import { addCartItem } from "../../redux/slices/cartSlice";
import { useState } from "react";

import "./index.css";

const ProductDetailsSuccesView = () => {
  const productDetailsStore = useSelector(
    (state) => state.products.productDetails
  );

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // console.log(productDetailsStore);

  const {
    availability,
    brand,
    description,
    imageUrl,
    price,
    rating,
    title,
    totalReviews,
  } = productDetailsStore;

  const availabilitycls =
    availability === "Out Of Stock" ? "out-of-stock" : "in-stock";

  const onClickPlusBtn = () => {
    availability === "In Stock" &&
      setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onClickMinussBtn = () => {
    availability === "In Stock" &&
      setQuantity((prevQuantity) => {
        if (prevQuantity > 1) {
          return prevQuantity - 1;
        } else {
          return (prevQuantity = 1);
        }
      });
  };

  const onClickAddCart = () => {
    if (availability === "In Stock") {
      dispatch(addCartItem({ ...productDetailsStore, quantity }));
    } else {
      alert("Out Of Stock");
    }
  };

  const renderProductDetails = () => (
    <div className="product-details-container">
      <img
        src={imageUrl}
        className="product-detail-image-large-screen"
        alt="product-image"
      />
      <div className="product-details-content-container">
        <img
          src={imageUrl}
          className="product-detail-image-small-screen"
          alt="product-image"
        />
        <h1 className="product-details-text">{title}</h1>
        <p className="product-details-price">Rs {price}/-</p>
        <div className="product-rating-review-container">
          <div className="rating-container">
            <p className="rating-text">{rating}</p>
            <FaStar className="start-icon" />
          </div>
          <p className="product-details-review">{totalReviews} reviews</p>
        </div>
        <p className="product-details-description">{description}</p>
        <p className="product-details-availability">
          Available:
          <span className={availabilitycls}> {availability}</span>
        </p>
        <p className="product-details-availability">
          Brand:
          <span className="brand"> {brand}</span>
        </p>
        <div className="quantity-container">
          <p className="quantity-text">Quantity:</p>
          <div className="quantity-items-container">
            <button
              type="button"
              className="count-icon-btn"
              onClick={onClickMinussBtn}
            >
              <CiSquareMinus className="quantity-react-icon" />
            </button>

            <p className="product-count">{quantity}</p>
            <button type="button" className="count-icon-btn">
              <CiSquarePlus
                className="quantity-react-icon"
                onClick={onClickPlusBtn}
              />
            </button>
          </div>
        </div>
        <button type="button" className="add-cart-btn" onClick={onClickAddCart}>
          ADD TO CART
        </button>
        <MoreProductDetails />
      </div>
    </div>
  );

  return renderProductDetails();
};

export default ProductDetailsSuccesView;
