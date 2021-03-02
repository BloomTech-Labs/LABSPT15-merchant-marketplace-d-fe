import { requestStatus } from '../types/index';
import {
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_ERROR,
  ADD_TAGS_START,
  ADD_TAGS_SUCCESS,
  ADD_TAGS_ERROR,
} from '../actions/index';

const initialState = {
  allTags: [],
  getTagsStatus: requestStatus.ready,
  addTagStatus: requestStatus.ready,
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_START:
      return { ...state, getTagsStatus: requestStatus.loading };
    case FETCH_TAGS_SUCCESS:
      const newState = action.payload;
      return { allTags: newState, getTagsStatus: requestStatus.success };
    case FETCH_TAGS_ERROR:
      return { ...state, getTagsStatus: requestStatus.error };
    case ADD_TAGS_START:
      return { ...state, addTagStatus: requestStatus.loading };
    case ADD_TAGS_SUCCESS:
      console.log(action.payload);
      return {
        allTags: [...state.allTags, action.payload.data[0]],
        addTagStatus: requestStatus.loading,
      };
    case ADD_TAGS_ERROR:
      return { ...state, addTagStatus: requestStatus.error };
    default:
      return state;
  }
};

export default tagsReducer;
