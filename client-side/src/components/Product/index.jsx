import Header from "../Header";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setProductList, setApiStatus } from "../../redux/slices/productSlice";
import ProductCard from "../ProductCard";
import LoadingView from "../LoadingView";
import NoProductsView from "../NoProductsView";
import FailureView from "../FailureView";
import ProductHeader from "../ProductHeader";
import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Product = () => {
  const dispatch = useDispatch();
  const navStore = useSelector((state) => state.navToggle.isClicked);
  const productsList = useSelector((state) => state.products.productsList);
  const apiStatusStore = useSelector((state) => state.products.apiStatus);
  const searchInputStore = useSelector((state) => state.filters.searchInput);

  // const { categories, ratings } = useSelector(
  //   (state) => state.filters.filtersList
  // );

  // console.log(categories);

  const productContainerCls = navStore
    ? "products-container product-container-hide product-container-position-fixed"
    : "products-container-full";

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  const formatingData = (data) => {
    const updatedData = data.map((eachItem) => ({
      brand: eachItem.brand,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      price: eachItem.price,
      rating: eachItem.rating,
      title: eachItem.title,
    }));
    return updatedData;
  };

  const getProducts = async () => {
    try {
      dispatch(setApiStatus(apiStatusConstants.inProgress));
      const response = await axios.get("https://nxt-trendz-backend.onrender.com/products");
      // console.log(response);
      if (response.status === 200) {
        // console.log(response.data);
        const updatedList = formatingData(response.data);
        // console.log(updatedList);
        dispatch(setApiStatus(apiStatusConstants.success));
        dispatch(setProductList(updatedList));
      } else {
        dispatch(setApiStatus(apiStatusConstants.failure));
        dispatch(setProductList(response.data));
      }
    } catch (err) {
      dispatch(setApiStatus(apiStatusConstants.failure));
      dispatch(setProductList([]));
    }
  };

  const renderProductsList = () => {
    // console.log(filteredResults);

    return (
      <>
        {productsList.length !== 0 ? <ProductHeader /> : null}

        <ul className="product-list-container">
          {productsList.length === 0 ? (
            <NoProductsView />
          ) : (
            productsList.map((eachItem) => (
              <ProductCard key={eachItem.id} productDetails={eachItem} />
            ))
          )}
        </ul>
      </>
    );
  };

  const renderProductView = () => {
    switch (apiStatusStore) {
      case apiStatusConstants.inProgress:
        return <LoadingView />;
      case apiStatusConstants.success:
        return productsList.length === 0 ? (
          <NoProductsView />
        ) : (
          renderProductsList()
        );
      case apiStatusConstants.failure:
        return <FailureView />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="products-sidebar-container">
        <Sidebar />
        <div className={productContainerCls}>{renderProductView()}</div>
      </div>
    </>
  );
};

export default Product;
