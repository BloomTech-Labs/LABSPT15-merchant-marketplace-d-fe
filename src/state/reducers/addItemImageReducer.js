import { requestStatus } from '../types/index';
import {
  ADD_ITEM_IMAGE_START,
  ADD_ITEM_IMAGE_SUCCESS,
  ADD_ITEM_IMAGE_ERROR,
} from '../actions/index';

const initialState = {
  newItemImage: {},
  getAddItemImageStatus: requestStatus.ready,
};

const addItemImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_IMAGE_START:
      return { ...state, getAddItemImageStatus: requestStatus.loading };
    case ADD_ITEM_IMAGE_SUCCESS:
      console.log(action.payload);
      return {
        newItemImage: action.payload,
        getAddItemImageStatus: requestStatus.loading,
      };
    case ADD_ITEM_IMAGE_ERROR:
      return { ...state, getAddItemImageStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addItemImageReducer;
