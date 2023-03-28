import React from "react";
import { Route, Routes } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import NavBar from "../Components/Navbar/NavBar";
import Cart from "../Pages/Cart/Cart";
import OrderCompleted from "../Pages/OrderCompleted/OrderCompleted";
import UserDetailForm from "../Pages/UserDetailForm/UserDetailForm";
import ConfirmedOrder from "../Pages/ConfirmedOrder/ConfirmedOrder";
import Login from "../Pages/Registration/Login";
import Signup from "../Pages/Registration/Signup";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Products from "../Pages/Products/Products";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  const userLoggedIn = localStorage.getItem("token");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:id?" element={<Products />} />
          <Route path="/productDetails/:id?" element={<ProductDetails />} />

          <Route path="/Checkout">
            <Route
              index={true}
              element={
                <PrivateRoutes>
                  <Cart />{" "}
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="users-detail-form"
              element={
                <PrivateRoutes>
                  <UserDetailForm />{" "}
                </PrivateRoutes>
              }
            ></Route>
            <Route
              path="order-completed"
              element={
                <PrivateRoutes>
                  <ConfirmedOrder />{" "}
                </PrivateRoutes>
              }
            ></Route>
          </Route>

          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
