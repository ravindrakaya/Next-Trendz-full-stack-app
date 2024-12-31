import ClipLoader from "react-spinners/ClipLoader";
import "./index.css";

const LoadingView = () => {
  return (
    <div className="products-loader-container">
      <ClipLoader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );
};

export default LoadingView;
