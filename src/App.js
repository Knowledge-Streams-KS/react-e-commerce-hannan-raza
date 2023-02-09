import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:id?" element={<Products />} />
        <Route path="/productDetails/:id?" element={<ProductDetails />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
