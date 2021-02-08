import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductReducer from './addProductReducer';
import addItemImageReducer from './addItemImageReducer';
import sellerInfoReducer from './sellerInfoReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductReducer,
  addItemImage: addItemImageReducer,
  sellerInfo: sellerInfoReducer,
});

export default reducers;
