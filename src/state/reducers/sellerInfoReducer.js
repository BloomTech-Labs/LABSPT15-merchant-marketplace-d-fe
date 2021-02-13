import { requestStatus } from '../types/index';
import {
  FETCH_SELLER_INFO_START,
  FETCH_SELLER_INFO_SUCCESS,
  FETCH_SELLER_INFO_ERROR,
  UPDATE_SELLER_INFO_START,
  UPDATE_SELLER_INFO_SUCCESS,
  UPDATE_SELLER_INFO_ERROR,
} from '../actions/index';

const initialState = {
  sellerInfo: {},
  getProductsStatus: requestStatus.ready,
};

const sellerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELLER_INFO_START:
      return { ...state, getSellerInfoStatus: requestStatus.loading };
    case FETCH_SELLER_INFO_SUCCESS:
      return {
        sellerInfo: action.payload,
        getSellerInfoStatus: requestStatus.success,
      };
    case FETCH_SELLER_INFO_ERROR:
      return { ...state, getSellerInfoStatus: requestStatus.error };
    case UPDATE_SELLER_INFO_START:
      return { ...state, updateSellerInfoStatus: requestStatus.loading };
    case UPDATE_SELLER_INFO_SUCCESS:
      return {
        sellerInfo: action.payload,
        updateSellerInfoStatus: requestStatus.success,
      };
    case UPDATE_SELLER_INFO_ERROR:
      return { ...state, updateSellerInfoStatus: requestStatus.error };

    default:
      return state;
  }
};

export default sellerInfoReducer;
