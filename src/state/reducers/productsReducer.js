import { requestStatus } from '../types/index';
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_ITEM_PHOTOS_START,
  FETCH_ITEM_PHOTOS_SUCCESS,
  FETCH_ITEM_PHOTOS_ERROR,
} from '../actions/index';

const initialState = {
  products: [],
  itemPhotos: [],
  getProductsStatus: requestStatus.ready,
  getItemPhotosStatus: requestStatus.ready,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, getProductsStatus: requestStatus.loading };
    case FETCH_PRODUCTS_SUCCESS:
      const newState = action.payload;
      return {
        ...state,
        products: newState,
        getProductsStatus: requestStatus.success,
      };
    case FETCH_PRODUCTS_ERROR:
      return { ...state, getProductsStatus: requestStatus.error };
    case FETCH_ITEM_PHOTOS_START:
      return { ...state, getItemPhotosStatus: requestStatus.loading };
    case FETCH_ITEM_PHOTOS_SUCCESS:
      return {
        ...state,
        itemPhotos: action.payload,
        getItemPhotosStatus: requestStatus.success,
      };
    case FETCH_ITEM_PHOTOS_ERROR:
      return { ...state, getItemPhotosStatus: requestStatus.error };

    default:
      return state;
  }
};

export default productsReducer;
