import { useSelector } from "react-redux";
import Header from "../Header";
import CartEmptyView from "../CartEmptyView";
import CartView from "../CartView";

const Cart = () => {
  const cartItemStore = useSelector((state) => state.cart.cartItem);
  // console.log(cartItemStore);
  
  return (
    <div className="main-cart-container">
      <Header />
      {cartItemStore.length === 0 ? <CartEmptyView /> : <CartView />}
    </div>
  );
};

export default Cart;
