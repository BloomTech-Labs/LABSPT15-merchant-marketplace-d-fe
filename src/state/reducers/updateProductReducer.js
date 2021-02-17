import { requestStatus } from '../types/index';
import {
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR,
} from '../actions/index';

const initialState = {
  updatedProduct: {},
  getUpdatedProductStatus: requestStatus.ready,
};

const updateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_START:
      return { ...state, getUpdatedProductStatus: requestStatus.loading };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        updatedProduct: action.payload,
        getUpdatedProductStatus: requestStatus.success,
      };
    case UPDATE_PRODUCT_ERROR:
      return { ...state, getUpdatedProductStatus: requestStatus.error };
    default:
      return state;
  }
};

export default updateProductReducer;
