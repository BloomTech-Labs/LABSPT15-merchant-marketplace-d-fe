import { requestStatus } from "../types/index";
import {
  ADD_ITEM_TAG_START,
  ADD_ITEM_TAG_SUCCESS,
  ADD_ITEM_TAG_ERROR
} from "../actions/index";

const initialState = {
  newItemTag: {},
  getAddItemTagStatus: requestStatus.ready
};

const addItemTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TAG_START:
      return { ...state, getAddItemTagStatus: requestStatus.loading };
    case ADD_ITEM_TAG_SUCCESS:
      console.log(action.payload);
      return {
        newItemTag: action.payload,
        getAddItemTagStatus: requestStatus.loading
      };
    case ADD_ITEM_TAG_ERROR:
      return { ...state, getAddItemTagStatus: requestStatus.error };
    default:
      return state;
  }
};

export default addItemTagReducer;
