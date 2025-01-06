import { useParams } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProductDetails } from "../../redux/slices/productSlice";
import { setApiStatus } from "../../redux/slices/productSlice";
import LoadingView from "../LoadingView";
import FailureView from "../FailureView";
import ProductDetailsSuccesView from "../ProductDetailsSuccesView";
import Header from "../Header";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ProductItemDetails = () => {
  const { productId } = useParams();
  // console.log(productId)

  const dispatch = useDispatch();

  const apiStatusStore = useSelector((state) => state.products.apiStatus);

  useEffect(() => {
    getProductitemDetails();
  }, [dispatch]);

  const getProductitemDetails = async () => {
    try {
      dispatch(setApiStatus(apiStatusConstants.inProgress));
      // const url =  `https://nxt-trendz-backend.onrender.com/products/${productId}`
      const url = `http://localhost:3000/products/${productId}`;
      const response = await axios.get(url);
      // console.log(response);
      if (response.status === 200) {
        const updatedData = {
          id: response.data.id,
          availability: response.data.availability,
          brand: response.data.brand,
          description: response.data.description,
          imageUrl: response.data.image_url,
          price: response.data.price,
          rating: response.data.rating,
          style: response.data.style,
          title: response.data.title,
          totalReviews: response.data.total_reviews,
        };
        // console.log(updatedData);
        dispatch(setApiStatus(apiStatusConstants.success));
        dispatch(setProductDetails(updatedData));
      } else {
        dispatch(setApiStatus(apiStatusConstants.failure));
        dispatch(setProductDetails(response.data));
      }
    } catch (err) {
      dispatch(setApiStatus(apiStatusConstants.failure));
      dispatch(setProductDetails(err.message));
    }
  };

  const renderProductDetails = () => {
    switch (apiStatusStore) {
      case apiStatusConstants.inProgress:
        return <LoadingView />;
      case apiStatusConstants.failure:
        return <FailureView />;
      case apiStatusConstants.success:
        return <ProductDetailsSuccesView />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {renderProductDetails()}
    </>
  );
};

export default ProductItemDetails;
