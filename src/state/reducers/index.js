import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import addProductReducer from './addProductReducer'
import addItemImageReducer from './addItemImageReducer'
import tagsReducer from './tagsReducer'

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  addItemImage: addItemImageReducer,
  tags: tagsReducer,
})

export default reducers
