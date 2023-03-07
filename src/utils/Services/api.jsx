import axios from "axios";

const productService = {
  getAllProducts: () => {
    return axios.get("https://fakestoreapi.com/products");
  },
  getProductsByCategory: (categoryId) => {
    return axios.get(
      `https://fakestoreapi.com/products/category/${categoryId}`
    );
  },
  getAllCategories: () => {
    return axios.get("https://fakestoreapi.com/products/categories");
  },
};

export default productService;
