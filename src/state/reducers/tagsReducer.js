import { requestStatus } from '../types/index'
import {
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_ERROR,
} from '../actions/index'

const initialState = {
  tags: [],
  getTagsStatus: requestStatus.ready,
}

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAGS_START:
      return { ...state, getTagsStatus: requestStatus.loading }
    case FETCH_TAGS_SUCCESS:
      const newState = action.payload
      return { tags: newState, getTagsStatus: requestStatus.success }
    case FETCH_TAGS_ERROR:
      return { ...state, getTagsStatus: requestStatus.error }

    default:
      return state
  }
}

export default tagsReducer
