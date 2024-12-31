import { useSelector } from "react-redux";
import Header from "../Header";
import "./index.css";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const jwtToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onClickShopNowBtn = () => {
    jwtToken !== null ? navigate("/products") : navigate("/login");
  };

  return (
    <div className="app-container">
      <Header />
      {/* {jwtToken !== null ? <Navigate to="/" /> : <Navigate to="/login" />} */}
      <div className="home-container">
        <div className="home-content-container">
          <h1 className="home-heading">Clothes That Get You Noticed</h1>
          <img
            src="nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-img-small-screen"
          />
          <p className="home-description">
            Fashion is part of the daily air it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that wat you are. so, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button
            type="button"
            className="shop-now-btn"
            onClick={onClickShopNowBtn}
          >
            Shop Now
          </button>
        </div>
        <img
          src="nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-img-large-screen"
        />
      </div>
    </div>
  );
};

export default Home;
