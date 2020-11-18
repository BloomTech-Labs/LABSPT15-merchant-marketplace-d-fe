import { requestStatus } from '../types/index';
import {
  ADD_PRODUCT_START,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from '../actions/index';

const initialState = {
  newProduct: {},
  getAddProductStatus: requestStatus.ready,
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_START:
      return { ...state, getAddProductStatus: requestStatus.loading };
    case ADD_PRODUCT_SUCCESS:
      return {
        newProduct: action.payload,
        getAddProductStatus: requestStatus.loading,
      };
    case ADD_PRODUCT_ERROR:
      return { ...state, getAddProductStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addProductReducer;
