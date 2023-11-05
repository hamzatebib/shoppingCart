import { FETCH_PRODUCTS } from "../actions/type";

//action =>  object inside  dispatch({ type: "FETCH_PRODUCTS", data: data });
export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      //create key inside state with name products
      return { products: action.data };
    default:
      return state;
  }
};
