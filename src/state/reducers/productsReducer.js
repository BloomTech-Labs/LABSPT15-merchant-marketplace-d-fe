import { requestStatus } from '../types/index';
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../actions/index';

const initialState = {
  products: [],
  getProductsStatus: requestStatus.ready,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, getProductsStatus: requestStatus.loading };
    case FETCH_PRODUCTS_SUCCESS:
      const newState = action.payload;
      return { products: newState, getProductsStatus: requestStatus.success };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, getProductsStatus: requestStatus.error };

    default:
      return state;
  }
};

export default productsReducer;
