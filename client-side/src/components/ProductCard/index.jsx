import { Link } from "react-router-dom";
import "./index.css";
import { FaStar } from "react-icons/fa";
const ProductCard = (props) => {
  const { productDetails } = props;
  const { brand, imageUrl, price, title, rating, id } = productDetails;
  // console.log(productDetails);
  return (
    <li className="product-card-container">
      <Link to={`/products/${id}`} className="product-link">
        <img src={imageUrl} alt={title} className="product-img" />
        <h1 className="product-title">{title}</h1>
        <p className="product-brand">by {brand}</p>
        <div className="price-rating-container">
          <p className="price-text">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating-text">{rating}</p>
            <FaStar className="start-icon" />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
