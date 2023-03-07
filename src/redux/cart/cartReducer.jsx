import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";

const initialState = {
  products: [],
};

const ShoppinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (existingProductIndex === -1) {
        return {
          ...state,
          products: [...state.products, action.payload.product],

          // quantity: [...state.quantity, action.payload.quantity],
        };
      } else {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].counts +=
          action.payload.product.counts;
        return {
          ...state,
          products: updatedProducts,
        };
      }
    case REMOVE_FROM_CART:
      console.log(123432);
      let newArr=[...state.products];
      // const newProducts = state.products.filter(
      //   product => product.id !== action.payload.product.id
      // );
      newArr.splice(action.payload.index,1);
      return {
       ...state,
        products: newArr,
      };
    default:
      return state;
  }
};
export { ShoppinReducer };
