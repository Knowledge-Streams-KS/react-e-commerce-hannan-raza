import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";

export const addToCart = (product, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};
export const removeFromCart = (product,index) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product: { product },
      index:index
    },
  };
};
