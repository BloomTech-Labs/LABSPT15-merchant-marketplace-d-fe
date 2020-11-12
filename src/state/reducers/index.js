import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import addProductRedcuer from './addProductReducer';

const reducers = combineReducers({
  products: productsReducer,
  addProduct: addProductRedcuer,
});

export default reducers;
