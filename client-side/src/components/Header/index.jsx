import { FiLogOut } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../redux/slices/authSlice";
import { LuLogIn } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import "./index.css";
import { toggleNav } from "../../redux/slices/navSlice";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.auth.token);
  const apiStatusStore = useSelector((state) => state.products.apiStatus);
  const productListStore = useSelector((state) => state.products.productsList);
  const cartCount = useSelector((state) => state.cart.cartItem.length);
  const cartCountCls = cartCount === 0 ? "count-hide" : "cart-count";
  // console.log(productCountStore);
  // console.log(apiStatusStore);

  const btnText = jwtToken !== null ? "Logout" : "Login";

  const btnIcon =
    jwtToken != null ? (
      <FiLogOut className="react-icon-logout" />
    ) : (
      <LuLogIn className="react-icon-logout" />
    );

  const onClicklogout = () => {
    dispatch(removeToken());
    navigate("/login");
  };

  const onClickNavMenu = () => {
    if (apiStatusStore === "FAILURE" || apiStatusStore === "IN_PROGRESS") {
      dispatch(toggleNav(false));
    } else if (apiStatusStore === "SUCCESS") {
      // console.log(productListStore);
      productListStore.length === 0 ? dispatch(toggleNav(false)) : null;
    }
    dispatch(toggleNav());
  };

  const renderSmallDevices = () => (
    <div className="nav-content-small-devices">
      <div className="logo-and-logout-container">
        <div className="nav-menu-logo-container">
          <button
            type="button"
            className="nav-menu-btn"
            onClick={onClickNavMenu}
          >
            {/* <MdMenu className="react-icon-nav-menu" /> */}
          </button>
          <Link to="/" className="link-style">
            {/* <img
              src="nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website-logo"
            /> */}
            {/* <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website-logo"
            /> */}
            <h1 className="logo-text">
              Nxt
              <span className="logo-span"> Trendz</span>
            </h1>
          </Link>
        </div>
        <button
          type="button"
          className="logout-icon-btn"
          onClick={onClicklogout}
        >
          {btnIcon}
        </button>
      </div>
      <div className="nav-link-container">
        <Link to="/" className="link-style">
          <IoMdHome className="react-icon" />
        </Link>
        <Link to="/products" className="link-style">
          <IoBagHandleSharp className="react-icon" />
        </Link>
        <Link to="/cart" className="link-style">
          <div className="cart-count-container">
            <FaCartShopping className="react-icon" />
            <p className={cartCountCls}>{cartCount > 0 ? cartCount : null}</p>
          </div>
        </Link>
        <Link to="/orders" className="link-style">
          <MdOutlineBookmarkBorder className="react-icon" />
        </Link>
      </div>
    </div>
  );

  const renderLargeDevices = () => (
    <div className="nav-content-large-devices">
      <div className="nav-menu-logo-container">
        <button type="button" className="nav-menu-btn" onClick={onClickNavMenu}>
          {/* <MdMenu className="react-icon-nav-menu" /> */}
        </button>
        <Link to="/" className="link-style">
          {/* <img
            src="nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website-logo"
          /> */}
          <h1 className="logo-text">
            Nxt
            <span className="logo-span"> Trendz</span>
          </h1>
        </Link>
      </div>

      <div className="links-and-logout-container">
        <ul className="links-container">
          <li className="list-item">
            <Link to="/" className="link-style">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/products" className="link-style">
              Products
            </Link>
          </li>
          <li className="list-item">
            <Link to="/cart" className="link-style">
              <div className="cart-count-container">
                Cart
                <p className={cartCountCls}>
                  {cartCount > 0 ? cartCount : null}
                </p>
              </div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/orders" className="link-style">
              Orders
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-btn" onClick={onClicklogout}>
          {btnText}
        </button>
      </div>
    </div>
  );

  return (
    <nav className="nav-header">
      {renderSmallDevices()}
      {renderLargeDevices()}
    </nav>
  );
};

export default Header;
