import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductItemDetails from "./components/ProductItemDetails";
import PaymentGateway from "./components/PaymentGateway";
import Orders from "./components/Orders";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/products/:productId" element={<ProductItemDetails />} /> */}
          <Route
            path="/products/:productId"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                <PaymentGateway />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
