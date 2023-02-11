import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import NavBar from "./Components/Navbar/NavBar";
import Cart from "./Pages/Cart/Cart";
import OrderCompleted from "./Pages/OrderCompleted/OrderCompleted";
import UserDetailForm from "./Pages/UserDetailForm/UserDetailForm";
import ConfirmedOrder from "./Pages/ConfirmedOrder/ConfirmedOrder";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id?" element={<Products />} />
          <Route path="/productDetails/:id?" element={<ProductDetails />} />
          <Route path="/checkout" element={<Cart />}>
            <Route path="order-completed" element={<OrderCompleted />} />
            <Route path="user-details-form" element={<UserDetailForm />}>
              <Route path="confirmed-order" element={<ConfirmedOrder />} />
            </Route>
          </Route>

          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
