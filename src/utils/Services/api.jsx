import axios from "axios";

const productService = {
  getAllProducts: () => {
    return axios.get("http://localhost:5000/product/getProduct");
  },
  getProductsByCategory: (categoryId) => {
    return axios.get(
      `http://localhost:5000/product/getProductByCategory?category=${categoryId}`
    );
  },
  getAllCategories: () => {
    return axios.get("http://localhost:5000/product/getCategory");
  },
};

export default productService;
